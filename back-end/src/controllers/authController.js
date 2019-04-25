// required modules
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

class AuthController {
  constructor() {}

  // insert user data to DB
  registerUser(userData, callback) {
    userModel
      .create(userData)
      .then(user => callback(null, user))
      .catch(err => callback(err));
  }

  // login authentication for user
  loginUser(userData, callback) {
    userModel.findOne({ email: userData.email }, (err, user) => {
      if (err) {
        callback(err);
      } else if(!user) {
        callback({ errmsg: "No user exist" });
      } else {
        if (bcrypt.compareSync(userData.password, user.password)) {
          const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: "1h"
          });
          callback(null, { user: user, token: token });
        } else {
          callback({ errmsg: "Invalid email/password" });
        }
      }
    });
  }
}

module.exports = AuthController;
