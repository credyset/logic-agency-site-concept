import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import EmailButton from '@/components/EmailButton';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The CPG Brand's First 90 Days in Retail",
  "description": "A week-by-week account of what actually happens after a retailer says yes — packaging, compliance, inventory, logistics, and the operational reality that nobody warns first-time retail brands about.",
  "author": {
    "@type": "Organization",
    "name": "Logic Agency Inc.",
    "url": "https://www.logicagencyinc.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Logic Agency Inc."
  },
  "mainEntityOfPage": "https://www.logicagencyinc.com/guides/first-90-days-in-retail",
  "datePublished": "2025-03-01",
  "dateModified": "2026-05-26"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to launch a CPG product in retail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From a retailer saying yes to product on shelf typically takes 3-6 months. The first 30 days are vendor onboarding and packaging preparation. Days 30-60 are production, quality control, and logistics setup. Days 60-90 are shipping, receiving at the retailer\u2019s distribution center, and store allocation. Most brands underestimate this timeline because they focus on the buyer meeting and don\u2019t plan for the operational build that follows."
      }
    },
    {
      "@type": "Question",
      "name": "What is the biggest surprise for brands launching in retail for the first time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cash outlay. Brands are used to DTC economics where customers pay at checkout. Retail requires investing heavily in inventory, packaging, freight, and compliance 3-5 months before the retailer pays you \u2014 and retailers pay on Net 30-90 terms. A $200,000 initial retail order might require $80-120,000 in upfront investment that you won\u2019t see revenue on for 5-8 months. The second biggest surprise is chargebacks \u2014 financial penalties for packaging, labeling, or shipping errors that can range from $200 to $40,000 per violation."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do first after a retailer agrees to carry my product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Immediately start three workstreams in parallel: vendor onboarding (EDI setup, insurance, compliance paperwork), packaging assessment (does your current packaging meet the retailer\u2019s case pack, pallet, barcode, and labeling specs), and financial modeling (can your margin sustain wholesale pricing, trade spend, and chargebacks). Do not wait until the official PO arrives to begin \u2014 the timeline starts the moment the buyer says yes, and most brands lose 2-4 critical weeks by waiting."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most common mistakes brands make in their first retail launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The five most common mistakes are: waiting for the official PO before starting preparation (costs you 2-4 weeks), not reading the routing guide in detail (leads to chargebacks on the first shipment), underestimating inventory investment (causes cash flow crises), not having a replenishment plan before the first order ships (leads to stockouts within 60 days), and treating retail packaging as a minor modification of DTC packaging (it\u2019s a fundamentally different system requiring case packs, pallet configurations, and compliance specs)."
      }
    },
    {
      "@type": "Question",
      "name": "How much inventory do I need for my first retail order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your first order (pipeline fill) stocks the retailer\u2019s distribution center and fills shelves across all locations. Calculate: units per store \u00d7 number of stores + 20% DC buffer. For example, 500 stores \u00d7 6 units per store = 3,000 on shelf + 600 buffer = 3,600 units. But you also need to immediately plan your second order \u2014 production lead times mean you should place your reorder within 2-3 weeks of your first shipment to avoid a stockout gap."
      }
    }
  ]
};

