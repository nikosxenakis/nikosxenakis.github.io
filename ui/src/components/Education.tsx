import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { education } from "@/data/data";
import "@/assets/styles/education.css";

const Education = () => {
  const eduItems = education.filter((e) => e.showOnWebsite).slice(0, 2);
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)").matches : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    setIsMobile(mediaQuery.matches);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div>
      <div className="section-title">
        <Typography variant="h3" component="h3">
          Education
        </Typography>
      </div>

      <div className="educationContainer">
        {eduItems.map((item, idx) => (
          <Paper key={idx} className="education-card glassmorphic">
            <div className="education-header">
              {item.logo && (
                <img
                  src={`/assets/images/companies/${item.logo}`}
                  className="education-logo"
                  alt={item.company}
                />
              )}
              <div className="education-title-section">
                <Typography variant="h5" component="h4" style={{ marginBottom: "0.25rem" }}>
                  {item.role}
                </Typography>
                <div className="education-meta-grid">
                  <div className="education-meta-left">
                    <Typography variant="body2" component="div" style={{ opacity: 0.9 }}>
                      {item.date}
                    </Typography>
                    {item.grade && (
                      <Typography variant="body2" component="div" style={{ opacity: 0.9 }}>
                        {item.grade}
                      </Typography>
                    )}
                  </div>
                  <div className="education-meta-right">
                    <Typography variant="body2" component="div">
                      <a href={item.companyUrl} target="_blank" rel="noreferrer">
                        {isMobile && item.companyShort ? item.companyShort : item.company}
                      </a>
                    </Typography>
                    {item.location && (
                      <Typography variant="body2" component="div" style={{ opacity: 0.9 }}>
                        {item.location}
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {item.dissertation && (
              <Typography variant="body2" component="p" style={{ marginTop: "0.75rem" }}>
                <strong>📄 Dissertation:</strong> {item.dissertation}
              </Typography>
            )}
            {item.scholarship && (
              <Typography
                variant="body2"
                component="p"
                style={{ marginTop: "0.5rem", opacity: 0.95 }}
              >
                <strong>🏅 Scholarships/Awards:</strong> {item.scholarship}
              </Typography>
            )}
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Education;
