import type { ComponentType } from "react";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export type Section = {
  /** Doubles as the DOM id, so `#id` deep links work. */
  id: string;
  label: string;
  Component: ComponentType;
};

/**
 * Single source of truth for the page's sections. App renders them in order and
 * SectionNav builds its dots from the same list, so the two cannot drift apart.
 */
export const sections: Section[] = [
  { id: "intro", label: "Intro", Component: Intro },
  { id: "experience", label: "Work experience", Component: Experience },
  { id: "education", label: "Education", Component: Education },
  { id: "projects", label: "Projects", Component: Projects },
  { id: "skills", label: "Languages and interests", Component: Skills },
];
