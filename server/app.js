var express = require('express');
var app = express();
// var port = process.env.EXPRESS_PORT || 8080;
var fs = require('fs');
var path = require('path');

var staticAssetsPath = path.join(__dirname, '../client')
app.use('/', express.static(staticAssetsPath));

app.get('/', function(req, res){
  var relPathIndex = '../client/index.html';
  var absPathIndex = path.join(__dirname, relPathIndex);
  fs.readFile(absPathIndex, 'utf8', (err, data) => {
    res.send(data);
  });
});

app.listen(8080);
