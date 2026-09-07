export interface CtaLink {
	label: string;
	href: string;
}

export interface EngineeringDecision {
	title: string;
	situation: string;
	optionA: string;
	optionB: string;
	chosen: 'A' | 'B';
	rationale: string;
	tradeoff: string;
	result: string;
}

export interface EngineeringProject {
	id: number;
	slug: string;
	name: string;
	tag: string;
	summary: string;
	problem: string;
	context: string;
	myRole: string;
	responsibilities: string[];
	technologies: string[];
	architecture: string;
	decisions: EngineeringDecision[];
	challenges: string[];
	outcome: string;
	metrics: string[];
	lessonsLearned: string[];
	links: CtaLink[];
}

export interface ArchitectureNode {
	id: string;
	label: string;
	icon: string;
	description: string;
	technologies: string[];
	relatedProjects: string[];
}

export interface TechnologyEvidence {
	technology: string;
	category: 'backend' | 'cloud' | 'frontend' | 'database' | 'devops' | 'integration';
	usedIn: string[];
	whatBuilt: string;
	placeholder?: boolean;
}

export interface OpenSourceContribution {
	project: string;
	organization: string;
	url: string;
	contribution: string;
	changelogUrl?: string;
}

export interface EngineeringPrinciple {
	name: string;
	icon: string;
	statement: string;
	evidence: string;
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
	engineeringProjects: EngineeringProject[];
	engineeringDecisions: EngineeringDecision[];
	architectureNodes: ArchitectureNode[];
	technologyEvidence: TechnologyEvidence[];
	openSourceContributions: OpenSourceContribution[];
	engineeringPrinciples: EngineeringPrinciple[];
}
