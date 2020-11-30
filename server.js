// Series of npm packages that we will use to give our server useful functionality
const express = require("express");
const fs = require("fs"); 
const util = require("util");
const app = express();
const path = require("path");
const { v1: uuidv1 } = require('uuid');
// const readFileAsync = util.promisify(fs.readfile); 
// const writeFileAsync = util.promisify(fs.writefile);
// const uuidv1 = require("uuid/v1");

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;


// Middleware used to connect the server and user info. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join("public")));


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    fs.readfile("/db/db.json", function (err, data) {
    if (err) {
        throw err;
    }
    let allNotes = JSON.parse(data);
    return res.json(allNotes);
  });
});
    

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);



// LISTENER - The below code effectively "starts" our server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

