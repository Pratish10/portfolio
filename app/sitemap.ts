import type { MetadataRoute } from 'next';
import { portfolioData } from '@/data/portfolio';

export const dynamic = 'force-static';

const BASE_URL = 'https://pratish10.github.io/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
	const projectPages = portfolioData.engineeringProjects.map((project) => ({
		url: `${BASE_URL}/work/${project.slug}`,
		lastModified: new Date('2026-09-07'),
	}));

	return [
		{
			url: BASE_URL,
			lastModified: new Date('2026-09-07'),
		},
		...projectPages,
	];
}
