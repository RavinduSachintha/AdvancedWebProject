// User model

const mongoose = require("mongoose");

const SuggestionSchema = new mongoose.Schema({
  wordId: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  state: {
    type: String
  },
  votesCount: {
    type: Number
  },
  createdDate: {
    type: Date
  }
});

module.exports = mongoose.model("Suggestion", SuggestionSchema);
