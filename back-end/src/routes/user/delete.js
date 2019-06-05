// required modules
const express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/authController");
const ResponseObject = require("../../models/response");

const authController = new AuthController();

// DELETE route for deleting data
router.delete("/:userId", function(req, res) {
  authController.deleteUserById(req.params.userId, (err, user) => {
    if (err || user == null) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", user, null));
    }
  });
});

module.exports = router;
