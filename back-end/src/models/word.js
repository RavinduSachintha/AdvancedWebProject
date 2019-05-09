// User model

const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
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
    type: String
  },
  createdDate: {
    type: Date
  }
});

module.exports = mongoose.model("Word", WordSchema);
