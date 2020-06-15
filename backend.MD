# USER ROUTES
- GET /api/users - Get list of all users
- GET /api/users/:userId - Get a single user #userId
- GET /api/users/:userId/followers - Get the followers of a user
- GET /api/users/:userId/following - Get the following of a user
- POST /api/users/:userId/following/:followingId - Follow a user
- DELETE /api/users/:userId/following/:followingId - Unfollow a user

- POST /api/users/ - Sign up at new user
- PUT /api/users/:userId - Edit new user
- DELETE /api/users/:userId - Delete User

# POST ROUTES
- GET /api/posts/:postId - Get a post
- POST /api/posts/ - Create a post
- PUT /api/posts/:postId - Edit a post
- DELETE /api/posts/:postId - Delete a post

- GET /api/posts/user/:userId/- Get all the posts of a user
- GET /api/posts/following/userId - Get all the posts of people you follow

- POST /api/posts/:postId/comments - Create a comment
- DELETE /api/posts/:postId/comments/commentId - Delete a comment

- POST /api/posts/:postId/likes - Create a like
- DELETE /api/posts/:postId/likes/likeId - Delete a like