import {
	InferOutput,
	integer,
	maxValue,
	minValue,
	number,
	object,
	optional,
	parse,
	pipe,
	readonly,
	string,
} from 'valibot';

const RANGE_0_TO_1 = pipe(number(), integer(), minValue(0), maxValue(1));
const RANGE_0_TO_2 = pipe(number(), integer(), minValue(0), maxValue(2));
const CHORD_RATIO = pipe(number(), minValue(-16), maxValue(16));

export const schema = object({
	_: optional(pipe(string(), readonly())),
	vsop: optional(RANGE_0_TO_2),
	inop: optional(RANGE_0_TO_2),
	pmin: optional(RANGE_0_TO_2),
	omod: optional(RANGE_0_TO_1),
	gnsm: optional(RANGE_0_TO_1),
	rsop: optional(RANGE_0_TO_1),
	pmod: optional(RANGE_0_TO_2),
	ckop: optional(RANGE_0_TO_2),
	cvop: optional(RANGE_0_TO_1),
	mcr1: optional(CHORD_RATIO),
	mcr2: optional(CHORD_RATIO),
	mcr3: optional(CHORD_RATIO),
});

export const validate = (inputSchema) => {
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

type MorphageneValues =
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

export type MorphageneOptions = InferOutput<typeof schema>;
