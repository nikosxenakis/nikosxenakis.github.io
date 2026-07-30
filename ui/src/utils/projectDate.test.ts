import { describe, expect, it } from "vitest";
import { byDateDesc, parseProjectDate } from "./projectDate";

describe("parseProjectDate", () => {
  it("reads the year from a range", () => {
    expect(parseProjectDate("2024 - Present")).toBe(Date.parse("2024"));
  });

  it("uses the start of a range, not the end", () => {
    expect(parseProjectDate("2015 - 2016")).toBe(Date.parse("2015"));
  });

  /**
   * Regression test. The fallback pattern used to be written as a regex literal
   * containing `\\d`, which matches a literal backslash followed by "d" and so
   * never matched a year at all.
   */
  it("falls back to a bare year when Date.parse rejects the string", () => {
    expect(parseProjectDate("Q3/2021")).toBe(Date.parse("2021-01-01"));
    expect(parseProjectDate("released ~1998!")).toBe(Date.parse("1998-01-01"));
  });

  it("returns 0 when there is no year to find", () => {
    expect(parseProjectDate("unknown")).toBe(0);
    expect(parseProjectDate("")).toBe(0);
  });

  /**
   * Documents a quirk rather than a requirement: Date.parse is lenient enough
   * to read a bare four-digit number as a year, so the regex fallback is only
   * reached for strings it rejects outright.
   */
  it("leans on Date.parse before the fallback, quirks included", () => {
    expect(parseProjectDate("1234")).toBe(Date.parse("1234"));
  });
});

describe("byDateDesc", () => {
  it("sorts newest first", () => {
    const sorted = [
      { date: "2016" },
      { date: "2024 - Present" },
      { date: "Q3/2021" },
      { date: "2015 - 2016" },
    ].sort(byDateDesc);

    expect(sorted.map((p) => p.date)).toEqual([
      "2024 - Present",
      "Q3/2021",
      "2016",
      "2015 - 2016",
    ]);
  });

  it("pushes unparseable dates to the end", () => {
    const sorted = [{ date: "unknown" }, { date: "2020" }].sort(byDateDesc);
    expect(sorted[0].date).toBe("2020");
  });
});
