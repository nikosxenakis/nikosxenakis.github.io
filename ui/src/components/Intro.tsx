import React from "react";
import Typography from "@mui/material/Typography";
import { name, title, summary } from "@/data/data";
import IntroBackground from "./IntroBackground";
import IntroFooter from "./IntroFooter";
import "@/assets/styles/intro.css";

const Intro = () => {
  const [floatingEmojis, setFloatingEmojis] = React.useState<
    { id: number; emoji: string; left: number; duration: number }[]
  >([]);
  const floatingId = React.useRef(0);

  const launchEmojis = () => {
    const greetings = ["👋", "🎈", "🙌", "✨"];
    const burst = Array.from({ length: 1 }).map(() => ({
      id: floatingId.current++,
      emoji: greetings[Math.floor(Math.random() * greetings.length)],
      left: 20 + Math.random() * 60,
      duration: 1.4 + Math.random() * 0.5,
    }));

    setFloatingEmojis((prev) => [...prev, ...burst]);
    burst.forEach((item) => {
      setTimeout(() => {
        setFloatingEmojis((prev) => prev.filter((e) => e.id !== item.id));
      }, (item.duration + 0.2) * 1000);
    });
  };

  return (
    <div className="introSection">
      <IntroBackground />

      <div className="introRow">
        <div onMouseEnter={launchEmojis} onClick={launchEmojis}>
          <img src="/assets/images/avatar.png" alt={name} className="intro-avatar" />
          <div className="floating-emoji-container">
            {floatingEmojis.map((item) => (
              <span
                key={item.id}
                className="floating-emoji"
                style={{ left: `${item.left}%`, animationDuration: `${item.duration}s` }}
              >
                {item.emoji}
              </span>
            ))}
          </div>
        </div>
        <Typography variant="h2" component="h2">
          {name}
        </Typography>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        <Typography variant="body1" component="p" className="summary">
          {summary}
        </Typography>
      </div>

      <IntroFooter />
    </div>
  );
};

export default Intro;
