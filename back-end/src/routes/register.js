// required modules
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");
const ResponseObject = require("../models/response");

const authController = new AuthController();

// POST route for inserting data
router.post("/", function(req, res, next) {
  if (req.body.email && req.body.username && req.body.password) {
    let userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    };

    // register the user in system
    authController.registerUser(userData, (err, user) => {
      if (err) {
        return next(err);
      } else {
        res.json(new ResponseObject("sucess", user._id, null));
      }
    });
  } else {
    var err = new Error("All fields have to be filled out");
    err.status = 400;
    return next(err);
  }
});

module.exports = router;
