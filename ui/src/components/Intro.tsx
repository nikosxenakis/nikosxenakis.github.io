import { name, title, email, location } from "@/data/data";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const iconStyle = {
    fontSize: "38px",
    color: "#fff",
    width: "42px",
    height: "42px",
};

import Typography from "@mui/material/Typography";

const Intro = () => (
    <div className="section section-bottom-border" style={{ position: "relative" }}>
        <div className="introTab">
            <a href={email.link} className="introTabItem">
                <MdEmail />
                <Typography variant="body2" component="span">
                    {email.short}
                </Typography>
            </a>
            <a
                href="https://www.google.com/maps?q=Zürich"
                target="_blank"
                rel="noopener noreferrer"
                className="introTabItem"
            >
                <FaLocationDot />
                <Typography variant="body2" component="span">
                    {location}
                </Typography>
            </a>
        </div>
        <div style={{ textAlign: "center", padding: "2vw", maxWidth: "800px", margin: "0 auto" }}>
            <Typography variant="h1" component="h1" style={{ marginBottom: "1rem" }}>
                {name}
            </Typography>
            <Typography variant="h4" component="h4">
                {title}
            </Typography>
        </div>
        <div className="icon-row-bounce">
            <img src="/assets/images/icons/github.png" alt="GitHub" style={iconStyle} />
            <img src="/assets/images/icons/linkedin2.png" alt="LinkedIn" style={iconStyle} />
            <img src="/assets/images/icons/stackoverflow.png" alt="Stack Overflow" style={iconStyle} />
        </div>
    </div>
);

export default Intro;
