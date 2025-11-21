import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { education } from "@/data/data";
import "@/assets/styles/education.css";

const Education = () => {
  const eduItems = education.filter((e) => e.forCV).slice(0, 2);

  return (
    <div style={{
      paddingTop: "2vh",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)"
    }}>
      <div className="section-title">
        <Typography variant="h3" component="h3">
          Education
        </Typography>
      </div>

      <div className="educationContainer">
        {eduItems.map((item, idx) => (
          <Paper key={idx} className="education-card glassmorphic">
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
              {item.grade ? ` • ${item.grade}` : ""}
            </Typography>
            {item.dissertation && (
              <Typography variant="body2" component="p" style={{ marginTop: "0.75rem" }}>
                <strong>Dissertation:</strong> {item.dissertation}
              </Typography>
            )}
            {item.scholarship && (
              <Typography
                variant="body2"
                component="p"
                style={{ marginTop: "0.5rem", opacity: 0.95 }}
              >
                <strong>Scholarships/Awards:</strong> {item.scholarship}
              </Typography>
            )}
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Education;
