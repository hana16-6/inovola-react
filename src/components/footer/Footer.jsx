import React from "react";
import "./footer.scss";
import chat from "../../assets/images/chat.png";
import logo from "../../assets/images/zid-logo-white.png";
import up from "../../assets/images/up.png";
import insta from "../../assets/icons/social/insta.svg";
import linkedin from "../../assets/icons/social/linkedin.svg";
import twitter from "../../assets/icons/social/twitter.svg";
import youtube from "../../assets/icons/social/youtube.svg";

function Footer() {
  return (
    <footer className="p-2">
      <div className="container">
        <div className="row justify-content-center pt-3">
          <div className="col-4 text-center">
            <img src={logo} alt="" />
          </div>
        </div>
        <ul className=" list-unstyled d-flex justify-content-center p-0 mt-4">
          <li className="mx-3">
            <img src={youtube} alt="" />
          </li>
          <li className="mx-3">
            <img src={linkedin} alt="" />
          </li>
          <li className="mx-3">
            <img src={insta} alt="" />
          </li>

          <li className="mx-3">
            <img src={twitter} alt="" />
          </li>
        </ul>
        <div className="row justify-content-between">
          <div className="col-2">
            <img src={chat} alt="" />
          </div>

          <div className="col-2 text-start">
            <img src={up} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
