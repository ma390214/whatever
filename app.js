/*jshint laxcomma: true, asi: true */

var express = require('express')
  , app = express.createServer()
  , port = 9000;


app.configure(function () {
  // set public folder
  app.use(express.static(__dirname + '/public'));
});

app.listen(port);
console.log("Server Running on " + port);