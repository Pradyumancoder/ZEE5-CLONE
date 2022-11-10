const express = require("express");
const app = express.Router();
const WebSeries = require("./webseries.model")
app.get("/",async(req,res)=>{
    try{
        const data = await WebSeries.find()
        res.status(200).send(data)
      }catch(err){
        res.status(500).send(e.message)
      }
})
module.exports =app