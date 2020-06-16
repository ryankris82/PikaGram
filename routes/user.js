const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { getUserToken, requireAuth } = require("../auth");

const router = express.Router();
const db = require("../db/models");

const { User } = db;

const isLoggedIn = function () {
  //todo: create middleware function to see if user is logged in

}

const validateEmailAndPassword = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];
//create a user
router.post(
  "/",
  check("userName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a username"),
  validateEmailAndPassword,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, userName, email, password, bio, profilePicPath, age, gender } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      hashedPassword,
      bio,
      profilePicPath,
      age,
      gender,
    });

    const token = getUserToken(user);
    res.status(201).json({
      user: { id: user.id },
      token,
    });
  })
);
//create user token
router.post(
  "/token",
  validateEmailAndPassword,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }
    const token = getUserToken(user);
    res.json({ token, user: { id: user.id } });
  })
);

const userNotFoundError = (id) => {
  const err = Error("User not found");
  err.errors = [`User with id of ${id} could not be found.`];
  err.title = "User not found.";
  err.status = 404;
  return err;
};

//get list of all users
router.get(
  "/all",
  requireAuth,
  asyncHandler(async (req, res) => {
    const users = await User.findAll();
    res.json({ users });
  })
);

//get info for specific user
router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json({ user });
    } else {
      next(userNotFoundError(req.params.id));
    }
  })
);

router.put(
  "/:id(\\d+)",
  requireAuth,
  ///validateEmailAndPassword,///
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id);

    if (user) {
      if (req.body.user.id != user.id) {
        //KDEV change req.body.user to req.user
        const err = new Error("Unauthorized");
        err.status = 401;
        err.message = "You are not authorized to edit this user.";
        err.title = "Unauthorized";
        throw err;
      }
      await user.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        bio: req.body.bio,
        profilePicPath: req.body.profilePicPath,
        age: req.body.age,
        gender: req.body.gender,
      });
      res.json({ user });
    } else {
      next(userNotFoundError(req.params.id));
    }
  })
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.params.id);

    if (user) {
      if (req.body.user.id != user.id) {
        //KDEV change to req.user.id
        const err = new Error("Unauthorized");
        err.status = 401;
        err.message = "You are not authorized to delete this user.";
        err.title = "Unauthorized";
        throw err;
      }
      await user.destroy();
      res.json({ message: `Deleted user with id of ${req.params.id}.` });
    } else {
      next(userNotFoundError(req.params.id));
    }
  })
);

router.get("/:id(\\d+)/followers", (req, res) => {
  //TODO
});

router.get("/:id(\\d+)/following", (req, res) => {
  //TODO
});

router.post("/:id(\\d+)/following/:followingId(\\d+)", (req, res) => {
  //TODO
});

router.delete("/:id(\\d+)/following/:followingId(\\d+)", (req, res) => {
  //TODO
});

module.exports = router;
