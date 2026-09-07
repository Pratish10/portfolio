import CertificationsSection from '@/components/certifications-section';
import ContactSection from '@/components/contact-section';
import ExperienceSection from '@/components/experience-section';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ImpactStrip from '@/components/impact-strip';
import ProjectsSection from '@/components/projects-section';
import SchemaScript from '@/components/schema-script';
import SkillsSection from '@/components/skills-section';
import ArchitectureFlow from '@/components/architecture/architecture-flow';
import EngineeringDepthSection from '@/components/engineering/engineering-depth-section';
import OpenSourceSection from '@/components/open-source/open-source-section';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
	return (
		<>
			<SchemaScript />
			<main id='top'>
				<Header cta={portfolioData.cta.primary} />
				<HeroSection personal={portfolioData.personal} cta={portfolioData.cta} socialLinks={portfolioData.socialLinks} />
				<ImpactStrip stats={portfolioData.impactStats} />
				<ProjectsSection projects={portfolioData.engineeringProjects} />
				<ArchitectureFlow nodes={portfolioData.architectureNodes} />
				<EngineeringDepthSection
					technologyEvidence={portfolioData.technologyEvidence}
					engineeringDecisions={portfolioData.engineeringDecisions}
					engineeringPrinciples={portfolioData.engineeringPrinciples}
				/>
				<ExperienceSection experiences={portfolioData.experiences} />
				<OpenSourceSection contributions={portfolioData.openSourceContributions} />
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
