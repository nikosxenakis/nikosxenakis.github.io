import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Projects from "./Projects";
import type Project from "@/types/Project";

const publicProject: Project = {
  name: "Public Thing",
  date: "2024",
  githubUrl: "https://github.com/example/public-thing",
  url: "https://example.com",
  imageUrl: "/img.png",
  description: "A public project.",
  technologies: "React",
};

const privateProject: Project = {
  name: "Private Thing",
  date: "2023",
  githubUrl: "https://github.com/example/private-thing",
  isPrivate: true,
  imageUrl: "/img.png",
  description: "A private project.",
  technologies: "React",
};

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
  ] satisfies Project[],
}));

function cardFor(name: string) {
  return screen.getByRole("heading", { name }).closest(".project-card") as HTMLElement;
}

describe("Projects", () => {
  it("links to GitHub for a public project", () => {
    render(<Projects />);

    const link = within(cardFor(publicProject.name)).getByRole("link", { name: "GitHub" });
    expect(link).toHaveAttribute("href", publicProject.githubUrl);
  });

  /**
   * A private repo returns 404 to anonymous visitors, so the icon was only ever
   * a broken link.
   */
  it("hides the GitHub link for a private project", () => {
    render(<Projects />);

    expect(
      within(cardFor(privateProject.name)).queryByRole("link", { name: "GitHub" })
    ).toBeNull();
  });

  it("still shows the website link alongside a hidden GitHub link", () => {
    render(<Projects />);

    expect(within(cardFor(publicProject.name)).getByRole("link", { name: "Website" })).toHaveAttribute(
      "href",
      publicProject.url
    );
  });

  it("hides the carousel arrows when every card already fits", () => {
    render(<Projects />);
    // jsdom reports scrollWidth === clientWidth, i.e. nothing overflows.
    expect(screen.queryByRole("button", { name: /scroll projects/i })).toBeNull();
  });

  it("shows the carousel arrows once the cards overflow", async () => {
    const { container } = render(<Projects />);
    const scroller = container.querySelector(".projects-scroller") as HTMLElement;

    Object.defineProperty(scroller, "scrollWidth", { value: 2000, configurable: true });
    Object.defineProperty(scroller, "clientWidth", { value: 800, configurable: true });
    scroller.dispatchEvent(new Event("scroll"));

    expect(await screen.findByRole("button", { name: "Scroll projects right" })).toBeVisible();
  });

  it("gives every project image the same box", () => {
    const { container } = render(<Projects />);
    const images = [...container.querySelectorAll("img.project-image")];

    expect(images).toHaveLength(2);
    images.forEach((img) => {
      expect(img).toHaveAttribute("width", "320");
      expect(img).toHaveAttribute("height", "180");
      expect(img).toHaveAttribute("loading", "lazy");
    });
  });
});
