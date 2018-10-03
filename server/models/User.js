const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
  /*  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }*/
},
  {
    collection: "users"
  });

module.exports = mongoose.model("User", User);