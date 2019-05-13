// required modules
const express = require("express");
const router = express.Router();
const CommentController = require("../../controllers/commentController");
const ResponseObject = require("../../models/response");

const commentController = new CommentController();

// DELETE route for deleting data
router.delete("/:commentId", function(req, res) {
  commentController.deleteCommentById(req.params.commentId, (err, comment) => {
    if (err || comment == null) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", comment, null));
    }
  });
});

module.exports = router;
