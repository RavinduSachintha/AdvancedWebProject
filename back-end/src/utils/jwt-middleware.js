const jwt = require("jsonwebtoken");
const config = require("../utils/config");

class JWT_Middleware {
  constructor() {}

  validateUser(req, res, next) {
    jwt.verify(req.headers["x-access-token"], config.secret, function(
      err,
      decoded
    ) {
      if (err) {
        res.json({ status: "error", message: err.message, data: null });
      } else {
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
  }
}

module.exports = JWT_Middleware;
