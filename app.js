var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {

  res.send('GET request to the homepage');

});

app.get('/api/beacon/state', function (req, res) {

  var uuid = req.query.uuid;
  var timeIn = req.query.timein;
  var timeOut = req.query.timeout;

  console.log("uuid: " + uuid + ", TimeIn: " + timeIn + ", TimeOut: " + timeOut);
  res.send("uuid: " + uuid + ", TimeIn: " + timeIn + ", TimeOut: " + timeOut);

});


var server = app.listen(app.get('port'), function () {
  //var host = server.address().address;
  var port = server.address().port;

  //console.log('Example app listening at http://%s:%s', host, app.get('port'));
  console.log('Node app is running on port', app.get('port'));
});