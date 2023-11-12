const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@${process.env.URL}/database?retryWrites=true&w=majority`;

mongoose.connect(uri, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

const messageSchema = new mongoose.Schema({
  text: String,
  user: String,
  added: Date,
});

module.exports = mongoose.model("Message", messageSchema);
