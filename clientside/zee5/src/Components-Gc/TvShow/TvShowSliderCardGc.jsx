import React from "react";
import { FaCrown, FaPlay } from "react-icons/fa";
import SliderWrapper from "../../_SlickSliderStyle";

import Slider from "react-slick";
let data = [
  {
    _id: "636ca400d2749e98ce687abd",
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5190052/cover/1920x7706d169377eb344748a171d691ce211937.jpg",
    title: "Dance Jodi Dance Reloaded",
  },

  {
    _id: "636ca400d2749e98ce687abe",
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5163694/cover/1920x77027aac2ef6d6e4937866ef07ce499d6da.jpg",
    title: "Maari",
  },
  {
    _id: "636ca400d2749e98ce687abf",
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z560991/cover/1920x770816d1266f1ff48c88938dda963eebdeb.jpg",
    title: "Vidhya No 1",
  },
  {
    _id: "636ca400d2749e98ce687ac0",
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z548440/cover/1920x770e0c562818376492a913860e237c4b835.jpg",
    title: "Preanbu",
  },
  {
    _id: "636ca400d2749e98ce687ac1",
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130199/cover/1920x77078edf9e2bd3b4d07ba49e42d18f35aa1.jpg",
    title: "Thavamai Thavamirundhu",
  },
  {
    _id: "636ca400d2749e98ce687ac2",
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130241/cover/1170x658withlogo8e0b4cec0bcd40b48427079e82bb32c8.jpg",
    title: "Pyar ka pahla Naam: Radha Mohan",
  },
  {
    _id: "636ca400d2749e98ce687ac3",
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3517/cover/1920x77011697fc3e8b643fc906cba862e46d209.jpg",
    title: "Ninaithale Inikum",
  },
  {
    _id: "636ca400d2749e98ce687ac4",
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z561000/cover/1920x7703701ea9ed6a3420aa34d3989d2bb82b3.jpg",
    title: "Rajini",
  },
  {
    _id: "636ca400d2749e98ce687ac5",
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-2145/cover/1920x7703ff96619291d4179933435044b6bca85.jpg",
    title: "Kundali Bhagya",
  },
  {
    _id: "636ca400d2749e98ce687ac6",
    url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-2544/cover/1920x77011e7f0de60ca4f2dadbcd47796b196e0.jpg",
    title: "Meet",
  },
];

const TvShowSliderCardGc = () => {
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
          <img src={item.url} alt={item.title} className="w-[50%]" />
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

export default TvShowSliderCardGc;
