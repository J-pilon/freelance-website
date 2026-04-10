# Design Brief – ClientFirst Labs

## Strongest Sources of Truth
- `app/views/home/index.html.erb` (utility-first homepage implementation, section rhythm, CTA hierarchy, conversion flow)
- `app/views/shared/_navbar.html.erb`, `app/views/shared/_footer.html.erb`, and `app/views/shared/page/*` (global navigation/footer and reusable page primitives)
- `app/assets/stylesheets/application.tailwind.css` and `config/tailwind.config.js` (brand color tokens and base utility defaults; homepage-specific component CSS was removed)
- Service and case-study templates in `app/views/services/*` and `app/views/case_studies/*` (repeated voice, proof-oriented narrative structure, card treatments)
- `Objectives/Startup_Positioning_and_Homepage_Conversion.md` (explicit positioning intent and conversion focus)
- `app/javascript/controllers/*` (interaction model: smooth scroll, active section highlighting, basic carousel behavior)
- `app/assets/images/icons/*` and `app/assets/images/icons/swoosh.svg` (icon style and recurring visual motif)

## Product Overview
- The website presents ClientFirst Labs as a startup software development partner focused on MVP development, startup product development, prototype refactoring, and AI/automation.
- The primary audience appears to be early-stage Canadian founders (pre-seed to Series A, small founder-led teams).
- The core brand impression is: senior, pragmatic, fast-moving execution partner with startup-specific context and measurable business outcomes.

## Mission
- Help early-stage startup founders ship production-ready products faster, with senior-level engineering and outcome-focused execution that protects runway and improves traction.

## Brand Personality
- **Founder-first**: Repeated phrasing like "partner, not vendor" and "extension of your founding team" frames collaboration style.
- **Pragmatic**: Messaging emphasizes scope discipline, fixed deliverables, avoiding over-engineering, and startup constraints.
- **Direct**: Copy uses plain language, concrete claims, and explicit qualification ("pre-seed to Series A", "1–10 employees").
- **Credibility-led**: Frequent proof blocks (percent improvements, dollar outcomes, timelines) reinforce trust through results over aesthetics.
- **Technical but accessible**: Strong engineering claims are present, but copy avoids heavy jargon and remains understandable to non-technical founders.

## Tone and Feel
- Emotional tone: confident, reassuring, execution-oriented.
- Visual tone: dark, high-contrast, restrained, modern startup/technical consultancy.
- Formality level: professional but conversational; avoids corporate legalese.
- Overall feel: premium-leaning and trustworthy, but not luxury-polished; more "operator" than "agency showcase."

## Voice
- Sentence style: short-to-medium, declarative, often outcome-first.
- Clarity level: high; copy is scannable and structured around founder concerns (timeline, cost, risk, speed).
- Character: confident, practical, warm-direct, mildly persuasive.
- Example lines inspired by existing tone:
  - "We scope to what validates your idea, not what looks impressive in a deck."
  - "Senior engineers only. No handoffs, no outsourcing, no surprise invoices."
  - "Built for founder speed, with production foundations that scale."
  - "Book a free 30-minute strategy call and pressure-test your next build decision."
  - "We optimize for traction milestones, not feature bloat."

## Visual Style
- Dark-theme dominant (`bg-background-navy`, `bg-background-black`) with bright accent CTAs.
- Rounded, soft geometry (`rounded-xl`, pill tags, rounded buttons) over sharp enterprise styling.
- Mostly flat surfaces with light elevation via subtle box shadows.
- Moderate information density: sectioned long-form landing pages with digestible cards and proof stats.
- Style category: modern startup consultancy/SaaS marketing hybrid.

## Brand Colors

| Color Name | Hex Code | Likely Use Case | Confidence Level |
|---|---|---|---|
| Background Black | `#030712` | Deep section backgrounds, global dark canvas | High |
| Background Navy / Gray-900 | `#111827` | Alternate section background, main app background | High |
| Primary Accent (Yellow) | `#FFD701` | Main CTA buttons, key links, highlight states, borders/shadows | High |
| Secondary Accent (Light Blue) | `#ADD8E6` | Emphasis text (hero highlight, metric numerals) | High |
| Gray-800 | `#1F2937` | Card surfaces (`bg-gray-800`), shadow color | High |
| Gray-300 | `#D1D5DB` | Light icon strokes (contact/hamburger icons) | High |
| White + transparency | Not tokenized as single hex | Body/headline text and layered dark UI surfaces (`white/5`, `white/70`, etc.) | High |
| Link Blue (`text-blue-500`) | Tailwind default (`#3B82F6` likely) | Global `a` base style in CSS; appears partially overridden in components | Medium |

## Typography

| Use Case | Font Family | Weight | Size Range | Notes |
|---|---|---|---|---|
| Display/Hero headings | Instrument Serif | Regular (400) | `clamp(34px–88px)` | Applied with Tailwind arbitrary font-family utilities for high-impact editorial-style headings |
| Section headings (`h2`/`h3`) | Instrument Serif + Inter var fallback context | Regular/Semibold | `text-[clamp(34px,4.7vw,56px)]` and card sizes | Main section pivots use serif display rhythm; card titles often use sans semibold |
| Body copy | Inter var / sans stack | Light/Regular | `text-base` to `text-lg` | Long-form copy uses muted gray (`text-gray-300`) with generous line-height (`1.65`) |
| Supporting/meta text | DM Mono | Regular/Medium | `text-[11px]` to `text-sm` | Used for eyebrow labels, stat descriptors, and uppercase utility metadata |
| CTA buttons | Inter var / sans stack | Semibold | `text-xs` to `text-sm` | Utility-first primary CTA with yellow fill + glow shadow token |
| Navigation labels | DM Mono + sans | Semibold | `text-[13px]` and `text-xs` CTA | Compact sticky nav with low-noise brand-first emphasis |

