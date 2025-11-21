import Background from "@/components/Background";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
// import Projects from "@/components/Projects";

export default function App() {
  return (
    <div>
      <Background />
      <div>
        <Intro />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
