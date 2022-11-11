import React from "react";
import { FaCrown, FaPlay } from "react-icons/fa";
import SliderWrapper from "../../_SlickSliderStyle";

import Slider from "react-slick";
let data = [
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5215371/cover/1170x658withlogo52801d037e874929a33149c0214e2ae8.jpg",
    title: "Vikram (Hindi)",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5185904/cover/1920x770f7b87465b4004385a481f177826cbef8.jpg",
    title: "Paper Rocket (Tamil)",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5226617/cover/1920x770c0fb8727e1894eb3aba1cf889861317c.jpg",
    title: "Captain (Tamil)",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5238287/cover/1920x770c0bb284e1cbf44c19a78a12dc1bd3fa3.jpg",
    title: "Bimbisara  (Multi)",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5193948/cover/1170x658withlogo8557557b2fc849db8501513dcc8e99af.jpg",
    title: "Duranga",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-127/cover/1170x658withlogof29128d5b4f14adcb399a2942e7d6b6b.jpg",
    title: "kumkum Bhagya",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5202572/cover/1170x658withlogo40c56c9b3e6649d1a0431f9c8d598e1f.jpg",
    title: "Aparajito",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5206274/cover/1170x658withlogo405fd4a6a2714e49a9dff00704c12dbb3306b724995e456baa65a1d6a2e4c60e.jpg",
    title: "Khuda Haafiz Chapter 2",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5214599/cover/1170x658withlogo179236892d0249818023aed3b396a344.jpg",
    title: "Jurassic World Dominion",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3121/cover/1170x658withlogob564425ce3514a91bf22521b41ec78ca.jpg",
    title: "Mithai",
  },
];

const SliderCardGc = () => {
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
      data.map((item, index) => (
        <div key={index} className="slider-card">
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

export default SliderCardGc;
