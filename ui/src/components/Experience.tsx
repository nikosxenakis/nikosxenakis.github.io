import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import { work } from "@/data/data";

const Experience = () => {
    return (
        <div className="section">
            <h1>Work Experience</h1>
            <p>This section will showcase my professional experience.</p>
            <Timeline position="right">
                {work.map((item, idx) => (
                    <TimelineItem key={idx}>
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
                                style={{ width: "42px", height: "42px" }}
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
                            {/* {item.description && (
                                <ul>
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            )} */}
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
};

export default Experience;
