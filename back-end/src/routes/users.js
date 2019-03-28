var express = require("express");
var router = express.Router();
var User = require("../schemas/user_schema");

/* GET users listing. */
router.post("/", function(req, res, next) {
  if (
    req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf
  ) {
    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    };

    //use schema.create to insert data into the db
    User.create(userData, function(err, user) {
      if (err) {
        return next(err);
      } else {
        return res.redirect("/profile");
      }
    });
  }
});

module.exports = router;
