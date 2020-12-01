// Series of npm packages that we will use to give our server useful functionality
const express = require("express");
const fs = require("fs"); 
const util = require("util");
const app = express();
const path = require("path");


// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Middleware used to connect the server and user info. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static ("public"));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);



// LISTENER - The below code effectively "starts" our server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

