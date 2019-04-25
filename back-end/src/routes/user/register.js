// required modules
const express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/authController");
const ResponseObject = require("../../models/response");

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
        return res.json(new ResponseObject("unsuccess", null, err.errmsg));
      } else {
        return res.json(new ResponseObject("success", user._id, null));
      }
    });
  } else {
    return res.json(
      new ResponseObject("unsuccess", null, "All fields have to be filled out")
    );
  }
});

module.exports = router;
