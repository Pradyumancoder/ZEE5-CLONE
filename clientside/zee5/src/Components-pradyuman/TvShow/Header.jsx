import { Box, Button, Heading, Text,} from '@chakra-ui/react'
import React from 'react'
import DummyNavBar from './DummyNavBar'
import {FiShare2} from 'react-icons/fi'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import "./Header.css"


const Header = () => {
  return (
    <Box>
       <Box><DummyNavBar /></Box> {/*  //import main navbar*/}

      <Box>
{/* Dummy data appending use useParams data in all realventData */}
<Box bgColor="black" height="40rem">
<Box height="34rem" mt="72px"  zIndex="1" bgSize="100%" bgImage="url(https://akamaividz2.zee5.com/image/upload/w_1366,h_548,c_scale,f_webp,q_auto:eco/resources/0-6-127/cover/1170x658withlogo98ba1f09c7ed48828c4cf6ce78a42d48.jpg)" 
  bgRepeat="no-repeat"
 > 
<Box marginRight="10rem" ml="-63rem" pt="2rem" > <Heading color="white" >{"Kumkum Bhagya"}</Heading> 
<Text mt="20px" fontWeight="700" color="gray" >2260 Episodes2014RomanceDramaU/A</Text>
<Text fontWeight="700" color="white" >Audio Languages: Hindi</Text>
<Text fontWeight="700" mt="10px" color="white" >Subtitles: English</Text>

</Box>
<Box  mt="2rem" w="34%" ml="8rem"><Text color="white" >Torn apart by betrayals and misunderstandings, star-crossed lovers Pragya and Abhi find their circumstances reversed. Rhea returns to wreak havoc in the lives of a happily married Ranbeer and Prachi.</Text></Box>

   <Text ml="-92rem" pt="3rem" fontWeight="700" color="white">Cast:</Text>
   <Box ml="6rem" pt="1rem" color="white" display="flex" gap="5rem" >
   <Box >
<Text>Rhea</Text>
<Text color="#6B46C1">Tina Phillips</Text>
</Box>
<Box>
<Text>Ranbeer</Text>
<Text color="#6B46C1">Krishna Kaul</Text>
</Box>
<Box>
<Text>Prachi</Text>
   <Text color="#6B46C1">Mugdha Chaphekar</Text>
</Box>
</Box>
<Box  bgGradient='linear-gradient(to bottom, #0000000a, #000000)' pl="6rem" mt="5rem" pb="1rem" color="white" display="flex" gap="7rem" >
  <Box>
  <FiShare2 className='icon' />
  <Text>Share</Text>
  </Box>
  <Box>
  <BsFillPlayCircleFill className='icon' />
  <Text>Watch Promo</Text>
  </Box>

</Box>
</Box>

<Button  ml="64rem" bgColor='#6B46C1' color="white" leftIcon={<BsFillPlayCircleFill />}>
WATCH LATEST EPISODE
  </Button>
      </Box>
    </Box>
    </Box>
  )
}

export default Header
