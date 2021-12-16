import React from "react";
import logo from "../../assets/images/zid-logo.png";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="container">
      <nav className="mt-4 row justify-content-around align-items-center">
        <div className="logo col-2">
          <img src={logo} alt="" />
        </div>
        <ul className="col-8 d-flex list-unstyled">
          <li className="mx-5">الرئيسية</li>
          <li className="mx-5">التصنيفات</li>
          <li className="mx-5">التطبيقات</li>
          <li className="mx-5">طور تطبيقك</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
