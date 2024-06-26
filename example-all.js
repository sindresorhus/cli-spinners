import process from 'node:process';
import readline from 'node:readline';
import logUpdate from 'log-update';
import cliSpinners from './index.js';

const spinners = Object.keys(cliSpinners);
let frame = 0;
let spinner = 0;
let next;
let scrutator;

const showNextFrame = () => {
	const {frames} = cliSpinners[spinners[spinner]];
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
		// eslint-disable-next-line unicorn/no-process-exit
		process.exit(0);
	}
};

readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

process.stdin.on('keypress', (string_, key) => {
	if (key.ctrl && key.name === 'c') {
		// eslint-disable-next-line unicorn/no-process-exit
		process.exit(130);
	}

	if (key.name === 'return' && scrutator) {
		clearTimeout(scrutator);
		showNextSpinner();
	}
});

console.log(`${spinners.length} spinners\n`);
showNextSpinner();

// $ node example-all.js
// Press `Enter` to skip to the next spinner
