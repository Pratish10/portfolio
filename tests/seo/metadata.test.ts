import { describe, expect, it } from 'vitest';
import { siteConfig } from '@/config/site-config';

describe('siteConfig', () => {
	it('targets recruiter-facing backend and cloud positioning', () => {
		expect(String(siteConfig.title)).toContain('Full Stack Engineer');
		expect(siteConfig.description ?? '').toContain('backend');
		expect(siteConfig.description ?? '').toContain('cloud');
	});
});
