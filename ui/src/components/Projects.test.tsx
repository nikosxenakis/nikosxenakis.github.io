import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Projects from "./Projects";

vi.mock("@/data/data", () => ({
  projects: [
    {
      name: "Public Thing",
      date: "2024",
      githubUrl: "https://github.com/example/public-thing",
      url: "https://example.com",
      imageUrl: "/img.png",
      description: "A public project.",
      technologies: "React",
    },
    {
      name: "Private Thing",
      date: "2023",
      githubUrl: "https://github.com/example/private-thing",
      isPrivate: true,
      imageUrl: "/img.png",
      description: "A private project.",
      technologies: "React",
    },
  ],
}));

const cardFor = (name: string) =>
  screen.getByRole("heading", { name }).closest(".project-card") as HTMLElement;

describe("Projects", () => {
  // A private repo 404s for visitors, so the icon was only ever a broken link.
  it("links to GitHub only for public projects", () => {
    render(<Projects />);

    expect(within(cardFor("Public Thing")).getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/example/public-thing"
    );
    expect(within(cardFor("Private Thing")).queryByRole("link", { name: "GitHub" })).toBeNull();
  });

  it("hides the carousel arrows when every card already fits", () => {
    render(<Projects />);
    expect(screen.queryByRole("button", { name: /scroll projects/i })).toBeNull();
  });

  // Touch already pans natively with momentum; moving scrollLeft by hand as
  // well makes the two fight, which reads as jitter on a phone.
  it("drags to scroll with a mouse but leaves touch to the browser", () => {
    const { container } = render(<Projects />);
    const scroller = container.querySelector(".projects-scroller") as HTMLElement;

    const drag = (pointerType: string) => {
      scroller.scrollLeft = 0;
      fireEvent.pointerDown(scroller, { pointerType, clientX: 300 });
      fireEvent.pointerMove(scroller, { pointerType, clientX: 100 });
      fireEvent.pointerUp(scroller, { pointerType, clientX: 100 });
      return scroller.scrollLeft;
    };

    expect(drag("touch")).toBe(0);
    expect(drag("mouse")).toBe(200);
  });

  it("shows the carousel arrows once the cards overflow", async () => {
    const { container } = render(<Projects />);
    const scroller = container.querySelector(".projects-scroller") as HTMLElement;

    Object.defineProperty(scroller, "scrollWidth", { value: 2000, configurable: true });
    Object.defineProperty(scroller, "clientWidth", { value: 800, configurable: true });
    scroller.dispatchEvent(new Event("scroll"));

    expect(await screen.findByRole("button", { name: "Scroll projects right" })).toBeVisible();
  });
});
