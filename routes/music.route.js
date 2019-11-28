const express = require('express');
const router = express.Router();


// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root@cluster-uxk5a.mongodb.net/music_db?retryWrites=true&w=majority', { useUnifiedTopology: true,
useNewUrlParser: true });

// Require the controllers WHICH WE DID NOT CREATE YET!!
const music_controller = require('../controllers/music.controller');


// a simple test url to check that all of our files are communicating correctly.

router.get('/add_music', music_controller.addMusicPage);

router.get('/edit_music', music_controller.editMusicPage);

router.get('/test', music_controller.test);

router.post('/create', music_controller.music_create);

router.get('/:id', music_controller.music_details);

router.get('/', music_controller.getAllMusic);

router.put('/:id/update', music_controller.music_update);

router.delete('/:id/delete', music_controller.music_delete);

module.exports = router;