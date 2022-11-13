import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
// import Slider from "react-slick";
import Card1Gc from '../../../Components-Gc/common/Card1Gc';
import "./Playshow.css"
// import Card1Gc from "../common/Card1Gc";
// import { Settings1 } from "../common/settings1"

let data=[ {
  "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249055/list/0000015246752ee4f7184b29a732b47f7f8c6388.jpg",
  "top10Numbers": "1",
  "popupTitle": "Ninaithaale Inikum"
  },
  {
  "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249018/list/000000953a1f8945d593440198e86069d77c6cbc.jpg",
  "top10Numbers": "2",
  "popupTitle": "Kannathil Muthamittal"
  },
  {
  "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249032/list/000000315009177e01dc4ae9a525614b4c3cba4c.jpg",
  "top10Numbers": "3",
  "popupTitle": "Chithiram Pesuthadi"
  },
  {
  "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249038/list/000002047a745c86531449d2955ec8a04544e3da.jpg",
  "top10Numbers": "4",
  "popupTitle": "Thavamaai Thaavamirunthu."
  },
  {
  "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249060/list/0000000324141f70273646e68f52331e6673f68f.jpg",
  "top10Numbers": "5",
  "popupTitle": "Maari"
  },
  {
  "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249027/list/00000091f7b34a9e12b6498f80e5a1bcf70e9574.jpg",
  "top10Numbers": "6",
  "popupTitle": "Deivam Thantha Poove"
  },
  {
  "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249065/list/000002104647fc567d9a4763ac77b6d1f8558898.jpg",
  "top10Numbers": "7",
  "popupTitle": "Vidhya No1"
  },
  {
  "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249074/list/00000168c22e705674cf435eb5e218a0b47cfbba.jpg",
  "top10Numbers": "8",
  "popupTitle": "Meenakshi Ponnuga"
  },
  {
  "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249044/list/000001975abc00c1396540dba5ea5da88a56437d.jpg",
  "top10Numbers": "9",
  "popupTitle": "Prenabu"
  },
  {
  "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249056/list/00000046419f1beaaafa420cb34eb62224707f79.jpg",
  "top10Numbers": "10",
  "popupTitle": "Ninaithake Inikum"
  },
    {
    "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249055/list/0000015246752ee4f7184b29a732b47f7f8c6388.jpg",
    "top10Numbers": "1",
    "popupTitle": "Ninaithaale Inikum"
    },
    {
    "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249018/list/000000953a1f8945d593440198e86069d77c6cbc.jpg",
    "top10Numbers": "2",
    "popupTitle": "Kannathil Muthamittal"
    },
    {
    "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249032/list/000000315009177e01dc4ae9a525614b4c3cba4c.jpg",
    "top10Numbers": "3",
    "popupTitle": "Chithiram Pesuthadi"
    },
    {
    "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249038/list/000002047a745c86531449d2955ec8a04544e3da.jpg",
    "top10Numbers": "4",
    "popupTitle": "Thavamaai Thaavamirunthu."
    },
    {
    "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249060/list/0000000324141f70273646e68f52331e6673f68f.jpg",
    "top10Numbers": "5",
    "popupTitle": "Maari"
    },
    {
    "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249027/list/00000091f7b34a9e12b6498f80e5a1bcf70e9574.jpg",
    "top10Numbers": "6",
    "popupTitle": "Deivam Thantha Poove"
    },
    {
    "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249065/list/000002104647fc567d9a4763ac77b6d1f8558898.jpg",
    "top10Numbers": "7",
    "popupTitle": "Vidhya No1"
    },
    {
    "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249074/list/00000168c22e705674cf435eb5e218a0b47cfbba.jpg",
    "top10Numbers": "8",
    "popupTitle": "Meenakshi Ponnuga"
    },
    {
    "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249044/list/000001975abc00c1396540dba5ea5da88a56437d.jpg",
    "top10Numbers": "9",
    "popupTitle": "Prenabu"
    },
    {
    "url": "https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5249056/list/00000046419f1beaaafa420cb34eb62224707f79.jpg",
    "top10Numbers": "10",
    "popupTitle": "Ninaithake Inikum"
    }
    ]


const Trending = () => {
  return (
    <Box mx={5} mt={1}  textAlign="left">
      {/* <Text className="mu-pra" fontSize="2xl" fontWeight="bold"  my={7}>
       Latest Episode
      </Text> */}

      {/* <Grid my={4} gap={4} templateColumns="repeat(20, 1fr)" overflowXY={"hidden"} >
        {data.map((item, index) => (
          <Card item={item} index={index}  />
          ))}
          
        </Grid> */}
      {/* <Slider   {...Settings1}> */}
       
        {data.map((item, index) => (
          <Card1Gc key={index} item={item} prem={false} index={index} />
        ))}
      {/* </Slider> */}

     
    </Box>
  )
}

export default Trending