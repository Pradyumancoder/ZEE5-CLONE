import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import { Settings } from "../common/settings";

let data = [
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234574/list/1170x658withlogo5ec2f08438b64bd7a0715277011f87416e774273bcab4627a70e5f23a485923f.jpg",
    popupTitle: "Where the Crawdads Sing",
  },

  {
    url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234572/list/1170x658withlogo24b333694acb425e80ed532a1ee94469.jpg",
    popupTitle: "Spider-Man No-Way-Home",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5214599/list/1170x658withlogof65c0a6f484e4151a7336f67cd7b8da0.jpg",
    popupTitle: "Jurassic World",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246193/list/1170x658withlogo8476d67b54094656ad5c10a217300c29.jpg",
    popupTitle: "Mr.Malcom's",
  },  {
    url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234574/list/1170x658withlogo5ec2f08438b64bd7a0715277011f87416e774273bcab4627a70e5f23a485923f.jpg",
    popupTitle: "Where the Crawdads Sing",
  },

  {
    url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234572/list/1170x658withlogo24b333694acb425e80ed532a1ee94469.jpg",
    popupTitle: "Spider-Man No-Way-Home",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5214599/list/1170x658withlogof65c0a6f484e4151a7336f67cd7b8da0.jpg",
    popupTitle: "Jurassic World",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246193/list/1170x658withlogo8476d67b54094656ad5c10a217300c29.jpg",
    popupTitle: "Mr.Malcom's",
  },
];

const RentandWatch = () => {
  return (
    <Box mx={5} mt={1} textAlign="left">
      <Text fontSize="2xl" fontWeight="bold" my={7} className="z-0">
        Rent And Watch
      </Text>

      <Slider {...Settings}>
        {data.map((item, index) => (
          <VStack key={index}  gap={4} index={index} className="hover:scale-105 duration-150 " >
            <Image boxSize='100px'  borderRadius="6" w={'90%'}objectFit='cover' src={item.url} alt={item.popupTitle}></Image>
            <Text>{item.popupTitle}</Text>
          </VStack>
        ))}
      </Slider>
    </Box>
  );
};

export default RentandWatch;
