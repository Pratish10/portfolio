# UX Design

_Created: 2026-09-07_

## Core UX Principle

**Simple on the surface. Deep underneath.**

The home page is designed for recruiters who skim. Depth is available for anyone who wants it — through expanding sections, architecture nodes, and project detail pages — but never forced on someone who doesn't need it.

---

## Three Audience Journeys

### Recruiter Journey (target: 60 seconds to decision)

```
1. Hero
   Who is Pratish? Full Stack Engineer. Backend systems, cloud, APIs.
   [Download Resume] CTA is immediately visible.

2. ImpactStrip
   Quantified outcomes in 4 numbers. Recruiter sees "45%", "10×", "40%", "50%".
   No jargon needed.

3. Selected Work (project teaser cards)
   3 projects with name, domain tag, one-line summary, and top metric.
   "Full engineering story →" link available but not required.

4. Capabilities
   Technology by category (Backend, Cloud, Frontend, DevOps).
   Evidence-linked: each tech shows "used in: [Project]".

5. Experience
   2 roles. Company, title, dates, 3 bullets per role (accomplishments, not duties).

6. Certifications
   Azure Fundamentals cert visible. Education visible.

7. Contact
   "Have a backend problem?" + Resume + Email + LinkedIn.
```

**Exit points**: Resume download from header or contact section. Email. LinkedIn.

---

### Engineering Manager Journey (target: 3–5 minutes)

```
1. Hero → understands positioning: backend-leaning full stack, cloud, integration

2. Selected Work → reads full project teaser cards
   Sees: problem, ownership, technology, metric

3. "Full story →" → opens /work/[slug] project detail page
   Reads: problem → context → my role → what I built → engineering decisions → outcome

4. Capabilities → Engineering Depth section
   Sees: technology evidence by category
   Each technology: what I built with it + which project

5. Engineering Decisions section
   2–3 decision cards: situation → options → chosen → rationale → trade-off → result

6. Experience timeline
   Accomplishment-oriented bullets, stack tags

7. Contact
```

**Exit points**: Project detail pages. Resume. Email.

---

### Engineer / Technical Interviewer Journey (target: 5–15 minutes)

```
1. Hero → core stack visible

2. Architecture Flow (interactive diagram)
   Clicks nodes: Client → API → Backend → Cloud → Integration → Data
   Each node reveals: what it is, technologies involved, related projects

3. Engineering Decisions section
   Reads decision cards with full trade-off narrative

4. Selected Work → "Full story →" → project detail pages
   Technical depth: architecture, decisions, challenges, lessons learned

5. Open Source section
   rsvp.kim contribution — collaborative work in external codebase

6. Engineering Principles (brief)
   Reliability, simplicity, observability — with real examples

7. Contact ("Have a backend problem? Let's talk.")
```

---

## Navigation Design

### Header (sticky, top-level only)

```
[Pratish Ninawe]   [Work] [Engineering] [Experience] [Contact]   [Download Resume]
```

- **Work** → anchors to #systems (selected work section)
- **Engineering** → anchors to #engineering (tech evidence + decisions)
- **Experience** → anchors to #experience
- **Contact** → anchors to #contact
- **Download Resume** → primary CTA, opens PDF
- Mobile: hamburger menu, same links, stacked

### Section Anchors (home page scroll)

```
#top         Header / Hero
#systems     Selected Work
#engineering Architecture Flow + Tech Evidence + Engineering Decisions
#experience  Work Experience
#oss         Open Source
#credentials Certifications + Education
#contact     Contact
```

### Project Detail Pages

```
URL: /work/[slug]
Slugs: myalgoai, data-monitor, qr-dine
Breadcrumb: ← Back to Work
```

---

## Progressive Disclosure

The key interaction pattern: surface-level information for everyone, depth available on demand.

| Element | Surface | Depth trigger | Depth content |
|---------|---------|--------------|---------------|
| Architecture Flow node | Label + icon | Click | Description, technologies, related projects |
| Project card | Name + tag + summary + metric | "Full story →" link | Full /work/[slug] page |
| Technology badge | Tech name | — | "used in: [project]" inline (always visible) |
| Engineering decision | Title + one-line | Always expanded | A vs B comparison, rationale, trade-off |
| Principles | Icon + name | — | Brief real example (always visible) |

No modals. No heavy overlays. No confusing split-pane interfaces.

---

## Interaction States

- **Hover**: subtle translate-y lift on cards and buttons (existing Boulevard Ember pattern)
- **Focus**: visible focus ring (coral/burnt-orange) on all interactive elements
- **Active architecture node**: border highlights, detail panel slides in from right (or below on mobile)
- **Reduced motion**: all animations disabled; states shown via opacity only

---

## Mobile UX Notes

- Navigation collapses to hamburger at < 768px
- Architecture flow stacks vertically on mobile; node detail panel appears below
- Project cards stack to single column
- Two-column layouts (experience, skills) stack to single column
- CTA buttons full-width on mobile
- Profile image hidden or smaller on mobile hero to prioritize text

---

## Copy Voice

Follows `.agents/product-marketing-context.md`:
- **Confident, polished, grounded** — not boastful
- **Direct, recruiter-readable** — no jargon for jargon's sake
- **Technically credible** — specifics, not vague claims

Contact section framing:
```
Have a backend problem?

Need to build an API?
Connect two systems?
Move data reliably?
Design a backend architecture?
Let's talk.
```
