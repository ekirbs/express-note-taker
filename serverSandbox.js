// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const util = require("util");  

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





// const fs = require("fs");
// const uuid = require("uuid");


// app.get("/api/notes", (req, res) => {
//   console.log("GET request for notes.");
// });

// app.post("/api/notes", (req, res) => {
//   console.log("POST request for new note.");
// });

// app.delete("/api/notes", (req, res) => {
//   console.log("DELETE request to delete note.");
// });

// // ROUTING (move to routing folder)
// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/pages/notes.html"));
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });





// let uniqid = require("uniqid");


// router.get("/api/notes", (req, res) => {
//   console.log("GET request for notes.");

//   let data = fs.readFileSync("../../db/db.json", "utf8");

//   res.json(JSON.parse(data));
// });

// router.post("/api/notes", (req, res) => {
//   console.log("POST request for new note.");

  // const { title, text } = req.body;

  // if (req.body) {
  //   const newNote = {
  //     title,
  //     text,
  //     note_id: uuidv4(),
  //   }
  // } else {
  //   res.error("Error in adding note.")
  // }

//   const newNote = {
//     ...req.body,
//     id: uuidv4(),
//   };

//   let data = fs.readFileSync("../../db/db.json", "utf8");

//   const dataJSON = JSON.parse(data);

//   dataJSON.push(newNote);

//   fs.writeFile("../../db/db.json", JSON.stringify(dataJSON), (err, text) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log ("Check", text);
//   });

//   console.log("Successfully added a new note.");

//   res.json(data);
// });

// router.delete("/api/notes/:id", (req, res) => {
//   console.log("DELETE request to delete note.")

//   let data = fs.readFileSync("../../db/db.json", "utf8");

//   const dataJSON = JSON.parse(data);

//   const newNotes = dataJSON.filter((note) => {
//     return note.id !== req.params.id;
//   });

//   fs.writeFile("../../db/db.json", JSON.stringify(newNotes), (err, text) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   });

//   res.json(newNotes);

// });





// const path = require("path");
// const apiRoutes = require("/api");
// router.route("/api").unsubscribe();

// const express = require("express");
// const router = express.Router();

// const notesRouter = require("./apiRoutes");

// const app = express();

// app.use("/api/notes", notesRouter);