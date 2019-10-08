var path = require("path");
path.resolve("public/survey.html");

module.exports = function(app) {
	// In each of the below cases the user is shown an HTML page of content
	//-------------------------------------------------------------------------//
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../../public/survey.html"));
	});
	// if no matching route is found, default to home
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "./public/home.html"));
	});
};
