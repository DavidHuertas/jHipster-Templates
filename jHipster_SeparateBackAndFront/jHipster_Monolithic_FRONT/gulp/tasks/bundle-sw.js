'use strict';

//Plugins
var gulp = require('gulp'),
    wbBuild = require('workbox-build');

//Utils

//Config
var config = require('../config');

//______________
//Tasks

gulp.task('bundle-sw', () => {
    return wbBuild.generateSW({
        globDirectory: config.dist,
        swDest: `${config.dist}/sw.js`,
        globPatterns: ['**\/*.{html,js,css,png,svg,jpg,gif,json}'],
    })
    .then(() => {
        console.log('Service worker generated.');
    })
    .catch((err) => {
        console.log('[ERROR] This happened: ' + err);
    });
})