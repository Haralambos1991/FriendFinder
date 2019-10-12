$("#submit").on("click", function(event) {
    event.preventDefault();
    let answerArray = [
        parseFloat($("#question1").val()),
        parseFloat($("#question2").val()),
        parseFloat($("#question3").val()),
        parseFloat($("#question4").val()),
        parseFloat($("#question5").val()),
        parseFloat($("#question6").val()),
        parseFloat($("#question7").val()),
        parseFloat($("#question8").val()),
        parseFloat($("#question9").val()),
        parseFloat($("#question10").val())
    ];
    var sum = 0;
    for (n of answerArray) {
        sum += parseFloat(n, 10);
    }
    var avg = parseFloat(sum / answerArray.length);
    // console.log(avg);
    //Here we grab the form elements
    var newFriend = {
        scores: "",
        friendName: $("#nameField").val().trim(),
        profileImage: $("#imageField").val().trim(),
        answerAvg: avg
    };
    var newFriend = {
        scores: [ 1, 2, 3 ],
        friendName: "sample data",
        profileImage: "other data",
        answerAvg: 123
    };
    console.log("newFriend", newFriend);

    // $.get("/api/friends", { body: JSON.stringify(newFriend) })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //     })
    //     .catch((error) => console.log(error));

    $.get("/api/friends", function(data) {
        console.log("data", data);

        $.post(
            "/api/friends", // JSON.stringify)({ scores: [ 1, 2, 3 ] }),
            function(result) {
                console.log("result", result);
                //function (data) {

                //console.log("data", data);
                alert("You've been added to our database! \nNow let's see who your best match is...");
                //Displays Best Friend Match
                $("#match-name").text(data.friendName);
                $("#match-img").attr("src", data.profileImage);

                $("#friend-form").val("");
                // In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
                // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
                // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
                // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file
            }
        );
    });
});
