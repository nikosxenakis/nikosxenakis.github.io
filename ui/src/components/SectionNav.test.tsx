import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionNav from "./SectionNav";
import { sections } from "@/sections";

describe("SectionNav", () => {
  it("renders one link per section, pointing at its anchor", () => {
    render(<SectionNav />);

    for (const section of sections) {
      const link = screen.getByRole("link", { name: section.label });
      expect(link).toHaveAttribute("href", `#${section.id}`);
    }
  });

  it("exposes a labelled navigation landmark", () => {
    render(<SectionNav />);
    expect(screen.getByRole("navigation", { name: "Section navigation" })).toBeInTheDocument();
  });

  it("marks the first section active before any scrolling happens", () => {
    render(<SectionNav />);

    const first = screen.getByRole("link", { name: sections[0].label });
    expect(first).toHaveAttribute("aria-current", "true");

    const second = screen.getByRole("link", { name: sections[1].label });
    expect(second).not.toHaveAttribute("aria-current");
  });

  it("keeps every dot reachable by keyboard", () => {
    render(<SectionNav />);
    // Anchors with an href are focusable by default; a div-based dot would not be.
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(sections.length);
    links.forEach((link) => expect(link).toHaveAttribute("href"));
  });
});
