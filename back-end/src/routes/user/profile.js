// This is a sample file which used for development. Should be changed as necessary.

// required modules
var express = require("express");
var router = express.Router();
var User = require("../../models/user");
var ResponseObject = require("../../models/response");

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
// router.get("/:id", (req, res) => {
//   User.findById(req.params.id, (err, user) => {
//     if(err) {
//       console.log(err);
//     } 
//     else {
//       res.json(user);
//     }
//   });
// });

router.post("/editdetails/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (!user)
    res.json(new ResponseObject("unsuccess", null, "no user found"));
    else {
        user.name = req.body.name;
        user.username = req.body.username;
        user.birthday = req.body.birthday;
        user.profession = req.body.profession;

        user.save().then(user => {
          res.json(new ResponseObject("success", user, null));
        }).catch(err => {
          res.json(new ResponseObject("unsuccess", null, err));
        });
    }
});

  // let issue = new Issue(req.body);
  //   issue.save()
  //       .then(issue => {
  //           res.status(200).json({'issue': 'Added successfully'});
  //       })
  //       .catch(err => {
  //           res.status(400).send('Failed to create new record');
  //       });
  
});



module.exports = router;
