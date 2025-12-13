import { useEffect, useRef, useState } from "react";
import Background from "@/components/Background";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const containerRect = container.getBoundingClientRect();

      // Find current section - the one closest to the top of viewport
      let currentSectionIndex = 0;
      let minDistance = Infinity;

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const section = sectionRefs.current[i];
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - containerRect.top);

        if (distance < minDistance) {
          minDistance = distance;
          currentSectionIndex = i;
        }
      }

      // Only trigger if we're reasonably close to a section (within 200px threshold)
      if (minDistance > 200) {
        return; // Let natural scrolling continue if we're between sections
      }

      // Determine next section based on scroll direction
      let targetIndex = currentSectionIndex;
      if (e.deltaY > 0 && currentSectionIndex < sectionRefs.current.length - 1) {
        targetIndex = currentSectionIndex + 1;
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        targetIndex = currentSectionIndex - 1;
      }

      // Only scroll if we're changing sections
      if (targetIndex !== currentSectionIndex) {
        e.preventDefault();
        const targetSection = sectionRefs.current[targetIndex];
        if (targetSection) {
          setIsScrolling(true);
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

          if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
          scrollTimeout.current = setTimeout(() => {
            setIsScrolling(false);
          }, 800);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isScrolling]);

  return (
    <div className="scroll-container" ref={containerRef}>
      <Background />
      <div
        className="scroll-section"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <Intro />
      </div>
      <div
        className="scroll-section"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
        <Experience />
      </div>
      <div
        className="scroll-section"
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
      >
        <Education />
      </div>
      <div
        className="scroll-section"
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
      >
        <Projects />
      </div>
      <div
        className="scroll-section"
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
      >
        <Skills />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
