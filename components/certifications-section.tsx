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
		<section id='credentials' className='border-y border-[color:var(--line)] bg-[color:var(--signal-muted)]'>
			<div className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
				<SectionHeading
					eyebrow='Credentials'
					title='Education, certifications, and recognition'
					description='Supporting proof for recruiters who need verification beyond the project narrative.'
				/>
				<div className='grid gap-5 lg:grid-cols-[0.9fr_1.1fr]'>
					<article className='rounded-xl border border-[color:var(--line)] bg-[color:var(--boulevard-blue)] p-6'>
						<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>Education</p>
						<h3 className='mt-3 text-xl font-bold text-[var(--ink)]'>{education.degree}</h3>
						<p className='mt-2 text-[var(--muted-ink)]'>{education.school}</p>
						<p className='mono mt-4 text-[10px] uppercase tracking-[0.24em] text-[var(--muted-ink)]'>{education.duration}</p>
						<p className='mono mt-1 text-[10px] tracking-[0.1em] text-[color:var(--accent)]'>{education.score}</p>
						<div className='mt-8 border-t border-[color:var(--line)] pt-6'>
							<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>Recognition</p>
							<ul className='mt-4 space-y-3 text-sm text-[var(--muted-ink)]'>
								{recognition.map((item) => (
									<li key={item} className='flex items-start gap-3'>
										<span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]' />
										{item}
									</li>
								))}
							</ul>
						</div>
					</article>
					<div className='grid gap-4'>
						{certifications.map((certification) => (
							<article
								key={certification.id}
								className='rounded-xl border border-[color:var(--line)] bg-[color:var(--boulevard-blue)] p-5'
							>
								<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>{certification.issuer}</p>
								<h3 className='mt-2 text-lg font-bold text-[var(--ink)]'>{certification.title}</h3>
								<p className='mono mt-2 text-[10px] tracking-[0.1em] text-[var(--muted-ink)]'>{certification.date}</p>
								{certification.href ? (
									<Button asChild variant='outline' size='sm' className='mt-4'>
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
