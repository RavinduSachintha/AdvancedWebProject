// Comment model

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  wordId: {
    type: String,
    required: true
  },
  suggestionId: {
    type: String
  },
  data: {
    type: String,
    required: true
  },
  likesCount: {
    type: Number
  },
  createdDate: {
    type: Date
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
