import React from "react";
import SliderCustom from "../Slider";
import Card from "./card";
import "./ContentCourse.scss";
export const ContentCourse = ({ data }) => {
  console.log(data);
  const customSetting = {
    slidesToShow: 5,
    autoplay: false,
  };
  const customSetting1 = {
    slidesToShow: 3,
    autoplay: true,
  };
  return (
    <div className="wrap-content my-3">
      {/* Map here */}
      <div className="main">
        <div className="container w-100">
          <div className="row no-mg aos-init aos-animate w-100">
            <div className="box-title">Trung học phổ thông</div>
          </div>
          <div className="row no-mg flex-nowrap course-slider w-100">
            <div className="box-thumb px-0 mx-0">
              <div className="box-img hover-up">
                <img
                  src="https://hocmai.vn/media/images/home/desktop/522-x-324-7.jpg"
                  className="lazy"
                  alt=""
                />
              </div>
            </div>
            <div className="box-new  px-0 d-flex row">
              <SliderCustom customSetting={customSetting1}>
                {data?.data?.courses?.map((item, index) => (
                  <div className="col px-0" key={index}>
                    <Card item={item} />
                  </div>
                ))}
              </SliderCustom>
            </div>
          </div>
          <div className="row no-mg flex-nowrap course-slider ">
            <SliderCustom customSetting={customSetting}>
              {data?.data?.courses?.map((item, index) => (
                <div className="col px-0" key={index}>
                  <Card item={item} />
                </div>
              ))}
            </SliderCustom>
          </div>
        </div>
      </div>
    </div>
  );
};
