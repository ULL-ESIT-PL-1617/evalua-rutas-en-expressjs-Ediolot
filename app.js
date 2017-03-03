var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);   // GET
  console.log('Request Path:', req.path);     // /
  console.log('Request Host:', req.hostname); // localhost
  console.log('Request IP:', req.ip);         // 127.0.0.1
  console.log('Request cookies:', req.cookies); // { request_method: 'GET', ...
  console.log('req.params.id: '+(req.params.id)); // req.params.id: casiano
  next();
});

app.get('/user/:id?', function (req, res, next) {
  console.log(req.params);
  var username = req.params.id || 'unknown';
  res.render('user.ejs', {user: username});
});

module.exports = app;
/*
var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)

});*/
