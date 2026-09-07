# Information Architecture

_Created: 2026-09-07_

## Content Model

All content lives in `public/pratish.json`, typed by `types/portfolio-types.ts`. The data is imported statically at build time — no runtime fetch.

### Existing Types (preserved)

```typescript
// CtaLink, PortfolioData — unchanged
// personal, cta, impactStats, experiences, projects, capabilityGroups,
// certifications, recognition, education, socialLinks, seo — unchanged structure
```

### New Types to Add

```typescript
// Engineering project with full narrative depth
interface EngineeringProject {
	id: number;
	slug: string; // URL slug for /work/[slug]
	name: string;
	tag: string; // e.g. "Automated Trading Platform"
	summary: string; // one-sentence recruiter summary
	problem: string; // what was broken or missing
	context: string; // why the system mattered
	myRole: string; // what Pratish personally owned
	responsibilities: string[];
	technologies: string[];
	architecture: string; // prose description of system architecture
	decisions: EngineeringDecision[];
	challenges: string[];
	outcome: string;
	metrics: string[];
	lessonsLearned: string[];
	links: { label: string; href: string }[];
}

// A vs B decision card
interface EngineeringDecision {
	title: string;
	situation: string;
	optionA: string;
	optionB: string;
	chosen: 'A' | 'B';
	rationale: string;
	tradeoff: string;
	result: string;
}

// Interactive architecture flow node
interface ArchitectureNode {
	id: string;
	label: string; // e.g. "API Layer"
	icon: string; // Lucide icon name
	description: string; // what this layer does
	technologies: string[]; // technologies at this layer
	relatedProjects: string[]; // project names that use this
}

// Technology linked to evidence
interface TechnologyEvidence {
	technology: string;
	category: 'backend' | 'cloud' | 'frontend' | 'database' | 'devops' | 'integration';
	usedIn: string[]; // project names
	whatBuilt: string; // one-line description of what was built
	placeholder?: boolean; // true if skill listed but no project evidence yet
}

// Open source contribution
interface OpenSourceContribution {
	project: string;
	organization: string;
	url: string;
	contribution: string;
	changelogUrl?: string;
}

// Engineering principle with evidence
interface EngineeringPrinciple {
	name: string;
	icon: string; // Lucide icon name
	statement: string;
	evidence: string; // real example from experience
}
```

### New Top-Level Keys in pratish.json

```json
{
  "engineeringProjects": [ EngineeringProject[] ],
  "engineeringDecisions": [ EngineeringDecision[] ],
  "architectureNodes": [ ArchitectureNode[] ],
  "technologyEvidence": [ TechnologyEvidence[] ],
  "openSourceContributions": [ OpenSourceContribution[] ],
  "engineeringPrinciples": [ EngineeringPrinciple[] ]
}
```

---

## Page Structure

### Home Page (`/`)

```
<Header />                          ← navigation + resume CTA
<HeroSection />                     ← identity, stack, CTAs
<ImpactStrip />                     ← 4 quantified metrics
<ArchitectureFlowSection />         ← NEW: interactive flow diagram
<ProjectsSection />                 ← upgraded teaser cards
<EngineeringDepthSection />         ← NEW: tech evidence + decisions + principles
<ExperienceSection />               ← updated bullets, no Neonflake
<OpenSourceSection />               ← NEW: rsvp.kim
<CertificationsSection />           ← updated: + Azure Fundamentals
<ContactSection />                  ← updated copy
<SchemaScript />                    ← JSON-LD
```

### Project Detail Page (`/work/[slug]`)

```
<ProjectDetailLayout>
  ← Back to Work
  <ProjectHero />           ← name, tag, summary, role
  <ProjectMetrics />        ← outcome metrics strip
  <ProjectNarrative />      ← problem → context → my role → what I built
  <ProjectArchitecture />   ← architecture prose + optional diagram
  <ProjectDecisions />      ← decision cards for this project
  <ProjectChallenges />     ← what went wrong + how fixed
  <ProjectLessons />        ← lessons learned
  <ProjectLinks />          ← live demo, github
  <BackToWork />            ← nav back
</ProjectDetailLayout>
```

---

## URL Structure

```
/                       ← home (single-page SPA)
/work/myalgoai         ← MyAlgoAI engineering story
/work/data-monitor     ← Data Monitor Dashboard engineering story
/work/qr-dine          ← QR Dine engineering story
```

All routes are statically exported. `/work/[slug]` uses `generateStaticParams` deriving slugs from `engineeringProjects[].slug` in `pratish.json`.

---

## Data Flow

```
public/pratish.json
    └─ data/portfolio.ts          (typed import, re-export as portfolioData)
           ├─ app/page.tsx        (home page — all home sections)
           ├─ app/work/[slug]/    (project detail — filters by slug)
           └─ config/site-config.ts  (SEO metadata)
```

No client-side data fetching. Everything baked at build time.

---

## Extensibility

To add a new project in future:

1. Add entry to `engineeringProjects` array in `pratish.json`
2. Ensure `slug` is unique — it automatically creates a new `/work/[slug]` route
3. Run `pnpm build` — `generateStaticParams` picks it up automatically

To add a new technology:

1. Add entry to `technologyEvidence` array
2. Engineering Depth section renders it automatically

No component changes needed for new content — fully data-driven.
