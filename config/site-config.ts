import { type Metadata } from 'next';
import { portfolioData } from '@/data/portfolio';

const BASE_URL = 'https://pratish10.github.io/portfolio';

export const siteConfig: Metadata = {
	title: portfolioData.seo.title,
	description: portfolioData.seo.description,
	applicationName: 'Pratish Ninawe Portfolio',
	metadataBase: new URL(BASE_URL),
	keywords: portfolioData.seo.keywords,
	creator: portfolioData.personal.fullName,
	authors: [{ name: portfolioData.personal.fullName, url: BASE_URL }],
	alternates: {
		canonical: BASE_URL,
	},
	openGraph: {
		title: portfolioData.seo.title,
		description: portfolioData.seo.description,
		url: BASE_URL,
		siteName: portfolioData.personal.fullName,
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: `${BASE_URL}/Pratish.webp`,
				width: 1200,
				height: 630,
				alt: `${portfolioData.personal.fullName} portfolio preview`,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: portfolioData.seo.title,
		description: portfolioData.seo.description,
		images: [`${BASE_URL}/Pratish.webp`],
	},
	icons: {
		icon: `${BASE_URL}/Pratish.webp`,
	},
	category: 'technology',
};
