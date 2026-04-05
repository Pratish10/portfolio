import type { CtaLink } from '@/types/portfolio-types';
import { Button } from '@/components/ui/button';

const navItems = [
	{ label: 'Experience', href: '#experience' },
	{ label: 'Selected Systems', href: '#systems' },
	{ label: 'Capability Clusters', href: '#capabilities' },
	{ label: 'Credentials', href: '#credentials' },
	{ label: 'Contact', href: '#contact' },
];

const Header = ({ cta }: { cta: CtaLink }) => {
	return (
		<header className='sticky top-0 z-40 border-b border-white/10 bg-[#13242bcc]/80 backdrop-blur-xl'>
			<div className='mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8'>
				<div>
					<a href='#top' className='text-sm uppercase tracking-[0.38em] text-amber-200/80'>
						Pratish Ninawe
					</a>
					<p className='mt-1 hidden text-xs uppercase tracking-[0.22em] text-white/40 sm:block'>Backend, cloud, full-stack delivery</p>
				</div>
				<nav className='hidden items-center gap-6 md:flex'>
					{navItems.map((item) => (
						<a key={item.href} href={item.href} className='text-sm text-white/75 transition hover:text-[var(--warm-sand)]'>
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
