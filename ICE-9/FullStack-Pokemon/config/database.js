// Set up and connect to our database

const mongoose = require("mongoose");

function connectToDatabase() {
  // Cloud Database
  mongoose
    .connect('mongodb+srv://adminmel:mptw12345@pokemon.qzpd68h.mongodb.net/?retryWrites=true&w=majority&appName=pokemon')
    .then(() => console.log("Connected to mongoDB database!"))
    .catch((err) => console.log(err));
}

module.exports = { connectToDatabase };

// ----------------------------------------

// Local Database
// mongoose
//   .connect(
//     "mongodb://127.0.0.1:27017/pokemon"
//   )
//   .then(() => console.log("Connected to mongoDB database!"))
//   .catch((err) => console.log(err));
