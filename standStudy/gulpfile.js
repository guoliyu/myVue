var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        root: './',
        host: '0.0.0.0',
        livereload: true,
        port: 2333
    })
});
gulp.task('default', ['connect'])