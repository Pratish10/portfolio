'use client';

import { motion, easeOut } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';

interface Skill {
	name: string;
	icon: string;
	color: string;
}

interface SkillsSectionProps {
	skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: easeOut,
			},
		},
	};

	const cardVariants = {
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

	const getColorClasses = (color: string) => {
		const colorMap: { [key: string]: string } = {
			blue: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800',
			green: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800',
			purple: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800',
			orange: 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800',
			red: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800',
			yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800',
			cyan: 'bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800',
			pink: 'bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800',
			gray: 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600',
		};
		return colorMap[color] || colorMap.gray;
	};

	const SkillBadge = ({ skill }: { skill: Skill }) => (
		<motion.div
			className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 hover:shadow-md ${getColorClasses(
				skill.color
			)}`}
			variants={itemVariants}
			whileHover={{ y: -2 }}
			whileTap={{ scale: 0.95 }}
		>
			<span className='mr-2 text-base'>{skill.icon}</span>
			{skill.name}
		</motion.div>
	);

	const SkillCategory = ({ skills, color }: { skills: Skill[]; color: string }) => (
		<motion.div variants={cardVariants}>
			<Card className='h-full hover:shadow-xl transition-all duration-300 border-t-4' style={{ borderTopColor: `var(--${color}-500)` }}>
				<CardContent>
					<motion.div
						className='flex flex-wrap gap-3'
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
					>
						{skills.map((skill, idx) => (
							<SkillBadge key={idx} skill={skill} />
						))}
					</motion.div>
				</CardContent>
			</Card>
		</motion.div>
	);

	return (
		<section id='skills' className='py-20 bg-gray-50 dark:bg-gray-900'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-green-800 dark:from-white dark:to-green-200 bg-clip-text text-transparent mb-4'>
						Skills & Technologies
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>Technologies and tools I use to bring ideas to life</p>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					<SkillCategory skills={skills} color='blue' />
				</motion.div>
			</div>
		</section>
	);
};

export default SkillsSection;
