import { describe, expect, it } from "vitest";
import { extractReply, MIN_USABLE_REPLY_LENGTH, type GeminiResponse } from "./_reply";

const candidate = (text: string, finishReason = "STOP"): GeminiResponse => ({
  candidates: [{ content: { parts: [{ text }] }, finishReason }],
});

describe("extractReply", () => {
  it("returns a complete answer, however short", () => {
    expect(extractReply(candidate("Yes, I speak German.")).reply).toBe("Yes, I speak German.");
  });

  // A 150-token budget was consumed by the model's own thinking, leaving this.
  it("discards a fragment left by a truncated response", () => {
    const result = extractReply(candidate("Well, I'", "MAX_TOKENS"));

    expect(result.truncated).toBe(true);
    expect(result.reply).toBe("");
  });

  it("keeps a long answer that was cut off at the end", () => {
    const long = "a".repeat(MIN_USABLE_REPLY_LENGTH + 10);
    expect(extractReply(candidate(long, "MAX_TOKENS")).reply).toBe(long);
  });

  it("returns nothing usable for an empty or malformed envelope", () => {
    expect(extractReply({}).reply).toBe("");
    expect(extractReply({ candidates: [{ content: {} }] }).reply).toBe("");
    expect(extractReply(candidate("   ")).reply).toBe("");
  });
});
