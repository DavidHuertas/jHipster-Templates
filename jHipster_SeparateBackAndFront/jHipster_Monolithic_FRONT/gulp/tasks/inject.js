'use strict';

//Plugins
var gulp = require('gulp');

//Utils
var injectUtils = require('../utils/injectUtils');

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('inject', function() {
    runSequence('inject:dep', 'inject:app');
});

gulp.task('inject:dep', ['inject:test', 'inject:vendor']);

gulp.task('inject:app', injectUtils.app);

gulp.task('inject:vendor', injectUtils.vendor);

gulp.task('inject:test', injectUtils.test);

gulp.task('inject:troubleshoot', injectUtils.troubleshoot)