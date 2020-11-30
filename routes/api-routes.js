// Need to link my routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
var dbData = require("../db/db.json");
var storeData = require("../db/store.js");


//Routes

module.exports = function(app) {
  
  app.get("/api/index", function(req, res) {
    res.json(db);
  });

  app.get("/api/notes", function(req, res) {
    res.json(store);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

//   app.post("/api/notes", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
// //     if (tableData.length < 5) {
// //       tableData.push(req.body);
// //       res.json(true);
// //     }
// //     else {
// //       waitListData.push(req.body);
// //       res.json(false);
// //     }
//   });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
 
  app.post('/api/index', (req, res) => { 
  res.send("POST Request Called") 
}); 

app.post('/api/notes', (req, res) => { 
  res.send("POST Request Called") 
}); 

  app.delete('/api/index', (req, res) => { 
  res.send("DELETE Request Called") 
});

  app.delete('/api/notes', (req, res) => { 
  res.send("DELETE Request Called") 
});
  
  
//   app.delete("/api/notes", function(req, res) {
//     // Empty out the arrays of data
//     store.length = 0;
    
//     res.json({ ok: true });
//   });
};
