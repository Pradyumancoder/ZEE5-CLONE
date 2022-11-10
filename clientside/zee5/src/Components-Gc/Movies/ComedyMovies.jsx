import { Box, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";

import CardGc from "../common/CardGc";
import { Settings } from "../common/settings";
import MovieData from "../common/datas/MovieData";

let data = MovieData.comedy;
function ComedyMovies() {
  return (
    <Box mx={5} mt={1} textAlign="left">
      <Text fontSize="2xl" fontWeight="bold" my={7} className="z-0">
        Comdey Movies
      </Text>

      <Slider {...Settings}>
        {data.slice(20, 34).map((item, index) => (
          <VStack>
            <CardGc key={index} item={item} index={index} />
            <Text noOfLines={2}>{item.popupTitle}</Text>
          </VStack>
        ))}
      </Slider>
    </Box>
  );
}

export default ComedyMovies;
