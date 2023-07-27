// Create web server

var express = require('express');
var router = express.Router();
var commentController = require('../controllers/commentController');
var auth = require('../controllers/authController');

// GET request for creating a comment. NOTE This must come before routes that display comment (uses id).
router.get('/create', auth.isLoggedIn, commentController.comment_create_get);

// POST request for creating comment.
router.post('/create', auth.isLoggedIn, commentController.comment_create_post);

// GET request to delete comment.
router.get('/:id/delete', auth.isLoggedIn, commentController.comment_delete_get);

// POST request to delete comment.
router.post('/:id/delete', auth.isLoggedIn, commentController.comment_delete_post);

// GET request to update comment.
router.get('/:id/update', auth.isLoggedIn, commentController.comment_update_get);

// POST request to update comment.
router.post('/:id/update', auth.isLoggedIn, commentController.comment_update_post);

// GET request for one comment.
router.get('/:id', commentController.comment_detail);

// GET request for list of all comments.
router.get('/', commentController.comment_list);

module.exports = router;