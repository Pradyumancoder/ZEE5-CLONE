import { Box, Button, Flex, Skeleton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { Settings } from "../common/settings";
import SliderWrapper from "../../_SlickSliderStyle";
const SkeletonGc = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  let content = [
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="300px" w="200px" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="300px" w="200px" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="300px" w="200px" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="300px" w="200px" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="300px" w="200px" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="300px" w="200px" />
        </>
      ),
    },
  ];

  let content1 = [
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="100px" w="300px" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="100px" w="400px" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="100px" w="400px" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="100px" w="400px" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="100px" w="400px" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="100px" w="400px" />
        </>
      ),
    },
  ];
  let slide = [
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="400px" w={"90%"} m="auto" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="400px" w={"90%"} m="auto" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="400px" w={"90%"} m="auto" />
        </>
      ),
    },
    {
      id: 1,
      ele: (
        <>
          <Skeleton startColor="blue.800" borderRadius={"10px"} endColor="gray.500" height="400px" w={"90%"} m="auto" />
        </>
      ),
    },
  ];

  return (
    <Stack w={"90%"} m="auto" gap="4">
      <Slider {...settings2}>
        {slide.map((item, index) => (
          <Box ml="4" key={index}>
            {item.ele}
          </Box>
        ))}
      </Slider>
      <Button isLoading loadingText="Loading...." colorScheme="teal" variant="outline" w={"100%"} />

      <Flex minWidth="max-content" justifyContent={"center"} alignItems="center" gap="2" m="auto">
        {content.map((item, index) => (
          <Box key={index}>{item.ele}</Box>
        ))}
      </Flex>

      <Skeleton w={"100%"} startColor="blue.800" endColor="gray.500" borderRadius={"10px"}>
        <div>contents wrapped</div>
        <div>won't be visible</div>
      </Skeleton>
      <Button isLoading loadingText="Loading....." colorScheme="teal" variant="outline"></Button>
      <Box m="auto" ml="2">
        <Slider {...settings}>
          {content.map((item, index) => (
            <Box ml="4" key={index} borderRadius={"50px"}>
              {item.ele}
            </Box>
          ))}
        </Slider>
      </Box>

      <Skeleton startColor="blue.800" endColor="gray.500" borderRadius={"10px"}>
        <div>contents wrapped</div>
        <div>contents wrapped</div>

        <div>contents wrapped</div>
        <div>contents wrapped</div>

        <div>contents wrapped</div>
        <div>won't be visible</div>
      </Skeleton>

      <Box m="auto" ml="2">
        <Slider {...settings}>
          {content.map((item, index) => (
            <Box ml="4" key={index}>
              {item.ele}
            </Box>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
};

export default SkeletonGc;
