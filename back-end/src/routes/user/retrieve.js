// This is a sample file which used for development. Should be changed as necessary.

// required modules
const express = require("express");
const router = express.Router();
const userModel = require("../../models/user");
const AuthController = require("../../controllers/authController");
const ResponseObject = require("../../models/response");

const authController = new AuthController();

// POST route for getting profile details
router.get("/profile", function(req, res) {
  userModel.findOne({ _id: req.body.userId }, (err, user) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", user, null));
    }
  });
});

// POST route for getting profile details by user name
router.get("/profile/namePart/:part", function(req, res) {
  authController.getUserByPart(req.params.part, (err, user) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", user, null));
    }
  });
});

//get routes to retrieve all users include an adding part
router.get("/profile/namePart/:part", function(req, res) {
  wordController.getWordByPart(req.params.part, (err, word) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", word, null));
    }
  });
});

//Post route for getting all the user profiles
//Rashmi

router.get("/all", function(req, res) {
  userModel.find({}, (err, user) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", user, null));
    }
  });
});

module.exports = router;
