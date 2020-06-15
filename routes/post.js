const express = require('express');
const { asyncHandler } = require('../utils');
const db = require('../db/models');

const router = express.Router();

//get a post
router.get('/posts/:postId(\\d+)', asyncHandler(async (req, res) => {
  const postId = req.params.postId;
  const post = await db.Post.findByPk(postId);
  res.json({ post });
}));

//create a post
router.post('/posts', asyncHandler(async (req, res) => {
  const {
    caption,
    photoPath
  } = req.body;
  console.log(req.body);

  const post = await db.Post.create({
    userId: 1, // replace with req.user.id so it's based on who is logged in
    caption,
    photoPath
  });

  res.json({ post });
}));

router.put('/posts/postId(\\d+)', (req, res) => {
  //TODO
});

router.delete('/posts/postId(\\d+)', (req, res) => {
  //TODO
});

router.get('/posts/user/:userId(\\d+)', (req, res) => {
  //TODO
});

router.get('/posts/following/:userId(\\d+)', asyncHandler(async (req, res) => {
  // const userId = req.params.userId
  // console.log('this is the user id', userId)
  // const posts = await db.Post.findAll({ where: { followerId: userId } });
  // // , order: [['createdBy', 'DESC']] }
  // console.log(posts);
  // res.json({ posts });
}));

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
