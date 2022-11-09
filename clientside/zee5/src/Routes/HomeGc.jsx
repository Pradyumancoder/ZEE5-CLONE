import { Box } from "@chakra-ui/react";
import React from "react";
import Advertisemnt1Gc from "../Components-Gc/common/Advertisemnt1Gc";
import IMDBtop from "../Components-Gc/IMDBtop";
import LatestEpi from "../Components-Gc/LatestEpi";
import NavbarGc from "../Components-Gc/NavBarGc";
import PopularMoives from "../Components-Gc/PopularMoives";
import RentandWatch from "../Components-Gc/RentandWatch";
import SliderCardGc from "../Components-Gc/SliderCardGc";
import Top10Movies from "../Components-Gc/Top10Movies";
import TrendingNearYouGc from "../Components-Gc/TrendingNearYouGc";
import WebSeires from "../Components-Gc/WebSeires";

let ad= [
  "https://tpc.googlesyndication.com/simgad/17079171175691928473",
  "https://tpc.googlesyndication.com/simgad/13686292933159277317",
  "https://tpc.googlesyndication.com/simgad/12632166758537980946",
  "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234572/list/1170x658withlogo24b333694acb425e80ed532a1ee94469.jpg",
  "https://tpc.googlesyndication.com/simgad/11665320451917271715",
];
const HomeGc = () => {
  return (
    <Box my={7}>
      <SliderCardGc></SliderCardGc>
      <TrendingNearYouGc></TrendingNearYouGc>
      <Advertisemnt1Gc url={ad[0]}></Advertisemnt1Gc>
      <PopularMoives></PopularMoives>
      <Advertisemnt1Gc url={ad[2]}></Advertisemnt1Gc>
      <Top10Movies></Top10Movies>
      <LatestEpi></LatestEpi>
      <Advertisemnt1Gc url={ad[4]}></Advertisemnt1Gc>

      <WebSeires></WebSeires>
      <Advertisemnt1Gc url={ad[3]}></Advertisemnt1Gc>
      <IMDBtop></IMDBtop>
      <RentandWatch></RentandWatch>

      
    </Box>
  );
};

export default HomeGc;
