var express = require('express');
var router = express.Router();

router.use('/:id', function (req, res, next) {
  console.log('Request Type:', req.method);   // GET
  console.log('Request Path:', req.path);     // /
  console.log('Request Host:', req.hostname); // localhost
  console.log('Request IP:', req.ip);         // 127.0.0.1
  console.log('Request cookies:', req.cookies); // { request_method: 'GET', ...
  console.log('req.params.id: '+(req.params.id)); // req.params.id: casiano
  next();
});

router.get('/:id?', function (req, res, next) {
  console.log(req.params);
  var username = req.params.id || 'unknown';
  res.render('user.ejs', {user: username});
});

module.exports = router;
