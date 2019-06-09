// required modules
const express = require("express");
const router = express.Router();
const SuggestionController = require("../../controllers/suggestionController");
const AuthController = require("../../controllers/authController");
const ResponseObject = require("../../models/response");

const suggestionController = new SuggestionController();
const authController = new AuthController();

// PUT route for updating data
router.put("/", function(req, res) {
  if (
    req.body.userId &&
    req.body.wordId &&
    req.body.suggestionId &&
    req.body.data
  ) {
    let suggestionData = {
      userId: req.body.userId,
      wordId: req.body.wordId,
      data: req.body.data,
      state: req.body.state,
      votesCount: req.body.votesCount,
      createdDate: req.body.createdDate
    };

    // update the suggestion to system
    suggestionController.updateSuggestion(
      req.body.suggestionId,
      suggestionData,
      (err, suggestion) => {
        if (err) {
          res.json(new ResponseObject("unsuccess", null, err.errmsg));
        } else {
          res.json(new ResponseObject("success", suggestion, null));
        }
      }
    );
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

// PUT route for voting
router.put("/vote/:action", function(req, res) {
  if (
    req.body.userId &&
    req.body.wordId &&
    req.body.suggestionId &&
    req.params.action
  ) {
    suggestionController.getSuggestionById(
      req.body.suggestionId,
      (err, suggestion) => {
        if (err || suggestion == null) {
          res.json(new ResponseObject("unsuccess", null, err));
        } else {
          authController.getUserById(req.body.userId, (err, user) => {
            if (err || user == null) {
              res.json(new ResponseObject("unsuccess", null, err));
            } else {
              if (req.params.action == "up") {
                let newCount = suggestion.votesCount + user.userLevel;
                let suggestionData = {
                  userId: req.body.userId,
                  wordId: req.body.wordId,
                  votesCount: newCount
                };

                // update the suggestion to system
                suggestionController.updateSuggestion(
                  req.body.suggestionId,
                  suggestionData,
                  (err, suggestion) => {
                    if (err || suggestion == null) {
                      res.json(
                        new ResponseObject("unsuccess", null, err.errmsg)
                      );
                    } else {
                      res.json(new ResponseObject("success", suggestion, null));
                    }
                  }
                );
              } else {
                let newCount = suggestion.votesCount - user.userLevel;
                let suggestionData = {
                  userId: req.body.userId,
                  wordId: req.body.wordId,
                  votesCount: newCount
                };

                // update the suggestion to system
                suggestionController.updateSuggestion(
                  req.body.suggestionId,
                  suggestionData,
                  (err, suggestion) => {
                    if (err || suggestion == null) {
                      res.json(
                        new ResponseObject("unsuccess", null, err.errmsg)
                      );
                    } else {
                      res.json(new ResponseObject("success", suggestion, null));
                    }
                  }
                );
              }
            }
          });
        }
      }
    );
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
