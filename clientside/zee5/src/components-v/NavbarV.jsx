


import { Box, Button, Flex, Img, Input, InputGroup, InputLeftElement, Spacer, Text } from "@chakra-ui/react"

import { BsGrid3X3GapFill, BsSearch } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaCrown } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import "./NavbarV.css"
import { Link } from "react-router-dom"
import DropDown from "../Component-MK/DropDown";
import Grid from "../Component-MK/grid";
import Search from "../Component-MK/Search"
import { useState } from "react"
import { useSelector } from "react-redux"
import LOGO from "../Images/vidfyIcon.png"
import UserProfile from "../Components-Rk/UserProfile"

let data1 = [
  { title: "Manoj" },
  { title: "Manoj" },
  { title: "Manoj" },
  { title: "Manoj" },
  { title: "Manoj" },
  { title: "Manoj" },
  { title: "Manoj" },
  { title: "Manoj" },
  { title: "Manoj" }
]

function Navbar() {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [close, setClose] = useState(true);
  const state = useSelector(state => state);
  // let [city,setCity] = useState('thor');
  // let [listI,setListI] = useState([])
  // const handleClose = () => {
  //   setClose(!close);
  // }
  // const search = async() => {
  //   // setData(data1);
  //   const url = `http://www.omdbapi.com/?apikey=e2045007&s=${city}`
  //   let res =await fetch(url);
  //   // console.log(res)
  //   let data = await res.json();
  //   console.log(data)
  //   let info = data.map(item=><div><img src={item.Title} /><p>{item.Poster}</p></div>)
  //   setListI(info)
  //   // return data;

  // }

  const handleDropDown = () => {
    setClick(!click);
  };
  let porfileCond = state?.auth?.data?.isAuth
  // console.log("if condition",state)






  //TbGridDots
  return (
    <Box pr="1rem" >

      <Flex className="NavbarMainV" >
        {/* nav first half */}
        <Box pl="2rem" >

          <Flex className="NavbarFirstPartV"  >
            <Link to="/"><Img className="NavbarFirstPartV-Icon" src={LOGO} /></Link>

            <Link to="/"> <Box className="NavbarFirstPartV-Home">Home</Box></Link>
            <Link to="/tvShows"><Box className="NavbarFirstPartV-Tv">Tv Shows </Box></Link>
            <Link to="/movies"><Box className="NavbarFirstPartV-Movies"> Movies</Box></Link>
            <Box className="NavbarFirstPartV-Option"><BsGrid3X3GapFill onClick={() => setHover(!hover)}
              size={"20"} /></Box>
          </Flex>
        </Box>
        {/* nav second half */}

        <Box>
          <Flex className="NavbarSecondPartV">
            <Box className="NavbarSecondpartV-Search">
           
            <div >
                <Input type='ser' placeholder='Search for Movies,Shows,Channels etc.' />
        </div>
              
            </Box>
            <Box className="NavbarSecondPartV-Lan" ><Flex><Text>A</Text><Text className="NavbarSecondPartV-LanHindi">अ</Text></Flex>

            </Box>
            {

              porfileCond ? <Flex alignItems="center" className="NavbarSecondPartV-Menu" ><UserProfile /></Flex> :
                <Link to="/login"><Box className="NavbarSecondPartV-Login"> <Button bg={"black"} border={"1px solid white"}>LOGIN</Button></Box></Link>
            }
            <Link to="/myaccount/subscription"><Box className="NavbarSecondPartV-Buy"> <Button bg={"darkorchid"} border={"1px solid darkorchid"}><FaCrown className="Crown" /><Text>BUY PLAN</Text></Button></Box></Link>
            <Flex alignItems="center" className="NavbarSecondPartV-Menu" ><GiHamburgerMenu onClick={handleDropDown} size={"20"} /></Flex>

          </Flex>
        </Box>
      </Flex>
      {click && <DropDown />}
      {hover && <Grid />}
      {data && close && <Search data={data} />}

    </Box>


  )
}
export default Navbar