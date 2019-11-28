const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const review_controller = require('../controllers/review.controller');


router.get('/add_review', review_controller.addReview);

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', review_controller.test);

router.post('/create', review_controller.review_create);

router.get('/:id', review_controller.review_details);

router.get('/', review_controller.getAllReview);

router.put('/:id/update', review_controller.review_update);

router.delete('/:id/delete', review_controller.review_delete);

module.exports = router;