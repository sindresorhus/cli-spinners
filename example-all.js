'use strict';
var logUpdate = require('log-update');
var cliSpinners = require('./');
var spinners = Object.keys(cliSpinners);
var frame = 0;
var spinner = 0;
var next;



var showNextFrame = function () {
	var frames = cliSpinners[spinners[spinner]].frames;
	logUpdate(frames[frame++ % frames.length] + ' ' + spinners[spinner]);
};

var showNextSpinner = function () {
	if (next) {
		clearInterval(next);
		spinner++
	}
	if (spinner in spinners) {
		var s = cliSpinners[spinners[spinner]];
		next = setInterval(showNextFrame, s.interval || 100);
		setTimeout(showNextSpinner, (s.interval || 100) * s.frames.length);
	}
};



console.log(spinners.length + ' spinners\n');
showNextSpinner()
