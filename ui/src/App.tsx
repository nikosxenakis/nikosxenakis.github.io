import Background from "@/components/Background";
import SectionNav from "@/components/SectionNav";
import { sections } from "@/sections";

export default function App() {
  return (
    <div className="scroll-container">
      <Background />
      {sections.map(({ id, label, Component }) => (
        <section key={id} className="scroll-section" id={id} aria-label={label}>
          <Component />
        </section>
      ))}
      <SectionNav />
    </div>
  );
}
