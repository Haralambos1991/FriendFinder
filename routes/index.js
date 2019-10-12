var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/survey", function(req, res) {
	res.render("survey", { title: "Survey" });
});
module.exports = router;
