import React from "react";
import zidapp from "../../assets/images/zidapp.png";
import "./features.scss";
import mail from "../../assets/icons/features/mail.svg";
import hand from "../../assets/icons/features/hand.svg";
import chat from "../../assets/icons/features/chat.svg";
import DotPattern from "../../assets/images/Dot-Pattern.png";
import yellowEllipse from "../../assets/images/yellow-ellipse.png";

function Features() {
  return (
    <div className="your-apps mb-5">
      <div className="container ">
        <div className="row mb-5 pt-5">
          <div className="col-6">
            <h3>كل ماتحتاجه لنمو متجرك فى مكان واحد</h3>
            <p>
              مميزات سوق تطبيقات زد تساعدك فى سهولة وسرعة لاستفادة من خدمات
              وحلول سوق التطبيقات لنمو متجرك ومضاعفة أرباحك
            </p>
            <ul>
              <li className="d-flex align-items-center mt-4">
                <div className="icon">
                  <img src={mail} alt="" />
                </div>
                <p>سهولة إدارة وتفعيل تطبيقاتك من نفس لوحة تحكم متجرك</p>
              </li>
              <li className="d-flex align-items-center my-4">
                <div className="icon">
                  <img src={chat} alt="" />
                </div>
                <p>دعم فني وتقني متكامل متوفر على مدار الساعة</p>
              </li>
              <li className="d-flex align-items-center">
                <div className="icon">
                  <img src={hand} alt="" />
                </div>
                <p>أسعار تنافسية مع تجربة مجالية وباقات اشتراك متنوعة</p>
              </li>
            </ul>
          </div>
          <div className="zid_app col-6">
            <img className="w-100" src={zidapp} alt="" />
            <img className="Dot_pattern" src={DotPattern} alt="" />
            <img className="yellow_ellipse" src={yellowEllipse} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
