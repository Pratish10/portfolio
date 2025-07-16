'use client';

import { motion, easeOut } from 'motion/react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	liveUrl: string;
	githubUrl: string;
	featured: boolean;
	category: string;
}

interface ProjectsSectionProps {
	projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: easeOut,
			},
		},
	};

	return (
		<section id='projects' className='py-20 bg-white dark:bg-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 dark:from-white dark:to-purple-200 bg-clip-text text-transparent mb-4'>
						Featured Projects
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>A showcase of my recent work and personal projects</p>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					{projects.map((project) => (
						<motion.div key={project.id} variants={itemVariants}>
							<Card className='group overflow-hidden hover:shadow-2xl transition-all duration-300 h-full'>
								<div className='relative overflow-hidden'>
									<img
										src={project.image || '/placeholder.svg'}
										alt={project.title}
										className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
									/>
									{project.featured && (
										<div className='absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center'>
											<Star className='w-4 h-4 mr-1' />
											Featured
										</div>
									)}
									<div className='absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
										{project.category}
									</div>
								</div>
								<CardContent className='p-6'>
									<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>{project.title}</h3>
									<p className='text-gray-600 dark:text-gray-400 mb-4 leading-relaxed'>{project.description}</p>

									<div className='mb-6'>
										<div className='flex flex-wrap gap-2'>
											{project.technologies.map((tech, idx) => (
												<span
													key={idx}
													className='px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm'
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									<div className='flex gap-4'>
										<Button
											asChild
											className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
										>
											<a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
												<ExternalLink className='w-4 h-4 mr-2' />
												Live Demo
											</a>
										</Button>
										<Button variant='outline' asChild className='flex-1 bg-transparent'>
											<a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
												<Github className='w-4 h-4 mr-2' />
												Code
											</a>
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectsSection;
