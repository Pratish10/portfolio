const ImpactStrip = ({ stats }: { stats: { label: string; value: string }[] }) => {
	return (
		<section className='border-y border-white/10 bg-black/15'>
			<div className='mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8'>
				{stats.map((stat) => (
					<div key={stat.label} className='rounded-3xl border border-white/10 bg-white/5 px-5 py-6'>
						<p className='text-4xl font-semibold text-amber-200'>{stat.value}</p>
						<p className='mt-3 text-sm uppercase tracking-[0.24em] text-white/65'>{stat.label}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default ImpactStrip;
