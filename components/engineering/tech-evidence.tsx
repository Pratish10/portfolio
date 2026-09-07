import type { TechnologyEvidence } from '@/types/portfolio-types';

const categoryLabels: Record<TechnologyEvidence['category'], string> = {
	backend: 'Backend',
	cloud: 'Cloud',
	frontend: 'Frontend',
	database: 'Database',
	devops: 'DevOps',
	integration: 'Integration',
};

const TechEvidenceCard = ({ evidence }: { evidence: TechnologyEvidence }) => {
	return (
		<article
			className={`rounded-lg border p-4 transition ${
				evidence.placeholder
					? 'border-[color:var(--line)] bg-transparent opacity-50'
					: 'border-[color:var(--line)] bg-[color:var(--boulevard-blue)] hover:border-[color:var(--line-strong)]'
			}`}
		>
			<div className='flex items-start justify-between gap-2'>
				<h4 className='mono text-xs font-medium tracking-[0.06em] text-[var(--ink)]'>{evidence.technology}</h4>
				<span className='mono shrink-0 text-[9px] uppercase tracking-wider text-[color:var(--accent)]'>
					{categoryLabels[evidence.category]}
				</span>
			</div>

			<p className={`mt-2 text-xs leading-5 ${evidence.placeholder ? 'italic text-[var(--muted-ink)]' : 'text-[var(--muted-ink)]'}`}>
				{evidence.whatBuilt}
			</p>

			{evidence.usedIn.length > 0 && (
				<div className='mt-3 flex flex-wrap gap-1'>
					<span className='mono text-[9px] tracking-[0.15em] text-[var(--muted-ink)]/50'>in:</span>
					{evidence.usedIn.map((project) => (
						<span key={project} className='mono text-[9px] tracking-[0.06em] text-[color:var(--accent)]'>
							{project}
						</span>
					))}
				</div>
			)}

			{evidence.placeholder && <p className='mono mt-2 text-[9px] uppercase tracking-[0.15em] text-[var(--muted-ink)]/40'>skill in progress</p>}
		</article>
	);
};

const TechEvidenceGrid = ({
	technologyEvidence,
	category,
}: {
	technologyEvidence: TechnologyEvidence[];
	category?: TechnologyEvidence['category'];
}) => {
	const filtered = category ? technologyEvidence.filter((t) => t.category === category) : technologyEvidence;
	return (
		<div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-3'>
			{filtered.map((evidence) => (
				<TechEvidenceCard key={evidence.technology} evidence={evidence} />
			))}
		</div>
	);
};

export { TechEvidenceCard, TechEvidenceGrid };
