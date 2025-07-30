import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import { work } from "@/data/data";

const Experience = () => {
    const [activeIdx, setActiveIdx] = useState<number | null>(1);

    return (
        <div className="section" style={{ display: "flex", alignItems: "flex-start" }}>
            <div style={{ width: "100%", textAlign: "center", margin: "2rem 0" }}>
                <h1>Work Experience</h1>
                <p>This section will showcase my professional experience.</p>
            </div>
            <div style={{ flex: "0 0 55%", marginLeft: "-5vw" }}>
                <Timeline position="right">
                    {work.map((item, idx) => (
                        <TimelineItem
                            key={idx}
                            onMouseEnter={() => setActiveIdx(idx)}
                            // onMouseLeave={() => setActiveIdx(null)}
                            onClick={() => setActiveIdx(idx)}
                            style={{
                                cursor: "pointer",
                                background: activeIdx === idx ? "#403a45" : "transparent",
                                borderRadius: "8px",
                                transition: "background 0.2s",
                            }}
                        >
                            <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="body1" component="span">
                                    {item.date}
                                </Typography>
                                <br />
                                <Typography variant="body1" component="span">
                                    {item.location}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                {idx !== 0 && <TimelineConnector />}
                                <img
                                    src={`/assets/images/companies/${item.logo}`}
                                    style={{ width: "42px", height: "42px", borderRadius: "50%" }}
                                    alt={item.company}
                                />
                                {idx !== work.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant="body1" component="span">
                                    {item.role}
                                </Typography>
                                <Typography>
                                    <a href={item.companyUrl}>{item.company}</a>
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
            {/* Description panel */}
            <div
                style={{
                    flex: "0 0 45%",
                    margin: "2vw",
                    padding: "1rem",
                    minHeight: "300px",
                    /* padding: 2rem; */
                    borderRadius: "12px",
                    boxShadow: "#706876ff 0px 2px 16px",
                    display: "block",
                    position: "absolute",
                    top: "1250px",
                    right: "0px",
                    width: "350px",
                }}
                className="subsection"
            >
                {activeIdx !== null && work[activeIdx].description && (
                    <>
                        <Typography variant="h5" gutterBottom>
                            {work[activeIdx].role} @ {work[activeIdx].company}
                        </Typography>
                        <ul>
                            {work[activeIdx].description.map((desc: string, i: number) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default Experience;
