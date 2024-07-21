import { options } from './__shared.ts';
import { resolve } from 'node:path';
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import process from 'node:process';

import { parseFile, parseFileSync } from '../src/fs.ts';

const cwd = resolve(process.cwd(), 'tests/fixtures');

test('parseFile valid options', async () => {
	const actual = await parseFile(`${cwd}/valid-options.txt`);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

test('parseFile indented options', async () => {
	const actual = await parseFile(`${cwd}/indented-options.txt`);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

// test('parseFile invalid options', () => {
// 	assert.throws(async () => await parseFile(`${cwd}/invalid-options.txt`));
// });

test('parseFileSync valid options', () => {
	const actual = parseFileSync(`${cwd}/valid-options.txt`);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

test('parseFileSync indented options', () => {
	const actual = parseFileSync(`${cwd}/indented-options.txt`);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

// test('parseFileSync invalid options', () => {
// 	assert.throws(() => parseFileSync(`${cwd}/invalid-options.txt`));
// });

test.run();
