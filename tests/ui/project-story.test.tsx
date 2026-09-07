import { describe, expect, it } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import ProjectStory from '@/components/projects/project-story';
import { portfolioData } from '@/data/portfolio';

describe('ProjectStory', () => {
	it('renders the QR Dine project story correctly', () => {
		const project = portfolioData.engineeringProjects.find((p) => p.slug === 'qr-dine')!;
		render(<ProjectStory project={project} />);
		expect(screen.getAllByText(/qr dine/i).length).toBeGreaterThan(0);
		expect(screen.getAllByText(/multi-branch restaurant saas/i).length).toBeGreaterThan(0);
		expect(screen.getAllByText(/the problem/i).length).toBeGreaterThan(0);
		expect(screen.getAllByText(/my role/i).length).toBeGreaterThan(0);
		expect(screen.getAllByText(/outcome/i).length).toBeGreaterThan(0);
	});

	it('renders all three engineering project stories without error', () => {
		portfolioData.engineeringProjects.forEach((project) => {
			render(<ProjectStory project={project} />);
			expect(screen.getAllByText(project.name).length).toBeGreaterThan(0);
			cleanup();
		});
	});

	it('renders decision cards when a project has decisions', () => {
		const projectWithDecisions = portfolioData.engineeringProjects.find((p) => p.decisions.length > 0)!;
		render(<ProjectStory project={projectWithDecisions} />);
		expect(screen.getAllByText(/engineering decisions/i).length).toBeGreaterThan(0);
	});
});
