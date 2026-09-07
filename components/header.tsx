import type { CtaLink } from '@/types/portfolio-types';
import { Button } from '@/components/ui/button';

const navItems = [
	{ label: 'Work', href: '#systems' },
	{ label: 'Engineering', href: '#engineering' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Contact', href: '#contact' },
];

const Header = ({ cta }: { cta: CtaLink }) => {
	return (
		<header className='sticky top-0 z-40 border-b border-[color:var(--line)] bg-[#0c1210]/90 backdrop-blur-xl'>
			<div className='mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8'>
				<div>
					<a href='#top' className='mono text-sm tracking-[0.25em] text-[color:var(--accent)]'>
						PRATISH NINAWE
					</a>
					<p className='mono mt-1 hidden text-[10px] tracking-[0.18em] text-[var(--muted-ink)] sm:block'>BACKEND · CLOUD · FULL-STACK</p>
				</div>
				<nav className='hidden items-center gap-6 md:flex'>
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className='mono text-xs tracking-[0.15em] text-[var(--muted-ink)] transition hover:text-[color:var(--accent)]'
						>
							{item.label}
						</a>
					))}
				</nav>
				<Button asChild size='sm'>
					<a href={cta.href} target='_blank' rel='noreferrer'>
						{cta.label}
					</a>
				</Button>
			</div>
		</header>
	);
};

export default Header;
