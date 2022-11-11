import { Box, Text } from "@chakra-ui/react";
import Slider from "react-slick";

import CardGc from "../common/CardGc";
import { Settings } from "../common/settings";
import TvShowData from "../common/datas/TvShowData";

let data = TvShowData;
function PopularShowsGc() {
  return (
    <Box mx={5} mt={1} textAlign="left">
      <Text fontSize="2xl" fontWeight="bold" my={7} className="z-0">
        Popular Shows
      </Text>

      <Slider {...Settings}>
        {data.slice(51, 60).map((item, index) => (
          <CardGc key={index} item={item} index={index} />
        ))}
      </Slider>
    </Box>
  );
}

export default PopularShowsGc;
