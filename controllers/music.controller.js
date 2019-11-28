const Music = require('../models/music.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('This is Music Test');
};

exports.addMusicPage = function(req, res) {
	res.render('addmusic');
}

exports.editMusicPage = function(req, res) {
	res.render('editmusic');
}


exports.music_create = function(req, res, next) {
	var music = new Music({
		title: req.body.title,
		artist: req.body.artist,
		genre: req.body.genre
	});

	music.save(function(err) {
		if(err) {
			return next(err);
		}
		res.render('dashboard_admin', {
			msg: 'Music Added Successfully'
		});
	});
}

exports.music_details = function (req, res, next) {
    Music.findById(req.params.id, function (err, music) {
        if (err) return next(err);
        res.send(music);
    })
};

exports.getAllMusic = function (req, res, next) {
	Music.find({}, function(err, music) {
		if(err) return next(err);
		res.send(music);
	})
}

exports.music_update = function (req, res, next) {
    Music.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Music Updated');
    });
};

exports.music_delete = function(req, res, next) {
	Music.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Music Deleted Successfully!');
    })
    
};
