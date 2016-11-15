'use strict';

var gulp = require('gulp');
var del = require('del');
var pump = require('pump');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var maps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var babel = require('gulp-babel');

gulp.task('del', function() {
    del(['dist']);
});

gulp.task('clean', ['del'], function() {
    return gulp.src('public/dist', { read: false }).pipe(clean())
});

gulp.task('concatAngular', function() {
    gulp.src([
            'public/js/ng/controllers/*.js',
            'public/js/ng/services/*.js',
            'public/js/ng/directives/*.js'
        ])
        // .pipe(maps.init())
        .pipe(concat('ng.js'))
        // .pipe(maps.write('./'))
        // .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('public/dist/js'));
});

gulp.task('uglifyAngular', ['concatAngular'], function() {
    gulp.src('public/dist/js/*.js')
        .pipe(uglify())
        .pipe(rename('ng.min.js'))
        .pipe(babel({
            presets: ['es2015'], //this fixed a shorthand javascript error
            compact: true
        }))
        .pipe(gulp.dest('public/dist/js/dist'));
});

gulp.task('compress', ['concatAngular'], function(cb) {
    pump([
            gulp.src('public/dist/js/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});

gulp.task('compileMinifySass', function() {
    gulp.src('public/sass/**/*.scss')
        .pipe(maps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        // .pipe(gulp.dest('dist'))
        .pipe(maps.write('../maps'))
        .pipe(gulp.dest('public/dist/css'))
});

gulp.task('watch', function() {
    console.log('START: GULP WATCH');
    // gulp.watch('public/sass/**/*', ['compileMinifySass']);
    // gulp.watch('public/js/ng/**/*', ['compress']);
    gulp.watch('public/**/*', ['default']);

});
gulp.task('serve', ['watch']);

gulp.task('build', ['clean'], function() {
    gulp.start('compress');
    gulp.start('compileMinifySass');

    // ,'public/img/**/*'
    // ,'public/dist/js/**/*', 'public/dist/js/ng.js'
});

gulp.task('default', ['build'], function() {
    return gulp.src(['public/views/**/*'], { base: './' })
        .pipe(gulp.dest('dist'));
    // gulp.start('build')
});