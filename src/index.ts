/**
 * This module contains functions to parse and stringify Morphagene options.
 * @module
 */

import { type MorphageneOptions, type MorphageneValues, validate, validOptions } from './schema/valibot.ts';

const roundNumber = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 5,
	maximumFractionDigits: 5,
});

/**
 * Parses an `options.txt` string into a JavaScript object.
 *
 * @param input - contents of `options.txt`
 * @param strict - validates the input
 * @returns an object of options
 *
 * @example
 * ```ts
 * import { parse } from '@nutriot/morphagene-options'
 *
 * parse(`
 * 	6 46345 0
 * 	vsop 0
 * 	inop 0
 * 	pmin 0
 * `)
 * ```
 */
export function parse(input: string, strict = true): MorphageneOptions {
	const configLines: MorphageneOptions = {};

	let foundHeader = false;

	input
		.replace(/\/\/.*$/gm, '')
		.split('\n')
		// biome-ignore lint/suspicious/useIterableCallbackReturn: will do later
		.map((line: string) => {
			const trimmedLine = line.trim();

			if (!trimmedLine.length) {
				return;
			}

			if (!foundHeader) {
				const lineValues = trimmedLine.split(' ');

				if (lineValues.length === 3 && lineValues.some((value) => !Number.isInteger(value))) {
					configLines._ = trimmedLine;
					foundHeader = true;
				}
			}

			const isValid = validOptions.some((option) => {
				return trimmedLine.startsWith(option);
			});

			if (!isValid) {
				return;
			}

			const [key, value] = trimmedLine.split(' ');

			configLines[key as MorphageneValues] = Number(value);
		});

	if (strict) {
		validate(configLines);
	}

	// Make the `_` property read-only
	Object.defineProperty(configLines, '_', {
		writable: false,
	});

	return configLines;
}

/**
 * Stringifies a JavaScript object into an `options.txt` string
 *
 * @param input - Morphagene options object
 * @returns the contents of `options.txt`
 *
 * @example
 * ```ts
 * import { stringify } from '@nutriot/morphagene-options'
 *
 * stringify({
 * 	_: '6 46345 0',
 * 	vsop: 0,
 * 	inop: 0,
 * 	pmin: 0,
 * })
 * ```
 */
export function stringify(input: MorphageneOptions, strict = true): string {
	if (strict) {
		validate(input);
	}

	const sortedInput = {
		_: input._,
		...input,
	};

	const output = [
		...Object.entries(sortedInput).map(([key, value]) => {
			switch (key) {
				case '_':
					return value;

				case 'mcr1':
				case 'mcr2':
				case 'mcr3':
					return `${key} ${roundNumber.format(Number(value))}`;

				default:
					return `${key} ${value}`;
			}
		}),
	];

	return output.join('\n');
}

export { schema as valibotSchema } from './schema/valibot.ts';
export { schema as zodSchema } from './schema/zod.ts';
