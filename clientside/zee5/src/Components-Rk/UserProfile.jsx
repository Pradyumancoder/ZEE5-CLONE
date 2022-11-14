import { Menu, MenuButton, MenuItem, Box, Flex, Text, MenuList,Button } from '@chakra-ui/react'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import { authSignOut } from './../Redux/auth/auth.action';

const UserProfile = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state);
    let name = state?.auth?.data?.name || "hi"
    
    const handleOnClick = ()=>{
        // console.log('hi')
        dispatch(authSignOut())

    }

    return (
        <Menu>
            <MenuButton >
                <CgProfile color="white" size={"25"} />
            </MenuButton>
            <MenuList mt="1rem">
                <MenuItem minH='60px'>
                    <CgProfile color="black" size={"24"} />

                    <Text pl="1rem" fontSize="18px" color="black">{name}</Text>
                </MenuItem>
                <MenuItem minH='40px'>
                    <Text color="black" fontSize="16px">My Account</Text>
                </MenuItem>
                <MenuItem minH='40px'>

                    <Text color="black" fontSize="16px">My Watchlist</Text>
                </MenuItem>
                <MenuItem minH='40px'>

                    <Text color="black" fontSize="16px">My Subscription</Text>
                </MenuItem>
                <MenuItem minH='40px'>

                    <Text color="black" fontSize="16px">My Rentals</Text>
                </MenuItem>
                <MenuItem minH='40px'>

                <Text color="black" fontSize="16px">My transaction</Text>
                </MenuItem>
                <MenuItem minH='40px'>

                    <Button onClick={handleOnClick} w="full" colorScheme="linkedin">LOGOUT</Button>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default UserProfile