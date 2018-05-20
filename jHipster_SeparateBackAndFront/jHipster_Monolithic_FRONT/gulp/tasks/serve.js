'use strict';

//Plugins
var gulp = require('gulp');

//Utils
var serveUtils = require('../utils/serveUtils');

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('serve', ['install'], serveUtils)