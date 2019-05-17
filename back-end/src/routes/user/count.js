// required modules
const express = require("express");
const router = express.Router();
const userModel = require("../../models/user");
const ResponseObject = require("../../models/response");

// GET route for getting count of registered users
router.get("/reg-user", function(req, res) {
  userModel.count({}, (err, count) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", count, null));
    }
  })
});

module.exports = router;
