import { Button } from '@/components/ui/button';
import type { PortfolioData } from '@/types/portfolio-types';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const iconMap = {
	Github,
	Linkedin,
	Mail,
};

const statusBadges = [
	{ label: 'STATUS', value: 'AVAILABLE' },
	{ label: 'LOCATION', value: 'BENGALURU, IN' },
	{ label: 'ROLE', value: 'BACKEND + AZURE INTEGRATION' },
];

const HeroSection = ({
	personal,
	cta,
	socialLinks,
}: {
	personal: PortfolioData['personal'];
	cta: PortfolioData['cta'];
	socialLinks: PortfolioData['socialLinks'];
}) => {
	return (
		<section className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24'>
			{/* Status bar */}
			<div className='mb-10 flex flex-wrap items-center gap-3'>
				{statusBadges.map((badge) => (
					<span
						key={badge.label}
						className='mono inline-flex items-center gap-2 rounded border border-[color:var(--line-strong)] bg-[color:var(--signal-muted)] px-3 py-1.5 text-[10px] tracking-[0.2em]'
					>
						<span className='text-[var(--muted-ink)]'>{badge.label}:</span>
						<span className='text-[color:var(--accent)]'>{badge.value}</span>
					</span>
				))}
				<span className='mono flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-[var(--muted-ink)]'>
					<span className='h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--accent)]' />
					OPEN TO OPPORTUNITIES
				</span>
			</div>

			{/* Main headline */}
			<div className='max-w-4xl space-y-5'>
				<h1 className='text-5xl font-bold leading-[1.05] text-[var(--ink)] sm:text-6xl lg:text-7xl xl:text-8xl'>{personal.fullName}</h1>
				<p className='mono text-lg tracking-[0.08em] text-[color:var(--accent)] sm:text-xl'>{personal.title}</p>
				<p className='max-w-2xl text-lg leading-8 text-[var(--muted-ink)]'>{personal.summary}</p>
			</div>

			{/* Location */}
			<div className='mt-6 flex items-center gap-2 text-sm text-[var(--muted-ink)]'>
				<MapPin className='h-4 w-4 text-[color:var(--accent)]' />
				{personal.location}
			</div>

			{/* CTAs */}
			<div className='mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
				<Button asChild size='lg'>
					<a href={cta.primary.href} target='_blank' rel='noreferrer'>
						<Download className='mr-2 h-4 w-4' />
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

			{/* Social links + stack snippet */}
			<div className='mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
				{/* Social links */}
				<div className='flex flex-wrap gap-3'>
					{socialLinks.map((link) => {
						const Icon = iconMap[link.icon as keyof typeof iconMap] ?? Mail;
						return (
							<a
								key={link.platform}
								href={link.url}
								target={link.url.startsWith('mailto:') ? undefined : '_blank'}
								rel={link.url.startsWith('mailto:') ? undefined : 'noreferrer'}
								aria-label={link.platform}
								className='flex items-center gap-2 rounded border border-[color:var(--line)] bg-white/3 px-4 py-2.5 text-sm text-[var(--muted-ink)] transition hover:border-[color:var(--line-strong)] hover:text-[var(--ink)]'
							>
								<Icon className='h-4 w-4 text-[color:var(--accent)]' />
								{link.platform}
							</a>
						);
					})}
				</div>

				{/* Stack snippet */}
				<div className='rounded-lg border border-[color:var(--line)] bg-[color:var(--code-bg)] px-5 py-4 lg:min-w-[300px]'>
					<p className='mono mb-3 text-[10px] tracking-[0.2em] text-[var(--muted-ink)]'>{`// primary stack`}</p>
					<div className='mono space-y-1.5 text-xs'>
						<p>
							<span className='text-[color:var(--accent)]'>backend</span>
							<span className='text-[var(--muted-ink)]'> → </span>
							<span className='text-[var(--ink)]'>.NET Core (C#) · ASP.NET · Python</span>
						</p>
						<p>
							<span className='text-[color:var(--accent)]'>azure</span>
							<span className='text-[var(--muted-ink)]'> → </span>
							<span className='text-[var(--ink)]'>Logic Apps · Service Bus · Bicep</span>
						</p>
						<p>
							<span className='text-[color:var(--accent)]'>frontend</span>
							<span className='text-[var(--muted-ink)]'> → </span>
							<span className='text-[var(--ink)]'>React · TypeScript · WebSockets</span>
						</p>
						<p>
							<span className='text-[color:var(--accent)]'>data</span>
							<span className='text-[var(--muted-ink)]'> → </span>
							<span className='text-[var(--ink)]'>MongoDB · PostgreSQL · Blob Storage</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
