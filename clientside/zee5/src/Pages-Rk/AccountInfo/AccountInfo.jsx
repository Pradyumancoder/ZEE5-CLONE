import { Box, Button, Input, Text, Flex, Stack, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import { authSignInSucess } from '../../Redux/auth/auth.action';
const init = {
    email: "",
    password: ""
}
const style = {
    width: "328px",
    margin: 'auto'
}
const AccountInfo = () => {
    const navigate = useNavigate();
    const [userCred, setUserCred] = useState(init);
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    if (state?.auth?.data?.isAuth) {
        // console.log("if condition",state)
        return <Navigate to="/myaccount/payment" />
    }

    const handleChange = (e) => {
        setUserCred({ ...userCred, [e.target.name]: e.target.value });

    }
    const handleAccountInfo = () => {
        // check crediential is exist or not 

        dispatch(authSignInSucess({ ...userCred }))
    }
    return (
        <div style={style} className="account-info">
            <Text w="880px" m="auto" textAlign="start" >Step 2 of 3</Text>
            <Text w="880px" m=" -10px auto 6px auto" textAlign="start" fontSize="30px" >Account Info</Text>

            <Box borderRadius="10px" p="16px" bg="white" m="auto" w={{ base: '328px', md: "350px", lg: "400px" }} h="432px">
                <Text color="white" textAlign="start" fontSize="14px">Email ID Or Mobile Number</Text>
                <Text color="black" m=" -10px auto 2rem auto" textAlign="start" fontSize="18px" fontWeight="bold">Email ID Or Mobile Number</Text>
                <Input
                    onChange={handleChange}
                    value={userCred.email}
                    name="email"
                    color="black" h="48px" placeholder='Email ID Or Mobile Number' size='md' />
                <Input
                    onChange={handleChange}
                    value={userCred.password}
                    name="password"
                    color="black" mt="1.2rem" h="48px" placeholder='Password' size='md' />
                {/* onClick event for navigate to the payment page */}
                <Button
                    disabled={userCred.email.length == 0 || userCred.password.length <= 0}
                    onClick={handleAccountInfo}
                    size='md'
                    height='48px'
                    width='full'
                    border="none"
                    mt="2rem"
                    colorScheme='purple'>Continue</Button>

                <Flex justify="center" alignItems="center" mt="3rem">
                    <Text border=".5px solid gray" w="4.3rem" h="2px"></Text>
                    <Text m="2px" fontSize="19px" color="#6666668A" >OR</Text>
                    <Text border=".5px solid gray" w="4.3rem" h="2px"></Text>
                </Flex>

                <Stack w="max-content" spacing="20px" direction='row' m=" 2rem auto 0 auto">
                    <Image
                        bg="gray"
                        borderRadius='full'
                        boxSize='42px'
                        src='https://www.zee5.com/images/apple-social-icon-circle.svg?ver=2.52.51'
                        alt='apple'
                    />
                    <Image
                        bg="gray"
                        borderRadius='full'
                        boxSize='42px'
                        src='https://www.zee5.com/images/google-social-icon-circle.svg?ver=2.52.51'
                        alt='google'
                    />
                    <Image
                        bg="gray"
                        borderRadius='full'
                        boxSize='40px'
                        src='https://www.zee5.com/images/fb-social-icon-circle.svg?ver=2.52.51'
                        alt='facebook'
                    />
                    <Image
                        bg="gray"
                        borderRadius='full'
                        boxSize='40px'
                        src='https://www.zee5.com/images/twitter-social-icon.svg?ver=2.52.51'
                        alt='twitter'
                    />
                </Stack>
            </Box>
        </div>
    )
}

export default AccountInfo