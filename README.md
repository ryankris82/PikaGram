# PikaGram
full-stack group project for AppAcademy

# Technologies
- JavaScript 
- PUG/HTML
- CSS
- PostgreSql (with Sequelize)
- AWS S3 (with Multer, MultserS3, AWS SDK)

## Summary
Pikagram is a social networking application inspired by Instagram. Pikagram features various users (Pokemon) and a sampling of their online presence. The application focuses on image sharing and allows users to connect with each other. Image hosting for this application utilizes Amazon Web Services S3 cloud storage.The backend of Pikagram uses JavaScript and PostgresSQL, allowing for database queries to run effiecently utilizing RESTful API routes. The frontend utilizes JavaScript and the Pug templating engine, along with quite a bit of raw CSS. 

## Features
Demo Login

User Authentication

User Profile

Editing User Information

Image Uploading/Deleting

Like/Comment & View Images

Following/Unfollowing Other Users

User Feed

## Demo Login
An user is able to use a demo login button to explore the application with an existing account already seeded into the database.

## User-Authentication
User Authentication is secured by incorporating BCrypt, creating a password-digest to ensure no users actual password is stored in the database. Session tokens are created at login and destroyed at logout, to store a user's current session as a client-side cookie in the browser.

User signup & login components render a display of images. An user is able to login, create an account, or use a demo login account to explore the application.

## User-Profile
An user who has created an account on Pikagram, has their own profile page. From this page, the user is able to see details about their account including how many users they are following as well as how many users follow them.

## Editing-User-Information
Users can update their information such as username, email, bio as well as their profile picture. An image preview shows their current profile picture and several textfields show their current username,email and bio.However,to make sure that no one is able to mutate the demo user,this feature is not available for demo user and you need to create an account first to use this feature.

## Image Uploading/Deleting
Pikagram features Amazon Web Services to host uploaded images. Users are able to post images from their profile. 

## User Actions
While actively logged in, a nav bar is displayed with a fixed position at the top of their browser window. From the nav bar, users are able to:

  - Navigate to the main profile (Pikachu icon)
  - Navigate to the feed (star icon)
  - Navigate to create a post(Jigglypuff icon)

## Like,Comment & View Images

Users are able to like and comment on photos from the image feed, which renders posts from other member which the current user is following.

## User Feed
The feed displays only the photos of the user the logged in user is currently following. If the logged in user unfollows existing users or follows new users, the feed updates automatically.
