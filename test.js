import test from 'ava';
import cliSpinners from '.';

function mockMathRandom(fixedResult) {
	unMockMathRandom();
	const originalImplementation = Math.random;
	Math.random = () => fixedResult;
	Math.random.originalImplementation = originalImplementation;
}

function unMockMathRandom() {
	if (Math.random.originalImplementation) {
		Math.random = Math.random.originalImplementation;
	}
}

console.log('Spinner count:', Object.keys(cliSpinners).length);

test('main', t => {
	t.is(typeof cliSpinners, 'object');
	t.is(cliSpinners.dots.interval, 80);
	t.true(Array.isArray(cliSpinners.dots.frames));
});

test('random getter', t => {
	const spinnersList = Object.keys(cliSpinners)
		// TODO: Remove this filter when "module.exports.default = spinners" is removed from index.js.
		.filter(key => key !== 'default')
		.map(key => cliSpinners[key]);

	// Should always return an item from the spinners list.
	t.true(spinnersList.includes(cliSpinners.random));

	// Should return the first spinner when `Math.random()` is the minimum value.
	mockMathRandom(0);
	t.is(cliSpinners.random, spinnersList[0]);

	mockMathRandom(0.99);
	// Should return the last spinner when `Math.random()` is the maximum value.
	t.is(cliSpinners.random, spinnersList[spinnersList.length - 1]);

	unMockMathRandom();
});
