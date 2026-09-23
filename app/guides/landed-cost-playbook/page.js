import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import EmailButton from '@/components/EmailButton';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Landed Cost Playbook for CPG Brands",
  "description": "A line-by-line breakdown of the 6-line landed cost stack for CPG imports — freight, duties, MPF/HMF, brokerage, DIM overage, tooling amortization, and warehousing — plus what the July 2026 USPS DIM divisor change is already costing you.",
  "author": {
    "@type": "Organization",
    "name": "Logic Agency Inc.",
    "url": "https://logicagencyinc.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Logic Agency Inc."
  },
  "mainEntityOfPage": "https://logicagencyinc.com/guides/landed-cost-playbook",
  "datePublished": "2026-07-27",
  "dateModified": "2026-07-27"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is landed cost in CPG?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Landed cost is the total cost of getting a product from your supplier to your warehouse, sellable. It includes the unit price plus ocean freight, duties, customs brokerage, DIM weight overages, tooling amortization, and warehousing — typically 40-50% above the quoted unit price for CPG imports from Asia."
      }
    },
    {
      "@type": "Question",
      "name": "How much does DIM weight add to shipping costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DIM weight overages typically add $0.05-$0.15 per unit for CPG brands. As of July 12, 2026, USPS changed its DIM divisor from 166 to 139 and began rounding dimensions up instead of to the nearest inch, increasing billable weight by 25-35% on oversized packages."
      }
    },
    {
      "@type": "Question",
      "name": "What is the USPS DIM divisor change?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Effective July 12, 2026, USPS changed its dimensional weight divisor from 166 to 139 and began rounding each package dimension up to the next whole inch. Both changes compound: same box, higher cubic inch calculation, divided by a smaller number. Packages exceeding 1,728 cubic inches (1 cubic foot) are affected."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate landed cost per SKU?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with the supplier's quoted unit price. Add ocean freight and drayage, duties and CBP fees (MPF + HMF), customs brokerage, DIM weight overage, tooling amortization (spread over MOQ), and warehousing/handling. The total is your landed cost — the number your gross margin should be based on."
      }
    },
    {
      "@type": "Question",
      "name": "What is MPF and HMF on imports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MPF (Merchandise Processing Fee) is a US Customs fee of 0.3464% of declared cargo value with a minimum of $33.58 and maximum of $651.50 per entry. HMF (Harbor Maintenance Fee) is 0.125% of cargo value. Both are charged on every formal customs entry and are often overlooked in supplier cost comparisons."
      }
    }
  ]
};

