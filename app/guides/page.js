import Link from 'next/link';
import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';

const conceptOrigin = 'https://credyset.github.io/logic-agency-site-concept';

const guideGroups = [
  {
    id: 'retail-growth',
    eyebrow: 'Retail expansion',
    title: 'Win—and keep—retail',
    description: 'Prepare the operation behind the pitch, then protect service levels, margin, and shelf placement as distribution grows.',
    guides: [
      {
        href: '/guides/retail-readiness',
        readTime: '25 min',
        title: 'The Retail Readiness Bible',
        description: 'Audit compliance, packaging, logistics, inventory, and ownership before a retailer exposes the gaps.',
      },
      {
        href: '/guides/retail-readiness-scorecard',
        readTime: '20 min',
        title: '40-Point Retail Readiness Scorecard',
        description: 'Score packaging, sourcing, fulfillment, systems, and team readiness—then turn every gap into a prioritized action.',
        linkLabel: 'Use the scorecard',
      },
      {
        href: '/guides/first-90-days-in-retail',
        readTime: '20 min',
        title: 'First 90 Days in Retail',
        description: 'Build the launch rhythm that keeps retailer systems, replenishment, deductions, and shelf performance under control.',
      },
      {
        href: '/guides/dtc-to-retail-supply-chain',
        readTime: '12 min',
        title: 'DTC to Retail Supply Chain',
        description: 'Install the five systems a DTC operation needs before it can absorb retailer POs, lead times, and margin pressure.',
      },
      {
        href: '/guides/retail-chargebacks',
        readTime: '12 min',
        title: 'Retail Chargebacks Explained',
        description: 'Find the root causes behind deductions, prevent repeat violations, and know when a chargeback is worth disputing.',
      },
      {
        href: '/guides/distributor-onboarding-playbook',
        readTime: '19 min',
        title: 'The CPG Distributor Onboarding Playbook',
        description: 'Coordinate item setup, inventory, data, routing, and launch timing so distributor approval turns into clean reorders.',
      },
      {
        href: '/guides/cpg-broker-selection-playbook',
        readTime: '14 min',
        title: 'How to Select, Manage, and Fire a CPG Broker',
        description: 'Set expectations, measure execution, and replace a broker without losing retailer visibility or momentum.',
      },
      {
        href: '/guides/regional-to-national-retail-expansion',
        readTime: '14 min',
        title: 'From Regional to National Retail',
        description: 'Sequence capacity, distribution, compliance, and working capital before national scale magnifies regional weaknesses.',
      },
    ],
  },
  {
    id: 'packaging-production',
    eyebrow: 'Packaging & production',
    title: 'Build a supply base that scales',
    description: 'Make better packaging and manufacturing decisions by connecting design intent to cost, quality, capacity, and risk.',
    guides: [
      {
        href: '/guides/retail-ready-packaging',
        readTime: '15 min',
        title: 'Getting Your Packaging Retail-Ready',
        description: 'Translate retailer requirements into case packs, pallet specs, labeling, testing, and a workable launch timeline.',
      },
      {
        href: '/guides/packaging-cost-reduction',
        readTime: '12 min',
        title: 'Packaging Cost Reduction Without Sacrificing Brand',
        description: 'Locate margin leaks in materials, engineering, freight, and supplier markups without diluting the brand experience.',
      },
      {
        href: '/guides/packaging-system-that-scales',
        readTime: '14 min',
        title: 'Building a Packaging System That Scales',
        description: 'Replace one-off packaging orders with specifications, suppliers, tooling, and controls that survive SKU growth.',
      },
      {
        href: '/guides/packaging-sourcing',
        readTime: '16 min',
        title: 'How to Source Packaging Without Getting Burned',
        description: 'Qualify suppliers, model landed cost, and choose domestic or overseas production with fewer expensive surprises.',
      },
      {
        href: '/guides/sustainable-packaging-cpg',
        readTime: '21 min',
        title: 'Sustainable Packaging for CPG Brands',
        description: 'Evaluate material, cost, performance, claims, and end-of-life tradeoffs as one operating decision.',
      },
      {
        href: '/guides/co-manufacturer-selection',
        readTime: '18 min',
        title: 'How to Find, Vet, and Scale With the Right Co-Manufacturer',
        description: 'Compare capacity, quality, economics, communication, and total cost before committing a production run.',
      },
      {
        href: '/guides/co-manufacturer-contracts-risk',
        readTime: '17 min',
        title: 'Co-Manufacturer Contracts and Operational Risk',
        description: 'Clarify specifications, capacity, quality, inventory, IP, and exit terms before the relationship is tested.',
      },
    ],
  },
  {
    id: 'economics-planning',
    eyebrow: 'Economics & planning',
    title: 'Protect margin, cash, and availability',
    description: 'Connect unit economics and forecasts to the purchasing, production, inventory, and channel decisions they should drive.',
    guides: [
      {
        href: '/guides/cpg-gross-margin-playbook',
        readTime: '17 min',
        title: 'The CPG Gross Margin Playbook',
        description: 'Trace the operational leaks between revenue and contribution margin, then prioritize the moves that recover points.',
      },
      {
        href: '/guides/cpg-working-capital-playbook',
        readTime: '14 min',
        title: 'The CPG Working Capital Playbook',
        description: 'Separate loss problems from timing problems and manage the cash conversion cycle before growth consumes liquidity.',
      },
      {
        href: '/guides/landed-cost-playbook',
        readTime: '12 min',
        title: 'Landed Cost Playbook for CPG Brands',
        description: 'Build the full cost stack behind each SKU so freight, duties, tooling, and warehousing stop hiding in the P&L.',
      },
      {
        href: '/guides/cpg-channel-economics',
        readTime: '15 min',
        title: 'Amazon vs. DTC vs. Retail: Channel Economics',
        description: 'Compare margin, inventory, fulfillment, data, and operating complexity before choosing where the next sale should come from.',
      },
      {
        href: '/guides/cpg-demand-forecasting',
        readTime: '15 min',
        title: 'Demand Forecasting for CPG Brands',
        description: 'Turn imperfect demand signals into purchasing, production, safety-stock, cash, and service-level decisions.',
      },
    ],
  },
  {
    id: 'operating-system',
    eyebrow: 'Operating system',
    title: 'Scale capability before overhead',
    description: 'Choose the partners, leadership model, metrics, and tools that give a growing brand operating leverage without unnecessary complexity.',
    guides: [
      {
        href: '/guides/fractional-supply-chain-operations',
        readTime: '12 min',
        title: 'Fractional Supply Chain Operations',
        description: 'Understand when embedded senior operators can close capability gaps before a full internal team makes sense.',
      },
      {
        href: '/guides/fractional-coo-vs-full-time-hire',
        readTime: '12 min',
        title: 'Fractional COO vs. Full-Time Hire',
        description: 'Compare real cost, scope, speed, and organizational fit before committing to an operations leadership model.',
      },
      {
        href: '/guides/3pl-selection-guide',
        readTime: '12 min',
        title: '3PL Selection Guide for Consumer Product Brands',
        description: 'Evaluate channel fit, retail compliance, systems, pricing, and risk before signing a fulfillment agreement.',
      },
      {
        href: '/guides/cpg-operations-kpis',
        readTime: '13 min',
        title: 'The CPG Operations KPI Dashboard',
        description: 'Focus the team on the service, inventory, production, cash, margin, and supplier metrics that change decisions.',
      },
      {
        href: '/guides/ai-for-cpg-operations',
        readTime: '22 min',
        title: 'The Operator’s Guide to AI for CPG Operations',
        description: 'Identify where AI can remove operational drag—and where automation creates more noise than useful control.',
      },
    ],
  },
];

