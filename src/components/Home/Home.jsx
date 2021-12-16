import React from "react";
import AppHeader from "../Header/AppHeader";
import Features from "../features/Features";
import Market from "../market/Market";
import AppWrapper from "../apps/appWrapper";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div>
      <AppHeader />
      <Market />
      <Features />
      <AppWrapper />
      <Footer />
    </div>
  );
}

export default Home;
