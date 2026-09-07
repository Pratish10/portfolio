import SectionHeading from '@/components/section-heading';
import type { OpenSourceContribution } from '@/types/portfolio-types';
import { GitPullRequest, ExternalLink } from 'lucide-react';

const OpenSourceSection = ({ contributions }: { contributions: OpenSourceContribution[] }) => {
	if (contributions.length === 0) return null;

	return (
		<section id='oss' className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
			<SectionHeading
				eyebrow='Open Source'
				title='Contributing beyond the day job'
				description='Production contributions to external codebases — collaborative engineering outside of employed work.'
			/>
			<div className='grid gap-4 lg:grid-cols-2'>
				{contributions.map((contribution) => (
					<article
						key={contribution.project}
						className='rounded-xl border border-[color:var(--line)] bg-[color:var(--boulevard-blue)] p-6 transition hover:border-[color:var(--line-strong)]'
					>
						<div className='flex items-start gap-3'>
							<span className='flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[color:var(--line)] bg-[color:var(--signal-muted)]'>
								<GitPullRequest className='h-3.5 w-3.5 text-[color:var(--accent)]' />
							</span>
							<div className='min-w-0'>
								<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>{contribution.organization}</p>
								<h3 className='mt-1 text-lg font-bold text-[var(--ink)]'>{contribution.project}</h3>
							</div>
						</div>
						<p className='mt-5 text-sm leading-7 text-[var(--muted-ink)]'>{contribution.contribution}</p>
						<div className='mt-5 flex flex-wrap gap-4'>
							<a
								href={contribution.url}
								target='_blank'
								rel='noreferrer'
								className='mono inline-flex items-center gap-1.5 text-[10px] tracking-[0.12em] text-[color:var(--accent)] transition hover:text-[color:var(--coral)]'
							>
								<ExternalLink className='h-3 w-3' />
								VISIT PROJECT
							</a>
							{contribution.changelogUrl && (
								<a
									href={contribution.changelogUrl}
									target='_blank'
									rel='noreferrer'
									className='mono inline-flex items-center gap-1.5 text-[10px] tracking-[0.12em] text-[var(--muted-ink)] transition hover:text-[var(--ink)]'
								>
									VIEW CHANGELOG
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default OpenSourceSection;
