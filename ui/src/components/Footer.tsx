import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div className="footer-section">
      <Typography variant="body2" component="p" style={{ opacity: 0.7 }}>
        © {new Date().getFullYear()} Nikolaos Xenakis.
      </Typography>
    </div>
  );
};

export default Footer;
