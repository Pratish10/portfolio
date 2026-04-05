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
			<div className='space-y-8'>
				{experiences.map((experience) => (
					<article key={experience.id} className='rounded-[2rem] border border-white/10 bg-white/5 p-7'>
						<div className='flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between'>
							<div>
								<p className='text-sm uppercase tracking-[0.3em] text-amber-200/75'>{experience.company}</p>
								<h3 className='mt-3 text-3xl font-semibold text-white'>{experience.role}</h3>
								<p className='mt-3 max-w-3xl text-white/72'>{experience.summary}</p>
							</div>
							<div className='text-sm uppercase tracking-[0.24em] text-white/45'>
								<p>{experience.duration}</p>
								<p className='mt-2'>{experience.location}</p>
							</div>
						</div>
						<div className='mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]'>
							<ul className='space-y-3'>
								{experience.bullets.map((bullet) => (
									<li key={bullet} className='flex gap-3 text-white/74'>
										<span className='mt-2 h-2 w-2 rounded-full bg-amber-200' />
										<span>{bullet}</span>
									</li>
								))}
							</ul>
							<div className='flex flex-wrap gap-2'>
								{experience.stack.map((item) => (
									<span key={item} className='rounded-full border border-white/10 px-3 py-2 text-sm text-white/72'>
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
