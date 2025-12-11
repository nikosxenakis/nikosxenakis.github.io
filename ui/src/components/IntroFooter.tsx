import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Typography from "@mui/material/Typography";
import { email, location, gitHub, linkedIn, stackOverflow } from "@/data/data";
import "@/assets/styles/introFooter.css";
import Chatbot from "./Chatbot";

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
        <img
          src="/assets/images/icons/github.png"
          className="icon-social-media"
          onClick={() => window.open(gitHub.link, "_blank")}
        />
        <img
          src="/assets/images/icons/linkedin2.png"
          className="icon-social-media"
          onClick={() => window.open(linkedIn.link, "_blank")}
        />
        <img
          src="/assets/images/icons/stackoverflow.png"
          className="icon-social-media"
          onClick={() => window.open(stackOverflow.link, "_blank")}
        />
        <Chatbot />
      </div>
    </>
  );
};

export default IntroFooter;
