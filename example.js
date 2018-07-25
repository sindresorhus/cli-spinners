'use strict';
const logUpdate = require('log-update');
const cliSpinners = require('.');

const spinner = cliSpinners[process.argv[2] || 'dots'];
let i = 0;

setInterval(() => {
	const {frames} = spinner;
	logUpdate(frames[i = ++i % frames.length] + ' Unicorns');
}, spinner.interval);

// $ node example.js nameOfSpinner
