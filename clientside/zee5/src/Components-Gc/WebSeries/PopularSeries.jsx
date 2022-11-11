import { Box, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";

import CardGc from "../common/CardGc";
import { Settings } from "../common/settings";
import webSeries from "../common/datas/webSeris";

let data = webSeries.webseries;
function PopularSeries() {
  return (
    <Box mx={5} mt={1} textAlign="left">
      <Text fontSize="2xl" fontWeight="bold" my={7} className="z-0">
        Trending Series Right Now
      </Text>

      <Slider {...Settings}>
        {data.slice(0, 12).map((item, index) => (
          <VStack key={index}>
            <CardGc key={index} item={item} index={index} />
            <Text noOfLines={2}>{item.popupTitle}</Text>
          </VStack>
        ))}
      </Slider>
    </Box>
  );
}

export default PopularSeries;
