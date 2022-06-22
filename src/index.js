//set up the server
const express = require("express");
const cors = require("cors");

const routes = require("./routes");

//declare the port
const PORT = process.env.PORT || 4000;

//make an instance of express
const app = express();

//add the middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));
app.use(routes);
//app listen
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
