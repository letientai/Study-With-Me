import React from "react";
import chungnhan from "../../assets/Images/Banner/chungnhan-04.png"
export const RightContent = () => {
  return (
    <div className="header-right-content">
      <div className="box-img">
        <img
          src={chungnhan}
          alt=""
        />
      </div>
      <div className="btn-dowload bg-btn">
        <a
          className="gg-analytic"
          data-event="download-app"
          target="_blank"
          href="#"
        >
          TẢI ỨNG DỤNG HOCMAI
        </a>
      </div>
    </div>
  );
};
