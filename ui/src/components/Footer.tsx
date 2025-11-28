import Typography from "@mui/material/Typography";
import "@/assets/styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <Typography variant="body2" component="p">
        © {new Date().getFullYear()} Nikolaos Xenakis.
      </Typography>
    </div>
  );
};

export default Footer;
