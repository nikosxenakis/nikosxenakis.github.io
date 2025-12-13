import { JSX, type PointerEvent, useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { Chip, IconButton, Paper, Stack, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { projects } from "@/data/data";
import "@/assets/styles/projects.css";

const Projects = () => {
  const sortByDateDesc = (value: string) => {
    const startPart = value.split("-")[0].trim();
    const parsed = Date.parse(startPart);

    if (!Number.isNaN(parsed)) {
      return parsed;
    }

    const yearMatch = value.match(/(20\\d{2}|19\\d{2})/);
    return yearMatch ? Date.parse(`${yearMatch[0]}-01-01`) : 0;
  };

  const projectsSorted = [...projects].sort(
    (a, b) => sortByDateDesc(b.date) - sortByDateDesc(a.date)
  );

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const updateScrollState = () => {
    const node = scrollerRef.current;
    if (!node) return;
    setCanScrollLeft(node.scrollLeft > 8);
    setCanScrollRight(node.scrollLeft + node.clientWidth < node.scrollWidth - 8);
  };

  const scrollByAmount = (direction: "left" | "right") => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.9;
    node.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  const dragState = useRef({
    isPointerDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const node = scrollerRef.current;
    if (!node) return;
    dragState.current = {
      isPointerDown: true,
      startX: event.clientX,
      scrollLeft: node.scrollLeft,
    };
    setIsDragging(true);
    node.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = scrollerRef.current;
    if (!node || !dragState.current.isPointerDown) return;
    const delta = event.clientX - dragState.current.startX;
    node.scrollLeft = dragState.current.scrollLeft - delta;
    updateScrollState();
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.isPointerDown) return;
    dragState.current.isPointerDown = false;
    setIsDragging(false);
    updateScrollState();
    scrollerRef.current?.releasePointerCapture?.(event.pointerId);
  };

  useEffect(() => {
    updateScrollState();
    const node = scrollerRef.current;
    if (!node) return;

    node.addEventListener("scroll", updateScrollState);
    const handleResize = () => updateScrollState();
    window.addEventListener("resize", handleResize);

    return () => {
      node.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="section">
      <div className="section-title">
        <Typography variant="h3" component="h3">
          Projects
        </Typography>
        <Typography variant="body1" component="span">
          Selected projects, prototypes, coursework and client work.
        </Typography>
      </div>

      <div className="projects-wrapper">
        <IconButton
          className="projects-nav-btn"
          onClick={() => scrollByAmount("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll projects left"
          size="small"
        >
          <ArrowBackIosNewIcon fontSize="inherit" />
        </IconButton>

        <div
          className={`projects-scroller ${isDragging ? "dragging" : ""}`}
          ref={scrollerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onPointerLeave={handlePointerEnd}
        >
          {projectsSorted.map((project) => {
            const links = [
              project.url ? { href: project.url, label: "Website", icon: <LanguageIcon /> } : null,
              project.githubUrl
                ? { href: project.githubUrl, label: "GitHub", icon: <GitHubIcon /> }
                : null,
            ].filter(Boolean) as { href: string; label: string; icon: JSX.Element }[];

            return (
              <Paper key={project.name} className="card project-card" tabIndex={0}>
                <div className="project-image-wrapper">
                  <img src={project.imageUrl} alt={project.name} className="project-image" />
                </div>

                <div className="project-content">
                  <div className="project-top">
                    <div className="project-title">
                      <Typography variant="h6" component="h4">
                        {project.name}
                      </Typography>
                      <Chip
                        label={project.date}
                        size="small"
                        variant="outlined"
                        className="project-date-chip"
                      />
                      {project.descriptionShort || project.description ? (
                        <Typography variant="body2" component="p" className="project-description">
                          {project.descriptionShort || project.description}
                        </Typography>
                      ) : null}
                    </div>

                    {links.length > 0 && (
                      <Stack spacing={0.4} direction="row" className="project-links">
                        {links.map((link) => (
                          <Tooltip key={link.href} title={link.label}>
                            <IconButton
                              size="small"
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={link.label}
                              className="project-link-icon"
                            >
                              {link.icon}
                            </IconButton>
                          </Tooltip>
                        ))}
                      </Stack>
                    )}
                  </div>

                  <div className="chip-container project-footer">
                    {project.technologies.split(",").map((tech) => (
                      <Chip
                        key={tech.trim()}
                        label={tech.trim()}
                        variant="outlined"
                        size="small"
                        className="chip"
                      />
                    ))}
                  </div>
                </div>
              </Paper>
            );
          })}
        </div>

        <IconButton
          className="projects-nav-btn"
          onClick={() => scrollByAmount("right")}
          disabled={!canScrollRight}
          aria-label="Scroll projects right"
          size="small"
        >
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default Projects;
