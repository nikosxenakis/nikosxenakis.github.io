import { beforeEach, describe, expect, it } from "vitest";
import {
  checkRateLimit,
  getClientKey,
  MAX_REQUESTS_PER_WINDOW,
  resetRateLimiter,
  WINDOW_MS,
} from "./_rateLimit";

const now = 1_700_000_000_000;

const exhaust = (key: string) => {
  for (let i = 0; i < MAX_REQUESTS_PER_WINDOW; i++) {
    checkRateLimit(key, now);
  }
};

beforeEach(() => {
  resetRateLimiter();
});

describe("checkRateLimit", () => {
  it("allows up to the limit, then blocks", () => {
    exhaust("1.2.3.4");

    const result = checkRateLimit("1.2.3.4", now);
    expect(result.allowed).toBe(false);
    expect(result.retryAfterSeconds).toBeGreaterThan(0);
  });

  it("counts each client separately", () => {
    exhaust("1.2.3.4");

    expect(checkRateLimit("1.2.3.4", now).allowed).toBe(false);
    expect(checkRateLimit("5.6.7.8", now).allowed).toBe(true);
  });

  it("lets the window slide", () => {
    exhaust("1.2.3.4");

    expect(checkRateLimit("1.2.3.4", now + WINDOW_MS + 1).allowed).toBe(true);
  });
});

describe("getClientKey", () => {
  it("takes the first address from x-forwarded-for", () => {
    expect(getClientKey({ "x-forwarded-for": "1.2.3.4, 10.0.0.1" })).toBe("1.2.3.4");
  });

  it("does not let a missing address share a bucket with a real one", () => {
    expect(getClientKey({})).toBe("unknown");
    expect(getClientKey({})).not.toBe(getClientKey({ "x-forwarded-for": "1.2.3.4" }));
  });
});
