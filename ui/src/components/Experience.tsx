import { useState, useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import { Chip, List, ListItem, Paper, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { work } from "@/data/data";
import "@/assets/styles/workExperience.css";

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeOverlay = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveIdx(null);
      setIsClosing(false);
    }, 250);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeIdx !== null && !isClosing) {
        closeOverlay();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [activeIdx, isClosing]);

  useEffect(() => {
    // Close overlay when component unmounts or user scrolls away
    return () => {
      setActiveIdx(null);
      setIsClosing(false);
    };
  }, []);

  useEffect(() => {
    // Close overlay when user scrolls
    const handleScroll = () => {
      if (activeIdx !== null && !isClosing) {
        closeOverlay();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIdx, isClosing]);

  return (
    <div className="section section-top-border">
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
        <div
          className="timeline-container"
          onWheel={(e) => {
            const container = e.currentTarget;
            const atTop = container.scrollTop === 0;
            const atBottom =
              container.scrollHeight - container.scrollTop === container.clientHeight;
            if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
              // Allow parent to scroll
              return;
            }
            // Prevent parent scroll
            e.stopPropagation();
          }}
        >
          <Timeline position="left">
            {work.map((item, idx) => (
              <TimelineItem
                key={idx}
                onClick={() => setActiveIdx(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIdx(idx);
                  }
                }}
                className={`timeline-item ${activeIdx === idx ? "active" : ""}`}
                tabIndex={0}
                role="button"
                aria-pressed={activeIdx === idx}
              >
                <TimelineOppositeContent sx={{ py: "12px" }}>
                  <Typography variant="body2" component="span">
                    {item.date}
                  </Typography>
                  <br />
                  <Typography variant="body2" component="span">
                    {item.location}
                  </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                  {idx !== 0 && <TimelineConnector />}
                  <img
                    src={`/assets/images/companies/${item.logo}`}
                    style={{ height: "32px", borderRadius: "20%", aspectRatio: "auto", padding: "0 12px" }}
                    alt={item.company}
                  />
                  {idx !== work.length - 1 && <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent sx={{ py: "12px" }}>
                  <Typography variant="body1" component="span" sx={{ fontSize: "1.1rem" }}>
                    {item.roleShort ? item.roleShort : item.role}
                  </Typography>
                  <br />
                  <Typography variant="body2" component="span">
                    <a href={item.companyUrl}>
                      {item.companyShort ? item.companyShort : item.company}
                    </a>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
        {activeIdx !== null && (
          <div
            className={`work-overlay ${isClosing ? 'closing' : ''}`}
            role="dialog"
            aria-live="polite"
            aria-labelledby="work-title"
            onClick={() => closeOverlay()}
          >
            <Paper
              className="work-overlay-content glassmorphic"
              onClick={(e) => e.stopPropagation()}
            >

              {work[activeIdx].description ? (
                <>
                  <List>
                    {work[activeIdx].description?.map((desc: string, i: number) => (
                      <ListItem key={i}>{desc}</ListItem>
                    ))}
                  </List>
                  {work[activeIdx].technologies && (
                    <div className="technologies-list">
                      {work[activeIdx].technologies.split(",").map((tech: string, i: number) => (
                        <Chip
                          key={i}
                          label={tech.trim()}
                          color="primary"
                          variant="outlined"
                          className="technology-chip"
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Typography variant="body1" component="span" style={{ textAlign: "center" }}>
                  No details available.
                </Typography>
              )}
            </Paper>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
