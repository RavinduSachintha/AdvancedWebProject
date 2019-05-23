// required modules
const express = require("express");
const router = express.Router();
const WordController = require("../../controllers/wordController");
const ResponseObject = require("../../models/response");

const wordController = new WordController();

// PUT route for updating data
router.put("/", function(req, res) {
  if (req.body.userId && req.body.wordId && req.body.data) {
    let wordData = {
      userId: req.body.userId,
      data: req.body.data,
      state: req.body.state,
      description: req.body.description,
      bestSuggestion: req.body.bestSuggestion,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      activeState: req.body.activeState,
      createdDate: req.body.createdDate
    };

    // update the word to system
    wordController.updateWord(req.body.wordId, wordData, (err, word) => {
      if (err) {
        res.json(new ResponseObject("unsuccess", null, err.errmsg));
      } else {
        res.json(new ResponseObject("success", word, null));
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
