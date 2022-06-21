//import your notes and utils
const { v4: uuidv4 } = require("uuid");

//my read to and write to file functions from utils which reads from json file
const { readFromFile, writeToFile } = require("../../utils");

//get request for api route
const getNotes = (req, res) => {
  try {
    return res.json(readFromFile("db"));
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "An error has occurred" });
  }
};

//post request
const postNotes = (req, res) => {
  try {
    let rawData = readFromFile("db");
    let { title, text } = req.body;
    const id = uuidv4();
    let makeNote = { title, text, id };

    writeToFile("db", [makeNote, rawData]);
    return res.json(makeNote);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "An error has occurred" });
  }
};

//read from file
//get the info you want eg text, title id (remember to add the id in the database not done this yet)
//use the uuid gen to add a id to the note
//make a new note with title, text and id pass in the db object json

//delete request
const deleteNotes = (req, res) => {
  try {
    const { id } = req.params;
    const noteDelete = readFromFile("db").filter((note) => note.id !== id);
    writeToFile("db", noteDelete);
    return res.status(200).json({ message: "A note has been deleted." });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "An error has occurred" });
  }
};

//export the items
module.exports = {
  getNotes,
  postNotes,
  deleteNotes,
};
