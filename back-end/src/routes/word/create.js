// required modules
const express = require("express");
const router = express.Router();
const WordController = require("../../controllers/wordController");
const ResponseObject = require("../../models/response");

const wordController = new WordController();

// POST route for inserting data
router.post("/", function(req, res) {
  if (req.body.userId && req.body.data) {
    let wordData = {
      userId: req.body.userId,
      data: req.body.data,
      description: req.body.description,
      state: req.body.state,
      bestSuggestion: req.body.bestSuggestion,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      activeState: req.body.activeState,
      createdDate: req.body.createdDate
    };

    // insert the word to system
    wordController.insertWord(wordData, (err, word) => {
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
