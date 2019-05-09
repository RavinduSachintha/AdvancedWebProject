const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const userModel = require("../models/user");
const ResponseObject = require("../models/response");

class JWT_Middleware {
  constructor() {}

  validateUser(req, res, next) {
    jwt.verify(req.headers["x-access-token"], config.secret, function(
      err,
      decoded
    ) {
      if (err) {
        res.json(new ResponseObject("unsuccess", null, err.message));
      } else {
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
  }

  validateAdminUser(req, res, next) {
    jwt.verify(req.headers["x-access-token"], config.secret, function(
      err,
      decoded
    ) {
      if (err) {
        res.json(new ResponseObject("unsuccess", null, err.message));
      } else {
        userModel.findOne(
          { _id: decoded.id, usertype: "admin" },
          (err, user) => {
            if (err || user == null) {
              res.json(new ResponseObject("unsuccess", null, err));
            } else {
              // add user id to request
              req.body.userId = user._id;
              next();
            }
          }
        );
      }
    });
  }
}

module.exports = JWT_Middleware;
