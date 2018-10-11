var express = require('express');
const Weird = require('./weird.js');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

let weird = new Weird();
weird.weirdStuff();


//app.listen(3000);

