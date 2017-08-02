var express = require('express');
var app = express();
var Twig = require('twig');

app.set('views', './views');
app.set('view engine', 'twig');
app.use('/static', express.static('public'));
 
app.get('/', function (req, res) {
  res.render('index', {
    'copyright':'EIBERTEK S.H.'
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});