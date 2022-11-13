


import { Box, Button, Flex, Img, Input, InputGroup, InputLeftElement, Spacer, Text } from "@chakra-ui/react"

import {BsGrid3X3GapFill,BsSearch} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaCrown} from "react-icons/fa"
import "./NavbarV.css"
import { Link } from "react-router-dom"
import DropDown from "../Component-MK/DropDown";
import Grid from "../Component-MK/grid";
import Search from "../Component-MK/Search"
import { useState } from "react"

let data1=[
  {title:"Manoj"},
  {title:"Manoj"},
  {title:"Manoj"},
  {title:"Manoj"},
  {title:"Manoj"},
  {title:"Manoj"},
  {title:"Manoj"},
  {title:"Manoj"},
  {title:"Manoj"}
]

function Navbar(){
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [close,setClose] =useState(true);
  const handleClose=()=>{
    setClose(!close);
  }
    const search=()=>{
      setData(data1);
    }

  const handleDropDown = () => {
    setClick(!click);
  };





//TbGridDots
    return (
        <Box >
            
            <Flex className="NavbarMainV" >
            {/* nav first half */}
           <Box >
            <Flex className="NavbarFirstPartV"  >
            <Link to="/"><Img className="NavbarFirstPartV-Icon" src="vidfyIcon.png" /></Link>
            
           <Link to="/"> <Box className="NavbarFirstPartV-Home">Home</Box></Link>
            <Link to="/movies"><Box className="NavbarFirstPartV-Movies"> Movies</Box></Link>
            <Link to="/webseries"><Box className="NavbarFirstPartV-Movies"> Web Series</Box></Link>
            <Link to="/tvShows"><Box className="NavbarFirstPartV-Tv">Tv Shows </Box></Link>

            <Box className="NavbarFirstPartV-Option"><BsGrid3X3GapFill onClick={()=>setHover(!hover)}
                 size={"20"} /></Box>
            </Flex>
            </Box>
{/* nav second half */}

            <Box>
            <Flex className="NavbarSecondPartV">
            <Box  className="NavbarSecondpartV-Search">
            <InputGroup onClick={()=>{setClose(!close)}} >
    <InputLeftElement  
      pointerEvents='none'
      children={<BsSearch color="white"  />}
    />
    <Input type='ser' onChange={search} placeholder='Search for Movies,Shows,Channels etc.' />
  </InputGroup>
  </Box>
            <Box className="NavbarSecondPartV-Lan" ><Flex><Text>A</Text><Text className="NavbarSecondPartV-LanHindi">अ</Text></Flex>
            
            </Box>
           <Link to="/login"><Box className="NavbarSecondPartV-Login"> <Button bg={"black"}  border={"1px solid white"}>LOGIN</Button></Box></Link>
           <Link to="/myaccount/subscription"><Box className="NavbarSecondPartV-Buy"> <Button bg={"darkorchid"}  border={"1px solid darkorchid"}><FaCrown className="Crown"/><Text>BUY PLAN</Text></Button></Box></Link>
            <Box className="NavbarSecondPartV-Menu" ><GiHamburgerMenu onClick={handleDropDown} size={"20"} /></Box>
            </Flex>
            </Box>
            </Flex>
            {click && <DropDown />}
      {hover && <Grid />}
      {data && close && <Search data={data}/>}

            </Box>
          
        
    )
}
export default Navbar