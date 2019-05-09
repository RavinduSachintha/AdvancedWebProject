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
}

module.exports = WordController;