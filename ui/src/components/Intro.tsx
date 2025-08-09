import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { FcSportsMode } from "react-icons/fc";
import Typography from "@mui/material/Typography";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import {
  name,
  title,
  email,
  location,
  languages,
  gitHub,
  linkedIn,
  stackOverflow,
  interests,
} from "@/data/data";

const Intro = () => {
  const [openLanguages, setOpenLanguages] = React.useState(false);
  const handleOpenLanguages = () => setOpenLanguages(true);
  const handleCloseLanguages = () => setOpenLanguages(false);

  const [openInterests, setOpenInterests] = React.useState(false);
  const handleOpenInterests = () => setOpenInterests(true);
  const handleCloseInterests = () => setOpenInterests(false);

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

  const interestsLocal = interests.map((interest) => ({
    ...interest,
    icon: <span style={{ fontSize: "1.5rem" }}>{interest.emoji}</span>,
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
        onClose={handleCloseLanguages}
        onOpen={handleOpenLanguages}
        open={openLanguages}
      >
        {languagesLocal.map((language) => (
          <SpeedDialAction
            key={language.name}
            title={language.level}
            icon={language.icon}
            onClick={handleCloseLanguages}
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
      <SpeedDial
        ariaLabel="Interests"
        direction="down"
        sx={{
          position: "absolute",
          top: 16,
          right: 80,
          "& .MuiFab-primary": {
            backgroundColor: "#403a45",
            color: "#fff",
          },
        }}
        icon={<FcSportsMode />}
        onClose={handleCloseInterests}
        onOpen={handleOpenInterests}
        open={openInterests}
      >
        {interestsLocal.map((interest) => (
          <SpeedDialAction
            key={interest.name}
            title={interest.name}
            icon={interest.icon}
            onClick={handleCloseInterests}
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
        <Typography variant="h2" component="h2" style={{ marginBottom: "1rem" }}>
          {name}
        </Typography>
        <Typography variant="h5" component="h5">
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
