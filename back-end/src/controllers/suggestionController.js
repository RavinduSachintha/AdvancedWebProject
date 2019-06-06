// required modules
const suggestionModel = require("../models/suggestion");
const commentModel = require("../models/comment");

class SuggestionController {
  constructor() {}

  // insert suggestion data to DB
  insertSuggestion(suggestionData, callback) {
    suggestionModel
      .create(suggestionData)
      .then(suggestion => callback(null, suggestion))
      .catch(err => callback(err));
  }

  // update suggestion data to DB
  updateSuggestion(suggestionId, suggestionData, callback) {
    suggestionModel
      .findByIdAndUpdate(suggestionId, suggestionData)
      .then(suggestion => callback(null, suggestion))
      .catch(err => callback(err));
  }

  // delete suggestion by ID from DB
  deleteSuggestionById(suggestionId, callback) {
    suggestionModel
      .findByIdAndDelete(suggestionId)
      .then(suggestion => callback(null, suggestion))
      .catch(err => callback(err));

    commentModel
      .deleteMany({ suggestionId: suggestionId })
      .then(comment => callback(null, comment))
      .catch(err => callback(err));
  }

  // get suggestion by ID from DB
  getSuggestionById(suggestionId, callback) {
    suggestionModel
      .findById(suggestionId)
      .then(suggestion => callback(null, suggestion))
      .catch(err => callback(err));
  }

  // get all suggestions from DB
  getAllSuggestions(callback) {
    suggestionModel
      .find({})
      .then(suggestion => callback(null, suggestion))
      .catch(err => callback(err));
  }

  getAllSuggestionsByUserId(userId, callback) {
    suggestionModel
      .find({ userId: userId })
      .then(suggestion => callback(null, suggestion))
      .catch(err => callback(err));
  }

  // get suggestions using word parts from DB
  getSuggestionsByPart(part, callback) {
    suggestionModel
      .find({ data: new RegExp(part, "ig") })
      .then(suggestion => callback(null, suggestion))
      .catch(err => callback(err));
  }
}

module.exports = SuggestionController;
