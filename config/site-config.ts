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
	},
	twitter: {
		card: 'summary_large_image',
		title: portfolioData.seo.title,
		description: portfolioData.seo.description,
	},
	icons: {
		icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
		shortcut: '/favicon.svg',
	},
	category: 'technology',
};
