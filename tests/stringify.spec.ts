import { options } from './shared.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { stringify } from '../src/index.js';

test('stringify valid options', async () => {
	const actual = stringify(options.validObject);
	const expected = options.strippedString;

	assert.is(actual, expected);
});

test('stringify invalid options', async () => {
	assert.throws(() => stringify(options.invalidObject));
});

test.run();
