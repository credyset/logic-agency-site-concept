import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import CaseStudyFaqAccordion from '@/components/CaseStudyFaqAccordion';

const faqs = [
  {
    question: 'How does Logic handle supplier transitions without disrupting production?',
    answer: 'We run the transition in parallel with current production — not sequentially. We identify new supplier candidates, manage sample development and pilot runs, and apply 100% QC to pilot production before the existing supplier is wound down. The goal is an operating bridge, not a gap.',
  },
  {
    question: 'What does a quality containment process look like in practice?',
    answer: "We build a QC line around already-produced inventory: inspect units, remove non-conforming product, and document what's usable before it reaches the packout stage. For Audio Enhancement this meant Logic team presence both at the factory and with the client's internal team — not a remote review process.",
  },
  {
    question: 'How do you know when a supplier has hit its ceiling?',
    answer: "The signals are usually: quality drift that correlates with volume increases, slower lead times as your orders grow relative to their capacity, inconsistency between batches that wasn't present at lower volumes, and an inability to absorb timeline changes. A supplier who was perfect at 5,000 units may not be the right answer at 50,000.",
  },
  {
    question: 'Does Logic work with consumer electronics and hardware brands, or just beauty/CPG?',
    answer: 'We work across consumer product categories — beauty, CPG, food and beverage, consumer electronics, hardware, and institutional products. The supply chain and packaging challenges are different by category, but the operational problems (supplier fit, quality at scale, retail compliance, inventory management) translate across verticals.',
  },
  {
    question: "What's the difference between Logic and a supply chain consultant?",
    answer: "A consultant diagnoses and recommends. Logic owns execution. We manage vendors, run QC, coordinate the transition, and stay accountable for results. On a project like Audio Enhancement, we weren't advising from the outside — we had people on-site managing the actual process.",
  },
];

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Logic Helped Audio Enhancement Remove a Supplier Bottleneck and Protect Product Growth",
  "description": "Audio Enhancement had outgrown the supplier behind a small but highly visible product component. Logic stabilized quality in the interim and managed the transition to a larger-scale manufacturing partner.",
  "author": {
    "@type": "Organization",
    "name": "Logic Agency Inc.",
    "url": "https://www.logicagencyinc.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Logic Agency Inc.",
    "url": "https://www.logicagencyinc.com"
  },
  "mainEntityOfPage": "https://www.logicagencyinc.com/work/audio-enhancement",
  "datePublished": "2026-06-16",
  "dateModified": "2026-06-20",
  "keywords": ["supplier transition", "supply chain management", "quality control", "fractional supply chain", "CPG operations"]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Logic Agency", "item": "https://www.logicagencyinc.com" },
    { "@type": "ListItem", "position": 2, "name": "Client Work", "item": "https://www.logicagencyinc.com/#results" },
    { "@type": "ListItem", "position": 3, "name": "Audio Enhancement", "item": "https://www.logicagencyinc.com/work/audio-enhancement" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Logic Agency do when a supplier can't keep up with growth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Logic qualifies alternative manufacturing partners with the capacity and quality standards to support the next stage of scale, manages sample development and pilot runs, and bridges the transition without disrupting current production or customer-facing product quality."
      }
    },
    {
      "@type": "Question",
      "name": "How do you manage a factory transition without creating a supply gap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The key is running the transition in parallel with current production. Logic manages new supplier qualification, pilot runs, and 100% QC on those pilot runs while the existing factory continues operating. The goal is protecting replenishment confidence during the handover."
      }
    },
    {
      "@type": "Question",
      "name": "When should a CPG brand switch manufacturing partners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When quality drift or capacity ceiling is limiting growth — not after a visible failure. The right time to qualify a second source is before the current supplier becomes a bottleneck. Logic recommends building a backup manufacturing layer once a product is in broad distribution."
      }
    },
    {
      "@type": "Question",
      "name": "What is interim QC and when is it needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interim QC is a quality control process built around existing inventory to identify and remove non-conforming units before they reach the final product. It is most valuable when a supplier issue has already produced some affected units and the brand needs to keep operations moving while the root cause is resolved."
      }
    }
  ]
};

