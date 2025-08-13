import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import { projects } from "@/data/data";
import "@/assets/styles/projects.css";

const imageForProject = (name: string) => {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `/assets/images/projects/${slug}.jpg`;
};

const Projects = () => {
  return (
    <div className="section section-top-border">
      <div style={{ textAlign: "center", padding: "2vw" }}>
        <Typography variant="h3" component="h3">
          Projects
        </Typography>
      </div>

      <div className="projects-grid">
        {projects.map((p, idx) => {
          const imgSrc = imageForProject(p.name);
          return (
            <a
              key={idx}
              className="project-card"
              href={p.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.name} – open project`}
            >
              <img
                className="project-media"
                src={imgSrc}
                alt={p.name}
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = "true";
                    target.src = p.imageUrl;
                  }
                }}
              />
              <div className="project-info">
                <div className="project-title-row">
                  <Typography variant="h6" component="h4" className="project-title">
                    {p.name}
                  </Typography>
                  {p.date && (
                    <Typography variant="caption" component="div" className="project-meta">
                      {p.date}
                    </Typography>
                  )}
                </div>
                {p.descriptionShort && (
                  <Typography variant="body2" component="p" className="project-desc">
                    {p.descriptionShort}
                  </Typography>
                )}
                {p.description && !p.descriptionShort && (
                  <Typography variant="body2" component="p" className="project-desc">
                    {p.description}
                  </Typography>
                )}
                {p.technologies && (
                  <div className="project-tech">
                    {p.technologies
                      .split(",")
                      .slice(0, 4)
                      .map((t, i) => (
                        <Chip
                          key={i}
                          label={t.trim()}
                          color="primary"
                          variant="outlined"
                          className="technology-chip"
                          style={{ border: "1px solid #ccc", color: "#fff" }}
                          size="small"
                        />
                      ))}
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
