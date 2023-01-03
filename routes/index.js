// const router = require("express").Router();
// const path = require("path");
// const apiRoutes = require("/api");
// router.route("/api").unsubscribe();

const express = require("express");
// const router = express.Router();

const notesRouter = require("./api/notes");

const app = express();

app.use("/api/notes", notesRouter);

// ROUTING
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname + "../public/pages/notes.html"));;
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../public/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../public/pages/404.html"));
});

module.exports = app;