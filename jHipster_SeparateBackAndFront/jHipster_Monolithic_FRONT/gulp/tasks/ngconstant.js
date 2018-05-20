'use strict';

//Plugins
var gulp = require('gulp'),
    ngConstant = require('gulp-ng-constant'),
    rename = require('gulp-rename');

//Utils
var otherUtils = require('../utils/otherUtils');
//Config
var config = require('../config');

//______________
//Tasks
gulp.task('ngconstant:dev', function () {
    return ngConstant({
        name: 'jHipsterMonolithicApp',
        constants: {
            VERSION: otherUtils.parseVersion(),
            DEBUG_INFO_ENABLED: true,
            BUILD_TIMESTAMP: ''
        },
        template: config.constantTemplate,
        stream: true
    })
    .pipe(rename('app.constants.js'))
    .pipe(gulp.dest(config.app + 'app/'));
});

gulp.task('ngconstant:prod', function () {
    return ngConstant({
        name: 'jHipsterMonolithicApp',
        constants: {
            VERSION: otherUtils.parseVersion(),
            DEBUG_INFO_ENABLED: false,
            BUILD_TIMESTAMP: new Date().getTime()
        },
        template: config.constantTemplate,
        stream: true
    })
    .pipe(rename('app.constants.js'))
    .pipe(gulp.dest(config.app + 'app/'));
})