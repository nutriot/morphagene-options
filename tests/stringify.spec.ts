import { options } from './__shared.ts';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { stringify } from '../src/index.ts';

test('stringify valid options', () => {
	const actual = stringify(options.validObject);
	const expected = options.strippedString;

	assert.is(actual, expected);
});

test('stringify invalid options', () => {
	assert.throws(() => stringify(options.invalidObject));
});

test.run();
