const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('db is connected');
  } catch (error) {
    console.log(error.messages);
  }
};
module.exports = connectDb;
