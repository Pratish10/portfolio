'use client';

import { motion } from 'motion/react';

const LoadingSpinner = () => {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950'>
			<div className='text-center'>
				{/* Animated Logo/Name */}
				<motion.div className='mb-8' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
					<h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
						Pratish
					</h1>
				</motion.div>

				{/* Spinning Circle */}
				<motion.div
					className='relative w-16 h-16 mx-auto mb-6'
					animate={{ rotate: 360 }}
					transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
				>
					<div className='absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full'></div>
					<div className='absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-purple-600 rounded-full'></div>
				</motion.div>

				{/* Loading Text */}
				<motion.p
					className='text-gray-600 dark:text-gray-400 text-lg font-medium'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					Loading portfolio...
				</motion.p>

				{/* Animated Dots */}
				<motion.div
					className='flex justify-center space-x-1 mt-4'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.6 }}
				>
					{[0, 1, 2].map((index) => (
						<motion.div
							key={index}
							className='w-2 h-2 bg-blue-500 rounded-full'
							animate={{ y: [0, -8, 0] }}
							transition={{
								duration: 0.6,
								repeat: Infinity,
								delay: index * 0.2,
								ease: 'easeInOut',
							}}
						/>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default LoadingSpinner;
