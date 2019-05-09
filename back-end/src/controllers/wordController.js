// required modules
const wordModel = require("../models/word");

class WordController {
  constructor() {}

  // insert word data to DB
  insertWord(wordData, callback) {
    wordModel
      .create(wordData)
      .then(word => callback(null, word))
      .catch(err => callback(err));
  }

  // update word data to DB
  updateWord(wordId, wordData, callback) {
    wordModel
      .findByIdAndUpdate(wordId, wordData)
      .then(word => callback(null, word))
      .catch(err => callback(err));
  }

  // delete word by ID from DB
  deleteWordById(wordId, callback) {
    wordModel
      .findByIdAndDelete(wordId)
      .then(word => callback(null, word))
      .catch(err => callback(err));
  }

  // get word by ID from DB
  getWordById(wordId, callback) {
    wordModel
      .findById(wordId)
      .then(word => callback(null, word))
      .catch(err => callback(err));
  }

  // get all words from DB
  getAllWords(callback) {
    wordModel
      .find({})
      .then(word => callback(null, word))
      .catch(err => callback(err));
  }
}

module.exports = WordController;