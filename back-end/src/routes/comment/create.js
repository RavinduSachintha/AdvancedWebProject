// required modules
const express = require("express");
const router = express.Router();
const CommentController = require("../../controllers/commentController");
const ResponseObject = require("../../models/response");

const commentController = new CommentController();

// POST route for inserting data
router.post("/", function(req, res) {
  if (req.body.userId && req.body.wordId && req.body.data) {
    let commentData = {
      userId: req.body.userId,
      wordId: req.body.wordId,
      suggestionId: req.body.suggestionId,
      data: req.body.data,
      likesCount: req.body.likesCount,
      createdDate: req.body.createdDate
    };

    // insert the comment to system
    commentController.insertComment(commentData, (err, comment) => {
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
