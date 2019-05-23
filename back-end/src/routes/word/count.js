// required modules
const express = require("express");
const router = express.Router();
const wordModel = require("../../models/word");
const ResponseObject = require("../../models/response");

// GET route for getting count of all the words
router.get("/all", function(req, res) {
  wordModel.count({}, (err, count) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", count, null));
    }
  });
});

// GET route for getting count of all the complete words
router.get("/all/complete", function(req, res) {
  wordModel.count({ state: "complete" }, (err, count) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", count, null));
    }
  });
});

// GET route for getting count of all the incomplete words
router.get("/all/incomplete", function(req, res) {
  wordModel.count({ state: "incomplete" }, (err, count) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", count, null));
    }
  });
});

// GET route for getting count of all the active words
router.get("/all/active", function(req, res) {
  wordModel.count({ activeState: "active" }, (err, count) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", count, null));
    }
  });
});

// GET route for getting count of all the inactive words
router.get("/all/inactive", function(req, res) {
  wordModel.count({ activeState: "inactive" }, (err, count) => {
    if (err) {
      res.json(new ResponseObject("unsuccess", null, err));
    } else {
      res.json(new ResponseObject("success", count, null));
    }
  });
});

module.exports = router;
