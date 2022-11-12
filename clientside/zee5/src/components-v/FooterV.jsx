import { Box, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import {AiFillFacebook,AiFillInstagram,AiOutlineTwitter,AiFillYoutube} from "react-icons/ai"
import "./FooterV.css"
function Footer(){
return (<Box  paddingLeft={"30px"}>
    <Box marginBottom={"80px"} marginTop={"60px"}>
    <Flex className="footerBottomSection" >
        <Box   >
        <Stack textAlign={"left"} className="Popular-Tv-Shows">
<Heading  size={"xsm"} color={"white"}>Live TV By language</Heading>
<Text>English</Text>
<Text>Hindi</Text>
<Text>Telugu</Text>
<Text>Tamil</Text>
<Text>Marathi</Text>
<Text>Kanada</Text>
        </Stack>

        </Box>
        <Box>
        <Stack className="Preminum-Movies">
<Heading size={"xsm"} color={"white"}>LIVE TV By Genre</Heading>
<Text>News</Text>
<Text>EnterTainment</Text>
<Text>Movies</Text>
<Text>Music</Text>
<Text>Lifestyle</Text>
<Text>Devotonal</Text>
        </Stack>

        </Box>
        <Box>
        <Stack className="Popular-LIVE-TV-Channels">
<Heading size={"xsm"} color={"white"}>Must-Watch Entertainment</Heading>
<Text>Zee TV HD</Text>
<Text>&TV HD</Text>
<Text>Zee Marathi HD</Text>
<Text>Big Magic</Text>
<Text>Zee Yuva</Text>
<Text>Zee Cafe HD</Text>
        </Stack>

        </Box>
        <Box>
        <Stack className="Popular-Web-Series">
<Heading size={"xsm"} color={"white"}>Must-Watch News</Heading>
<Text>Aaj Tak</Text>
<Text>Zee News</Text>
<Text>TV9 Marathi</Text>
<Text>Zee24 Taas</Text>
<Text>India Today</Text>
<Text>Republic TV</Text>
        </Stack>

        </Box>
        <Box>
        <Stack className="Bollywood-Top-Celebrites">
<Heading size={"xsm"} color={"white"}>Must-Watch Movies</Heading>
<Text>Zee Cinema HD</Text>
<Text>&Pictures HD</Text>
<Text>Zee Talkies HD</Text>
<Text>Zee Anmol Cinema</Text>
<Text>&Prive HD</Text>
<Text>&flix HD</Text>
        </Stack>

        </Box>
        <Box>
        <Stack className="Games-News">
<Heading size={"xsm"} color={"white"}>Must-Watch Music & Lifestyle</Heading>
<Text>Zing</Text>
<Text>9x jalwa</Text>
<Text>9XM</Text>
<Text>E24</Text>
<Text>Zee Zest HD</Text>
<Text>Fashion TV Paris</Text>
        </Stack>

        </Box>
    </Flex>

    </Box>
    <Box className="LineThin" width={"95%"}></Box>
    <Heading></Heading>
    {/* download googlr pay contact icons */}
    <Flex justifyContent={"space-between"} marginTop={"50px"} paddingRight={"30px"}>
<Box >
    <Flex  gap={"1rem"}>
    <Box>Dwonload apps</Box>
    <Box><img src="play_store.png" alt ="google"/></Box>
    <Box><img src="app_store.png" alt ="google"/></Box>
    </Flex>
</Box>
<Box>
    <Flex justifyContent={"space-evenly"} gap={"1rem"} paddingRight={"30px"} >
        <Box>Contact with us</Box>
        <Box><AiFillFacebook size="20px" /></Box>
        <Box><AiFillInstagram  size="20px"/></Box>
        <Box><AiOutlineTwitter  size="20px"/></Box>
        <Box><AiFillYoutube size="20px"/></Box>
    </Flex>
</Box>
    </Flex>
    {/* 2nd Box */}
    <Flex gap={"1rem"} marginBottom={"30px"} marginTop={"30px"}>
    <Box>About Us</Box>
    <Box>|</Box>
    <Box>Help Center</Box>
    <Box>|</Box>
    <Box>Privacy Policy</Box>
    <Box>|</Box>
    <Box>Terms of Use</Box>
    </Flex>

    <Flex className="footerBottomSection">
        <Box   >
        <Stack textAlign={"left"} className="Popular-Tv-Shows">
<Heading  size={"xsm"} color={"white"}>Popular TV Shows</Heading>
<Text>Kumkum Bhagya</Text>
<Text>Kundali </Text>
<Text>Bhagya Laxmi</Text>
<Text>Tujhse Hai Rabba</Text>
<Text>kyun Riston Mein katt</Text>
        </Stack>

        </Box>
        <Box>
        <Stack className="Preminum-Movies">
<Heading size={"xsm"} color={"white"}>Preminum Movies</Heading>
<Text>Kya Meri Sonam Gupta Bewfa Hai?</Text>
<Text>Helmet</Text>
<Text>200 Halla Ho</Text>
<Text>14 Phere</Text>
<Text>Dial 100</Text>
        </Stack>

        </Box>
        <Box>
        <Stack className="Popular-LIVE-TV-Channels">
<Heading size={"xsm"} color={"white"}>Popular LIVE TV Channels</Heading>
<Text>Aaj Tak</Text>
<Text>Zee News</Text>
<Text>Zee TV HD</Text>
<Text>&TV HD</Text>
<Text>Zee Marathi HD</Text>
        </Stack>

        </Box>
        <Box>
        <Stack className="Popular-Web-Series">
<Heading size={"xsm"} color={"white"}>Popular Web Series</Heading>
<Text>Sunflower</Text>
<Text>Jeet Ki Zid</Text>
<Text>Bicchoo Ka Khel</Text>
<Text>State of Siege:26/11</Text>
<Text>Naxalbari</Text>
<Text>Tripling</Text>
        </Stack>

        </Box>
        <Box>
        <Stack className="Bollywood-Top-Celebrites">
<Heading size={"xsm"} color={"white"}>Bollywood Top Celebrites</Heading>
<Text>Sunny Leon</Text>
<Text>Disha Patani</Text>
<Text>Deepika Padukone</Text>
<Text>Slamana Khan</Text>
<Text>Nora Fatehi</Text>
        </Stack>

        </Box>
        <Box>
        <Stack className="Games-News">
<Heading size={"xsm"} color={"white"}>Games & News</Heading>
<Text>play</Text>
<Text>Stories</Text>
<Text>Articles</Text>
<Text></Text>
<Text></Text>
        </Stack>

        </Box>
    </Flex>
</Box>)

}
export default Footer