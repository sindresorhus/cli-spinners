'use strict';
var logUpdate = require('log-update');
var cliSpinners = require('./');

var spinner = cliSpinners[process.argv[2] || 'dots'];
var i = 0;

setInterval(function () {
	var frames = spinner.frames;
	logUpdate(frames[i = ++i % frames.length] + ' Unicorns');
}, spinner.interval);

// $ node example.js nameOfSpinner
