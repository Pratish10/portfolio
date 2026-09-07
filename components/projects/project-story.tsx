import Link from 'next/link';
import { Button } from '@/components/ui/button';
import DecisionCard from '@/components/engineering/decision-card';
import type { EngineeringProject } from '@/types/portfolio-types';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ProjectStory = ({ project }: { project: EngineeringProject }) => {
	return (
		<main className='mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8'>
			{/* Back nav */}
			<Link href='/' className='mono inline-flex items-center gap-2 text-[10px] tracking-[0.15em] text-[var(--muted-ink)] transition hover:text-[color:var(--accent)]'>
				<ArrowLeft className='h-3.5 w-3.5' />
				BACK TO WORK
			</Link>

			{/* Header */}
			<div className='mt-8'>
				<p className='mono text-[10px] uppercase tracking-[0.32em] text-[color:var(--accent)]'>{project.tag}</p>
				<h1 className='mt-3 text-4xl font-bold text-[var(--ink)] sm:text-5xl lg:text-6xl'>{project.name}</h1>
				<p className='mt-5 text-lg leading-8 text-[var(--muted-ink)]'>{project.summary}</p>
			</div>

			{/* Metrics strip */}
			{project.metrics.length > 0 && (
				<div className='mt-8 flex flex-wrap gap-3'>
					{project.metrics.map((metric) => (
						<span
							key={metric}
							className='mono rounded border border-[color:var(--line-strong)] bg-[color:var(--signal-muted)] px-4 py-2 text-[10px] tracking-[0.1em] text-[color:var(--accent)]'
						>
							{metric}
						</span>
					))}
				</div>
			)}

			{/* Links */}
			{project.links.length > 0 && (
				<div className='mt-5 flex flex-wrap gap-3'>
					{project.links.map((link) => (
						<Button key={link.href} asChild variant='outline' size='sm'>
							<a href={link.href} target='_blank' rel='noreferrer'>
								{link.label}
							</a>
						</Button>
					))}
				</div>
			)}

			<div className='mt-10 h-px bg-[color:var(--line)]' />

			{/* Problem & Context */}
			<section className='mt-10 grid gap-8 sm:grid-cols-2'>
				<div>
					<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>The Problem</p>
					<p className='mt-4 leading-7 text-[var(--ink)]'>{project.problem}</p>
				</div>
				<div>
					<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>Context</p>
					<p className='mt-4 leading-7 text-[var(--ink)]'>{project.context}</p>
				</div>
			</section>

			{/* My Role */}
			<section className='mt-10 rounded-xl border border-[color:var(--line)] bg-[color:var(--boulevard-blue)] p-6'>
				<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--warm-sand)]'>My Role</p>
				<p className='mt-4 leading-7 text-[var(--ink)]'>{project.myRole}</p>
				<ul className='mt-5 space-y-3'>
					{project.responsibilities.map((r) => (
						<li key={r} className='flex items-start gap-3 text-[var(--muted-ink)]'>
							<CheckCircle className='mt-0.5 h-4 w-4 shrink-0 text-[color:var(--success)]' />
							<span className='text-sm leading-6'>{r}</span>
						</li>
					))}
				</ul>
			</section>

			{/* Technologies */}
			<section className='mt-10'>
				<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>Technologies</p>
				<div className='mt-4 flex flex-wrap gap-2'>
					{project.technologies.map((tech) => (
						<span
							key={tech}
							className='mono rounded border border-[color:var(--line-strong)] bg-[color:var(--signal-muted)] px-3 py-1.5 text-[10px] tracking-[0.08em] text-[color:var(--accent)]'
						>
							{tech}
						</span>
					))}
				</div>
			</section>

			{/* Architecture */}
			<section className='mt-10'>
				<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>Architecture</p>
				<div className='mt-4 rounded-xl border border-[color:var(--line-strong)] bg-[color:var(--code-bg)] p-6'>
					<p className='leading-8 text-[var(--ink)]'>{project.architecture}</p>
				</div>
			</section>

			{/* Engineering Decisions */}
			{project.decisions.length > 0 && (
				<section className='mt-10'>
					<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>Engineering Decisions</p>
					<div className='mt-5 space-y-5'>
						{project.decisions.map((decision, i) => (
							<DecisionCard key={i} decision={decision} />
						))}
					</div>
				</section>
			)}

			{/* Challenges */}
			{project.challenges.length > 0 && (
				<section className='mt-10'>
					<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>Challenges</p>
					<ul className='mt-4 space-y-3'>
						{project.challenges.map((challenge) => (
							<li key={challenge} className='flex items-start gap-3 text-sm leading-7 text-[var(--muted-ink)]'>
								<span className='mono mt-2.5 text-[color:var(--accent)]'>›</span>
								{challenge}
							</li>
						))}
					</ul>
				</section>
			)}

			{/* Outcome */}
			<section className='mt-10 rounded-xl border border-[color:var(--line-strong)] bg-[color:var(--boulevard-blue)] p-6'>
				<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>Outcome</p>
				<p className='mt-4 leading-7 text-[var(--ink)]'>{project.outcome}</p>
			</section>

			{/* Lessons Learned */}
			{project.lessonsLearned.length > 0 && (
				<section className='mt-10'>
					<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>Lessons Learned</p>
					<ul className='mt-4 space-y-3'>
						{project.lessonsLearned.map((lesson) => (
							<li key={lesson} className='flex items-start gap-3 leading-7 text-sm text-[var(--muted-ink)]'>
								<span className='mono mt-2 text-[color:var(--warm-sand)]'>—</span>
								{lesson}
							</li>
						))}
					</ul>
				</section>
			)}

			{/* Footer nav */}
			<div className='mt-16 border-t border-[color:var(--line)] pt-8'>
				<Link href='/' className='mono inline-flex items-center gap-2 text-[10px] tracking-[0.15em] text-[var(--muted-ink)] transition hover:text-[color:var(--accent)]'>
					<ArrowLeft className='h-3.5 w-3.5' />
					BACK TO ALL WORK
				</Link>
			</div>
		</main>
	);
};

export default ProjectStory;
