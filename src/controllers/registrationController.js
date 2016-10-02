/**
 * Created by robert on 2016-10-02.
 */
var mongodb = require('mongodb');

var registrationController = function(eventService, nav) {
    var getIndex = function (req, res) {
        var url = 'mongodb://localhost:27017/duberApp';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection('resume');
            collection.find({}).toArray(function (err, results) {
                res.render('registrationView', {
                    title: 'register',
                    nav: nav,
                    resume: results
                });
            })
        });
    };
    return {
        getIndex: getIndex
}
};

module.exports = registrationController;