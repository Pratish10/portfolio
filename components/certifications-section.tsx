import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/section-heading';
import type { PortfolioData } from '@/types/portfolio-types';

const CertificationsSection = ({
	certifications,
	education,
	recognition,
}: {
	certifications: PortfolioData['certifications'];
	education: PortfolioData['education'];
	recognition: PortfolioData['recognition'];
}) => {
	return (
		<section id='credentials' className='border-y border-white/10 bg-black/15'>
			<div className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
				<SectionHeading
					eyebrow='Credentials'
					title='Education, certifications, and recognition'
					description='Supporting proof for recruiters who need verification beyond the project narrative.'
				/>
				<div className='grid gap-6 lg:grid-cols-[0.9fr_1.1fr]'>
					<article className='rounded-[2rem] border border-white/10 bg-white/5 p-7'>
						<p className='text-sm uppercase tracking-[0.3em] text-amber-200/75'>Education</p>
						<h3 className='mt-3 text-2xl font-semibold text-white'>{education.degree}</h3>
						<p className='mt-2 text-white/72'>{education.school}</p>
						<p className='mt-4 text-sm uppercase tracking-[0.24em] text-white/45'>{education.duration}</p>
						<p className='mt-2 text-white/68'>{education.score}</p>
						<div className='mt-8 border-t border-white/10 pt-6'>
							<p className='text-sm uppercase tracking-[0.3em] text-amber-200/75'>Recognition</p>
							<ul className='mt-4 space-y-3 text-white/72'>
								{recognition.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					</article>
					<div className='grid gap-6'>
						{certifications.map((certification) => (
							<article key={certification.id} className='rounded-[2rem] border border-white/10 bg-white/5 p-6'>
								<p className='text-sm uppercase tracking-[0.3em] text-cyan-200/75'>{certification.issuer}</p>
								<h3 className='mt-3 text-2xl font-semibold text-white'>{certification.title}</h3>
								<p className='mt-3 text-white/68'>{certification.date}</p>
								{certification.href ? (
									<Button asChild variant='outline' className='mt-5 rounded-full bg-transparent'>
										<a href={certification.href} target='_blank' rel='noreferrer'>
											View Credential
										</a>
									</Button>
								) : null}
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CertificationsSection;
