var express = require('express');
var app = express();
var output=require("./user.json")
app.get('/', function (req, res) {
    res.end('Welcome to Home page');
});
app.get('/user', function (req, res) {
    res.send(output);
});
app.listen(3000, function () {
    console.log(' listening on port 3000.');
});

