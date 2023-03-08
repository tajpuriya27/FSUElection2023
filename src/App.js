import "./styles.css";
import Eligibility from "./component/Eligibility_search";
import Createcard from "./component/Card";
import Erc from "./data/json_data";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="main-container">
      <h1>FSU2023</h1>

      <Eligibility />

      <div className="container">
        <h3>IOE Purwanchal Campus</h3>
        <p>President(1)</p>
        <div className="card-box">
          {Erc.filter((val) => val.post === "president").map(Createcard)}
        </div>
        <hr />
        <p>Secretary(1)</p>
        <div className="card-box">
          {Erc.filter((val) => val.post === "secretary").map(Createcard)}
        </div>
        <hr />
        <p>Treasurer(1)</p>
        <div className="card-box">
          {Erc.filter((val) => val.post === "treasurer").map(Createcard)}
        </div>
        <hr />
        <p>Member(8)</p>
        <div className="card-box">
          {Erc.filter((val) => val.post === "member").map(Createcard)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
