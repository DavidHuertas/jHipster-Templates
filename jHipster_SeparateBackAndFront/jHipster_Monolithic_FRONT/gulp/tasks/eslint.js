'use strict';

//Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    eslint = require('gulp-eslint'),
    gulpIf = require('gulp-if');

//Utils
var handleErrorsUtils = require('../utils/handleErrorsUtils'),
    otherUtils = require('../utils/otherUtils');

//Config
var config = require('../config');

//______________
//Tasks

// check app for eslint errors
gulp.task('eslint', function () {
    return gulp.src(['gulpfile.js', config.app + 'app/**/*.js'])
        .pipe(plumber({errorHandler: handleErrorsUtils}))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

// check app for eslint errors and fix some of them
gulp.task('eslint:fix', function () {
    return gulp.src(config.app + 'app/**/*.js')
        .pipe(plumber({errorHandler: handleErrorsUtils}))
        .pipe(eslint({
            fix: true
        }))
        .pipe(eslint.format())
        .pipe(gulpIf(otherUtils.isLintFixed, gulp.dest(config.app + 'app')));
})