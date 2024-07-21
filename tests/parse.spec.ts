import { options } from './__shared.ts';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { parse } from '../src/index.ts';

test('parse valid options', () => {
	const actual = parse(options.validString);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

test('parse indented options', () => {
	const actual = parse(options.indentedString);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

test('parse invalid options', () => {
	assert.throws(() => parse(options.invalidString));
});

test.run();
