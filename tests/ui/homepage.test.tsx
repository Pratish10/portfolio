import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
	it('renders the recruiter-first hero CTAs', () => {
		render(Home());
		expect(screen.getAllByRole('link', { name: /download resume/i }).length).toBeGreaterThan(0);
		expect(screen.getAllByRole('link', { name: /email me/i }).length).toBeGreaterThan(0);
		expect(screen.getAllByRole('link', { name: /linkedin/i }).length).toBeGreaterThan(0);
	});

	it('renders the hero with backend and Azure positioning', () => {
		render(Home());
		expect(screen.getAllByText(/backend.*azure integration/i).length).toBeGreaterThan(0);
	});

	it('renders selected work section', () => {
		render(Home());
		expect(screen.getAllByText(/selected work/i).length).toBeGreaterThan(0);
	});

	it('renders engineering section heading', () => {
		render(Home());
		expect(screen.getAllByText(/engineering/i).length).toBeGreaterThan(0);
	});

	it('renders contact section with problem-framing copy', () => {
		render(Home());
		expect(screen.getAllByText(/have a backend problem/i).length).toBeGreaterThan(0);
	});

	it('renders project cards with story links', () => {
		render(Home());
		const storyLinks = screen.getAllByText(/full story/i);
		expect(storyLinks.length).toBeGreaterThan(0);
	});
});
