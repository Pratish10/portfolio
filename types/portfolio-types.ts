export interface CtaLink {
	label: string;
	href: string;
}

export interface PortfolioData {
	personal: {
		fullName: string;
		firstName: string;
		lastName: string;
		title: string;
		location: string;
		summary: string;
		availability: string;
		profileImage: string;
		resumeLink: string;
	};
	cta: {
		primary: CtaLink;
		secondary: CtaLink;
		tertiary: CtaLink;
	};
	impactStats: {
		label: string;
		value: string;
	}[];
	experiences: {
		id: number;
		company: string;
		role: string;
		duration: string;
		location: string;
		summary: string;
		bullets: string[];
		stack: string[];
	}[];
	projects: {
		id: number;
		name: string;
		tag: string;
		summary: string;
		highlights: string[];
		links: CtaLink[];
	}[];
	capabilityGroups: {
		title: string;
		items: string[];
	}[];
	certifications: {
		id: number;
		title: string;
		issuer: string;
		date: string;
		href: string;
	}[];
	recognition: string[];
	education: {
		school: string;
		degree: string;
		duration: string;
		score: string;
	};
	socialLinks: {
		platform: string;
		url: string;
		icon: string;
	}[];
	seo: {
		title: string;
		description: string;
		keywords: string[];
	};
}
