import { options } from './__shared.ts';
import { resolve } from 'node:path';
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import process from 'node:process';

import { parseFile } from '../src/fs.ts';

const cwd = resolve(process.cwd(), 'tests/fixtures');

test('parseFile.async valid options', async () => {
	const actual = await parseFile.async(`${cwd}/valid-options.txt`);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

test('parseFile.async indented options', async () => {
	const actual = await parseFile.async(`${cwd}/indented-options.txt`);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

// test('parseFile.async invalid options', () => {
// 	assert.throws(async () => await parseFile.async(`${cwd}/invalid-options.txt`));
// });

test('parseFile.sync valid options', () => {
	const actual = parseFile.sync(`${cwd}/valid-options.txt`);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

test('parseFile.sync indented options', () => {
	const actual = parseFile.sync(`${cwd}/indented-options.txt`);
	const expected = options.validObject;

	assert.equal(actual, expected);
});

// test('parseFile.sync invalid options', () => {
// 	assert.throws(() => parseFile.sync(`${cwd}/invalid-options.txt`));
// });

test.run();
