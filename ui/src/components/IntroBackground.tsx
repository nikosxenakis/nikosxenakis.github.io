import React from "react";
import "@/assets/styles/introBackground.css";

const IntroBackground = () => {
  const backgroundWords = [
    { text: "TypeScript", top: "6%", left: "8%", rotate: -12 },
    { text: "React", top: "22%", left: "78%", rotate: 14 },
    { text: "Spring Boot", top: "12%", left: "52%", rotate: -6 },
    { text: "GraphQL", top: "38%", left: "6%", rotate: 8 },
    { text: "Docker", top: "44%", left: "72%", rotate: -10 },
    { text: "Kubernetes", top: "65%", left: "12%", rotate: 16 },
    { text: "Node.js", top: "74%", left: "56%", rotate: -8 },
    { text: "AWS", top: "28%", left: "32%", rotate: 10 },
    { text: "CI/CD", top: "60%", left: "82%", rotate: -14 },
  ];

  return (
    <div className="introBackgroundWords" aria-hidden="true">
      {backgroundWords.map((word, index) => (
        <span
          key={`${word.text}-${index}`}
          className="introWord"
          style={{
            top: word.top,
            left: word.left,
            transform: `rotate(${word.rotate}deg)`,
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
};

export default IntroBackground;
