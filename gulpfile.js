var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat');

gulp.task('less', function () {
    gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('scriptsVendor', function() {
    gulp.src('./node_modules/angular/angular.min.js')
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('scriptsApp', function() {
    gulp.src('./src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'));
});

//gulp.task('default', function() {
    // place code for your default task here
//});