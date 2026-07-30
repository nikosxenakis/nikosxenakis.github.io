import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { sections } from "./sections";

describe("App document structure", () => {
  it("has exactly one h1 and never skips a heading level", () => {
    const { container } = render(<App />);

    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Nikolaos Xenakis");

    const levels = [...container.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) =>
      Number(h.tagName[1])
    );
    levels.forEach((level, i) => {
      expect(i === 0 ? level : level - levels[i - 1]).toBeLessThanOrEqual(1);
    });
  });

  it("renders every section with an id its nav link points at", () => {
    const { container } = render(<App />);

    for (const section of sections) {
      expect(container.querySelector(`section#${section.id}`)).not.toBeNull();
      expect(screen.getByRole("link", { name: section.label })).toHaveAttribute(
        "href",
        `#${section.id}`
      );
    }
  });

  // The entry animation drives transform, which would override an inline
  // rotation, so each word passes its angle as a custom property instead.
  it("keeps intro word rotation out of inline transform", () => {
    const { container } = render(<App />);

    container.querySelectorAll<HTMLElement>(".introWord").forEach((word) => {
      expect(word.style.getPropertyValue("--word-rotate")).toMatch(/^-?\d+deg$/);
      expect(word.style.transform).toBe("");
    });
  });
});
