export const options = {
	validString: `
6 46345 0
//
// firmware version 155
//
// 0 option is default
vsop 0 ///Varispeed option: 0 bidirectional classic, 1 bidirectional 1 v/oct, 2 positive only - 1 v/oct.
inop 0 //Input option: 0 record SOS mix, 1 record input only
pmin 0 //Phase/position modulation: 0 no phase modulation, 1 phase playback modulation on right signal input when no signal on left inpu
omod 0 //Organize option: 0 organize at end of gene, 1 organize immediately
gnsm 0 //Gene smooth: 0 classic, 1 smooth gene window
rsop 0 //Record option: 0 record + splice = record new splice, record = record current splice; 1 record + splice = record current splice, record = record new splice
pmod 0 //Play option: 0 classic, 1 momentary, 2 trigger loop
ckop 0 //Clock control option: 0 hybrid gene shift time stretch, 1 gene shift only, 2 time stretch only
cvop 0 //CV out: 0 envelope follow, 1 ramp gene
`.trim(),

	indentedString: `
		6 46345 0
		//
		// firmware version 155
		//
		// 0 option is default
		vsop 0 ///Varispeed option: 0 bidirectional classic, 1 bidirectional 1 v/oct, 2 positive only - 1 v/oct.
		inop 0 //Input option: 0 record SOS mix, 1 record input only
		pmin 0 //Phase/position modulation: 0 no phase modulation, 1 phase playback modulation on right signal input when no signal on left inpu
		omod 0 //Organize option: 0 organize at end of gene, 1 organize immediately
		gnsm 0 //Gene smooth: 0 classic, 1 smooth gene window
		rsop 0 //Record option: 0 record + splice = record new splice, record = record current splice; 1 record + splice = record current splice, record = record new splice
		pmod 0 //Play option: 0 classic, 1 momentary, 2 trigger loop
		ckop 0 //Clock control option: 0 hybrid gene shift time stretch, 1 gene shift only, 2 time stretch only
		cvop 0 //CV out: 0 envelope follow, 1 ramp gene
	`,

	validObject: {
		_: '6 46345 0',
		vsop: 0,
		inop: 0,
		pmin: 0,
		omod: 0,
		gnsm: 0,
		rsop: 0,
		pmod: 0,
		ckop: 0,
		cvop: 0
	},

	strippedString: `
6 46345 0
vsop 0
inop 0
pmin 0
omod 0
gnsm 0
rsop 0
pmod 0
ckop 0
cvop 0
`.trim(),

	invalidString: `
6 46345 0
vsop 666
inop 666
pmin 666
omod 666
gnsm 666
rsop 666
pmod 666
ckop 666
cvop 666
`.trim(),

	invalidObject: {
		_: '6 46345 0',
		vsop: 666,
		inop: 666,
		pmin: 666,
		omod: 666,
		gnsm: 666,
		rsop: 666,
		pmod: 666,
		ckop: 666,
		cvop: 666
	},
};
