/**
 * This module contains functions to parse Morphagene options files.
 * @module
 */

import { parse } from './index.ts';
import { readFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { type MorphageneOptions } from './schema/valibot.ts';

/**
 * Parses an `options.txt` file into a JavaScript object.
 *
 * @param {string} filePath - the file path to `options.txt`
 * @param {boolean} strict - validates the input
 * @returns {Promise<MorphageneOptions>}
 *
 * @example
 * ```ts
 * import { parseFile } from '@nutriot/morphagene-options/fs'
 *
 * parseFile('path/to/options.txt')
 * ```
 */
export async function parseFile(filePath: string, strict = true): Promise<MorphageneOptions> {
	const input = await readFile(filePath, 'utf-8');

	return parse(input, strict);
}

/**
 * Parses an `options.txt` file into a JavaScript object.
 *
 * @param {string} filePath - the file path to `options.txt`
 * @param {boolean} strict - validates the input
 * @returns {MorphageneOptions}
 *
 * @example
 * ```ts
 * import { parseFileSync } from '@nutriot/morphagene-options/fs'
 *
 * parseFile('path/to/options.txt')
 * ```
 */
export function parseFileSync(filePath: string, strict = true): MorphageneOptions {
	const input = readFileSync(filePath, 'utf-8');

	return parse(input, strict);
}
