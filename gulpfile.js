'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');


gulp.task('clean', function() {
    return gulp.src('public/dist', {read: false}).pipe(clean());
});

// // Delete the dist directory
// gulp.task('clean', function() {
//     return gulp.src(bases.dist).pipe(clean());
// });


// A development task to run anytime a file changes
gulp.task('watch', function() {
    console.log('GULP WATCH');
    gulp.watch('public/**/*', ['default']);
});

gulp.task('concatAngular', function() {
    gulp.src([
      'public/js/ng/controllers/*.js',
      'public/js/ng/*services/*.js',
      'public/js/ng/directives/*.js'
    ])
    .pipe(concat('init.js'))
    .pipe(gulp.dest('public/dist/js/ng'));
});

gulp.task('uglifyAngular', ['concatAngular'], function() {
    gulp.src('public/dist/js/ng/init.js')
    .pipe(uglify())
    .pipe(rename('init.min.js'))
    .pipe(babel({
             presets: ['es2015'], //this fixed a shorthand javascript error
             compact: true
         }))
    .pipe(gulp.dest('public/dist/js/ng/dist'));
});

gulp.task('compileSass', function() {
    gulp.src('public/scss/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/dist/sass/'));
});

// Define the default task as a sequence of the above tasks
// gulp.task('default', ['clean', 'scripts', 'copy']);
// gulp.task('default', ['clean', 'scripts', 'imagemin', 'copy']);

gulp.task('default', ['clean'], function() {
    // gulp.start('paths');
    gulp.start('uglifyAngular');
    gulp.start('compileSass');
    // gulp.start('scripts');
    // gulp.start('imagemin');
    // gulp.start('copy');
    // gulp.start('sass');
    // gulp.start('watch');

    // gulp.start('compress');
    // gulp.start('watch');
});