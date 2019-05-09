// This is a sample file which used for development. Should be changed as necessary.

// required modules
const express = require("express");
const router = express.Router();
const userModel = require("../../models/user");
const ResponseObject = require("../../models/response");

// POST route for logging
router.get("/:username", function(req, res) {
  userModel.findOne({ username: req.params.username }, (err, user) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", user, null));
    }
  });
});

module.exports = router;
