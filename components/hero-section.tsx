import { Button } from '@/components/ui/button';
import type { PortfolioData } from '@/types/portfolio-types';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const iconMap = {
	Github,
	Linkedin,
	Mail,
};

const HeroSection = ({
	personal,
	cta,
	socialLinks,
}: {
	personal: PortfolioData['personal'];
	cta: PortfolioData['cta'];
	socialLinks: PortfolioData['socialLinks'];
}) => {
	const profileImageSrc = personal.profileImage.startsWith('/')
		? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${personal.profileImage}`
		: personal.profileImage;

	return (
		<section className='mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-20'>
			<div className='space-y-8'>
				<div className='space-y-5'>
					<h1 className='max-w-4xl text-5xl leading-[0.9] text-white sm:text-6xl lg:text-7xl'>{personal.title}</h1>
					<p className='max-w-2xl text-lg leading-8 text-[var(--muted-ink)]'>{personal.summary}</p>
				</div>
				<div className='flex flex-wrap items-center gap-4 text-sm text-amber-100/80'>
					<span className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2'>
						<MapPin className='h-4 w-4' />
						{personal.location}
					</span>
					<span className='rounded-full border border-white/10 bg-white/5 px-4 py-2'>{personal.availability}</span>
				</div>
				<div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
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
			</div>
			<div className='grid gap-5'>
				<div className='overflow-hidden rounded-[2rem] border border-[color:var(--line-strong)] bg-white/6 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.2)]'>
					<div className='rounded-[1.5rem] border border-white/10 bg-[#18323b] p-4'>
						<Image
							src={profileImageSrc}
							alt={`${personal.fullName} portrait`}
							width={720}
							height={840}
							priority
							className='h-[420px] w-full rounded-[1.2rem] object-cover object-top'
						/>
					</div>
				</div>
				<div className='rounded-[2rem] border border-white/10 bg-white/5 p-6'>
					<p className='text-sm uppercase tracking-[0.32em] text-amber-200/75'>Profile links</p>
					<ul className='mt-5 space-y-3'>
						{socialLinks.map((link) => {
							const Icon = iconMap[link.icon as keyof typeof iconMap] ?? Mail;
							return (
								<li key={link.platform}>
									<a
										href={link.url}
										target={link.url.startsWith('mailto:') ? undefined : '_blank'}
										rel={link.url.startsWith('mailto:') ? undefined : 'noreferrer'}
										className='flex items-center justify-between rounded-2xl border border-white/10 px-4 py-4 text-white/82 transition hover:border-[color:var(--line-strong)] hover:bg-white/8'
									>
										<span className='inline-flex items-center gap-3'>
											<Icon className='h-4 w-4 text-[var(--warm-sand)]' />
											{link.platform}
										</span>
										<span className='text-xs uppercase tracking-[0.3em] text-white/45'>Open</span>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
