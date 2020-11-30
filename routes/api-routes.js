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
  
};
