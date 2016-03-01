/**
 * Created by Sergei_Sergienko on 3/1/2016.
 */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/'));
});

//Watch task
gulp.task('watch-styles',function() {
    gulp.watch('src/**/*.scss', ['styles']);
    gulp.watch('src/*.scss', ['styles']);
});

gulp.task('default', ['watch-styles']);