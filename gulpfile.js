var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    prefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

gulp.task('lessVendors', function () {
    gulp.src('./src/less/vendor.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'))
        .pipe(reload({stream: true}));
});

gulp.task('lessApp', function () {
    gulp.src('./src/less/main/*.less')
        .pipe(less())
        .pipe(prefixer({
            browsers: ["last 15 versions", "> 1%", "ie 8"],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist'))
        .pipe(reload({stream: true}));
});

gulp.task('scriptsVendor', function() {
    gulp.src('./node_modules/angular/angular.min.js')
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(reload({stream: true}));
});

gulp.task('scriptsApp', function() {
    gulp.src([
            './src/js/data.js',
            './src/js/main.js',
        ])
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./dist'))
        .pipe(reload({stream: true}));
});

gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(reload({stream: true}));
});

gulp.task('watch', function(){
    gulp.watch('./src/less/**/*.less', ['lessVendors', 'lessApp']);
    gulp.watch('./src/js/*.js', ['scriptsApp']);
    gulp.watch('./src/less/vendor.less', ['html']);
});

var config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "angular_bg"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', ['lessVendors', 'lessApp', 'scriptsVendor', 'scriptsApp', 'html', 'watch', 'webserver']);