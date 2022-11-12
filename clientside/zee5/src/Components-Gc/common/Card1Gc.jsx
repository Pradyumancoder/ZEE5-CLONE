import { Box, Button, Flex, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaCrown, FaPlay } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";

function Card1Gc({ item, index, prem }) {
  const [state, setState] = useState(false);

  return (
    <GridItem
      w={"300px"}
      justifyContent={"space-between"}
      key={index}
      cursor={"pointer"}
      position={"relative"}
      borderRadius={"lg"}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
      className="hover:z-10 mt-10 first-letter:overflow-hidden my-4 hover:scale-105 duration-150"
    >
      <Link to={`/video/play/${item.popupTitle}`}>
        <Box className="mx-5 hover:scale-105 hover:z-20">
          <Image src={item.url} alt={item.popupTitle} borderRadius="lg" w="100%" />
          <Text>{item.popupTitle}</Text>
          {prem && (
            <Box p={1} pos={"absolute"} top={2} left={8} bg={"whitesmoke"} color={"red"} borderRadius={50}>
              <FaCrown />
            </Box>
          )}
        </Box>
        {state && (
          <Flex
            h={51}
            w={51}
            zIndex={2}
            align={"center"}
            justify={"center"}
            pos={"absolute"}
            top={"37%"}
            left={"37%"}
            fontSize={"xl"}
            bg={"rgba(37, 37, 37, 0.377)"}
            color={"whitesmoke"}
            borderRadius={50}
            _hover={{
              color: "rgb(47, 47, 47)",
              bg: "whitesmoke",
            }}
          >
            <FaPlay style={{ marginLeft: "5px" }} />
          </Flex>
        )}
        {state && (
          <VStack
            h={"100%"}
            w={"90%"}
            ml={"20px"}
            pos={"absolute"}
            alignItems={"center"}
            zIndex={0}
            bottom={0}
            borderRadius={"lg"}
            flexFlow={"column-reverse"}
            border="4px solid whitesmoke"
          >
            <VStack py={0} align={"left"} w={"100%"} bg={"whitesmoke"} color={"gray"} wrap={"wrap"} fontSize={"sm"}>
              <Text ml={2} color={"gray"} fontSize={"sm"} fontWeight="600">
                ● {item.popupTitle}
              </Text>
              <Flex alignItems={"center"} gap={2}>
                <Button size="xs" colorScheme="black" variant="outline" ml={2}>
                  Watch
                </Button>
                <Flex alignItems={"center"} color={"gray"} fontSize={"md"} fontWeight="600">
                  <AiOutlineShareAlt size={26}></AiOutlineShareAlt>
                  Share
                </Flex>
              </Flex>
            </VStack>
          </VStack>
        )}
      </Link>
    </GridItem>
  );
}

export default Card1Gc;
