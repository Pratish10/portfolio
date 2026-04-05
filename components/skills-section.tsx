import SectionHeading from '@/components/section-heading';
import type { PortfolioData } from '@/types/portfolio-types';

const SkillsSection = ({ capabilityGroups }: { capabilityGroups: PortfolioData['capabilityGroups'] }) => {
	return (
		<section id='capabilities' className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
			<SectionHeading
				eyebrow='Capabilities'
				title='Capability Clusters'
				description='A recruiter-readable grouping of the tools and technical areas that define current role fit.'
			/>
			<div className='grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
				{capabilityGroups.map((group) => (
					<article key={group.title} className='rounded-[2rem] border border-white/10 bg-white/5 p-6'>
						<h3 className='text-2xl font-semibold text-white'>{group.title}</h3>
						<ul className='mt-4 flex flex-wrap gap-2'>
							{group.items.map((item) => (
								<li key={item} className='rounded-full border border-white/10 px-3 py-2 text-sm text-white/72'>
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
