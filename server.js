//package and module requirements
var express = require('express');
var app = express();

//middleware
app.use(express.static('public'));
app.use(express.static('node_modules'));


app.listen(8000, function() {
  console.log("beer free project. Listening on 8000.")
});