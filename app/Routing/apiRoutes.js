// We have to Load the data//

var FriendsList = require('../data/friends.js')

module.exports = function(app){
//A get route the displays the json of all possible friends //
app.get('/api/friends', function(req,res){
	res.json(FriendsList);
});

app.post('/api/friends', function(req,res){
// Grabs the new friendScore and compares it with the Friendslist array
var newFriendScores = req.body.scores;
var scoresArray = [];
var FriendCount = 0;
var bestMatch = 0;

