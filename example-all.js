'use strict';
const logUpdate = require('log-update');
const cliSpinners = require('./');

const spinners = Object.keys(cliSpinners);
let frame = 0;
let spinner = 0;
let next;

const showNextFrame = () => {
	const frames = cliSpinners[spinners[spinner]].frames;
	logUpdate(frames[frame++ % frames.length] + ' ' + spinners[spinner]);
};

const showNextSpinner = () => {
	if (next) {
		clearInterval(next);
		spinner++;
	}

	if (spinner < spinners.length) {
		const s = cliSpinners[spinners[spinner]];
		next = setInterval(showNextFrame, s.interval);
		setTimeout(showNextSpinner, Math.max(s.interval * s.frames.length, 1000));
	}
};

console.log(spinners.length + ' spinners\n');
showNextSpinner();
