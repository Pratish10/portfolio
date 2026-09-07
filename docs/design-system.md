# Design System

_Created: 2026-09-07_

## Design Philosophy

**Boulevard Ember** — unchanged. See `docs/design/sunset-boulevard-philosophy.md` for the full manifesto.

Visual language: deep boulevard blue fields, burnt orange/coral/warm sand accents, architectural whitespace, editorial typography. Restrained, clinical, monumental.

This document defines **extensions only**. Do not replace existing tokens.

---

## Color Tokens

### Existing (do not change)

```css
--boulevard-blue: #264653;
--boulevard-deep: #1b313a;
--burnt-orange: #e76f51;
--coral: #f4a261;
--warm-sand: #e9c46a;
--ink: #f8f1e3;
--muted-ink: rgba(248, 241, 227, 0.72);
--line: rgba(233, 196, 106, 0.18);
--line-strong: rgba(244, 162, 97, 0.35);
```

### New Additions (add to `app/globals.css` `:root`)

```css
--signal: #2a9d8f;          /* teal — architecture connectors, evidence links */
--signal-muted: rgba(42, 157, 143, 0.2); /* teal at low opacity for node backgrounds */
--code-bg: rgba(27, 49, 58, 0.7);        /* decision comparison boxes, code snippets */
--success: #52b788;         /* green — for "chosen" decision highlight */
```

---

## Typography

### Existing (enforced in `@layer base`, do not override)

- **Display** (`--font-display`): Cormorant Garamond — headings h1–h4, letter-spacing -0.03em
- **Body** (`--font-body`): Manrope — p, li, a, span

### Scale

| Level | Usage | Size |
|-------|-------|------|
| Display XL | Hero headline | `text-5xl` / `text-7xl` |
| Display L | Section headings | `text-3xl` / `text-4xl` |
| Display M | Project titles, decision titles | `text-2xl` |
| Body L | Project summaries, decision text | `text-lg` |
| Body | Standard paragraph | `text-base` |
| Caption | Eyebrows, badges, labels | `text-xs` uppercase tracking-widest |

---

## Spacing

Use Tailwind spacing scale. Key reference points:
- Section vertical padding: `py-20` (desktop) / `py-12` (mobile)
- Content max-width: `max-w-6xl mx-auto px-6`
- Card internal padding: `p-6` standard, `p-8` for feature cards
- Grid gap: `gap-6` standard, `gap-8` for feature grids

---

## Component Patterns

### Section Heading (existing `section-heading.tsx`)
- Eyebrow: `text-xs uppercase tracking-widest text-[--coral]`
- Title: `font-display text-3xl/4xl text-[--ink]`
- Description: `text-[--muted-ink] text-base max-w-2xl`

### ProjectTeaserCard (new)
- Background: `bg-[--boulevard-deep]/40` with `backdrop-blur-sm`
- Border: `border border-[--line]`
- Hover: `border-[--line-strong]` + subtle translate-y lift
- Tag badge: `text-[--coral] text-xs uppercase tracking-widest`
- Metric highlight: `text-[--warm-sand] text-2xl font-display`
- "Full story →" link: `text-[--signal]` with arrow icon

### ArchitectureFlow (new)
- Container: centered, max-width constrained
- Connector lines: `stroke: var(--signal)` SVG lines with subtle animation
- Node (idle): `bg-[--signal-muted]` border `border-[--signal]/30`
- Node (active): `bg-[--signal-muted]` border `border-[--signal]` + glow shadow
- Node label: `text-[--ink] text-sm font-body font-medium`
- Detail panel: `bg-[--code-bg]` border `border-[--line-strong]` slides in

### TechEvidence (new)
- Tech chip: `bg-[--boulevard-deep] border border-[--line] text-[--ink] text-sm px-3 py-1 rounded`
- Category label: `text-[--coral] text-xs uppercase`
- "Used in:" prefix: `text-[--muted-ink] text-xs`
- Project reference: `text-[--signal] text-xs`
- Placeholder badge: `text-[--muted-ink] italic` + "skill in progress" label

### DecisionCard (new)
- Container: `bg-[--code-bg] border border-[--line-strong] rounded-lg p-6`
- Option A / Option B: two equal columns, `border border-[--line] rounded p-4`
- Chosen option: `border-[--success] bg-[--success]/10`
- "Chosen" badge: `text-[--success] text-xs uppercase tracking-widest`
- Rationale: `text-[--muted-ink]`
- Trade-off line: `text-[--warm-sand] text-sm`

### OpenSourceBadge (new)
- Card style: same as ProjectTeaserCard
- Org name: `text-[--coral] text-xs uppercase`
- Contribution text: `text-[--ink]`
- Changelog link: `text-[--signal]`

### EngineeringPrinciple (new)
- Icon: Lucide icon at `text-[--burnt-orange]`
- Name: `text-[--ink] font-display text-xl`
- Statement: `text-[--muted-ink] text-sm`
- Evidence: `text-[--warm-sand] text-xs italic`

---

## Animation

All animations use the `motion` library (already installed).

### Rules
1. All animations respect `prefers-reduced-motion: reduce` — provide `initial/animate` with no movement for reduced motion
2. No animations on initial page load (avoid CLS)
3. Scroll-triggered reveals: `whileInView` with `viewport={{ once: true }}`
4. Architecture node reveal: `animate` on panel show (height/opacity)
5. Hover lifts: `whileHover={{ y: -2 }}` — subtle, not dramatic

### Patterns
```typescript
// Scroll reveal (standard)
initial={{ opacity: 0, y: 16 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.4, ease: 'easeOut' }}

// Node detail panel reveal
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
transition={{ duration: 0.25 }}

// Reduced motion override
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Use motion.div with animate based on reducedMotion flag
```

---

## Icons

Use Lucide React exclusively. Key icons:
- Architecture nodes: `Globe`, `Server`, `Cloud`, `Zap`, `Database`, `Box`
- Engineering principles: `Shield`, `Layers`, `Eye`, `Wrench`
- CTAs: `Download`, `Mail`, `Linkedin`, `Github`, `ArrowRight`
- Decision card: `GitBranch`, `CheckCircle`
- OSS: `GitPullRequest`

---

## Responsive Breakpoints

| Breakpoint | Width | Key changes |
|------------|-------|------------|
| Mobile | < 640px | Single column, hamburger nav, full-width CTAs |
| Tablet | 640–1023px | Two-column starts, nav still condensed |
| Desktop | ≥ 1024px | Full layout, sticky header, sidebar patterns |

Grid patterns:
- Hero: `grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]`
- Projects: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Tech evidence: `grid-cols-1 md:grid-cols-2 xl:grid-cols-3`
- Decision cards: `grid-cols-1 lg:grid-cols-2`
- Architecture flow: single vertical column (desktop and mobile)

---

## Accessibility States

- **Focus**: `focus-visible:ring-2 focus-visible:ring-[--burnt-orange] focus-visible:outline-none`
- **Active**: `active:scale-95` on interactive elements
- **Disabled**: `opacity-50 cursor-not-allowed`
- **Selection**: `::selection { background: var(--coral); color: white; }` (existing)
