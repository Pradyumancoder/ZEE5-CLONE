



import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import { FaCrown } from "react-icons/fa";
import Slider from "react-slick";
import CardGc from "../common/CardGc";
import { Settings } from "../common/settings";

import webSeries from "../common/datas/webSeris";

let data = webSeries.webseries;

function Top10Series() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        speed:300,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };



   return (
      <Box m={5} mt={20} textAlign="left">
         <Text fontSize="2xl" fontWeight="bold" >
            Top 10 in India
         </Text>
         {/* <Grid templateColumns="repeat(10, 1fr)" gap={2} my={4}> */}
         <Slider   {...Settings}>

            {data.slice(22,32).map((item, index) => (
               <GridItem key={index} cursor="pointer" position="relative">
                  {/* <Image
                     src={item.url}
                     alt={item.popupTitle}
                     borderRadius="md"
                     w="100%"
                  /> */}
                    <CardGc item={item} index={index} />
                  {/* <Box className="card-icon" top="7px" left="7px">
                     <FaCrown />
                  </Box> */}
                  <Text className="top-ten-numbers absolute top-10 right-10 ">{index+1}</Text>
               </GridItem>
            ))}
         </Slider>
         {/* </Grid> */}
      </Box>
   );
}

export default Top10Series;
