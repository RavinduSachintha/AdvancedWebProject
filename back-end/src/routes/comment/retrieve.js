// required modules
const express = require("express");
const router = express.Router();
const CommentController = require("../../controllers/commentController");
const ResponseObject = require("../../models/response");

const commentController = new CommentController();

router.get("/all", function(req, res) {
  commentController.getAllComments((err, comment) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", comment, null));
    }
  });
});

// GET routes for getting data
router.get("/:commentId", function(req, res) {
  commentController.getCommentById(req.params.commentId, (err, comment) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", comment, null));
    }
  });
});

module.exports = router;
