import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Supply Chain Technology Stack for Scaling CPG Brands: What You Actually Need",
  "description": "The supply chain technology stack a $5-20M CPG brand actually needs — OMS, WMS, EDI, forecasting tools — with costs, timelines, and revenue-stage guidance.",
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
  "mainEntityOfPage": "https://www.logicagencyinc.com/blog/supply-chain-technology-stack",
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Logic Agency", "item": "https://www.logicagencyinc.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.logicagencyinc.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "The Supply Chain Technology Stack for Scaling CPG Brands: What You Actually Need", "item": "https://www.logicagencyinc.com/blog/supply-chain-technology-stack" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What supply chain software does a CPG brand need at $5M?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At $5M, a CPG brand typically needs an OMS if they're running two or more sales channels, an EDI provider if they have retail accounts, and a basic inventory forecasting tool. WMS and supplier portals are typically not needed until $8M+."
      }
    },
    {
      "@type": "Question",
      "name": "How much does supply chain software cost for a small brand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The five core systems — OMS, WMS, EDI, forecasting, supplier portal — run $1,000-$6,500/month combined at full deployment. A brand at $5M with retail accounts typically needs $500-$1,500/month covering EDI and OMS. Budget increases as volume and SKU complexity grow."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between OMS and WMS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An OMS manages orders — receiving them from sales channels and routing them to fulfillment. A WMS manages physical inventory — tracking where product is inside a warehouse, supporting pick/pack/ship operations. Most brands at $5-10M need an OMS; they need a WMS only if they manage their own warehouse or their 3PL lacks real-time inventory visibility."
      }
    },
    {
      "@type": "Question",
      "name": "When does a CPG brand need EDI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before the first retail PO with a major retailer. EDI setup takes 4-8 weeks, so it needs to be in place during retailer onboarding — not after the first purchase order arrives. Brands that wait too long miss ASN windows and generate chargebacks in the first 90 days."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best inventory forecasting software for a small CPG brand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inventory Planner and Reorder Point are the most common entry-level tools for $3-8M CPG brands. Both integrate directly with Shopify and most 3PLs, handle multi-channel demand, and cost $300-$600/month. For brands with higher SKU complexity or retail-specific forecasting needs, Streamline and Slim4 offer more depth."
      }
    },
    {
      "@type": "Question",
      "name": "What should a CPG brand have in place before hiring a VP of Operations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before bringing in a full-time operations executive, a brand should have: at least one active EDI relationship with a retail partner, an OMS handling multi-channel order routing, and a documented reorder process even if it's running on spreadsheets. Those systems should be working before the hire — otherwise the new executive spends their first 6 months on infrastructure instead of leverage."
      }
    }
  ]
};

