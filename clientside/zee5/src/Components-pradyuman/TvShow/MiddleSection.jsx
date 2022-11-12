import { Box, Image, Select, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './Styling/meddleSection.module.css'

const divData=[
  {
    thumbnail:"https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5247729/list/00000083d8916c48b04249248af8374ce18d33fd.jpg",
    title:"Kumkum bhagay ep1",
    epsNo:"1",
    date:"Nov"
  },
  {
    thumbnail:"https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5247728/list/000000765f9cd1a1e910444db6b75642a2d2b842.jpg",
    title:"Kumkum bhagay ep2",
    epsNo:"2",
    date:"Nov"
  },
  {
    thumbnail:"https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5247731/list/0000013297c0fdb802ef470485888797c89d88a6.jpg",
    title:"Kumkum bhagay ep3",
    epsNo:"3",
    date:"Nov"
  },
  {
    thumbnail:"https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5247732/list/000002021450d781a52a44b78155ed80984e4775.jpg",
    title:"Kumkum bhagay ep4",
    epsNo:"4",
    date:"Nov"
  },
  {
    thumbnail:"https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-1-6z5244224/list/00000163edbab177379e4048b102c40223abfc41.jpg",
    title:"Kumkum bhagay ep5",
    epsNo:"5",
    date:"Nov"
  },
]

const MiddleSection = () => {
  return (
    <Box bg="#06001a" pt="1rem"  >
      <Box mt="1rem" w="98%" m="auto">
      <Select placeholder='Select option' w="17rem" pl="1rem" pb="1rem" color="white" >
  <option style={{ color:"black" }}  value='option1'>Option 1</option>
  <option style={{ color:"black" }} value='option2'>Option 2</option>
  <option style={{ color:"black" }} value='option3'>Option 3</option>
</Select>
        <Box className={styles.thumbnailBox} >
 {
  divData?.map((item)=><Box color="white" p="1rem" key={item.title} >
    <Box><Image borderRadius="1rem" src={item.thumbnail} /></Box>
   <Box><Text>{item.title}</Text></Box>
   <Box><Text>{item.epsNo}-{item.date}</Text></Box>
  </Box>)
 }
        </Box>
      </Box>
    </Box>
  )
}

export default MiddleSection
