import { describe, expect, it } from 'vitest';
import { siteConfig } from '@/config/site-config';

describe('siteConfig', () => {
	it('targets backend and Azure integration positioning', () => {
		expect(String(siteConfig.title)).toContain('Backend');
		expect(String(siteConfig.title)).toContain('Azure Integration');
		expect((siteConfig.description ?? '').toLowerCase()).toContain('backend');
		expect(siteConfig.description ?? '').toContain('Azure');
	});
});
