import SectionHeading from '@/components/section-heading';
import type { PortfolioData } from '@/types/portfolio-types';

const SkillsSection = ({ capabilityGroups }: { capabilityGroups: PortfolioData['capabilityGroups'] }) => {
	return (
		<section id='capabilities' className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
			<SectionHeading
				eyebrow='Capabilities'
				title='Capability clusters'
				description='Grouped by domain — each cluster reflects tools actively used in production work.'
			/>
			<div className='grid gap-4 lg:grid-cols-2 xl:grid-cols-3'>
				{capabilityGroups.map((group) => (
					<article key={group.title} className='rounded-xl border border-[color:var(--line)] bg-[color:var(--boulevard-blue)] p-5'>
						<h3 className='mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--accent)]'>{group.title}</h3>
						<ul className='mt-4 flex flex-wrap gap-2'>
							{group.items.map((item) => (
								<li
									key={item}
									className='mono rounded border border-[color:var(--line)] bg-[color:var(--signal-muted)] px-3 py-1.5 text-[10px] tracking-[0.08em] text-[var(--ink)]'
								>
									{item}
								</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
};

export default SkillsSection;
