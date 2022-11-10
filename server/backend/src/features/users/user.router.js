const express = require("express");
const app = express.Router();
const User = require("./user.model")

// login post request
app.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    // console.log(req.body)
    try{
        let cred= await User.findOne({email});
        // console.log(cred)
        if(cred){
            if(cred.password===password){
                res.status(200).send({token:`${email}##+$##{password}`})
            }else{
                res.status(404).send('Wrong Password')
            }
        }else{
            res.status(404).send("This email is not exit in our system,try to signup first")
        }
    }catch(err){
        res.status(500).send(err.message)
    }

})

app.post("/signup",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await User.findOne({email})
        if(user){
            return res.status(404).send("you are already signup")
        }
        let createUser = await User.create(req.body);
        res.status(200).send({token:`${email}##+##${password}`})
    }catch(err){
        res.status(500).send(err.message)
    }
})

// get data of all the users ==> It is for admin use only ==>
app.get('/details',async(req,res)=>{
    let token = req.headers.token
    try{
        let details =await User.find()
        if(token!=="rahul"){
            return res.status(404).send("Authorization failed")
        }
        res.send(details)
    }catch(e){
        res.status(500).send(e.message)
    }
})
module.exports =app