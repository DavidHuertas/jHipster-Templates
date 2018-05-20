'use strict';

//Plugins
var gulp = require('gulp'),
	KarmaServer = require('karma').Server;

//Utils

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('test', ['inject:test', 'ngconstant:dev'], function (done) {
    new KarmaServer({
        configFile: __dirname + '/' + config.test + 'karma.conf.js',
        singleRun: true
    }, done).start();
})