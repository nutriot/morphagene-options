import {
	type InferOutput,
	type IntegerAction,
	integer,
	type MaxValueAction,
	type MinValueAction,
	maxValue,
	minValue,
	type NumberSchema,
	number,
	type ObjectSchema,
	type OptionalSchema,
	object,
	optional,
	parse,
	pipe,
	type ReadonlyAction,
	readonly,
	type SchemaWithPipe,
	type StringSchema,
	string,
} from 'valibot';

const RANGE_0_TO_1 = pipe(number(), integer(), minValue(0), maxValue(1));
const RANGE_0_TO_2 = pipe(number(), integer(), minValue(0), maxValue(2));
const CHORD_RATIO = pipe(number(), minValue(-16), maxValue(16));

/**
 * Valibot schema for all supported Morphagene options.
 *
 * @example
 * ```ts
 * import { safeParse } as v from 'valibot'
 * import { valibotSchema as schema } from '@nutriot/morphagene-options'
 *
 * safeParse(schema, {
 * 	_: '6 46345 0',
 * 	vsop: 0,
 * 	inop: 0,
 * 	pmin: 0,
 * })
 * ```
 */
export const schema: ValibotSchema = object({
	_: optional(pipe(string(), readonly())),
	ckop: optional(RANGE_0_TO_2),
	cvop: optional(RANGE_0_TO_1),
	gnsm: optional(RANGE_0_TO_1),
	inop: optional(RANGE_0_TO_2),
	mcr1: optional(CHORD_RATIO),
	mcr2: optional(CHORD_RATIO),
	mcr3: optional(CHORD_RATIO),
	omod: optional(RANGE_0_TO_1),
	pmin: optional(RANGE_0_TO_2),
	pmod: optional(RANGE_0_TO_2),
	rsop: optional(RANGE_0_TO_1),
	vsop: optional(RANGE_0_TO_2),
});

/**
 * Validates a provided object against the Valibot schema.
 * @param inputSchema
 */
export const validate = (inputSchema: MorphageneOptions) => {
	parse(schema, inputSchema);
};

export const validOptions: MorphageneValues[] = [
	'ckop',
	'cvop',
	'gnsm',
	'inop',
	'mcr1',
	'mcr2',
	'mcr3',
	'omod',
	'pmin',
	'pmod',
	'rsop',
	'vsop',
];

export type MorphageneValues =
	| 'ckop'
	| 'cvop'
	| 'gnsm'
	| 'inop'
	| 'mcr1'
	| 'mcr2'
	| 'mcr3'
	| 'omod'
	| 'pmin'
	| 'pmod'
	| 'rsop'
	| 'vsop';

/**
 * Morphagene options object.
 *
 * @example
 * ```ts
 * import { type MorphageneOptions } from '@nutriot/morphagene-options'
 * ```
 */
export type MorphageneOptions = InferOutput<typeof schema>;

// Prevent slow types
type ValibotSchema = ObjectSchema<
	{
		readonly _: OptionalSchema<SchemaWithPipe<[StringSchema<undefined>, ReadonlyAction<string>]>, never>;

		ckop: OptionalSchema<
			SchemaWithPipe<
				[
					NumberSchema<undefined>,
					IntegerAction<number, undefined>,
					MinValueAction<number, 0, undefined>,
					MaxValueAction<number, 2, undefined>,
				]
			>,
			never
		>;
		inop: OptionalSchema<
			SchemaWithPipe<
				[
					NumberSchema<undefined>,
					IntegerAction<number, undefined>,
					MinValueAction<number, 0, undefined>,
					MaxValueAction<number, 2, undefined>,
				]
			>,
			never
		>;
		pmin: OptionalSchema<
			SchemaWithPipe<
				[
					NumberSchema<undefined>,
					IntegerAction<number, undefined>,
					MinValueAction<number, 0, undefined>,
					MaxValueAction<number, 2, undefined>,
				]
			>,
			never
		>;
		pmod: OptionalSchema<
			SchemaWithPipe<
				[
					NumberSchema<undefined>,
					IntegerAction<number, undefined>,
					MinValueAction<number, 0, undefined>,
					MaxValueAction<number, 2, undefined>,
				]
			>,
			never
		>;
		vsop: OptionalSchema<
			SchemaWithPipe<
				[
					NumberSchema<undefined>,
					IntegerAction<number, undefined>,
					MinValueAction<number, 0, undefined>,
					MaxValueAction<number, 2, undefined>,
				]
			>,
			never
		>;

		cvop: OptionalSchema<
			SchemaWithPipe<
				[
					NumberSchema<undefined>,
					IntegerAction<number, undefined>,
					MinValueAction<number, 0, undefined>,
					MaxValueAction<number, 1, undefined>,
				]
			>,
			never
		>;
		gnsm: OptionalSchema<
			SchemaWithPipe<
				[
					NumberSchema<undefined>,
					IntegerAction<number, undefined>,
					MinValueAction<number, 0, undefined>,
					MaxValueAction<number, 1, undefined>,
				]
			>,
			never
		>;
		omod: OptionalSchema<
			SchemaWithPipe<
				[
					NumberSchema<undefined>,
					IntegerAction<number, undefined>,
					MinValueAction<number, 0, undefined>,
					MaxValueAction<number, 1, undefined>,
				]
			>,
			never
		>;
		rsop: OptionalSchema<
			SchemaWithPipe<
				[
					NumberSchema<undefined>,
					IntegerAction<number, undefined>,
					MinValueAction<number, 0, undefined>,
					MaxValueAction<number, 1, undefined>,
				]
			>,
			never
		>;

		mcr1: OptionalSchema<
			SchemaWithPipe<
				[NumberSchema<undefined>, MinValueAction<number, -16, undefined>, MaxValueAction<number, 16, undefined>]
			>,
			never
		>;
		mcr2: OptionalSchema<
			SchemaWithPipe<
				[NumberSchema<undefined>, MinValueAction<number, -16, undefined>, MaxValueAction<number, 16, undefined>]
			>,
			never
		>;
		mcr3: OptionalSchema<
			SchemaWithPipe<
				[NumberSchema<undefined>, MinValueAction<number, -16, undefined>, MaxValueAction<number, 16, undefined>]
			>,
			never
		>;
	},
	undefined
>;
