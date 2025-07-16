import { type Metadata } from 'next';

const TITLE = 'Pratish Ninawe | Software Engineer';
const DESCRIPTION =
	"I'm Pratish Ninawe — a Full Stack Developer and UI/UX Designer crafting modern, scalable web applications. Explore my work, skills, projects, and career journey in frontend, backend, and cloud technologies.";

const BASE_URL = 'https://pratish10.github.io/portfolio';

export const siteConfig: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	applicationName: 'Pratish Portfolio',
	metadataBase: new URL(BASE_URL),
	keywords: [
		'Pratish Ninawe',
		'Full Stack Developer',
		'Frontend Engineer',
		'Backend Developer',
		'React Developer',
		'Next.js Portfolio',
		'TypeScript Developer',
		'JavaScript Developer',
		'Software Engineer Portfolio',
		'Web Developer India',
		'MERN Stack',
		'Portfolio Website',
	],
	creator: 'Pratish Ninawe',
	authors: [{ name: 'Pratish Ninawe', url: BASE_URL }],
	openGraph: {
		title: TITLE,
		description: DESCRIPTION,
		url: BASE_URL,
		siteName: 'Pratish Ninawe | Developer Portfolio',
		images: [
			{
				url: `${BASE_URL}/Pratish.webp`,
				width: 1200,
				height: 630,
				alt: 'Pratish Ninawe Portfolio Preview',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: TITLE,
		description: DESCRIPTION,
		creator: '@Pratish1086241',
		images: [`${BASE_URL}/Pratish.webp`],
	},
	icons: {
		icon: '/Pratish.webp',
	},
	category: 'technology',
	alternates: {
		canonical: BASE_URL,
	},
};
