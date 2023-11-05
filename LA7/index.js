const express = require("express");
const app = express();
const port = 3000;
// Define a basic route
app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});
// Define another route
app.get("/about", (req, res) => {
  res.send("This is the about page");
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
