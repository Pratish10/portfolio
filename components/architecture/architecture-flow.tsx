'use client';

import { useState } from 'react';
import SectionHeading from '@/components/section-heading';
import type { ArchitectureNode } from '@/types/portfolio-types';
import { Cloud, Database, Globe, Server, X, Zap } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
	Globe,
	Zap,
	Server,
	Cloud,
	Database,
};

const ArchitectureFlow = ({ nodes }: { nodes: ArchitectureNode[] }) => {
	const [activeId, setActiveId] = useState<string | null>(null);
	const activeNode = nodes.find((n) => n.id === activeId) ?? null;

	const toggle = (id: string) => setActiveId((prev) => (prev === id ? null : id));

	return (
		<section id='architecture' className='mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8'>
			<SectionHeading
				eyebrow='Architecture'
				title='How systems connect'
				description='The layers I build across — click any node to see the technologies and projects at that layer.'
			/>

			<div className='mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]'>
				{/* Flow diagram */}
				<div className='flex flex-col items-center gap-0'>
					{nodes.map((node, index) => {
						const Icon = iconMap[node.icon] ?? Globe;
						const isActive = activeId === node.id;

						return (
							<div key={node.id} className='flex w-full flex-col items-center'>
								<button
									onClick={() => toggle(node.id)}
									aria-pressed={isActive}
									aria-label={`${node.label} — click to ${isActive ? 'close' : 'expand'} details`}
									className={`group w-full max-w-xs rounded-lg border px-5 py-3.5 text-left transition-all duration-150 ${
										isActive
											? 'border-[color:var(--accent)] bg-[color:var(--signal-muted)]'
											: 'border-[color:var(--line)] bg-[color:var(--boulevard-blue)] hover:border-[color:var(--accent)] hover:bg-[color:var(--signal-muted)]'
									}`}
								>
									<div className='flex items-center gap-3'>
										<span
											className={`flex h-8 w-8 items-center justify-center rounded border transition ${
												isActive ? 'border-[color:var(--accent)] bg-[color:var(--signal-muted)]' : 'border-[color:var(--line)] bg-transparent'
											}`}
										>
											<Icon className={`h-3.5 w-3.5 ${isActive ? 'text-[color:var(--accent)]' : 'text-[var(--muted-ink)]'}`} />
										</span>
										<span className={`mono text-xs tracking-[0.12em] ${isActive ? 'text-[color:var(--accent)]' : 'text-[var(--ink)]'}`}>
											{node.label.toUpperCase()}
										</span>
									</div>
									<div className='mt-2 flex flex-wrap gap-1.5'>
										{node.technologies.slice(0, 3).map((tech) => (
											<span key={tech} className='mono text-[9px] tracking-[0.08em] text-[var(--muted-ink)]'>
												{tech}
											</span>
										))}
										{node.technologies.length > 3 && (
											<span className='mono text-[9px] text-[var(--muted-ink)]'>+{node.technologies.length - 3}</span>
										)}
									</div>
								</button>

								{index < nodes.length - 1 && (
									<div className='flex flex-col items-center py-0.5'>
										<div className='h-4 w-px bg-[color:var(--accent)]/25' />
										<span className='mono text-[9px] text-[color:var(--accent)]/40'>│</span>
									</div>
								)}
							</div>
						);
					})}
				</div>

				{/* Detail panel */}
				<div className='relative'>
					{activeNode ? (
						<div className='sticky top-24 rounded-xl border border-[color:var(--accent)] bg-[color:var(--code-bg)] p-6'>
							<div className='flex items-start justify-between gap-4'>
								<div>
									<p className='mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--accent)]'>{activeNode.label}</p>
									<h3 className='mt-2 text-2xl font-bold text-[var(--ink)]'>Layer detail</h3>
								</div>
								<button
									onClick={() => setActiveId(null)}
									aria-label='Close detail panel'
									className='rounded border border-[color:var(--line)] p-1.5 text-[var(--muted-ink)] transition hover:border-[color:var(--line-strong)] hover:text-[var(--ink)]'
								>
									<X className='h-4 w-4' />
								</button>
							</div>

							<p className='mt-5 text-sm leading-7 text-[var(--muted-ink)]'>{activeNode.description}</p>

							<div className='mt-5'>
								<p className='mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--accent)]'>Technologies</p>
								<div className='mt-3 flex flex-wrap gap-2'>
									{activeNode.technologies.map((tech) => (
										<span
											key={tech}
											className='mono rounded border border-[color:var(--line-strong)] bg-[color:var(--signal-muted)] px-2.5 py-1 text-[10px] tracking-[0.08em] text-[color:var(--accent)]'
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{activeNode.relatedProjects.length > 0 && (
								<div className='mt-5'>
									<p className='mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--accent)]'>Used in</p>
									<div className='mt-3 flex flex-wrap gap-2'>
										{activeNode.relatedProjects.map((project) => (
											<span
												key={project}
												className='mono rounded border border-[color:var(--line)] bg-transparent px-2.5 py-1 text-[10px] tracking-[0.08em] text-[var(--ink)]'
											>
												{project}
											</span>
										))}
									</div>
								</div>
							)}
						</div>
					) : (
						<div className='flex h-full min-h-[260px] items-center justify-center rounded-xl border border-dashed border-[color:var(--line)] p-8 text-center'>
							<div>
								<p className='mono text-xs tracking-[0.1em] text-[var(--muted-ink)]'>Select a layer to see details</p>
								<p className='mono mt-2 text-[9px] tracking-[0.2em] text-[var(--muted-ink)]/50'>CLICK ANY NODE →</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default ArchitectureFlow;
