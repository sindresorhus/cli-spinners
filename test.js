import test from 'ava';
import cliSpinners from '.';

function mockMathRandom(fixedResult) {
	unMockMathRandom();
	const originalImpl = Math.random;
	Math.random = () => fixedResult;
	Math.random.originalImpl = originalImpl;
}

function unMockMathRandom() {
	if (Math.random.originalImpl) {
		Math.random = Math.random.originalImpl;
	}
}

test('main', t => {
	t.is(typeof cliSpinners, 'object');
	t.is(cliSpinners.dots.interval, 80);
	t.true(Array.isArray(cliSpinners.dots.frames));
});

test('random getter', t => {
	const spinnersList = Object.keys(cliSpinners)
		// TODO: remove this filter when "module.exports.default = spinners" is removed from index.js;
		.filter(key => key !== 'default')
		.map(key => cliSpinners[key]);

	// Should always return an item from the spinners list
	t.true(spinnersList.includes(cliSpinners.random));

	// Should return the first spinner when math.random is the min value
	mockMathRandom(0);
	t.is(cliSpinners.random, spinnersList[0]);

	mockMathRandom(0.99);
	// Should return the last spinner when math.random is the max value
	t.is(cliSpinners.random, spinnersList[spinnersList.length - 1]);

	unMockMathRandom();
});
