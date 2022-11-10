const express = require("express");
const app = express.Router();
const TvShows = require("./tvshows.model")
app.get("/",async(req,res)=>{
    try{
        const data = await TvShows.find()
        res.status(200).send(data)
      }catch(err){
        res.status(500).send(err.message)
      }
})
module.exports =app