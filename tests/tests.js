/**
 * Created by robert on 2016-09-28.
 */

// var should   = require("should");
// var app      = require("../server");
// var mongoose = require("mongoose");
// var User     = mongoose.model("User");
// var request  = require("supertest");
// var agent = request.agent(app)
//
// describe('User', function () {
//     before(function(done) {
//         user = new User({
//             email    : "user@user.com",
//             firstName: "Full Name",
//             lastName : "Last Name",
//             password : "pass11"
//         });-
//         user.save(done)
//     });
//     describe('Login test', function () {
//         it('should redirect to /', function (done) {
//             agent
//                 .post('/users/session')
//                 .field('email', 'user@user.com')
//                 .field('password', 'pass11')
//                 .expect('Location','/')
//                 .end(done)
//         })
//
//         after(function(done) {
//             User.remove().exec();
//             return done();
//         });
//
//     })
// })




// describe('DOM tests - Signup form', function() {
//     var formElem = document.forms[0];
//     var signupButton = document.getElementById('signup-button');
//
//     it('Form exists in the DOM', function() {
//         expect(formElem).to.not.equal(null);
//     });
//
//     it('Input field should be set to type email', function() {
//         expect(formElem.email.getAttribute('type')).to.equal('email');
//     });
//
//     it('Signup button has the right text', function() {
//         expect(signupButton.innerHTML).to.equal('Signup');
//     });
// });