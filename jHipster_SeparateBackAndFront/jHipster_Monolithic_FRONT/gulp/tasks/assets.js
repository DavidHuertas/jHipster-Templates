'use strict';

//Plugins
var gulp = require('gulp');

//Utils
var buildUtils = require('../utils/buildUtils');

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('assets:prod', ['images', 'styles', 'html', 'copy:swagger', 'copy:images'], buildUtils)