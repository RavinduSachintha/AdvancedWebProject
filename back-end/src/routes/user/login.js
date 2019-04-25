// required modules
const express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/authController");
const ResponseObject = require("../../models/response");

const authController = new AuthController();

// POST route for logging
router.post("/", function(req, res) {
  if (req.body.email && req.body.password) {
    var userData = {
      email: req.body.email,
      password: req.body.password
    };

    // login the user
    authController.loginUser(userData, (err, data) => {
      if (err) {
        res.json(new ResponseObject("unsuccess", null, err.errmsg));
      } else {
        res.json(new ResponseObject("success", data, null));
      }
    });
  } else {
    res.json(
      new ResponseObject("unsuccess", null, "All fields have to be filled out")
    );
  }
});

module.exports = router;
