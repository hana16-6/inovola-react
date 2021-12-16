import React from "react";
import kumra from "../../assets/images/kumra.png";
import "./app.scss";

function AppItem() {
  return (
    <div className="row app-item py-3 px-2 mx-2">
      <div className="col-3">
        <img className="w-100" src={kumra} alt="" />
      </div>
      <div className="col-9 p-0 ">
        <div className="d-flex">
          <p className="kumra">قمرة</p>
          <div className=" me-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#FDB515"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </span>
            <span className="num me-2">5</span>
          </div>
        </div>
        <p className="develop-content">
          تطوير :<span className="develop"> عمر برهوم</span>
        </p>
        <p className="dev-p">نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
        <p className="dev-p">نظام الولاء الأمثل الذييمكنك من رفع مبيعاتك</p>
      </div>
    </div>
  );
}

export default AppItem;
