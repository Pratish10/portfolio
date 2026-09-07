import { Button } from '@/components/ui/button';
import VisitorCounter from '@/components/visitor-counter';
import type { PortfolioData } from '@/types/portfolio-types';

const ContactSection = ({ cta }: { cta: PortfolioData['cta'] }) => {
	return (
		<section id='contact' className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
			<div className='rounded-2xl border border-[color:var(--line)] bg-[color:var(--boulevard-blue)] p-8 sm:p-12'>
				<p className='mono text-[10px] uppercase tracking-[0.32em] text-[color:var(--accent)]'>Get in touch</p>
				<h2 className='mt-4 max-w-xl text-4xl font-bold text-[var(--ink)] sm:text-5xl'>Have a backend problem?</h2>
				<ul className='mt-6 space-y-2'>
					{[
						'Build an API?',
						'Connect two systems?',
						'Move data reliably?',
						'Design a backend architecture?',
						'Optimize a slow service?',
					].map((item) => (
						<li key={item} className='flex items-center gap-3 text-[var(--muted-ink)]'>
							<span className='mono text-[color:var(--accent)]'>›</span>
							{item}
						</li>
					))}
				</ul>
				<p className='mono mt-6 text-sm tracking-[0.1em] text-[color:var(--accent)]'>Let&apos;s talk.</p>
				<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
					<Button asChild size='lg'>
						<a href={cta.primary.href} target='_blank' rel='noreferrer'>
							{cta.primary.label}
						</a>
					</Button>
					<Button asChild size='lg' variant='outline'>
						<a href={cta.secondary.href}>{cta.secondary.label}</a>
					</Button>
					<Button asChild size='lg' variant='ghost'>
						<a href={cta.tertiary.href} target='_blank' rel='noreferrer'>
							{cta.tertiary.label}
						</a>
					</Button>
				</div>
				<VisitorCounter />
			</div>
		</section>
	);
};

export default ContactSection;
