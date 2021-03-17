import test from 'ava';
import stringLength from 'string-length';

import cliSpinners from '.';

test('main', t => {
	t.is(typeof cliSpinners, 'object');
	t.is(cliSpinners.dots.interval, 80);
	t.true(Array.isArray(cliSpinners.dots.frames));
});

test('constant width', t => {
	for (const key of Object.keys(cliSpinners)) {
		if (key !== 'default') {
			continue;
		}
		const {
			[key]: {
				frames,
				frames: [
					firstFrame
				]
			}
		} = cliSpinners;

		const firstFrameLength = stringLength(firstFrame);

		t.true(frames.every(frame => stringLength(frame) === firstFrameLength));
	}
});
