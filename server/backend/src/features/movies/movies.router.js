const express = require("express");
const app = express.Router();
const Movies = require("./movies.model")
app.get("/",async(req,res)=>{
  try{
    const data = await Movies.find()
    res.status(200).send(data)
  }catch(err){
    res.status(500).send(e.message)
  }
})

app.patch("/",async(req,res)=>{
  try{

    let updated_movies = Movies.updateMany({genre1:""},{$set:{premium:false}});
    res.status(200).send(updated_movies)
  }catch(err){
    res.status(500).send(err.message)
  }

})



module.exports =app