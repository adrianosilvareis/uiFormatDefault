var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('clean', function () {
    return gulp.src('dist/')
            .pipe(clean());
});

gulp.task('jshint', function () {
    return gulp.src(['*.directive.js', '*.module.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
});

gulp.task('uglify', ['clean'], function () {
    return gulp.src(['*.module.js','*.directive.js'])
                .pipe(uglify({mangle: false}))
                .pipe(concat('uiFormart.min.js'))
            .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['clean', 'jshint', 'uglify']);
