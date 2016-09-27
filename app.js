/**
 * Created by robert on 2016-09-27.
 */

var express = require('express');

var app = express();

var port = 1337;

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/signup', function(req, res) {
    res.send('Sign Up Page');
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});
