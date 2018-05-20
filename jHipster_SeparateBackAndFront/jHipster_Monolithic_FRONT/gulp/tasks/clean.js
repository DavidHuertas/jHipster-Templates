'use strict';

//Plugins
var gulp = require('gulp'),
    del = require('del');

//Utils

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('clean', function () {
    return del([config.dist], { dot: true });
})

/* CLEAN de ConsolaSIP

'use strict';

var gulp = require('gulp'),
    config = require('../config'),
	clean = require('gulp-clean');

gulp.task('clean', function() {
	return gulp.src('./' + config.appFolder, {read: false})
	.pipe(clean());
});

*/