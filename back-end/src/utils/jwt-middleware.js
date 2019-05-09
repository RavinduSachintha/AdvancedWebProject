const jwt = require("jsonwebtoken");
const config = require("../utils/config");
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
}

module.exports = JWT_Middleware;
