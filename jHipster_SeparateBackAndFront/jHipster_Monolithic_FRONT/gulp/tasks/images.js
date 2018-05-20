'use strict';

//Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    rev = require('gulp-rev'),
    browserSync = require('browser-sync');

//Utils
var handleErrorsUtils = require('../utils/handleErrorsUtils');

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('images', function () {
    return gulp.src(config.app + 'content/images/**')
        .pipe(plumber({errorHandler: handleErrorsUtils}))
        .pipe(changed(config.dist + 'content/images'))
        .pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
        .pipe(rev())
        .pipe(gulp.dest(config.dist + 'content/images'))
        .pipe(rev.manifest(config.revManifest, {
            base: config.dist,
            merge: true
        }))
        .pipe(gulp.dest(config.dist))
        .pipe(browserSync.reload({stream: true}));
})