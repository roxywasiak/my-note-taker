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
newRouter.get();
newRouter.post();
newRouter.put();
newRouter.delete();

//export the modules
module.exports = newRouter;
