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
    userModel.findOne({ email: userData.email, state: "active" }, (err, user) => {
      if (err) {
        callback(err);
      } else if (!user) {
        callback({ errmsg: "No user exist" });
      } else {
        if (bcrypt.compareSync(userData.password, user.password)) {
          const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: config.expiringDuration
          });
          callback(null, { user: user, token: token });
        } else {
          callback({ errmsg: "Invalid email/password" });
        }
      }
    });
  }

  // delete user by ID from DB //
  deleteUserById(userId, callback) {
    userModel
      .findByIdAndDelete(userId)
      .then(user => callback(null, user))
      .catch(err => callback(err));
    // commentModel
    //   .deleteMany({ wordId: wordId })
    //   .then(comment => callback(null, comment))
    //   .catch(err => callback(err));

    // suggestionModel
    //   .deleteMany({ wordId: wordId })
    //   .then(suggestion => callback(null, suggestion))
    //   .catch(err => callback(err));
  }

  // get users using name parts from DB //rs
  getUserByPart(part, callback) {
    userModel
      .find({ username: new RegExp(part, "ig") })
      .then(user => callback(null, user))
      .catch(err => callback(err));
  }
}

module.exports = AuthController;
