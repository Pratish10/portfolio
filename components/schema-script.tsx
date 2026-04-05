import { portfolioData } from '@/data/portfolio';

export default function SchemaScript() {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		url: 'https://pratish10.github.io/portfolio',
		mainEntity: {
			'@type': 'Person',
			name: portfolioData.personal.fullName,
			jobTitle: 'Full Stack Engineer',
			description: portfolioData.personal.summary,
			image: 'https://pratish10.github.io/portfolio/Pratish.webp',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Bengaluru',
				addressRegion: 'Karnataka',
				addressCountry: 'IN',
			},
			sameAs: portfolioData.socialLinks.map((item) => item.url).filter((url) => url.startsWith('http')),
			knowsAbout: portfolioData.capabilityGroups.flatMap((group) => group.items),
		},
	};

	return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
