const Review = require('../models/review.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('This is Review Test');
};

exports.addReview = function(req, res) {
	res.render('addreview');
}

exports.review_create = function(req, res, next) {
	var review = new Review({
		rating: req.body.rating,
		review: req.body.review
	});

	review.save(function(err) {
		if(err) {
			return next(err);
		}
		res.send('Review Created Successfully');
	});
}

exports.review_details = function (req, res, next) {
    Review.findById(req.params.id, function (err, review) {
        if (err) return next(err);
        res.send(review);
    })
};

exports.getAllReview = function (req, res, next) {
	Review.find({}, function(err, review) {
		if(err) return next(err);
		res.send(review);
	})
}

exports.review_update = function (req, res, next) {
    Review.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, review) {
        if (err) return next(err);
        res.send('Review Updated');
    });
};

exports.review_delete = function(req, res, next) {
	Review.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Review Deleted Successfully!');
    })
    
};
