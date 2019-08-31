var fs = require ('fs')

module.exports = function(app, path) {
  // Right now all the available friends will be displayed //
  app.get("/api/friends", function (req, res) {
	  fs.readFile("/app/data/friends.js", "utf8", function(err, data) {
		  if (err) {
	

	