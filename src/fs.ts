/**
 * This module contains functions to parse Morphagene options files.
 * @module
 */

import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { type QuansyncFn, type QuansyncGenerator, quansync } from 'quansync';
import { parse } from './index.ts';
import type { MorphageneOptions } from './schema/valibot.ts';

const _readFile = quansync({
	sync: (path: string) => readFileSync(path, 'utf-8'),
	async: (path: string) => readFile(path, 'utf-8'),
});

/**
 * Parses an `options.txt` file into a JavaScript object.
 *
 * @param {string} filePath - the file path to `options.txt`
 * @param {boolean} strict - validates the input
 * @returns an object of options
 *
 * @example
 * ```ts
 * import { parseFile } from '@nutriot/morphagene-options/fs'
 *
 * parseFile.sync('path/to/options.txt')
 * await parseFile.async('path/to/options.txt')
 * ```
 */
export const parseFile: QuansyncFn<MorphageneOptions, [filename: string, strict?: boolean]> = quansync(function* (
	filename: string,
	strict = true,
): QuansyncGenerator<MorphageneOptions> {
	const contents = yield* _readFile(filename);

	return parse(contents, strict);
});
