// required modules
const express = require("express");
const router = express.Router();
const CommentController = require("../../controllers/commentController");
const ResponseObject = require("../../models/response");

const commentController = new CommentController();

// PUT route for updating data
router.put("/", function(req, res) {
  if (req.body.userId && req.body.wordId && req.body.commentId && req.body.data) {
    let commentData = {
      userId: req.body.userId,
      wordId: req.body.wordId,
      suggestionId: req.body.suggestionId,
      data: req.body.data,
      likesCount: req.body.likesCount,
      createdDate: req.body.createdDate
    };

    // update the comment to system
    commentController.updateComment(req.body.commentId, commentData, (err, comment) => {
      if (err) {
        res.json(new ResponseObject("unsuccess", null, err.errmsg));
      } else {
        res.json(new ResponseObject("success", comment, null));
      }
    });
  } else {
    res.json(
      new ResponseObject(
        "unsuccess",
        null,
        "Required fields have to be filled out"
      )
    );
  }
});

module.exports = router;
