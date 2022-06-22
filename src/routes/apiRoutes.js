//get alll the crud operations
const { Router } = require("express");

//list all the routers
const { getNotes, postNotes, deleteNotes } = require("../controllers/api");
//getNotes
//postNotes
//deleteNotes

const newRouter = Router();
newRouter.get("/notes", getNotes);
newRouter.post("/notes", postNotes);
newRouter.delete("/notes/:id", deleteNotes);

//export the modules
module.exports = newRouter;
