// REQUIREMENTS (DEPENDENCIES)
const express = require("express");
const path = require("path");
const fs = require("fs");

// SERVER
const app = express();
const PORT = 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/notes", (req, res) => {
  console.log("GEt request for notes.")
});

app.post("/api/notes", (req, res) => {
  console.log("POST request for new note.")
});

app.delete("/api/notes", (req, res) => {
  console.log("DELETE request to delete note.")
});

// ROUTING (move to routing folder)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// LISTENER
// app.listen(PORT, () => {
//   console.log("App listening on PORT " + PORT);
// });