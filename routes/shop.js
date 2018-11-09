const express = require("express");

const router = express.Router();

router.use("/", (req, res) => {
  console.log("It is next middelvare!");
  res.send("<h1>hello!</h1>");
});

module.exports = router;