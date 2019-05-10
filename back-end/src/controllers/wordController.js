// required modules
const wordModel = require("../models/word");
const commentModel = require("../models/comment");
const suggestionModel=require("../models/suggestion");

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

  // delete word by ID from DB // rs
  deleteWordById(wordId, callback) {
    wordModel
      .findByIdAndDelete(wordId)
      .then(word => callback(null, word))
      .catch(err => callback(err));
    commentModel
      .deleteMany({"wordId": wordId})
      .then(comment => callback(null, comment))
      .catch(err => callback(err));

    suggestionModel
      .deleteMany({"wordId": wordId})
      .then(suggestion => callback(null, suggestion))
      .catch(err => callback(err));

  }

  // get word by ID from DB
  getWordById(wordId, callback) {
    wordModel
      .findById(wordId)
      .then(word => callback(null, word))
      .catch(err => callback(err));
  }
// get words using word parts from DB //rs
  getWordByPart(part,callback) {
    wordModel
      .find({data:new RegExp(part,"ig")})
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
