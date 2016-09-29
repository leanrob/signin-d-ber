/**
 * Created by robert on 2016-09-27.
 */
var express = require('express');

var authRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

var passport = require('passport');

// TODO: Add parsing for emails instead of usernames

var router = function() {

    // Setting up Auth routes
    signUpRoute();
    signInRoute();
    profileRoute();

    return authRouter
};

// Sign Up Route connecting to mongoDB and creating a new user
// Routes to /resume when completed
var signUpRoute = function() {
    authRouter.route('/signUp')
        .post(function(req, res) {
            console.log(req.body);
            var url = 'mongodb://localhost:27017/eventsApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('users');
                // TODO: Change with full user when it is created
                var user = {
                    username: req.body.userName,
                    password: req.body.password
                };
                collection.insertOne(user, function (err, results) {
                    req.login(results.ops[0], function() {
                        res.redirect('/resume');
                    });
                });
            });
        });
};

// Sign In Route authenticates the inputs using PassportJS
// Routes to /resume when completed
var signInRoute = function() {
    authRouter.route('/signIn')
        .post(passport.authenticate('local', {
            failureRedirect: '/'
        }), function(req, res) {
            res.redirect('/resume');
        });
};

// Profile Route simply displays the profile of the logged in user
var profileRoute = function() {
    authRouter.route('/profile')
        .all(function (req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function(req, res) {
            res.json(req.user);
        });
};

module.exports = router;