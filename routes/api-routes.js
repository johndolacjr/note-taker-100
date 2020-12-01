const Store = require('../db/store.js');

//Routes

module.exports = function(app) {
  
app.get("/api/notes", function(req, res) {
    Store.getNotes().then(data => {
// send data to the front end
        res.json(data)
// Catch errors 
    }).catch(err => {
// sends the error to the front end
        res.status(500).json(err)
    });
  });

app.post('/api/notes', (req, res) => { 
// req.body is the data (notefrom the front end) passing through to the back end
  Store.addNote(req.body).then(data => {
// send data to the front end
        res.json(data)
// Catch errors 
    }).catch(err => {
// sends the error to the front end
        res.status(500).json(err)
    });
}); 

app.delete('/api/notes/:id', (req, res) => { 
// when requesting from the url ((backend)params = (frontend) url) on an AJAX call
  Store.deleteNote(req.params.id).then(data => {
// send a true value to the front end
        res.json(true)
// Catch errors 
    }).catch(err => {
// sends the error to the front end
        res.status(500).json(err)
    });
});
  
};
