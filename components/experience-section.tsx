'use client';

import { motion, easeOut } from 'motion/react';
import { MapPin, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Experience {
	id: number;
	company: string;
	position: string;
	duration: string;
	location: string;
	description: string;
	technologies: string[];
	achievements: string[];
}

interface ExperienceSectionProps {
	experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
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
		<section id='experience' className='py-20 bg-gray-50 dark:bg-gray-900'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-4'>
						Work Experience
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
						My professional journey and the impact I&apos;ve made
					</p>
				</motion.div>

				<motion.div className='space-y-8' variants={containerVariants} initial='hidden' whileInView='visible' viewport={{ once: true }}>
					{experiences.map((exp) => (
						<motion.div key={exp.id} variants={itemVariants}>
							<Card className='overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500'>
								<CardContent className='p-8'>
									<div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6'>
										<div className='flex-1'>
											<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>{exp.position}</h3>
											<h4 className='text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4'>{exp.company}</h4>
										</div>
										<div className='flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-gray-400'>
											<div className='flex items-center'>
												<Calendar className='w-4 h-4 mr-2' />
												{exp.duration}
											</div>
											<div className='flex items-center'>
												<MapPin className='w-4 h-4 mr-2' />
												{exp.location}
											</div>
										</div>
									</div>

									<p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed'>{exp.description}</p>

									<div className='mb-6'>
										<h5 className='font-semibold text-gray-900 dark:text-white mb-3 flex items-center'>
											<Award className='w-4 h-4 mr-2' />
											Key Achievements
										</h5>
										<ul className='space-y-2'>
											{exp.achievements.map((achievement, idx) => (
												<li key={idx} className='flex items-start'>
													<span className='w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
													<span className='text-gray-700 dark:text-gray-300'>{achievement}</span>
												</li>
											))}
										</ul>
									</div>

									<div>
										<h5 className='font-semibold text-gray-900 dark:text-white mb-3'>Technologies</h5>
										<div className='flex flex-wrap gap-2'>
											{exp.technologies.map((tech, idx) => (
												<span
													key={idx}
													className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium'
												>
													{tech}
												</span>
											))}
										</div>
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

export default ExperienceSection;
