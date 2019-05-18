// This is a sample file which used for development. Should be changed as necessary.

// required modules
var express = require("express");
var router = express.Router();
var User = require("../../models/user");

//POST route for logging
// router.get("/:username", function(req, res, next) {
//   User.findOne({ username: req.params.username }).exec(function(error, user) {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(user);
//     }
//   });
// });

//get a user details for testing user profile dashboard
router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if(err) {
      console.log(err);
    } 
    else {
      res.json(user);
    }
  });
});

module.exports = router;
