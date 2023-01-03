// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const util = require("util");
// const { stringify } = require("querystring");

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// const app = express();
// const PORT = process.env.PORT || 8000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("./public"));



// app.get("/api/notes", (req, res) => {
//   readFileAsync("./db/db.json", "utf8").then(function(data) {
//     notes = [].concat(JSON.parse(data));
//     res.json(notes);
//   });
// });

// app.post("/api/notes", (req, res) => {
//   const note = req.body;
//   readFileAsync("./db/db.json", "utf8").then(function(data) {
//     const notes = [].concat(JSON.parse(data));
//     note.id = notes.length + 1
//     notes.push(note);
//     return notes
//   }).then(function(notes) {
//     writeFileAsync("./db/db.json", JSON>stringify(notes))
//     res.json(note);
//   })
// });

// app.delete("/api/notes/:id", (req, res) => {
//   const idToDelete = parseInt(req.params.id);
//   readFileAsync("./db/db.json", "utf8").then(function(data) {
//     const notes = [].concat(JSON.parse(data));
//     const newNotesData = [];
//     for (let i = 0; i < notes.length; i++) {
//       if(idToDelete !== notes[i].id) {
//         newNotesData.push(notes[i]);
//       }
//     }
//     return newNotesData
//   }).then(function(notes) {
//     writeFileAsync("./db/db.json", JSON.stringify(notes))
//     res.send("Successful save.")
//   })
// })

// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(_dirname, "./public/index.html"));
// });

// app.listen(PORT, () => {
//   console.log("App listening on PORT " + PORT);
// });