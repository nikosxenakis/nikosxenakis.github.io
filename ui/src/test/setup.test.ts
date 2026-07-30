import { describe, expect, it } from "vitest";

// CI once had a localStorage that existed but had no working methods, which a
// truthiness guard in the setup skipped straight past.
describe("test environment", () => {
  it("provides a working localStorage", () => {
    localStorage.setItem("probe", "value");

    expect(localStorage.getItem("probe")).toBe("value");
    expect(typeof localStorage.clear).toBe("function");
    expect(window.localStorage).toBe(globalThis.localStorage);
  });
});
