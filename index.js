import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);

const spinners = require('./spinners.json');

let spinnersList;

Object.defineProperty(spinners, 'random', {
	get() {
		if (spinnersList === undefined) {
			spinnersList = Object.keys(spinners);
		}

		const randomIndex = Math.floor(Math.random() * spinnersList.length);
		const spinnerName = spinnersList[randomIndex];
		return spinners[spinnerName];
	},
});

export default spinners;
