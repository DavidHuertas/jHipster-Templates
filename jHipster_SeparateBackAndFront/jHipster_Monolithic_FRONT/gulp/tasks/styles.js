'use strict';

//Plugins
var gulp = require('gulp'),
    browserSync = require('browser-sync');

//Utils

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('styles', ['sass'], function () {
    return gulp.src(config.app + 'content/css')
        .pipe(browserSync.reload({stream: true}));
})