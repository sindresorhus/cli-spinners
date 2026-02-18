import {readFileSync} from 'node:fs';

const spinners = JSON.parse(
	readFileSync(new URL('./spinners.json', import.meta.url), 'utf8')
);

export default spinners;

const spinnersList = Object.keys(spinners);

export function randomSpinner() {
	const randomIndex = Math.floor(Math.random() * spinnersList.length);
	const spinnerName = spinnersList[randomIndex];
	return spinners[spinnerName];
}
