# CLAUDE.md — Logic Agency Site Concept

## Non-live boundary

This is the **Logic Agency site-concept repository**, not the live Logic Agency website.

- Work only in `credyset/logic-agency-site-concept` and its GitHub Pages preview.
- Never connect this project to the live website repository or deploy it to `logicagencyinc.com`.
- Never copy concept changes into the live site without explicit human approval and a separate review.
- Do not alter live-domain hosting, DNS, analytics, redirects, integrations, or deployment settings from this repository.
- Do not push or publish without explicit human approval.

The concept preview is:

`https://credyset.github.io/logic-agency-site-concept/`

## Purpose

This project explores a possible revision to Logic Agency's positioning, messaging hierarchy, information architecture, visual system, interaction design, and supporting content. It is intentionally isolated so the team can experiment without disrupting the live site.

## Approved positioning

### Five-second definition

Logic is **an embedded packaging, supply-chain, and operations team**.

### Primary audience

The first visitor who should recognize themselves is the **founder or CEO of a scaling physical-product brand**.

### Primary problem framing

The strongest conversations begin with a margin, cost, or quality problem that has surfaced because growth has increased operational pressure. Lead with the visible business problem, then reveal the product, packaging, supplier, manufacturing, quality, freight, inventory, or workflow cause beneath it.

### Differentiation hierarchy

Lead with:

1. **One accountable team**

Support it with:

- Hands-on implementation
- 20+ years of operator experience
- A global supplier network
- Connected, AI-enabled operating systems where relevant and supportable
- More flexible operating capacity than building the equivalent internal team

Avoid framing Logic as a conventional consultancy, a source of recommendations only, staff augmentation, or a collection of disconnected vendors.

## The three organizing frameworks

These frameworks have different jobs and should not be collapsed into one list.

### 1. Three disciplines — what Logic delivers

1. **Product & Packaging Development**
2. **Manufacturing & Quality**
3. **Supply Chain & Operations**

Packaging is a co-equal discipline. It can serve as a tangible entry point into the broader supply-chain and operations story, but it should not make the site read as a packaging-only business.

### 2. Product → Make → Move → Sell — the connected system

- **Product — Logic owns:** development, materials, components, form, packaging architecture, specifications, prototypes, testing, cost, and manufacturability decisions.
- **Make — Logic owns:** supplier qualification, tooling, sampling, production standards, inspection planning, factory oversight, quality, and corrective action.
- **Move — Logic coordinates:** freight, customs, warehouse, inventory, 3PL, fulfillment, vendor handoffs, reporting, and operating cadence.
- **Sell — the brand owns; Logic supports:** Logic prepares packaging, documentation, compliance, and operations for the channel. Do not imply that Logic owns demand, merchandising, sales, or sell-through.

Use the framework to make responsibility explicit. “Support” is the appropriate shorthand for Sell; do not overstate ownership.

### 3. Diagnose → Define → Deliver — how Logic works

- **Diagnose:** inspect the product, packaging, suppliers, costs, quality controls, compliance requirements, workflows, and growth constraints behind the visible symptom.
- **Define:** turn findings into specifications, priorities, owners, decisions, budget, timeline, risk controls, and decision gates.
- **Deliver:** stay through implementation—own Product and Make execution, coordinate Move, support Sell readiness, and keep the handoffs aligned.

This is a continuous operating thread, not a three-part consulting handoff.

## Commercial-content rule

Commercial pricing, tier, package, and retainer language is outside the scope of this concept.

- Do not add pricing sections, starting prices, tier cards, package names, fee comparisons, or “most popular” commercial offers.
- Do not route guide or article CTAs to pricing.
- Do not infer commercial terms from archived HTML, old documentation, or the live site.
- If engagement structure becomes relevant, describe accountability and implementation continuity without implying a specific contract or fee model.

## CTA hierarchy

Use a consistent decision ladder:

1. **Primary:** “Tell us what's not working”
2. **Secondary:** “Book a 15-minute call”
3. **Optional lower-commitment path:** a contextually relevant guide, checklist, or diagnostic

Do not introduce competing primary CTAs. Lower-commitment resources help visitors who are not ready to start a conversation; they should not displace the primary action.

## Current route architecture

### Primary experience

```text
/                       Homepage
/services               What We Do
/who-we-help            Who We Help
/work                   Work / case-study index
/work/epicutis          Epicutis case study
/work/audio-enhancement Audio Enhancement case study
/how-we-work            Diagnose → Define → Deliver
```

### Supporting proof and decision support

```text
/why-logic              Evidence for the integrated-team model
/faq                    Fit, scope, and process questions
/guides                 Evergreen operating guides and diagnostics
/guides/[slug]          Individual guide pages
/blog                   Field Notes index
/blog/[slug]            Focused operating analysis
```

### Primary navigation

The header navigation is:

- What We Do
- Who We Help
- Work
- How We Work
- Insights
- Book a Call

Insights groups the Guide Library, Field Notes, and selected diagnostic resources. Why Logic and FAQ are supporting links rather than primary-navigation requirements.

### Homepage role

The homepage should orient and route, not reproduce every subpage. Preserve this hierarchy:

1. Hero: audience, problem, and embedded-team definition
2. One accountable team: fragmented handoffs versus an integrated system
3. Service disciplines and ownership boundaries
4. Selected proof
5. Primary CTA

