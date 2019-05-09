// required modules
const express = require("express");
const router = express.Router();
const SuggestionController = require("../../controllers/suggestionController");
const ResponseObject = require("../../models/response");

const suggestionController = new SuggestionController();

// POST route for inserting data
router.post("/", function(req, res) {
  if (req.body.userId && req.body.wordId && req.body.data) {
    let suggestionData = {
      userId: req.body.userId,
      wordId: req.body.wordId,
      data: req.body.data,
      state: req.body.state,
      votesCount: req.body.votesCount,
      createdDate: req.body.createdDate
    };

    // insert the suggestion to system
    suggestionController.insertSuggestion(suggestionData, (err, suggestion) => {
      if (err) {
        res.json(new ResponseObject("unsuccess", null, err.errmsg));
      } else {
        res.json(new ResponseObject("success", suggestion, null));
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
