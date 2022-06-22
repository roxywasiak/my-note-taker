//get path
const path = require("path");

//render your notes index page
const renderNotes = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/notes.html");
  return res.sendFile(filePath);
};

//render your notes page
const renderHome = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/index.html");
  return res.sendFile(filePath);
};

//export the modules
module.exports = {
  renderHome,
  renderNotes,
};
//render index.html
//render notes.html
