/* eslint-disable */
import { useState } from "react";
import Voter from "../data/voterlist";

export default function Eligibility() {
  const [roll, setRoll] = useState("");
  return (
    <div className="container">
      <p>Are You Eligibile to Vote?</p>
      <div className="eligibility">
        <div>
          <input
            type="text"
            placeholder="PUR075BCT088"
            onChange={(event) => setRoll(event.target.value)}
            style={{ textTransform: "uppercase" }}
            autoFocus
            size="10"
            maxLength="14"
            value={roll}
          />
        </div>
        <div>
          {Voter.filter((val) => {
            if (val.rollno.toLowerCase() === roll.toLowerCase()) {
              return val;
            }
          }).map((element) => {
            return (
              <img src="images/tick.svg" alt="" height="35px" width="auto" />
            );
          })}
        </div>
      </div>
    </div>
  );
}
