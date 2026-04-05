import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
	baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export default defineConfig([
	{
		ignores: ['.next/**', 'out/**', '.worktrees/**', 'node_modules/**'],
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		extends: ['js/recommended'],
		plugins: { js },
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	tseslint.configs.recommended,
	...compat.extends('next/core-web-vitals'),
]);
