import { Box, Image, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

let url = [
  "https://tpc.googlesyndication.com/simgad/17079171175691928473",
  "https://tpc.googlesyndication.com/simgad/13686292933159277317",
  "https://tpc.googlesyndication.com/simgad/12632166758537980946",
  "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234572/list/1170x658withlogo24b333694acb425e80ed532a1ee94469.jpg",
  "https://tpc.googlesyndication.com/simgad/11665320451917271715",
];

const Advertisemnt1Gc = ({ url }) => {
  return (
    <Box width={"90%"} textAlign="center" m={"auto"} mt={"4rem"}>
      <Image className="animate-pulse" m={"auto"} src={url} alt="Dan Abramov" />
    </Box>
  );
};

export default Advertisemnt1Gc;
