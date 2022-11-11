import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import Card1Gc from "../common/Card1Gc";
import { Settings1 } from "../common/settings1";

import TvShowData from "../common/datas/TvShowData";

let data = TvShowData;

const LatestEpiTvShow = () => {
  return (
    <Box mx={5} mt={1} textAlign="left">
      <Text fontSize="2xl" fontWeight="bold" my={7} className="z-0">
        LatestEpi
      </Text>

      {/* <Grid my={4} gap={4} templateColumns="repeat(20, 1fr)" overflowXY={"hidden"} >
        {data.map((item, index) => (
          <Card item={item} index={index}  />
        ))}
       
      </Grid> */}
      <Slider {...Settings1}>
        {data.slice(30, 40).map((item, index) => (
          <Card1Gc key={index} item={item} prem={false} index={index} />
        ))}
      </Slider>
    </Box>
  );
};

export default LatestEpiTvShow;
