import { defineConfig } from 'tsup';

export default defineConfig({
	target: 'esnext',
	clean: true,
	dts: true,
	entry: ['src/index.ts', 'src/fs.ts'],
	format: 'esm',
	minify: true,
	treeshake: 'recommended',
});
