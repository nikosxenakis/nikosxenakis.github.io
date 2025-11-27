import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Paper, Chip } from "@mui/material";
import { work } from "@/data/data";
import "@/assets/styles/workExperience.css";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)").matches : false
  );
  const workItems = work.filter((e) => e.showOnWebsite);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    setIsMobile(mediaQuery.matches);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div style={{ marginBottom: "3vh" }}>
      <div className="section-title">
        <Typography variant="h3" component="h3">
          Work Experience
        </Typography>
        <Typography variant="body1" component="span">
          Developing meaningful products for the past{" "}
          {Number(new Date().toISOString().substring(0, 4)) - 2017} years.
        </Typography>
      </div>

      <div className="experienceContainer">
        {workItems.map((item, idx) => (
          <Paper key={idx} className="experience-card glassmorphic">
            <div
              className="experience-header"
              role="button"
              tabIndex={0}
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setExpandedIndex(expandedIndex === idx ? null : idx);
                }
              }}
              aria-expanded={expandedIndex === idx}
            >
              <img
                src={`/assets/images/companies/${item.logo}`}
                className="company-logo"
                alt={item.company}
              />
              <div className="experience-title-section">
                <div className="experience-title-top">
                  <div className="experience-title-left">
                    <Typography variant="h5" component="h4" style={{ marginBottom: "0.1rem" }}>
                      {isMobile && item.roleShort ? item.roleShort : item.role}
                    </Typography>
                    <Typography variant="body2" component="div" className="experience-date">
                      {item.date}
                    </Typography>
                  </div>
                  <div className="experience-meta">
                    <Typography
                      variant="body1"
                      component="div"
                      style={{ marginBottom: item.location ? "0.15rem" : "0" }}
                    >
                      <a href={item.companyUrl} target="_blank" rel="noreferrer">
                        {item.company}
                      </a>
                    </Typography>
                    {item.location && (
                      <Typography variant="body2" component="div" className="experience-location">
                        {item.location}
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
              <span
                className={`experience-toggle ${expandedIndex === idx ? "expanded" : ""}`}
                aria-hidden="true"
              >
                {expandedIndex === idx ? "-" : "+"}
              </span>
            </div>

            {expandedIndex === idx && (
              <>
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
              </>
            )}
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Experience;
