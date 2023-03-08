//Materials UI
import "../styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";

function Card(props) {
  let isImage = true;
  let isIndependent = false;
  if (props.party === "Independent") {
    isIndependent = true;
  }
  if (!props.image) {
    isImage = false;
  }
  return (
    <div className="card-border">
      <div className="out-circle">
        {isImage ? (
          <div
            className="in-circle"
            style={{ backgroundImage: `url(${props.image})` }}
          >
            {!isIndependent && <img src={props.party_logo} alt="" />}
          </div>
        ) : (
          <div
            className="in-circle"
            style={{ backgroundImage: 'url("images/avatar.jpg")' }}
          >
            {!isIndependent && <img src={props.party_logo} alt="" />}
          </div>
        )}
        {/* <div
            className="in-circle"
            style={{ backgroundImage: `url(${props.image})` }}
          >
            {!isIndependent && <img src={props.party_logo} alt="" />}
          </div> */}
      </div>
      <div className="card-text">
        <p>{props.name}</p>
        <p>{props.study}</p>
        <p>{props.party}</p>
      </div>
      <div className="card-logo">
        <a href={`tel:${props.phone}`}>
          <LocalPhoneIcon />
        </a>
        <a
          href={`https://www.facebook.com/${props.fb}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href={`https://www.twitter.com/${props.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}

export default function Createcard(props) {
  return (
    <Card
      key={props.id}
      name={props.fname}
      study={props.study}
      phone={props.phone}
      fb={props.facebook}
      twitter={props.twitter}
      party_logo={props.logo}
      image={props.image}
      party={props.party}
    />
  );
}
