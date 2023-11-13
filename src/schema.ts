import { z } from 'zod';

const roundNumber = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 0, maximumFractionDigits: 5
});

const RANGE_0_TO_1 = z.number().int().min(0).max(1);
const RANGE_0_TO_2 = z.number().int().min(0).max(2);
const CHORD_RATIO = z.number().min(-16).max(16).optional();

export const schema = z.object({
	_: z.string(),
	vsop: RANGE_0_TO_2.optional(),
	inop: RANGE_0_TO_2.optional(),
	pmin: RANGE_0_TO_2.optional(),
	omod: RANGE_0_TO_1.optional(),
	gnsm: RANGE_0_TO_1.optional(),
	rsop: RANGE_0_TO_1.optional(),
	pmod: RANGE_0_TO_2.optional(),
	ckop: RANGE_0_TO_2.optional(),
	cvop: RANGE_0_TO_1.optional(),
	mcr1: CHORD_RATIO.optional(),
	mcr2: CHORD_RATIO.optional(),
	mcr3: CHORD_RATIO.optional(),
});

export const validate = (inputSchema) => {
	schema.parse(inputSchema);
}

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
	'vsop'
];

type MorphageneValues = 'ckop' | 'cvop' | 'gnsm' | 'inop' | 'mcr1' | 'mcr2' | 'mcr3' | 'omod' | 'pmin' | 'pmod' | 'rsop' | 'vsop';
export type MorphageneOptions = z.infer<typeof schema>;
