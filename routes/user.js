const express = require("express");

const router = express.Router();

router.get("/user", (req, res) => {
  //TODO
});

router.post("/user", (req, res) => {
  //TODO
});

router.get("/user/:id(\\d+)", (req, res) => {
  //TODO
});

router.put("/user/:id(\\d+)", (req, res) => {
  //TODO
});

router.delete("/user/:id(\\d+)", (req, res) => {
  //TODO
});

router.get("/user/:id(\\d+)/followers", (req, res) => {
  //TODO
});

router.get("/user/:id(\\d+)/following", (req, res) => {
  //TODO
});

router.post("/user/:id(\\d+)/following/:followingId(\\d+)", (req, res) => {
  //TODO
});

router.delete("/user/:id(\\d+)/following/:followingId(\\d+)", (req, res) => {
  //TODO
});

module.exports = router;
