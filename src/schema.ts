import { z } from 'zod';

const roundNumber = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 0, maximumFractionDigits: 5
});

const RANGE_0_TO_1 = z.number().int().min(0).max(1).optional();
const RANGE_0_TO_2 = z.number().int().min(0).max(2).optional();
const CHORD_RATIO = z.number().min(-16.000).max(16.000).refine(value => String(value).length <= roundNumber.format(value).length, {
	message: `Ratios can't have more than five decimals`
}).optional();

export const schema = z.object({
	_: z.string(),
	vsop: RANGE_0_TO_2,
	inop: RANGE_0_TO_2,
	pmin: RANGE_0_TO_2,
	omod: RANGE_0_TO_1,
	gnsm: RANGE_0_TO_1,
	rsop: RANGE_0_TO_1,
	pmod: RANGE_0_TO_2,
	ckop: RANGE_0_TO_2,
	cvop: RANGE_0_TO_1,
	mcr1: CHORD_RATIO,
	mcr2: CHORD_RATIO,
	mcr3: CHORD_RATIO,
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
