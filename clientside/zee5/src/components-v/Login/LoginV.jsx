import { Box, Button, Flex, Heading, Input, Spacer, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import {AiFillApple,AiFillFacebook,AiOutlineTwitter} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import "./LoginV.css"
import { useState } from "react"
import axios from "axios"

function Login(){
const [user,setUser]=useState({email:"",password:""})

const handleChange=(e)=>{
    const {name,value}=e.target

    setUser({...user,[name]:value})
}

const handleSubmit=(e)=>{
e.preventDefault();
axios.post("https://vidfy.up.railway.app/users/login",{email:user.email,password:user.password}).then((response)=>{console.log(response.data)}).catch((e)=>{console.log(e)})
}
return(
    <Box  >
        <Stack>
        <Box className="LoginMainBox" >
            <Box className="LoginInnerBox">            <Heading fontSize={"larger"} marginBottom={"20px"}>Login to ZEE5</Heading>
        
            <Text marginBottom={"20px"} fontSize={"xlg"} fontWeight={"bolder"} fontweight={"light"}>Log into continue enjoyning uninterrupted video and personlised experience.</Text>
            <Box marginBottom={"20px"} marginTop={"30px"} className="LoginIcons"><Flex justifyContent={"space-around"}><Box  backgroundColor={"white"} color="black" borderRadius={"50%"} padding={"5px"}><AiFillApple size="25px" /></Box>      
            <Box backgroundColor={"white"} color="black" borderRadius={"50%"} padding={"5px"}><FcGoogle size="25px" /></Box>
            <Box backgroundColor={"blue"} color="white" borderRadius={"50%"} padding={"5px"}><AiFillFacebook size="25px"/></Box>
            <Box backgroundColor={"skyblue"} color="white" borderRadius={"50%"} padding={"5px"}><AiOutlineTwitter size="25px" /></Box></Flex></Box>
        <Box w={"40px"} marginLeft={"45%"} backgroundColor={""} color="white" borderRadius={"50%"} padding={"4px"}>or</Box>
        <form onSubmit={handleSubmit}>
        
        <Box borderBottom={"1px solid gray"}><Input  onChange={handleChange} type="text" value={user.email} name="email" border={"none"}  marginTop={"30px"}  placeholder="Enter email id" /></Box>
        <Box  borderBottom={"1px solid gray"} marginBottom={"15px"}><Input onChange={handleChange} value={user.password} name="password" type="password"  border={"none"} marginTop={"30px"}  placeholder="Enter password"/></Box>
        
            <Link color={"voilet"}>Forget Password?</Link>
            <br />
            <Button w={"100%"} bg={"none"}  border={"1px solid gray"} type="submit" marginTop={"30px"}  paddingBottom={"15px"} paddingTop={"15px"}>Login </Button>
        </form>
        <Link to="/signup"><Box marginTop={"30px"}>New To ZEE5? <Text color={"blue"}>Register</Text></Box></Link>
        </Box>
        </Box>

        </Stack>
    </Box>
)

}
export default Login