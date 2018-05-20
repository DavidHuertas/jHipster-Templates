'use strict';

//Plugins
var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	templateCache = require('gulp-angular-templatecache');

//Utils

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('html', function () {
    return gulp.src(config.app + 'app/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(templateCache({
            module: 'jHipsterMonolithicApp',
            root: 'app/',
            moduleSystem: 'IIFE'
        }))
        .pipe(gulp.dest(config.tmp));
})