'use client';

import { motion, easeOut } from 'motion/react';
import { Button } from '@/components/ui/button';

const ContactSection = ({ email }: { email: string }) => {
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

	const handleEmailClick = () => {
		window.location.href = `mailto:${email}`;
	};

	return (
		<section id='contact' className='py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-950'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					className='max-w-2xl mx-auto'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					<motion.div variants={itemVariants}>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='w-full'>
							<Button
								onClick={handleEmailClick}
								size='lg'
								className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg'
							>
								{email}
							</Button>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection;
