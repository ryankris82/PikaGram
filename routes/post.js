const express = require('express');

// const db = require('')

const router = express.Router();

router.get('/posts/:postId(\\d+)', (req, res) => {
  //TODO
});

router.post('/posts', (req, res) => {
  //TODO
});

router.put('/posts/postId(\\d+)', (req, res) => {
  //TODO
});

router.delete('/posts/postId(\\d+)', (req, res) => {
  //TODO
});

router.get('/posts/user/:userId(\\d+)', (req, res) => {
  //TODO
});

router.get('/posts/following/:userId(\\d+)', (req, res) => {
  //TODO
});

router.post('/posts/:postId(\\d+)/comments', (req, res) => {
  //TODO
});

router.delete('/posts/:postId(\\d+)/comments/:commentId(\\d+)', (req, res) => {
  //TODO
});

router.post('/posts/:postId(\\d+)/likes', (req, res) => {
  //TODO
});

router.delete('/posts/:postId(\\d+)/likes/:likeId(\\d+)', (req, res) => {
  //TODO
});



module.exports = router;
