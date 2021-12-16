import React from "react";
import intro from "../../assets/images/Intro.png";
import "./intro.scss";

function Market() {
  return (
    <div className="container">
      <div className="intro row justify-content-center mt-5 pt-5">
        <img className="w-75" src={intro} alt="" />
      </div>
    </div>
  );
}

export default Market;