const guides = guideGroups.flatMap((group) => group.guides);

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Supply Chain & Packaging Guides',
  description: 'Operational guides for scaling consumer product brands: retail readiness, packaging, supply chain, operations, and growth economics.',
  url: `${conceptOrigin}/guides/`,
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: guides.length,
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${conceptOrigin}${guide.href}/`,
      name: guide.title,
    })),
  },
};

export const metadata = {
  title: 'Supply Chain & Packaging Guides — Logic Agency Inc.',
  description: 'In-depth operational guides for scaling consumer product brands: retail readiness, packaging cost reduction, 3PL selection, retail chargebacks, DTC-to-retail transition, fractional operations, working capital, and landed cost.',
  keywords: 'supply chain guides CPG, packaging guides brand, retail readiness guide, 3PL selection guide, retail chargebacks guide, DTC to retail guide, fractional supply chain, CPG working capital, landed cost CPG',
  alternates: {
    canonical: 'https://credyset.github.io/logic-agency-site-concept/guides',
  },
  openGraph: {
    title: 'Supply Chain & Packaging Guides — Logic Agency Inc.',
    description: 'Operational guides for scaling brands: retail readiness, packaging cost, 3PL selection, retail chargebacks, and more.',
    url: 'https://credyset.github.io/logic-agency-site-concept/guides',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supply Chain & Packaging Guides — Logic Agency Inc.',
    description: 'Operational guides for scaling brands: retail readiness, packaging cost, 3PL selection, retail chargebacks, and more.',
  },
};

function GuideCard({ guide }) {
  return (
    <Link href={guide.href} className="guide-card">
      <div className="guide-card-inner">
        <p className="guide-meta">{guide.readTime} read</p>
        <h3>{guide.title}</h3>
        <p>{guide.description}</p>
        <span className="guide-link">{guide.linkLabel || 'Read the guide'} &rarr;</span>
      </div>
    </Link>
  );
}

export default function GuidesIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Nav />

      <main>
        <section className="gl guide-index-hero">
          <div className="guide-index-inner">
            <p className="breadcrumb"><Link href="/">Logic Agency</Link> &nbsp;/&nbsp; Guides</p>
            <div className="guide-index-hero-grid">
              <div>
                <p className="guide-index-kicker">The operator’s field library</p>
                <h1>Operational guides for <span className="o">scaling brands</span></h1>
              </div>
              <div className="guide-index-intro">
                <p>Practical reference content built around the decisions that determine whether growth creates leverage—or operational debt.</p>
                <p className="guide-index-count"><strong>{guides.length}</strong> substantive guides across four operating outcomes.</p>
              </div>
            </div>

            <div className="guide-outcome-nav" role="navigation" aria-label="Guide categories">
              <span>Explore by outcome</span>
              {guideGroups.map((group) => (
                <a href={`#${group.id}`} key={group.id}>{group.eyebrow}</a>
              ))}
            </div>
          </div>
        </section>

        <section className="gl guide-index-library" aria-label="Guide library">
          <div className="guide-index-inner">
            {guideGroups.map((group, index) => (
              <section className="guide-group" id={group.id} aria-labelledby={`${group.id}-title`} key={group.id}>
                <header className="guide-group-heading">
                  <p className="guide-group-number">0{index + 1}</p>
                  <div>
                    <p className="guide-group-eyebrow">{group.eyebrow}</p>
                    <h2 id={`${group.id}-title`}>{group.title}</h2>
                    <p>{group.description}</p>
                  </div>
                  <span className="guide-group-count">{group.guides.length} guides</span>
                </header>
                <div className="guides-grid">
                  {group.guides.map((guide) => <GuideCard guide={guide} key={guide.href} />)}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="cta-band gd">
          <div className="cta-inner">
            <h2>Need ops support, not <span className="o">just reading material?</span></h2>
            <p>Start with what&apos;s actually breaking. We&apos;ll help identify the operating cause and tell you plainly whether Logic is the right fit.</p>
            <div className="cta-btns">
              <Link href="/#cta" className="bt bo">Tell Us What&apos;s Not Working &rarr;</Link>
            </div>
            <span className="cta-sub">Logic Agency Inc. &middot; Embedded Packaging &middot; Supply Chain &middot; Operations</span>
          </div>
        </section>
      </main>

      <FooterHome />
    </>
  );
}
