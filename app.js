const { error } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");
// fs - shorthand for file system in node.js

// Parse person.json file, then access person name object, and passed to app.get operation
const jsonParse = JSON.parse(fs.readFileSync("person.json"));
const personName = jsonParse.name;

// shorthand req = request, res = response
app.get("/", (req, res) => {
  res.send("Welcome, " + personName);
});
// (OUTPUT: Welcome, Spencer Sotelo)

// Access to html files in public folder (about.html and contact_us.html)
app.use(express.static("public"));
// Use localhost:3000/about.html or /contact_us.html to access static html files
// Alternatively http://127.0.0.1:3000

// Error handling should a user input any invalid URL
app.get("*", function (req, res, next) {
  let err = new Error("Sorry! Can’t find that resource. Please check your URL");
  err.statusCode = 404;
  next(err);
});
// OUTPUT: "Sorry! Can't find that resource. Please Check your URL" on page,
// and 404 (not found) in console.

// can use console.log("The values of process.env is" , process.env) to display environment variables
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App Listening on Port ${PORT}`);
});
// app.listen uses `${PORT}` - note the backward ticks `` = String interpolation/Template literal.
// OUTPUT in console: App Listening on Port 3000
