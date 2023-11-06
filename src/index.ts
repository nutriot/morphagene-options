import { type MorphageneOptions, validate, validOptions } from './schema';

/**
 * Parses an `options.txt` file into a JavaScript object.
 *
 * @param {string} input - contents of `options.txt`
 * @param {boolean} strict - validates the input
 * @returns {MorphageneOptions}
 */
export function parse(input: string, strict = true) {
	const configLines: MorphageneOptions = {};

	let foundHeader = false;

	input
		.replace(/\/\/.*$/mg, '')
		.split('\n')
		.map(line => {
			const trimmedLine = line.trim();

			if (!trimmedLine.length) {
				return;
			}

			if (!foundHeader) {
				const lineValues = trimmedLine.split(' ');

				if (lineValues.length === 3 && lineValues.some(value => !Number.isInteger(value))) {
					configLines['_'] = trimmedLine;
					foundHeader = true;
				}
			}

			const isValid = validOptions.some(option => {
				return trimmedLine.startsWith(option);
			});

			if (!isValid) {
				return;
			}

			const [key, value] = trimmedLine.split(' ');

			configLines[key] = Number(value);
		});

	if (strict) {
		validate(configLines);
	}

	// Make the `_` property read-only
	Object.defineProperty(configLines, '_', {
		writable: false
	});

	return configLines;
}

/**
 * Stringifies a JavaScript object into an `options.txt` file
 *
 * @param {MorphageneOptions} input - Morphagene options object
 * @returns {string}
 */
export function stringify(input: MorphageneOptions, strict = true) {
	if (strict) {
		validate(input);
	}

	const sortedInput = {
		_: input['_'],
		...input
	};

	const output = [
		...Object.entries(sortedInput)
			.map(([key, value]) => {
				return key === '_'
					? value
					: `${key} ${value}`
				;
			})
	];

	return output.join('\n');
}

export { schema } from './schema';
