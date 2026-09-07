const ImpactStrip = ({ stats }: { stats: { label: string; value: string }[] }) => {
	return (
		<section className='border-y border-[color:var(--line)] bg-[color:var(--signal-muted)]'>
			<div className='mx-auto grid max-w-6xl gap-px px-5 py-0 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8'>
				{stats.map((stat, index) => (
					<div
						key={stat.label}
						className={`px-6 py-8 ${index < stats.length - 1 ? 'border-b border-[color:var(--line)] sm:border-b-0 sm:border-r' : ''}`}
					>
						<p className='mono text-4xl font-bold text-[color:var(--accent)]'>{stat.value}</p>
						<p className='mono mt-3 text-[10px] uppercase tracking-[0.24em] text-[var(--muted-ink)]'>{stat.label}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default ImpactStrip;
