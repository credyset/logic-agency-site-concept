import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';

export const metadata = {
  title: 'Supply Chain & Packaging Guides — Logic Agency Inc.',
  description: 'In-depth operational guides for scaling consumer product brands: retail readiness, packaging cost reduction, 3PL selection, retail chargebacks, DTC-to-retail transition, fractional operations, working capital, and landed cost.',
  keywords: 'supply chain guides CPG, packaging guides brand, retail readiness guide, 3PL selection guide, retail chargebacks guide, DTC to retail guide, fractional supply chain, CPG working capital, landed cost CPG',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/guides',
  },
  openGraph: {
    title: 'Supply Chain & Packaging Guides — Logic Agency Inc.',
    description: 'Operational guides for scaling brands: retail readiness, packaging cost, 3PL selection, retail chargebacks, and more.',
    url: 'https://www.logicagencyinc.com/guides',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supply Chain & Packaging Guides — Logic Agency Inc.',
    description: 'Operational guides for scaling brands: retail readiness, packaging cost, 3PL selection, retail chargebacks, and more.',
  },
};

export default function GuidesIndex() {
  return (
    <>
      <Nav />

      <section className="gl" style={{ padding: '80px 0 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px' }}>
          <p className="breadcrumb" style={{ marginBottom: 16 }}><a href="/">Logic Agency</a> &nbsp;/&nbsp; Guides</p>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', color: 'var(--bk)', marginBottom: 16 }}>
            Operational guides for <span className="o">scaling brands</span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--gr)', lineHeight: 1.7, maxWidth: 640, marginBottom: 0 }}>
            Practical reference content from 20+ years of supply chain and packaging operations. No generic advice. Real numbers, real timelines, real decisions.
          </p>
        </div>
      </section>

      <section className="gl" style={{ padding: '20px 0 80px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px' }}>
          <div className="guides-grid">
            <a href="/guides/retail-readiness" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">15 min read</p>
                <h2>The Retail Readiness Bible</h2>
                <p>The complete operational playbook for launching and scaling in retail — compliance, packaging, logistics, inventory, and a 60-point checklist.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/first-90-days-in-retail" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>First 90 Days in Retail</h2>
                <p>What changes once a brand moves from DTC into retailer systems — and how to survive the learning curve without losing shelf placement.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/retail-ready-packaging" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">8 min read</p>
                <h2>Getting Your Packaging Retail-Ready</h2>
                <p>Case packs, pallet specs, retailer compliance requirements, and the packaging timeline that most brands discover too late.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/packaging-cost-reduction" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">12 min read</p>
                <h2>Packaging Cost Reduction Without Sacrificing Brand</h2>
                <p>Where packaging margin silently leaks — DIM weight, over-engineering, markup stacking — and how brands typically save 15–30% without downgrading quality.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/packaging-system-that-scales" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>Building a Packaging System That Scales</h2>
                <p>The difference between ordering packaging and building a packaging system — and why that distinction matters once SKU count grows.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/packaging-sourcing" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>How to Source Packaging Without Getting Burned</h2>
                <p>The real sourcing process: supplier qualification, landed cost modeling, domestic vs. overseas math, and the mistakes that cost brands months and margin.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/ai-for-cpg-operations" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">12 min read</p>
                <h2>The Operator&apos;s Guide to AI for CPG Operations</h2>
                <p>Where AI is actually useful in supply chain and packaging operations, and where it creates more noise than signal.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/fractional-supply-chain-operations" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">12 min read</p>
                <h2>Fractional Supply Chain Operations: What It Is and When It Works</h2>
                <p>The embedded operations model for brands that need senior supply chain capability before the org chart is ready for a $600K+ full-time team.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/fractional-coo-vs-full-time-hire" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>Fractional COO vs. Full-Time Hire: A Real Cost Comparison</h2>
                <p>Real cost ranges, hidden costs founders miss, and a decision framework for choosing between fractional operations and a full-time hire.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/dtc-to-retail-supply-chain" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>DTC to Retail Supply Chain: What Most Brands Get Wrong</h2>
                <p>The 5 systems you need before signing a retail PO — and the retail margin math most DTC brands underestimate until the first chargeback.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/retail-chargebacks" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">10 min read</p>
                <h2>Retail Chargebacks Explained: The CPG Brand&apos;s Guide</h2>
                <p>Automatic penalty deductions, real cost ranges per violation, a prevention framework, and when to dispute vs. absorb.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/3pl-selection-guide" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">12 min read</p>
                <h2>3PL Selection Guide for Consumer Product Brands</h2>
                <p>How to evaluate fulfillment partners on channel fit, retail compliance, pricing structure, and red flags — before signing a long-term contract.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/cpg-working-capital-playbook" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">14 min read</p>
                <h2>The CPG Working Capital Playbook</h2>
                <p>Loss problem or timing problem? The 90&ndash;180 day cash conversion cycle, gross-to-net deduction math, and non-dilutive funding tools for CPG brands.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/landed-cost-playbook" className="guide-card">
              <div className="guide-card-inner">
                <p className="guide-meta">12 min read</p>
                <h2>Landed Cost Playbook for CPG Brands</h2>
                <p>The 6-line cost stack between your supplier quote and your P&amp;L &mdash; freight, duties, DIM weight, tooling, warehousing &mdash; and what the July 2026 USPS DIM changes are already costing you.</p>
                <span className="guide-link">Read the guide &rarr;</span>
              </div>
            </a>
            <a href="/guides/co-manufacturer-selection" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">14 min read</p><h2>How to Find, Vet, and Scale With the Right Co-Manufacturer</h2><p>A practical framework for evaluating production partners before quality, timing, and cash problems compound.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/cpg-demand-forecasting" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">13 min read</p><h2>Demand Forecasting for CPG Brands</h2><p>Build a forecast your purchasing, production, cash, and customer promises can actually use.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/cpg-gross-margin-playbook" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">14 min read</p><h2>The CPG Gross Margin Playbook</h2><p>Find the operational leaks between revenue and contribution margin before they become growth constraints.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/cpg-broker-selection-playbook" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">14 min read</p><h2>How to Select, Manage, and Fire a CPG Broker</h2><p>A practical operator&apos;s playbook for broker accountability, channel fit, and retail execution.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/co-manufacturer-contracts-risk" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">12 min read</p><h2>Co-Manufacturer Contracts and Operational Risk</h2><p>What to clarify, protect, and document before production risk lands on your balance sheet.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/regional-to-national-retail-expansion" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">14 min read</p><h2>From Regional to National Retail</h2><p>The operating changes required when a regional brand starts carrying national retail expectations.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/distributor-onboarding-playbook" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">12 min read</p><h2>The CPG Distributor Onboarding Playbook</h2><p>Category reviews, new-item setup, timing, inventory positioning, and deduction prevention.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/cpg-channel-economics" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">14 min read</p><h2>Amazon vs. DTC vs. Retail: The Operational Economics</h2><p>Compare channel decisions through the lens of cost, margin, inventory, and operating complexity.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/sustainable-packaging-cpg" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">13 min read</p><h2>Sustainable Packaging for CPG Brands</h2><p>Materials, tradeoffs, costs, and retailer expectations without the greenwashing.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
            <a href="/guides/cpg-operations-kpis" className="guide-card"><div className="guide-card-inner"><p className="guide-meta">12 min read</p><h2>The CPG Operations KPI Dashboard</h2><p>The metrics founders, operators, and investors need at each stage of growth.</p><span className="guide-link">Read the guide &rarr;</span></div></a>
          </div>
        </div>
      </section>

      <section className="cta-band gd">
        <div className="cta-inner">
          <h2>Need ops support, not <span className="o">just reading material?</span></h2>
          <p>Every retainer starts with a conversation about what&apos;s actually breaking. We&apos;ll tell you in 30 minutes whether a retainer makes sense.</p>
          <div className="cta-btns">
            <a href="/#pricing" className="bt bo">See Plans &amp; Pricing &rarr;</a>
          </div>
          <span className="cta-sub">Logic Agency Inc. &middot; Packaging &amp; Supply Chain Ops on a Monthly Retainer</span>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
