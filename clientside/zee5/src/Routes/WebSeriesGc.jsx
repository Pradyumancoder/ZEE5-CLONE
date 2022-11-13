import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Advertisemnt1Gc from "../Components-Gc/common/Advertisemnt1Gc";
import SkeletonGc from "../Components-Gc/Skeleton/SkeletonGc";
import ComedySeries from "../Components-Gc/WebSeries/ComedySeries";
import PopularSeries from "../Components-Gc/WebSeries/PopularSeries";
import RentandWatchSeris from "../Components-Gc/WebSeries/RentandWatchSeris";
import Romantic from "../Components-Gc/WebSeries/Romantic";
import Top10Series from "../Components-Gc/WebSeries/Top10Series";
import WebSeriessSliderCardGc from "../Components-Gc/WebSeries/WebSeriessSliderCardGc";

let ad = [
  "https://tpc.googlesyndication.com/simgad/17079171175691928473",
  "https://tpc.googlesyndication.com/simgad/13686292933159277317",
  "https://tpc.googlesyndication.com/simgad/12632166758537980946",
  "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234572/list/1170x658withlogo24b333694acb425e80ed532a1ee94469.jpg",
  "https://tpc.googlesyndication.com/simgad/11665320451917271715",
];

const WebSeriesGc = () => {
  const [loading, setLoading] = useState(true);
  let i = 0;
  useEffect(() => {
    const timer = setTimeout(() => {

      console.log('setTimeout:',i++)
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
 
  return loading ? (
    <SkeletonGc></SkeletonGc>
  ) : (
    <Box my={7}>
      <WebSeriessSliderCardGc></WebSeriessSliderCardGc>
      <Advertisemnt1Gc url={ad[4]}></Advertisemnt1Gc>
      <PopularSeries></PopularSeries>
      <Advertisemnt1Gc url={ad[1]}></Advertisemnt1Gc>
      <Top10Series></Top10Series>
      <Advertisemnt1Gc url={ad[0]}></Advertisemnt1Gc>
      <Romantic></Romantic>
      <Advertisemnt1Gc url={ad[2]}></Advertisemnt1Gc>
      <ComedySeries></ComedySeries>
      <RentandWatchSeris></RentandWatchSeris>
    </Box>
  );
};

export default WebSeriesGc;
