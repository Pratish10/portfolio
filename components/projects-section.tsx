import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/section-heading';
import type { PortfolioData } from '@/types/portfolio-types';

const ProjectsSection = ({ projects }: { projects: PortfolioData['projects'] }) => {
	return (
		<section id='systems' className='border-y border-white/10 bg-black/15'>
			<div className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
				<SectionHeading
					eyebrow='Systems'
					title='Selected Systems'
					description='Curated engineering work that shows how the portfolio translates into backend, real-time, and scalable product execution.'
				/>
				<div className='grid gap-6 lg:grid-cols-2'>
					{projects.map((project) => (
						<article key={project.id} className='rounded-[2rem] border border-white/10 bg-white/5 p-7'>
							<p className='text-sm uppercase tracking-[0.3em] text-cyan-200/75'>{project.tag}</p>
							<h3 className='mt-3 text-2xl font-semibold text-white'>{project.name}</h3>
							<p className='mt-4 text-white/72'>{project.summary}</p>
							<ul className='mt-5 space-y-3 text-white/72'>
								{project.highlights.map((highlight) => (
									<li key={highlight} className='flex gap-3'>
										<span className='mt-2 h-2 w-2 rounded-full bg-cyan-200' />
										<span>{highlight}</span>
									</li>
								))}
							</ul>
							{project.links.length > 0 ? (
								<div className='mt-6 flex flex-wrap gap-3'>
									{project.links.map((link) => (
										<Button key={link.href} asChild variant='outline' className='rounded-full bg-transparent'>
											<a href={link.href} target='_blank' rel='noreferrer'>
												{link.label}
											</a>
										</Button>
									))}
								</div>
							) : null}
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
