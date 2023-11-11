const mongoose = require('mongoose');
require('dotenv').config()

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@${process.env.URL}/test?retryWrites=true&w=majority`;
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