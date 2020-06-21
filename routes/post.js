
const express = require('express');
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require('../utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const upload = require('../services/photo-upload');
const { Op } = require('sequelize');

const singleImageUpload = upload.single('image');

const router = express.Router();

const postNotFound = (id) => {
  const err = Error('Post not found');
  err.errors = [`Post with id of ${id} could not be found`];
  err.title = 'Post not found';
  err.status = 404;
  return err;
}

const userNotFound = (id) => {
  const err = Error('User not found');
  err.errors = [`User with id of ${id} could not be found`];
  err.title = 'User not found';
  err.status = 404;
  return err;
}

const commentNotFound = (id) => {
  const err = Error('Comment not found');
  err.errors = [`Comment with id of ${id} could not be found`];
  err.title = 'Comment not found';
  err.status = 404;
  return err;
}

const likeNotFound = (id) => {
  const err = Error('Like not found');
  err.errors = [`Like with id of ${id} could not be found`];
  err.title = 'Like not found';
  err.status = 404;
  return err;
}

//get a post
router.get('/posts/:postId(\\d+)', asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const post = await db.Post.findByPk(postId, {
    include: [
      {
        model: db.User,
        as: 'user',
        attributes: ['userName', 'profilePicPath']

      },
      {
        model: db.Comment,
        attributes: ['id', 'userId', 'comment', 'createdAt'],
        order: [['createdAt', 'DESC']],
        include: {
          model: db.User,
          attributes: ['userName', 'profilePicPath']
        }
      }, {
        model: db.Like,
        attributes: ['userId'],
        include: {
          model: db.User,
          attributes: ['userName', 'profilePicPath']
        }
      }
    ]
  });

  if (post) {
    res.json({ post });
  } else {
    next(postNotFound(postId));
  }
}));

//create a post
router.post('/posts', handleValidationErrors, [
  check('photoPath')
    .exists({ checkFalsey: true })
    .withMessage('Please provide a picture')
], requireAuth, singleImageUpload, asyncHandler(async (req, res) => {
  const {
    caption
  } = req.body;
  console.log(req.body);

  const post = await db.Post.create({
    userId: req.user.id, // replace with req.user.id so it's based on who is logged in
    caption,
    photoPath: req.file.location
  });

  res.json({ post });
}));

//edit a post
router.put('/posts/:postId(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
  const postId = req.params.postId
  const post = await db.Post.findByPk(postId);
  if (req.user.id !== post.userId) { //Checks if user is signed in and can edit their own tweet
    const err = new Error('Unauthorized');
    err.status = 401;
    err.message = 'You are not authorized to edit this post.';
    err.title = 'Unauthorized';
    throw err
  }
  if (post) {
    await post.update({ caption: req.body.caption })
    res.json({ post })
  } else {
    next(postNotFound(postId));
  }
}));

//deletes a post
router.delete('/posts/:postId(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
  const postId = req.params.postId
  const post = await db.Post.findByPk(postId);
  if (req.user.id !== post.userId) { //Checks if user is signed in and can edit their own tweet
    const err = new Error('Unauthorized');
    err.status = 401;
    err.message = 'You are not authorized to delete this post.';
    err.title = 'Unauthorized';
    throw err
  }
  if (post) {
    await post.destroy();
    res.json({ post })
  } else {
    next(postNotFound(postId));
  }
}));

//all a user's posts
router.get('/posts/user/:userId(\\d+)', asyncHandler(async (req, res, next) => {
  const userId = req.params.userId;
  const user = await db.User.findByPk(userId);
  if (user) {
    const userPosts = await db.User.findByPk(userId, {
      attributes: ['id', 'userName', 'profilePicPath'],
      include: {
        model: db.Post,
        as: 'posts',
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: db.Comment,
            attributes: ['id', 'userId', 'comment', 'createdAt'],
            order: [['createdAt', 'DESC']],
            include: {
              model: db.User,
              attributes: ['userName', 'profilePicPath']
            }
          }, {
            model: db.Like,
            attributes: ['userId', 'profilePicPath'],
            include: {
              model: db.User,
              attributes: ['userName', 'profilePicPath']
            }
          }
        ],
      }
    })
    res.json({ userPosts });
  } else {
    next(userNotFound(userId));
  }
}));

