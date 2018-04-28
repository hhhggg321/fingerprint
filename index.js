var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.use(express.static('node_modules'));
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index2.html');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});