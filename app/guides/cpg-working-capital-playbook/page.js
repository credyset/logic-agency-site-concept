import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import EmailButton from '@/components/EmailButton';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The CPG Working Capital Playbook",
  "description": "How CPG brands fund growth without dilution: the diagnostic question (loss vs. working capital), the 90-180 day cash conversion cycle, gross-to-net deduction math, revolving credit lines, PO/AR financing, and when equity IS the right tool.",
  "author": {
    "@type": "Organization",
    "name": "Logic Agency Inc.",
    "url": "https://logicagencyinc.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Logic Agency Inc."
  },
  "mainEntityOfPage": "https://logicagencyinc.com/guides/cpg-working-capital-playbook",
  "datePublished": "2026-07-27",
  "dateModified": "2026-07-27"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a CPG cash conversion cycle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The time from paying suppliers to collecting from retailers. For imported CPG products selling through retail, this cycle typically runs 90-180 days."
      }
    },
    {
      "@type": "Question",
      "name": "How much of gross revenue do retailers actually pay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After trade spend, deductions, chargebacks, and freight allowances, most CPG brands collect 55-70% of their gross invoice amount from retail channels."
      }
    },
    {
      "@type": "Question",
      "name": "When should a CPG brand use debt vs equity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use debt (revolving credit, PO financing, AR factoring) when unit economics are positive and the problem is cash timing. Use equity when unit economics need fixing or you need runway to build before revenue."
      }
    },
    {
      "@type": "Question",
      "name": "What is PO financing for CPG brands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A funding tool where a lender advances cash against confirmed purchase orders from retailers. Typically costs 15-30% annualized and works for brands with strong retail POs but limited operating history."
      }
    },
    {
      "@type": "Question",
      "name": "How did Epicutis fund growth without dilution?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Logic Agency helped Epicutis secure a $500K revolving credit facility backed by purchase orders and receivables, reducing inventory gap from 30-60 days to 7 days while scaling from 3 to 21+ SKUs with zero equity dilution."
      }
    }
  ]
};

