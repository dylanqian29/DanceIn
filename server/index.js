var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/dist'));


// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
})



app.listen(3000, function() {
  console.log('listening on port 3000!');
});

