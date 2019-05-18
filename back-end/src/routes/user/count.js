// required modules
const express = require("express");
const router = express.Router();
const userModel = require("../../models/user");
const ResponseObject = require("../../models/response");

// GET route for getting count of registered users
router.get("/reg-users", function(req, res) {
  userModel.count({ usertype: "normal" }, (err, count) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", count, null));
    }
  });
});

// GET route for getting count of registered users
router.get("/admins", function(req, res) {
  userModel.count(
    {
      $or: [{ usertype: "admin" }, { usertype: "super-admin" }]
    },
    (err, count) => {
      if (err) {
        res.json(new ResponseObject("unsuccess", null, err));
      } else {
        res.json(new ResponseObject("success", count, null));
      }
    }
  );
});

module.exports = router;
