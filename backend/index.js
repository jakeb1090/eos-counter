const path = require("path");
const express = require("express");
const app = express(); // create express app

const reactPath = path.join(__dirname, '..','public')

// app.get("/", (req, res) => {
//   res.sendFile(path.join(reactPath))
// });

app.use(express.static(reactPath))

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
  console.log(reactPath)
});