/**
 * Created by Sergei_Sergienko on 3/1/2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('src/**/*.scss', ['styles']);
});