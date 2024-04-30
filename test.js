import test from 'ava';
import stringLength from 'string-length';
import cliSpinners, {randomSpinner} from './index.js';

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

test('constant width', t => {
	for (const key of Object.keys(cliSpinners)) {
		const {
			[key]: {
				frames,
				frames: [
					firstFrame,
				],
			},
		} = cliSpinners;

		const firstFrameLength = stringLength(firstFrame);

		t.true(frames.every(frame => stringLength(frame) === firstFrameLength));
	}
});

test('randomSpinner()', t => {
	const spinnersList = Object.values(cliSpinners);

	// Should always return an item from the spinners list.
	t.true(spinnersList.includes(randomSpinner()));

	// Should return the first spinner when `Math.random()` is the minimum value.
	mockMathRandom(0);
	t.is(randomSpinner(), spinnersList[0]);

	mockMathRandom(0.99);
	// Should return the last spinner when `Math.random()` is the maximum value.
	t.is(randomSpinner(), spinnersList.at(-1));

	unMockMathRandom();
});