## UI Components and Patterns
- **Hero sections**: utility-first hero with radial accent gradients, serif display heading, muted supporting copy, and dual CTA pattern.
- **Section headers**: reusable pattern (`label` + large serif title + optional subtitle) now extracted to `shared/page/_section_heading.html.erb`.
- **Card system**: repeated `rounded-xl border border-white/10 bg-gray-800` cards for stats, outcomes, services, and blog placeholders.
- **Primary button**: reusable yellow CTA treatment via inline Tailwind utilities (rounded-md, dark text, glow shadow, subtle lift on hover).
- **Sticky global nav**: compact sticky nav with blurred dark background, mono brand text, and persistent "Book a Call" CTA.
- **FAQ accordion**: native `<details>` pattern retained with dark card treatment and clear content spacing.
- **Case-study storytelling blocks**: "Context / Challenge / Solution / Outcomes / Tech Stack" remains the narrative frame with consistent section heading rhythm.
- **Footer utility grid**: three-column footer with service navigation and contact links aligned to the home-page system.

## Layout and Spacing
- Page width tends to max out around `max-w-7xl` / `max-w-5xl`; content centered via `content-container`.
- Strong vertical rhythm: most sections use `py-16` with alternating dark backgrounds to segment narrative.
- Spacing is generous and breathable; cards use medium internal padding (`p-5`/`p-6`/`p-8`).
- Grid tendencies: 1-column mobile transitioning to 2-4 columns by breakpoint for stats/services/process blocks.
- Mobile responsiveness is clearly intentional (stacked sections, hidden desktop carousel on small screens, adaptive nav labels).

## Iconography and Imagery
- Icon style: minimal, monochrome outline SVGs with light/dark variants for contrast contexts.
- Illustration motif: abstract `swoosh` line graphic in muted gray supports hero without competing with copy.
- Photography/product imagery: mixed; includes founder portrait and product screenshots in case studies/services.
- Logo treatment: brand is primarily typographic ("ClientFirst Labs" text in nav/footer); no clearly defined primary logo lockup found for ClientFirst in current templates.
- Imagery posture: product-led and proof-led, with occasional human element; more technical than lifestyle-driven.

## Motion and Interaction
- Smooth-scroll behavior for in-page nav links (`window.scrollTo({ behavior: "smooth" })`).
- Active section highlighting in sticky homepage nav via IntersectionObserver.
- Lightweight transitions on interactive elements (`transition-colors`, `transition-all`, 200ms-like utility usage).
- FAQ micro-interaction: chevron rotation on open state.
- Carousel interaction exists for desktop case-study area with previous/next controls; autoplay is present in controller but disabled on homepage.
- Loading states and advanced motion system are **Not clearly defined in current codebase**.

## Tech Stack Signals
- Backend: Ruby on Rails 7 (`rails ~> 7.0.8`).
- Frontend rendering: server-rendered ERB templates.
- Styling: Tailwind CSS (`tailwindcss-rails`) with custom tokens/components.
- JS interaction layer: Hotwire stack (`turbo-rails`, Stimulus controllers).
- Data/infrastructure signals: PostgreSQL, Redis, Puma, Propshaft asset pipeline.
- Project positioning in content references integrations like AWS, Stripe, OpenAI/LLMs, React Native; these are clearly part of service narrative, while direct implementation depth in this repo is not fully visible.

## Design System Maturity
- **Assessment: improving toward a reusable page system (still evolving).**
- Why:
  - Home page is now utility-first, reducing one-off CSS coupling.
  - Reusable view primitives now exist in `app/views/shared/page/*` (hero, section heading, final CTA, contact block).
  - Dark theme + accent token usage is now more explicit in page markup and easier to audit.
  - Remaining risk: some legacy global base styles (`a`, headings) can still conflict with page-level intent if not overridden.

## Recommendations for Brand Clarity
- Define a single link style strategy (brand yellow vs inherited Tailwind blue) and remove conflicting defaults in base `a` styles.
- Formalize brand tokens (color aliases, spacing scale, border radius, shadow levels) in one documented source, then apply consistently.
- Create a standard CTA system with 2-3 approved labels and hierarchy rules (primary, secondary, text link) to reduce copy drift.
- Establish a simple component spec for repeated blocks (stat cards, process cards, proof cards, pill tags) to avoid visual variants multiplying.
- Add a clear ClientFirst logo asset/usage guideline (wordmark lockup, minimum size, contrast rules) since current identity is mostly text-only.
- Normalize typographic scale by context (marketing hero, section heading, body, metadata) and document usage examples.
- Define a lightweight motion guideline (durations/easing/interaction states) so hover, scroll, and carousel behavior feel systemized.
- Add a short voice-and-tone checklist in docs to preserve the strong "founder-first, no-fluff, outcomes-led" copy style across future pages.
