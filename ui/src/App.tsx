import Background from "@/components/Background";
import Chatbot from "@/components/Chatbot";
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
      <Chatbot />
    </div>
  );
}
