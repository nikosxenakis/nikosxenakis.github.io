import { FaGithub, FaLinkedinIn, FaStackOverflow, FaDownload, FaFlag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const iconStyle = {
    fontSize: "38px", // Make icons bigger
    color: "#fff",
    width: "42px",
    height: "42px",
};

const Intro = () => (
    <div className="section">
        <h1>Nikos Xenakis</h1>
        <h2>Software Engineer</h2>
        <div className="icon-row-bounce">
            {/* <FaGithub style={iconStyle} /> */}
            <img src="/assets/images/icons/github_purple.png" alt="GitHub" style={iconStyle} />
            <img src="/assets/images/icons/linkedin2.png" alt="LinkedIn" style={iconStyle} />
            <img src="/assets/images/icons/stackoverflow.png" alt="Stack Overflow" style={iconStyle} />
            {/* <img src="/assets/images/icons/stackoverflow.png" alt="Stack Overflow" style={iconStyle} /> */}
            {/* <FaDownload style={iconStyle} />
            <MdEmail style={iconStyle} />
            <FaLocationDot style={iconStyle} />
            <FaFlag style={iconStyle} /> */}
        </div>
    </div>
);

export default Intro;
