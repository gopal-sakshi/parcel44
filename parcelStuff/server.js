var port = 12000;
var url = "http://localhost:" + 9980;

var express = require("express");
var app = express();

var interface23 = require("./interface23");
interface23(url, app);

console.log("listening on " + url);
app.listen(port);
