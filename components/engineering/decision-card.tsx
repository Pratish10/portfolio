import type { EngineeringDecision } from '@/types/portfolio-types';
import { CheckCircle, GitBranch } from 'lucide-react';

const DecisionCard = ({ decision }: { decision: EngineeringDecision }) => {
	const chosenA = decision.chosen === 'A';
	const chosenB = decision.chosen === 'B';

	return (
		<article className='rounded-xl border border-[color:var(--line-strong)] bg-[color:var(--code-bg)] p-6'>
			<div className='flex items-start gap-3'>
				<GitBranch className='mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]' />
				<div>
					<p className='mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent)]'>Engineering decision</p>
					<h3 className='mt-2 text-lg font-bold text-[var(--ink)]'>{decision.title}</h3>
				</div>
			</div>

			<p className='mt-5 text-sm leading-6 text-[var(--muted-ink)]'>
				<span className='mono text-[10px] uppercase tracking-[0.15em] text-[var(--ink)]'>Situation: </span>
				{decision.situation}
			</p>

			<div className='mt-5 grid gap-3 sm:grid-cols-2'>
				<div
					className={`rounded-lg border p-4 ${
						chosenA ? 'border-[color:var(--success)] bg-[color:var(--success)]/8' : 'border-[color:var(--line)] bg-transparent'
					}`}
				>
					<div className='flex items-center justify-between gap-2'>
						<p className='mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-ink)]'>Option A</p>
						{chosenA && (
							<span className='mono inline-flex items-center gap-1 text-[9px] uppercase tracking-widest text-[color:var(--success)]'>
								<CheckCircle className='h-3 w-3' />
								Chosen
							</span>
						)}
					</div>
					<p className='mt-2 text-sm leading-6 text-[var(--ink)]'>{decision.optionA}</p>
				</div>

				<div
					className={`rounded-lg border p-4 ${
						chosenB ? 'border-[color:var(--success)] bg-[color:var(--success)]/8' : 'border-[color:var(--line)] bg-transparent'
					}`}
				>
					<div className='flex items-center justify-between gap-2'>
						<p className='mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-ink)]'>Option B</p>
						{chosenB && (
							<span className='mono inline-flex items-center gap-1 text-[9px] uppercase tracking-widest text-[color:var(--success)]'>
								<CheckCircle className='h-3 w-3' />
								Chosen
							</span>
						)}
					</div>
					<p className='mt-2 text-sm leading-6 text-[var(--ink)]'>{decision.optionB}</p>
				</div>
			</div>

			<div className='mt-5 space-y-2.5 border-t border-[color:var(--line)] pt-5'>
				<p className='text-sm leading-6 text-[var(--muted-ink)]'>
					<span className='mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink)]'>Rationale: </span>
					{decision.rationale}
				</p>
				<p className='text-sm leading-6 text-[var(--muted-ink)]'>
					<span className='mono text-[9px] uppercase tracking-[0.15em] text-[color:var(--warm-sand)]'>Trade-off: </span>
					{decision.tradeoff}
				</p>
				<p className='text-sm leading-6 text-[var(--muted-ink)]'>
					<span className='mono text-[9px] uppercase tracking-[0.15em] text-[color:var(--success)]'>Result: </span>
					{decision.result}
				</p>
			</div>
		</article>
	);
};

export default DecisionCard;
