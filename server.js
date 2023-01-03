// REQUIREMENTS (DEPENDENCIES)
const express = require("express");
const path = require("path");
// const fs = require("fs");
// const uuid = require("uuid");
const api = require("./routes/index.js");

// SERVER
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", api);

app.use(express.static("public"));

// app.get("/html", (req, res) => {
//   res.send("User List");
// });

// app.get("/api", (req, res) => {
//   res.send("User New Form");
// });

// app.get("/api/notes", (req, res) => {
//   console.log("GEt request for notes.");
// });

// app.post("/api/notes", (req, res) => {
//   console.log("POST request for new note.");
// });

// app.delete("/api/notes", (req, res) => {
//   console.log("DELETE request to delete note.");
// });

// ROUTING (move to routing folder)
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/pages/notes.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/pages/404.html"));
});

// LISTENER
// app.listen(PORT, () => {
// console.log(`App listening at http://localhost:${PORT} 🚀`);
// });