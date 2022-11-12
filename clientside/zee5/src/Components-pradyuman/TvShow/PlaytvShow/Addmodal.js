
import { Button, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Addmodal = () => {
    return (
        <>
<Popover>
  <PopoverTrigger>
    <Button>CLICK NOW FOR BETTER EDUCATION</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow/>
      <PopoverHeader>Adds</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
        <Button colorScheme='blue'>Click
        
        <Link h="80px" src="https://www.masaischool.com/"></Link>
        </Button>
      </PopoverBody>
      <PopoverFooter>Brand Name: Masai School
Category:Education & Skill
Ad Type:Image
Description: This ad, Masai School - 
Become a Software Developer in 30 Weeks, was released by Masai School in the year 2021.
 This image ad was advertised on newspaper. </PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>


    </>
  )
}

export default Addmodal