import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import CaseStudyFaqAccordion from '@/components/CaseStudyFaqAccordion';

const faqs = [
  {
    question: 'What is a managed packaging inventory program?',
    answer: "A managed packaging inventory program means Logic purchases and lands packaging at its warehouse on the brand's behalf, then releases it as production, replenishment, and launch needs arise. Instead of every packaging need triggering a new procurement cycle, inventory is pre-positioned and available within days.",
  },
  {
    question: 'How does Logic help brands reduce urgent air freight on packaging?',
    answer: 'By normalizing the packaging ordering cycle. When packaging is pre-positioned in a U.S. warehouse, brands can order in bulk, allocate to production on a predictable cadence, and avoid the planning failures that force expensive air shipments at the last minute.',
  },
  {
    question: 'At what point does a CPG brand need packaging operations support?',
    answer: 'When packaging complexity starts slowing down launches and replenishment. The signals: urgent freight becoming a regular cost, unclear landed costs across SKUs, co-manufacturers holding excess inventory, and the founder or ops team managing packaging procurement directly.',
  },
  {
    question: 'Can a scaling brand grow SKU count without adding operations headcount?',
    answer: "Yes, when the packaging and inventory operating load is carried by a fractional operations partner. Logic handles supplier coordination, inventory planning, landed cost tracking, and co-manufacturer replenishment so the brand's team can focus on product and growth.",
  },
  {
    question: 'What does Logic Agency actually own in a packaging relationship?',
    answer: 'Execution, not just recommendations. Logic owns the vendor relationships, manages inventory, runs the replenishment system, coordinates with co-manufacturers, and is accountable for packaging availability across launches and restocks. It is fractional operations, not consulting.',
  },
];

const caseStudySchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Logic Helped Epicutis Build the Packaging System Behind a Larger Growth Plan',
  description: 'Epicutis came to Logic with a narrow packaging need. Over time, the relationship expanded into packaging development, managed inventory, warehouse operations, and logistics normalization.',
  author: { '@type': 'Organization', name: 'Logic Agency Inc.', url: 'https://www.logicagencyinc.com' },
  publisher: { '@type': 'Organization', name: 'Logic Agency Inc.', url: 'https://www.logicagencyinc.com' },
  mainEntityOfPage: 'https://www.logicagencyinc.com/work/epicutis',
  datePublished: '2026-06-16',
  dateModified: '2026-06-22',
  keywords: ['packaging operations', 'managed inventory', 'fractional supply chain', 'CPG scaling', 'logistics normalization'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Logic Agency', item: 'https://www.logicagencyinc.com' },
    { '@type': 'ListItem', position: 2, name: 'Client Work', item: 'https://www.logicagencyinc.com/#results' },
    { '@type': 'ListItem', position: 3, name: 'Epicutis', item: 'https://www.logicagencyinc.com/work/epicutis' },
  ],
};

