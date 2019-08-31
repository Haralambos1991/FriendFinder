//Here se define our dependencies//

var express = require("express");
var path = require("path");

var app = express();
//Here i am gonna set the port of my application//
var PORT = process.env.Port|| 3000;

//Below we will use the bodyparser in order to interpret data to the server//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// //When the user requests data from various url, this code will help him find the informations that the user needs.

require('./app/routing/apiRoutes.js') (app);
require('./app/routing/htmlRoutes.js') (app);

// //We will start our server//

app.listen(PORT, function() {
console.log("app is listening on PORT:" + PORT);
});

