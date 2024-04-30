import process from 'node:process';
import logUpdate from 'log-update';
import cliSpinners from './index.js';

const spinner = cliSpinners[process.argv[2] ?? 'dots'];
let index = 0;

setInterval(() => {
	const {frames} = spinner;
	logUpdate(frames[index = ++index % frames.length] + ' Unicorns');
}, spinner.interval);

// $ node example.js nameOfSpinner