export const metadata = {
  title: 'Epicutis Case Study | Logic Agency',
  description: 'How Logic Agency helped Epicutis build the packaging system behind a multi-year growth plan: managed inventory, normalized logistics, and operational lift across 3 to 21+ SKUs.',
  keywords: 'Epicutis case study, packaging operations management, managed inventory program, CPG packaging supply chain, fractional supply chain operations',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/work/epicutis',
  },
  openGraph: {
    title: 'How Logic Helped Epicutis Build the Packaging System Behind a Larger Growth Plan',
    description: 'Epicutis came to Logic with a box. The relationship expanded into managed inventory, logistics normalization, and a packaging system that helped the brand grow from 3 to 21+ SKUs without adding headcount.',
    url: 'https://www.logicagencyinc.com/work/epicutis',
    type: 'article',
    publishedTime: '2026-06-16',
    modifiedTime: '2026-06-22',
    authors: ['Jordan Harper'],
    images: [{ url: 'https://www.logicagencyinc.com/images/work/epicutis/epicutis-kits-group-grey.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Logic Helped Epicutis Build the Packaging System Behind a Larger Growth Plan',
    description: 'Epicutis came to Logic with a box. The relationship expanded into managed inventory, logistics normalization, and a packaging system that helped the brand grow from 3 to 21+ SKUs.',
    images: ['https://www.logicagencyinc.com/images/work/epicutis/epicutis-kits-group-grey.jpg'],
  },
};

export default function EpicutisCaseStudy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav variant="guide" />

      <section className="cs-hero">
        <div className="cs-hero-inner">
          <div className="breadcrumb">
            <a href="/">Logic Agency</a> &nbsp;/&nbsp; <a href="/#results">Work</a> &nbsp;/&nbsp; Epicutis
          </div>
          <div className="cs-eyebrow">Case Study &middot; Packaging &amp; Operations</div>
          <h1>How Logic Helped Epicutis Build the Packaging System Behind <span>a Larger Growth Plan</span></h1>
          <p className="cs-lede">Epicutis came to Logic with a box to hold two things. The relationship expanded into packaging development, managed inventory, and logistics infrastructure that let the brand grow its SKU line and unit volume without growing its operations team.</p>
          <div className="cs-meta">
            <div><strong>Jordan Harper</strong>, Logic Agency Inc.</div>
            <div>Updated Jun 2026</div>
            <div className="cs-meta-pill">Packaging &amp; Supply Chain</div>
            <div className="cs-meta-pill">Beauty / Skincare</div>
            <div className="cs-meta-pill">Multi-Year Partnership</div>
          </div>
          <div className="cs-hero-img cs-photo">
            <img src="/images/work/epicutis/epicutis-kits-group-grey.jpg" alt="Epicutis skincare packaging system supported by Logic Agency" />
            <div className="cs-hero-img-badge">Epicutis</div>
          </div>
        </div>
      </section>

      <div className="stats-band">
        <div className="stats-inner">
          <div className="stat-box">
            <div className="stat-num">3 - 21+</div>
            <div className="stat-label">SKU growth supported</div>
            <div className="stat-note">through packaging operations</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">7 days</div>
            <div className="stat-label">Inventory gap coverage</div>
            <div className="stat-note">vs. 30-60 day prior timeline</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">Lean team</div>
            <div className="stat-label">Internal headcount maintained</div>
            <div className="stat-note">throughout SKU expansion</div>
          </div>
        </div>
      </div>

      <div className="article">
        <div className="article-inner">
          <h2>The Challenge</h2>
          <p>Epicutis did not start as a broad operations engagement. The original ask was simple: make a box to hold two things. That was the door.</p>
          <p>Behind it was a much bigger operating problem. As Epicutis grew, packaging complexity grew with it. More SKUs. More displays. More primary and secondary packaging. More inventory decisions. More packaging needed to be positioned before launches, replenishment windows, and co-manufacturer needs could move.</p>
          <p>The brand was still running lean, which was part of its strength. But that same lean structure created pressure as the SKU footprint expanded. Every packaging decision now touched more workflows: procurement, landed cost, co-manufacturer coordination, and freight timing.</p>

          <div className="callout">
            <p><strong>The problem was not packaging design.</strong> It was the operating system behind packaging: the system that determines whether growth can keep moving when the packaging footprint gets more complex.</p>
          </div>

          <div className="case-photo">
            <img src="/images/work/epicutis/epicutis-gradient.jpg" alt="Epicutis packaging range across skincare SKUs" />
          </div>

          <h2>What Logic Did</h2>
          <p>Logic&apos;s role expanded as Epicutis grew. The work included packaging development across SKUs, displays, primary packaging, and secondary packaging. But the deeper value was operational: Logic helped manage more complexity, improve packaging availability, and support growth without the brand having to build a larger internal team around it.</p>

          <div className="step-list">
            <div className="step">
              <div className="step-n">1</div>
              <div>
                <h4>Packaging Development</h4>
                <p>Packaging design and sourcing across new SKUs, displays, primary packaging, and secondary packaging, executed through Logic&apos;s global supplier network and managed through a consistent quality and timeline framework.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-n">2</div>
              <div>
                <h4>Managed Inventory Program</h4>
                <p>Logic created a managed inventory program out of its Salt Lake City warehouse. Logic purchased packaging, landed it, held it, and released it as the business needed, so Epicutis could pull inventory within days rather than triggering a new procurement cycle each time.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-n">3</div>
              <div>
                <h4>Landed Cost Clarity</h4>
                <p>As SKU count grew, Finance had increasing difficulty tracking which packaging costs belonged to which items. Logic helped create cleaner landed-cost visibility across the packaging portfolio, reducing allocation confusion and improving cost accountability.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-n">4</div>
              <div>
                <h4>Logistics Normalization</h4>
                <p>Logic supported a normalized packaging ordering cycle that reduced dependence on urgent air shipments driven by planning constraints. Packaging moved through a predictable logistics model instead of urgent freight becoming the fallback when inventory tightened.</p>
              </div>
            </div>
          </div>

          <h3>Before &amp; After: Packaging Operations Model</h3>
          <table className="ba-table">
            <thead>
              <tr><th>Area</th><th>Before Logic</th><th>After Logic</th></tr>
            </thead>
            <tbody>
              <tr><td>Inventory access</td><td className="ba-bad">30-60 day procurement cycle per need</td><td className="ba-good">7-day gap coverage from SLC warehouse</td></tr>
              <tr><td>Urgent freight</td><td className="ba-bad">Air shipments driven by poor planning</td><td className="ba-good">Normalized bulk ordering, predictable logistics</td></tr>
              <tr><td>Landed cost visibility</td><td className="ba-bad">Unclear allocation across growing SKUs</td><td className="ba-good">Clean cost tracking per item</td></tr>
              <tr><td>Internal headcount</td><td className="ba-bad">Scaling pressure as complexity grew</td><td className="ba-good">Lean team maintained throughout</td></tr>
              <tr><td>Co-manufacturer supply</td><td className="ba-bad">Excess inventory held on production floor</td><td className="ba-good">Just-in-time delivery from Logic warehouse</td></tr>
            </tbody>
          </table>

          <div className="case-flow">
            <div>Factory</div>
            <span>&rarr;</span>
            <div>SLC Warehouse</div>
            <span>&rarr;</span>
            <div>Co-Manufacturer</div>
          </div>

          <h2>The Impact</h2>
          <p>The outcome across the Epicutis relationship is that Logic helped the brand support a significantly larger packaging footprint: more SKUs, more packaging complexity, larger unit volume, without requiring the internal team to grow proportionally around it.</p>

          <div className="inline-stats">
            <div className="inline-stat">
              <div className="n">3 - 21+</div>
              <div className="l">SKUs supported</div>
            </div>
            <div className="inline-stat">
              <div className="n">7 days</div>
              <div className="l">Inventory gap coverage</div>
            </div>
            <div className="inline-stat">
              <div className="n">Lean</div>
              <div className="l">Team structure maintained</div>
            </div>
          </div>

          <p>The managed inventory program removed the planning friction that had been driving urgent air freight and replenishment gaps. The normalized ordering cycle gave the business more predictable logistics. The landed cost structure gave Finance cleaner data as the SKU portfolio grew.</p>

          <div className="case-photo">
            <img src="/images/work/epicutis/recovery-care-set.jpg" alt="Epicutis recovery care set packaging and product presentation" />
          </div>

          <div className="callout">
            <p>The value was not just that Logic could design or source packaging. The value was that Logic could carry part of the operating load <em>behind</em> packaging: inventory, landed cost, replenishment, freight timing, and supplier coordination.</p>
          </div>

          <h2>Why This Matters for Similar Brands</h2>
          <p>Packaging becomes more complicated as a brand grows. At the beginning, the problem is usually simple: make the box, hit the launch, get product out the door. At scale, packaging becomes an inventory problem, a co-manufacturer problem, a replenishment problem, and a launch calendar problem.</p>
          <p>The brands that navigate this well are the ones that recognize the shift early and find a partner who can carry the operating load, not just the design work. Logic&apos;s role with Epicutis was to turn packaging from a recurring urgent problem into a system the brand could grow through instead of around.</p>
          <p>If your packaging system still depends on urgent orders, air freight, unclear landed costs, and co-manufacturers holding excess inventory, the packaging is not just expensive. It is slowing growth down.</p>

          <CaseStudyFaqAccordion title="Common Questions" items={faqs} />
        </div>
      </div>

      <section className="cta-band">
        <div className="cta-inner">
          <h2>Is your packaging system <span>ready for the next stage?</span></h2>
          <p>Most brands find out it isn&apos;t during a launch or a retail PO. Tell us where the friction is and we&apos;ll be honest about what it takes to fix it.</p>
          <div className="cta-btns">
            <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a>
            <a href="/guides/packaging-system-that-scales" className="bt bw">Read the Scaling Guide</a>
          </div>
        </div>
      </section>

      <section className="related">
        <div className="related-inner">
          <h3>Related Guides</h3>
          <div className="related-links">
            <a href="/guides/packaging-system-that-scales" className="related-link">
              <h4>Building a Packaging System That Scales</h4>
              <p>When one-off packaging decisions become a system problem and how to fix it.</p>
            </a>
            <a href="/guides/packaging-cost-reduction" className="related-link">
              <h4>Packaging Cost Reduction Without Sacrificing Brand</h4>
              <p>Where packaging margin silently leaks and how brands typically save 15-30%.</p>
            </a>
            <a href="/guides/fractional-supply-chain-operations" className="related-link">
              <h4>Fractional Supply Chain Operations</h4>
              <p>What the fractional model actually costs and when it beats a full-time hire.</p>
            </a>
          </div>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
