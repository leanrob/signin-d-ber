var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
// var exec = require('child_process').exec;

var jsFiles = ['*.js', 'src/**/*/js'];

// Gulp task for JSHint and JSCS
// Coding style and linting
gulp.task('style', function() {
    return gulp.src(jsFiles)
       .pipe(jshint())
       .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
       .pipe(jscs());
});

// Code injection
gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});
    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});
// Can be uncommented to add mongoDB automation in the future
// Start a mongo server with a child-process
// gulp.task('mongo', function() {
//     exec('mongod', function (err, stdout, stderr) {
//         console.log(stdout);
//         console.log(stderr);
//     });
// });

// Serve sets up the server in port 1337
// It first runs style and inject first
// <gulp serve> to start application
gulp.task('serve', ['style', 'inject'], function() {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 1337
        },
        watch: jsFiles
    };
    return nodemon(options)
        .on('restart', function(ev) {
            console.log('Restarting.....');
        });
});