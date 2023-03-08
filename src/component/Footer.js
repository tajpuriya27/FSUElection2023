import "../styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="footer">
      <h4>
        Dear Candidates, <a href="https://www.bit.ly/fsu2079d" target="_blank"
          rel="noopener noreferrer">Click Here</a> to
        fill the candidate form.
      </h4>
      <p>
        Candidates from IOE purwanchal campus campus, Dharan are only added to
        this site as of now. If you want your campus to be listed here, contact
        me.
      </p>

      <div className="card-logo">
        <a
          href="https://www.facebook.com/tajpuriyasuneel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.twitter.com/@suneelhq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/tajpuriyasuneel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}
