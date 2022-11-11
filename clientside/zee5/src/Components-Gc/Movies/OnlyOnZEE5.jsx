import { Box, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsBox } from "react-icons/bs";
import Slider from "react-slick";
import CardGc from "../common/CardGc";
import { Settings } from "../common/settings";
import MovieData from "../common/datas/MovieData";

let data = MovieData.topMovie;
function OnlyOnZEE5() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get(`https://fake-restful-api.onrender.com/zeeLatest`).then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <Box mx={5} mt={1} textAlign="left">
      <Text fontSize="2xl" fontWeight="bold" my={7} className="z-0">
        Only On Zee5
      </Text>

      {/* <Grid my={4} gap={4} templateColumns="repeat(20, 1fr)" overflowXY={"hidden"} >
        {data.map((item, index) => (
          <Card item={item} index={index}  />
        ))}
       
      </Grid> */}
      <Slider {...Settings}>
        {data.slice(10, 20).map((item, index) => (
          <Box key={index}>
            <CardGc key={index} item={item} index={index} />
            <Text>{item.popupTitle}</Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default OnlyOnZEE5;
