import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CardGc from "../common/CardGc"
import Slider from "react-slick";
import { Settings } from "../common/settings";

let data = [
  {
    popupTitle: "Lost in Space",
    Year: "2018–2021",
    imdbID: "tt5232792",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BZTY5YjQwYmEtOWJiNy00NDBmLTgxM2YtMmVkMmI0NzE1N2FjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg",
  },
  {
    popupTitle: "Breaking Bad",
    Year: "2008–2013",
    imdbID: "tt0903747",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BNDkyZThhNmMtZDBjYS00NDBmLTlkMjgtNWM2ZWYzZDQxZWU1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
  },
  {
    popupTitle: "Breaking In",
    Year: "2011–2012",
    imdbID: "tt1630574",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BMjI1MTUwNjA1N15BMl5BanBnXkFtZTcwMjQ0NTM2Nw@@._V1_SX300.jpg",
  },
  {
    popupTitle: "Travelers",
    Year: "2016–2018",
    imdbID: "tt5651844",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BMjUzOTQwOTg1MF5BMl5BanBnXkFtZTgwNzE4NzQ3NjM@._V1_SX300.jpg",
  },

  {
    popupTitle: "Yamibo: Darkness, the Hat & the Travelers of the Books",
    Year: "2003–",
    imdbID: "tt1172149",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BMGUwMWFhZDYtZTBjMS00NDFjLTkwMzMtYWUwY2UzZmYzMGRhXkEyXkFqcGdeQXVyNjQzMjk4MDQ@._V1_SX300.jpg",
  },
  {
    popupTitle: "Travelers",
    Year: "2014–",
    imdbID: "tt3681370",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BMTY0MTk4MTU5Ml5BMl5BanBnXkFtZTgwNzI2Mjc2MTE@._V1_SX300.jpg",
  },

  {
    popupTitle: "Hobo: The Legion of Travelers",
    Year: "2013–",
    imdbID: "tt4207090",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BNTk0NjkwNTA5Ml5BMl5BanBnXkFtZTgwNjk1MDg1MzE@._V1_SX300.jpg",
  },
  {
    popupTitle: "American Travelers",
    Year: "2016–",
    imdbID: "tt5690944",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BNDAzOWQyODUtNjFhNi00OGFmLThlOTEtZTQ3MmU0OWVkNzk3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjQ5MjY5NDg@._V1_SX300.jpg",
  },

  {
    popupTitle: "Ms. Marvel",
    Year: "2022",
    imdbID: "tt10857164",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BZmQ3OTZkNDUtNTU0Mi00ZjE4LTgyNTUtY2E4NWRmNDUxMzkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
  },
  {
    popupTitle: "Marvel Studios: Legends",
    Year: "2021–",
    imdbID: "tt13650480",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BMzdiNGVlZGYtMGY1Ni00OGU1LTlmYzEtZDBjYjk3OGM3YTNkXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_SX300.jpg",
  },
  {
    popupTitle: "Marvel Studios: Assembled",
    Year: "2021–",
    imdbID: "tt14094206",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BNWMyNWYyMmYtZjNiZi00MzFmLTg2MjYtYWEzZWY1MzBhY2I2XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
  },
  {
    popupTitle: "Lego Marvel Super Heroes: Maximum Overload",
    Year: "2013",
    imdbID: "tt3322904",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BZWUzMjMxNmItNDRjYi00NGQ0LTk1NTQtYWIwMzQwNGNlYWRiXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  },
  {
    popupTitle: "Marvel 616",
    Year: "2020–",
    imdbID: "tt10162586",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BMWYwNGJhMjItMDFmZS00MTk0LTg2MTMtZDI2NTNiMTMxMTcxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
  {
    popupTitle: "Marvel Rising: Initiation",
    Year: "2018–2019",
    imdbID: "tt9073722",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BMDk1ZGFjOWEtNWVkYi00YWIwLWI1ODktZDc1ZmRhNjc1OGMxXkEyXkFqcGdeQXVyODQyNDI4ODg@._V1_SX300.jpg",
  },

  {
    popupTitle: "Marvel Disk Wars: The Avengers",
    Year: "2014–2015",
    imdbID: "tt3644256",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BNDZmYjNmYTktNDVjMi00N2I0LWI0MjEtNzEyYzYzZjU5MGEwXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  },
  {
    popupTitle: "Marvel Future Avengers",
    Year: "2017–2018",
    imdbID: "tt6591446",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BM2NiMTI4NzYtNmRlOS00MDI4LThiODQtMzU2NzEzOGE0OWQ5XkEyXkFqcGdeQXVyMzE3NDUwODA@._V1_SX300.jpg",
  },
  {
    popupTitle: "Marvel Knights: Eternals",
    Year: "2014–",
    imdbID: "tt4058600",
    Type: "series",
    url: "https://m.media-amazon.com/images/M/MV5BMzA1ZTAxYjQtYzQzNy00N2QzLThjZTMtMWU1NGM3YWFhYmU2XkEyXkFqcGdeQXVyMjMxMDM2NjY@._V1_SX300.jpg",
  },
];
const TvShowWebSeires = () => {
  return (
    <Box mx={5} mt={1} textAlign="left">
      <Text fontSize="2xl" fontWeight="bold" my={7} className="z-0">
        Popular Moives
      </Text>

      <Slider {...Settings}>
        {data.map((item, index) => (
          <CardGc key={index} item={item} prem={false} index={index} />
        ))}
      </Slider>
    </Box>
  );
};

export default TvShowWebSeires;
