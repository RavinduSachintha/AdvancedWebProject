// This is a sample file which used for development. Should be changed as necessary.

// required modules
var express = require("express");
var router = express.Router();
var User = require("../../models/user");
var ResponseObject = require("../../models/response");
const bcrypt = require("bcrypt");

//get a user details by username
// router.get("/:username", function(req, res, next) {
//   User.findOne({ username: req.params.username }).exec(function(error, user) {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(user);
//     }
//   });
// });

//get a user details  by id
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

router.post("/editdetails/:id", (req, res) => {
  User.findOne({username: req.body.username}, (err, usr) => {
    if(!usr) {
      User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
        if(err) {
          res.json(new ResponseObject("unsuccess", null, err));
        }
        else {
          res.json(new ResponseObject("success", user, null));
        }
      });
    }
    if(usr) {
      res.json(new ResponseObject("Username already exists. Try another", null, null));
    }
    if(err) {
      res.json(new ResponseObject("unsuccess", null, err));
    }
  });
  
});

router.post("/changepassword/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if(err) {
      res.json(new ResponseObject("User not found", null, err));
    }
    else {
      if(bcrypt.compareSync(req.body.currentpwd, user.password)) {
        user.password = req.body.newpwd;
        user.save().then(user => {
          res.json(new ResponseObject("success", user, null));
        }).catch(err => {
          res.json(new ResponseObject(`"Unsuccess"`, null, err));
        });
      }
      else {
        res.json(new ResponseObject("Current password is incorrect", null, err));
      }
    }
  });
});

router.put("/deactivate/:id", function(req, res) {
  if (req.body.state) {

    let user = {
      state : req.body.state
    };

    User.findByIdAndUpdate(req.params.id, user, (err, user)=> {
      if(err) {
        res.json(new ResponseObject("unsuccess", null, err));
      }
      else {
        res.json(new ResponseObject("success", user, null));
      }
    });

    // // update the suggestion to system
    // suggestionController.updateSuggestion(req.body.suggestionId, suggestionData, (err, suggestion) => {
    //     if (err) {
    //       res.json(new ResponseObject("unsuccess", null, err.errmsg));
    //     } else {
    //       res.json(new ResponseObject("success", suggestion, null));
    //     }
    //   }
    // );

  } else {
    res.json( new ResponseObject("unsuccess", null, "Required fields have to be filled out"));
  }

});

  

module.exports = router;
