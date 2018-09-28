const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema(
  {
    question: {
      type: String
    },
    answers: {
      type: Array
    },

  },
  {
    collection: "polls"
  }
);

module.exports = mongoose.model("Post", Post);
