import React from "react";
import { FaCrown, FaPlay } from "react-icons/fa";
import SliderWrapper from "../../_SlickSliderStyle";

import Slider from "react-slick";
import webSeries from "../common/datas/webSeris";

let data = webSeries.slideShow;

const WebSeriessSliderCardGc = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   autoplaySpeed: 2000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  let render =
    data.length > 0 ? (
      data.slice(0,6).map((item, index) => (
        <div key={index} className="slider-card ">
          <img src={item.url} alt={item.title} />
          <span className="slider-item-title  md:visible invisible   ">{item.title}</span>
          <div className="slider-button md:visible invisible">
            <button className="slider-watch-btn ">
              <FaPlay /> WATCH
            </button>
            <button className="slider-buy-btn md:hidden">
              <FaCrown /> BUY PLAN
            </button>
          </div>
        </div>
      ))
    ) : (
      <div>Err</div>
    );
  return (
    <div className="slCard ">
      <SliderWrapper>
        <Slider {...settings}>{render}</Slider>
      </SliderWrapper>
    </div>
  );
};

export default WebSeriessSliderCardGc;
