import { options } from './shared.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { parse } from '../src/index.js';

test('parse valid options', async () => {
	const actual = parse(options.validString);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

test('parse indented options', async () => {
	const actual = parse(options.indentedString);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

test('parse invalid options', async () => {
	assert.throws(() => parse(options.invalidString));
});

test.run();
