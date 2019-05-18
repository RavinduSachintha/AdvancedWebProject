// required modules
const express = require("express");
const router = express.Router();
const suggestionModel = require("../../models/suggestion");
const ResponseObject = require("../../models/response");

// GET route for getting count of all the suggestions
router.get("/all", function(req, res) {
  suggestionModel.count({}, (err, count) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", count, null));
    }
  });
});

module.exports = router;
