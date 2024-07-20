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
export const schema: ZodSchema = z.object({
	_: z.string().readonly(),
	ckop: RANGE_0_TO_2.optional(),
	cvop: RANGE_0_TO_1.optional(),
	gnsm: RANGE_0_TO_1.optional(),
	inop: RANGE_0_TO_2.optional(),
	mcr1: CHORD_RATIO.optional(),
	mcr2: CHORD_RATIO.optional(),
	mcr3: CHORD_RATIO.optional(),
	omod: RANGE_0_TO_1.optional(),
	pmin: RANGE_0_TO_2.optional(),
	pmod: RANGE_0_TO_2.optional(),
	rsop: RANGE_0_TO_1.optional(),
	vsop: RANGE_0_TO_2.optional(),
});

// Prevent slow types
type ZodSchema = z.ZodObject<{
	_: z.ZodReadonly<z.ZodString>;
	ckop: z.ZodOptional<z.ZodNumber>;
	cvop: z.ZodOptional<z.ZodNumber>;
	gnsm: z.ZodOptional<z.ZodNumber>;
	inop: z.ZodOptional<z.ZodNumber>;
	mcr1: z.ZodOptional<z.ZodNumber>;
	mcr2: z.ZodOptional<z.ZodNumber>;
	mcr3: z.ZodOptional<z.ZodNumber>;
	omod: z.ZodOptional<z.ZodNumber>;
	pmin: z.ZodOptional<z.ZodNumber>;
	pmod: z.ZodOptional<z.ZodNumber>;
	rsop: z.ZodOptional<z.ZodNumber>;
	vsop: z.ZodOptional<z.ZodNumber>;
}>;
