import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://pratish10.github.io/portfolio',
			lastModified: new Date('2026-04-05'),
		},
	];
}
