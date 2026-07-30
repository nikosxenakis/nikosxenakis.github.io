import { describe, expect, it } from "vitest";
import {
  MAX_HISTORY_MESSAGE_LENGTH,
  MAX_HISTORY_MESSAGES,
  sanitiseHistory,
} from "./_validation";

describe("sanitiseHistory", () => {
  const message = (text: string) => ({ text, sender: "user" as const });

  it("returns an empty history for anything that is not an array", () => {
    expect(sanitiseHistory(undefined)).toEqual([]);
    expect(sanitiseHistory(null)).toEqual([]);
    expect(sanitiseHistory("not an array")).toEqual([]);
    expect(sanitiseHistory({ text: "hi", sender: "user" })).toEqual([]);
  });

  it("keeps well-formed messages unchanged", () => {
    const history = [
      { text: "Where did you study?", sender: "user" },
      { text: "Edinburgh and Crete.", sender: "bot" },
    ];
    expect(sanitiseHistory(history)).toEqual(history);
  });

  it("drops entries that are not valid chat messages", () => {
    const result = sanitiseHistory([
      message("keep me"),
      { text: "no sender" },
      { sender: "user" },
      { text: 42, sender: "user" },
      { text: "wrong sender", sender: "system" },
      null,
      "a string",
    ]);

    expect(result).toEqual([{ text: "keep me", sender: "user" }]);
  });

  it("keeps only the most recent turns", () => {
    const history = Array.from({ length: MAX_HISTORY_MESSAGES + 5 }, (_, i) =>
      message(`message ${i}`)
    );

    const result = sanitiseHistory(history);

    expect(result).toHaveLength(MAX_HISTORY_MESSAGES);
    // The trailing window is what gets kept, so the last message survives.
    expect(result.at(-1)?.text).toBe(`message ${MAX_HISTORY_MESSAGES + 4}`);
    expect(result[0].text).toBe("message 5");
  });

  it("truncates an oversized message rather than forwarding it", () => {
    const result = sanitiseHistory([message("x".repeat(50_000))]);
    expect(result[0].text).toHaveLength(MAX_HISTORY_MESSAGE_LENGTH);
  });

  it("caps total forwarded size even for a hostile payload", () => {
    const hostile = Array.from({ length: 1000 }, () => message("y".repeat(10_000)));
    const result = sanitiseHistory(hostile);

    const totalLength = result.reduce((sum, m) => sum + m.text.length, 0);
    expect(totalLength).toBeLessThanOrEqual(MAX_HISTORY_MESSAGES * MAX_HISTORY_MESSAGE_LENGTH);
  });
});
