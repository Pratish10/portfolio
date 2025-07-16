'use client';

import { motion, easeOut } from 'motion/react';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Certification {
	id: number;
	title: string;
	issuer: string;
	date: string;
	credentialId: string;
	image: string;
	verifyUrl: string;
}

interface CertificationsSectionProps {
	certifications: Certification[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
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
		<section id='certifications' className='py-20 bg-white dark:bg-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-orange-800 dark:from-white dark:to-orange-200 bg-clip-text text-transparent mb-4'>
						Certifications
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>Professional certifications and achievements</p>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					{certifications.map((cert) => (
						<motion.div key={cert.id} variants={itemVariants}>
							<Card className='group hover:shadow-xl transition-all duration-300 h-full'>
								<CardContent className='p-6 text-center'>
									<div className='mb-6'>
										<img src={cert.image || '/placeholder.svg'} alt={cert.issuer} className='w-20 h-20 mx-auto mb-4 rounded-lg' />
										<Award className='w-8 h-8 mx-auto text-yellow-500 mb-2' />
									</div>

									<h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>{cert.title}</h3>

									<p className='text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4'>{cert.issuer}</p>

									<div className='flex items-center justify-center text-gray-600 dark:text-gray-400 mb-4'>
										<Calendar className='w-4 h-4 mr-2' />
										{cert.date}
									</div>

									<p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>ID: {cert.credentialId}</p>

									<Button
										asChild
										variant='outline'
										className='w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900 bg-transparent'
									>
										<a href={cert.verifyUrl} target='_blank' rel='noopener noreferrer'>
											<ExternalLink className='w-4 h-4 mr-2' />
											View
										</a>
									</Button>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default CertificationsSection;
