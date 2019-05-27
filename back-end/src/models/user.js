// User model

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  usertype: {
    type: String,
    required: true
  },
  userLevel: {
    type: Number
  },
  votedWords: {
    type: Number
  },
  suggestedWords: {
    type: Number
  },
  joinedDate: {
    type: String
  },
  birthday: {
    type: String
  },
  votedWordCount: {
    type: Number
  },
  suggestedWordCount: {
    type: Number
  },
  joinedDate: {
    type: String
  },
  profession: {
    type: String
  },
  name: {
    type: String
  }
});

// hashing a password before saving it to the database
UserSchema.pre("save", function(next) {
  var user = this;
  bcrypt.hash(user.password, saltRounds, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model("User", UserSchema);
