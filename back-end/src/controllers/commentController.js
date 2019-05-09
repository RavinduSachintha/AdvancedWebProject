// required modules
const commentModel = require("../models/comment");

class CommentController {
  constructor() {}

  // insert comment data to DB
  insertComment(commentData, callback) {
    commentModel
      .create(commentData)
      .then(comment => callback(null, comment))
      .catch(err => callback(err));
  }

  // update comment data to DB
  updateComment(commentId, commentData, callback) {
    commentModel
      .findByIdAndUpdate(commentId, commentData)
      .then(comment => callback(null, comment))
      .catch(err => callback(err));
  }

  // delete comment by ID from DB
  deleteCommentById(commentId, callback) {
    commentModel
      .findByIdAndDelete(commentId)
      .then(comment => callback(null, comment))
      .catch(err => callback(err));
  }

  // get comment by ID from DB
  getCommentById(commentId, callback) {
    commentModel
      .findById(commentId)
      .then(comment => callback(null, comment))
      .catch(err => callback(err));
  }

  // get all comments from DB
  getAllComments(callback) {
    commentModel
      .find({})
      .then(comment => callback(null, comment))
      .catch(err => callback(err));
  }
}

module.exports = CommentController;
