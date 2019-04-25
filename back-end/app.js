// required modules
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// express app initialization
const app = express();

app.use(logger("dev"));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

// serve static files from template
app.use(express.static(path.join(__dirname, "public")));

/* Add headers */
app.use(function(req, res, next) {
  // Website that wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods that wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers that wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Pass to next layer of middleware
  next();
});

// required routers
const registerRouter = require("./src/routes/user/register");
// const loginRouter = require("./src/routes/login");
// const logoutRouter = require("./src/routes/logout");
// const profileRouter = require("./src/routes/profile");

// application routings
app.use("/user/register", registerRouter);
// app.use("/user/login", loginRouter);
// app.use("/user/logout", logoutRouter);
// app.use("/user/profile", profileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error("File Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
