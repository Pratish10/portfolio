import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { portfolioData } from '@/data/portfolio';
import ProjectStory from '@/components/projects/project-story';
import SchemaScript from '@/components/schema-script';

export function generateStaticParams() {
	return portfolioData.engineeringProjects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const project = portfolioData.engineeringProjects.find((p) => p.slug === slug);
	if (!project) return {};

	const BASE_URL = 'https://pratish10.github.io/portfolio';
	return {
		title: `${project.name} — ${project.tag} | Pratish Ninawe`,
		description: project.summary,
		openGraph: {
			title: `${project.name} — ${project.tag}`,
			description: project.summary,
			url: `${BASE_URL}/work/${slug}`,
			images: [{ url: `${BASE_URL}/Pratish.webp`, width: 1200, height: 630 }],
		},
	};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const project = portfolioData.engineeringProjects.find((p) => p.slug === slug);

	if (!project) {
		notFound();
	}

	return (
		<>
			<SchemaScript />
			<ProjectStory project={project} />
		</>
	);
}
