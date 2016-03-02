/**
 * Created by Sergei_Sergienko on 3/1/2016.
 */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    minifyJS = require('gulp-minify'),
    resolveDependencies = require('gulp-resolve-dependencies'),
    karmaServer = require('karma').Server,
    productionDir = 'prod/',
    developmentDir = 'dev/';

/* dialing with tests */
gulp.task('dev-tests', function (done) {
    return new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, done).start();
});

/* dialing with styles */
gulp.task('dev-styles', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./' + developmentDir));
});
gulp.task('prod-styles', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('./' + productionDir));
});
gulp.task('watch-styles',function() {
    gulp.watch('src/**/*.scss', ['dev-styles', 'prod-styles']);
});

/* dialing with javascript */
gulp.task('dev-js', function() {
    gulp.src('src/**/*.js')
        .pipe(gulp.dest('./' + developmentDir));
});
gulp.task('prod-js', function() {
    gulp.src('src/**/*.js')
        .pipe(resolveDependencies({
            pattern: /\* @requires [\s-]*(.*\.js)/g
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./' + productionDir));
    gulp.src(productionDir + '/all.js')
        .pipe(minifyJS({
            exclude: [],
            ignoreFiles: []
        }))

});
gulp.task('watch-js',function() {
    gulp.watch('src/**/*.js', ['dev-js', 'prod-js']);
});

/* dialing with html */
gulp.task('templates', function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('./' + developmentDir))
        .pipe(gulp.dest('./' + productionDir));
});
gulp.task('watch-templates',function() {
    gulp.watch('src/**/*.html', ['templates']);
});

gulp.task('default', ['watch-styles', 'watch-js', 'watch-templates', 'dev-tests']);