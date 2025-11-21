import Typography from "@mui/material/Typography";
import { Paper, Chip } from "@mui/material";
import { work } from "@/data/data";
import "@/assets/styles/workExperience.css";

const Experience = () => {
  return (
    <div style={{ marginBottom: "3vh" }}>
      <div className="section-title">
        <Typography variant="h3" component="h3">
          Work Experience
        </Typography>
        <Typography variant="body1" component="span">
          Developing meaningful products for the past{" "}
          {Number(new Date().toISOString().substring(0, 4)) - 2018} years.
        </Typography>
      </div>

      <div className="experienceContainer">
        {work.map((item, idx) => (
          <Paper key={idx} className="experience-card glassmorphic">
            <div className="experience-header">
              <img
                src={`/assets/images/companies/${item.logo}`}
                className="company-logo"
                alt={item.company}
              />
              <div className="experience-title-section">
                <Typography variant="h5" component="h4" style={{ marginBottom: "0.25rem" }}>
                  {item.role}
                </Typography>
                <Typography variant="body1" component="div" style={{ marginBottom: "0.25rem" }}>
                  <a href={item.companyUrl} target="_blank" rel="noreferrer">
                    {item.company}
                  </a>
                  {item.location ? ` • ${item.location}` : ""}
                </Typography>
                <Typography variant="body2" component="div" style={{ opacity: 0.9 }}>
                  {item.date}
                </Typography>
              </div>
            </div>

            {item.description && item.description.length > 0 && (
              <ul className="experience-description">
                {item.description.map((desc: string, i: number) => (
                  <li key={i}>
                    <Typography variant="body2" component="span">
                      {desc}
                    </Typography>
                  </li>
                ))}
              </ul>
            )}

            {item.technologies && (
              <div className="technologies-list">
                {item.technologies.split(",").map((tech: string, i: number) => (
                  <Chip
                    key={i}
                    label={tech.trim()}
                    variant="outlined"
                    size="small"
                    className="technology-chip"
                  />
                ))}
              </div>
            )}
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Experience;