export const metadata = {
  title: 'Landed Cost Playbook for CPG Brands — Logic Agency Inc.',
  description: 'The 6-line landed cost stack for CPG imports: freight, duties, MPF/HMF, brokerage, DIM weight overage, tooling amortization, and warehousing — plus what the July 2026 USPS DIM divisor change is already costing you.',
  keywords: 'landed cost CPG, landed cost per SKU, unit cost vs landed cost, DIM weight CPG, USPS DIM weight changes 2026, packaging freight cost, customs duties CPG, import cost breakdown',
  alternates: {
    canonical: 'https://logicagencyinc.com/guides/landed-cost-playbook',
  },
  openGraph: {
    title: 'Landed Cost Playbook for CPG Brands',
    description: 'The 6-line landed cost stack for CPG imports — and what the July 2026 USPS DIM changes are already costing you.',
    url: 'https://logicagencyinc.com/guides/landed-cost-playbook',
    images: [{ url: 'https://logicagencyinc.com/images/og-landed-cost-playbook.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landed Cost Playbook for CPG Brands',
    description: 'The 6-line landed cost stack for CPG imports — and what the July 2026 USPS DIM changes are already costing you.',
    images: ['https://logicagencyinc.com/images/og-landed-cost-playbook.jpg'],
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
      "name": "Landed Cost Playbook for CPG Brands",
      "item": "https://logicagencyinc.com/guides/landed-cost-playbook"
    }
  ]
};
export default function LandedCostPlaybook() {
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
          <h1>Landed Cost Playbook <span className="o">for CPG Brands</span></h1>
          <p className="a-lede">Your supplier says $0.65 per unit. Your P&amp;L says $1.28. The gap isn&apos;t an error &mdash; it&apos;s every cost between the supplier&apos;s invoice and the product sitting sellable in your warehouse. A typical CPG import from Asia lands 40-50% above the product price. This guide breaks down where that delta comes from, line by line.</p>
          <div className="a-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Updated Jul 2026</span>
            <span>12 min read</span>
            <span>Guides</span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          {/* SECTION 1 */}
          <h2>Unit Cost Is Not Landed Cost</h2>

          <p>When CPG founders compare supplier quotes, they compare unit prices. The supplier says $0.65/unit. The P&amp;L says $1.28/unit. The gap is real, and it&apos;s not an error &mdash; it&apos;s every cost between the supplier&apos;s invoice and the product sitting sellable in your warehouse.</p>

          <p>A typical CPG import from Asia lands 40-50% above the product price (FreightAmigo, 2026). For many brands, that delta is the difference between a profitable SKU and one that quietly bleeds margin every quarter. And most founders don&apos;t discover the real number until after their first P&amp;L surprises them.</p>

          <p>This is <strong>not</strong> a guide about reducing unit cost from your supplier. This is about understanding the full cost stack so you can model margin accurately <em>before</em> you sign a supplier agreement, not after your first P&amp;L surprises you.</p>

          <p>The landed cost stack has six lines. Each one adds cost that doesn&apos;t appear on the supplier&apos;s invoice. Some are fixed, some fluctuate with global markets, and some &mdash; particularly DIM weight &mdash; changed materially two weeks ago when USPS rewrote its dimensional pricing rules. Here&apos;s what you&apos;re actually paying.</p>

          {/* SECTION 2 */}
          <h2>The 6-Line Landed Cost Stack</h2>

          <div className="cd-grid">
            <div className="cd-card">
              <div className="cd-num">1</div>
              <h3>Ocean freight + inland drayage</h3>
              <p><strong>$0.10&ndash;$0.25/unit depending on volume.</strong> Container rates, fuel surcharges, port fees, and inland trucking from port to warehouse. This line fluctuates with global shipping rates &mdash; it peaked above $20K per container in 2021 and has settled to $3K-6K for US West Coast lanes. Volume matters: a full container load (FCL) amortizes across more units than a less-than-container (LCL) shipment, where you&apos;re sharing space and paying a per-CBM premium.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">2</div>
              <h3>Duties + MPF/HMF</h3>
              <p><strong>$0.05&ndash;$0.20/unit.</strong> Import duties based on HTS classification vary by product category. On top of duties, every formal customs entry triggers two CBP fees most brands overlook: Merchandise Processing Fee (MPF) at 0.3464% of declared value (min $33.58, max $651.50 per entry) and Harbor Maintenance Fee (HMF) at 0.125% of cargo value (Peacock Tariff Consulting, 2026).</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">3</div>
              <h3>Customs brokerage</h3>
              <p><strong>$0.02&ndash;$0.06/unit.</strong> Formal entry filing, HTS classification review, and bond fees. This is largely a fixed cost &mdash; most brokers charge $150-$350 per entry regardless of shipment size &mdash; which means it amortizes down with volume. At 5,000 units per entry, brokerage is $0.06/unit. At 50,000 units, it&apos;s under a penny.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">4</div>
              <h3>DIM weight overage</h3>
              <p><strong>$0.05&ndash;$0.15/unit.</strong> If your package&apos;s dimensional weight exceeds its actual weight, you&apos;re paying for air. This line hits twice: once on import freight and again on every outbound shipment to customers. Right-sizing packaging is the single fastest savings lever for most CPG brands &mdash; and as of July 12, 2026, USPS made this line more expensive for every oversized package.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">5</div>
              <h3>Tooling amortization</h3>
              <p><strong>$0.05&ndash;$0.15/unit.</strong> Custom molds, dies, and plates spread across the first production run. On a $15,000 mold amortized over 50,000 units, that&apos;s $0.30/unit. At 500,000 units, it&apos;s $0.03/unit. Volume is the only way to shrink this line &mdash; which is why it disproportionately hurts early-stage brands running small initial orders.</p>
            </div>
            <div className="cd-card">
              <div className="cd-num">6</div>
              <h3>Warehousing + handling</h3>
              <p><strong>$0.05&ndash;$0.15/unit.</strong> Receiving, QC inspection, putaway, storage (per pallet/month), pick-and-pack, and damage rate. 3PLs charge per pallet slot per month plus per-unit handling fees. Longer storage equals higher per-unit cost &mdash; which means slow-moving SKUs compound this line silently while they sit.</p>
            </div>
          </div>

          <div className="callout">
            <p><strong>$0.65 quoted. $1.28 landed.</strong> That&apos;s not a rounding error &mdash; it&apos;s the 97% delta between what the invoice reads and what the P&amp;L feels. Every one of these six lines is real, recurring, and invisible on the supplier&apos;s quote.</p>
          </div>

          {/* SECTION 3 */}
          <h2>What Changed on July&nbsp;12 &mdash; USPS DIM Weight Rules</h2>

          <p>Two weeks ago, USPS changed the math on every oversized package in the country. Two rules changed simultaneously on July&nbsp;12, 2026, and they compound on every shipment.</p>

          <div className="audit-step">
            <div className="audit-n">1</div>
            <div>
              <h4>DIM Divisor: 166 &rarr; 139</h4>
              <p>Previously, USPS calculated dimensional weight by dividing cubic inches by 166. As of July&nbsp;12, the divisor dropped to 139. Same box, higher billable weight. This applies to all non-Cubic USPS services when the package exceeds 1,728 cubic inches (1 cubic foot). UPS and FedEx have used 139 for years (Packizon, 2026) &mdash; USPS is now aligned, which eliminates the rate advantage USPS held on oversized parcels.</p>
            </div>
          </div>
          <div className="audit-step">
            <div className="audit-n">2</div>
            <div>
              <h4>Rounding Rule: Nearest Inch &rarr; Round UP</h4>
              <p>Previously, each dimension rounded to the nearest whole inch. Now each dimension rounds <strong>up</strong> to the next whole inch (Ship.com, 2026). A box measuring 13.1 inches is now billed as 14&nbsp;inches, not 13. This inflates the cubic inch input that feeds the DIM calculation &mdash; before the smaller divisor even applies.</p>
            </div>
          </div>

          <p>These changes <strong>compound</strong> on every package. The round-up rule increases the cubic inch numerator. The smaller divisor increases the DIM weight output. The result: the same box that shipped two weeks ago now costs materially more.</p>

          <h3>Two Worked Examples</h3>

          <div className="cd-grid">
            <div className="cd-card">
              <h4>Beauty Gift Set</h4>
              <p className="a-meta" style={{ marginBottom: '12px' }}>13.6 &times; 12.4 &times; 11.3&nbsp;in. &middot; Actual weight: 3&nbsp;lb</p>
              <p><strong>Old rule:</strong> 14 &times; 12 &times; 11 = 1,848 cu&nbsp;in &divide; 166 = <strong>12&nbsp;lb</strong> billable</p>
              <p><strong>New rule:</strong> 14 &times; 13 &times; 12 = 2,184 cu&nbsp;in &divide; 139 = <strong>16&nbsp;lb</strong> billable</p>
              <div className="save-pct" style={{ marginTop: '12px' }}>+33% billable weight</div>
            </div>
            <div className="cd-card">
              <h4>Subscription Box</h4>
              <p className="a-meta" style={{ marginBottom: '12px' }}>16.2 &times; 14.5 &times; 9.7&nbsp;in. &middot; Actual weight: 4&nbsp;lb</p>
              <p><strong>Old rule:</strong> 16 &times; 15 &times; 10 = 2,400 cu&nbsp;in &divide; 166 = <strong>15&nbsp;lb</strong> billable</p>
              <p><strong>New rule:</strong> 17 &times; 15 &times; 10 = 2,550 cu&nbsp;in &divide; 139 = <strong>19&nbsp;lb</strong> billable</p>
              <div className="save-pct" style={{ marginTop: '12px' }}>+27% billable weight</div>
            </div>
          </div>

          <div className="callout">
            <p><strong>Exception:</strong> Ground Advantage Cubic and Priority Mail Cubic still round <strong>down</strong> to the nearest 1/4&nbsp;inch and use cubic pricing, not DIM. DIM pricing only applies when the package exceeds 1,728 cubic inches (1 cubic foot). If your packages are under that threshold, these changes don&apos;t affect you &mdash; but most CPG subscription boxes and gift sets exceed it.</p>
          </div>

          {/* SECTION 4 */}
          <h2>The Post-Change Diagnostic</h2>

          <p>If you haven&apos;t audited your shipping costs since July&nbsp;12, you&apos;re operating on stale math. Here&apos;s what to check &mdash; in order.</p>

          <div className="audit-step">
            <div className="audit-n">1</div>
            <div>
              <h4>Pull your top 20 SKUs by USPS volume</h4>
              <p>Run each through the new DIM formula: round UP each dimension to the next whole inch, multiply L &times; W &times; H, divide by 139. Compare the new billable weight to what you were paying before July&nbsp;12. Flag every SKU where the increase exceeds 15% &mdash; those are your immediate cost exposure points.</p>
            </div>
          </div>
          <div className="audit-step">
            <div className="audit-n">2</div>
            <div>
              <h4>Identify every package exceeding 1,728 cu&nbsp;in</h4>
              <p>That&apos;s the DIM pricing threshold &mdash; 1 cubic foot. Packages below this threshold are unaffected by DIM; they&apos;re priced by weight or cubic tier. Every package above it is now subject to the new divisor and rounding rules. Know exactly which SKUs cross this line.</p>
            </div>
          </div>
          <div className="audit-step">
            <div className="audit-n">3</div>
            <div>
              <h4>Update the DIM divisor in your shipping software</h4>
              <p>If your TMS or shipping platform still uses 166, every rate comparison since July&nbsp;12 has been wrong. Update to 139. This affects rate shopping, margin calculations, and any automated carrier selection rules you&apos;re running. Check ShipStation, Shippo, EasyPost, or whatever platform you use &mdash; the divisor is usually in carrier settings.</p>
            </div>
          </div>
          <div className="audit-step">
            <div className="audit-n">4</div>
            <div>
              <h4>Rate-shop at dispatch</h4>
              <p>The rule change hits USPS hardest because they previously offered a DIM advantage over UPS and FedEx. Post-change, USPS uses the same 139 divisor as the other major carriers (Packizon, 2026). USPS may no longer be the cheapest option for oversized parcels &mdash; run a comparative rate analysis on your top 10 SKUs across all three carriers.</p>
            </div>
          </div>
          <div className="audit-step">
            <div className="audit-n">5</div>
            <div>
              <h4>Confirm your 3PL updated their rate logic</h4>
              <p>If your 3PL hasn&apos;t recalculated DIM since July&nbsp;12, you&apos;re being charged based on stale math &mdash; or worse, they&apos;ve absorbed the increase and will pass it through on your next invoice. Ask for written confirmation that their system reflects the new USPS DIM divisor of 139 and the round-up rounding rule.</p>
            </div>
          </div>

          {/* SECTION 5 */}
          <h2>How to Model Landed Cost Before Signing a Supplier</h2>

          <p>This is the entire point of this guide in one framework. Before you commit to a supplier, build a per-SKU landed cost model that accounts for all six lines. Don&apos;t sign based on unit cost alone.</p>

          <div className="save-grid">
            <div className="save-item">
              <div className="save-pct">Start</div>
              <h4>Supplier&apos;s quoted unit cost</h4>
              <p>The number on the invoice. This is your baseline &mdash; but it&apos;s only the first line. The suppliers who win on this number often lose on the lines below.</p>
            </div>
            <div className="save-item">
              <div className="save-pct">+Line 1</div>
              <h4>Ocean freight + drayage</h4>
              <p>Get a freight quote for your product dimensions and weight. Include port fees, fuel surcharges, and inland trucking from port to warehouse. Use FCL rates if volume justifies a full container; LCL if not.</p>
            </div>
            <div className="save-item">
              <div className="save-pct">+Line 2</div>
              <h4>Duties + MPF + HMF</h4>
              <p>Look up your HTS code for the duty rate. Add MPF at 0.3464% of declared value and HMF at 0.125% of cargo value. These fees are per entry, not per unit &mdash; so amortize across the shipment.</p>
            </div>
            <div className="save-item">
              <div className="save-pct">+Line 3</div>
              <h4>Customs brokerage</h4>
              <p>Budget $150-$350 per entry for formal filing, HTS classification review, and bond fees. Divide by units per entry to get per-unit cost.</p>
            </div>
            <div className="save-item">
              <div className="save-pct">+Line 4</div>
              <h4>DIM weight overage</h4>
              <p>Calculate DIM weight using the new 139 divisor with round-up rounding. If DIM exceeds actual weight, the overage cost applies to every outbound shipment. This is the line most brands underestimate.</p>
            </div>
            <div className="save-item">
              <div className="save-pct">+Line 5</div>
              <h4>Tooling amortization</h4>
              <p>Divide total tooling cost (molds, dies, plates) by the number of units in your first production run. This per-unit cost drops with volume &mdash; model it at your actual MOQ, not a hypothetical future order.</p>
            </div>
            <div className="save-item">
              <div className="save-pct">+Line 6</div>
              <h4>Warehousing + handling</h4>
              <p>Include receiving, QC inspection, putaway, monthly storage per pallet, and pick-and-pack fees. Estimate average days in warehouse to calculate the storage component accurately.</p>
            </div>
            <div className="save-item">
              <div className="save-pct">= Total</div>
              <h4>Landed cost per SKU</h4>
              <p>This is the number your gross margin calculation should use &mdash; not the supplier quote. The gap between these two numbers is where most CPG margin models are wrong.</p>
            </div>
          </div>

          <div className="callout">
            <p><strong>The founders who model landed cost per SKU before signing a supplier protect margin before the P&amp;L does.</strong> Every supplier comparison should be a landed cost comparison. If you&apos;re comparing unit prices, you&apos;re comparing the wrong numbers.</p>
          </div>

          <p style={{ fontSize: '14px', color: '#777', marginTop: '48px', borderTop: '1px solid #ddd', paddingTop: '24px' }}>
            <strong>Sources:</strong> FreightAmigo (USA Customs Fees &amp; Import Costs 2026, landed cost benchmarks) &middot; Peacock Tariff Consulting (2026 CBP fee schedule: MPF 0.3464%, HMF 0.125%) &middot; DCL Logistics / Hadleigh Reid (USPS DIM changes, June&nbsp;17, 2026) &middot; Packizon (UPS/FedEx DIM divisor 139, 2026) &middot; Ship.com (USPS rounding rule confirmation) &middot; Veridian (DIM weight impact analysis) &middot; 3PL Center (carrier DIM threshold confirmation)
          </p>

        </div>
      </div>


      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[{ q: 'What is landed cost in CPG?', a: 'Landed cost is the total cost of getting a product from your supplier to your warehouse, sellable. It includes the unit price plus ocean freight, duties, customs brokerage, DIM weight overages, tooling amortization, and warehousing — typically 40-50% above the quoted unit price for CPG imports from Asia.' }, { q: 'How much does DIM weight add to shipping costs?', a: 'DIM weight overages typically add $0.05-$0.15 per unit for CPG brands. As of July 12, 2026, USPS changed its DIM divisor from 166 to 139 and began rounding dimensions up instead of to the nearest inch, increasing billable weight by 25-35% on oversized packages.' }, { q: 'What is the USPS DIM divisor change?', a: 'Effective July 12, 2026, USPS changed its dimensional weight divisor from 166 to 139 and began rounding each package dimension up to the next whole inch. Both changes compound: same box, higher cubic inch calculation, divided by a smaller number. Packages exceeding 1,728 cubic inches (1 cubic foot) are affected.' }, { q: 'How do I calculate landed cost per SKU?', a: 'Start with the supplier\'s quoted unit price. Add ocean freight and drayage, duties and CBP fees (MPF + HMF), customs brokerage, DIM weight overage, tooling amortization (spread over MOQ), and warehousing/handling. The total is your landed cost — the number your gross margin should be based on.' }, { q: 'What is MPF and HMF on imports?', a: 'MPF (Merchandise Processing Fee) is a US Customs fee of 0.3464% of declared cargo value with a minimum of $33.58 and maximum of $651.50 per entry. HMF (Harbor Maintenance Fee) is 0.125% of cargo value. Both are charged on every formal customs entry and are often overlooked in supplier cost comparisons.' }]} />
        </div>
      </section>
      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-inner">
          <h2>Paying more than your <span className="o">supplier quoted?</span></h2>
          <p>Landed cost modeling is the first thing we build into every retainer. We map every cost line between the supplier quote and your warehouse, identify the gaps in your margin model, and show you where the money is actually going.</p>
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
            <a href="/guides/packaging-sourcing" className="related-link">
              <h4>How to Source Packaging Without Getting Burned</h4>
              <p>The real sourcing process &mdash; including the landed cost modeling most brands skip.</p>
            </a>
            <a href="/guides/packaging-cost-reduction" className="related-link">
              <h4>Packaging Cost Reduction Without Sacrificing Brand</h4>
              <p>DIM weight optimization, material right-sizing, and the five hidden cost drivers.</p>
            </a>
            <a href="/guides/cpg-working-capital-playbook" className="related-link">
              <h4>The CPG Working Capital Playbook</h4>
              <p>How the landed cost timeline feeds the 90-180 day cash gap &mdash; and what to do about it.</p>
            </a>
          </div>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
