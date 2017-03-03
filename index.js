var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('<img src="cat.jpg"></img>');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
