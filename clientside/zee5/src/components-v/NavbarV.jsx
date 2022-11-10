import { Box, Button, Flex, Img, Input, InputGroup, InputLeftElement, Spacer, Text } from "@chakra-ui/react"

import {BsGrid3X3GapFill,BsSearch} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaCrown} from "react-icons/fa"
import "./NavbarV.css"

function Navbar(){
//TbGridDots
    return (
        <Box >
            
            <Flex className="NavbarMainV" >
            {/* nav first half */}
           <Box >
            <Flex className="NavbarFirstPartV"  >
            <Img className="NavbarFirstPartV-Icon" src="vidfyIcon.png" />
            
            <Box className="NavbarFirstPartV-Home">Home</Box>
            <Box className="NavbarFirstPartV-Tv">Tv Shows </Box>
            <Box className="NavbarFirstPartV-Movies"> Movies</Box>
            <Box className="NavbarFirstPartV-Option"><BsGrid3X3GapFill size={"20"} /></Box>
            </Flex>
            </Box>
{/* nav second half */}

            <Box>
            <Flex className="NavbarSecondPartV">
            <Box  className="NavbarSecondpartV-Search">
            <InputGroup >
    <InputLeftElement  
      pointerEvents='none'
      children={<BsSearch color="white"  />}
    />
    <Input type='ser' placeholder='Search for Movies,Shows,Channels etc.' />
  </InputGroup>
  </Box>
            <Box className="NavbarSecondPartV-Lan" ><Flex><Text>A</Text><Text className="NavbarSecondPartV-LanHindi">अ</Text></Flex>
            
            </Box>
            <Button bg={"black"} className="NavbarSecondPartV-Login" border={"1px solid white"}>LOGIN</Button>
            <Button bg={"darkorchid"} className="NavbarSecondPartV-Buy" border={"1px solid darkorchid"}><FaCrown className="Crown"/><Text>BUY PLAN</Text></Button>
            <Box className="NavbarSecondPartV-Menu" ><GiHamburgerMenu size={"20"} /></Box>
            </Flex>
            </Box>
            </Flex>
            </Box>
          
        
    )
}
export default Navbar