// required modules
const express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/authController");
const ResponseObject = require("../../models/response");

const authController = new AuthController();

// POST route for inserting data
router.post("/", function(req, res) {
  if (
    req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.usertype
  ) {
    let userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      usertype: req.body.usertype,
      userLevel: req.body.userLevel,
      votedWordCount: req.body.votedWordCount,
      suggestedWordCount: req.body.suggestedWordCount,
      joinedDate: req.body.joinedDate,
      state: req.body.state
    };

    // register the user in system
    authController.registerUser(userData, (err, user) => {
      if (err) {
        res.json(new ResponseObject("unsuccess", null, err.errmsg));
      } else {
        res.json(new ResponseObject("success", user._id, null));
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
