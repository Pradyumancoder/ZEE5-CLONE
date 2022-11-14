
import { Box, Text, Flex, Input, Button, Tab, Tabs, TabList, TabPanels, TabPanel, useColorModeValue, InputGroup, InputLeftElement } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { CgProfile } from "react-icons/cg"
import { BsSearch } from "react-icons/bs"
import React, { useState } from 'react'
import { Image, Stack } from '@chakra-ui/react';
import {useDispatch} from "react-redux"
import { buySubscription } from '../../Redux/payment/payment.action';
import { useNavigate } from 'react-router-dom'
const init = {
    cardNo:"",
    pinNo:""
}
const Payment = () => {

    const [payDet,setPayDet] = useState(init);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleChange = (e)=>{
        setPayDet({...payDet,[e.target.name]:e.target.value});
        console.log(payDet)

    }
    const paymentStep = ()=>{
        const {name,token} = JSON.parse(localStorage.getItem("userCred"))
        const [email,password] = token.split("##+##");
        // console.log({email,password})
        dispatch(buySubscription({email,password}))


        navigate("/")
        // console.log('hi')
        // check crediential is exist or not 

        
    }

    const colors = useColorModeValue(
        ['white', 'white', 'white', 'white'],
        ['white', 'teal.900', 'blue.900', 'blue.900'],
    )
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]

    return (
        <Box m="2rem 0 10rem 0">
            <Text w={{ base: "326px", md: "326px", lg: "798px" }} m="auto" textAlign="start" >Step 3 of 3</Text>
            <Text w={{ base: "326px", md: "326px", lg: "798px" }} m=" -10px auto 6px auto" textAlign="start" fontSize="30px" >Make Payment</Text>
            <Flex
                background="linear-gradient(90deg, rgba(255,233,252,1) 6%, rgba(255,251,254,1) 99%)"
                justify="space-between" m='auto' borderBottom="1px solid white" p={{ base: "16px 24px", md: "16px 24px", lg: "24px" }}
                 w={{ base: "326px", md: "326px", lg: "798px" }} 
                 h={{ base: "73px", md: "73px", lg: "99px" }} >
                <Box>
                    <Text textAlign="start" fontSize="19px" color="#333333">Premium</Text>
                    <Text fontWeight="bold" fontSize="16px" color="#828282">Premium 12 months</Text>
                </Box>
                <Flex>
                    <Flex color="black" alignItems="center">₹ <Text fontWeight="bold" fontSize="25px">699</Text></Flex>
                </Flex>
            </Flex>
            <Flex
                background="linear-gradient(90deg, rgba(255,233,252,1) 6%, rgba(255,251,254,1) 99%)"
                borderTop="1px solid gray"

                gap="10px" justify={{ base: 'start', md: "center", lg: 'center' }} alignItems='center' m="auto" p={{ base: "16px 24px", md: "16px 24px", lg: "24px" }} w={{ base: "326px", md: "326px", lg: "798px" }} h={{ base: "73px", md: "73px", lg: "73px" }} >
                <Text fontWeight="bold" fontSize="14px" color="#333333">Loged In</Text>
                <Text fontSize="14px" color="#828282">8745983389</Text>
                <CgProfile size="32px" color="gray" />

            </Flex>

            {/*  making tabs for payment like upi and other section  */}
            <Box bg="white" color="black" w={{ base: "326px", md: "326px", lg: "798px" }} m="auto" >
                <Tabs display="flex" onChange={(index) => setTabIndex(index)} >
                    <TabList w="253px" display="grid" bg={bg} gridTemplateRows="repeat(4,55px)" borderRight="1px solid gray">
                        <Tab fontSize="16px" w="253px" >UPI</Tab>
                        <Tab fontSize="16px" w="253px" >Credit & Debit Card</Tab>
                        <Tab fontSize="16px" w="253px" >Wallets</Tab>
                        <Tab fontSize="16px" w="253px" >Netbanking</Tab>
                    </TabList>
                    <TabPanels p='2rem' bg="white" h="565px">
                        <TabPanel display="grid">
                            <Text pl="2.5rem" ml="-2.5rem" mt="-1.4rem" borderBottom="1px solid gray" fontSize="22px" fontWeight="bold" textAlign="start">UPI</Text>
                            <Text mt="5px" fontSize="15px" textAlign="start">UPI ID / VPA</Text>

                            <Input mt="1rem" variant="flushed" placeholder='eg rahul@vidify' size='lg' pb="0" />
                            <Text m="6px 0 1.5rem 0" fontSize="13px" textAlign="start">A collected request will be send to this UPI ID</Text>
                            <Button
                                textAlign="start"
                                size='md'
                                height='48px'
                                width='275px'
                                colorScheme="purple"
                            >
                                Produce to pay
                            </Button>
                        </TabPanel>
                        <TabPanel display="grid">
                            <Text pl="2.5rem" pb="1rem" ml="-2.5rem" mt="-1.4rem" borderBottom="1px solid gray" fontSize="22px" fontWeight="bold" textAlign="start">Enter Credit / Debit Card details</Text>
                            <Text mt="5px" fontSize="15px" textAlign="start">Card Number</Text>
                            <Input mt="1rem" variant="flushed" placeholder='Enter card number here' size='lg' pb="0" />
                            <Flex>
                                <Box>
                                    <Text mt="10px" fontSize="13px" textAlign="start">Expiry</Text>
                                    <Input variant="flushed" placeholder='MM/YY' size='lg' pb="0" />
                                </Box>
                                <Box>
                                    <Text mt="10px" fontSize="13px" textAlign="start">CVV</Text>
                                    <Input variant="flushed" placeholder='CVV' size='lg' pb="0" />
                                </Box>
                            </Flex>
                            <Text m="6px 0 1.5rem 0" fontSize="13px" textAlign="start">A collected request will be send to this UPI ID</Text>
                            <Button
                                textAlign="start"
                                size='md'
                                height='48px'
                                width='275px'
                                colorScheme="purple"
                            >
                                Produce to pay
                            </Button>
                        </TabPanel>
                        <TabPanel display="grid">
                            <Text pl="2.5rem" pb="1rem" ml="-2.5rem" mt="-1.4rem" borderBottom="1px solid gray" fontSize="18px" fontWeight="bold" textAlign="start">Wallets</Text>
                            <Stack p="2.5rem 0" direction='row' spacing="55%">
                                <Flex alignItems="center">
                                    <Image
                                        boxSize='30px'
                                        objectFit='cover'
                                        src='https://assets.juspay.in/hyper/images/internal/ic_paytm_allinone.png'
                                        alt='Dan Abramov'
                                    />
                                    <Text>Paytm</Text>
                                </Flex>
                                <Text cursor="pointer" color="purple" fontSize="12px">Link Account</Text>
                            </Stack>
                        </TabPanel>
                        <TabPanel display="grid">
                            <Text pl="2.5rem" pb="1rem" ml="-2.5rem" mt="-1.4rem" borderBottom="1px solid gray" fontSize="19px" fontWeight="bold" textAlign="start">Net Banking</Text>

                            <InputGroup mt="1rem">
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<BsSearch />}
                                />
                                <Input size="md" type='tel' placeholder='Search banks' />
                            </InputGroup>
                            {/* using transition adding banks  */}
                            <Box>
                                <Accordion allowToggle>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    <Flex p="10px 0" gap="1rem" >
                                                        <Image
                                                            boxSize='30px'
                                                            objectFit='cover'
                                                            src='https://assets.juspay.in/hyper/images/internalPP/ic_bank_607153.png'
                                                            alt='Axis Bank'
                                                        />
                                                        <Text>Axis Bank</Text>

                                                    </Flex>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Button
                                                textAlign="start"
                                                size='md'
                                                height='48px'
                                                width='275px'
                                                colorScheme="purple"
                                            >
                                                Produce to pay
                                            </Button>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    <Flex p="10px 0" gap="1rem" >
                                                        <Image
                                                            boxSize='30px'
                                                            objectFit='cover'
                                                            src='https://assets.juspay.in/hyper/images/internalPP/ic_bank_607152.png'
                                                            alt='Axis Bank'
                                                        />
                                                        <Text>HDFC Bank</Text>

                                                    </Flex>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Button
                                                textAlign="start"
                                                size='md'
                                                height='48px'
                                                width='275px'
                                                colorScheme="purple"
                                            >
                                                Produce to pay
                                            </Button>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    <Flex p="10px 0" gap="1rem" >
                                                        <Image
                                                            boxSize='30px'
                                                            objectFit='cover'
                                                            src='https://assets.juspay.in/hyper/images/internalPP/ic_bank_508534.png'
                                                            alt='Axis Bank'
                                                        />
                                                        <Text>ICICI Bank</Text>

                                                    </Flex>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Button
                                                textAlign="start"
                                                size='md'
                                                height='48px'
                                                width='275px'
                                                colorScheme="purple"
                                            >
                                                Produce to pay
                                            </Button>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    <Flex p="10px 0" gap="1rem" >
                                                        <Image
                                                            boxSize='30px'
                                                            objectFit='cover'
                                                            src='https://assets.juspay.in/hyper/images/internalPP/ic_bank_508548.png'
                                                            alt='Axis Bank'
                                                        />
                                                        <Text>State Bank of India</Text>

                                                    </Flex>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Button
                                                textAlign="start"
                                                size='md'
                                                height='48px'
                                                width='275px'
                                                colorScheme="purple"
                                            >
                                                Produce to pay
                                            </Button>
                                        </AccordionPanel>
                                    </AccordionItem>


                                </Accordion>
                            </Box>

                        </TabPanel>

                    </TabPanels>
                </Tabs>

                {/* gift  card */}
                <Box mt="1rem" >
                    <Accordion borderRadius="10px" allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box fontSize="18px" p="1rem" flex='1' textAlign='left'>
                                        Have a Gift Card?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box>
                                    <Text mt="10px" fontSize="13px" textAlign="start">Enter card No Here</Text>
                                    <Input onChange={handleChange} name="cardNo" value={payDet.cardNo} variant="flushed" placeholder='card number' size='lg' pb="0" />
                                </Box>
                                <Box>
                                    <Text mt="10px" fontSize="13px" textAlign="start">PIN</Text>
                                    <Input onChange={handleChange} name="pinNo" value={payDet.pinNo} variant="flushed" placeholder='pin' size='lg' pb="0" />
                                </Box>
                                <Button
                                onClick={paymentStep}
                                    textAlign="start"
                                    size='md'
                                    height='48px'
                                    width='full'
                                    colorScheme="purple"
                                >
                                    pay
                                </Button>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    )
}

export default Payment