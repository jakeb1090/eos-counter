const path = require("path");
const express = require("express");
const app = express(); // create express app

const reactPath = path.join(path.dirname(__dirname), 'public')

// app.use(express.static(reactPath))

// app.get("/", (req, res) => {
//   res.sendFile(path.join(reactPath))
// });

// app.get("/", (req, res) => {
//   res.sendFile(reactPath)
// })

app.get('/*', (req, res) => {
  res.sendFile(path.join(reactPath, 'index.html'))
})

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
  console.log(reactPath)
});