export const metadata = {
  title: 'Supply Chain Tech Stack for CPG Brands: What You Need | Logic Agency',
  description: 'The supply chain technology stack a $5-20M CPG brand actually needs — OMS, WMS, EDI, forecasting tools — with costs, timelines, and revenue-stage guidance.',
  keywords: 'supply chain technology CPG brands, supply chain software for small brands, OMS for CPG brands, WMS for consumer brands, EDI provider small business, inventory forecasting software CPG, supply chain tools DTC to retail',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/blog/supply-chain-technology-stack',
  },
  openGraph: {
    title: 'The Supply Chain Technology Stack for Scaling CPG Brands: What You Actually Need',
    description: 'The supply chain technology stack a $5-20M CPG brand actually needs — OMS, WMS, EDI, forecasting tools — with costs, timelines, and revenue-stage guidance.',
    url: 'https://www.logicagencyinc.com/blog/supply-chain-technology-stack',
    type: 'article',
    publishedTime: '2026-06-17',
    authors: ['Jordan Harper'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Supply Chain Technology Stack for Scaling CPG Brands: What You Actually Need',
    description: 'The supply chain technology stack a $5-20M CPG brand actually needs — OMS, WMS, EDI, forecasting tools — with costs, timelines, and revenue-stage guidance.',
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
          <h1>The Supply Chain Technology Stack for Scaling CPG Brands: What You Actually Need</h1>
          <p className="b-lede">Supply chain technology for a scaling CPG brand is not about enterprise software or digital transformation. It is about five specific systems &mdash; OMS, WMS, EDI provider, forecasting tool, and supplier portal &mdash; each introduced at the right revenue stage. Get the sequence right and you build operational leverage. Get it wrong and you spend $80,000 on software that creates more manual work than it replaces.</p>
          <div className="b-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Jun 2026</span>
            <span>11 min read</span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="b-feat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/port-launch.jpg" alt="Supply chain technology stack for scaling CPG brands — OMS, WMS, EDI, forecasting" className="b-feat-img" />
      </div>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>Five core systems cover roughly 90% of what a $5&ndash;20M CPG brand needs: OMS, WMS, EDI provider, forecasting tool, supplier portal.</li>
              <li>Each system has a clear revenue trigger &mdash; introducing it before that trigger wastes money and management bandwidth.</li>
              <li>The right question is not &ldquo;what&apos;s the best software?&rdquo; but &ldquo;what problem am I actually solving right now?&rdquo;</li>
              <li>Over-building tech before volume justifies it is one of the most common scaling mistakes Logic Agency sees &mdash; and one of the easiest to avoid.</li>
              <li>A brand at $15M+ without these five systems running is operating on borrowed time; a brand at $3M with all five is spending money it doesn&apos;t have.</li>
            </ul>
          </div>

          <p>Most $5M brands run their supply chain from a spreadsheet and a WhatsApp group. Most $20M brands do too. The difference is that the $20M brands have stopped sleeping.</p>

          <h2 id="why-too-late">Why the Technology Question Comes Too Late</h2>

          <p>Most founders discover they need supply chain software the same way they discover they need a 3PL &mdash; when something breaks badly enough to make the cost of fixing it obvious.</p>

          <p>By that point, the decision is reactive instead of planned. A brand at $8M with a retailer requiring EDI is not choosing software thoughtfully &mdash; they&apos;re choosing whatever a sales rep at a trade show convinced them was the fastest path to compliance.</p>

          <p>The better frame: supply chain technology is infrastructure. You don&apos;t build infrastructure during a fire. You build it at the revenue stage before you need it, so it&apos;s working when volume demands it. That requires knowing which stage you&apos;re in, what it unlocks, and what you do not need yet.</p>

          <h2 id="five-systems">The Five Systems That Actually Matter</h2>

          <h3>1. Order Management System (OMS)</h3>

          <p><strong>What it does:</strong> An OMS receives orders from every sales channel &mdash; Shopify, Amazon, EDI purchase orders from retailers, wholesale platforms &mdash; and routes them to the right fulfillment destination. It also handles order status visibility, returns management, and customer communications.</p>

          <p><strong>Without it:</strong> Orders from three channels land in three places, get reconciled manually, and the brand has no single view of demand. This is manageable at $2M. It breaks at $7M.</p>

          <p><strong>When you need it:</strong> When you have two or more distinct sales channels generating more than an estimated 20% of revenue each.</p>

          <p><strong>What it costs:</strong> $300&ndash;$2,000/month depending on order volume and integrations. Shopify Plus includes basic OMS functionality. Dedicated OMS platforms (Linnworks, Brightpearl, Extensiv) run higher but offer better retail EDI handling.</p>

          <p><strong>Revenue trigger:</strong> $3M&ndash;$5M with multiple channels.</p>

          <h3>2. Warehouse Management System (WMS)</h3>

          <p><strong>What it does:</strong> A WMS manages physical inventory inside a fulfillment location &mdash; receiving, putaway, pick, pack, ship. It tracks lot numbers, expiration dates, exact bin locations, and supports wave picking for efficiency. It generates the real-time inventory counts that feed your OMS and forecasting tools.</p>

          <p><strong>Without it:</strong> Inventory accuracy is whatever your 3PL says it is, you find out about stockouts when the fulfillment report runs, and lot tracking is a spreadsheet maintained by whoever happened to be on shift.</p>

          <p><strong>When you need it:</strong> When you&apos;re working with a 3PL that can&apos;t give you real-time, SKU-level inventory visibility, or when you&apos;re managing your own warehouse at meaningful volume. If your 3PL uses a modern WMS and gives you API or portal access, you may not need to own one at all.</p>

          <p><strong>What it costs:</strong> If you&apos;re using a 3PL, this is typically baked into their platform. If you&apos;re operating your own warehouse, standalone WMS runs $500&ndash;$3,000/month depending on SKU count and volume.</p>

          <p><strong>Revenue trigger:</strong> $5M+ if managing your own warehouse. For 3PL-based operations, audit your 3PL&apos;s WMS capability instead.</p>

          <h3>3. EDI Provider</h3>

          <p><strong>What it does:</strong> EDI (Electronic Data Interchange) is the language retail buyers speak. Every major retailer &mdash; Target, Walmart, Whole Foods, CVS, Ulta, Costco &mdash; requires EDI for purchase orders, order acknowledgments, advance ship notices (ASNs), and invoices. An EDI provider translates between your internal systems and the retailer&apos;s proprietary EDI format.</p>

          <p><strong>Without it:</strong> You cannot enter major retail. This is not a competitive advantage &mdash; it is a baseline requirement. Brands that try to manage retailer EDI manually miss ASN windows and generate chargebacks within the first 60 days.</p>

          <p><strong>When you need it:</strong> Before your first major retail PO. The setup window &mdash; trading partner testing, compliance validation &mdash; takes 4&ndash;8 weeks. If you wait until the PO arrives, you are already late.</p>

          <p><strong>What it costs:</strong> Cloud-based EDI providers run $150&ndash;$600/month depending on trading partner count and transaction volume. SPS Commerce, TrueCommerce, and DiCentral cover most retail requirements.</p>

          <p><strong>Revenue trigger:</strong> Any time you have a retail PO in negotiation or expected within 90 days.</p>

          <h3>4. Inventory Forecasting Tool</h3>

          <p><strong>What it does:</strong> A forecasting tool takes historical sales data, current inventory levels, lead times, and seasonality to produce a replenishment plan &mdash; when to reorder, how much to order, and where to hold safety stock. The goal is eliminating the oscillation most brands live in: stockouts on best-sellers, overstock on slow-movers.</p>

          <p><strong>Without it:</strong> Replenishment decisions are gut feel, adjusted by whoever is loudest in the last meeting. At $3M you can survive this. At $8M with retail accounts and 10&ndash;14 week overseas production lead times, you cannot.</p>

          <p><strong>When you need it:</strong> When your production lead times exceed 8 weeks or when you&apos;re managing retail fill rates and a stockout generates a missed sell-through report.</p>

          <p><strong>What it costs:</strong> $300&ndash;$2,500/month depending on SKU complexity and channel count. Inventory Planner, Reorder Point, and Cin7 have built-in forecasting. For brands with 50+ SKUs and retail complexity, NetSuite or dedicated demand planning tools (Slim4, Streamline) offer more depth.</p>

          <p><strong>Revenue trigger:</strong> $5M&ndash;$8M, or whenever you first miss a retail reorder because your production plan was wrong.</p>

          <h3>5. Supplier Portal</h3>

          <p><strong>What it does:</strong> A supplier portal is a shared workspace between a brand and its vendors &mdash; purchase orders, production schedules, quality control documentation, sample approvals, and shipment tracking &mdash; in one place instead of buried in email chains.</p>

          <p><strong>Without it:</strong> Production visibility is whatever your supplier tells you on the weekly call, shipment status is a tracking number someone remembers to check, and quality documentation is a folder on someone&apos;s desktop.</p>

          <p><strong>When you need it:</strong> When you&apos;re managing more than 3&ndash;4 active suppliers and more than 6&ndash;8 SKUs in production simultaneously. Below that threshold, a shared Google Sheet and a disciplined email system works.</p>

          <p><strong>What it costs:</strong> $200&ndash;$1,500/month. Anvyl, SourceDay, and Intelex cover supplier relationship management at different complexity levels.</p>

          <p><strong>Revenue trigger:</strong> $5M+ with multiple supplier relationships, or any time you&apos;ve had a production miss that could have been caught with better visibility.</p>

          <h2 id="by-revenue-stage">What Brands Use at Each Revenue Stage</h2>

          <h3>$1M&ndash;$3M</h3>

          <p>What you need: Shopify (OMS), a reliable spreadsheet (forecasting), email and Slack (supplier management). That&apos;s it.</p>

          <p>EDI is only relevant if you have a retail PO. A WMS is only relevant if you&apos;re managing warehouse operations yourself. A forecasting tool at this stage costs more in configuration time than it saves. Most brands at this stage are over-tooled.</p>

          <h3>$3M&ndash;$8M</h3>

          <p>What you add: EDI provider (if retail accounts are in play), OMS (if two channels are material), and the beginning of a structured forecasting process.</p>

          <p>This is the stage where operational complexity starts to compound faster than headcount. A brand doing $6M across DTC, Amazon, and two retail accounts has four demand signals, three fulfillment destinations, and five supplier relationships to manage simultaneously. Software makes the complexity visible, which is the precondition for managing it.</p>

          <h3>$8M&ndash;$15M</h3>

          <p>What you add: a serious WMS (either through your 3PL or owned), a supplier portal, and a more robust forecasting tool if the spreadsheet is breaking under SKU count.</p>

          <p>At this stage, a brand typically has 15&ndash;30 SKUs, 5&ndash;10 supplier relationships, and retail accounts that require documented fill rates and compliance performance. The systems are not optional &mdash; they are the difference between being a reliable retail partner and getting decertified.</p>

          <h3>$15M+</h3>

          <p>All five systems should be in place. If they&apos;re not, the operational risk is not hypothetical &mdash; it&apos;s live. Every week without real-time inventory visibility, without EDI compliance monitoring, without a documented replenishment plan is a week closer to a stockout, a chargeback spike, or a retailer compliance violation that triggers a corrective action plan.</p>

          <h2 id="before-buying">What to Do Before Buying Software</h2>

          <p>The right sequence before any software purchase is: document the current process, identify where it breaks, decide whether the break is a process failure or a tooling failure, and only then evaluate software.</p>

          <p>Most operational failures at $5M&ndash;$10M are process failures wearing the costume of a tooling problem.</p>

          <p><strong>The inventory stockout that gets blamed on &ldquo;no forecasting software&rdquo;</strong> is usually a reorder trigger nobody owns and a lead time assumption nobody verified. A $300/month forecasting tool does not fix a process where nobody checks the reorder point.</p>

          <p><strong>The chargeback spike that gets blamed on &ldquo;no EDI system&rdquo;</strong> is usually an ASN submitted two hours late because nobody owns the ASN process. Software automates a process. If the process does not exist, the software runs nothing.</p>

          <p>Before evaluating any of the five systems above, a brand should be able to answer:</p>

          <ul>
            <li>Who owns reorder decisions, and what do they look at when making them?</li>
            <li>Who confirms that the ASN matches the physical shipment before submission?</li>
            <li>Who checks the routing guide before every carrier booking?</li>
            <li>Who resolves the exception when an order routes to the wrong fulfillment destination?</li>
          </ul>

          <p>If these questions produce a shrug or a finger-point, the constraint is process clarity &mdash; not software. Fix the process, then buy the tool that automates it.</p>

          <h2 id="over-building">The Over-Building Trap</h2>

          <p>The most common technology mistake at $5M&ndash;$10M is not under-building &mdash; it&apos;s over-building.</p>

          <p>A founder reads an article about ERP systems, talks to a sales rep at a trade show, and decides the company needs NetSuite at $8M in revenue. The implementation takes 9 months, costs $150,000 in fees and internal time, and produces a system that the operations team works around because it doesn&apos;t match their actual workflow.</p>

          <p>The warning signs of over-building:</p>

          <ul>
            <li>You&apos;re evaluating software before you&apos;ve documented your current process.</li>
            <li>The vendor is showing you a demo of features you don&apos;t need yet.</li>
            <li>The implementation timeline is longer than your next product launch cycle.</li>
            <li>The software requires a dedicated administrator to maintain.</li>
          </ul>

          <p>The rule: buy software for the problem you have today, not the problem you&apos;re afraid of having in three years.</p>

          <p>The specific signs you&apos;re ready for each tool:</p>

          <ul>
            <li><strong>OMS:</strong> You&apos;ve missed an order because it went to the wrong fulfillment destination. Or you spent more than two hours this week reconciling order status across channels.</li>
            <li><strong>WMS:</strong> Your 3PL gave you inventory counts that were wrong when you audited them. Or you discovered a stockout on a retailer&apos;s shelf before your 3PL told you.</li>
            <li><strong>EDI:</strong> You have a retail PO or a buyer conversation that will become one in the next 90 days.</li>
            <li><strong>Forecasting tool:</strong> You&apos;ve been out of stock on a top-3 SKU at least twice in the past 6 months, or you&apos;re currently holding more than 180 days of supply on more than an estimated 20% of your SKUs.</li>
            <li><strong>Supplier portal:</strong> You&apos;ve had a supplier delivery miss that you found out about from the purchase order due date, not from a proactive update.</li>
          </ul>

          <h2 id="how-systems-connect">How the Five Systems Connect</h2>

          <p>The five systems are not independent &mdash; they form a data loop.</p>

          <p>The <strong>OMS</strong> receives orders and sends them to the <strong>WMS</strong> for fulfillment. The WMS updates inventory counts in real time. The <strong>forecasting tool</strong> reads those counts along with sales velocity from the OMS to build a replenishment plan. That replenishment plan generates purchase orders that flow into the <strong>supplier portal</strong> for the factory to acknowledge and track. When the finished goods ship, the <strong>EDI system</strong> sends the advance ship notice to the retailer before the truck arrives.</p>

          <p>When one system is missing or breaks, the loop breaks. A brand with an OMS but no WMS visibility is making replenishment decisions based on what their 3PL says &mdash; not what&apos;s actually in the bin. The systems work because they share data. Which is also why implementing them piecemeal, in the wrong order, or with weak integrations produces spreadsheet-level outcomes despite six-figure software spend.</p>

          <h2 id="epicutis-example">The Epicutis Example</h2>

          <p>For Epicutis, Logic Agency built a 90-day rolling inventory plan before adding any new software, then used that plan to identify exactly which system gaps required tooling. Result: 15% cost savings maintained through a 3-to-21+ SKU expansion without an ERP.</p>

          <p>The lesson is not that Epicutis avoided technology. It is that the technology decisions came from a diagnosed need, not from a vendor demo or a fear of eventually needing the capability.</p>

          <h2 id="faq" className="b-faq-h">FAQ</h2>

          <h3>What supply chain software does a CPG brand need at $5M?</h3>
          <p>At $5M, a CPG brand typically needs an OMS if they&apos;re running two or more sales channels, an EDI provider if they have retail accounts, and a basic inventory forecasting tool. WMS and supplier portals are typically not needed until $8M+.</p>

          <h3>How much does supply chain software cost for a small brand?</h3>
          <p>The five core systems &mdash; OMS, WMS, EDI, forecasting, supplier portal &mdash; run $1,000&ndash;$6,500/month combined at full deployment. A brand at $5M with retail accounts typically needs $500&ndash;$1,500/month covering EDI and OMS. Budget increases as volume and SKU complexity grow.</p>

          <h3>What is the difference between OMS and WMS?</h3>
          <p>An OMS manages orders &mdash; receiving them from sales channels and routing them to fulfillment. A WMS manages physical inventory &mdash; tracking where product is inside a warehouse, supporting pick/pack/ship operations. Most brands at $5&ndash;10M need an OMS; they need a WMS only if they manage their own warehouse or their 3PL lacks real-time inventory visibility.</p>

          <h3>When does a CPG brand need EDI?</h3>
          <p>Before the first retail PO with a major retailer. EDI setup takes 4&ndash;8 weeks, so it needs to be in place during retailer onboarding &mdash; not after the first purchase order arrives. Brands that wait too long miss ASN windows and generate chargebacks in the first 90 days.</p>

          <h3>What is the best inventory forecasting software for a small CPG brand?</h3>
          <p>Inventory Planner and Reorder Point are the most common entry-level tools for $3&ndash;8M CPG brands. Both integrate directly with Shopify and most 3PLs, handle multi-channel demand, and cost $300&ndash;$600/month. For brands with higher SKU complexity or retail-specific forecasting needs, Streamline and Slim4 offer more depth.</p>

        </div>
      </div>

      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[
            { q: 'What supply chain software does a CPG brand need at $5M?', a: 'At $5M, a CPG brand typically needs an OMS if they\'re running two or more sales channels, an EDI provider if they have retail accounts, and a basic inventory forecasting tool. WMS and supplier portals are typically not needed until $8M+.' },
            { q: 'How much does supply chain software cost for a small brand?', a: 'The five core systems — OMS, WMS, EDI, forecasting, supplier portal — run $1,000-$6,500/month combined at full deployment. A brand at $5M with retail accounts typically needs $500-$1,500/month covering EDI and OMS.' },
            { q: 'What is the difference between OMS and WMS?', a: 'An OMS manages orders — receiving them from sales channels and routing them to fulfillment. A WMS manages physical inventory — tracking where product is inside a warehouse. Most brands at $5-10M need an OMS; they need a WMS only if they manage their own warehouse or their 3PL lacks real-time inventory visibility.' },
            { q: 'When does a CPG brand need EDI?', a: 'Before the first retail PO with a major retailer. EDI setup takes 4-8 weeks, so it needs to be in place during retailer onboarding — not after the first purchase order arrives. Brands that wait too long miss ASN windows and generate chargebacks in the first 90 days.' },
            { q: 'What is the best inventory forecasting software for a small CPG brand?', a: 'Inventory Planner and Reorder Point are the most common entry-level tools for $3-8M CPG brands. Both integrate directly with Shopify and most 3PLs, handle multi-channel demand, and cost $300-$600/month.' },
            { q: 'What should a CPG brand have in place before hiring a VP of Operations?', a: 'Before bringing in a full-time operations executive, a brand should have: at least one active EDI relationship with a retail partner, an OMS handling multi-channel order routing, and a documented reorder process. Those systems should be working before the hire — otherwise the new executive spends their first 6 months on infrastructure instead of leverage.' }
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-band-inner">
          <h2>Not Sure Which Systems<br /><em>You Actually Need?</em></h2>
          <p>Book a 30-minute call. We&apos;ll audit your current tech stack and tell you exactly what&apos;s missing, what&apos;s redundant, and what to add first &mdash; no sales pitch.</p>
          <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
