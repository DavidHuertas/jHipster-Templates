'use strict';

//Plugins
var gulp = require('gulp');

//Utils
var copyUtils = require('../utils/copyUtils');

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('copy', ['copy:i18n', 'copy:fonts', 'copy:common']);

gulp.task('copy:i18n', copyUtils.i18n);

gulp.task('copy:languages', copyUtils.languages);

gulp.task('copy:fonts', copyUtils.fonts);

gulp.task('copy:common', copyUtils.common);

gulp.task('copy:swagger', copyUtils.swagger);

gulp.task('copy:images', copyUtils.images)