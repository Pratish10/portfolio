/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion, easeOut } from 'motion/react';
import { Download, Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Personal {
	firstName: string;
	lastName: string;
	title: string;
	location: string;
	about: string;
	profileImage: string;
	resumeLink: string;
}

interface SocialLink {
	platform: string;
	url: string;
	icon: string;
}

interface HeroSectionProps {
	personal: Personal;
	socialLinks: SocialLink[];
}

const HeroSection = ({ personal, socialLinks }: HeroSectionProps) => {
	const iconMap: { [key: string]: any } = {
		Github,
		Linkedin,
		Twitter,
		Mail,
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
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

	const imageVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: easeOut,
			},
		},
	};

	const buttonVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: 0.8,
				ease: easeOut,
			},
		},
	};

	return (
		<section
			id='pratish'
			className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 px-4 sm:px-6 lg:px-8'
		>
			<motion.div className='max-w-4xl mx-auto text-center' variants={containerVariants} initial='hidden' animate='visible'>
				{/* Profile Image */}
				<motion.div className='mb-8' variants={imageVariants}>
					<div className='relative inline-block'>
						<motion.img
							src={personal.profileImage}
							alt={`${personal.firstName} ${personal.lastName} - Portfolio`}
							className='w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl mx-auto'
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
						/>
					</div>
				</motion.div>

				{/* Location */}
				<motion.div className='flex items-center justify-center mb-6 text-gray-600 dark:text-gray-400' variants={itemVariants}>
					<MapPin className='w-4 h-4 mr-2' />
					<span className='text-sm font-medium'>{personal.location}</span>
				</motion.div>

				{/* Title */}
				<motion.h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6' variants={itemVariants}>
					<span className='bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent'>
						Hi, I&apos;m {personal.firstName}
					</span>
				</motion.h1>

				{/* Subtitle */}
				<motion.h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8' variants={itemVariants}>
					{personal.title}
				</motion.h2>

				{/* Introduction */}
				<motion.p
					className='text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12'
					variants={itemVariants}
				>
					{personal.about}
				</motion.p>

				{/* CTA Buttons */}
				<motion.div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12' variants={buttonVariants}>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button
							asChild
							size='lg'
							className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
						>
							<a href={personal.resumeLink} download>
								<Download className='w-5 h-5 mr-2' />
								Download Resume
							</a>
						</Button>
					</motion.div>
				</motion.div>

				{/* Social Links */}
				<motion.div className='flex justify-center space-x-6' variants={itemVariants}>
					{socialLinks.map((social, index) => {
						const Icon = iconMap[social.icon];
						return (
							<motion.a
								key={social.platform}
								href={social.url}
								target='_blank'
								rel='noopener noreferrer'
								className='group relative p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700'
								whileHover={{ scale: 1.1, y: -2 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
							>
								<Icon className='w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300' />
								<span className='sr-only'>{social.platform}</span>

								{/* Tooltip */}
								<div className='absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
									{social.platform}
								</div>
							</motion.a>
						);
					})}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
