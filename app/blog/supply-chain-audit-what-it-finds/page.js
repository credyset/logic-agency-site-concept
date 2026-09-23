import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What a Supply Chain Audit Actually Finds",
  "description": "A practical supply chain audit guide for CPG brands: landed cost gaps, supplier risk, freight waste, inventory issues, packaging cost leaks, and next steps.",
  "author": {
    "@type": "Person",
    "name": "Jordan Harper",
    "url": "https://www.logicagencyinc.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Logic Agency Inc.",
    "url": "https://www.logicagencyinc.com"
  },
  "mainEntityOfPage": "https://www.logicagencyinc.com/blog/supply-chain-audit-what-it-finds",
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Logic Agency", "item": "https://www.logicagencyinc.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.logicagencyinc.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "What a Supply Chain Audit Actually Finds", "item": "https://www.logicagencyinc.com/blog/supply-chain-audit-what-it-finds" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a supply chain audit for a CPG brand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A supply chain audit reviews landed cost, suppliers, packaging, freight, inventory, 3PL performance, and retail compliance to find the constraints blocking growth."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a supply chain audit take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most focused audits take two to four weeks if the brand can provide supplier, freight, inventory, and sales data quickly."
      }
    },
    {
      "@type": "Question",
      "name": "What is the first thing a supply chain audit should review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Landed cost by SKU. If the brand does not know true landed cost, margin, pricing, retail readiness, and inventory planning are all built on weak data."
      }
    },
    {
      "@type": "Question",
      "name": "Does a supply chain audit always lead to cost savings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. Sometimes the highest-value finding is availability, supplier risk, or launch readiness. Cost savings matter most when they support growth."
      }
    },
    {
      "@type": "Question",
      "name": "Who should run a supply chain audit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Someone who understands sourcing, packaging, freight, inventory, fulfillment, and retail compliance. Looking at one area in isolation misses the way the system breaks."
      }
    }
  ]
};

