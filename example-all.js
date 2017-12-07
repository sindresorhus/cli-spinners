'use strict';
const readline = require('readline');
const logUpdate = require('log-update');
const cliSpinners = require('.');

const spinners = Object.keys(cliSpinners);
let frame = 0;
let spinner = 0;
let next;
let scrutator;

readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
	if(key.sequence === '\u0003') {
		process.exit();
	}

	if(key.sequence === '\r') {
		if (scrutator) {
			clearTimeout(scrutator);
			showNextSpinner();
		}
	}
});

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
		scrutator = setTimeout(showNextSpinner, Math.max(s.interval * s.frames.length, 1000));
	} else {
		process.exit();
	}
};

console.log(spinners.length + ' spinners\n');
showNextSpinner();
