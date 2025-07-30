import { name, summary, title, email, location } from "@/data/data";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const iconStyle = {
    fontSize: "38px",
    color: "#fff",
    width: "42px",
    height: "42px",
};

import { CSSProperties } from "react";

const tabStyle: CSSProperties = {
    position: "absolute",
    left: "0px",
    top: "0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "1.8rem",
    gap: "1.8rem",
};

const tabStyle2: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff",
    gap: "0.3rem",
};

const iconStyle2 = {
    fontSize: "16px",
    // color: "#fff",
    // width: "42px",
    // height: "42px",
};


const labelStyle = {
    color: "#fff",
    maxWidth: "190px",
};

const Intro = () => (
    <div className="section" style={{ position: "relative" }}>
        <div style={tabStyle}>
            <a href={email.link} title="Email" style={tabStyle2}>
                <MdEmail style={iconStyle2} />
                <div style={labelStyle}>{email.short}</div>
            </a>
            <a href="https://www.google.com/maps?q=Zürich" title="Location" target="_blank" rel="noopener noreferrer" style={tabStyle2}>
                <FaLocationDot style={iconStyle2} />
                <div style={labelStyle}>{location}</div>
            </a>
        </div>
        <div style={{ textAlign: "center", padding: "2vw", maxWidth: "500px", margin: "0 auto" }}>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>{summary.short}</p>
            <div className="icon-row-bounce">
                <img src="/assets/images/icons/github_purple.png" alt="GitHub" style={iconStyle} />
                <img src="/assets/images/icons/linkedin2.png" alt="LinkedIn" style={iconStyle} />
                <img src="/assets/images/icons/stackoverflow.png" alt="Stack Overflow" style={iconStyle} />
            </div>
        </div>
    </div>
);

export default Intro;