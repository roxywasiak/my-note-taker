//import your notes and utils
const { v4: uuidv4 } = require("uuid");

//my read to and write to file functions from utils which reads from json file
const { readFromFile, writeToFile } = require("../../utils");

//get request for api route
const getNotes = (req, res) => {
  try {
    res.json(readFromFile("db"));
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "An error has occurred" });
  }
};

//post request
const postNotes = (req, res) => {};
//read from file
//get the info you want eg text, title id (remember to add the id in the database not done this yet)
//use the uuid gen to add a id to the note
//make a new note with title, text and id pass in the db object json

//put request
const updateNotes = (req, res) => {};
//read from file
//get the info you want like the other two functions
//get each map? filter? each note id
//update note in db
//return the response
//return any messages/errors

//delete request
const deleteNotes = (req, res) => {};

//export the items
module.exports = {
  getNotes,
  postNotes,
  updateNotes,
  deleteNotes,
};
