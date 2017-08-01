var express = require('express');
var app = express();
var Twig = require('twig');

app.set('views', './views');
app.set('view engine', 'twig');
app.use('/static', express.static('public'));
 
app.get('/', function (req, res) {
  // The second argument is basically the same options 
  // object like above. Most of the time you will be passing 
  // context data that will be available in the template. 
  res.render('index', {
    'message':'AAAAAAAAAAAAAAA'
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});