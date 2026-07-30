import { describe, expect, it } from "vitest";

/**
 * Guards the test harness itself. CI once had a localStorage that was present
 * but had no working methods, which the old truthiness guard skipped over.
 */
describe("test environment", () => {
  it("provides a fully working localStorage", () => {
    expect(typeof localStorage.setItem).toBe("function");
    expect(typeof localStorage.getItem).toBe("function");
    expect(typeof localStorage.removeItem).toBe("function");
    expect(typeof localStorage.clear).toBe("function");
  });

  it("round-trips values", () => {
    localStorage.setItem("probe", "value");
    expect(localStorage.getItem("probe")).toBe("value");
    expect(localStorage.length).toBe(1);

    localStorage.removeItem("probe");
    expect(localStorage.getItem("probe")).toBeNull();
  });

  it("is the same object on window and globalThis", () => {
    expect(window.localStorage).toBe(globalThis.localStorage);
  });
});
