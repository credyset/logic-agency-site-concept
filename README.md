# Logic Agency Site Concept

> **Concept repository only. This is not the production Logic Agency website.**

This repository is the isolated, non-live workspace for exploring a possible revision to the Logic Agency website. It is published only as a concept at:

- Repository: `credyset/logic-agency-site-concept`
- Preview: `https://credyset.github.io/logic-agency-site-concept/`

Nothing in this repository should be connected to, deployed over, or treated as the source for `logicagencyinc.com`. Moving any idea into the live website requires separate human approval and a separate implementation review.

## Approved concept direction

The concept positions Logic as:

> An embedded packaging, supply-chain, and operations team for founders and CEOs scaling physical-product brands.

The messaging begins with the problems growth exposes—especially margin, cost, and quality pressure—and explains how Logic finds the operational cause and implements the fix.

The site uses three complementary frameworks:

- **Three disciplines** describe what Logic delivers: Product & Packaging Development, Manufacturing & Quality, and Supply Chain & Operations.
- **Product → Make → Move → Sell** shows the connected product-to-market system and Logic's boundaries: Logic owns Product and Make, coordinates Move, and supports Sell while the brand retains ownership of demand and sell-through.
- **Diagnose → Define → Deliver** explains how an engagement moves from evidence to decisions to implementation.

The lead differentiator is **one accountable team**, supported by hands-on implementation, operator experience, a global supplier network, connected operating systems, and the efficiency of an embedded external team.

Commercial pricing, tier, package, and retainer language is intentionally excluded from this concept.

## Conversion hierarchy

- Primary action: **Tell us what's not working**
- Secondary action: **Book a 15-minute call**
- Lower-commitment alternative: use a relevant guide or diagnostic, such as the retail-readiness scorecard

## Current site structure

- `/` — positioning, integrated-team model, service overview, and selected proof
- `/services` — the three disciplines and Product → Make → Move → Sell ownership boundaries
- `/who-we-help` — growth situations and the founder/CEO audience
- `/work` — case-study index
- `/work/epicutis` and `/work/audio-enhancement` — current case-study detail pages
- `/how-we-work` — Diagnose → Define → Deliver and implementation continuity
- `/why-logic` — evidence for the integrated-team model
- `/faq` — common fit, scope, and process questions
- `/guides` — evergreen operating playbooks and diagnostics
- `/blog` — Field Notes and focused operating analysis

The primary navigation is **What We Do, Who We Help, Work, How We Work, Insights, and Book a Call**. Why Logic and FAQ remain supporting routes.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/logic-agency-site-concept/`.

Quality checks:

```bash
npm run lint
npm run verify:guides
npm run build
```

The project uses a static Next.js export with the `/logic-agency-site-concept` base path for GitHub Pages. A successful build writes the generated site to `out/`.

The public concept intentionally uses page-level `noindex, nofollow` metadata. `robots.txt` allows crawling so search engines can read that directive, and the concept does not publish a sitemap. Concept-page canonicals and social metadata must point to the GitHub Pages concept URL; the live domain may appear only as Logic Agency's organization identity or contact information.

## Publishing boundary

Publishing, pushing, or changing deployment configuration requires human approval. Approved work in this repository may be published only to the concept repository and its GitHub Pages preview. Do not change the live domain, live repository, production analytics, production hosting, or production deployment configuration from this workspace.

## Review status

This is an active design and messaging concept. Case-study facts, public contact details, metadata policy, resource-library content, responsive behavior, accessibility, and deployment hygiene must be checked before each public concept release.
