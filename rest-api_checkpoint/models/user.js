const mongoose = require('mongoose');

const NewUser = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('NewUser', NewUser);
