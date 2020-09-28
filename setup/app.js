const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");

let app = express(),
  mail = require("../controllers/mailControlador");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(cors());

//Routes
app.get("/", (req, res) => res.send("Welcome"));
app.post("/send_mail", mail.gerencia);

module.exports = app;
