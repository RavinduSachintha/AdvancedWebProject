const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    userModel.authenticate(userData.email, userData.password, (err, user) => {
      if (err || !user) {
        var err = new Error("Wrong email or password.");
        err.status = 401;
        callback(err);
      } else {
        callback(null, user);
      }
    });
  }
}

module.exports = AuthController;
