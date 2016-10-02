/**
 * Created by robert on 2016-10-02.
 */
var express = require('express');

var registrationRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

var router = function (nav) {
    var registrationController = require('../controllers/registrationController')(null, nav);
    // Check to see if signed in first
    // registrationRouter.use(registrationController.middleware);
    registrationRouter.route('/')
        .get(registrationController.getIndex);
    return registrationRouter;
};

module.exports = router;