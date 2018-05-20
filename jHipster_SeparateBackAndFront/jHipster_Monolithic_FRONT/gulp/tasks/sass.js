'use strict';

//Plugins
var gulp = require('gulp'),
    es = require('event-stream'),
    plumber = require('gulp-plumber'),
    expect = require('gulp-expect-file'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    flatten = require('gulp-flatten');

//Utils
var handleErrorsUtils = require('../utils/handleErrorsUtils');

//Config
    var config = require('../config');

//______________
//Tasks

gulp.task('sass', function () {
    return es.merge(
        gulp.src(config.sassSrc)
        .pipe(plumber({errorHandler: handleErrorsUtils}))
        .pipe(expect(config.sassSrc))
        .pipe(sass({includePaths:config.bower}).on('error', sass.logError))
        .pipe(gulp.dest(config.cssDir)),
        gulp.src(config.bower + '**/fonts/**/*.{woff,woff2,svg,ttf,eot,otf}')
        .pipe(plumber({errorHandler: handleErrorsUtils}))
        .pipe(changed(config.app + 'content/fonts'))
        .pipe(flatten())
        .pipe(gulp.dest(config.app + 'content/fonts'))
    );
})