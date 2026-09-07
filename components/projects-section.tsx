import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/section-heading';
import type { EngineeringProject } from '@/types/portfolio-types';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = ({ projects }: { projects: EngineeringProject[] }) => {
	return (
		<section id='systems' className='border-y border-[color:var(--line)] bg-[color:var(--signal-muted)]'>
			<div className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
				<SectionHeading
					eyebrow='Selected Work'
					title='Engineering stories, not project lists'
					description='Each project has a problem, a decision, and a measurable outcome. Click any card to read the full engineering narrative.'
				/>
				<div className='grid gap-5 lg:grid-cols-2 xl:grid-cols-3'>
					{projects.map((project) => (
						<article
							key={project.id}
							className='group flex flex-col rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-card)] p-6 transition hover:border-[color:var(--line-strong)]'
						>
							<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>{project.tag}</p>
							<h3 className='mt-3 text-xl font-bold text-[var(--ink)]'>{project.name}</h3>
							<p className='mt-3 flex-1 text-sm leading-7 text-[var(--muted-ink)]'>{project.summary}</p>

							{project.metrics.length > 0 && (
								<div className='mt-5 flex flex-wrap gap-2'>
									{project.metrics.slice(0, 2).map((metric) => (
										<span
											key={metric}
											className='mono rounded border border-[color:var(--line-strong)] bg-[color:var(--signal-muted)] px-2.5 py-1 text-[9px] tracking-[0.1em] text-[color:var(--accent)]'
										>
											{metric}
										</span>
									))}
								</div>
							)}

							<div className='mt-5 flex flex-wrap items-center gap-3 border-t border-[color:var(--line)] pt-4'>
								<Link
									href={`/work/${project.slug}`}
									className='mono inline-flex items-center gap-1.5 text-[10px] tracking-[0.12em] text-[color:var(--accent)] transition hover:text-[color:var(--coral)]'
								>
									FULL STORY
									<ArrowRight className='h-3 w-3' />
								</Link>
								{project.links.map((link) => (
									<Button key={link.href} asChild variant='ghost' size='sm'>
										<a href={link.href} target='_blank' rel='noreferrer'>
											{link.label}
										</a>
									</Button>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
