require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connect = require("./config/db")
const PORT = process.env.PORT
// importing all routes
const userRoute = require("./features/users/user.router");
const movieRoute = require("./features/movies/movies.router")
const tvshowRoute = require("./features/tvshows/tvshows.router")
const webseriesRoute = require("./features/webseries/webseries.router")
const newsRoute = require("./features/news/news.router")
const slideRoute = require("./features/slides/slide.router")
// creating server
const app = express()
// using some  middleware
app.use(express.json());
app.use(cors());
app.use("/users",userRoute);
app.use("/movies",movieRoute);
app.use("/tvshows",tvshowRoute);
app.use("/webseries",webseriesRoute);
app.use("/news",newsRoute);
app.use("/slide",slideRoute);

// now listening on port
app.listen(PORT,async()=>{
    await connect();
    console.log(`listening on ${PORT} http://localhost:${PORT}`)
})