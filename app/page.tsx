import CertificationsSection from '@/components/certifications-section';
import ContactSection from '@/components/contact-section';
import ExperienceSection from '@/components/experience-section';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ImpactStrip from '@/components/impact-strip';
import ProjectsSection from '@/components/projects-section';
import SchemaScript from '@/components/schema-script';
import SkillsSection from '@/components/skills-section';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
	return (
		<>
			<SchemaScript />
			<main id='top'>
				<Header cta={portfolioData.cta.primary} />
				<HeroSection personal={portfolioData.personal} cta={portfolioData.cta} socialLinks={portfolioData.socialLinks} />
				<ImpactStrip stats={portfolioData.impactStats} />
				<ExperienceSection experiences={portfolioData.experiences} />
				<ProjectsSection projects={portfolioData.projects} />
				<SkillsSection capabilityGroups={portfolioData.capabilityGroups} />
				<CertificationsSection
					certifications={portfolioData.certifications}
					education={portfolioData.education}
					recognition={portfolioData.recognition}
				/>
				<ContactSection cta={portfolioData.cta} />
			</main>
		</>
	);
}
