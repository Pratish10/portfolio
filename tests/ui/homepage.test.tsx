import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
	it('renders the recruiter-first hero and core sections', () => {
		render(Home());
		expect(screen.getAllByRole('link', { name: /download resume/i }).length).toBeGreaterThan(0);
		expect(screen.getAllByRole('link', { name: /email me/i }).length).toBeGreaterThan(0);
		expect(screen.getAllByRole('link', { name: /linkedin/i }).length).toBeGreaterThan(0);
		expect(screen.getByText(/backend systems, cloud, and performance/i)).toBeInTheDocument();
		expect(screen.getAllByText(/selected systems/i).length).toBeGreaterThan(0);
		expect(screen.getAllByText(/capability clusters/i).length).toBeGreaterThan(0);
	});
});
