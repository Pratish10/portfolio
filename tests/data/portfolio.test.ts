import { describe, expect, it } from 'vitest';
import { portfolioData } from '@/data/portfolio';

describe('portfolioData', () => {
	it('keeps recruiter CTA order and exposes grouped capabilities', () => {
		expect(portfolioData.cta.primary.label).toBe('Download Resume');
		expect(portfolioData.cta.secondary.label).toBe('Email Me');
		expect(portfolioData.cta.tertiary.label).toBe('LinkedIn');
		expect(portfolioData.capabilityGroups.map((group) => group.title)).toEqual([
			'Backend & APIs',
			'Cloud & DevOps',
			'Frontend Systems',
			'Performance & Testing',
			'Architecture & System Design',
		]);
	});
});
