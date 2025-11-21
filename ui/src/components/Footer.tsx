import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2rem",
        paddingTop: "1.5rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Typography variant="body2" component="p" style={{ opacity: 0.7 }}>
        © {new Date().getFullYear()} Nikolaos Xenakis.
      </Typography>
    </div>
  );
};

export default Footer;
