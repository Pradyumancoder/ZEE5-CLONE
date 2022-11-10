const express = require("express");
const app = express.Router();
const News = require("./news.model")
app.get("/",async(req,res)=>{
    try{
        const data = await News.find()
        res.status(200).send(data)
      }catch(err){
        res.status(500).send(e.message)
      }
})
module.exports =app