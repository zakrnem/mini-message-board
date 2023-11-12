var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("new", { title: "New message" });
});

router.get("/submit", function (req, res) {
  console.log("Submit");
});

module.exports = router;
