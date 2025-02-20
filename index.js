import spinners from './spinners.json' with {type: 'json'};

// 添加新的 spinner
const allSpinners = {
	...spinners,
	dots2: {
		interval: 80,
		frames: ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']
	}
};

export default allSpinners;

const spinnersList = Object.keys(allSpinners);

export function randomSpinner() {
	const randomIndex = Math.floor(Math.random() * spinnersList.length);
	const spinnerName = spinnersList[randomIndex];
	return allSpinners[spinnerName];
}
