import SectionHeading from '@/components/section-heading';
import DecisionCard from '@/components/engineering/decision-card';
import { TechEvidenceGrid } from '@/components/engineering/tech-evidence';
import EngineeringPrinciples from '@/components/engineering/engineering-principles';
import type { PortfolioData } from '@/types/portfolio-types';

type Props = {
	technologyEvidence: PortfolioData['technologyEvidence'];
	engineeringDecisions: PortfolioData['engineeringDecisions'];
	engineeringPrinciples: PortfolioData['engineeringPrinciples'];
};

const EngineeringDepthSection = ({ technologyEvidence, engineeringDecisions, engineeringPrinciples }: Props) => {
	return (
		<section id='engineering' className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
			{/* Technology Evidence */}
			<SectionHeading
				eyebrow='Engineering'
				title='Technology with evidence'
				description='Every technology linked to a real project. No skill bars — only what was built and where.'
			/>
			<TechEvidenceGrid technologyEvidence={technologyEvidence} />

			{/* Engineering Decisions */}
			<div className='mt-20'>
				<SectionHeading
					eyebrow='Decisions'
					title='Engineering judgment'
					description='Real situations. Real trade-offs. The decisions that shaped production systems.'
				/>
				<div className='grid gap-6 xl:grid-cols-2'>
					{engineeringDecisions.map((decision, index) => (
						<DecisionCard key={index} decision={decision} />
					))}
				</div>
			</div>

			{/* Engineering Principles */}
			<div className='mt-20'>
				<SectionHeading eyebrow='Principles' title='How I think' description='Engineering values shaped by real production experience.' />
				<EngineeringPrinciples principles={engineeringPrinciples} />
			</div>
		</section>
	);
};

export default EngineeringDepthSection;