export const metadata = {
  title: 'First 90 Days in Retail | Logic Agency',
  description: 'The first 90 days in retail require vendor onboarding, packaging checks, inventory planning, routing compliance, and reorder timing.',
  keywords: 'how to launch in retail, first retail order, CPG retail launch plan, DTC to retail transition, first 90 days retail, retail launch timeline, getting into retail stores, retail launch checklist CPG, selling to retailers for the first time',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/guides/first-90-days-in-retail',
  },
  openGraph: {
    title: 'Your First 90 Days in Retail',
    description: 'A week-by-week account of what actually happens after a retailer says yes — the chaos, the surprises, and the operational reality.',
    url: 'https://www.logicagencyinc.com/guides/first-90-days-in-retail',
    images: [{ url: 'https://www.logicagencyinc.com/images/og-first-90-days-in-retail.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your First 90 Days in Retail',
    description: 'A week-by-week account of what actually happens after a retailer says yes — the chaos, the surprises, and the operational reality.',
    images: ['https://www.logicagencyinc.com/images/og-first-90-days-in-retail.jpg'],
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
      "item": "https://www.logicagencyinc.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guides",
      "item": "https://www.logicagencyinc.com/guides"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "The CPG Brand's First 90 Days in Retail",
      "item": "https://www.logicagencyinc.com/guides/first-90-days-in-retail"
    }
  ]
};
export default function First90DaysInRetail() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav variant="guide" />

      {/* HERO */}
      <section className="a-hero gl">
        <div className="a-hero-inner">
          <div className="breadcrumb"><a href="/">Logic Agency</a> &nbsp;/&nbsp; <a href="/guides">Guides</a></div>
          <h1>Your First 90 Days <span className="o">in Retail</span></h1>
          <p className="a-lede">The first 90 days in retail are the operating window between buyer approval and stable replenishment: vendor onboarding, packaging compliance, inventory build, routing setup, first shipment, and reorder planning. The brands that win the reorder start this work before the official PO arrives.</p>
          <div className="a-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Updated May 2026</span>
            <span>20 min read</span>
            <span>Guides</span>
          </div>
        </div>
      </section>

      {/* TIMELINE BAR */}
      <div className="article gl" style={{ paddingBottom: 0 }}>
        <div className="article-inner">
          <div className="tl-bar">
            <div className="tl-seg s1">Weeks 1-3 &middot; Panic</div>
            <div className="tl-seg s2">Weeks 4-6 &middot; Build</div>
            <div className="tl-seg s3">Weeks 7-10 &middot; Grind</div>
            <div className="tl-seg s4">Weeks 11-13 &middot; Ship</div>
          </div>
        </div>
      </div>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>The first 90 days are about operational readiness, not celebration.</li>
              <li>Vendor onboarding, EDI, packaging, inventory, and routing must move in parallel.</li>
              <li>Retail cash flow breaks when brands fund inventory before modeling payment terms.</li>
              <li>The reorder plan should be built before the first shipment leaves the warehouse.</li>
            </ul>
          </div>

          <h2>Before We Start: The Feeling Nobody Prepares You For</h2>
          <p>You spent months &mdash; maybe years &mdash; trying to get a retail buyer to say yes. You pitched, you sampled, you followed up, you waited. And now they said yes.</p>
          <p>The first feeling is euphoria. You tell your team, your investors, your family. You post on LinkedIn. You&apos;re going to be in stores.</p>
          <p>The second feeling, usually about 48 hours later, is terror. Because now you have to actually deliver. And the distance between &ldquo;a buyer said yes&rdquo; and &ldquo;product on shelf&rdquo; is a chasm filled with packaging specs, compliance documents, production timelines, freight logistics, and financial commitments that most DTC brands have never navigated.</p>
          <p>This guide is the map through that chasm.</p>

          {/* WEEKS 1-3 */}
          <h2>Weeks 1-3: The Scramble</h2>

          <div className="week">
            <div className="week-header">
              <span className="week-badge crisis">Week 1</span>
              <span className="week-title">The Reality Check</span>
            </div>
            <p>The buyer sends over the vendor onboarding packet. It&apos;s 40-80 pages. It contains insurance requirements, EDI specifications, routing guide details, labeling standards, packaging specs, and compliance acknowledgments you&apos;ve never seen before. Your stomach drops.</p>
            <p>You also discover that your current packaging &mdash; the beautiful DTC box you&apos;re so proud of &mdash; doesn&apos;t work for retail. It&apos;s the wrong size for standard case packs. The barcode is in the wrong place. There&apos;s no case-level UPC. The structural integrity won&apos;t survive palletization and distribution center handling. The shelf-facing orientation doesn&apos;t make sense for a retail planogram.</p>
            <p><strong>This is normal.</strong> Every brand goes through this. The ones that survive the next 90 days are the ones that start moving immediately instead of spending two weeks processing the shock.</p>

            <div className="tasks">
              <div className="task">
                <div className="task-status urgent">Start immediately</div>
                <h4>Read the routing guide</h4>
                <p>Every word. Every spec. The routing guide is the retailer&apos;s bible and violations are punished with chargebacks. Share it with everyone who touches your supply chain.</p>
              </div>
              <div className="task">
                <div className="task-status urgent">Start immediately</div>
                <h4>Audit your packaging</h4>
                <p>Does it meet case pack specs? Pallet configs? Barcode requirements? Labeling standards? Be honest about what needs to change.</p>
              </div>
              <div className="task">
                <div className="task-status parallel">Start in parallel</div>
                <h4>Begin vendor onboarding</h4>
                <p>Insurance certificates, W-9, EDI setup, compliance forms. Start the paperwork now &mdash; it takes longer than you think.</p>
              </div>
              <div className="task">
                <div className="task-status parallel">Start in parallel</div>
                <h4>Model the economics</h4>
                <p>Wholesale price minus COGS, freight, trade spend, chargebacks. Does the margin actually work? Find out now, not after you ship.</p>
              </div>
            </div>

            <div className="emotion">
              <div className="emotion-label">How you feel right now</div>
              <p>&ldquo;I thought getting the buyer to say yes was the hard part. I was wrong. I&apos;m staring at a routing guide that&apos;s longer than my business plan and realizing I don&apos;t know how any of this works.&rdquo;</p>
            </div>
          </div>

          <div className="week">
            <div className="week-header">
              <span className="week-badge crisis">Week 2</span>
              <span className="week-title">The Packaging Reckoning</span>
            </div>
            <p>You&apos;ve read the routing guide. You&apos;ve audited your packaging. And now you&apos;re confronting a hard truth: your DTC packaging and your retail packaging are fundamentally different things.</p>
            <p>DTC packaging delivers an experience. It ships one unit from warehouse to doorstep. You control every touchpoint. Retail packaging delivers a system. It ships in bulk from factory to distribution center to store. It gets palletized, loaded, unloaded, stacked, broken down, re-stacked, and placed on a shelf by someone who handles 500 products a day. It needs to be structurally durable, efficiently packable, and compliant with specifications that didn&apos;t exist in your DTC world.</p>
            <p>You have two choices: try to adapt your existing packaging (faster but compromised) or design a retail-specific packaging system from scratch (better long-term but takes more time). Most brands with a tight deadline end up somewhere in between &mdash; keeping the primary packaging design but reengineering the structure, adding case packs, and building pallet configurations.</p>
            <div className="callout">
              <p><strong>The decision that saves you months later:</strong> Whatever you do now, document everything. Dielines, specs, BOMs, case pack configurations, pallet patterns. If your packaging knowledge lives in email threads and supplier conversations, you don&apos;t have a system &mdash; you have a dependency. Build the documentation now when you&apos;re already doing the work.</p>
            </div>
          </div>

          <div className="week">
            <div className="week-header">
              <span className="week-badge crisis">Week 3</span>
              <span className="week-title">The Money Conversation</span>
            </div>
            <p>By week three you have enough information to build a real financial model. And for most DTC brands, this is the most uncomfortable week of the entire 90 days.</p>

            <div className="cash-box">
              <h3>The Cash Reality: A Typical First Retail Order</h3>
              <div className="cash-row">
                <span className="cash-label">Pipeline fill: 500 stores &times; 6 units = 3,600 units</span>
                <span className="cash-val">Order size</span>
              </div>
              <div className="cash-row">
                <span className="cash-label">Product COGS (3,600 &times; $8.50)</span>
                <span className="cash-val neg">&minus;$30,600</span>
              </div>
              <div className="cash-row">
                <span className="cash-label">Retail packaging (new case packs, labels, pallets)</span>
                <span className="cash-val neg">&minus;$8,200</span>
              </div>
              <div className="cash-row">
                <span className="cash-label">Freight to retailer DC</span>
                <span className="cash-val neg">&minus;$4,800</span>
              </div>
              <div className="cash-row">
                <span className="cash-label">EDI setup + compliance costs</span>
                <span className="cash-val neg">&minus;$2,400</span>
              </div>
              <div className="cash-row">
                <span className="cash-label">Slotting / trade spend</span>
                <span className="cash-val neg">&minus;$5,000</span>
              </div>
              <div className="cash-total">
                <span className="cash-label">Cash out before first sale</span>
                <span className="cash-val">$51,000</span>
              </div>
              <p className="cash-note">Your wholesale revenue on this order might be $64,800 (3,600 &times; $18). But you won&apos;t see that money for 60-90 days after delivery. And you&apos;ll need to place your second production order before the first payment arrives. Welcome to retail cash flow.</p>
            </div>

            <p>This is where some brands pump the brakes. And honestly? That&apos;s sometimes the right call. If the margin doesn&apos;t work at wholesale pricing, or if the cash outlay would put the business at risk, it&apos;s better to renegotiate terms, start with a smaller distribution, or delay the launch until the economics are solid. A bad first retail experience is worse than waiting six more months.</p>
            <p>But if the math works &mdash; even if it&apos;s tight &mdash; week three is when you commit. Everything after this point is execution.</p>
          </div>

          {/* WEEKS 4-6 */}
          <h2>Weeks 4-6: The Build</h2>

          <div className="week">
            <div className="week-header">
              <span className="week-badge">Week 4</span>
              <span className="week-title">Packaging Goes Into Production</span>
            </div>
            <p>You&apos;ve finalized your retail packaging specs. Samples have been approved. The production order is placed. For domestic packaging, you&apos;re looking at 2-4 weeks. For international, 6-8 weeks &mdash; which means if you&apos;re sourcing overseas, you probably needed to start this in week one. (This is the most common timeline mistake brands make.)</p>
            <p>Simultaneously, your vendor onboarding should be nearly complete. EDI is being tested. Insurance certificates are filed. Your 3PL has received and reviewed the routing guide.</p>
            <p>At this point, you should be running four workstreams in parallel: packaging production, product manufacturing (if separate from packaging), vendor onboarding completion, and inventory planning. If any one of these is sequential instead of parallel, you&apos;re behind.</p>
            <div className="callout real">
              <p><strong>From the field:</strong> We had a skincare brand that was running all four workstreams sequentially &mdash; &ldquo;let&apos;s finish packaging, then figure out production, then do onboarding.&rdquo; By the time they engaged us, they had six weeks to deliver and hadn&apos;t started production. We got them on shelf, but it required air freighting product at 4x the ocean freight cost. The margin on the first order was almost zero. The system we built afterward ensured it never happened again &mdash; but that first order was painful.</p>
            </div>
          </div>

          <div className="week">
            <div className="week-header">
              <span className="week-badge">Week 5</span>
              <span className="week-title">The Inventory Math</span>
            </div>
            <p>Your first order is in production. Now you need to answer the question that determines whether you&apos;re still on shelf in six months: <strong>when do you place your second order?</strong></p>
            <p>This isn&apos;t intuitive for DTC brands. In DTC, you reorder when inventory gets low. In retail, by the time inventory gets low, it&apos;s too late &mdash; your production lead time means the shelf will be empty for weeks before the reorder arrives. The retailer will notice. They may give your shelf space to someone else.</p>
            <p>You need to place your reorder before your first shipment even arrives at the retailer. That means committing cash to a second production run before you&apos;ve received a dollar from the first one.</p>
            <p>The math: estimate your weekly sell-through velocity (units per store per week &times; number of stores). Multiply by your total production and freight lead time in weeks. Add safety stock. That&apos;s how much inventory you need to have on hand or in production at all times. Set a reorder point that triggers the next production run with enough runway to avoid a gap.</p>
            <div className="callout warn">
              <p><strong>The stockout spiral is real.</strong> Brand runs out of stock in week 8. Retailer sees empty shelf. Retailer reduces facings (shelf space) at next planogram reset. Reduced facings mean lower velocity. Lower velocity makes the product look like a poor performer. Discontinuation follows. This entire spiral starts with one missed reorder. Plan it now &mdash; before your first shipment arrives.</p>
            </div>
          </div>

          <div className="week">
            <div className="week-header">
              <span className="week-badge">Week 6</span>
              <span className="week-title">Quality Control and the Details That Kill You</span>
            </div>
            <p>Packaging production is finishing. Before anything ships, inspect it. Not a spot check &mdash; a proper AQL inspection of the full run.</p>
            <p>Check barcode scannability. Not visually &mdash; with an actual scanner. A barcode that doesn&apos;t scan at the DC causes your entire shipment to be rejected or hit with a chargeback. Check case pack counts. Every case must have exactly the specified unit count. Check case labels. Check pallet weight. Check case dimensions against the routing guide.</p>
            <p>These details feel tedious. They are also the difference between a smooth first delivery and a $5,000 chargeback that eats your margin on the entire order.</p>
            <p>If you&apos;re sourcing internationally, this inspection happens at the factory before the goods ship. If domestically, it happens at your warehouse. Either way, someone competent needs to physically verify that what was produced matches what was specified. Trusting the supplier to self-inspect on your first retail order is a gamble with odds you don&apos;t want to take.</p>
          </div>

          {/* WEEKS 7-10 */}
          <h2>Weeks 7-10: The Grind</h2>

          <div className="week">
            <div className="week-header">
              <span className="week-badge grind">Weeks 7-8</span>
              <span className="week-title">Logistics &mdash; The Invisible Complexity</span>
            </div>
            <p>Product is produced. Packaging is done. QC is passed. Now you need to get it to the retailer&apos;s distribution center &mdash; on time, in the exact configuration they specified, with the correct documentation.</p>
            <p>If you&apos;re shipping domestically, this means palletizing to the routing guide&apos;s Ti &times; Hi configuration, stretch-wrapping and corner-boarding per spec, scheduling a delivery appointment at the DC (not just showing up &mdash; DCs have narrow receiving windows), transmitting an ASN (Advance Ship Notice) via EDI that exactly matches the physical shipment, and coordinating with your freight carrier on timing.</p>
            <p>If you&apos;re shipping internationally, add ocean freight booking (3-5 weeks), customs clearance, drayage from port to warehouse, deconsolidation, repalletizing to US retail specs, and then everything above.</p>
            <p>Every step has a potential failure point. Late delivery? Chargeback. Wrong pallet configuration? Chargeback. ASN doesn&apos;t match the shipment? Chargeback. Delivery outside the appointment window? You guessed it.</p>
            <div className="emotion">
              <div className="emotion-label">How you feel right now</div>
              <p>&ldquo;I used to think logistics was just shipping. Now I understand it&apos;s a chain of fifty things that all need to go right in sequence, and one mistake at any point can cost thousands of dollars. I have a new respect for people who do this for a living.&rdquo;</p>
            </div>
          </div>

          <div className="week">
            <div className="week-header">
              <span className="week-badge grind">Weeks 9-10</span>
              <span className="week-title">The Delivery Window</span>
            </div>
            <p>Your shipment is en route to the DC. The delivery appointment is scheduled. The ASN has been transmitted. Everything is on track.</p>
            <p>And then something goes sideways. The carrier misses the appointment. Or the DC is backed up and reschedules. Or a quality issue surfaces during receiving. Or the pallet label format is wrong and the DC can&apos;t process the inbound.</p>
            <p>This is the week where brands learn that retail logistics isn&apos;t just about moving boxes &mdash; it&apos;s about managing exceptions. Something will go wrong on your first shipment. The question isn&apos;t whether; it&apos;s how fast you can identify it, communicate it, and resolve it before it becomes a chargeback or a delay that pushes you past your delivery window.</p>
            <p><strong>Document everything.</strong> Take photos of pallets before they ship. Save the BOL (Bill of Lading) with the carrier&apos;s signature. Keep records of every communication with the DC. If a chargeback comes &mdash; and on a first shipment, there&apos;s a decent chance one will &mdash; you&apos;ll need this documentation to dispute it.</p>
          </div>

          {/* WEEKS 11-13 */}
          <h2>Weeks 11-13: On Shelf</h2>

          <div className="week">
            <div className="week-header">
              <span className="week-badge go">Week 11</span>
              <span className="week-title">The First Scan</span>
            </div>
            <p>Your product has been received at the DC. It&apos;s been allocated to stores. It&apos;s on a truck heading to retail locations. And then &mdash; somewhere in the country &mdash; someone picks up your product, brings it to the register, and it scans.</p>
            <p>The first sale. After months of preparation, tens of thousands of dollars in investment, and more operational complexity than you&apos;ve ever managed, your product is selling in a retail store.</p>
            <p>Take a moment. Then immediately shift your attention to what happens next.</p>
          </div>

          <div className="week">
            <div className="week-header">
              <span className="week-badge go">Weeks 12-13</span>
              <span className="week-title">The Reorder Race</span>
            </div>
            <p>Your first sell-through data starts coming in. If you have access to the retailer&apos;s portal, you can see weekly sales by store. If not, you&apos;re estimating based on your initial order and the time since store delivery.</p>
            <p>This data is the most important information you&apos;ve received since the buyer said yes. It tells you whether your sell-through assumptions were accurate, which stores are performing and which aren&apos;t, and when you&apos;ll need to ship your next order to avoid a stockout.</p>
            <p>If your second production run is already in progress (as it should be if you followed the week 5 plan), you&apos;re in good shape. You&apos;re monitoring velocity, adjusting forecasts, and managing the pipeline. If you haven&apos;t started your second order yet, you&apos;re now in emergency mode &mdash; every day of delay increases your stockout risk.</p>
            <p><strong>The first 90 days don&apos;t end on day 90.</strong> They transition into a continuous cycle of monitoring, reordering, optimizing, and managing the relationship with the retailer. The operational infrastructure you built in the first 90 days &mdash; the documentation, the supplier relationships, the forecasting model, the compliance processes &mdash; is now the system that either sustains your retail presence or lets it erode.</p>
          </div>

          {/* SURPRISES */}
          <h2>The Seven Things Nobody Warned You About</h2>
          <p>Every brand we&apos;ve guided through their first retail launch encounters at least three of these. Knowing they&apos;re coming doesn&apos;t eliminate the pain, but it does eliminate the panic.</p>

          <div className="surp-grid">
            <div className="surp">
              <h4>1. Chargebacks are relentless</h4>
              <p>You will receive chargebacks on your first shipment. Maybe for labeling. Maybe for pallet configuration. Maybe for ASN accuracy. Budget 3-5% of your first order&apos;s wholesale value for chargebacks and work to drive it to zero on subsequent shipments. Fight every one that&apos;s disputable &mdash; but know that some are learning costs.</p>
            </div>
            <div className="surp">
              <h4>2. The buyer goes quiet after saying yes</h4>
              <p>The buyer who was so responsive during the pitch process often becomes unreachable once the PO is issued. They have 200 other vendors and 50 other launches. You won&apos;t get hand-holding. You need to navigate onboarding, compliance, and delivery largely on your own &mdash; or with a partner who&apos;s done it before.</p>
            </div>
            <div className="surp">
              <h4>3. Your 3PL might not be retail-ready</h4>
              <p>The fulfillment partner that handles your DTC orders flawlessly may have no idea how to build a retail-compliant pallet, generate an ASN, or schedule a DC delivery appointment. Discover this in week one, not week eight. Ask them directly: &ldquo;Have you shipped to this retailer&apos;s DC before?&rdquo;</p>
            </div>
            <div className="surp">
              <h4>4. EDI is harder than it sounds</h4>
              <p>Electronic Data Interchange sounds straightforward &mdash; digital purchase orders and shipping confirmations. In practice, every retailer has different specs, testing requirements, and error handling. Allow 2-4 weeks for setup and testing through a provider like SPS Commerce. Don&apos;t assume it&apos;ll &ldquo;just work.&rdquo;</p>
            </div>
            <div className="surp">
              <h4>5. The second order matters more than the first</h4>
              <p>Your first order fills the pipeline. Your second order proves you can sustain the business. If there&apos;s a gap between your first order selling through and your second order arriving, you&apos;ve lost shelf momentum. The retailer evaluates you on continuity, not just the first impression.</p>
            </div>
            <div className="surp">
              <h4>6. Retail packaging costs more than you budgeted</h4>
              <p>Case pack boxes, pallet labels, retailer-specific labeling, structural upgrades for distribution handling, UPC registration &mdash; the costs that don&apos;t exist in DTC packaging. Budget 20-40% more than your current packaging cost per unit for the retail version.</p>
            </div>
            <div className="surp">
              <h4>7. You need help sooner than you think</h4>
              <p>Most brands try to manage their first retail launch internally. Most of those brands end up seeking help around week 3-4 when the scope of the operational challenge becomes clear. The brands that engage an experienced partner before the chaos starts have smoother launches, fewer chargebacks, and better margin on the first order.</p>
            </div>
          </div>

          {/* CLOSING */}
          <h2>The 90-Day Lesson</h2>
          <p>Your first 90 days in retail will teach you more about your business than the previous two years of DTC combined. You&apos;ll learn how your supply chain actually performs under pressure. You&apos;ll learn where your packaging was engineered well and where it was designed for aesthetics rather than function. You&apos;ll learn the true cost of your product &mdash; not just COGS, but landed, packaged, freighted, compliant, and on-shelf cost.</p>
          <p>The brands that thrive in retail aren&apos;t the ones with the best product or the prettiest packaging. They&apos;re the ones that built the operational infrastructure to support the product once it&apos;s on shelf. Forecasting that prevents stockouts. Documentation that prevents chargebacks. Supplier relationships that prevent delays. Cash models that prevent surprises.</p>
          <p>That infrastructure can take months to build from scratch &mdash; or it can be in place from week one if you have the right partner.</p>
          <p>Either way, the 90-day clock starts the moment the buyer says yes. And it doesn&apos;t wait for you to be ready.</p>

        </div>
      </div>

      
      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[{ q: 'How long does it take to launch a CPG product in retail?', a: 'From a retailer saying yes to product on shelf typically takes 3-6 months. The first 30 days are vendor onboarding and packaging preparation. Days 30-60 are production, quality control, and logistics setup. Days 60-90 are shipping, receiving at the retailer\\u2019s distribution center, and store allocation. Most brands underestimate this timeline because they focus on the buyer meeting and don\\u2019t plan for the operational build that follows.' }, { q: 'What is the biggest surprise for brands launching in retail for the first time?', a: 'The cash outlay. Brands are used to DTC economics where customers pay at checkout. Retail requires investing heavily in inventory, packaging, freight, and compliance 3-5 months before the retailer pays you \\u2014 and retailers pay on Net 30-90 terms. A $200,000 initial retail order might require $80-120,000 in upfront investment that you won\\u2019t see revenue on for 5-8 months. The second biggest surprise is chargebacks \\u2014 financial penalties for packaging, labeling, or shipping errors that can range from $200 to $40,000 per violation.' }, { q: 'What should I do first after a retailer agrees to carry my product?', a: 'Immediately start three workstreams in parallel: vendor onboarding (EDI setup, insurance, compliance paperwork), packaging assessment (does your current packaging meet the retailer\\u2019s case pack, pallet, barcode, and labeling specs), and financial modeling (can your margin sustain wholesale pricing, trade spend, and chargebacks). Do not wait until the official PO arrives to begin \\u2014 the timeline starts the moment the buyer says yes, and most brands lose 2-4 critical weeks by waiting.' }, { q: 'What are the most common mistakes brands make in their first retail launch?', a: 'The five most common mistakes are: waiting for the official PO before starting preparation (costs you 2-4 weeks), not reading the routing guide in detail (leads to chargebacks on the first shipment), underestimating inventory investment (causes cash flow crises), not having a replenishment plan before the first order ships (leads to stockouts within 60 days), and treating retail packaging as a minor modification of DTC packaging (it\\u2019s a fundamentally different system requiring case packs, pallet configurations, and compliance specs).' }, { q: 'How much inventory do I need for my first retail order?', a: 'Your first order (pipeline fill) stocks the retailer\\u2019s distribution center and fills shelves across all locations. Calculate: units per store \\u00d7 number of stores + 20% DC buffer. For example, 500 stores \\u00d7 6 units per store = 3,000 on shelf + 600 buffer = 3,600 units. But you also need to immediately plan your second order \\u2014 production lead times mean you should place your reorder within 2-3 weeks of your first shipment to avoid a stockout gap.' }]} />
        </div>
      </section>
      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-inner">
          <h2>About to launch into retail <span className="o">and feeling the heat?</span></h2>
          <p>We&apos;ve guided brands through their first 90 days and through their fiftieth retail shipment. Whether you&apos;re staring at a routing guide for the first time or trying to fix an operation that&apos;s already in motion &mdash; tell us where you are.</p>
          <div className="cta-btns">
            <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Start a Conversation &rarr;</a>
            <a href="/#pricing" className="bt bw">See Plans &amp; Pricing</a>
          </div>
          <a href="/guides/retail-readiness-scorecard" className="cta-dl">Download the free 40-Point Readiness Scorecard &rarr;</a>
          <span className="cta-sub">Logic Agency Inc. &middot; Packaging, Supply Chain &amp; Operations on a Monthly Retainer</span>
        </div>
      </section>

      {/* RELATED */}
      <section className="related gl">
        <div className="related-inner">
          <h3>Go Deeper</h3>
          <div className="related-links">
            <a href="/guides/retail-readiness" className="related-link">
              <h4>The Retail Readiness Bible</h4>
              <p>The complete operational playbook with a 45-point checklist across three phases.</p>
            </a>
            <a href="/guides/retail-ready-packaging" className="related-link">
              <h4>Getting Your Packaging Retail-Ready</h4>
              <p>Case packs, pallet specs, barcodes, retailer compliance, and the timeline nobody talks about.</p>
            </a>
          </div>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
