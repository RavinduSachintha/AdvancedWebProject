// Suggestion model

const mongoose = require("mongoose");

const SuggestionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
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
  },
  upVotedList:{
    type:Array
  },
  downVotedList:{
    type:Array
  }

});

module.exports = mongoose.model("Suggestion", SuggestionSchema);
