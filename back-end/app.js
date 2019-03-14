var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// just for testing ---------------------
mongoose.connect('mongodb+srv://sachintha:sachintha22@cluster0-uwov5.mongodb.net/test?retryWrites=true')
    .then(() => {
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
          var kittySchema = new mongoose.Schema({
            name: String
          });
          var Kitten = mongoose.model('Kitten', kittySchema);
          var silence = new Kitten({name: 'Sillence'});
          console.log(silence.name);
        })
    })
    .catch((err) => console.error(err));
// ----------------------------

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
