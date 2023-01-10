import React from "react";
import Slider from "react-slick";

function SliderCustom({ children, customSetting }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ...customSetting,
  };
  return (
    <div className="slider-container w-100 px-0 col">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default SliderCustom;
