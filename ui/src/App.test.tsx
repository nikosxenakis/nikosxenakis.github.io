import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { sections } from "./sections";

describe("App document structure", () => {
  /**
   * Search engines and screen readers both rely on a single top-level heading.
   * The name used to be an h2 with no h1 anywhere on the page.
   */
  it("has exactly one h1", () => {
    const { container } = render(<App />);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
  });

  it("uses the person's name as the h1", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Nikolaos Xenakis");
  });

  it("never skips a heading level", () => {
    const { container } = render(<App />);
    const levels = [...container.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) =>
      Number(h.tagName[1])
    );

    levels.forEach((level, i) => {
      if (i === 0) {
        expect(level).toBe(1);
        return;
      }
      expect(level - levels[i - 1]).toBeLessThanOrEqual(1);
    });
  });

  it("renders every registered section with an id the nav can link to", () => {
    const { container } = render(<App />);

    for (const section of sections) {
      expect(container.querySelector(`section#${section.id}`)).not.toBeNull();
    }
  });

  it("labels each section landmark", () => {
    render(<App />);

    for (const section of sections) {
      expect(screen.getByRole("region", { name: section.label })).toBeInTheDocument();
    }
  });
});
