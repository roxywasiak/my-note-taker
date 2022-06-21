//get the two routes in
const { Router } = require("express");
//register the routes
const apiRoutes = require("./apiRoutes");
const viewRoutes = require("./viewRoutes");
//create the instance
const newRouter = Router();
//take it to this page
newRouter.use("/api", apiRoutes);
newRouter.use("/", viewRoutes);

//export the router
module.exports = newRouter;
