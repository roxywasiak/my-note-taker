//get path
const path = require("path");

//render your notes index page
const renderNotes = (req, res) => {
  console.log(res);
  const filePath = path.join(__dirname, "../../../public/notes.html");
  res.sendFile(filePath);
};

//render your notes page
const renderHome = (req, res) => {
  console.log(res);
  const filePath = path.join(__dirname, "../../../public/index.html");
};

//export the modules
module.exports = {
  renderHome,
  renderNotes,
};
//render index.html
//render notes.html