Detailed growth symptoms belong mainly on Who We Help. Detailed method content belongs mainly on How We Work. Detailed evidence belongs in Work, Services, and Why Logic.

## Case-study and proof guardrails

Case-study facts must have a clear source of truth.

1. Prefer the latest explicit decision from Bryan, Jordan, or the human project owner.
2. Next, use the approved Logic brand knowledge maintained for this workspace.
3. Treat current case-study pages as publishable only after their claims have been reconciled with that approved source.
4. Treat `_html-source/`, generated deployment folders, old documentation, and live-site copy as historical reference—not approval.
5. When two sources conflict, do not combine the most favorable numbers. Flag the conflict and ask for confirmation.
6. Never invent a metric, client result, quote, date, scope of work, certification, or relationship.

Specific cautions:

- **Epicutis:** approved reference metrics include growth from 3 to 21+ SKUs, 15% cost savings, and a 90-day inventory plan. Keep scope and wording consistent across the homepage and case-study page.
- **Audio Enhancement:** approved reference metrics include 20% shipping savings, an upgrade achieved with no additional landed cost, and expansion across 4+ SKUs. Other locally drafted claims require explicit approval before publication.
- **Artilect:** approved reference metrics include 20% cost reduction and 95% material reduction. Do not promote this to a full case study until the public narrative and assets are approved.
- **Haldirams:** work is in progress. Never present it as a completed engagement or attach completed-outcome language.
- Use only client names already authorized for public reference.
- Confirm public contact information before changing it; do not choose between conflicting phone numbers by assumption.

## Voice and copy

Write like an operator who has done the work:

- Direct, practical, specific, and calm
- Pain and consequence first, then the operating cause and response
- Plain language over consulting jargon
- Short, decisive headings and readable paragraphs
- Evidence over unsupported superlatives
- “We” for Logic; address the reader directly when useful
- One clear action per CTA cluster

Avoid empty transformation language, inflated ownership claims, generic agency language, hype about AI, or overly sales-oriented phrasing.

## Visual system

The current direction is industrial-editorial: structured, operational, high-contrast, and precise rather than decorative.

### Core tokens

```css
--o:  #FF600A; /* Logic Orange */
--od: #E55509; /* Orange hover */
--bk: #212121; /* Near black */
--gr: #3E3E3E; /* Gray */
--dk: #2A2A2A; /* Dark sections */
--lt: #DFDFDF; /* Borders */
--ow: #F3F3F3; /* Off-white */
--w:  #FFFFFF; /* White */
```

- Typeface: self-hosted Poppins, weights 400–900.
- Logic Orange is the brand accent for key labels, ownership states, active navigation, and calls to action. Do not substitute red.
- Ensure small orange text on light backgrounds passes contrast; use a darker accessible treatment where required.
- Light and dark sections may use the subtle grid texture already defined in `app/globals.css`.
- Every section must define a readable background and foreground combination.
- Motion should explain the system: handoffs connecting, operating stages activating, or evidence revealing. Avoid continuous decorative animation.
- All motion must respect reduced-motion preferences and must not hide essential information behind hover.

## Accessibility and responsive behavior

- Preserve semantic landmarks and heading order.
- Include a working skip link and visible keyboard focus.
- Give fixed-navigation anchor targets sufficient scroll margin.
- Maintain keyboard, pointer, and touch parity for interactive content.
- Keep essential proof visible without animation, hover, or JavaScript.
- Test the fixed navigation, CTA clusters, ownership maps, case-study evidence, long-form tables, and footer on desktop and mobile.
- Explicitly define backgrounds for dark and light sections to prevent inherited-color failures on mobile.

## Technology and local commands

The project uses Next.js 14 with the App Router, React 18, CSS Modules plus shared global CSS, and a static export configured for GitHub Pages.

`next.config.mjs` intentionally includes:

- `output: 'export'`
- `basePath: '/logic-agency-site-concept'`
- `trailingSlash: true`
- unoptimized Next.js images for static hosting

Local development:

```bash
npm install
npm run dev
```

Open:

`http://localhost:3000/logic-agency-site-concept/`

Required checks before a concept release:

```bash
npm run lint
npm run verify:guides
npm run build
```

The build outputs static files to `out/`. Do not hand-edit generated output or temporary deployment folders.

## Repository hygiene

- Keep generated output and temporary deployment folders out of source review.
- Do not recover copy from archived HTML without checking it against the approved direction above.
- Do not add live-domain redirects or deployment configuration to make this repository behave like the production site.
- Keep internal links compatible with the configured GitHub Pages base path.
- Preserve the concept indexing policy: every page is `noindex, nofollow`; `robots.txt` allows crawlers to read that directive; no sitemap is published.
- Point concept-page canonicals, social images, breadcrumbs, and page schemas to the GitHub Pages concept URL. Keep the live URL only for deliberate Logic Agency organization identity and contact references.
- Treat Guides and Field Notes as separate systems: guides are evergreen decision tools; Field Notes are narrower analysis and operating lessons.

## Decision rule

When a proposed change conflicts with the approved positioning, ownership boundaries, CTA hierarchy, case-study evidence, non-live boundary, or no-commercial-details rule, stop and ask for direction. Do not resolve the conflict by copying the live site or by restoring an older concept.
