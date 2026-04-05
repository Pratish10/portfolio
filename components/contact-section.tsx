import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/section-heading';
import type { PortfolioData } from '@/types/portfolio-types';

const ContactSection = ({ cta }: { cta: PortfolioData['cta'] }) => {
	return (
		<section id='contact' className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
			<div className='rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10'>
				<SectionHeading
					eyebrow='Next Step'
					title='Built for recruiter handoff'
					description='If the role values backend systems, cloud exposure, and full-stack delivery, the fastest path is to grab the resume or reach out directly.'
				/>
				<div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
					<Button asChild size='lg' className='rounded-full'>
						<a href={cta.primary.href} target='_blank' rel='noreferrer'>
							{cta.primary.label}
						</a>
					</Button>
					<Button asChild size='lg' variant='outline' className='rounded-full bg-transparent'>
						<a href={cta.secondary.href}>{cta.secondary.label}</a>
					</Button>
					<Button asChild size='lg' variant='ghost' className='rounded-full'>
						<a href={cta.tertiary.href} target='_blank' rel='noreferrer'>
							{cta.tertiary.label}
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
