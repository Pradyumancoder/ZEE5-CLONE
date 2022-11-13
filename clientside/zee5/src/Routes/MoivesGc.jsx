import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Advertisemnt1Gc from "../Components-Gc/common/Advertisemnt1Gc";
import ActionMovies from "../Components-Gc/Movies/ActionMovies";
import AdventureMovies from "../Components-Gc/Movies/AdventureMovies";
import ComedyMovies from "../Components-Gc/Movies/ComedyMovies";

import MovieSliderCardGc from "../Components-Gc/Movies/MovieSliderCardGc";
import OnlyOnZEE5 from "../Components-Gc/Movies/OnlyOnZEE5";
import RentandWatchMovie from "../Components-Gc/Movies/RentandWatchMovie";
import SifiMoives from "../Components-Gc/Movies/SifiMoives";
import Top10MoivesZee from "../Components-Gc/Movies/Top10MoivesZee";
import SkeletonGc from "../Components-Gc/Skeleton/SkeletonGc";

let ad = [
  "https://tpc.googlesyndication.com/simgad/17079171175691928473",
  "https://tpc.googlesyndication.com/simgad/13686292933159277317",
  "https://tpc.googlesyndication.com/simgad/12632166758537980946",
  "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234572/list/1170x658withlogo24b333694acb425e80ed532a1ee94469.jpg",
  "https://tpc.googlesyndication.com/simgad/11665320451917271715",
];

const MoivesGc = () => {
  const [loading, setLoading] = useState(true);
  let i = 0;
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("setTimeout:", i++);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <SkeletonGc></SkeletonGc>
  ) : (
    <Box my={7}>
      <MovieSliderCardGc></MovieSliderCardGc>
      <Advertisemnt1Gc url={ad[4]}></Advertisemnt1Gc>
      <OnlyOnZEE5></OnlyOnZEE5>
      <Advertisemnt1Gc url={ad[1]}></Advertisemnt1Gc>
      <Top10MoivesZee></Top10MoivesZee>
      <Advertisemnt1Gc url={ad[0]}></Advertisemnt1Gc>
      <AdventureMovies></AdventureMovies>
      <Advertisemnt1Gc url={ad[2]}></Advertisemnt1Gc>
      <ActionMovies></ActionMovies>
      <ComedyMovies></ComedyMovies>
      <Advertisemnt1Gc url={ad[0]}></Advertisemnt1Gc>
      <RentandWatchMovie></RentandWatchMovie>
      <SifiMoives></SifiMoives>
    </Box>
  );
};

export default MoivesGc;
