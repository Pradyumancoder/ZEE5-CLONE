const express = require("express");
const app = express.Router();
const Slide = require('./slide.model')
app.get("/", async (req, res) => {
  const { name } = req.query
  try {
    const data = await Slide.find()

    switch (name) {
      case "movies": {
        return res.status(200).send(data[0].movies)

      }
      case "tvshows": {
        // console.log(data[0].tvseries)
        return res.status(200).send(data[0].tvshows)
      }

      case "webseries": {
        return res.status(200).send(data[0].webseries)

      }
      case "news": {
        return res.status(200).send(data[0].news)

      }
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
})
module.exports = app