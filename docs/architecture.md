# Architecture

_Created: 2026-09-07_

## Overview

The portfolio is a statically exported Next.js 15 (App Router) site. All content is baked at build time from a single JSON source. No server runtime,
no API routes, no client-side data fetching for core content.

## Stack Decision

| Concern   | Choice                              | Rationale                                                                     |
| --------- | ----------------------------------- | ----------------------------------------------------------------------------- |
| Framework | Next.js 15 (App Router)             | Already in use; excellent static export, file-based routing, TypeScript-first |
| Rendering | `output: 'export'`                  | GitHub Pages compatibility; zero runtime cost                                 |
| Styling   | Tailwind v4 + CSS custom properties | Already configured; Boulevard Ember tokens in `:root`                         |
| Animation | Motion (Framer Motion v12)          | Already installed; `whileInView` scroll reveals, reduced-motion support       |
| Content   | `public/pratish.json`               | Single source of truth; typed by TypeScript; baked at build time              |
| Testing   | Vitest + jsdom + RTL                | Already configured; fast, no browser dependency for unit tests                |
| Deploy    | GitHub Actions → gh-pages           | Existing CI pipeline; proven                                                  |

## Data Flow

```
public/pratish.json
    │
    └─► data/portfolio.ts
            │  (typed import: import rawPortfolio from '@/public/pratish.json')
            │  (cast to PortfolioData)
            │
            ├─► app/page.tsx
            │       (synchronous, build-time)
            │       Renders all home page section components
            │
            ├─► app/work/[slug]/page.tsx
            │       generateStaticParams() → reads engineeringProjects[].slug
            │       page() → finds project by slug, renders ProjectDetailLayout
            │
            └─► config/site-config.ts
                    (Next.js Metadata export consumed by app/layout.tsx)
```

## File Structure (additions to existing)

```
app/
  page.tsx                      ← updated: new sections wired
  work/
    [slug]/
      page.tsx                  ← NEW: static project detail page
components/
  architecture/
    architecture-flow.tsx       ← NEW: interactive SVG flow diagram
    architecture-node.tsx       ← NEW: individual node + detail panel
  engineering/
    engineering-depth-section.tsx  ← NEW: wrapper section
    tech-evidence.tsx           ← NEW: tech + project evidence
    decision-card.tsx           ← NEW: A vs B decision format
    engineering-principles.tsx  ← NEW: principles with evidence
  projects/
    project-story.tsx           ← NEW: full detail page layout
    project-teaser-card.tsx     ← NEW: upgraded home card (was inline in projects-section)
  open-source/
    open-source-section.tsx     ← NEW: rsvp.kim contribution
docs/
  discovery.md                  ← NEW
  content-inventory.md          ← NEW
  requirements.md               ← NEW
  ux.md                         ← NEW
  information-architecture.md   ← NEW
  design-system.md              ← NEW
  architecture.md               ← NEW (this file)
```

## Static Export Constraints

- No `getServerSideProps`, no `cookies()`, no `headers()` at runtime
- Dynamic routes (`/work/[slug]`) require `generateStaticParams` — implemented by reading `pratish.json` at build time
- Images must use `withBasePath()` from `lib/utils.ts` — the `/portfolio` prefix is only added in production
- `next.config.ts` sets `basePath: '/portfolio'` in production — all internal Next.js `<Link>` and `<Image>` components handle this automatically;
  only raw `<img src>` and `<a href>` pointing to `public/` assets need `withBasePath()`

## Architecture Flow Component Design

The interactive flow diagram is the most novel component. Design constraints:

- Implemented as a React component with inline SVG for connectors
- Node boxes are HTML `<button>` elements for accessibility
- Click a node → toggle detail panel below that node (accordion-style on mobile, side panel on desktop)
- No canvas, no D3, no external charting library
- Connector SVG lines drawn relative to node positions using CSS Grid + absolute positioning trick
- Reduced motion: detail panel appears instantly (no slide animation)

```
Client (Browser)
    │  (HTTPS request)
    ▼
API Layer (REST / WebSocket)
    │  (JSON responses)
    ▼
Backend Services (Node.js / Python / C#)
    │  (data queries)
    ▼
Cloud Infrastructure (AWS / Azure)
    │  (integrations)
    ▼
Data Layer (PostgreSQL / MongoDB / DynamoDB)
```

Each node in the diagram maps to an `ArchitectureNode` in `pratish.json`.

## Testing Architecture

```
tests/
  data/
    portfolio.test.ts     ← validates JSON structure, required fields, no Neonflake
  lib/
    utils.test.ts         ← withBasePath utility
  seo/
    metadata.test.ts      ← title/description contain required keywords
  ui/
    homepage.test.tsx     ← home page renders expected sections
    project-story.test.tsx ← NEW: project detail page renders
```

Tests use Vitest + jsdom + React Testing Library. No browser tests. Tests are guardrails (content + structure) not pixel-perfect UI tests.

## CI Pipeline (unchanged)

```yaml
install → lint → lint:fix → format → build → verify out/ → deploy
```

The verify step checks `out/pratish.json` and `out/Pratish.webp` exist. These are preserved.

New project pages (`out/work/myalgoai/index.html` etc.) are produced automatically by `generateStaticParams` and the Next.js static export.

## Dependency Policy

No new npm dependencies. All needs covered by:

- `motion` — animations
- `lucide-react` — icons
- `@radix-ui/react-slot` + `class-variance-authority` — button/card primitives
- `clsx` + `tailwind-merge` — class utilities (via `cn()`)
- `next-themes` — theme support
