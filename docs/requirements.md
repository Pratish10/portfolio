# Requirements

_Created: 2026-09-07_

## Functional Requirements

### Recruiter-Facing

| ID     | Requirement                                                                                          | Priority |
| ------ | ---------------------------------------------------------------------------------------------------- | -------- |
| FR-001 | Visitor understands Pratish's identity, role level, and core tech stack within 60 seconds of landing | Must     |
| FR-002 | Resume is downloadable in one click from the header and from at least one additional section         | Must     |
| FR-003 | Core technologies are visible without scrolling on desktop                                           | Must     |
| FR-004 | Impact metrics (quantified outcomes) are visible above the fold or immediately below hero            | Must     |
| FR-005 | Contact options (email, LinkedIn) are reachable from a single, clearly labeled section               | Must     |

### Engineering Manager–Facing

| ID     | Requirement                                                                                                            | Priority |
| ------ | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| FR-006 | Each project includes: what problem it solved, what Pratish personally built, key decisions made, and measured outcome | Must     |
| FR-007 | Work experience bullets reflect accomplishments, not job descriptions                                                  | Must     |
| FR-008 | Individual ownership is distinguishable from team contributions                                                        | Should   |
| FR-009 | Architecture of at least one project is visually represented                                                           | Should   |

### Engineer-Facing

| ID     | Requirement                                                                                                                                                                                | Priority |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| FR-010 | Architecture flow diagram (Client → API → Backend → Cloud → Integration → Data) is interactive — clicking a node reveals what it is, why it exists, and which technologies/projects relate | Should   |
| FR-011 | At least 2 engineering decisions are documented (situation, options considered, chosen approach, rationale, trade-off, result)                                                             | Should   |
| FR-012 | Technology capabilities are linked to project evidence, not presented as standalone lists or skill bars                                                                                    | Must     |
| FR-013 | Project detail pages exist for MyAlgoAI, Data Monitor Dashboard, and QR Dine with full engineering narrative                                                                               | Should   |

### Content Accuracy

| ID     | Requirement                                                                                  | Priority |
| ------ | -------------------------------------------------------------------------------------------- | -------- |
| FR-014 | No claim (metric, technology, project, responsibility) that does not appear in the resume    | Must     |
| FR-015 | C# and .NET Core are shown as skills with an honest note that no project evidence exists yet | Must     |
| FR-016 | Azure Fundamentals certification is visible in the certifications section                    | Must     |
| FR-017 | rsvp.kim open source contribution is visible                                                 | Should   |
| FR-018 | Neonflake role and Ackumen Buckman project are removed                                       | Must     |
| FR-019 | AWS is shown with API Gateway and DynamoDB specifics (not generic EC2/S3)                    | Should   |

### Navigation & Structure

| ID     | Requirement                                                                   | Priority |
| ------ | ----------------------------------------------------------------------------- | -------- |
| FR-020 | Top-level navigation: Work, Engineering, Experience, Contact, Download Resume | Must     |
| FR-021 | All sections are anchor-navigable from header links                           | Must     |
| FR-022 | Contact section uses problem-framing copy ("Have a backend problem?")         | Should   |

---

## Non-Functional Requirements

### Accessibility

- WCAG 2.1 AA minimum
- All interactive elements keyboard-focusable with visible focus ring
- `aria-label` on icon-only buttons
- Sufficient color contrast (Boulevard Ember palette already high-contrast)
- `prefers-reduced-motion` respected — all animations have a reduced-motion fallback

### Responsive Design

- Mobile-first: primary layout works at 375px viewport width
- Tablet: 768px — nav collapses to hamburger, content columns stack
- Desktop: 1024px+ — full two-column layouts where appropriate
- No horizontal scroll at any viewport width

### Performance

- Lighthouse Performance score ≥ 85 on desktop
- SVG architecture diagram: inline (no external fetch)
- No heavy third-party scripts
- Motion animations must not block initial render

### SEO

- `<title>`: "Pratish Ninawe | Full Stack Engineer — Backend, Cloud & Integration"
- `<meta description>` includes: backend systems, cloud, Node.js, React, APIs
- Twitter card: summary_large_image
- JSON-LD: Person + ProfilePage schema with updated knowsAbout (include Azure Fundamentals cert, rsvp.kim)
- Sitemap includes `/work/myalgoai`, `/work/data-monitor`, `/work/qr-dine`
- `robots.txt`: allow all

### Security

- No secrets, API keys, or credentials in code or JSON
- All external links use `rel="noopener noreferrer"`
- No user input processed (static site)

### Build & Deploy

- `pnpm lint --max-warnings 0` passes
- `pnpm test` all suites pass
- `pnpm build` produces `out/` with `out/pratish.json` present
- Static export compatible: no runtime-only Next.js features
- All new routes (`/work/[slug]`) use `generateStaticParams`

### Browser Support

- Modern evergreen browsers: Chrome, Firefox, Safari, Edge (last 2 major versions)
- No IE11 support required
