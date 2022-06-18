//IMPORT FS AND PATH MODULES
const fs = require("fs");
const path = require("path");

//read and writeTo file functions
// read from file
const readFromFile = (fileName) => {
  const jsonData = fs.readFileSync(
    path.join(__dirname, `../src/db/${fileName}.json`),
    "utf-8"
  );
  return JSON.parse(jsonData);
};

//write to file
const writeToFile = (fileName, data) => {
  fs.writeFileSync(
    path.join(__dirname, `../src/db/${fileName}.json`),
    JSON.stringify(data)
  );
};

module.exports = {
  readFromFile,
  writeToFile,
};
