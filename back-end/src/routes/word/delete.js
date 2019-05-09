// required modules
const express = require("express");
const router = express.Router();
const WordController = require("../../controllers/wordController");
const ResponseObject = require("../../models/response");

const wordController = new WordController();

// DELETE route for deleting data
router.delete("/:wordId", function(req, res) {
  wordController.deleteWordById(req.params.wordId, (err, word) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", word, null));
    }
  });
});

module.exports = router;