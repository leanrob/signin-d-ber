var mongodb = require('mongodb');

var resumeController = function(eventService, nav) {
    var middleware = function(req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    };
    var getIndex = function (req, res) {
        var url = 'mongodb://localhost:27017/eventsApp';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection('events');
            collection.find({}).toArray(function (err, results) {
                res.render('resumeView', {
                    title: 'resume',
                    nav: nav,
                    resume: results
                });
            })
        });
    };
    return {
        getIndex: getIndex,
        middleware: middleware
    }
};

module.exports = resumeController;