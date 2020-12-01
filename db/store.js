// packages we are using 
const fs = require("fs"); 
const util = require("util");

// returns a unique ID for our returns
// const uuidv1 = require("uuid/v1");
const { v1: uuidv1 } = require('uuid');

// creates a promisified version of fs.readfile and writefile
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync("./db/db.json", "utf8");
    }
    write(note) {
        return writeFileAsync("./db/db.json", JSON.stringify(note)); 
    }
    getNotes() {
        return this.read().then(notes => {
            let parsedNotes; 
        try {parsedNotes = [].concat(JSON.parse(notes))}
        catch (err) {
            parsedNotes = [];
        }
        return parsedNotes;
        })
    }
// example of destructuring -- im taking the title, text string and destructuring it to add a unique id. 
    addNote(note) {
        const {title, text} = note;
        const newNote = {title, text, id: uuidv1()};
        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => newNote)
    } 

// delete note is going to take in an id and use a .filter to only keep the notes that do not include that id. 

    deleteNote(id) {
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== id))
        .then(updatedNotes => this.write(updatedNotes))
    }
} 

module.exports = new Store ();





