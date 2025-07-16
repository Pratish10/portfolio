'use client';

import CertificationsSection from '@/components/certifications-section';
import ContactSection from '@/components/contact-section';
import ErrorFallback from '@/components/error-fallback';
import ExperienceSection from '@/components/experience-section';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import LoadingSpinner from '@/components/loading-spinner';
import ProjectsSection from '@/components/projects-section';
import ScrollToTop from '@/components/scroll-to-top';
import SkillsSection from '@/components/skills-section';
import { useGetProfileInfo } from '@/hooks/useGetProfileInfo';
import { useState } from 'react';

export default function Home() {
	const { error, isLoading, portfolio } = useGetProfileInfo();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [retryCount, setRetryCount] = useState(0);

	const handleRetry = () => {
		setRetryCount((prev) => prev + 1);
		window.location.reload();
	};

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (error || !portfolio) {
		return <ErrorFallback error={error} onRetry={handleRetry} />;
	}

	return (
		<div>
			<Header />
			<HeroSection personal={portfolio.personal} socialLinks={portfolio.socialLinks} />
			<ExperienceSection experiences={portfolio.experience} />
			<ProjectsSection projects={portfolio.projects} />
			<SkillsSection skills={portfolio.skills} />
			<CertificationsSection certifications={portfolio.certifications} />
			<ContactSection email={portfolio.contact.email} />
			<ScrollToTop />
		</div>
	);
}
