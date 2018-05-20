'use strict';

//Plugins
var gulp = require('gulp'),
	runSequence = require('run-sequence');

//Utils

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('build', ['clean'], function (cb) {
    runSequence(['copy', 'inject:vendor', 'ngconstant:prod', 'copy:languages'], 'inject:app', 'inject:troubleshoot', 'assets:prod', 'bundle-sw');
})