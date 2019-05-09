// User model

const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  data: {
    type: String,
    unique: true,
    required: true
  },
  state: {
    type: String
  },
  bestSuggestion: {
    type: String
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  activeState: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date
  }
});

module.exports = mongoose.model("Word", WordSchema);
