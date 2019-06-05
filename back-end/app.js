// required modules
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const JWT_Middleware = require("./src/utils/jwt-middleware");

const jwt_middleware = new JWT_Middleware();

// express app initialization
const app = express();

app.use(logger("dev"));

app.use(cors());

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
const profileRouter = require("./src/routes/user/profile");

const userRegisterRouter = require("./src/routes/user/register");
const userLoginRouter = require("./src/routes/user/login");
const userRetrieveRouter = require("./src/routes/user/retrieve");
const userCountRouter = require("./src/routes/user/count");

const wordCreateRouter = require("./src/routes/word/create");
const wordDeleteRouter = require("./src/routes/word/delete");
const wordRetrieveRouter = require("./src/routes/word/retrieve");
const wordUpdateRouter = require("./src/routes/word/update");
const wordCountRouter = require("./src/routes/word/count");

const suggestionCreateRouter = require("./src/routes/suggestion/create");
const suggestionDeleteRouter = require("./src/routes/suggestion/delete");
const suggestionRetrieveRouter = require("./src/routes/suggestion/retrieve");
const suggestionUpdateRouter = require("./src/routes/suggestion/update");
const suggestionCountRouter = require("./src/routes/suggestion/count");

const commentCreateRouter = require("./src/routes/comment/create");
const commentDeleteRouter = require("./src/routes/comment/delete");
const commentRetrieveRouter = require("./src/routes/comment/retrieve");
const commentUpdateRouter = require("./src/routes/comment/update");
const commentCountRouter = require("./src/routes/comment/count");

// application routings

// app.use("/user/register", registerRouter);
// app.use("/user/login", loginRouter);
app.use("/user/profile", jwt_middleware.validateUser,profileRouter);
// app.use("/user/profile", profileRouter);

app.use("/user/register", userRegisterRouter);
app.use("/user/login", userLoginRouter);
app.use("/user/retrieve", jwt_middleware.validateUser, userRetrieveRouter);
app.use("/user/count", jwt_middleware.validateAdminUser, userCountRouter);

app.use("/word/create", jwt_middleware.validateUser, wordCreateRouter);
app.use("/word/delete", jwt_middleware.validateUser, wordDeleteRouter);
app.use("/word/retrieve", wordRetrieveRouter);
app.use("/word/update", jwt_middleware.validateUser, wordUpdateRouter);
app.use("/word/count", jwt_middleware.validateAdminUser, wordCountRouter);

app.use(
  "/suggestion/create",
  jwt_middleware.validateUser,
  suggestionCreateRouter
);
app.use(
  "/suggestion/delete",
  jwt_middleware.validateUser,
  suggestionDeleteRouter
);
app.use("/suggestion/retrieve", suggestionRetrieveRouter);
app.use(
  "/suggestion/update",
  jwt_middleware.validateUser,
  suggestionUpdateRouter
);
app.use(
  "/suggestion/count",
  jwt_middleware.validateAdminUser,
  suggestionCountRouter
);

app.use("/comment/create", jwt_middleware.validateUser, commentCreateRouter);
app.use("/comment/delete", jwt_middleware.validateUser, commentDeleteRouter);
app.use(
  "/comment/retrieve",
  jwt_middleware.validateUser,
  commentRetrieveRouter
);
app.use("/comment/update", jwt_middleware.validateUser, commentUpdateRouter);
app.use("/comment/count", jwt_middleware.validateAdminUser, commentCountRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
