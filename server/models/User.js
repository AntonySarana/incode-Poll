const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ivote = new Schema({
  id_p: {
    type: Number
  },
  id_a:{
    type: Number
  },
});

const User = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  /*  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }*/
  iVoted:[ivote],
},
  {
    collection: "users"
  });

module.exports = mongoose.model("User", User);