//get all posts the people user follows
router.get('/posts/following/:userId(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
  const userId = req.params.userId;
  const user = await db.User.findByPk(userId);
  if (req.user.id !== user.dataValues.id) { //Checks if user is signed in and can edit their own tweet
    const err = new Error('Unauthorized');
    err.status = 401;
    err.message = 'You are not authorized to view these post.';
    err.title = 'Unauthorized';
    throw err
  }
  if (user) {
    const followerPosts = await db.User.findByPk(userId, {
      attributes: ['id', 'userName'],
      include: [
        {
          model: db.User,
          as: 'following',
          attributes: ['id', 'userName'],
          through: { attributes: [] },
          include: {
            model: db.Post,
            as: 'posts',
            order: [['createdAt', 'DESC']],
            include: [
              {
                model: db.User,
                as: 'user',
                attributes: ['userName', 'profilePicPath']
              },
              {
                model: db.Comment,
                attributes: ['id', 'userId', 'comment', 'createdAt'],
                order: [['createdAt', 'DESC']],
                include: {
                  model: db.User,
                  attributes: ['userName', 'profilePicPath']
                }
              }, {
                model: db.Like,
                attributes: ['userId', 'profilePicPath'],
                include: {
                  model: db.User,
                  attributes: ['userName', 'profilePicPath']
                }
              }
            ],
          }
        },
        {
          model: db.Post,
          as: 'posts',
          include: [
            {
              model: db.User,
              as: 'user',
              attributes: ['userName', 'profilePicPath']
            },
            {
              model: db.Comment,
              attributes: ['id', 'userId', 'comment', 'createdAt'],
              order: [['createdAt', 'DESC']],
              include: {
                model: db.User,
                attributes: ['userName', 'profilePicPath']
              }
            }, {
              model: db.Like,
              attributes: ['userId', 'profilePicPath'],
              include: {
                model: db.User,
                attributes: ['userName', 'profilePicPath']
              }
            }
          ],
        }
      ],
    })

    const followingPosts = followerPosts.dataValues.following.flatMap((following) => following.posts)
    const userPosts = followerPosts.dataValues.posts;
    followingPosts.push(...userPosts)
    const sortedPosts = followingPosts.sort((a, b) => b.createdAt - a.createdAt)

    res.json({ sortedPosts });
  } else {
    next(userNotFound(userId));
  }
}));

//Add a comment on a post
router.post('/posts/:postId(\\d+)/comments', requireAuth, asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const post = await db.Post.findByPk(postId);
  if (post) {
    const {
      comment
    } = req.body
    const postComment = await db.Comment.create({
      userId: req.user.id,
      postId,
      comment
    });
    res.json({ postComment });
  } else {
    next(postNotFound(postId));
  }
}));

//delete a comment
router.delete('/posts/:postId(\\d+)/comments/:commentId(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
  const commentId = req.params.commentId;
  const comment = await db.Comment.findByPk(commentId);
  if (comment) {
    if (req.user.id !== comment.userId && req.user.id !== comment.postId) { //Checks if user is signed in and can edit their own tweet
      const err = new Error('Unauthorized');
      err.status = 401;
      err.message = 'You are not authorized to delete this comment.';
      err.title = 'Unauthorized';
      throw err
    }
    comment.destroy();
    res.json({ comment });
  } else {
    next(commentNotFound(commentId))
  }
}));

//add a like
router.post('/posts/:postId(\\d+)/likes', requireAuth, asyncHandler(async (req, res) => {
  const postId = req.params.postId;
  const post = await db.Post.findByPk(postId);
  if (post) {
    const existingLike = await db.Like.findOne({
      where: {
        userId: req.user.id,
        postId
      }
    });
    if (existingLike) {
      res.json({ existingLike });
    } else {
      const like = await db.Like.create({
        userId: req.user.id,
        postId,
      });
      res.json({ like });
    }
  } else {
    next(postNotFound(postId));
  }
}));

//delete a like
router.delete('/posts/:postId(\\d+)/likes', requireAuth, asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const like = await db.Like.findOne({
    where: {
      userId: req.user.id,
      postId
    }
  });
  if (like) {
    if (req.user.id !== like.userId) { //Checks if user is signed in and can edit their own tweet
      const err = new Error('Unauthorized');
      err.status = 401;
      err.message = 'You are not authorized to unlike this post.';
      err.title = 'Unauthorized';
      throw err;
    }
    like.destroy();
    res.json({ like });
  } else {
    next(likeNotFound(likeId))
  }
}));

module.exports = router;
