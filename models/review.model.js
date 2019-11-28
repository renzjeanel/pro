const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReviewSchema = new Schema({
    ratings: String,
    review: String
});


// Export the model
module.exports = mongoose.model('Review', ReviewSchema);