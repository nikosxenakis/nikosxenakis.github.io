import { useEffect, useRef, useState } from "react";
import { sections } from "@/sections";
import "@/assets/styles/sectionNav.css";

const SectionNav = () => {
  const [activeId, setActiveId] = useState(sections[0].id);
  const ratios = useRef<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.current[entry.target.id] = entry.intersectionRatio;
        }

        // Entries only report what changed, so compare against every known
        // ratio and treat the most visible section as the current one.
        let bestId: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of Object.entries(ratios.current)) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId) {
          setActiveId(bestId);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="section-nav" aria-label="Section navigation">
      <ul>
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`section-nav-dot ${isActive ? "active" : ""}`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="section-nav-label">{section.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SectionNav;
