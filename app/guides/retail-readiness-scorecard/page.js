import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import EmailButton from '@/components/EmailButton';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '40-Point Retail Readiness Scorecard for CPG Brands',
  description: 'A 40-point self-audit covering packaging, sourcing, fulfillment, operations, team, and investor-grade readiness. Score yourself before your first retail PO or fundraise.',
  author: { '@type': 'Organization', name: 'Logic Agency Inc.', url: 'https://www.logicagencyinc.com' },
  publisher: { '@type': 'Organization', name: 'Logic Agency Inc.' },
  mainEntityOfPage: 'https://www.logicagencyinc.com/guides/retail-readiness-scorecard',
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Score Your Retail Readiness',
  description: 'A 40-point scorecard to audit your packaging, supply chain, and operations before entering retail.',
  totalTime: 'PT20M',
  tool: [
    { '@type': 'HowToTool', name: 'This checklist' },
    { '@type': 'HowToTool', name: 'Your current ops documentation' },
  ],
  step: [
    { '@type': 'HowToStep', name: 'Complete Section 1: Core Areas', text: 'Work through the 6 core sections (30 points). Score 1 for each true statement today. Be honest — partial progress counts as zero.' },
    { '@type': 'HowToStep', name: 'Complete Section 2: Investor-Grade Readiness', text: 'If preparing for retail, fundraising, or enterprise distribution, complete the 5 advanced sections (10 points + 1 bonus).' },
    { '@type': 'HowToStep', name: 'Tally your score', text: 'Add up your totals. Under 21: high fragility. 21–27: risk-prone. 28–34: scale-ready with blind spots. 35–40: retail-ready and investor-attractive.' },
    { '@type': 'HowToStep', name: 'Address the gaps', text: 'Every unchecked item is a prioritized action. Fix the gaps before the first PO ships, not after.' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who should use the retail readiness scorecard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VC-backed and bootstrapped founders preparing for retail expansion, growth-stage brands under investor pressure, heads of ops building internal systems or deciding to outsource, and brands building due diligence materials for fundraising or retail placement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What score means a brand is retail-ready?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A score of 35–40 indicates retail-ready, investor-attractive operations. Scores of 28–34 indicate scale-readiness with minor blind spots that should be addressed before launch. Scores below 21 indicate high fragility — the brand should stabilize operations before entering retail.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the scorecard take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completing all 40 points takes 15–20 minutes if your ops documentation is accessible. The value is in being honest — partial progress on any item counts as zero, which surfaces the real gaps faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common gaps brands find?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common gaps are in Sourcing & Supplier Readiness (secondary suppliers not secured, landed cost not fully mapped) and Fulfillment & Logistics Preparedness (3PL not evaluated for retail, routing and labeling requirements not confirmed). These gaps are also the ones that create the most expensive problems in year one of retail.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a downloadable version of the scorecard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A PDF version of the full 40-point scorecard is available for download from Logic Agency.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Logic Agency', item: 'https://www.logicagencyinc.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.logicagencyinc.com/guides' },
    { '@type': 'ListItem', position: 3, name: '40-Point Retail Readiness Scorecard', item: 'https://www.logicagencyinc.com/guides/retail-readiness-scorecard' },
  ],
};

