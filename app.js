var express = require('express');
var app = express();

app.get('/user/:name', function (req, res) {
  res.send(req.params.name);
});
// app.get('/', function (req, res) {
//   res.send('this is my first express app!!');
// });
//
// app.get('/pets/hamster', function (req, res) {
//   res.send('this is another response!');
// });
//
// app.get('/pets', function (req, res) {
//   res.send('this is the third response to a new GET request');
// });

app.listen(3000, function () {
  console.log('listening on port 3000');
});