export const metadata = {
  title: 'The CPG Working Capital Playbook — Logic Agency Inc.',
  description: 'How to fund CPG growth without dilution: the 90-180 day cash conversion cycle, gross-to-net deduction math, revolving credit lines, PO/AR financing, and when equity IS the right tool.',
  keywords: 'CPG working capital, working capital vs equity CPG, cash conversion cycle CPG, fund CPG growth without dilution, CPG cash gap, revolving credit line CPG, PO financing CPG, trade spend deductions',
  alternates: {
    canonical: 'https://logicagencyinc.com/guides/cpg-working-capital-playbook',
  },
  openGraph: {
    title: 'The CPG Working Capital Playbook',
    description: 'How to fund CPG growth without dilution: the 90-180 day cash conversion cycle, gross-to-net deduction math, revolving credit lines, PO/AR financing, and when equity IS the right tool.',
    url: 'https://logicagencyinc.com/guides/cpg-working-capital-playbook',
    images: [{ url: 'https://logicagencyinc.com/images/og-cpg-working-capital-playbook.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The CPG Working Capital Playbook',
    description: 'How to fund CPG growth without dilution: the 90-180 day cash conversion cycle, gross-to-net deduction math, revolving credit lines, PO/AR financing, and when equity IS the right tool.',
    images: ['https://logicagencyinc.com/images/og-cpg-working-capital-playbook.jpg'],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Logic Agency",
      "item": "https://logicagencyinc.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guides",
      "item": "https://logicagencyinc.com/guides"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "The CPG Working Capital Playbook",
      "item": "https://logicagencyinc.com/guides/cpg-working-capital-playbook"
    }
  ]
};
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Nav variant="guide" />

      {/* HERO */}
      <section className="a-hero gl">
        <div className="a-hero-inner">
          <div className="breadcrumb"><a href="/">Logic Agency</a> &nbsp;/&nbsp; <a href="/guides">Guides</a></div>
          <h1>The CPG Working Capital <span className="o">Playbook</span></h1>
          <p className="a-lede">Most CPG founders raise equity to solve what is actually a working capital timing problem. The cash gap between paying suppliers and collecting from retailers runs 90&ndash;180 days&mdash;and retailers deduct 30&ndash;40% off the top before you see a dollar. Here is how to diagnose the real problem and fund growth without giving away the company.</p>
          <div className="a-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Updated Jul 2026</span>
            <span>14 min read</span>
            <span>Guides</span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          {/* SECTION 1 */}
          <h2>Loss Problem or Working Capital Problem?</h2>

          <p>Most CPG brands that feel &ldquo;short on cash&rdquo; jump to equity as the solution. But equity and working capital solve two fundamentally different problems. Before you start pitching investors or negotiating term sheets, answer one diagnostic question: <strong>Are you losing money on every unit sold, or are you just waiting for money that&apos;s already owed?</strong></p>

          <p>The answer determines everything about how you should fund your next phase of growth.</p>

          <div className="cd-grid">
            <div className="cd-card">
              <div className="cd-num">Loss</div>
              <h3>Loss Problem &mdash; Equity Is the Tool</h3>
              <p>Negative gross margin after landed cost. Unit economics don&apos;t work at any volume. Pricing is below COGS. You&apos;re spending more to make and deliver each unit than you collect. No amount of faster payment will fix this&mdash;you need capital to absorb losses while you fix the model.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">Timing</div>
              <h3>Working Capital Problem &mdash; Debt Is the Tool</h3>
              <p>Positive gross margins. Growing revenue. Retailers are buying. But you&apos;re constantly cash-strapped because you pay suppliers 90&ndash;180 days before retailers pay you. The money is coming&mdash;it just hasn&apos;t arrived. You don&apos;t need permanent capital. You need a bridge across the timing gap.</p>
            </div>
          </div>

          <div className="callout">
            <p><strong>The most expensive mistake in CPG finance</strong> is selling 10&ndash;20% of your company to solve a timing problem that a $300K credit line could handle. Equity is permanent dilution for a temporary gap.</p>
          </div>

          {/* SECTION 2 */}
          <h2>The 90&ndash;180 Day Cash Conversion Cycle</h2>

          <p>If you&apos;re importing product and selling through retail, here is what your cash conversion cycle actually looks like. Every dollar of revenue ties up capital for 5&ndash;6 months before it returns to your bank account.</p>

          <div className="audit-step">
            <div className="audit-n">1</div>
            <div>
              <h4>Day 0&ndash;15: Raw material deposits</h4>
              <p>Suppliers require 20&ndash;50% upfront before production begins. For a $100K production run, that&apos;s $20K&ndash;$50K out the door before a single unit is manufactured. This is non-negotiable for most overseas suppliers, especially for new vendor relationships.</p>
            </div>
          </div>
          <div className="audit-step">
            <div className="audit-n">2</div>
            <div>
              <h4>Day 15&ndash;60: Production cycle</h4>
              <p>Raw materials become finished goods. Balance of payment typically due at shipment&mdash;another 50&ndash;80% of the production cost. You&apos;re now fully paid out on manufacturing with zero revenue collected.</p>
            </div>
          </div>
          <div className="audit-step">
            <div className="audit-n">3</div>
            <div>
              <h4>Day 60&ndash;90: Ocean freight, customs, and drayage</h4>
              <p>Container ships don&apos;t move fast. Add customs clearance, port delays, and drayage to your 3PL or distribution center. Freight costs add another 5&ndash;15% to your landed cost, and the clock keeps running on your cash.</p>
            </div>
          </div>
          <div className="audit-step">
            <div className="audit-n">4</div>
            <div>
              <h4>Day 90&ndash;105: 3PL receiving, QC, and putaway</h4>
              <p>Product arrives at your warehouse. It needs to be received, inspected, labeled if required, and put into inventory. Storage costs begin accruing immediately&mdash;typically 20&ndash;30% of inventory value annually in carrying cost.</p>
            </div>
          </div>
          <div className="audit-step">
            <div className="audit-n">5</div>
            <div>
              <h4>Day 105&ndash;120: Retailer receives, scans, and shelves product</h4>
              <p>Your shipment arrives at the retailer&apos;s DC. They receive it on their timeline, scan it into their system, and distribute it to stores. The invoice clock doesn&apos;t start until they say it starts.</p>
            </div>
          </div>
          <div className="audit-step">
            <div className="audit-n">6</div>
            <div>
              <h4>Day 120&ndash;180: Net-60 to Net-90 payment terms</h4>
              <p>Most major retailers pay on Net-60 to Net-90 terms&mdash;measured from their receipt date, not yours. Some stretch beyond 90 days. And when the check arrives, it&apos;s not the gross invoice amount. It&apos;s the gross minus every deduction the retailer decided to take.</p>
            </div>
          </div>

          <div className="callout">
            <p><strong>The gap:</strong> You paid suppliers on Day 0. You get paid on Day 150&ndash;180. That&apos;s 5&ndash;6 months of cash tied up in every dollar of revenue. Grow faster, and the gap grows with you.</p>
          </div>

          {/* SECTION 3 */}
          <h2>The Gross-to-Net Deduction Stack</h2>

          <p>Most founders quote gross revenue. The P&amp;L feels net revenue&mdash;after trade spend, retailer deductions, and chargebacks strip 30&ndash;40% off the top before cash hits your bank account. Here is what actually comes out of a gross retail invoice.</p>

          <div className="cd-grid">
            <div className="cd-card">
              <div className="cd-num">15&ndash;25%</div>
              <h3>Trade spend</h3>
              <p>Promotional allowances, off-invoice deductions, scan-backs, temporary price reductions. The cost of being on shelf and staying on shelf. Cadent Consulting Group&apos;s 2024 Marketing Spending Study pegs trade spend at 15&ndash;25% of gross for most CPG categories.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">5&ndash;15%</div>
              <h3>Retailer deductions</h3>
              <p>Slotting fees, market development funds (MDF), markdowns, end-cap placement fees, co-op advertising charges. These are negotiated (or dictated) at the category review and deducted automatically from your payments.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">5&ndash;15%</div>
              <h3>Chargebacks</h3>
              <p>Compliance penalties for shipping violations, ASN errors, pallet non-compliance, and routing guide failures. Chargebacks run 5&ndash;15% of gross for most CPG brands, with first-year brands typically skewing toward the higher end (Inmar Intelligence, 2024). See our <a href="/guides/retail-chargebacks">retail chargebacks guide</a> for the full breakdown.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">2&ndash;5%</div>
              <h3>Freight allowances and damages</h3>
              <p>Freight deductions the retailer passes back to you, plus damage claims for product that arrived compromised. Some retailers deduct these automatically; others invoice separately. Either way, it comes off your gross.</p>
            </div>
          </div>

          <div className="save-grid">
            <div className="save-item">
              <div className="save-pct">55&ndash;70%</div>
              <h4>Net received as percentage of gross invoice</h4>
              <p>After the full deduction stack, most CPG brands collect 55&ndash;70 cents of every gross dollar invoiced to retailers. Your cash flow model must run on net, not gross.</p>
            </div>
          </div>

          <div className="callout">
            <p><strong>This is why a brand doing $2M in retail revenue might actually collect $1.2M.</strong> The cash gap math runs on net, not gross. If your working capital plan assumes you&apos;ll collect the invoice amount, you&apos;ll run out of cash even with growing sales.</p>
          </div>

          {/* SECTION 4 */}
          <h2>Funding Instruments That Don&apos;t Dilute</h2>

          <p>If the diagnostic says &ldquo;timing problem,&rdquo; there are three non-equity funding tools designed specifically for working capital gaps. Each has different cost structures, qualification criteria, and best-use scenarios.</p>

          <div className="cd-grid">
            <div className="cd-card">
              <div className="cd-num">1</div>
              <h3>Revolving credit line</h3>
              <p>A $200K&ndash;$2M facility secured against accounts receivable and inventory. Draw when you need cash, repay when retailers pay. Typical cost: 8&ndash;14% APR. Best for brands with consistent PO flow and existing retail relationships. This is the most flexible and lowest-cost working capital tool for established CPG brands.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">2</div>
              <h3>PO financing</h3>
              <p>A lender advances cash against confirmed purchase orders from retailers. You use the advance to fund production and fulfillment. Typical cost: 15&ndash;30% annualized. Higher than a credit line but works pre-revenue or with limited operating history. Best for brands with strong retail POs but no track record for traditional lending.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">3</div>
              <h3>AR factoring</h3>
              <p>Sell your receivables to a factor at a 2&ndash;5% discount and get cash immediately instead of waiting 60&ndash;90 days. The factor collects from the retailer. Best for brands with strong retailer payment history but long terms. Faster than a credit line to set up, but more expensive per dollar over time.</p>
            </div>
          </div>

          <p>The right instrument depends on your stage, your retailer relationships, and your cash cycle length. Many brands use a combination&mdash;a revolving line for ongoing operations and PO financing for large seasonal orders that exceed the credit line.</p>

          {/* SECTION 5 — CASE STUDY */}
          <div className="case-inline">
            <div className="case-label">Client Work &middot; Epicutis</div>
            <h3>$500K Credit Facility, Zero Dilution</h3>
            <p>Epicutis needed to fund inventory expansion from 3 to 21+ SKUs without diluting the founding team. The cash conversion cycle was stretching the business&mdash;production payments went out months before retail payments came back in, and the inventory gap was running 30&ndash;60 days between PO placement and product availability.</p>
            <p>Logic Agency helped structure a $500K revolving credit facility backed by purchase orders and receivables. The facility gave Epicutis the working capital to fund production runs, maintain inventory levels, and fulfill retail orders without selling equity to cover the timing gap.</p>
            <div className="case-stats">
              <div className="case-stat"><strong>$500K</strong><span>Credit Facility</span></div>
              <div className="case-stat"><strong>7 days</strong><span>Inventory Gap</span></div>
              <div className="case-stat"><strong>0%</strong><span>Dilution</span></div>
            </div>
          </div>

          {/* SECTION 6 */}
          <h2>When Equity IS the Right Tool</h2>

          <p>Equity isn&apos;t wrong&mdash;it&apos;s wrong when applied to a timing problem. There are situations where equity is not just appropriate but necessary. The key is knowing the difference.</p>

          <p><strong>Equity is the right tool when:</strong></p>

          <div className="cd-grid">
            <div className="cd-card">
              <div className="cd-num">&bull;</div>
              <h3>Unit economics don&apos;t work</h3>
              <p>You&apos;re losing money on every unit and need runway to reformulate, re-source, or reprice until the model works. Debt against negative margins is a death spiral.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">&bull;</div>
              <h3>R&amp;D or category creation</h3>
              <p>You&apos;re building something that doesn&apos;t exist yet. There are no purchase orders to finance and no receivables to factor. You need patient capital while you create the market.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">&bull;</div>
              <h3>Team before revenue</h3>
              <p>You need to hire a sales team, a marketing lead, or an operations manager before the revenue is there to support them. Debt can&apos;t fund payroll for positions that don&apos;t generate immediate receivables.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">&bull;</div>
              <h3>Pre-product-market fit</h3>
              <p>The product, the positioning, and the channel strategy are still being validated. You don&apos;t have the predictable revenue base that working capital instruments require. You need money to figure out the model, not to scale it.</p>
            </div>
          </div>

          <p>The brands that preserve the most ownership are the ones that solve timing problems with timing tools and save equity for what only equity can buy&mdash;time to build something that doesn&apos;t exist yet.</p>

          <p className="sources-block" style={{ fontSize: '13px', color: '#999', lineHeight: '1.7', marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.08)' }}><strong>Sources:</strong> Cadent Consulting Group 2024 Marketing Spending Study (trade spend 15&ndash;25% of gross) &middot; PwC Strategy&amp; ($200B+ annual trade spend in US retail) &middot; CSCMP State of Logistics Report (20&ndash;30% carrying cost) &middot; Inmar Intelligence (chargebacks 5&ndash;15% of gross)</p>

        </div>
      </div>

      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[{ q: 'What is a CPG cash conversion cycle?', a: 'The time from paying suppliers to collecting from retailers. For imported CPG products selling through retail, this cycle typically runs 90-180 days.' }, { q: 'How much of gross revenue do retailers actually pay?', a: 'After trade spend, deductions, chargebacks, and freight allowances, most CPG brands collect 55-70% of their gross invoice amount from retail channels.' }, { q: 'When should a CPG brand use debt vs equity?', a: 'Use debt (revolving credit, PO financing, AR factoring) when unit economics are positive and the problem is cash timing. Use equity when unit economics need fixing or you need runway to build before revenue.' }, { q: 'What is PO financing for CPG brands?', a: 'A funding tool where a lender advances cash against confirmed purchase orders from retailers. Typically costs 15-30% annualized and works for brands with strong retail POs but limited operating history.' }, { q: 'How did Epicutis fund growth without dilution?', a: 'Logic Agency helped Epicutis secure a $500K revolving credit facility backed by purchase orders and receivables, reducing inventory gap from 30-60 days to 7 days while scaling from 3 to 21+ SKUs with zero equity dilution.' }]} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-inner">
          <h2>Running out of cash before your <span className="o">retailers pay?</span></h2>
          <p>Working capital management is built into every retainer. Whether it&apos;s structuring PO financing, optimizing cash conversion cycles, or building the ops infrastructure that lenders want to see&mdash;we&apos;ve done it before.</p>
          <div className="cta-btns">
            <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Start a Conversation &rarr;</a>
            <a href="/#pricing" className="bt bw">See Plans &amp; Pricing</a>
          </div>
          <a href="/Logic-Agency-Readiness-Scorecard.pdf" className="cta-dl" target="_blank" rel="noopener noreferrer">Download the free 40-Point Readiness Scorecard &rarr;</a>
          <span className="cta-sub">Logic Agency Inc. &middot; Packaging &amp; Supply Chain Ops on a Monthly Retainer</span>
        </div>
      </section>

      {/* RELATED */}
      <section className="related gl">
        <div className="related-inner">
          <h3>More Guides</h3>
          <div className="related-links">
            <a href="/guides/first-90-days-in-retail" className="related-link">
              <h4>First 90 Days in Retail</h4>
              <p>What changes once a brand moves from DTC into retailer systems&mdash;including the cash cycle reality.</p>
            </a>
            <a href="/guides/packaging-cost-reduction" className="related-link">
              <h4>Packaging Cost Reduction Without Sacrificing Brand</h4>
              <p>Where packaging margin leaks&mdash;and how reducing cost improves your working capital position.</p>
            </a>
            <a href="/guides/retail-chargebacks" className="related-link">
              <h4>Retail Chargebacks Explained</h4>
              <p>The deduction math that strips 5&ndash;15% of gross revenue before it reaches your bank account.</p>
            </a>
          </div>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
