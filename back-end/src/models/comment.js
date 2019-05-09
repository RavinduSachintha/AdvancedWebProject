// User model

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
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
  createdDate: {
    type: Date
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
