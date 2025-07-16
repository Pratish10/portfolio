/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'motion/react';
import { RefreshCw, AlertTriangle, Home, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ErrorFallbackProps {
	error?: Error | any;
	onRetry?: () => void;
}

const ErrorFallback = ({ error, onRetry }: ErrorFallbackProps) => {
	const handleRefresh = () => {
		if (onRetry) {
			onRetry();
		} else {
			window.location.reload();
		}
	};

	const handleGoHome = () => {
		window.location.href = '/';
	};

	const handleContactSupport = () => {
		window.location.href =
			'mailto:pratish.kumar@example.com?subject=Portfolio Error Report&body=I encountered an error while viewing your portfolio.';
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 px-4'>
			<motion.div className='max-w-md w-full' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
				<Card className='shadow-2xl border-0'>
					<CardContent className='p-8 text-center'>
						{/* Error Icon */}
						<motion.div
							className='w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6'
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
						>
							<AlertTriangle className='w-10 h-10 text-red-500' />
						</motion.div>

						{/* Error Title */}
						<motion.h1
							className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.6 }}
						>
							Oops! Something went wrong
						</motion.h1>

						{/* Error Description */}
						<motion.p
							className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.6 }}
						>
							We&apos;re having trouble loading the portfolio data. This might be a temporary issue.
						</motion.p>

						{/* Error Details (if available) */}
						{error && (
							<motion.div
								className='bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6 text-left'
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: 'auto' }}
								transition={{ delay: 0.5, duration: 0.6 }}
							>
								<p className='text-sm text-gray-600 dark:text-gray-400 font-mono break-all'>
									{error.message || 'Unknown error occurred'}
								</p>
							</motion.div>
						)}

						{/* Action Buttons */}
						<motion.div
							className='space-y-3'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.6 }}
						>
							<Button
								onClick={handleRefresh}
								size='lg'
								className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold'
							>
								<RefreshCw className='w-5 h-5 mr-2' />
								Try Again
							</Button>

							<div className='flex gap-3'>
								<Button onClick={handleGoHome} variant='outline' size='lg' className='flex-1 bg-transparent'>
									<Home className='w-4 h-4 mr-2' />
									Home
								</Button>

								<Button onClick={handleContactSupport} variant='outline' size='lg' className='flex-1 bg-transparent'>
									<Mail className='w-4 h-4 mr-2' />
									Contact
								</Button>
							</div>
						</motion.div>

						{/* Help Text */}
						<motion.p
							className='text-sm text-gray-500 dark:text-gray-400 mt-6'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8, duration: 0.6 }}
						>
							If the problem persists, please contact support or try refreshing the page.
						</motion.p>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
};

export default ErrorFallback;
