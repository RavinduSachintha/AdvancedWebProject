// required modules
const express = require("express");
const router = express.Router();
const SuggestionController = require("../../controllers/suggestionController");
const ResponseObject = require("../../models/response");

const suggestionController = new SuggestionController();

// DELETE route for deleting data
router.delete("/:suggestionId", function(req, res) {
  suggestionController.deleteSuggestionById(
    req.params.suggestionId,
    (err, suggestion) => {
      if (err || suggestion == null) {
        res.json(new ResponseObject("unsuccess", null, err));
      } else {
        res.json(new ResponseObject("success", suggestion, null));
      }
    }
  );
});

module.exports = router;
