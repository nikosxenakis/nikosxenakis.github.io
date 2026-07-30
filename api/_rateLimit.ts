/**
 * In-memory sliding-window rate limiter.
 *
 * Vercel Fluid Compute reuses function instances across requests, so this
 * catches the case that actually matters: one client looping the endpoint.
 * It is deliberately approximate. Counters reset on a cold start and are not
 * shared between concurrent instances, so treat it as a brake on casual abuse
 * rather than a hard guarantee.
 */

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  /** Seconds until the caller may retry. Zero while the caller is allowed. */
  retryAfterSeconds: number;
};

/** Enough for a short conversation, far too few to scrape the model. */
export const WINDOW_MS = 10 * 60 * 1000;
export const MAX_REQUESTS_PER_WINDOW = 15;

/** Stops the map growing without bound if many distinct IPs show up. */
const MAX_TRACKED_CLIENTS = 5000;

const hits = new Map<string, number[]>();

/** Exported for tests; production code never needs this. */
export function resetRateLimiter() {
  hits.clear();
}

/**
 * Derives a client key from proxy headers. Vercel always sets
 * `x-forwarded-for`, whose first entry is the real client address.
 */
export function getClientKey(headers: Record<string, string | string[] | undefined>): string {
  const forwarded = headers["x-forwarded-for"];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded;

  if (raw) {
    const first = raw.split(",")[0]?.trim();
    if (first) {
      return first;
    }
  }

  const realIp = headers["x-real-ip"];
  const realIpValue = Array.isArray(realIp) ? realIp[0] : realIp;

  return realIpValue?.trim() || "unknown";
}

function prune(timestamps: number[], windowStart: number): number[] {
  // Timestamps are appended in order, so the first in-window entry
  // marks the start of the slice we need to keep.
  let index = 0;
  while (index < timestamps.length && timestamps[index] <= windowStart) {
    index++;
  }
  return index === 0 ? timestamps : timestamps.slice(index);
}

export function checkRateLimit(clientKey: string, now: number = Date.now()): RateLimitResult {
  const windowStart = now - WINDOW_MS;
  const recent = prune(hits.get(clientKey) ?? [], windowStart);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(clientKey, recent);
    const oldest = recent[0];
    const retryAfterSeconds = Math.max(1, Math.ceil((oldest + WINDOW_MS - now) / 1000));
    return { allowed: false, remaining: 0, retryAfterSeconds };
  }

  recent.push(now);
  hits.set(clientKey, recent);

  // Evict whoever is least recently active once the map gets large.
  if (hits.size > MAX_TRACKED_CLIENTS) {
    let oldestKey: string | null = null;
    let oldestSeen = Infinity;
    for (const [key, entries] of hits) {
      const last = entries[entries.length - 1] ?? 0;
      if (last < oldestSeen) {
        oldestSeen = last;
        oldestKey = key;
      }
    }
    if (oldestKey !== null && oldestKey !== clientKey) {
      hits.delete(oldestKey);
    }
  }

  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - recent.length,
    retryAfterSeconds: 0,
  };
}
