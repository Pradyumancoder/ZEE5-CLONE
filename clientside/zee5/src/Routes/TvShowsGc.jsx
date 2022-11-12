import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Advertisemnt1Gc from "../Components-Gc/common/Advertisemnt1Gc";

import TvShowSliderCardGc from "../Components-Gc/TvShow/TvShowSliderCardGc";
import TrendingShowsGc from "../Components-Gc/TvShow/TrendingShowsGc";
import PopularShowsGc from "../Components-Gc/TvShow/PopularShowsGc";
import Top10Shows from "../Components-Gc/TvShow/Top10Shows";
import TvShowWebSeires from "../Components-Gc/TvShow/TvShowWebSeires";
import TopRatingShow from "../Components-Gc/TvShow/TopRatingShow";
import RentandWatchTvShow from "../Components-Gc/TvShow/RentandWatchTvShow";
import LatestEpiTvShow from "../Components-Gc/TvShow/LatestEpiTvShow";
import PepolesFav from "../Components-Gc/TvShow/PepolesFav";
import SkeletonGc from "../Components-Gc/Skeleton/SkeletonGc";

let ad = [
  "https://tpc.googlesyndication.com/simgad/17079171175691928473",
  "https://tpc.googlesyndication.com/simgad/13686292933159277317",
  "https://tpc.googlesyndication.com/simgad/12632166758537980946",
  "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234572/list/1170x658withlogo24b333694acb425e80ed532a1ee94469.jpg",
  "https://tpc.googlesyndication.com/simgad/11665320451917271715",
  "https://tpc.googlesyndication.com/simgad/2736161446216139186?",
];
const TvShowsGc = () => {
  const [loading, setLoading] = useState(true);
  let i = 0;
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("setTimeout:", i++);
      setLoading(false);
    }, 25000);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <SkeletonGc></SkeletonGc>
  ) : (
    <Box my={7}>
      <TvShowSliderCardGc></TvShowSliderCardGc>
      <Advertisemnt1Gc url={ad[5]}></Advertisemnt1Gc>
      <TrendingShowsGc></TrendingShowsGc>
      <PopularShowsGc></PopularShowsGc>
      <Advertisemnt1Gc url={ad[2]}></Advertisemnt1Gc>
      <Top10Shows></Top10Shows>
      <LatestEpiTvShow></LatestEpiTvShow>
      <Advertisemnt1Gc url={ad[4]}></Advertisemnt1Gc>

      <TvShowWebSeires></TvShowWebSeires>
      <PepolesFav></PepolesFav>
      <Advertisemnt1Gc url={ad[0]}></Advertisemnt1Gc>
      <TopRatingShow></TopRatingShow>
      <RentandWatchTvShow></RentandWatchTvShow>
    </Box>
  );
};

export default TvShowsGc;
