import test from 'ava';
import cliSpinners from '.';

test('main', t => {
	t.is(typeof cliSpinners, 'object');
	t.is(cliSpinners.dots.interval, 80);
	t.true(Array.isArray(cliSpinners.dots.frames));
});
