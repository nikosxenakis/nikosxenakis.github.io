import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Typography from "@mui/material/Typography";
import { email, location, gitHub, linkedIn, stackOverflow } from "@/data/data";
import "@/assets/styles/introFooter.css";
import Chatbot from "./Chatbot";

const socialLinks = [
  { label: "GitHub", href: gitHub.link, icon: "github.png" },
  { label: "LinkedIn", href: linkedIn.link, icon: "linkedin2.png" },
  { label: "Stack Overflow", href: stackOverflow.link, icon: "stackoverflow.png" },
];

const IntroFooter = () => {
  return (
    <>
      <div className="introFooter">
        <a href={email.link} className="introFooterItem">
          <MdEmail />
          <Typography variant="body2" component="span">
            {email.short}
          </Typography>
        </a>
        <a
          href={`https://www.google.com/maps?q=${encodeURIComponent(location)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="introFooterItem"
        >
          <FaLocationDot />
          <Typography variant="body2" component="span">
            {location}
          </Typography>
        </a>
      </div>
      <div className="socialMediaIconsRow">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={social.label}
          >
            {/* Decorative: the accessible name comes from the link's aria-label. */}
            <img
              src={`/assets/images/icons/${social.icon}`}
              className="icon-social-media"
              alt=""
              width={42}
              height={42}
              decoding="async"
            />
          </a>
        ))}
        <Chatbot />
      </div>
    </>
  );
};

export default IntroFooter;
