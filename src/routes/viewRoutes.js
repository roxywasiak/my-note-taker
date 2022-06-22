//get the functions to show the index.html and notes.html
const { Router } = require("express");

const { renderHome, renderNotes } = require("../controllers/view");

const newRouter = Router();

//get the routers
newRouter.get("/notes", renderNotes);
newRouter.get("/", renderHome);

//export modules
module.exports = newRouter;
