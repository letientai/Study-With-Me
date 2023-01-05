import React from "react";
import Slider from "react-slick";

import banner1 from "../../assets/Images/Banner/banner1.jpg";
import banner2 from "../../assets/Images/Banner/banner2.png";
import banner3 from "../../assets/Images/Banner/banner3.png";
import banner4 from "../../assets/Images/Banner/banner4.jpg";
import banner5 from "../../assets/Images/Banner/banner5.jpg";
export const SlideBanner = (prop) => {
  const dataBanner = [
    {
      image: banner1,
      color: "#7fb5ff",
    },
    {
      image: banner2,
      color: "#7fb5ff",
    },
    {
      image: banner3,
      color: "#93baf8",
    },
    {
      image: banner4,
      color: "#7daede",
    },
    {
      image: banner5,
      color: "#a4e2f8",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    afterChange: function (index) {
      prop.setColor(dataBanner[index].color);
    },
  };
  return (
    <div className="slider-container w-100">
      <Slider {...settings}>
        {dataBanner?.map((item, index) => (
          <div className="banner w-100" key={index}>
            <img src={item.image} alt="" />{" "}
          </div>
        ))}
      </Slider>
    </div>
  );
};
