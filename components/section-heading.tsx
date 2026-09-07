const SectionHeading = ({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) => {
	return (
		<header className='mb-10 space-y-4'>
			<p className='mono text-[10px] uppercase tracking-[0.35em] text-[color:var(--accent)]'>{eyebrow}</p>
			<h2 className='text-4xl font-bold text-[var(--ink)] sm:text-5xl'>{title}</h2>
			{description ? <p className='max-w-2xl text-base leading-7 text-[var(--muted-ink)]'>{description}</p> : null}
		</header>
	);
};

export default SectionHeading;
