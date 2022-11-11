import { Box, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import CardGc from "../common/CardGc";
import { Settings } from "../common/settings";
let data = [
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5145092/portrait/1920x7702e1f16a2d4f4479284dabf671658897e.jpg",
    popupTitle: "RRR",
    audioLangString: "Telugu",
    duration: "3h 4m",
    genre1: "Action",
    genre2: "Period Drama",
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
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5148935/portrait/1920x770345aac620b1b4b0188b9b4cbad67f485.jpg",
    popupTitle: "Ardh",
    audioLangString: "Hindi",
    duration: "1h 23m",
    genre1: "Comedy",
    genre2: "Drama",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-59341/portrait/1920x7706a5cd32f471c4f78a3dee8fcd236f95cd11020f7da2f44e4a0102a0cdfda1e6b.jpg",
    popupTitle: "Jersey",
    audioLangString: "Telugu",
    duration: "2h 30m",
    genre1: "Drama",
    genre2: "Sports",
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
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/portrait/1920x77060dd64aa6ef748f48bbdf4951a1f6af7b51352ca11794ad79904fded999459e7.jpg",
    popupTitle: "The Kashmir Files",
    audioLangString: "Hindi",
    duration: "2h 43m",
    genre1: "Drama",
    genre2: "",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z571846/portrait/1920x770364454fc4bf746c1956eb58e21632145.jpg",
    popupTitle: "Garuda Gamana Vrishabha Vahana",
    audioLangString: "Kannada",
    duration: "2h 30m",
    genre1: "Crime",
    genre2: "Thriller",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-movie_1921832123/portrait/00movie192183215775429881577a1ad6512311c4c54a24ade6841caf1e8.jpg",
    popupTitle: "Sairat",
    audioLangString: "Marathi",
    duration: "2h 46m",
    genre1: "Drama",
    genre2: "Romance",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-3284/portrait/1920x770ffd5406dde2541ddb0a0d4dcc57ee834.jpg",
    popupTitle: "Sunflower",
    audioLangString: "",
    duration: "",
    genre1: "",
    genre2: "",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-191767/portrait/1920x77053cf74597a844465a32a47be18aa0f8bc1c7bc4f2c8d4ef6a580720e57f259f1.jpg",
    popupTitle: "Moothon",
    audioLangString: "Malayalam",
    duration: "1h 52m",
    genre1: "Drama",
    genre2: "Action",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-2955/portrait/1920x7702bde888e01a54a1688ff0a84809a657aef9692fca19245ee980762d8461cfb17.jpg",
    popupTitle: "Jeet Ki Zid",
    audioLangString: "",
    duration: "",
    genre1: "",
    genre2: "",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-soodhukavvum/portrait/1920x770f61e60986e524fa499f6c860b8c88e2da0336570dab14c618665a38450c17928.jpg",
    popupTitle: "Soodhu Kavvum",
    audioLangString: "Tamil",
    duration: "2h 7m",
    genre1: "Crime",
    genre2: "Action",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z529263/portrait/1920x77053ca64a3a5a948919937b81eb7f2a7f8cb719fc89bb14adaaa3a92c09ff55aa0.jpg",
    popupTitle: "Qismat 2",
    audioLangString: "Punjabi",
    duration: "2h 28m",
    genre1: "Romance",
    genre2: "Drama",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z588913/portrait/1920x7702a30ca0b76504a10990a663d0c4a55d48022e00d8b3e4ca594841aa15dbed611.jpg",
    popupTitle: "Tonic",
    audioLangString: "Bengali",
    duration: "2h 7m",
    genre1: "Drama",
    genre2: "",
  },
  {
    url: "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-369273/portrait/1920x7707c47b251e254462c80266717d90ba9be.jpg",
    popupTitle: "Silence...Can You Hear It?",
    audioLangString: "Hindi",
    duration: "2h 16m",
    genre1: "Mystery",
    genre2: "Thriller",
  },
];

function TopRatingShow() {
  return (
    <Box mx={5} mt={1} textAlign="left">
      <Text fontSize="2xl" fontWeight="bold" my={7} className="z-0">
        IMDB TOP Rating Movies
      </Text>

      <Slider {...Settings}>
        {data.map((item, index) => (
          <CardGc key={index} prem={false} item={item} index={index} />
        ))}
      </Slider>
    </Box>
  );
}

export default TopRatingShow;
