// required modules
const express = require("express");
const router = express.Router();
const WordController = require("../../controllers/wordController");
const ResponseObject = require("../../models/response");

const wordController = new WordController();

//get routes to retrieve all words include an adding part //rs
router.get("/wordPart/:part", function(req, res) {
  wordController.getWordByPart(req.params.part,(err, word) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", word, null));
    }
  });
});

router.get("/all", function(req, res) {
  wordController.getAllWords((err, word) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", word, null));
    }
  });
});

// GET routes for getting data
router.get("/:wordId", function(req, res) {
  wordController.getWordById(req.params.wordId, (err, word) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", word, null));
    }
  });
});

module.exports = router;
