import { describe, expect, it } from 'vitest';
import { withBasePath } from '@/lib/utils';

describe('withBasePath', () => {
	it('joins a base path and asset path without duplicate slashes', () => {
		expect(withBasePath('https://pratish10.github.io/portfolio/', '/Pratish.webp')).toBe('https://pratish10.github.io/portfolio/Pratish.webp');
		expect(withBasePath('/portfolio/', '/Pratish.webp')).toBe('/portfolio/Pratish.webp');
	});

	it('returns the asset path when no base path is provided', () => {
		expect(withBasePath('', '/Pratish.webp')).toBe('/Pratish.webp');
	});
});
