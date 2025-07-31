import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import {
  name,
  title,
  email,
  location,
  languages,
  gitHub,
  linkedIn,
  stackOverflow,
} from "@/data/data";

import Typography from "@mui/material/Typography";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import React from "react";

const Intro = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const languagesLocal = languages.map((lang) => ({
    ...lang,
    icon: (
      <img
        src={`/assets/images/flags/${lang.name.toLowerCase()}.png`}
        alt={lang.name}
        style={{ width: "24px" }}
      />
    ),
  }));

  return (
    <div className="section section-bottom-border" style={{ position: "relative" }}>
      <div className="introTab">
        <a href={email.link} className="introTabItem">
          <MdEmail />
          <Typography variant="body2" component="span">
            {email.short}
          </Typography>
        </a>
        <a
          href="https://www.google.com/maps?q=Zürich"
          target="_blank"
          rel="noopener noreferrer"
          className="introTabItem"
        >
          <FaLocationDot />
          <Typography variant="body2" component="span">
            {location}
          </Typography>
        </a>
      </div>
      <SpeedDial
        ariaLabel="Languages"
        direction="down"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          "& .MuiFab-primary": {
            backgroundColor: "#403a45", // custom background color
            color: "#fff",
          },
        }}
        icon={<IoLanguage />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {languagesLocal.map((language) => (
          <SpeedDialAction
            key={language.name}
            title={language.level}
            icon={language.icon}
            onClick={handleClose}
            sx={{
              backgroundColor: "#403a45",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#6b6175",
              },
            }}
          />
        ))}
      </SpeedDial>
      <div
        style={{
          textAlign: "center",
          padding: "2vw",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Typography variant="h1" component="h1" style={{ marginBottom: "1rem" }}>
          {name}
        </Typography>
        <Typography variant="h4" component="h4">
          {title}
        </Typography>
      </div>
      <div className="icon-row-bounce">
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
      </div>
    </div>
  );
};

export default Intro;
