# Discovery — Portfolio Engineering Redesign

_Created: 2026-09-07_

## Current Project State

A statically-exported Next.js 15 (App Router) single-page portfolio site deployed to GitHub Pages at `https://pratish10.github.io/portfolio`. The site
is recruiter-facing, built around a single content source (`public/pratish.json`), and uses the Boulevard Ember design system.

## Existing Technology Stack

| Layer           | Technology                                                        |
| --------------- | ----------------------------------------------------------------- |
| Framework       | Next.js 15, App Router, TypeScript strict                         |
| Rendering       | Static export (`output: 'export'`) → `out/`                       |
| Styling         | Tailwind v4, CSS custom properties (Boulevard Ember palette)      |
| Fonts           | Cormorant Garamond (display), Manrope (body) via next/font/google |
| Animation       | Motion (Framer Motion v12)                                        |
| Icons           | Lucide React                                                      |
| UI Primitives   | shadcn/ui-style (button, card) via Radix UI + CVA                 |
| Testing         | Vitest + jsdom + React Testing Library                            |
| Linting         | ESLint flat config, Prettier                                      |
| Deploy          | gh-pages CLI + GitHub Actions CI                                  |
| Package Manager | pnpm (lockfile committed)                                         |

## Existing Architecture

- **Single content source**: `public/pratish.json` typed by `types/portfolio-types.ts`, imported by `data/portfolio.ts`, consumed by `app/page.tsx`
  and `config/site-config.ts`
- **Page composition**: Fixed section order in `app/page.tsx` — Header → Hero → ImpactStrip → Experience → Projects → Skills → Certifications →
  Contact
- **SEO**: `config/site-config.ts` builds Next Metadata; `components/schema-script.tsx` emits JSON-LD
- **Base path handling**: `withBasePath()` in `lib/utils.ts` handles `/portfolio` prefix for GitHub Pages
- **CI**: lint → lint:fix → format → build → verify `out/pratish.json` + `out/Pratish.webp` → deploy

## Current Strengths

- Clean separation of content (JSON) from presentation (components)
- Strong design system foundation (Boulevard Ember palette, typography enforcement)
- Good CI/CD pipeline with artifact verification
- Type-safe content model
- Existing SEO infrastructure (OG, Twitter card, JSON-LD)
- `withBasePath()` utility correctly handles dev vs. production path differences
- Motion and Lucide React already installed (no new deps needed for animations/icons)

## Current Weaknesses

- Projects shown as shallow cards — no problem/context/decision/outcome narrative
- Skills presented as flat badge lists with no evidence linking
- No architecture visualization
- No engineering decisions showcase
- No open source section
- Content is stale vs. resume (missing: Go, MySQL, Microservices, AWS API Gateway/DynamoDB, Azure cert, rsvp.kim OSS)
- Neonflake role and Ackumen Buckman project present in JSON but not on resume
- No project detail pages — everything on one flat scroll
- Contact copy is generic

## Missing Information / Placeholders Required

| Item                                | Status                                      | Placeholder needed?               |
| ----------------------------------- | ------------------------------------------- | --------------------------------- |
| C# / .NET Core project evidence     | Listed as skill, no project demonstrates it | Yes — note as "skill in progress" |
| Azure work beyond Fundamentals cert | Cert exists, no Azure project               | Yes — show cert only              |
| Specific Go project                 | Listed as skill, no project                 | Yes — note as "skill in progress" |

## Existing Reusable Components

| Component                                 | Reuse Strategy                                       |
| ----------------------------------------- | ---------------------------------------------------- |
| `components/ui/button.tsx`                | Use as-is for all CTAs                               |
| `components/ui/card.tsx`                  | Extend for new ProjectStory and DecisionCard layouts |
| `components/section-heading.tsx`          | Reuse in all new sections                            |
| `lib/utils.ts` → `cn()`, `withBasePath()` | Use in all new components                            |
| `components/schema-script.tsx`            | Update JSON-LD, keep mechanism                       |
| `data/portfolio.ts`                       | Add new typed exports as JSON keys expand            |

## Technical Constraints

- Static export: no server-side runtime, no API routes, no `getServerSideProps`
- GitHub Pages serves from `/portfolio` base path in production — all `public/` asset links must use `withBasePath()`
- CI verifies `out/pratish.json` and `out/Pratish.webp` exist — do not remove these
- No new npm dependencies unless absolutely unavoidable (Motion, Lucide, shadcn/ui already cover needs)
- `pnpm lint --max-warnings 0` must pass — no ESLint warnings acceptable
- Tailwind v4: no `tailwind.config` — tokens live in `app/globals.css` as CSS custom properties

## Deployment Assumptions

- GitHub Pages project page: `https://pratish10.github.io/portfolio`
- Static export — all routes must be pre-renderable
- New `/work/[slug]` pages require `generateStaticParams` to be included in the export

## Risks

| Risk                                         | Mitigation                                                        |
| -------------------------------------------- | ----------------------------------------------------------------- |
| Breaking existing tests when content changes | Update tests in same commit as content changes                    |
| `/work/[slug]` not pre-rendered              | Always implement `generateStaticParams`                           |
| Animation performance on mobile              | Use `prefers-reduced-motion`, keep motion minimal                 |
| SVG architecture diagram complexity          | Start simple, progressively enhance                               |
| C#/.NET content gap                          | Honest placeholder — skill listed, note "no project evidence yet" |