export const metadata = {
  title: 'Audio Enhancement Case Study | Logic Agency',
  description: 'How Logic Agency helped Audio Enhancement qualify a new manufacturing partner and protect product quality through a supplier transition — keeping growth on track.',
  keywords: 'supply chain supplier transition, packaging manufacturer qualification, product quality management CPG, fractional supply chain operations',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/work/audio-enhancement',
  },
  openGraph: {
    title: 'How Logic Helped Audio Enhancement Remove a Supplier Bottleneck and Protect Product Growth',
    description: 'Audio Enhancement had outgrown the supplier behind a visible product component. Logic stabilized quality and managed the transition to a manufacturing partner that could support scale.',
    url: 'https://www.logicagencyinc.com/work/audio-enhancement',
    type: 'article',
    publishedTime: '2026-06-16',
    authors: ['Jordan Harper'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Logic Helped Audio Enhancement Protect Product Growth',
    description: 'Audio Enhancement had outgrown their supplier. Logic stabilized quality, managed the transition, and kept growth on track.',
  },
};

export default function AudioEnhancementCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav variant="guide" />

      <section className="cs-hero">
        <div className="cs-hero-inner">
          <div className="breadcrumb"><a href="/">Logic Agency</a> &nbsp;/&nbsp; <a href="/#results">Work</a> &nbsp;/&nbsp; Audio Enhancement</div>
          <div className="cs-eyebrow">Case Study &middot; Supply Chain &amp; Manufacturing</div>
          <h1>When a Supplier Can&apos;t Keep Up <span>With Your Growth</span></h1>
          <p className="cs-lede">Audio Enhancement had outgrown the factory behind their premier classroom product component. Logic stabilized quality, kept operations running, and managed the transition to a manufacturing base that could support the next stage of scale &mdash; without disrupting product availability.</p>
          <div className="cs-meta">
            <div><strong>Jordan Harper</strong>, Logic Agency Inc.</div>
            <div className="cs-meta-pill">Supply Chain</div>
            <div className="cs-meta-pill">Manufacturing Transition</div>
            <div className="cs-meta-pill">Quality Control</div>
            <div>8 min read</div>
          </div>

          <div className="cs-hero-img cs-photo">
            <img src="/images/work/audio-enhancement/teacher-box-blue-bg.jpg" alt="Audio Enhancement redesigned teacher microphone packaging by Logic Agency" />
            <div className="cs-hero-img-badge">Project Image</div>
          </div>
        </div>
      </section>

      <div className="stat-bar">
        <div className="stat-box">
          <div className="stat-num">100%</div>
          <div className="stat-label">Pilot Run QC</div>
          <div className="stat-note">Every unit inspected before scale</div>
        </div>
        <div className="stat-box">
          <div className="stat-num">0</div>
          <div className="stat-label">Customer-Facing Disruption</div>
          <div className="stat-note">Transition invisible to end customers</div>
        </div>
        <div className="stat-box">
          <div className="stat-num">2&times;</div>
          <div className="stat-label">Manufacturing Capacity</div>
          <div className="stat-note">New supplier supports next growth stage</div>
        </div>
      </div>

      <div className="article">
        <div className="article-inner">

          <h2>The Problem: A Supplier That Worked &mdash; Until It Didn&apos;t</h2>

          <p>Audio Enhancement makes classroom audio systems used by educators across the country. The product is highly visible in its environment. Every teacher and student who interacts with it sees it up close, every day.</p>

          <p>At the center of this engagement was a badge &mdash; a small, customer-facing component that Bryan Wilson, Logic&apos;s COO, called the client&apos;s &quot;premier product&quot; piece. The badge wasn&apos;t a packaging problem. It was a product problem. The finish had started to drift. The craftsmanship was no longer consistent enough for a classroom-facing product at scale.</p>

          <div className="callout">
            <p><strong>The underlying issue wasn&apos;t quality control failure &mdash; it was a supplier that had reached its ceiling.</strong> Early-stage factories can handle low order quantities and early-version specs. Once volume and customer expectations increase, the same supplier can become the wrong answer.</p>
          </div>

          <p>The commercial risk was real: if Audio Enhancement kept shipping a visible product component that looked inconsistent, the problem wouldn&apos;t register as a supplier issue to the customer. It would register as a product quality issue. That kind of perception is hard to undo at scale.</p>

          <div className="image-compare">
            <div>
              <img src="/images/work/audio-enhancement/old-packaging-1.jpeg" alt="Audio Enhancement legacy teacher microphone packaging before supplier transition" />
              <span>Before / Legacy Packaging</span>
            </div>
            <div>
              <img src="/images/work/audio-enhancement/updated-packaging-interior.jpg" alt="Audio Enhancement updated teacher microphone packaging interior after supplier transition" />
              <span>After / Updated Packaging</span>
            </div>
          </div>
          <p className="img-caption">Before/After &mdash; product packaging and component presentation across the supplier transition.</p>

          <h2>What Logic Did: Two Problems at the Same Time</h2>

          <p>Logic handled the immediate situation and the structural one simultaneously &mdash; which is the only way supplier transitions at scale can work.</p>

          <div className="step-list">
            <div className="step">
              <div className="step-n">1</div>
              <div>
                <h4>Containment &mdash; Protecting Current Inventory</h4>
                <p>The first priority was the product already produced. Logic built and managed a QC team to inspect existing badges, remove units that didn&apos;t meet the standard, and keep the client&apos;s operations moving while the supplier base was being rebuilt. Logic team members were on-site at the factory and with the client&apos;s packout team. The goal was to protect launch confidence and replenishment planning &mdash; not write a quality improvement plan.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-n">2</div>
              <div>
                <h4>Transition &mdash; The Operating Bridge</h4>
                <p>Changing factories midstream is delicate. The existing supplier was still producing. The new supplier needed samples, pilot runs, and validation. The product had to stay visually consistent throughout. Logic managed the full sequence: sample development, pilot runs, and 100% QC on those pilots while the current factory was still operating near its ceiling. That is not a normal handoff &mdash; it is an operating bridge designed to eliminate delay.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-n">3</div>
              <div>
                <h4>Scale &mdash; Unlocking the Next Stage</h4>
                <p>The long-term goal wasn&apos;t better badges. It was a manufacturing base capable of supporting the next level of volume and quality expectations without constant operational drag. Once the new supplier was qualified, Audio Enhancement could keep growing without the same ceiling limiting replenishment and rollout confidence.</p>
              </div>
            </div>
          </div>

          <div className="chart-placeholder">
            <div className="chart-title">Supplier Transition Timeline</div>
            <div className="chart-bars">
              <div className="bar dim" style={{ height: '30%' }}></div>
              <div className="bar dim" style={{ height: '45%' }}></div>
              <div className="bar" style={{ height: '70%' }}></div>
              <div className="bar" style={{ height: '80%' }}></div>
              <div className="bar" style={{ height: '95%' }}></div>
              <div className="bar" style={{ height: '100%' }}></div>
            </div>
            <div className="chart-labels">
              <div className="chart-label">Week 1&ndash;2<br />Audit</div>
              <div className="chart-label">Week 3&ndash;4<br />Contain</div>
              <div className="chart-label">Week 5&ndash;6<br />Sample</div>
              <div className="chart-label">Week 7&ndash;8<br />Pilot QC</div>
              <div className="chart-label">Week 9&ndash;10<br />Qualify</div>
              <div className="chart-label">Week 11+<br />Scale</div>
            </div>
            <div className="chart-note">[ Illustrative timeline &mdash; actual durations are client-specific. ]</div>
          </div>

          <h2>The Outcome: Operational Continuity Through a Supplier Change</h2>

          <p>The strongest measure of this project&apos;s success isn&apos;t a defect rate. It&apos;s that Audio Enhancement moved from a factory that had reached its ceiling to a manufacturing base capable of supporting continued growth &mdash; and customers never felt the transition.</p>

          <p>Supplier transitions often create the exact problem they&apos;re supposed to fix: samples drift, pilot runs fail, the existing factory loses focus, inventory gets held up. Logic&apos;s role was to manage those risks in parallel, not sequentially, so the product could keep moving while the operating system caught up with the company&apos;s growth.</p>

          <div className="cs-quote">
            <p>&quot;The right factory at 5,000 units can be the wrong factory at 50,000. That&apos;s not a quality problem &mdash; it&apos;s a growth problem. And it needs to be solved like one.&quot;</p>
            <div className="cs-quote-attr"><span>Jordan Harper</span> &mdash; Founder, Logic Agency Inc.</div>
          </div>

          <h2>Why This Happens at Scaling Consumer Brands</h2>

          <p>Most brands don&apos;t outgrow their product before they outgrow their suppliers. The first factory is chosen for access, speed, or low MOQ. That&apos;s often right at the start. But as volume increases, as customer expectations solidify, and as retail or institutional accounts start demanding consistency at scale, the same factory can stop being the right answer.</p>

          <p>The mistake is waiting until quality visibly breaks before building the next supplier layer. By then, the disruption is already customer-facing. For scaling brands in consumer electronics, hardware, CPG, or classroom products, Logic&apos;s approach is to qualify the next supplier before the current one hits its ceiling &mdash; not after.</p>

          <h3>Related Reading</h3>
          <div className="guide-links">
            <a href="/guides/packaging-sourcing" className="guide-link-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
              <div>
                <h4>How to Source Packaging Without Getting Burned</h4>
                <p>Supplier qualification, landed cost modeling, and overseas sourcing math.</p>
              </div>
              <div className="guide-link-arrow">&rarr;</div>
            </a>
            <a href="/guides/retail-readiness" className="guide-link-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"></path><path d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z"></path></svg>
              <div>
                <h4>The Retail Readiness Bible</h4>
                <p>The compliance, packaging, and supply chain work required before a retail launch.</p>
              </div>
              <div className="guide-link-arrow">&rarr;</div>
            </a>
            <a href="/guides/packaging-cost-reduction" className="guide-link-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              <div>
                <h4>Packaging Cost Reduction Without Sacrificing Brand</h4>
                <p>Where packaging margin leaks and how brands typically save 15&ndash;30%.</p>
              </div>
              <div className="guide-link-arrow">&rarr;</div>
            </a>
          </div>

          <CaseStudyFaqAccordion items={faqs} />

        </div>
      </div>

      <section className="cta-band">
        <div className="cta-inner">
          <h2>Supplier ceiling <span>limiting your growth?</span></h2>
          <p>Most brands discover the problem after it&apos;s already customer-facing. We help you find and qualify the next supplier tier before you hit that ceiling.</p>
          <div className="cta-btns">
            <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a>
            <a href="/guides/packaging-sourcing" className="bt bw">Sourcing Guide</a>
          </div>
          <span className="cta-sub">Logic Agency Inc. &middot; Supply Chain &amp; Packaging Ops on Monthly Retainer</span>
        </div>
      </section>

      <section className="related">
        <div className="related-inner">
          <h3>More Work</h3>
          <div className="related-links">
            <a href="/#results" className="related-link">
              <h4>Epicutis &mdash; Packaging at Scale</h4>
              <p>From 3 SKUs to 21+, managed inventory and normalized ordering across a growing clinical skincare line.</p>
            </a>
            <a href="/#results" className="related-link">
              <h4>Sleep Me &mdash; Packaging Redesign</h4>
              <p>A full packaging overhaul for a consumer wellness device brand preparing for broader distribution.</p>
            </a>
          </div>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
