const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { getUserToken, requireAuth } = require("../auth");

const router = express.Router();
const db = require("../db/models");

const { User } = db;

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
    const { userName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ userName, email, hashedPassword });

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
//get list of all users
// router.get("/user-all", requireAuth, asyncHandler(async(req, res) => {
//   const users = await User.findAll({ userName });
//   res.json({ users });
// }));

//get info for specific user 
router.get("/:id(\\d+)", (req, res) => {
  
});

router.put("/:id(\\d+)", (req, res) => {
  //TODO
});

router.delete("/:id(\\d+)", (req, res) => {
  //TODO
});

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
