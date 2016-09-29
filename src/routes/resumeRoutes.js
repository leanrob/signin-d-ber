/**
 * Created by robert on 2016-09-27.
 */
var express = require('express');

var eventGroupRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

var router = function (nav) {
    var eventsController = require('../controllers/resumeController')(null, nav);
    // Check to see if signed in first
    eventGroupRouter.use(eventsController.middleware);
    eventGroupRouter.route('/')
        .get(eventsController.getIndex);
    return eventGroupRouter;
};

module.exports = router;