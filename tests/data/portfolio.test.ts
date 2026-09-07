import { describe, expect, it } from 'vitest';
import { portfolioData } from '@/data/portfolio';

describe('portfolioData', () => {
	it('keeps recruiter CTA order', () => {
		expect(portfolioData.cta.primary.label).toBe('Download Resume');
		expect(portfolioData.cta.secondary.label).toBe('Email Me');
		expect(portfolioData.cta.tertiary.label).toBe('LinkedIn');
	});

	it('has Azure Fundamentals as the first certification', () => {
		expect(portfolioData.certifications[0].title).toContain('Azure Fundamentals');
		expect(portfolioData.certifications[0].issuer).toBe('Microsoft');
	});

	it('has no Neonflake experience entry', () => {
		const companies = portfolioData.experiences.map((e) => e.company);
		expect(companies).not.toContain('Neonflake');
	});

	it('has rsvp.kim open source contribution', () => {
		expect(portfolioData.openSourceContributions.length).toBeGreaterThan(0);
		expect(portfolioData.openSourceContributions[0].project).toBe('rsvp.kim');
	});

	it('has engineering projects with slugs and narrative fields', () => {
		expect(portfolioData.engineeringProjects.length).toBeGreaterThan(0);
		portfolioData.engineeringProjects.forEach((p) => {
			expect(p.slug).toBeTruthy();
			expect(p.problem).toBeTruthy();
			expect(p.outcome).toBeTruthy();
		});
	});

	it('has ByBar as an engineering project', () => {
		const bybar = portfolioData.engineeringProjects.find((p) => p.slug === 'bybar');
		expect(bybar).toBeDefined();
		expect(bybar?.technologies).toContain('Azure Logic Apps');
	});

	it('has engineering decisions with chosen field', () => {
		expect(portfolioData.engineeringDecisions.length).toBeGreaterThan(0);
		portfolioData.engineeringDecisions.forEach((d) => {
			expect(['A', 'B']).toContain(d.chosen);
		});
	});

	it('has architecture nodes including Azure integration layer', () => {
		const azureNode = portfolioData.architectureNodes.find((n) => n.id === 'azure');
		expect(azureNode).toBeDefined();
		expect(azureNode?.technologies).toContain('Azure Logic Apps');
	});

	it('marks placeholder technologies honestly', () => {
		const placeholders = portfolioData.technologyEvidence.filter((t) => t.placeholder);
		placeholders.forEach((p) => {
			expect(p.usedIn).toHaveLength(0);
		});
	});

	it('has updated capability groups reflecting Azure and .NET positioning', () => {
		const titles = portfolioData.capabilityGroups.map((g) => g.title);
		expect(titles).toContain('Backend & Runtime');
		expect(titles).toContain('Azure Integration');
		expect(titles).toContain('Data & Storage');
	});

	it('has positioning as Backend and Azure Integration', () => {
		expect(portfolioData.personal.title).toContain('Backend');
		expect(portfolioData.personal.title).toContain('Azure Integration');
		expect(portfolioData.seo.title).toContain('Azure Integration');
	});
});
