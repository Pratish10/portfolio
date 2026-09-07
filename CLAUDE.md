# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A statically-exported Next.js 15 (App Router) portfolio site for Pratish Ninawe, deployed to GitHub Pages at `https://pratish10.github.io/portfolio`. Positioned as a **Backend & Azure Integration Engineer** portfolio — evidence-driven, with full engineering stories, interactive architecture visualization, and engineering decision records. Three target audiences: recruiter (60-second scan), engineering manager (project depth), and technical interviewer (architecture + decisions).

Before editing any user-facing copy, read [.agents/product-marketing-context.md](.agents/product-marketing-context.md) for positioning, banned language, and proof points. Before changing layout or colors, read [docs/design-system.md](docs/design-system.md).

## Commands

Package manager is **pnpm** (lockfile committed; CI uses pnpm).

- `pnpm dev` — start dev server (localhost:3000)
- `pnpm build` — static export to `out/` (`next.config.ts` sets `output: 'export'`)
- `pnpm lint` / `pnpm lint:fix` — ESLint flat config, `--max-warnings 0`
- `pnpm format` — Prettier over the whole tree
- `pnpm test` — run Vitest once; `pnpm test:watch` for watch mode
- `pnpm vitest run tests/lib/utils.test.ts` — run a single test file
- `pnpm deploy` — builds and pushes `out/` to `gh-pages` branch

CI (`.github/workflows/deploy.yml`) runs on push to `master`: install → lint → lint:fix → format → build → verify `out/pratish.json` and `out/Pratish.webp` exist → deploy. No test step in CI.

## Architecture

### Content source

All content lives in [`public/pratish.json`](public/pratish.json), typed by [`types/portfolio-types.ts`](types/portfolio-types.ts). [`data/portfolio.ts`](data/portfolio.ts) imports it statically (`import rawPortfolio from '@/public/pratish.json'`) and re-exports it as `portfolioData`. Consumed at build time by `app/page.tsx` and `config/site-config.ts`. **No runtime fetch** — `hooks/useGetProfileInfo.ts` is dead code.

`PortfolioData` has two layers of project data:
- `projects[]` — simple card format (name, summary, highlights, links) — legacy, not used in the main page render
- `engineeringProjects[]` — full narrative format with `slug`, `problem`, `context`, `myRole`, `decisions[]`, `metrics[]`, `lessonsLearned[]` — drives both `ProjectsSection` on the home page and the `/work/[slug]` detail pages

Other top-level keys in the JSON: `architectureNodes[]`, `engineeringDecisions[]`, `technologyEvidence[]`, `openSourceContributions[]`, `engineeringPrinciples[]`.

### Pages

- `app/page.tsx` — home page, renders all sections in order:
  `Header → Hero → ImpactStrip → ProjectsSection → ArchitectureFlow → EngineeringDepthSection → ExperienceSection → OpenSourceSection → SkillsSection → CertificationsSection → ContactSection`
- `app/work/[slug]/page.tsx` — project detail pages, statically generated via `generateStaticParams()` from `engineeringProjects[].slug`. Current slugs: `bybar`, `myalgoai`, `qr-dine`.
- `app/sitemap.ts` — includes home + all `/work/[slug]` URLs
- `app/robots.ts` — allow all

Adding a new project: add an entry to `engineeringProjects` in `pratish.json` with a unique `slug` — the detail page is generated automatically at build time.

### Component layout

```
components/
  architecture/       — ArchitectureFlow (interactive SVG node diagram, 'use client')
  engineering/        — EngineeringDepthSection, TechEvidenceGrid, DecisionCard, EngineeringPrinciples
  open-source/        — OpenSourceSection
  projects/           — ProjectStory (detail page layout)
  ui/                 — button.tsx, card.tsx (shadcn/ui-style primitives)
  *.tsx               — top-level section components (header, hero, impact-strip, etc.)
```

### Static export + base path

`next.config.ts` sets `basePath: '/portfolio'` in production only (`process.env.NODE_ENV === 'production'`). Key rule: **Next.js `<Link>` and `<Image>` apply basePath automatically** — use them for internal navigation. For raw `<a href>` or `<img src>` pointing to `public/` assets, use `lib/utils.ts#withBasePath(process.env.BASE_PATH, path)`. Never hardcode `/portfolio/` in href strings.

### Design system — Terminal Engineering

Defined entirely in [`app/globals.css`](app/globals.css) as CSS custom properties. Key tokens:

| Token | Value | Use |
|-------|-------|-----|
| `--accent` / `--burnt-orange` | `#00d4a0` | Primary teal — buttons, labels, borders |
| `--coral` | `#00ffb3` | Bright teal — button hover |
| `--boulevard-blue` | `#141d19` | Card background |
| `--boulevard-deep` | `#0c1210` | Page background |
| `--ink` | `#ddeee8` | Primary text |
| `--muted-ink` | `rgba(221,238,232,0.62)` | Secondary text |
| `--line` / `--line-strong` | teal-tinted rgba | Borders |
| `--signal-muted` | `rgba(0,212,160,0.12)` | Tinted backgrounds |
| `--code-bg` | `rgba(10,16,13,0.88)` | Decision cards, architecture panel |
| `--success` | `#4ade80` | Chosen option in decision cards |

**Fonts** (wired in `app/layout.tsx`, enforced in `@layer base`):
- `--font-display`: Space Grotesk — headings (h1–h4), letter-spacing -0.02em
- `--font-body`: Manrope — body text (p, li, a, span)
- `--font-mono`: JetBrains Mono — applied via `.mono` class on labels, eyebrows, status badges, nav items

Tailwind v4 (`@import 'tailwindcss'` in globals.css, no separate `tailwind.config`). No Tailwind prefix. Use CSS custom properties via `text-[color:var(--accent)]` / `bg-[color:var(--signal-muted)]` patterns for theme colors — not hardcoded hex.

### SEO

`config/site-config.ts` builds the Next.js `Metadata` object from `portfolioData.seo` and `portfolioData.personal`. `components/schema-script.tsx` emits JSON-LD (Person + ProfilePage schema). Favicon is `public/favicon.svg` — "PN" monogram, teal on dark. `tests/seo/metadata.test.ts` guards the positioning keywords.

## Testing

Vitest + jsdom + React Testing Library. Tests mirror source under `tests/` (`data/`, `lib/`, `seo/`, `ui/`). The `@` alias maps to repo root in both `tsconfig.json` and `vitest.config.ts`.

Tests are positioning guardrails — they assert content (Azure cert present, no Neonflake, ByBar project exists) and copy (header CTAs, section text). Not pixel-perfect UI tests.

## Formatting

Prettier is authoritative (`.prettierrc.json`): tabs width 4, single quotes, semicolons, 150 char print width, `arrowParens: always`. Run `pnpm format` rather than hand-formatting.
