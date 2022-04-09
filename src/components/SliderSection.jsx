import React from "react";
import Slider from "react-slick";
import { moovies } from "../sliderData";

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {moovies.map((moovie, index) => (
        <div key={index}>
          <img src={moovie.image} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default SliderSection;
