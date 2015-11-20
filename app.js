var express = require('express');
var app = express();

app.get('/', function (req, res) {

  res.send('GET request to the homepage');

});

app.get('/api/beacon/state', function (req, res) {

  res.send('GET request to the homepage with parameters');

  var uuid = req.query.uuid;
  var timeIn = req.query.timein;
  var timeOut = req.query.timeout;

  console.log("uuid: " + uuid + ", TimeIn: " + timeIn + ", TimeOut: " + timeOut);

});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});