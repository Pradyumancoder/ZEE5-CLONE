import React from 'react'
import { AspectRatio, Box, Flex, GridItem, Image, Spacer, StackDivider, Text } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

import "./Playshow.css"
import TrendingNearYouGc from '../../../Components-Gc/Home/TrendingNearYouGc'
import Trending from './Trending'
import Addmodal from './Addmodal'
import Top10Shows from '../../../Components-Gc/TvShow/Top10Shows'
import TopRatingShow from '../../../Components-Gc/TvShow/TopRatingShow'
import LatestEpiTvShow from '../../../Components-Gc/TvShow/LatestEpiTvShow'


function Playshow() {
  return (
    <div className='play-pra'>
      <Flex>
        <div>
          <Box h="500px" w="60rem" bgColor="blue">
            {/* <AspectRatio  ratio={16/8.5}>
  <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
             
          </Box>

   <Box>
   <Stack spacing={3} className="pra-text005">
  <Text fontSize='22px' marginRight="25rem" cursor="pointer" color="white" >Bhagya lakshmi </Text>
  <Text className='mid-pra3' fontSize='25px'>Virendra Gives Some Advice to Neelam </Text>
  <Text className='last-tv-pra' fontSize='25px' >TV Shows </Text>
  </Stack> */}
          </Box>
        </div>

        {/* divs */}

        <div className='play-dis'>
          <Box className='example-pta' h="500px" p='4' w="rem" bgColor="black" >

            <Trending></Trending>
            <Trending></Trending>
            {/* <Box>
     
     <scrollY>
          <VStack
          
          spacing={4}
          align='stretch'
        > 
        <div className='shu-pra'>
          <Flex>
          <Box h='100px' w="200px" bg='yellow.200' boxSize='150px' overscrollX={'auto'}>
          <Image h="9rem" src='https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5247721/list/0000006728157842e3c24d699e42650ebd79b9a1.jpg' alt='Dan Abramov'
          />  
          </Box>
          <Spacer/>
          <Box className='lakshmi-pra' p='1' h="60px" padding="2px">
            <Stack>
            <Text>Lakshmi Rebukes Kiran and Karishma</Text>
            <Text>E395.12Nov 2022</Text>
            </Stack>
          </Box>
          </Flex>
          </div>
          <Box h='100px' w="200px" bg='tomato' boxSize='150px'>
          <Image h="9rem" src='https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5247726/list/00000136b40f45ae13d94ad59a7b062668041d13.jpg' alt='Dan Abramov' />
          </Box>
          <Box h='100px' w="200px" bg='pink.100' boxSize='150px'>
          <Image h="9rem" src='https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5247723/list/00000103e46114dc733f4a17bbf2eb261fe01d9e.jpg' alt='Dan Abramov' />
          </Box>
          <Box h='100px' w="200px" bg='pink.100' boxSize='150px'>
          <Image h="9rem" src='https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5247725/list/00000130a854bff448b046c6b7475c1d8c672ff3.jpg' alt='Dan Abramov' />
          </Box>
          <Box h='100px' w="200px" bg='pink.100' boxSize='150px'>
          <Image src='https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5244217/list/00000011c7cd6a109438460b8fda02480642e238.jpg' alt='Dan Abramov' />
          </Box>
          <Box h='100px' w="200px" bg='pink.100' boxSize='150px'>
          <Image src='https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/0-1-6z5244217/list/00000011c7cd6a109438460b8fda02480642e238.jpg' alt='Dan Abramov' />
          </Box>
        </VStack>
        </scrollY>
</Box> */}


          </Box>
          <Box className='modal-shukla'>
            {/* <Addmodal></Addmodal> */}
          </Box>
        </div>

        {/* modal use for adds */}


      </Flex>
      {/* <TrendingNearYouGc/> */}
      <Top10Shows />
      <TopRatingShow />
      <LatestEpiTvShow />
    </div>

  )
}

export default Playshow