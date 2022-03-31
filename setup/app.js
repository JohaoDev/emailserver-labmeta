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
app.get("/", (req, res) =>
  res.json({ message: "Welcome Email Server - Labmeta S.A.", status: "UP" })
);
app.post("/send-email", email.gerencia);

module.exports = app;
