const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let answer = new Schema({
  text: {
    type: String
  },
  id_a: {
    type: Number
  },
  count: {
    type: Number
  }
});


let Post = new Schema(
  {
    question: {
      type: String
    },
    answers: {
      type: [answer]
    },
    id_p: {
      type: Number
    }
  },
  {
    collection: "polls"
  }
);

module.exports = mongoose.model("Post", Post);
