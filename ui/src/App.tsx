import { useRef, useEffect } from "react";
import Background from "@/components/Background";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
// import Projects from "@/components/Projects";

export default function App() {
  const introRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  // const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const sections: (HTMLDivElement | null)[] = [
        introRef.current,
        experienceRef.current,
        educationRef.current,
        // projectsRef.current,
      ].filter((section): section is HTMLDivElement | null => section !== undefined);
      const currentSection = sections.find(
        (section) =>
          section &&
          section.getBoundingClientRect().top <= window.innerHeight / 2 &&
          section.getBoundingClientRect().bottom >= window.innerHeight / 2
      );
      const currentIdx = sections.indexOf(currentSection ? currentSection : null);

      if (e.deltaY > 0 && currentIdx < sections.length - 1) {
        sections[currentIdx + 1]?.scrollIntoView({ behavior: "smooth" });
        e.preventDefault();
      } else if (e.deltaY < 0 && currentIdx > 0) {
        sections[currentIdx - 1]?.scrollIntoView({ behavior: "smooth" });
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <Background />
      <div ref={introRef}>
        <Intro />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
    </>
  );
}
