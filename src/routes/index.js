//get the two routes in
const { Router } = require("express");

const apiRoutes = require("./apiRoutes");
const viewRoutes = require("./viewRoutes");

const newRouter = Router();

newRouter.use("/api", apiRoutes);
newRouter.use("/", viewRoutes);

//export modules
module.exports = newRouter;
