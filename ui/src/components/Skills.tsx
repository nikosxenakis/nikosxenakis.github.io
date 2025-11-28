import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { languages, interests } from "@/data/data";
import "@/assets/styles/skills.css";

const Skills = () => {
  const languagesLocal = languages.map((lang) => ({
    ...lang,
    icon: (
      <img
        src={`/assets/images/flags/${lang.name.toLowerCase()}.png`}
        alt={lang.name}
        style={{ width: "32px", height: "32px" }}
      />
    ),
  }));

  const interestsLocal = interests.map((interest) => ({
    ...interest,
    icon: <span style={{ fontSize: "2rem" }}>{interest.emoji}</span>,
  }));

  return (
    <div className="section">
      <div className="section-title">
        <Typography variant="h3" component="h3">
          Skills & Interests
        </Typography>
      </div>

      <div className="cardContainer">
        <Paper className="card">
          <div className="skills-section">
            <Typography variant="h5" component="h4" className="skills-subtitle">
              Languages
            </Typography>
            <div className="skills-list">
              {languagesLocal.map((language) => (
                <div key={language.name} className="skill-item">
                  <div className="skill-icon">{language.icon}</div>
                  <div className="skill-details">
                    <Typography variant="body1" component="h4" className="skill-name">
                      {language.name}
                    </Typography>
                    <Typography variant="body2" component="h4" className="skill-level">
                      {language.level}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Paper>

        <Paper className="card">
          <div className="skills-section">
            <Typography variant="h5" component="h4" className="skills-subtitle">
              Interests
            </Typography>
            <div className="skills-list">
              {interestsLocal.map((interest) => (
                <div key={interest.name} className="skill-item">
                  <div className="skill-icon">{interest.icon}</div>
                  <div className="skill-details">
                    <Typography variant="body1" component="h4" className="skill-name">
                      {interest.name}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Skills;
