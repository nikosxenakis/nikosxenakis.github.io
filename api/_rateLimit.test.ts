import { beforeEach, describe, expect, it } from "vitest";
import {
  checkRateLimit,
  getClientKey,
  MAX_REQUESTS_PER_WINDOW,
  resetRateLimiter,
  WINDOW_MS,
} from "./_rateLimit";

beforeEach(() => {
  resetRateLimiter();
});

describe("checkRateLimit", () => {
  const now = 1_700_000_000_000;

  it("allows requests up to the limit", () => {
    for (let i = 0; i < MAX_REQUESTS_PER_WINDOW; i++) {
      expect(checkRateLimit("1.2.3.4", now).allowed).toBe(true);
    }
  });

  it("blocks the request after the limit is reached", () => {
    for (let i = 0; i < MAX_REQUESTS_PER_WINDOW; i++) {
      checkRateLimit("1.2.3.4", now);
    }

    const result = checkRateLimit("1.2.3.4", now);
    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
    expect(result.retryAfterSeconds).toBeGreaterThan(0);
  });

  it("counts each client separately", () => {
    for (let i = 0; i < MAX_REQUESTS_PER_WINDOW; i++) {
      checkRateLimit("1.2.3.4", now);
    }

    expect(checkRateLimit("1.2.3.4", now).allowed).toBe(false);
    expect(checkRateLimit("5.6.7.8", now).allowed).toBe(true);
  });

  it("lets the window slide, so old requests stop counting", () => {
    for (let i = 0; i < MAX_REQUESTS_PER_WINDOW; i++) {
      checkRateLimit("1.2.3.4", now);
    }
    expect(checkRateLimit("1.2.3.4", now).allowed).toBe(false);

    // One millisecond past the window, every earlier hit has aged out.
    expect(checkRateLimit("1.2.3.4", now + WINDOW_MS + 1).allowed).toBe(true);
  });

  it("reports how long to wait before retrying", () => {
    for (let i = 0; i < MAX_REQUESTS_PER_WINDOW; i++) {
      checkRateLimit("1.2.3.4", now);
    }

    const halfway = now + WINDOW_MS / 2;
    const result = checkRateLimit("1.2.3.4", halfway);
    expect(result.retryAfterSeconds).toBe(Math.ceil(WINDOW_MS / 2 / 1000));
  });

  it("counts down the remaining allowance", () => {
    expect(checkRateLimit("1.2.3.4", now).remaining).toBe(MAX_REQUESTS_PER_WINDOW - 1);
    expect(checkRateLimit("1.2.3.4", now).remaining).toBe(MAX_REQUESTS_PER_WINDOW - 2);
  });
});

describe("getClientKey", () => {
  it("takes the first address from x-forwarded-for", () => {
    expect(getClientKey({ "x-forwarded-for": "1.2.3.4, 10.0.0.1, 10.0.0.2" })).toBe("1.2.3.4");
  });

  it("handles a header delivered as an array", () => {
    expect(getClientKey({ "x-forwarded-for": ["9.9.9.9", "8.8.8.8"] })).toBe("9.9.9.9");
  });

  it("falls back to x-real-ip", () => {
    expect(getClientKey({ "x-real-ip": "4.4.4.4" })).toBe("4.4.4.4");
  });

  it("returns a stable placeholder when no address is present", () => {
    expect(getClientKey({})).toBe("unknown");
    expect(getClientKey({ "x-forwarded-for": "" })).toBe("unknown");
  });

  it("does not let a missing address share a bucket with a real one", () => {
    expect(getClientKey({})).not.toBe(getClientKey({ "x-forwarded-for": "1.2.3.4" }));
  });
});