export const metadata = {
  title: 'What a Supply Chain Audit Finds | Logic Agency',
  description: 'A practical supply chain audit guide for CPG brands: landed cost gaps, supplier risk, freight waste, inventory issues, packaging cost leaks, and next steps.',
  keywords: 'supply chain audit CPG brands, CPG supply chain audit, supply chain cost audit, packaging cost audit, landed cost audit, operational audit consumer brands',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/blog/supply-chain-audit-what-it-finds',
  },
  openGraph: {
    title: 'What a Supply Chain Audit Actually Finds',
    description: 'A practical supply chain audit guide for CPG brands: landed cost gaps, supplier risk, freight waste, inventory issues, packaging cost leaks, and next steps.',
    url: 'https://www.logicagencyinc.com/blog/supply-chain-audit-what-it-finds',
    type: 'article',
    publishedTime: '2026-06-17',
    authors: ['Jordan Harper'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What a Supply Chain Audit Actually Finds',
    description: 'A practical supply chain audit guide for CPG brands: landed cost gaps, supplier risk, freight waste, inventory issues, packaging cost leaks, and next steps.',
  },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav variant="guide" />

      {/* HERO */}
      <section className="b-hero gd">
        <div className="b-hero-inner">
          <div className="breadcrumb">
            <a href="/">Logic Agency</a> &nbsp;/&nbsp; <a href="/blog">Blog</a>
          </div>
          <span className="b-tag">Supply Chain Operations</span>
          <h1>What a Supply Chain Audit Actually Finds</h1>
          <p className="b-lede">A supply chain audit for a CPG brand identifies where growth is being slowed by hidden cost, supplier risk, inventory gaps, packaging inefficiency, freight waste, and retail compliance exposure. At Logic Agency, it starts the same way every time: we ask the brand to show us the last 12 months of landed cost by SKU. Less than 10% can. That tells us where to begin.</p>
          <div className="b-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Jun 2026</span>
            <span>10 min read</span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="b-feat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/port-launch.jpg" alt="Supply chain audit findings for a scaling CPG brand covering landed cost, freight, and inventory" className="b-feat-img" />
      </div>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>The first audit question is landed cost by SKU. Most brands cannot answer it cleanly.</li>
              <li>The biggest findings usually sit in packaging, freight, inventory, and supplier concentration.</li>
              <li>A good audit produces an action list, not a presentation deck.</li>
              <li>The point is not to find every flaw. It is to find the first three constraints blocking growth.</li>
              <li>Cost savings matter when they improve availability, margin, or launch capacity.</li>
            </ul>
          </div>

          <h2 id="what-it-reviews">What Does a Supply Chain Audit Review?</h2>

          <p>A supply chain audit reviews the operating system behind the product: what it costs to make, how long it takes to replenish, where the product sits, how it moves, who controls each step, and what breaks when volume increases.</p>

          <p>For a $5M&ndash;$20M CPG brand, the audit usually covers:</p>

          <ul>
            <li>Landed cost by SKU</li>
            <li>Supplier roster and concentration risk</li>
            <li>Packaging specifications and cost structure</li>
            <li>Freight invoices and DIM weight exposure</li>
            <li>Inventory turns and weeks of supply</li>
            <li>Reorder points and lead time buffers</li>
            <li>3PL performance</li>
            <li>Retail compliance exposure</li>
            <li>Chargeback history</li>
            <li>Forecasting process</li>
          </ul>

          <p>This is not a theoretical exercise. The audit should identify the operating changes that can happen in the next 30&ndash;90 days.</p>

          <h2 id="documents">What Documents Do You Need for a Supply Chain Audit?</h2>

          <p>The audit is only as useful as the source material. We usually ask for:</p>

          <ul>
            <li>Last 12 months of sales by SKU</li>
            <li>Last 12 months of landed cost by SKU</li>
            <li>Current supplier list</li>
            <li>Current packaging specifications</li>
            <li>Freight invoices</li>
            <li>3PL invoices</li>
            <li>Inventory on hand</li>
            <li>Open POs</li>
            <li>Lead time assumptions</li>
            <li>Retail chargeback history</li>
            <li>Routing guides for active retail accounts</li>
            <li>SKU-level margin model</li>
          </ul>

          <p>If the brand cannot provide all of it, that is not a failure. It is often the first finding. Missing data tells us where the operating system is not mature yet. A brand that cannot separate freight, duties, packaging, and handling inside landed cost is not ready to make confident pricing or retail decisions.</p>

          <p>The audit does not punish messy data. It exposes it early enough to fix.</p>

          <h2 id="finding-1">Finding 1: The Brand Does Not Know True Landed Cost</h2>

          <p>Landed cost is the cost of product after manufacturing, freight, duties, packaging, handling, and inbound logistics. It is the number that tells you whether a SKU actually makes money.</p>

          <p>Most brands know product cost. Fewer know landed cost. That gap matters because a SKU that looks profitable at the factory can become weak after freight, duties, packaging, and retail compliance are included.</p>

          <p>The audit question: &ldquo;Show us the last 12 months of landed cost by SKU.&rdquo; If the brand cannot answer, we build the model first. Everything else depends on it.</p>

          <p>The model does not need to be fancy. It needs to be trusted. One clean landed-cost table by SKU is more useful than a dashboard nobody believes. The table should show factory cost, packaging cost, inbound freight, duties, 3PL handling, and any special compliance cost. Once those are separated, the team can see which SKU is actually profitable and which SKU is being carried by average-margin math.</p>

          <p><strong>Typical impact:</strong> better pricing decisions, cleaner margin model, and fewer retail commitments made on incomplete economics.</p>

          <h2 id="finding-2">Finding 2: Packaging Cost Is Higher Than It Needs to Be</h2>

          <p>Packaging cost leaks usually hide in plain sight:</p>

          <ul>
            <li>Oversized cartons creating DIM weight exposure</li>
            <li>Finish stacking that does not change perceived value</li>
            <li>Board caliper above structural need</li>
            <li>Multiple vendors producing small runs</li>
            <li>MOQs negotiated one SKU at a time</li>
            <li>Packaging inventory stored in the wrong location</li>
          </ul>

          <p>The fix is not always &ldquo;find a cheaper supplier.&rdquo; Often the better move is to right-size the structure, reduce unnecessary finishes, consolidate volume, or shift freight control.</p>

          <p>Audio Enhancement is a good example of packaging work unlocking operational performance. Packaging redesign reduced shipping exposure and supported a stronger product experience without turning the project into a purely financial exercise.</p>

          <p><strong>Typical impact:</strong> reduced shipping waste, improved margin, and more room to fund inventory or launch activity.</p>

          <h2 id="finding-3">Finding 3: One Supplier Holds Too Much Risk</h2>

          <p>Single-supplier dependence is common at $5M&ndash;$20M. It starts innocently. One supplier works. The relationship is easy. Then volume grows, and the entire brand depends on one factory, one component, one lead time, or one account manager.</p>

          <p>The audit looks for:</p>

          <ul>
            <li>One supplier controlling a critical component</li>
            <li>No qualified backup for hero SKUs</li>
            <li>No current factory audit</li>
            <li>No documented tooling ownership</li>
            <li>No alternate production geography</li>
            <li>No emergency allocation plan</li>
          </ul>

          <p>The point is not to split every SKU across three suppliers. That creates chaos. The point is to remove the single point of failure on the components that can stop growth.</p>

          <p><strong>Typical impact:</strong> fewer launch delays, stronger negotiation position, and lower risk during capacity constraints.</p>

          <h2 id="finding-4">Finding 4: Freight Is Being Managed Shipment by Shipment</h2>

          <p>Freight cost gets out of control when nobody manages the pattern. Brands approve urgent shipments one at a time. They pay for air freight because production ran late. They use supplier-controlled freight because it feels easier. They accept warehouse locations that create extra handling.</p>

          <p>The audit reviews:</p>

          <ul>
            <li>Freight invoice history</li>
            <li>Mode mix: parcel, LTL, FTL, ocean, air</li>
            <li>Rush shipment frequency</li>
            <li>DIM weight exposure</li>
            <li>Incoterms</li>
            <li>Warehouse location relative to demand</li>
            <li>Inbound vs outbound cost separation</li>
          </ul>

          <p>The goal is to find whether the brand has a logistics strategy or a collection of freight bills.</p>

          <p><strong>Typical impact:</strong> lower landed cost, fewer rush shipments, and better launch planning.</p>

          <h2 id="finding-5">Finding 5: Inventory Planning Is Still Gut Feel</h2>

          <p>Inventory problems rarely show up as one problem. They show up as stockouts and overstock at the same time.</p>

          <p>The audit looks at:</p>

          <ul>
            <li>Weeks of supply by SKU</li>
            <li>Inventory turns</li>
            <li>Reorder points</li>
            <li>Safety stock logic</li>
            <li>Lead time assumptions</li>
            <li>Seasonal demand curve</li>
            <li>MOQ impact on cash</li>
            <li>Slow-moving inventory</li>
          </ul>

          <p>The most common finding: reorder points are not connected to actual supplier lead time. The brand is ordering when inventory feels low, not when the replenishment clock says it is time.</p>

          <p><strong>Typical impact:</strong> fewer stockouts, less cash trapped in slow movers, and better retail launch confidence.</p>

          <h2 id="finding-6">Finding 6: Retail Compliance Is Not Built Into Operations</h2>

          <p>Retail compliance cannot live in one person&apos;s inbox. If routing guide requirements, carton labels, EDI timing, case pack configuration, and ASN rules are not built into the operating process, the brand will keep paying the same penalties.</p>

          <p>The audit checks:</p>

          <ul>
            <li>Routing guides</li>
            <li>Item setup</li>
            <li>EDI process</li>
            <li>Chargeback history</li>
            <li>Carton label specs</li>
            <li>Pallet configuration</li>
            <li>PO review process</li>
            <li>3PL compliance capability</li>
          </ul>

          <p><strong>Typical impact:</strong> fewer preventable chargebacks and cleaner retailer scorecards.</p>

          <h2 id="after-audit">What to Do After the Audit</h2>

          <p>A useful audit ends with sequence. Not a 40-item wish list. The right order is usually:</p>

          <ol>
            <li>Fix data visibility first</li>
            <li>Fix cost leaks with fast payback</li>
            <li>Remove single-point-of-failure risks</li>
            <li>Stabilize inventory planning</li>
            <li>Build the retail compliance process</li>
            <li>Decide what requires outside management</li>
          </ol>

          <p>The audit should tell the founder what to fix now, what to monitor, and what to stop worrying about. That last part matters. Not every problem deserves attention this quarter.</p>

          <h2 id="30-day-plan">The 30-Day Action Plan After an Audit</h2>

          <p>The first 30 days after an audit should be practical. Not &ldquo;transform operations.&rdquo; Fix the issues that unlock the next operating layer.</p>

          <p><strong>Week 1: Build the scorecard.</strong> Put each finding into one of three categories: urgent, important, monitor. Urgent means it is already costing money or blocking growth. Important means it will matter in the next 90 days. Monitor means the risk exists, but not yet.</p>

          <p><strong>Week 2: Fix the visibility problem.</strong> If landed cost, inventory, or supplier lead time data is missing, fix that before renegotiating anything. Better decisions require better visibility.</p>

          <p><strong>Week 3: Attack one cost leak.</strong> DIM weight, finish stacking, supplier fragmentation, freight terms, or excess packaging material. Pick the highest-confidence lever and prove progress.</p>

          <p><strong>Week 4: Remove one operational risk.</strong> Qualify one backup supplier, repair one retail compliance process, or build one reorder trigger. Risk reduction compounds when it becomes a habit.</p>

          <p>The goal is momentum. One clear operating improvement per week beats a 40-line roadmap nobody owns.</p>

          <h2 id="what-not-to-do">What Not to Do With Audit Findings</h2>

          <p>Do not turn every finding into a project. That is how audits die. If a freight leak is costing money now, fix it. If a supplier risk could stop production, qualify a backup. If an ERP issue is irritating but not blocking growth, leave it alone for the quarter.</p>

          <p>The best audits create focus. They do not create a new layer of internal noise.</p>

          <h2 id="faq" className="b-faq-h">FAQ</h2>

          <h3>What is a supply chain audit for a CPG brand?</h3>
          <p>A supply chain audit reviews landed cost, suppliers, packaging, freight, inventory, 3PL performance, and retail compliance to find the constraints blocking growth.</p>

          <h3>How long does a supply chain audit take?</h3>
          <p>Most focused audits take two to four weeks if the brand can provide supplier, freight, inventory, and sales data quickly.</p>

          <h3>What is the first thing a supply chain audit should review?</h3>
          <p>Landed cost by SKU. If the brand does not know true landed cost, margin, pricing, retail readiness, and inventory planning are all built on weak data.</p>

          <h3>Does a supply chain audit always lead to cost savings?</h3>
          <p>Not always. Sometimes the highest-value finding is availability, supplier risk, or launch readiness. Cost savings matter most when they support growth.</p>

          <h3>Who should run a supply chain audit?</h3>
          <p>Someone who understands sourcing, packaging, freight, inventory, fulfillment, and retail compliance. Looking at one area in isolation misses the way the system breaks.</p>

        </div>
      </div>

      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[
            { q: 'What is a supply chain audit for a CPG brand?', a: 'A supply chain audit reviews landed cost, suppliers, packaging, freight, inventory, 3PL performance, and retail compliance to find the constraints blocking growth.' },
            { q: 'How long does a supply chain audit take?', a: 'Most focused audits take two to four weeks if the brand can provide supplier, freight, inventory, and sales data quickly.' },
            { q: 'What is the first thing a supply chain audit should review?', a: 'Landed cost by SKU. If the brand does not know true landed cost, margin, pricing, retail readiness, and inventory planning are all built on weak data.' },
            { q: 'Does a supply chain audit always lead to cost savings?', a: 'Not always. Sometimes the highest-value finding is availability, supplier risk, or launch readiness. Cost savings matter most when they support growth.' },
            { q: 'Who should run a supply chain audit?', a: 'Someone who understands sourcing, packaging, freight, inventory, fulfillment, and retail compliance. Looking at one area in isolation misses the way the system breaks.' }
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-band-inner">
          <h2>Where Is Your Supply Chain<br /><em>Leaking Growth?</em></h2>
          <p>Book a 30-minute call. We&apos;ll review your supply chain and find the constraints blocking your next stage.</p>
          <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
