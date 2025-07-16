export interface PortfolioData {
	personal: {
		firstName: string;
		lastName: string;
		title: string;
		location: string;
		about: string;
		profileImage: string;
		resumeLink: string;
	};
	socialLinks: {
		platform: string;
		url: string;
		icon: string;
	}[];
	experience: {
		id: number;
		company: string;
		position: string;
		duration: string;
		location: string;
		description: string;
		technologies: string[];
		achievements: string[];
	}[];
	projects: {
		id: number;
		title: string;
		description: string;
		image: string;
		technologies: string[];
		liveUrl: string;
		githubUrl: string;
		featured: boolean;
		category: string;
	}[];
	skills: Skill[];
	certifications: {
		id: number;
		title: string;
		issuer: string;
		date: string;
		credentialId: string;
		image: string;
		verifyUrl: string;
	}[];
	contact: {
		email: string;
		phone: string;
	};
}

export interface Skill {
	name: string;
	icon: string;
	color: string;
}
