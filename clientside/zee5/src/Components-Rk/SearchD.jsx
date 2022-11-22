import { useEffect, useState } from "react";

import axios from "axios";
import { Box, Input, Button,Text } from "@chakra-ui/react";
// const url = `http://www.omdbapi.com/?apikey=e2045007&s=${query}`
function SearchF() {
    const [query, setQuery] = useState('');
    const [searchData, setSearchData] = useState([])
    useEffect(() => {
        console.log(query)
        const getData = setTimeout(() => {
            if (query.length !== 0) {
                axios.get(`http://www.omdbapi.com/?apikey=e2045007&s=${query}`).then(res => {
                    setSearchData([...res.data.Search])
                    // console.log(res.data)
                })
            }
        }, 1000)
        return () => clearTimeout(getData)
    }, [query])

    const clearData = () => {
        setSearchData('')
        setQuery('')
    }


    // console.log(searchData)
    return (
        <Box>
            <Input value={query} onChange={({ target }) => setQuery(target.value)} placeholder='Search for Movies,Shows,Channels etc.' />
            {/* <Button onClick={clearData} >Clear</Button> */}
            {searchData.length !== 0 && searchData.map((item, ind) => <Box
                pos="absolute"
                h="6rem"
                bg="red"
                key={ind}>
                {/* <Text>{item.Title}</Text> */}

            </Box>)}
        </Box>
    );
}

export default SearchF;
