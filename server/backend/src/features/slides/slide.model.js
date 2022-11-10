const mongoose = require('mongoose');
// creating Schema 
const slidesSchema = new mongoose.Schema({
    movies: [{ url: String, title: String,premium:Boolean }],
    tvshows: [{ url: String, title: String,premium:Boolean }],
    webseries: [{ url: String, title: String,premium:Boolean }],
    news: [{ url: String, title: String,premium:Boolean }]
}, {
    versionKey: false,
    timestamps: true
})

// creating model and exports
const slides = mongoose.model('slide', slidesSchema);
module.exports = slides