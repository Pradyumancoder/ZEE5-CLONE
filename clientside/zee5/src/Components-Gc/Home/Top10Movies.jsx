



import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import { FaCrown } from "react-icons/fa";
import Slider from "react-slick";
import CardGc from "../common/CardGc";
import { Settings } from "../common/settings";

let data=[
   {
   "url": "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5177236/portrait/1920x770cd788cc8f66e4f27accee7da64d1e9cd.jpg",
   "top10Numbers": "1",
   "popupTitle": "Janhit Mein Jaari"
   },
   {
   "url": "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5172328/portrait/1920x77007054b7e4c68467d92059e604b937ce4.jpg",
   "top10Numbers": "2",
   "popupTitle": "Maa Neella Tank"
   },
   {
   "url": "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5181112/portrait/1920x7708502c7d44df94abb8df571634ddeff55.jpg",
   "top10Numbers": "3",
   "popupTitle": "Veetla Vishesham"
   },
   {
   "url": "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5172356/portrait/1920x7705a2073dc89d04da2926dbcd3886785aaa974ce344e704cabb3b0556de80eaa7b.jpg",
   "top10Numbers": "4",
   "popupTitle": "Saas Bahu Achaar Pvt. Ltd."
   },
   {
   "url": "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5149852/portrait/1920x7708760d4e6a1c8429cbfea6f1e4a375f6d25ac3d74d6544bc89704d6475e368c79.jpg",
   "top10Numbers": "5",
   "popupTitle": "Forensic"
   },
   {
   "url": "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5168144/portrait/1920x7709b5906f9ab1347e7915762097af21c2e.jpg",
   "top10Numbers": "6",
   "popupTitle": "Dhaakad"
   },
   {
   "url": "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5145215/portrait/1920x770abf42130d9cf41dab2bf9e648cf3193b0b8736722f40431bb31a5214ab98851c.jpg",
   "top10Numbers": "7",
   "popupTitle": "The Broken News"
   },
   {
   "url": "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5145092/portrait/1920x7702e1f16a2d4f4479284dabf671658897e.jpg",
   "top10Numbers": "8",
   "popupTitle": "RRR"
   },
   {
   "url": "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5161064/portrait/1920x770141bcd9ccf9945d490a7935a3cc311069180d7d5e4c248279410203ac82bc67d.jpg",
   "top10Numbers": "9",
   "popupTitle": "Dharmaveer: Mukkam Post Thane"
   },
   {
   "url": "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-1965/portrait/1920x770fa2a0768d2f64c07abef5d580c170cb0.jpg",
   "top10Numbers": "10",
   "popupTitle": "Fingertip"
   }
   ]

function Top10Movies() {
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

            {data.map((item, index) => (
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
                  <Text className="top-ten-numbers absolute top-10 right-10 invisible md:visible">{item.top10Numbers}</Text>
               </GridItem>
            ))}
         </Slider>
         {/* </Grid> */}
      </Box>
   );
}

export default Top10Movies;
