'use strict';
var logUpdate = require('log-update');
var cliSpinners = require('./');
var spinners = Object.keys(cliSpinners);
var i = 0;
var j = 0;
var frames = [];

console.log(spinners.length + ' spinners\n');

setInterval(function () {
	if (++i === frames.length) {
		j++;
		i = 0;
	}

	frames = cliSpinners[spinners[j]].frames;
	logUpdate(frames[i] + ' ' + spinners[j]);
}, 100);

// $ node example.js
