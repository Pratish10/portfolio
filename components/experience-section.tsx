import SectionHeading from '@/components/section-heading';
import type { PortfolioData } from '@/types/portfolio-types';

const ExperienceSection = ({ experiences }: { experiences: PortfolioData['experiences'] }) => {
	return (
		<section id='experience' className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
			<SectionHeading
				eyebrow='Experience'
				title='Production systems with measurable impact'
				description='Role-by-role evidence of backend ownership, performance work, real-time delivery, and systems thinking.'
			/>
			<div className='space-y-6'>
				{experiences.map((experience) => (
					<article key={experience.id} className='rounded-2xl border border-[color:var(--line)] bg-[color:var(--boulevard-blue)] p-7'>
						<div className='flex flex-col gap-4 border-b border-[color:var(--line)] pb-6 lg:flex-row lg:items-end lg:justify-between'>
							<div>
								<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>{experience.company}</p>
								<h3 className='mt-3 text-2xl font-bold text-[var(--ink)]'>{experience.role}</h3>
								<p className='mt-3 max-w-3xl text-[var(--muted-ink)]'>{experience.summary}</p>
							</div>
							<div className='mono shrink-0 text-[10px] uppercase tracking-[0.2em] text-[var(--muted-ink)]'>
								<p>{experience.duration}</p>
								<p className='mt-1'>{experience.location}</p>
							</div>
						</div>
						<div className='mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]'>
							<ul className='space-y-3'>
								{experience.bullets.map((bullet) => (
									<li key={bullet} className='flex gap-3 text-[var(--muted-ink)]'>
										<span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]' />
										<span className='leading-7'>{bullet}</span>
									</li>
								))}
							</ul>
							<div className='flex flex-wrap content-start gap-2'>
								{experience.stack.map((item) => (
									<span
										key={item}
										className='mono rounded border border-[color:var(--line)] bg-[color:var(--signal-muted)] px-3 py-1.5 text-[10px] tracking-[0.1em] text-[color:var(--accent)]'
									>
										{item}
									</span>
								))}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default ExperienceSection;
