var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();

var port = process.env.PORT || 1337;

var nav = [{
    Link: '/resume',
    Text: 'Resume'
}];

// Requiring the created routes and passing them nav
var resumeRouter = require('./src/routes/resumeRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);
var registrationRouter = require('./src/routes/registrationRoutes')(nav);

/* Start Middleware */
// Node will check the public and src views directories before all else...
app.use(express.static('public'));
app.use(bodyParser.json()); // look for json passed in
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(session({
    secret: 'password',
    resave: true,
    saveUninitialized: true
}));

require('./src/config/passport')(app);

// Set views directory
app.set('views', 'src/views');

// Set view engine
app.set('view engine', 'ejs');

// Telling '/resume' that it uses registrationRouter
app.use('/resume', resumeRouter);
app.use('/Auth', authRouter);
app.use('/register', registrationRouter);

// Navigation setup
app.get('/', function(req, res) {
    res.render('index', {
        nav: [{
            Link: '/resume',
            Text: 'Resume'
        }]
    });
});

// Logout route
app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});