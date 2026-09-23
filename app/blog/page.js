import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Logic Agency Blog",
  "description": "Operational advice on supply chain, retail launch, packaging, and fractional operations for consumer product brands.",
  "url": "https://www.logicagencyinc.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Logic Agency Inc.",
    "url": "https://www.logicagencyinc.com"
  }
};

export const metadata = {
  title: 'Blog — Supply Chain & Retail Operations for CPG Brands — Logic Agency Inc.',
  description: 'Operational advice on retail launch, supply chain, packaging economics, and fractional operations for consumer product brands doing $5M–$20M in revenue.',
  alternates: { canonical: 'https://www.logicagencyinc.com/blog' },
  openGraph: {
    title: 'Logic Agency Blog — Supply Chain & Retail Operations',
    description: 'Operational advice on retail launch, supply chain, packaging economics, and fractional operations for scaling consumer product brands.',
    url: 'https://www.logicagencyinc.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Agency Blog — Supply Chain & Retail Operations',
    description: 'Operational advice on retail launch, supply chain, packaging economics, and fractional operations for scaling consumer product brands.',
  },
};

const posts = [
  { href: '/blog/kehe-compliance-requirements', img: '/images/port-us-retail.jpg', alt: 'KeHE compliance requirements for emerging CPG brands', tag: 'Distributor Compliance', time: '11 min read', title: 'KeHE Compliance for Emerging Brands: Scorecards, Deductions, and PO Risk', desc: 'KeHE compliance forces emerging brands to manage fill rate, case accuracy, EDI, deductions, item setup, routing, and invoice reconciliation before small misses become cash leakage.' },
  { href: '/blog/retail-operations-roadmap', img: '/images/og-first-90-days-in-retail.jpg', alt: '30 60 90 retail operations roadmap for CPG brands', tag: 'Retail Operations', time: '10 min read', title: 'How to Build a 30/60/90 Retail Operations Roadmap', desc: 'A retail operations roadmap turns audit findings into sequenced fixes across chargebacks, EDI, inventory, scorecards, freight, invoices, and ownership.' },
  { href: '/blog/small-parcel-vs-ltl-retail-distribution', img: '/images/port-launch.jpg', alt: 'Small parcel vs LTL retail distribution for CPG brands', tag: 'Logistics', time: '10 min read', title: 'When to Move from Small Parcel to LTL in Retail Distribution', desc: 'Small parcel vs. LTL decisions should be based on shipment value, retailer requirements, pallet efficiency, damage risk, handling cost, and operational complexity.' },
  { href: '/blog/packaging-overhaul-roadmap', img: '/images/port-skincare.jpg', alt: 'Packaging overhaul roadmap for beauty brands', tag: 'Packaging Strategy', time: '11 min read', title: 'Packaging Overhaul Roadmap: Phase a 6-12 Month Redesign Without Breaking Launches', desc: 'A packaging overhaul roadmap phases redesign, sourcing, validation, inventory runout, launch timing, and sustainability decisions so active operations do not break.' },
  { href: '/blog/packaging-design-supply-chain-partner', img: '/images/port-sourcing.jpg', alt: 'Integrated packaging design and supply chain partner', tag: 'Packaging Partner', time: '10 min read', title: 'One Partner for Packaging Design and Supply Chain: When the Split Model Breaks', desc: 'An integrated packaging partner reduces handoffs when brands need creative direction, sourcing, production, compliance, cost control, and launch timing managed together.' },
  { href: '/blog/retail-operations-audit', img: '/images/port-retail.jpg', alt: 'Retail operations audit for CPG brands', tag: 'Transcript Lessons', time: '11 min read', title: 'Retail Operations Audit: What It Should Find Before Chargebacks Compound', desc: 'A retail operations audit should find the scorecard, chargeback, EDI, inventory, freight, and invoice issues that quietly compound before retail growth breaks margin.' },
  { href: '/blog/retail-fill-rate-scorecard', img: '/images/port-us-retail.jpg', alt: 'Retail fill rate scorecard management for CPG brands', tag: 'Retail Scorecards', time: '10 min read', title: 'Why a 98% Fill Rate Can Still Look Bad on a Retail Scorecard', desc: 'A retail fill rate scorecard can make strong execution look weak when canceled POs, substitutions, short shipments, and timing rules are not reconciled correctly.' },
  { href: '/blog/sps-commerce-integration-checklist', img: '/images/port-sourcing.jpg', alt: 'SPS Commerce integration checklist for retail brands', tag: 'EDI & Tech', time: '11 min read', title: 'SPS Commerce Integration: What Brands Should Fix Before Go-Live', desc: 'SPS setup is not complete when the account connects. Brands need item setup, labels, ASNs, invoices, routing, warehouse handoffs, and exception ownership before go-live.' },
  { href: '/blog/packaging-cost-reduction-case-study', img: '/images/og-packaging-cost-reduction.jpg', alt: 'Packaging cost reduction case study for consumer brands', tag: 'Packaging Cost', time: '10 min read', title: 'Packaging Cost Reduction Case Study: Cut Cost Without Killing Brand Feel', desc: 'Logic materials identify Artilect as a proof point for 20% packaging cost reduction and 95% material reduction without weakening the brand experience.' },
  { href: '/blog/us-market-entry-retail-operations', img: '/images/haldirams.jpg', alt: 'US market entry retail operations for global brands', tag: 'Market Entry', time: '11 min read', title: 'Global Brand US Market Entry: What Retail Packaging and Ops Must Solve First', desc: 'US retail entry requires packaging adaptation, compliance, channel planning, inventory, buyer readiness, and launch execution before a global brand can scale.' },
  { href: '/blog/supplier-transition-strategy-scaling-brands', img: '/images/work/audio-enhancement/teacher-box-blue-bg.jpg', alt: 'Supplier transition strategy for scaling consumer brands', tag: 'Case Study Lessons', time: '11 min read', title: 'Supplier Transition Strategy for Scaling Consumer Brands', desc: 'A supplier transition should start before quality drift becomes customer-facing. The safest path runs containment, new supplier qualification, and pilot-run QC in parallel.' },
  { href: '/blog/managed-packaging-inventory-program', img: '/images/work/epicutis/epicutis-kits-group-grey.jpg', alt: 'Managed packaging inventory program for scaling brands', tag: 'Inventory', time: '11 min read', title: 'Managed Packaging Inventory: How Scaling Brands Avoid Urgent Freight', desc: 'A managed packaging inventory program pre-positions packaging so launches, replenishment, and co-manufacturer needs are not blocked by every new procurement cycle.' },
  { href: '/blog/packaging-operations-sku-growth', img: '/images/work/epicutis/epicutis-gradient.jpg', alt: 'Packaging operations system behind SKU growth', tag: 'Packaging Ops', time: '10 min read', title: 'Packaging Operations: The System Behind SKU Growth', desc: 'SKU growth breaks when packaging is treated as one-off purchasing instead of an operating system across sourcing, inventory, landed cost, and replenishment.' },
  { href: '/blog/quality-containment-supplier-transition', img: '/images/work/audio-enhancement/old-packaging-1.jpeg', alt: 'Quality containment process before supplier replacement', tag: 'Quality Control', time: '10 min read', title: 'Quality Containment Before Supplier Replacement', desc: 'Quality containment protects existing inventory and customer-facing product while a brand investigates supplier issues or qualifies a replacement manufacturer.' },
  { href: '/blog/retail-margin-compression-dtc-wholesale', img: '/images/port-launch.jpg', alt: 'Retail margin economics for consumer brands', tag: 'Economics', time: '10 min read', title: 'DTC vs Retail Margins: What Founders Discover After the First PO', desc: 'A brand healthy at 65–70% DTC gross margin can land at 20–40% contribution margin in retail. Here’s the full cost stack — and how to model it before you say yes to a buyer.' },
  { href: '/blog/how-to-get-products-into-retail-stores', img: '/images/port-retail.jpg', alt: 'Getting consumer products into Target, Walmart, and Costco', tag: 'Retail Entry', time: '14 min read', title: 'How to Get Your Products Into Target, Walmart, and Costco', desc: 'Getting products into retail stores takes 12–18 months. The brands that make it through prepare operations before the pitch, not after the buyer says yes.' },
  { href: '/blog/dtc-to-retail-supply-chain', img: '/images/port-skincare.jpg', alt: 'Retail 3PL readiness for DTC brands entering retail', tag: 'Retail Fulfillment', time: '8 min read', title: 'Retail 3PL Readiness: The DTC-to-Retail Failure Point', desc: 'Most DTC-to-retail supply chain failures start with the 3PL. The retail fulfillment checks to run before signing a first PO.' },
  { href: '/blog/dtc-to-retail-transition-checklist', img: '/images/haldirams.jpg', alt: '60-point DTC to retail transition checklist for CPG brands', tag: 'Retail Launch', time: '15 min read', title: 'The Complete DTC-to-Retail Transition Checklist (60-Point Pre-PO Guide)', desc: 'Six operational categories: GS1 setup, EDI, case packs, routing guide compliance, wholesale margins, and inventory planning. Brands that miss these absorb $50K–$200K in first-year mistakes.' },
  { href: '/blog/first-90-days-retail-operations-playbook', img: '/images/og-first-90-days-in-retail.jpg', alt: 'First 90 days in retail operations playbook', tag: 'Retail Operations', time: '13 min read', title: 'The First 90 Days in Retail: An Operations Playbook', desc: 'The first 90 days determine whether you earn a reorder or create operational noise. A week-by-week playbook for compliance, shipping, sell-through, and replenishment.' },
  { href: '/blog/retailer-requirements-emerging-brands', img: '/images/port-us-retail.jpg', alt: 'What retail buyers actually want from emerging brands', tag: 'Retail Launch', time: '11 min read', title: 'What Retailers Actually Want from Emerging Brands', desc: 'Retail buyers evaluate category fit, margin structure, velocity proof, operational readiness, and compliance documentation before placing a first PO.' },
  { href: '/blog/routing-guide-compliance-retail', img: '/images/port-retail.jpg', alt: 'Retail routing guide compliance for CPG brands', tag: 'Compliance', time: '10 min read', title: 'Retail Routing Guide Compliance: What Every Brand Gets Wrong', desc: 'Routing guide compliance means shipping exactly the way a retailer tells you to ship. Most brands get it wrong because nobody reads the full guide before the first PO moves.' },
  { href: '/blog/edi-setup-small-brands', img: '/images/port-sourcing.jpg', alt: 'EDI setup guide for small consumer brands entering retail', tag: 'EDI & Tech', time: '11 min read', title: 'EDI Setup for Small Brands: A Plain-English Guide', desc: 'EDI setup costs $150–$500/month and takes 4–8 weeks. Here’s what the four core transactions do, how to avoid the most expensive mistakes, and which providers work best for small brands.' },
  { href: '/blog/edi-compliance-consumer-brands', img: '/images/port-launch.jpg', alt: 'EDI compliance management for consumer brands after retail go-live', tag: 'EDI & Tech', time: '14 min read', title: 'EDI Compliance: Maintaining Your Retailer Scorecard After Go-Live', desc: 'Most brands get the initial setup right. Where compliance breaks down is months 3–12, when oversight drops and the retailer’s compliance team is watching more closely than the brand is.' },
  { href: '/blog/retail-chargebacks-prevention-guide', img: '/images/og-retail-readiness.jpg', alt: 'Pre-shipment audit to prevent retail chargebacks', tag: 'Compliance', time: '15 min read', title: 'Retail Chargeback Prevention: The Pre-Shipment Audit Every CPG Brand Needs', desc: 'The most expensive chargebacks are the ones you paid for twice — once for the violation, once to fix the process. Prevention is cheaper than response. By a significant margin.' },
  { href: '/blog/retail-inventory-planning-90-day', img: '/images/port-sourcing.jpg', alt: 'Retail inventory planning for CPG brands first 90 days', tag: 'Inventory', time: '11 min read', title: 'Retail Inventory Planning: Building the 90-Day Forecast Before Your First PO', desc: 'Retail inventory planning means building a 90-day model before the first PO ships: pipeline fill, safety stock, reorder trigger, and production lead time. Month one looks fine. Months 4–6 are where weak planning shows up.' },
  { href: '/blog/inventory-management-beauty-brands', img: '/images/port-skincare.jpg', alt: 'Inventory management for beauty and skincare brands', tag: 'Inventory', time: '11 min read', title: 'Inventory Management for Beauty Brands', desc: 'Beauty inventory is harder than most CPG categories — shade proliferation, expiration dates, 12–16 week lead times, and multi-channel demand. Here’s the framework that actually works.' },
  { href: '/blog/how-to-switch-3pl-without-losing-retail', img: '/images/port-us-retail.jpg', alt: 'How to switch 3PL providers without losing retail accounts', tag: 'Logistics', time: '12 min read', title: 'How to Switch 3PLs Without Losing a Retail Account', desc: 'Switching 3PLs is an operating-system migration, not a vendor change. The mistake is moving inventory before proving the order flow. Here’s the parallel-run transition plan.' },
  { href: '/blog/operations-packaging-scaling-brands', img: '/images/port-launch.jpg', alt: 'How packaging and supply chain operations work together to scale brands', tag: 'Operations', time: '11 min read', title: 'How Operations and Packaging Work Together to Scale a Brand', desc: 'Case pack configuration affects freight cost. Material selection affects returns. Packaging dimensions affect warehouse efficiency. Brands managing these in silos typically absorb significant hidden costs.' },
  { href: '/blog/packaging-partner-vs-vendor', img: '/images/port-sourcing.jpg', alt: 'Packaging partner vs packaging vendor comparison for CPG brands', tag: 'Packaging', time: '11 min read', title: 'Packaging Partner vs. Packaging Vendor: Why the Distinction Determines Your Margins', desc: 'A vendor produces what you spec. A partner shapes the decisions before the spec exists. The vendor model works for commodity packaging. The partner model is the difference between hitting your retail launch and missing it.' },
  { href: '/blog/reduce-packaging-costs-without-sacrificing-quality', img: '/images/epicutis.jpg', alt: 'How to reduce packaging costs without downgrading brand quality', tag: 'Packaging', time: '11 min read', title: 'How to Reduce Packaging Costs Without Sacrificing Brand Quality', desc: 'Seven proven levers for reducing CPG packaging costs without downgrading the brand experience — DIM weight, finish engineering, vendor consolidation, and more. Artilect achieved 20% cost reduction without consumer-facing changes.' },
  { href: '/blog/packaging-cost-per-unit-benchmarks', img: '/images/port-skincare.jpg', alt: 'Packaging cost per unit benchmarks by product category', tag: 'Packaging', time: '11 min read', title: 'Packaging Cost Per Unit Benchmarks by Category', desc: 'Beauty and skincare: $1.50–$8.00 per unit. Food and beverage: $0.30–$3.00. Supplements: $0.80–$4.00. Consumer electronics: $2.00–$12.00. Real ranges by category with COGS guidance.' },
  { href: '/blog/global-packaging-sourcing', img: '/images/port-sourcing.jpg', alt: 'How to source packaging overseas internationally for CPG brands', tag: 'Sourcing', time: '17 min read', title: 'How to Source Packaging Overseas: A Practical Guide', desc: 'International packaging typically runs an estimated 30–60% less per unit than domestic equivalents. The full sourcing cycle runs 16–24 weeks. Here’s every step from RFQ to customs clearance.' },
  { href: '/blog/vendor-diversification-strategy-cpg-brands', img: '/images/port-us-retail.jpg', alt: 'Vendor diversification strategy for consumer product brands', tag: 'Supply Chain', time: '10 min read', title: 'Vendor Diversification: When and How to Stop Single-Sourcing', desc: 'Single-source supply chains break. When they do, the cost is a missed retail launch or a stockout on your hero SKU. The 80/20 dual-sourcing framework for CPG brands.' },
  { href: '/blog/supply-chain-audit-what-it-finds', img: '/images/port-launch.jpg', alt: 'What a supply chain audit finds for CPG brands', tag: 'Operations', time: '12 min read', title: 'What a Supply Chain Audit Actually Finds', desc: 'A supply chain audit identifies where growth is being slowed by hidden cost, supplier risk, inventory gaps, and freight waste. At Logic Agency, it starts the same way every time: show us the last 12 months of landed cost by SKU.' },
  { href: '/blog/supply-chain-technology-stack', img: '/images/port-sourcing.jpg', alt: 'Supply chain technology stack for scaling CPG brands', tag: 'Technology', time: '14 min read', title: 'The Supply Chain Tech Stack for Scaling CPG Brands', desc: 'Five systems cover roughly 90% of what a $5–20M CPG brand needs: OMS, WMS, EDI provider, forecasting tool, supplier portal. Each has a clear revenue trigger. Get the sequence right and you build operational leverage.' },
  { href: '/blog/fractional-supply-chain-operations', img: '/images/epicutis.jpg', alt: 'First 30 days of fractional supply chain operations for CPG brands', tag: 'Embedded Ops', time: '7 min read', title: 'What Happens in the First 30 Days of Fractional Ops', desc: 'The first 30 days of fractional supply chain operations should create visibility, stabilize vendors, find cost leaks, and define ownership.' },
  { href: '/blog/fractional-coo-vs-full-time-hire', img: '/images/port-launch.jpg', alt: 'Founder evaluating when to hire operations leadership', tag: 'Founder Decision', time: '7 min read', title: 'The Hidden Cost of Hiring Ops Too Early', desc: 'Hiring a VP of Operations too early can create six months of cleanup, wrong-level scope, and fixed cost before a CPG brand knows the role.' },
];

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Nav />

      {/* HERO */}
      <section className="gd" style={{ padding: '80px 60px 64px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--o)', marginBottom: '16px' }}>Logic Agency</p>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', color: '#fff', margin: '0 0 20px' }}>Operations Insights</h1>
          <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'rgba(255,255,255,.75)', maxWidth: '580px', margin: 0 }}>Practical advice on supply chain, retail launch, packaging economics, and fractional operations &mdash; for brands scaling from $5M to $20M+ in revenue.</p>
        </div>
      </section>

      {/* BLOG GRID */}
      <div className="blog-grid">
        {posts.map(p => (
          <a key={p.href} href={p.href} className="blog-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.img} alt={p.alt} className="blog-card-img" />
            <div className="blog-card-body">
              <div className="blog-card-tag">{p.tag} &middot; {p.time}</div>
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
              <span className="blog-card-link">Read Article &rarr;</span>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-band-inner">
          <h2>Have an Operations<br /><em>Question?</em></h2>
          <p>Book a 30-minute call. We&apos;ll give you a straight answer &mdash; no sales pitch.</p>
          <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
