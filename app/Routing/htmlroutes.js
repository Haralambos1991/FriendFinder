var path = require("path");

module.exports = function(app) {
	//Routes for home and survey pages

	//   app.get("/", function(req, res) {
	//     res.sendFile(path.join(__dirname, "/../public/home.html"));
	// });
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "..publicsurvey.html"));
	});

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "..publichome.html"));
	});
};
