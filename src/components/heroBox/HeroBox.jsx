import React from "react";
import "./Hero.scss";
import chevron from "../../assets/icons/chevron.svg";

function HeroBox() {
  return (
    <div className="hero_box text-center mt-4">
      <h1>طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد</h1>
      <p className="mt-4">
        طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات تساعدك في نمو أرباحك عبر
        إدارة عمليات متجرك بشكل فعال واحترافي
      </p>
      <button className="py-2 px-5 mt-5" type="button">
        تصفح التطبيقات
        <img className="me-2" src={chevron} alt="" />
      </button>
    </div>
  );
}

export default HeroBox;
