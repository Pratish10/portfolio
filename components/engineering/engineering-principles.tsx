import type { EngineeringPrinciple } from '@/types/portfolio-types';
import { Eye, Layers, Shield, Wrench, Zap } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
	Wrench,
	Zap,
	Eye,
	Shield,
	Layers,
};

const EngineeringPrinciples = ({ principles }: { principles: EngineeringPrinciple[] }) => {
	return (
		<div className='grid gap-4 sm:grid-cols-2'>
			{principles.map((principle) => {
				const Icon = iconMap[principle.icon] ?? Zap;
				return (
					<article key={principle.name} className='rounded-lg border border-[color:var(--line)] bg-[color:var(--boulevard-blue)] p-5'>
						<div className='flex items-center gap-3'>
							<span className='flex h-8 w-8 items-center justify-center rounded border border-[color:var(--line)] bg-[color:var(--signal-muted)]'>
								<Icon className='h-3.5 w-3.5 text-[color:var(--accent)]' />
							</span>
							<h4 className='mono text-xs font-medium tracking-[0.12em] text-[color:var(--accent)]'>{principle.name.toUpperCase()}</h4>
						</div>
						<p className='mt-3 text-sm leading-6 text-[var(--muted-ink)]'>{principle.statement}</p>
						<p className='mono mt-3 border-t border-[color:var(--line)] pt-3 text-[9px] italic leading-5 tracking-[0.05em] text-[color:var(--warm-sand)]'>
							{principle.evidence}
						</p>
					</article>
				);
			})}
		</div>
	);
};

export default EngineeringPrinciples;
