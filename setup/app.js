const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");

let app = express(),
  email = require("../controllers/emailControlador");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(cors());

//Routes
app.get("/", (req, res) => res.send("Welcome Email Server - Labmeta S.A."));
app.post("/send-email", email.gerencia);

module.exports = app;
