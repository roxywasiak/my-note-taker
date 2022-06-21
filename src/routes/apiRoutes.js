//get alll the crud operations
const { Router } = require("express");
const { get } = require("./viewRoutes");

//list all the routers
const {
  getNotes,
  postNotes,
  updateNotes,
  deleteNotes,
} = require("../controllers/api");
//getNotes
//postNotes
//updateNotes
//deleteNotes

const newRouter = Router();
newRouter.get("/notes", getNotes);
newRouter.post("/notes", postNotes);
newRouter.delete("/notes/:id", deleteNotes);

//export the modules
module.exports = newRouter;
