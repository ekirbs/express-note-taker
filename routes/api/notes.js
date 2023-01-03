const router = require("express").Router();
const fs = require("fs");

let uniqid = require("uniqid");

app.get("/api/notes", (req, res) => {
  console.log("GET notes request");

  let data = fs.readFileSync("../../db/db.json", "utf8");

  res.json(JSON.parse(data));
});



app.post("/api/notes", (req, res) => {

  const newNote = {
    ...req.body,
    id: uniqid(),
  };

  console.log("POST request for new note");

  let data = fs.readFileSync("../../db/db.json", "utf8");

  const dataJSON = JSON.parse(data);

  dataJSON.push(newNote);

  fs.writeFile("../../db/db.json", JSON.stringify(dataJSON), (err, text) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log ("Check", text);
  });

  console.log("Successfully added a new note.");

  res.json(data);
});



app.delete("/api/notes/:id", (req, res) => {
  let data = fs.readFileSync("../../db/db.json", "utf8");

  const dataJSON = JSON.parse(data);

  const newNotes = dataJSON.filter((note) => {
    return note.id !== req.params.id;
  });

  fs.writeFile("../../db/db.json", JSON.stringify(newNotes), (err, text) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  res.json(newNotes);

});

module.exports = router;