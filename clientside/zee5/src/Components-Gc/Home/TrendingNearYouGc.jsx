import { Box, Grid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import CardGc from "../common/CardGc";
import { Settings } from "../common/settings";

function TrendingNearYouGc() {
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
  let data = [
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5149852/portrait/1920x7708760d4e6a1c8429cbfea6f1e4a375f6d25ac3d74d6544bc89704d6475e368c79.jpg",
      popupTitle: "Forensic",
      audioLangString: "Hindi",
      duration: "2h 8m",
      genre1: "Crime",
      genre2: "Thriller",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5161064/portrait/1920x770141bcd9ccf9945d490a7935a3cc311069180d7d5e4c248279410203ac82bc67d.jpg",
      popupTitle: "Dharmaveer: Mukkam Post Thane",
      audioLangString: "Marathi",
      duration: "2h 47m",
      genre1: "Biopic",
      genre2: "Drama",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5168144/portrait/1920x7709b5906f9ab1347e7915762097af21c2e.jpg",
      popupTitle: "Dhaakad",
      audioLangString: "Hindi",
      duration: "2h 5m",
      genre1: "Crime",
      genre2: "Mystery",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5177236/portrait/1920x770cd788cc8f66e4f27accee7da64d1e9cd.jpg",
      popupTitle: "Janhit Mein Jaari",
      audioLangString: "Hindi",
      duration: "2h 21m",
      genre1: "Comedy",
      genre2: "Drama",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/portrait/1920x77060dd64aa6ef748f48bbdf4951a1f6af7b51352ca11794ad79904fded999459e7.jpg",
      popupTitle: "The Kashmir Files",
      audioLangString: "Hindi",
      duration: "2h 43m",
      genre1: "Drama",
      genre2: "",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-101-10z5145273/portrait/1920x770681eb40058c046b7927bea554484d07f.jpg",
      popupTitle: "RRR",
      audioLangString: "",
      duration: "",
      genre1: "",
      genre2: "",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133622/portrait/1920x7705ef1215cc2984b548b3356566bf54c3d712772e37d5341fe9df182c9f5732ecf.jpg",
      popupTitle: "Jhund",
      audioLangString: "Hindi",
      duration: "2h 49m",
      genre1: "Biopic",
      genre2: "Sports",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5146416/portrait/1920x77030295e51fe54452d8c85e76c5ec756e892b2b3c05ed24c43919a4293fbe8344b.jpg",
      popupTitle: "Attack: Part 1",
      audioLangString: "Hindi",
      duration: "1h 57m",
      genre1: "Action",
      genre2: "",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5168593/portrait/1920x770d32fb5a532b54f718e18d08ae5bfe599.jpg",
      popupTitle: "Bangarraju (Hindi)",
      audioLangString: "Hindi",
      duration: "2h 31m",
      genre1: "Drama",
      genre2: "Comedy",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5148935/portrait/1920x770345aac620b1b4b0188b9b4cbad67f485.jpg",
      popupTitle: "Ardh",
      audioLangString: "Hindi",
      duration: "1h 23m",
      genre1: "Comedy",
      genre2: "Drama",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5129922/portrait/1920x770f5cd699c80af47118085d23a878faa68.jpg",
      popupTitle: "Spider-Man: No Way Home",
      audioLangString: "English, Hindi, Tamil, Telugu",
      duration: "2h 19m",
      genre1: "Adventure",
      genre2: "Fantasy",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5176983/portrait/1920x770b12bd17d704c48c4aacd37e15cc183da.jpg",
      popupTitle: "The Wild Goose Lake",
      audioLangString: "English",
      duration: "1h 46m",
      genre1: "Crime",
      genre2: "Action",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5176982/portrait/1920x77042e129fc00244061afc5515e76ecb441.jpg",
      popupTitle: "The Farewell",
      audioLangString: "English",
      duration: "1h 35m",
      genre1: "Drama",
      genre2: "Adventure",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5156101/portrait/1920x7702f5c1d7a0eee45bdbdd6f473c9f51fe8.jpg",
      popupTitle: "Radhe Shyam",
      audioLangString: "Hindi",
      duration: "2h 15m",
      genre1: "Romance",
      genre2: "Drama",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5145103/portrait/1920x770189f07ded33c4436b6d1796409308f04.jpg",
      popupTitle: "Zombivli",
      audioLangString: "Marathi",
      duration: "2h 8m",
      genre1: "Horror",
      genre2: "Comedy",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5168387/portrait/1920x77048d8392e87ec44d3a8fd89c036019e9e.jpg",
      popupTitle: "Shut Up Sona",
      audioLangString: "English, Hindi",
      duration: "1h 25m",
      genre1: "Documentary",
      genre2: "Drama",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5117565/portrait/1920x7708e744fbdcb554e54a1036108a0832ebf.jpg",
      popupTitle: "Valimai (Hindi)",
      audioLangString: "Hindi",
      duration: "2h 33m",
      genre1: "Action",
      genre2: "Crime",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z562203/portrait/1920x7706847e0d919d448328eeb2f88b259d73a0fd8743b1e984c9782e72e68355cf49e.jpg",
      popupTitle: "Antim: The Final Truth",
      audioLangString: "Hindi",
      duration: "2h 15m",
      genre1: "Action",
      genre2: "Crime",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z595840/portrait/1920x770e7d51316ea6740c39197181f81575868.jpg",
      popupTitle: "Love Hostel",
      audioLangString: "Hindi",
      duration: "1h 40m",
      genre1: "Crime",
      genre2: "Thriller",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-73415/portrait/1920x770546cc83b519e4088b6f0bec6cdd6e7d275cce518f27e420ea676dda625c6b0d3.jpg",
      popupTitle: "The Tashkent Files",
      audioLangString: "Hindi",
      duration: "2h 19m",
      genre1: "suspense",
      genre2: "Thriller",
    },
  ];
  

  return (
    <Box mx={5} mt={1} textAlign="left">
      <Text fontSize="2xl" fontWeight="bold" my={7} className="z-0">
        Trending Near You
      </Text>

      {/* <Grid my={4} gap={4} templateColumns="repeat(20, 1fr)" overflowXY={"hidden"} >
        {data.map((item, index) => (
          <Card item={item} index={index}  />
        ))}
       
      </Grid> */}
      <Slider {...Settings}>
        {data.map((item, index) => (
          <CardGc  key={index} item={item} index={index}/>
        ))}
      </Slider>
    </Box>
  );
}

export default TrendingNearYouGc;
