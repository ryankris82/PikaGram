const express = require('express');
const { asyncHandler } = require('../utils');
const db = require('../db/models');

const router = express.Router();

const postNotFound = (id) => {
  const err = Error('Post not found');
  err.errors = [`Post with id of ${id} could no be found`];
  err.title = 'Post no found';
  err.status = 404;
  return err;
}

//get a post
router.get('/posts/:postId(\\d+)', asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const post = await db.Post.findByPk(postId);

  if (post) {
    res.json({ post });
  } else {
    next(postNotFound(postId));
  }
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

router.put('/posts/:postId(\\d+)', asyncHandler(async (req, res, next) => {
  const postId = req.params.postId
  const post = await db.Post.findByPk(postId);
  // if (req.user.id !== post.userId) { //Checks if user is signed in and can edit their own tweet
  //   const err = new Error('Unauthorized');
  //   err.status = 401;
  //   err.message = 'You are not authorized to edit this post.';
  //   err.title = 'Unauthorized';
  //   throw err
  // }
  if (post) {
    await post.update({ caption: req.body.caption })
    res.json({ post })
  } else {
    next(postNotFound(postId));
  }
}));

router.delete('/posts/:postId(\\d+)', asyncHandler(async (req, res) => {
  const postId = req.params.postId
  const post = await db.Post.findByPk(postId);
  // if (req.user.id !== post.userId) { //Checks if user is signed in and can edit their own tweet
  //   const err = new Error('Unauthorized');
  //   err.status = 401;
  //   err.message = 'You are not authorized to delete this post.';
  //   err.title = 'Unauthorized';
  //   throw err
  // }
  if (post) {
    await post.destroy();
    res.json({ post })
  } else {
    next(postNotFound(postId));
  }
}));

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
