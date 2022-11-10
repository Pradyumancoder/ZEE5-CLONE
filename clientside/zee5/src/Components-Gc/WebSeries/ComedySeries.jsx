import { Box, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";

import CardGc from "../common/CardGc";
import { Settings } from "../common/settings";
import webSeries from "../common/datas/webSeris";

let data = webSeries.webseries;
function ComedySeries() {
  return (
    <Box mx={5} mt={1} textAlign="left">
      <Text fontSize="2xl" fontWeight="bold" my={7} className="z-0">
     Comdey Series 
      </Text>

      <Slider {...Settings}>
        {data.slice(23, 23).map((item, index) => (
          <VStack>
            <CardGc key={index} item={item} index={index} />
            <Text noOfLines={2}>{item.popupTitle}</Text>
          </VStack>
        ))}
      </Slider>
    </Box>
  );
}

export default ComedySeries;
