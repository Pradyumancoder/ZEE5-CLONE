import "./VideoPlay.css";
import { Text, Flex, Box, Center, useDisclosure, Fade, SimpleGrid } from "@chakra-ui/react";
import { BsShare } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";
import { RiPlayListAddLine } from "react-icons/ri";
import { VscTriangleDown } from "react-icons/vsc";
import { VscTriangleUp } from "react-icons/vsc";
import React, { useState } from "react";
import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import Top10Shows from "../Components-Gc/TvShow/Top10Shows";
import TopRatingShow from "../Components-Gc/TvShow/TopRatingShow";
import LatestEpiTvShow from "../Components-Gc/TvShow/LatestEpiTvShow";
import Trending from "../Components-pradyuman/TvShow/PlaytvShow/Trending";
import { useParams } from "react-router-dom";

const api_key = `AIzaSyABod8lOndkalv1saeCleLFmeS1gaOZPSU`;
let api_link = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=RRR&key=`;

const VideoPlay = () => {
    const [myVideoId,setVideoId] = useState("IOcGS4D1tM0")
    const [toggle, setToggle] = useState(true)
    const { isOpen, onToggle } = useDisclosure();
    const {title} = useParams("title")
    console.log('hi',title)
    const handleToggle = () => {
        onToggle();
        setToggle(!toggle)
    }
    // useEffect(()=>{
    //         axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title}&key=${api_key}`).then(res=>{
    //             res=res.data?.items[0]?.id?.videoId
    //           if(res) setVideoId(res);
    //         }).catch(err=>{
    //             console.log(err)
    //         })
        
    // },[])
    return (
        <>
            <Flex >
                <Box w="900px" className="video-first-box">
                    <div>
                        <iframe id="video-player" width="900" height="425" src={`https://www.youtube.com/embed/${myVideoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <Box p={{ base: "1rem", md: "1.5rem", lg: "2rem" }}>
                        <Text textAlign="left" m="16px 0 8px 0" fontSize="14px" fontWeight="bold" color="white" >{title}</Text>
                        <Text textAlign="left" fontSize="19px" fontWeight="bold" color="#A785FF" >Movies/Shows/News</Text>
                        <Flex gap="1rem">
                            <Text fontSize="18px" fontWeight="bold"  >2min to 3hours</Text>
                            <Text fontSize="18px" fontWeight="bold" color="#A785FF">Comedy/Drama</Text>
                            <Text fontSize="18px" fontWeight="bold" color="#A785FF">Action</Text>
                        </Flex>
                        <Flex
                        gap="5px"
                            p="2rem"
                            m="2rem 0 2rem 0"
                            h="120px"
                            
                            alignItems="center"
                            rounded='md'
                            
                        >
                            <Center
                                shadow='dark-lg'
                                h="120px"
                                // bg="red"
                                p="0 3rem"
                            >
                                <Grid placeItems="center">
                                    <BsShare size="24px" />
                                    <Text mt="6px">Share</Text>
                                </Grid>
                            </Center>
                            <Center
                                h="120px"
                                shadow='dark-lg'
                                p="0 3rem"
                            >
                                <Grid placeItems="center" >
                                    <RiPlayListAddLine size="24px" />
                                    <Text mt="6px">WatchList</Text>
                                </Grid>
                            </Center>
                            <Center
                                h="120px"
                                shadow='dark-lg'
                                p="0 3rem"
                            >
                                <Grid placeItems="center" >
                                    <BsPlayCircle size="24px" />
                                    <Text mt="6px">WatchTrailer</Text>
                                </Grid>
                            </Center>
                        </Flex>
                        <Flex m="0 0 32px">
                            <Text fontSize="17px" fontWeight="bold">Audio Languages: </Text>
                            <Text fontSize="17px" fontWeight="bold" ml="1rem" color="#A785FF">Hindi</Text>
                        </Flex>
                        <Flex m="0 0 32px">
                            <Text fontSize="17px" fontWeight="bold">Subtitles: </Text>
                            <Text fontSize="17px" fontWeight="bold" ml="1rem" color="#A785FF">English</Text>
                        </Flex>
                        {/* using accordance here */}
                        <Box>
                            <Box textAlign="justify" fontSize="18px" w={["85vw", "85vw", "750px"]} mb="-17px">
                                Chennai vs China is 2011 Hindi action thriller film starring Suriya, Shruti Haasan and Johnny Nguyen. The story revolves around Bodhidharma, an ancient legend from the 6th century, who was a
                            </Box>

                            <Flex>
                                <Fade in={isOpen}>
                                    <Box
                                        textAlign="justify"
                                        color='white'
                                        mt='4'
                                        fontSize="18px"
                                        w={["85vw", "85vw", "750px"]}
                                    >
                                        master of martial arts and medicines. Centuries later, when Subha, a student, tries to revive Bodhidharma’s skills and find a cure for a virus, Dong Lee from China comes to foil her plans. Will Dong Lee succeed in his plans?
                                    </Box>
                                </Fade>
                                <Text pl="1rem" mt="-2rem" cursor="pointer"  onClick={handleToggle}>
                                    {toggle ? <VscTriangleDown size="2rem"/> : <VscTriangleUp size="2rem" />}
                                    
                                    </Text>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
                <Box w="32vw" justifyContent="center" display={['none','flex','flex']} className="video-second-box" >
                    <Trending/>
                    {/* <Trending/> */}
                </Box>
            </Flex>

      <Top10Shows />
      <TopRatingShow />
      <LatestEpiTvShow />
    </>
  );
};

export default VideoPlay;
