/**
 * Created by robert on 2016-09-27.
 */
var express = require('express');

var resumeRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

var router = function (nav) {
    var resumeController = require('../controllers/resumeController')(null, nav);
    // Check to see if signed in first
    resumeRouter.use(resumeController.middleware);
    resumeRouter.route('/')
        .get(resumeController.getIndex);
    return resumeRouter;
};

module.exports = router;