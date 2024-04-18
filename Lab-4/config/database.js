const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose
    .connect('mongodb+srv://adminmel:mptw12345@alldatabases.feyay1a.mongodb.net/?retryWrites=true&w=majority&appName=AllDatabases')
    .then(() => console.log("Connected to mongoDB database!"))
    .catch((err) => console.log(err));
}

module.exports = { connectToDatabase };
