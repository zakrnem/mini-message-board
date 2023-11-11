const mongoose = require('mongoose');
require('dotenv').config()

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@${process.env.URL}/test?retryWrites=true&w=majority`;

mongoose.connect(uri, {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

/*
const client = new MongoClient(uri);

const connectDB = async () => {
  try {
    await client.connect();
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
*/