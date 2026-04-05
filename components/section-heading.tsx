const SectionHeading = ({
	eyebrow,
	title,
	description,
}: {
	eyebrow: string;
	title: string;
	description?: string;
}) => {
	return (
		<header className='mb-10 space-y-4'>
			<p className='text-sm uppercase tracking-[0.35em] text-cyan-200/75'>{eyebrow}</p>
			<h2 className='text-4xl font-semibold text-white sm:text-5xl'>{title}</h2>
			{description ? <p className='max-w-2xl text-base leading-7 text-white/68'>{description}</p> : null}
		</header>
	);
};

export default SectionHeading;
