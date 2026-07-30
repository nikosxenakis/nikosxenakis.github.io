import { describe, expect, it } from "vitest";
import { byDateDesc, parseProjectDate } from "./projectDate";

describe("parseProjectDate", () => {
  it("uses the start of a range", () => {
    expect(parseProjectDate("2015 - 2016")).toBe(Date.parse("2015"));
  });

  // The fallback was once written as /(20\\d{2})/, which matches a literal
  // backslash and so never fired.
  it("falls back to a bare year when Date.parse rejects the string", () => {
    expect(parseProjectDate("Q3/2021")).toBe(Date.parse("2021-01-01"));
    expect(parseProjectDate("unknown")).toBe(0);
  });
});

describe("byDateDesc", () => {
  it("sorts newest first and pushes unparseable dates last", () => {
    const sorted = [{ date: "2016" }, { date: "unknown" }, { date: "2024 - Present" }].sort(
      byDateDesc
    );

    expect(sorted.map((p) => p.date)).toEqual(["2024 - Present", "2016", "unknown"]);
  });
});