export const metadata = {
  title: '40-Point Retail Readiness Scorecard | Logic Agency',
  description: 'Score your packaging, sourcing, fulfillment, and operations readiness before your first retail PO or fundraise. Free 40-point self-audit for CPG brands.',
  keywords: 'retail readiness scorecard, CPG retail readiness checklist, DTC to retail checklist, retail operations audit, retail launch checklist CPG, ops readiness scorecard, packaging readiness checklist',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/guides/retail-readiness-scorecard',
  },
  openGraph: {
    title: '40-Point Retail Readiness Scorecard for CPG Brands',
    description: 'Score your packaging, sourcing, fulfillment, and operations readiness before your first retail PO or fundraise.',
    url: 'https://www.logicagencyinc.com/guides/retail-readiness-scorecard',
    images: [{ url: 'https://www.logicagencyinc.com/images/og-retail-readiness.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '40-Point Retail Readiness Scorecard for CPG Brands',
    description: 'Score your packaging, sourcing, fulfillment, and operations readiness before your first retail PO or fundraise.',
    images: ['https://www.logicagencyinc.com/images/og-retail-readiness.jpg'],
  },
};

export default function RetailReadinessScorecard() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Nav variant="guide" />

      {/* HERO */}
      <section className="a-hero gl">
        <div className="a-hero-inner">
          <div className="breadcrumb"><a href="/">Logic Agency</a> &nbsp;/&nbsp; <a href="/guides">Guides</a></div>
          <h1>40-Point Retail Readiness <span className="o">Scorecard</span></h1>
          <p className="a-lede">That big PO or national retailer pitch feels like a win &mdash; until your backend cannot keep up. This 40-point self-audit scores your packaging, sourcing, fulfillment, ops systems, and team readiness before chargebacks, stockouts, and missed resets teach you the same lessons at full cost.</p>
          <div className="a-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Updated June 2026</span>
            <span>20 min read</span>
            <span>Interactive Guide</span>
          </div>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://drive.google.com/file/d/1v78gxZkoNjz4sk5bO-MCFMx6sob5jROp/view" className="hero-dl" target="_blank" rel="noopener noreferrer">Download the PDF Scorecard &rarr;</a>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          {/* KEY TAKEAWAYS */}
          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>Score 1 point for each item that is true today. Partial progress counts as zero.</li>
              <li>Sections 1&ndash;6 cover the 30-point core: packaging, sourcing, fulfillment, systems, team, and stakeholders.</li>
              <li>Sections 7&ndash;11 cover the 10-point investor-grade layer: retail channel, margin stress, compliance, data, and crisis planning.</li>
              <li>A score below 21 signals high fragility. Fix it before the first PO, not after.</li>
            </ul>
          </div>

          {/* HOW TO SCORE */}
          <h2>How to Use This Scorecard</h2>

          <p>Each item represents a key operational milestone. If the statement is fully true today, give yourself 1 point. If it is a &ldquo;sort of&rdquo; or &ldquo;we are working on it,&rdquo; that is a zero for now. Be honest &mdash; the gaps are more valuable than the score.</p>

          <p>Work through the 6 core sections first, then continue to the 5 investor-grade sections if you are preparing for national retail, a fundraise, or enterprise distribution.</p>

          {/* SECTION 1 */}
          <h2 id="packaging">Section 1 &mdash; Product &amp; Packaging Alignment <span className="o">(5 points)</span></h2>

          <p>The packaging questions that determine whether your product survives the retail supply chain and competes on shelf.</p>

          <div className="b-takeaways" style={{ background: '#f9f9f9' }}>
            <p style={{ color: 'var(--bk)', textTransform: 'none', fontSize: '13px', letterSpacing: 0, fontWeight: 600 }}>Score 1 point for each item that is true today</p>
            <ul>
              <li>Packaging protects product in transit with minimal damages</li>
              <li>Packaging is optimized for DIM weight and freight efficiency</li>
              <li>Unboxing aligns with brand experience and shelf impact</li>
              <li>Materials are scalable for higher volumes and compliance requirements</li>
              <li>Cost per unit supports healthy margin at scale</li>
            </ul>
          </div>

          <p>DIM weight is the most common hidden cost. If your box is oversized relative to its actual weight, you are paying for air on every shipment. Right-sizing packaging before retail launch can reduce freight cost by 15&ndash;25% per unit.</p>

          {/* SECTION 2 */}
          <h2 id="sourcing">Section 2 &mdash; Sourcing &amp; Supplier Readiness <span className="o">(5 points)</span></h2>

          <p>A single-supplier supply chain is not a supply chain. It is a single point of failure. Retail buyers assume you have redundancy. Prove it before you need it.</p>

          <div className="b-takeaways" style={{ background: '#f9f9f9' }}>
            <p style={{ color: 'var(--bk)', textTransform: 'none', fontSize: '13px', letterSpacing: 0, fontWeight: 600 }}>Score 1 point for each item that is true today</p>
            <ul>
              <li>Backup or secondary suppliers are secured</li>
              <li>Landed cost is fully mapped (FOB, duties, freight)</li>
              <li>SLAs, QC protocols, and penalties are documented</li>
              <li>Tariff, geo, and lead-time risks are accounted for</li>
              <li>Supplier communication is streamlined</li>
            </ul>
          </div>

          <p>Most brands track their supplier&apos;s quoted lead time, not their actual lead time. If you have not run at least two production cycles with a supplier, the quoted lead time is a guess. Retail cannot run on guesses.</p>

          {/* SECTION 3 */}
          <h2 id="fulfillment">Section 3 &mdash; Fulfillment &amp; Logistics Preparedness <span className="o">(5 points)</span></h2>

          <p>Your DTC 3PL almost certainly cannot handle retail fulfillment. Most brands discover this after signing the PO, not before. The transition typically costs $50,000&ndash;$150,000 in time and remediation if it is unplanned.</p>

          <div className="b-takeaways" style={{ background: '#f9f9f9' }}>
            <p style={{ color: 'var(--bk)', textTransform: 'none', fontSize: '13px', letterSpacing: 0, fontWeight: 600 }}>Score 1 point for each item that is true today</p>
            <ul>
              <li>3PL versus in-house fulfillment has been formally evaluated</li>
              <li>Container and inbound freight planning is mapped</li>
              <li>Inventory forecast includes buffer stock calculation</li>
              <li>Order accuracy and returns process are solid</li>
              <li>Retail and DTC routing and labeling requirements are confirmed</li>
            </ul>
          </div>

          <p>Routing guide compliance is the single biggest source of first-year chargebacks. The guide specifies carrier, appointment windows, pallet dimensions, label placement, and ASN timing. Deviations generate automatic deductions, typically $500&ndash;$5,000 per incident.</p>

          {/* SECTION 4 */}
          <h2 id="systems">Section 4 &mdash; Operational Systems &amp; Planning <span className="o">(5 points)</span></h2>

          <p>If the founder is the operating system, the business cannot scale. Retail requires data-driven decisions made faster than any individual can track manually.</p>

          <div className="b-takeaways" style={{ background: '#f9f9f9' }}>
            <p style={{ color: 'var(--bk)', textTransform: 'none', fontSize: '13px', letterSpacing: 0, fontWeight: 600 }}>Score 1 point for each item that is true today</p>
            <ul>
              <li>You are using a system (even a lightweight one) for demand forecasting</li>
              <li>Core ops workflows are documented and repeatable</li>
              <li>You can track and report lead times, margins, and inventory in real time</li>
              <li>Ops decisions are driven by real-time data, not gut</li>
              <li>An ops team (even fractional) owns the process end-to-end</li>
            </ul>
          </div>

          <p>A documented, repeatable workflow is not bureaucracy. It is the only way to scale operations without scaling headcount at the same rate. Every undocumented process is a single-person dependency.</p>

          {/* SECTION 5 */}
          <h2 id="team">Section 5 &mdash; Team &amp; Execution Support <span className="o">(5 points)</span></h2>

          <p>Operations leadership is not the same as a VP of Operations title. For most brands at $5M&ndash;$20M, fractional ops leadership covering packaging, sourcing, and logistics outperforms a single in-house hire who cannot cover all three.</p>

          <div className="b-takeaways" style={{ background: '#f9f9f9' }}>
            <p style={{ color: 'var(--bk)', textTransform: 'none', fontSize: '13px', letterSpacing: 0, fontWeight: 600 }}>Score 1 point for each item that is true today</p>
            <ul>
              <li>Founder is not handling day-to-day ops alone</li>
              <li>You have access to expert ops leadership (even fractional)</li>
              <li>Packaging, sourcing, and logistics are integrated, not siloed</li>
              <li>Launch timelines are realistic and protected from bottlenecks</li>
              <li>You can scale ops support without hiring a full internal team</li>
            </ul>
          </div>

          <p>The cost gap between fractional ops and full-time build-out is significant. A fractional retainer typically runs $30,000&ndash;$120,000 per year. A senior ops bench with packaging, sourcing, and logistics covered runs $600,000&ndash;$830,000+. The capabilities are comparable. The timing and commitment are not.</p>

          {/* SECTION 6 */}
          <h2 id="stakeholders">Section 6 &mdash; Stakeholders, Approvals &amp; Speed to Market <span className="o">(5 points)</span></h2>

          <p>Packaging timelines break when approvals are unclear. Most delays in retail launch cycles are not supplier delays &mdash; they are internal approval delays nobody budgeted for.</p>

          <div className="b-takeaways" style={{ background: '#f9f9f9' }}>
            <p style={{ color: 'var(--bk)', textTransform: 'none', fontSize: '13px', letterSpacing: 0, fontWeight: 600 }}>Score 1 point for each item that is true today</p>
            <ul>
              <li>Packaging decisions are aligned between brand, marketing, and ops</li>
              <li>Retailer or partner requirements are integrated into timelines</li>
              <li>Approval processes are clear and not reliant on founder sign-off alone</li>
              <li>Launch critical paths are mapped with realistic buffers</li>
              <li>A designated owner is accountable for timelines and vendor coordination</li>
            </ul>
          </div>

          {/* CALLOUT - CORE SCORE */}
          <div className="callout">
            <p><strong>Core Score: Total your Sections 1&ndash;6.</strong></p>
            <p>A score of 25&ndash;30 suggests strong operational foundations. Below 20 indicates significant gaps that will cost more to fix after launch than before it. Every unchecked item is a prioritized action for the next 30&ndash;60 days.</p>
          </div>

          {/* INVESTOR GRADE SECTION */}
          <h2 id="investor-grade">Investor-Grade Readiness</h2>

          <p>If you are raising capital, entering national retail, or presenting to enterprise buyers, the following sections apply. These are the exact filters VCs, retail buyers, and enterprise partners use to evaluate whether a brand can scale without chaos and protect margin while doing it.</p>

          {/* SECTION 7 */}
          <h2 id="retail-channel">Section 7 &mdash; Retail Channel Readiness <span className="o">(5 points)</span></h2>

          <div className="b-takeaways" style={{ background: '#f9f9f9' }}>
            <p style={{ color: 'var(--bk)', textTransform: 'none', fontSize: '13px', letterSpacing: 0, fontWeight: 600 }}>Score 1 point for each item that is true today</p>
            <ul>
              <li>GS1-compliant barcodes and shelf-ready specs are in place</li>
              <li>ASN/EDI systems and retailer compliance requirements are confirmed</li>
              <li>Slotting fees or placement strategy is documented</li>
              <li>Case pack and palletization standards are finalized</li>
              <li>MAP policy and enforcement strategy are in place</li>
            </ul>
          </div>

          {/* SECTION 8 */}
          <h2 id="margin">Section 8 &mdash; Margin Compression Stress Testing <span className="o">(3 points)</span></h2>

          <p>A brand with 65&ndash;70% gross margin on DTC often runs 25&ndash;40% contribution margin in retail Year 1. Model this before you commit, not after the PO is signed.</p>

          <div className="b-takeaways" style={{ background: '#f9f9f9' }}>
            <p style={{ color: 'var(--bk)', textTransform: 'none', fontSize: '13px', letterSpacing: 0, fontWeight: 600 }}>Score 1 point for each item that is true today</p>
            <ul>
              <li>Margins withstand 40&ndash;50% wholesale discounts</li>
              <li>Landed cost models account for chargebacks, MDF, and shrink</li>
              <li>Dynamic pricing tools support channel segmentation</li>
            </ul>
          </div>

          {/* SECTION 9 */}
          <h2 id="compliance">Section 9 &mdash; Regulatory &amp; Compliance Assurance <span className="o">(3 points)</span></h2>

          <div className="b-takeaways" style={{ background: '#f9f9f9' }}>
            <p style={{ color: 'var(--bk)', textTransform: 'none', fontSize: '13px', letterSpacing: 0, fontWeight: 600 }}>Score 1 point for each item that is true today</p>
            <ul>
              <li>Labeling meets FDA/FTC standards</li>
              <li>Packaging complies with Prop 65, CPSIA, and EU requirements (if applicable)</li>
              <li>QA protocols including batch/lot traceability and retention samples are active</li>
            </ul>
          </div>

          {/* SECTION 10 */}
          <h2 id="data">Section 10 &mdash; Data Infrastructure Readiness <span className="o">(4 points)</span></h2>

          <div className="b-takeaways" style={{ background: '#f9f9f9' }}>
            <p style={{ color: 'var(--bk)', textTransform: 'none', fontSize: '13px', letterSpacing: 0, fontWeight: 600 }}>Score 1 point for each item that is true today</p>
            <ul>
              <li>ERP or WMS tools are selected or scoped</li>
              <li>SKU-level profitability tracking is in place</li>
              <li>Retail readiness dashboards can be generated on demand</li>
              <li>Cross-channel inventory visibility is integrated (Shopify, NetSuite, FishBowl, or equivalent)</li>
            </ul>
          </div>

          {/* SECTION 11 */}
          <h2 id="crisis">Section 11 &mdash; Crisis Readiness &amp; Scenario Planning <span className="o">(4 points)</span></h2>

          <div className="b-takeaways" style={{ background: '#f9f9f9' }}>
            <p style={{ color: 'var(--bk)', textTransform: 'none', fontSize: '13px', letterSpacing: 0, fontWeight: 600 }}>Score 1 point for each item that is true today</p>
            <ul>
              <li>Backup 3PL or DC contingency is secured</li>
              <li>Alternate packaging spec is ready for material shortages</li>
              <li>Q4/peak lead time risk models are in use</li>
              <li>Recall and product hold protocols are documented</li>
            </ul>
          </div>

          {/* SCORING RUBRIC */}
          <h2 id="scoring">Your Readiness Score</h2>

          <p>Add up your totals across all completed sections.</p>

          <div style={{ overflowX: 'auto', marginBottom: 32 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr style={{ background: '#212121', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Score</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Readiness Level</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>What It Means</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #DFDFDF' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: '#DC2626' }}>&lt; 21</td>
                  <td style={{ padding: '12px 16px' }}>High fragility</td>
                  <td style={{ padding: '12px 16px', color: '#3E3E3E' }}>Stabilize before scaling. Retail will expose every gap simultaneously.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #DFDFDF', background: '#F3F3F3' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: '#D97706' }}>21&ndash;27</td>
                  <td style={{ padding: '12px 16px' }}>Risk-prone</td>
                  <td style={{ padding: '12px 16px', color: '#3E3E3E' }}>Patch ops before launching retail. Specific gaps will create expensive surprises.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #DFDFDF' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: '#FF600A' }}>28&ndash;34</td>
                  <td style={{ padding: '12px 16px' }}>Scale-ready with blind spots</td>
                  <td style={{ padding: '12px 16px', color: '#3E3E3E' }}>Strong foundations. Address the unchecked items as the next 30&ndash;60 day priority.</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: '#16a34a' }}>35&ndash;40</td>
                  <td style={{ padding: '12px 16px' }}>Retail-ready</td>
                  <td style={{ padding: '12px 16px', color: '#3E3E3E' }}>Investor-attractive operations. Ready for national retail, fundraising, or enterprise distribution.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="callout win">
            <p><strong>What this scorecard covers.</strong> The six core sections map directly to the operational failure points Logic Agency has identified across hundreds of retail launches: packaging gaps, supplier single-points-of-failure, 3PL mismatches, missing systems, founder dependency, and approval bottlenecks. Brands that score low here typically spend 10&ndash;30x more fixing the gaps reactively than they would have spent addressing them proactively.</p>
          </div>

          {/* WHAT NEXT */}
          <h2>What to Do With Your Score</h2>

          <p>The gaps you found are your priority list. Every unchecked item falls into one of three categories: fix it before the first PO, fix it during the first 90 days of retail, or accept it as a tracked risk with a mitigation plan.</p>

          <p>The most expensive version is discovering these gaps after a PO is signed. Supplier failures, chargebacks, 3PL mismatches, and stockouts all compound in retail because the costs are visible to the buyer and create long-term shelf placement risk.</p>

          <p>The cheapest version is running this scorecard six months before retail entry and building the remediation timeline into your launch plan.</p>

          {/* RELATED GUIDES */}
          <h2>Related Guides</h2>

          <div className="guide-link-card">
            <h4><a href="/guides/retail-readiness">The Retail Readiness Bible</a></h4>
            <p>The complete operational playbook for retail launch &mdash; packaging, supply chain, inventory, compliance, and a 60-point checklist.</p>
          </div>

          <div className="guide-link-card">
            <h4><a href="/guides/first-90-days-in-retail">Your First 90 Days in Retail</a></h4>
            <p>A week-by-week account of what actually happens after the buyer says yes &mdash; and how to not get blindsided by it.</p>
          </div>

          <div className="guide-link-card">
            <h4><a href="/guides/retail-chargebacks">Retail Chargebacks: Prevention Guide</a></h4>
            <p>The most common deductions, a prevention framework, and the dispute-versus-absorb logic for first-year retail brands.</p>
          </div>

          <div className="guide-link-card">
            <h4><a href="/guides/fractional-supply-chain-operations">Fractional Supply Chain Operations</a></h4>
            <p>What fractional ops covers, what it costs, and when it makes more sense than building a full in-house team.</p>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="b-faq-h">FAQ</h2>

          <h3>Who should use the retail readiness scorecard?</h3>
          <p>VC-backed and bootstrapped founders preparing for retail expansion, growth-stage brands under investor pressure, heads of ops building internal systems or deciding to outsource, and brands building due diligence materials for fundraising or retail placement.</p>

          <h3>What score means a brand is retail-ready?</h3>
          <p>A score of 35&ndash;40 indicates retail-ready, investor-attractive operations. Scores of 28&ndash;34 indicate scale-readiness with minor blind spots to address. Scores below 21 indicate high fragility &mdash; the brand should stabilize operations before entering retail.</p>

          <h3>How long does the scorecard take?</h3>
          <p>Completing all 40 points takes 15&ndash;20 minutes if your ops documentation is accessible. The value is in being honest &mdash; partial progress counts as zero, which surfaces real gaps faster.</p>

          <h3>What are the most common gaps brands find?</h3>
          <p>The most common gaps are in Sourcing &amp; Supplier Readiness (secondary suppliers not secured, landed cost not fully mapped) and Fulfillment &amp; Logistics Preparedness (3PL not evaluated for retail, routing and labeling requirements not confirmed). These are also the gaps that create the most expensive problems in year one of retail.</p>

          <h3>Is there a downloadable version?</h3>
          <p>Yes. The full PDF scorecard is available for download below.</p>

        </div>
      </div>

      {/* FAQ ACCORDION */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[
            { q: 'Who should use the retail readiness scorecard?', a: 'VC-backed and bootstrapped founders preparing for retail expansion, growth-stage brands under investor pressure, heads of ops building internal systems or deciding to outsource, and brands building due diligence materials for fundraising or retail placement.' },
            { q: 'What score means a brand is retail-ready?', a: 'A score of 35–40 indicates retail-ready, investor-attractive operations. Scores of 28–34 indicate scale-readiness with minor blind spots. Scores below 21 indicate high fragility — stabilize before entering retail.' },
            { q: 'How long does the scorecard take?', a: 'Completing all 40 points takes 15–20 minutes if your ops documentation is accessible. Partial progress counts as zero, which surfaces real gaps faster than optimistic scoring.' },
            { q: 'What are the most common gaps?', a: 'Backup suppliers not secured, landed cost not fully mapped, 3PL not evaluated for retail fulfillment, and routing/labeling requirements not confirmed. These are the gaps that create the most expensive first-year retail problems.' },
            { q: 'Is there a downloadable PDF version?', a: 'Yes. The full 40-point PDF scorecard is available for download from Logic Agency.' },
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-band-inner">
          <h2>Ready to Fix <span className="o">the Gaps?</span></h2>
          <p>Book a 30-minute call. We&apos;ll review your score and give you a straight answer on what to address first.</p>
          <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a>
          <a href="https://drive.google.com/file/d/1v78gxZkoNjz4sk5bO-MCFMx6sob5jROp/view" className="cta-dl" target="_blank" rel="noopener noreferrer">Download the PDF Scorecard &rarr;</a>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
