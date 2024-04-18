// Full Name: Melvin Viado
// Student ID: 100899671
// Date Completed: 04/17/2024

const express = require("express");
const animalRouter = require("./routes/animal");
const bodyParser = require("body-parser");
const DBConfig = require("./config/database");

const app = express();

require("dotenv").config();

DBConfig.connectToDatabase();

app.set("views", "./views");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/", animalRouter);

app.listen(3500, () => {
  console.log("Express server listening on port 3500...");
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/main', function(req, res) {
  res.render('main');
});