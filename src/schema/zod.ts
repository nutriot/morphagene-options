import { z } from 'zod';

const RANGE_0_TO_1 = z.number().int().min(0).max(1);
const RANGE_0_TO_2 = z.number().int().min(0).max(2);
const CHORD_RATIO = z.number().min(-16).max(16);

/**
 * Zod schema for all supported Morphagene options.
 *
 * @example
 * ```ts
 * import { z } from 'zod'
 * import { zodSchema as schema } from '@nutriot/morphagene-options'
 *
 * schema.safeParse({
 * 	_: '6 46345 0',
 * 	vsop: 0,
 * 	inop: 0,
 * 	pmin: 0,
 * })
 * ```
 */
export const schema = z.object({
	_: z.string().readonly(),
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
