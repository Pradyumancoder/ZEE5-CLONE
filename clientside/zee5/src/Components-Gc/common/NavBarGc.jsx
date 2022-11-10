

import { Flex, Spacer, Input, Image, Menu, MenuButton, MenuList, MenuItem, Button, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaBars, FaCrown, FaRegUser } from "react-icons/fa";
// import { useContext } from "react";
// import { AppContext } from "../Context/AppContext";
import { FiDownload, FiHelpCircle, FiSettings } from "react-icons/fi";
import { FcAbout } from "react-icons/fc";
import { RiLogoutCircleRLine } from "react-icons/ri"
import { useState } from "react";

const baseStyle = {
   color: 'gray',
   paddingBottom: '4px',
   borderBottom: 'none'
}

const activeStyle = {
   color: 'white',
   paddingBottom: '4px',
   borderBottom: '2px solid white'
}

function NavbarGc() {
//    const { isLogin, setIsLogin, data } = useContext(AppContext);
   const [ isLogin, setIsLogin, data ] = useState(true);
   const handleLogout = () => {
      setIsLogin(false);
   }

   return (
      <Flex gap={7} p={5} align="center" position="sticky" top='0' zIndex='7' borderBottom='1px solid rgb(27, 27, 27)' bg='rgb(15, 6, 23)'>
         <Image h='47px' src='https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.15' alt='app logo' mr={4} />
         <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : baseStyle}>Home</NavLink>
         <NavLink to="/tvShows" style={({ isActive }) => isActive ? activeStyle : baseStyle}>TV Shows</NavLink>
         <NavLink to="/movies" style={({ isActive }) => isActive ? activeStyle : baseStyle}>Movies</NavLink>
         <NavLink to="/webseries" style={({ isActive }) => isActive ? activeStyle : baseStyle}>WebSeires</NavLink>

         <NavLink to="/news" style={({ isActive }) => isActive ? activeStyle : baseStyle}>News</NavLink>

         <Spacer />
         <Input w='370px' color="white" focusBorderColor="purple.500" borderColor='rgb(111, 111, 111)' borderRadius="lg" placeholder="🔍 Search for Movies, Shows, Channels etc. " />
         <HStack gap={2}>
            {isLogin ? <Button _hover='rgb(34, 26, 41)' bg='rgb(34, 26, 41)' p={3} borderRadius='50%'><FaRegUser style={{ color: 'gray' }} /></Button> : <NavLink className='nav-ls-btn' to="/login">Login</NavLink>}
            {isLogin ? <Flex className='nav-ls-btn' align='center' justify='center' gap={1}><FaCrown /> BUY PLAN</Flex> : <NavLink className='nav-ls-btn' to="/signup">Sign Up</NavLink>}
            <Menu>
               <MenuButton as={Button} _hover='rgb(34, 26, 41)' bg='rgb(34, 26, 41)' p={3} borderRadius='50%'>
                  <FaBars style={{ color: 'gray' }} />
               </MenuButton>
               <MenuList bg='rgb(15, 6, 23)' borderColor='rgb(29, 20, 37)' color='gray' borderRadius='lg' pr={4}>
                  {/* <MenuItem fontWeight='bold' bg='rgb(29, 20, 37)' m={2} borderRadius='lg' gap={2}><FiDownload />Download</MenuItem>
                  <MenuItem fontWeight='bold' bg='rgb(29, 20, 37)' m={2} borderRadius='lg' gap={2}><FaRegUser />Account {isLogin && '( ' + data.email + ' )'}</MenuItem>
                  <MenuItem fontWeight='bold' bg='rgb(29, 20, 37)' m={2} borderRadius='lg' gap={2}><FiSettings />Settings</MenuItem>
                  <MenuItem fontWeight='bold' bg='rgb(29, 20, 37)' m={2} borderRadius='lg' gap={2}><FcAbout />About Us</MenuItem>
                  <MenuItem fontWeight='bold' bg='rgb(29, 20, 37)' m={2} borderRadius='lg' gap={2}><FiHelpCircle />Help Center</MenuItem>
                  {isLogin && <MenuItem onClick={handleLogout} fontWeight='bold' bg='rgb(29, 20, 37)' m={2} borderRadius='lg' gap={2}><RiLogoutCircleRLine />Logout</MenuItem>} */}
               </MenuList>
            </Menu>
         </HStack>
      </Flex>
   );
}

export default NavbarGc;