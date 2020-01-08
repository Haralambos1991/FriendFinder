var express = require("express");
var router = express.Router();

// We have to Load the data//

var FriendsList = require("../data/friends.js");

//A get route the displays the json of all possible friends //
router.get("/friends", function(req, res) {
    res.json(FriendsList);
});

router.post("/friends", function(req, res) {
    res.json(FriendsList);
    // Grabs the new friendScore and compares it with the Friendslist array
    console.log("body", req.body);
    // var friendName = req.body.friendname;
    // console.log("req.body.friendname", req.body.friendname);
    var newFriendScores = req.body.scores;
    console.log("req.body.scores", req.body.scores);
    var scoresArray = [];
    var FriendsCount = 0;
    var bestMatch = 0;

    FriendsCount();
    friendName();

    //runs through all current friends in list //

    for (var i = 0; i < FriendsList.length; i++) {
        var scoresDiff = 0;

        // runs through the scores //

        for (var j = 0; j < newFriendScores.length; j++) {
            scoresDiff = Math.abs(parseInt(FriendsList[i].scores[j]) - parseInt(newFriendScore[j]));
        }

        // Right now i am gonna push the results into the new scores array //
        scoresArray.push(scoresDiff);
    }

    // After all the friends will be compared find the best scores match
    for (var i = 0; i < scoresArray.length; i++) {
        if (Scoresarray[i] <= Scoresarray[bestMatch]) {
            bestMatch = i;
        }
    }

    // Right now its time to return the bestMatch data //

    var bff = friendList[bestMatch];
    res.json(bff);
    // pushes new submission into the Friendslist array //
    friendList.push(req.body);
});

module.exports = router;
