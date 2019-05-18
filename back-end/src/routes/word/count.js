// required modules
const express = require("express");
const router = express.Router();
const wordModel = require("../../models/word");
const ResponseObject = require("../../models/response");

// GET route for getting count of all the words
router.get("/all", function(req, res) {
  wordModel.count({}, (err, count) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", count, null));
    }
  });
});

module.exports = router;
