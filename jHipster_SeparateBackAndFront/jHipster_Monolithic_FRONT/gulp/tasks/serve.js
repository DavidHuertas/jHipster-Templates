'use strict';

//Plugins
var gulp = require('gulp');

//Utils
var serveDevUtils = require('../utils/serveDevUtils'),
	serveProdUtils = require('../utils/serveProdUtils');

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('serve:dev', ['install'], serveDevUtils);

gulp.task('serve:prod', ['install'], serveProdUtils)