import React from "react";
import HeroBox from "../heroBox/HeroBox";
import Navbar from "../navbar/Navbar";

function AppHeader() {
  return (
    <div>
      <Navbar />
      <HeroBox />
    </div>
  );
}

export default AppHeader;
