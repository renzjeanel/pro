const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MusicSchema = new Schema({
    title: String,
	artist: String,
	genre: String
});


// Export the model
module.exports = mongoose.model('Music', MusicSchema);