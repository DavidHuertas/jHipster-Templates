'use strict';

//Plugins
var gulp = require('gulp'),
	runSequence = require('run-sequence');

//Utils

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('install', function () {
    runSequence(['inject:dep', 'ngconstant:dev'], 'sass', 'copy:languages', 'inject:app', 'inject:troubleshoot');
})