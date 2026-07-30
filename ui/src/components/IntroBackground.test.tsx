import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IntroBackground from "./IntroBackground";

describe("IntroBackground", () => {
  it("renders the technology words", () => {
    const { container } = render(<IntroBackground />);
    expect(container.querySelectorAll(".introWord").length).toBeGreaterThan(0);
  });

  /**
   * The entry animation drives `transform`, and a keyframe overrides inline
   * styles. Passing the rotation as a custom property is what stops the
   * animation from flattening every word to 0deg.
   */
  it("passes rotation as a custom property, not an inline transform", () => {
    const { container } = render(<IntroBackground />);

    container.querySelectorAll<HTMLElement>(".introWord").forEach((word) => {
      expect(word.style.getPropertyValue("--word-rotate")).toMatch(/^-?\d+deg$/);
      expect(word.style.transform).toBe("");
    });
  });

  it("staggers the words so they do not all animate at once", () => {
    const { container } = render(<IntroBackground />);
    const delays = [...container.querySelectorAll<HTMLElement>(".introWord")].map((word) =>
      word.style.getPropertyValue("--word-delay")
    );

    expect(delays[0]).toBe("0ms");
    expect(new Set(delays).size).toBe(delays.length);
  });
});
