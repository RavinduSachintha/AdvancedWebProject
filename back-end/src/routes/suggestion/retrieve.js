// required modules
const express = require("express");
const router = express.Router();
const SuggestionController = require("../../controllers/suggestionController");
const ResponseObject = require("../../models/response");

const suggestionController = new SuggestionController();

router.get("/all", function(req, res) {
  suggestionController.getAllSuggestions((err, suggestion) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", suggestion, null));
    }
  });
});

//get routes to retrieve all suggestions include an adding part 
router.get("/suggestionPart/:part", function(req, res) {
  suggestionController.getSuggestionsByPart(req.params.part,(err, suggestion) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", suggestion, null));
    }
  });
});

// GET routes for getting data
router.get("/:suggestionId", function(req, res) {
  suggestionController.getSuggestionById(
    req.params.suggestionId,
    (err, suggestion) => {
      if (err) {
        res.json(new ResponseObject("unsuccess", null, err));
      } else {
        res.json(new ResponseObject("success", suggestion, null));
      }
    }
  );
});

router.get("/userid/:id", function(req, res) {
  suggestionController.getAllSuggestionsByUserId(req.params.id, (err, suggestion) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", suggestion, null));
    }
  });
});

module.exports = router;
