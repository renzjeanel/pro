const express = require('express');
const router = express.Router();
const { ensureAuthenticatedUser, ensureAuthenticatedAdmin, forwardAuthenticated } = require('../config/auth');
const Music = require('../models/music.model');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard_user', ensureAuthenticatedUser, (req, res) =>
  
  res.render('dashboard_user', {
    user: req.user
  })
);

router.get('/dashboard_admin', ensureAuthenticatedAdmin, function(req, res) {
	Music.find({}, function(err, musics) {
		if(err) return next(err);
		// res.send(musics);
		res.render('dashboard_admin', {
	    	user: req.user,
	    	data: musics
  		});
	});

});
  

module.exports = router;
