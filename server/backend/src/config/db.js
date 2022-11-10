const mongoose = require('mongoose');

const connect = async ()=>{
    return mongoose.connect(process.env.DB_URL)
    // return mongoose.connect(`mongodb+srv://r:k@cluster0.xz3yoae.mongodb.net/vidfy?retryWrites=true&w=majority`)
}

module.exports=connect