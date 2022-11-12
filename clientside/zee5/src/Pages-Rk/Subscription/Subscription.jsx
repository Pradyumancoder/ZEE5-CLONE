import React,{useState} from 'react'
import "./Subscription.css"
import { GrPersonalComputer } from "react-icons/gr"
import {RiVipCrownFill} from "react-icons/ri"

import LeftBoxCartItem from '../../Components-Rk/LeftBoxCartItem'
import { Badge, Flex, HStack, Text, Box, Center, Checkbox } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { paymentAmount } from '../../Redux/payment/payment.action'
// import { Box, HStack } from '@chakra-ui/react';


const Subscription = () => {
    const [checkItem,setCheckedItems] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // console.log(checkItem)


    const handleSubClick = ()=>{
        let pay = checkItem?399:699;
        dispatch(paymentAmount(pay))

        navigate("/myaccount/accountinfo")
    }
    return (
        <>
        <Text w="880px" m="auto" textAlign="start" >Step 1 of 3</Text>
        <Text w="880px"  m=" -10px auto 6px auto" textAlign="start" fontSize="30px" >Subscribe to Premium</Text>
        <div id='subscription'>
            <div className="left-box">
                <h2 className="left-box-heading">
                    Watch Ad-Free with Premium!
                </h2>
                <div className="left-box-content">
                    <LeftBoxCartItem light="2400 + " dark="Blockbuster Movies" />
                    <LeftBoxCartItem light="200 + " dark="Web Series" />
                    <LeftBoxCartItem light="Live TV, " dark="Before TV and Downloads" />
                    <LeftBoxCartItem light="Offer: " dark="Buy Premium and Get ₹ 100 voucher" />
                    <LeftBoxCartItem light="Watch on Mobile, TV, Laptop" dark="|" />
                    <LeftBoxCartItem light="Eduaurra" dark="Competitive Exams Learning" />
                </div>
            </div>
            <div className="right-box">
                <div className="right-box-heading-1">
                    <Flex justify={{base:"space-around",md:"space-around",lg:"space-between"}}>
                        <Badge h="fit-content" p="4px 6px" variant='solid' colorScheme='blue'>
                            Limited Period Offer
                        </Badge>
                        <Badge h="fit-content" p="4px 6px" variant='outline' colorScheme='red'>
                            SAVE 30%
                        </Badge>
                    </Flex>
                    <Flex justify={{base:"space-around",md:"space-around",lg:"space-between"}}>
                        <h2>12 months plan</h2>
                        <HStack>
                            <Text as='del'>₹999</Text>
                            <Text fontSize='27px' color='black'> ₹699</Text>
                            {!checkItem && <Checkbox defaultChecked></Checkbox>}
                        </HStack>
                    </Flex>
                    <Box fontWeight="light" color="black.100" mt="-10px" textAlign="start" fontSize="12px">Effective Price ₹58/months</Box>
                </div>
                <Box pl="5px" pt="4px" bg="#F9F4F7" h="30px" w={{ base: '90vw', md: '90%', lg: '380px' }}>
                    <HStack alignItems="center">
                        <div >
                            <GrPersonalComputer className="computer-icon" />
                        </div>
                        <Text>Watch on</Text>
                        <Text fontWeight="bold" >2 screens</Text>
                        <Text>at the same time</Text>
                    </HStack>
                </Box>
                <Flex alignItems="center" mt="1rem" borderRadius="0.6rem" h="60px" w={{ base: '90%', md: '90%', lg: '380px' }} border="1px dotted black" p="16px 34px 16px 10px" >
                    <Flex w={{ base: '90%', md: '90%', lg: '380px' }} justify={{base:"space-around",md:"space-around",lg:"space-between"}}alignItems="center">
                        <Text>3 months plan</Text>
                        <HStack>
                            <Flex alignItems="center">₹ <Text fontWeight="bold" fontSize="25px">399</Text></Flex>
                            <Checkbox
                              onChange={(e) => setCheckedItems(e.target.checked)}
                            boxSize="18px"></Checkbox>
                        </HStack>
                    </Flex>
                </Flex>
                <Box pl="5px" pt="4px" bg="#F9F4F7" h="30px"  w={{ base: '90%', md: '90%', lg: '380px' }}>
                    <HStack alignItems="center">
                        <div>
                            <GrPersonalComputer className="computer-icon" />
                        </div>
                        <Text>Watch on</Text>
                        <Text fontWeight="bold" >3 screens</Text>
                        <Text>at the same time</Text>
                    </HStack>
                </Box>
                <Center h="16px" m="20px 0" w="380px">
                    Have a code ?
                </Center>
                {/* here we put onClick event on clicking we go to the account-info page */}
                <Center onClick={handleSubClick} borderRadius="10px" fontSize="14px" color="white" h="51px" bg="#8230C6" w={{ base: '90%', md: '90%', lg: '380px' }} cursor="pointer">
                    continue with { checkItem?" ₹399": " ₹699"}
                </Center>
            
            </div>
            <div className="crown">
                <RiVipCrownFill className='crown-image'/>
            </div>
        </div>
        </>
    )
}

export default Subscription