var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongodb = require('mongodb').MongoClient;

module.exports = function() {
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    },
    function(username, password, done) {
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('users');
            collection.findOne({
                username: username
            },
            function (err, results) {
                if (results.password === password) {
                    var user = results;
                    done(null, user);
                } else {
                    done(null, false, {message: 'Bad Password'});
                }
            });
        });
        // TODO: add the bcrypt and crypto stuff to this for password hashing

        // This is where we would check the DB for username and password
        // var user = {
        //     userName: username,
        //     password: password
        // };
        //
        // done(null, user);
    }));
};