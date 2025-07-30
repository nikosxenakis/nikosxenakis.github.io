import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import { work } from "@/data/data";
import { Chip, List, ListItem } from "@mui/material";

const Experience = () => {
    const [activeIdx, setActiveIdx] = useState<number | null>(1);

    return (
        <div className="section">
            <div style={{ textAlign: "center", padding: "2vw" }}>
                <h1>Work Experience</h1>
                <p>Developing meaningful products for the past 7 years.</p>
            </div>
            <div style={{ display: "flex", gap: "2vw", padding: "2vw" }}>
                <div style={{ flex: "0 0 60%" }}>
                    <Timeline position="left">
                        {work.map((item, idx) => (
                            <TimelineItem
                                key={idx}
                                onMouseEnter={() => setActiveIdx(idx)}
                                onMouseLeave={() => setActiveIdx(null)}
                                onClick={() => setActiveIdx(idx)}
                                style={{
                                    cursor: "pointer",
                                    background: activeIdx === idx ? "#403a45" : "transparent",
                                    borderRadius: "8px",
                                    transition: "background 0.2s",
                                }}
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
                                        style={{ height: "32px", borderRadius: "20%", aspectRatio: "auto" }}
                                        alt={item.company}
                                    />
                                    {idx !== work.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: "12px" }}>
                                    <Typography variant="body2" component="span">
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
                <div
                    style={{
                        flex: "0 0 30%",
                        minWidth: "350px",
                        width: "350px",
                        maxHeight: "400px",
                    }}
                >
                    {activeIdx !== null && work[activeIdx].description && (
                        <div
                            style={{
                                margin: "2vw",
                                padding: "1rem",
                                borderRadius: "12px",
                            }}
                            className="subsection"
                        >
                            <List>
                                {work[activeIdx].description?.map((desc: string, i: number) => (
                                    <ListItem key={i}>{desc}</ListItem>
                                ))}
                            </List>
                            {work[activeIdx].technologies && (
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
                                    {work[activeIdx].technologies.split(",").map((tech: string, i: number) => (
                                        <Chip
                                            key={i}
                                            label={tech.trim()}
                                            color="primary"
                                            variant="outlined"
                                            style={{
                                                fontSize: "0.95rem",
                                                borderRadius: "6px",
                                                padding: "0.3rem 0.7rem",
                                                border: "1px solid #ccc",
                                                color: "#fff",
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experience;
