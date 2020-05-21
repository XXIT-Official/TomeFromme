var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/letter", function (req, res, next) {
  res.render("letter", { title: "Express" });
});

router.get("/loading", function (req, res, next) {
  res.render("loading", { title: "Express" });
});
module.exports = router;
