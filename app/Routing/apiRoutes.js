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

//runs through all current friends in list //

for (var i = 0; i < FriendsList.length; i++){
	var scoresDiff = 0;

// runs through the scores //

for (var j = 0; j < newFriendScores.length; j++){
	scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
}

//push results into scoresArray
scoresArray.push(scoresDiff);
}

//after all friends are compared, find best match
for(var i=0; i<scoresArray.length; i++){
if(scoresArray[i] <= scoresArray[bestMatch]){
  bestMatch = i;
}
}

//return bestMatch data
var bff = friendList[bestMatch];
res.json(bff);

//pushes new submission into the friendsList array
friendList.push(req.body);
});
};	