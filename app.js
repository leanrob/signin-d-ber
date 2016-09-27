/**
 * Created by robert on 2016-09-27.
 */

var express = require('express');

var app = express();

var port = 1337;

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});
