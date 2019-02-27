import test from 'ava';
import m from '.';

test('api', t => {
	t.is(typeof m, 'object');
	t.is(m.dots.interval, 80);
	t.true(Array.isArray(m.dots.frames));
});
