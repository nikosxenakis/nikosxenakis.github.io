import { describe, expect, it } from "vitest";
import {
  MAX_HISTORY_MESSAGE_LENGTH,
  MAX_HISTORY_MESSAGES,
  sanitiseHistory,
} from "./_validation";

describe("sanitiseHistory", () => {
  it("returns an empty history for anything that is not an array", () => {
    expect(sanitiseHistory(undefined)).toEqual([]);
    expect(sanitiseHistory("not an array")).toEqual([]);
  });

  it("drops entries that are not valid chat messages", () => {
    const result = sanitiseHistory([
      { text: "keep me", sender: "user" },
      { text: "no sender" },
      { text: 42, sender: "user" },
      { text: "wrong sender", sender: "system" },
      null,
    ]);

    expect(result).toEqual([{ text: "keep me", sender: "user" }]);
  });

  it("caps total forwarded size for a hostile payload", () => {
    const hostile = Array.from({ length: 1000 }, () => ({
      text: "y".repeat(10_000),
      sender: "user" as const,
    }));

    const result = sanitiseHistory(hostile);
    const total = result.reduce((sum, m) => sum + m.text.length, 0);

    expect(result).toHaveLength(MAX_HISTORY_MESSAGES);
    expect(total).toBeLessThanOrEqual(MAX_HISTORY_MESSAGES * MAX_HISTORY_MESSAGE_LENGTH);
  });
});
