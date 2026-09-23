import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Retail Inventory Planning: Building the 90-Day Forecast Before Your First PO",
  "description": "A practical retail inventory planning guide for CPG brands: pipeline fill, safety stock, reorder triggers, production lead times, and 90-day forecasting.",
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
  "mainEntityOfPage": "https://www.logicagencyinc.com/blog/retail-inventory-planning-90-day",
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Logic Agency", "item": "https://www.logicagencyinc.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.logicagencyinc.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Retail Inventory Planning: Building the 90-Day Forecast Before Your First PO", "item": "https://www.logicagencyinc.com/blog/retail-inventory-planning-90-day" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is retail inventory planning for a CPG brand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retail inventory planning is the process of forecasting initial pipeline fill, safety stock, reorder triggers, and production lead time before the first retail PO ships."
      }
    },
    {
      "@type": "Question",
      "name": "Why does DTC inventory planning not work for retail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DTC demand is daily and direct. Retail demand arrives in larger blocks, with longer replenishment cycles, retailer systems, and less room to recover from a late reorder."
      }
    },
    {
      "@type": "Question",
      "name": "How much safety stock should a CPG brand carry for a first retail launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most brands should plan 2-6 weeks of safety stock depending on production geography, supplier reliability, launch seasonality, and retailer expectations."
      }
    },
    {
      "@type": "Question",
      "name": "When should a brand place the second production order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The second order should be placed when projected inventory reaches lead time demand plus safety stock. Waiting for perfect sell-through data often means ordering too late."
      }
    },
    {
      "@type": "Question",
      "name": "Why do brands stock out after a successful first PO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They often plan the launch order but not the replenishment cycle. The stockout usually appears in months four through six when the reorder was triggered too late."
      }
    }
  ]
};

export const metadata = {
  title: 'Retail Inventory Planning for CPG Brands | Logic Agency',
  description: 'A practical retail inventory planning guide for CPG brands: pipeline fill, safety stock, reorder triggers, production lead times, and 90-day forecasting.',
  keywords: 'retail inventory planning CPG, retail inventory forecast, first retail PO inventory planning, CPG inventory planning, safety stock retail launch, reorder point calculation CPG',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/blog/retail-inventory-planning-90-day',
  },
  openGraph: {
    title: 'Retail Inventory Planning: Building the 90-Day Forecast Before Your First PO',
    description: 'A practical retail inventory planning guide for CPG brands: pipeline fill, safety stock, reorder triggers, production lead times, and 90-day forecasting.',
    url: 'https://www.logicagencyinc.com/blog/retail-inventory-planning-90-day',
    type: 'article',
    publishedTime: '2026-06-17',
    authors: ['Jordan Harper'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retail Inventory Planning: Building the 90-Day Forecast Before Your First PO',
    description: 'A practical retail inventory planning guide for CPG brands: pipeline fill, safety stock, reorder triggers, production lead times, and 90-day forecasting.',
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
          <span className="b-tag">Retail Operations</span>
          <h1>Retail Inventory Planning: Building the 90-Day Forecast Before Your First PO</h1>
          <p className="b-lede">Retail inventory planning for CPG brands means building a 90-day model before the first PO ships: pipeline fill, safety stock, reorder trigger, production lead time, and sell-through assumptions. DTC inventory planning does not translate because retail demand arrives in larger blocks, with longer payment terms and less room for recovery. Month one can look fine. Months four through six are where weak planning shows up.</p>
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
        <img src="/images/port-sourcing.jpg" alt="CPG brand building a 90-day retail inventory plan before the first purchase order" className="b-feat-img" />
      </div>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>Retail inventory planning starts before the first PO, not after sell-through data arrives.</li>
              <li>The first forecast needs pipeline fill, safety stock, reorder trigger, and production lead time.</li>
              <li>Most brands stock out in months four through six because the reorder clock starts too late.</li>
              <li>DTC demand smooths across days; retail demand lands in blocks by door, PO, and replenishment cycle.</li>
              <li>The model should be simple enough to run weekly and specific enough to trigger action.</li>
            </ul>
          </div>

          <h2 id="dtc-breaks">Why DTC Inventory Planning Breaks in Retail</h2>

          <p>DTC inventory planning usually grows from daily order history. A founder watches sales velocity, seasonality, and reorder lead time. The model may be simple, but the demand signal is direct.</p>

          <p>Retail changes the shape of demand. Instead of 100 orders per day, the brand gets a PO for thousands of units. Instead of replenishment happening when customers buy, replenishment depends on retailer systems, buyer cadence, store-level sell-through, and vendor compliance.</p>

          <p>Retail compresses demand into blocks. That is why DTC brands can ship the first PO and still stock out later. The first shipment was planned. The replenishment cycle was not.</p>

          <h2 id="90-day-model">The 90-Day Retail Inventory Model</h2>

          <p>The first retail forecast needs four numbers.</p>

          <h3>1. Pipeline Fill</h3>

          <p>Pipeline fill is the inventory required to stock the initial retail system.</p>

          <p>Formula: <strong>Initial pipeline fill = door count &times; units per door &times; launch allocation factor</strong></p>

          <p>Example: 300 doors &times; 12 units per door &times; 1.2 launch allocation factor = 4,320 units.</p>

          <p>The launch allocation factor accounts for display fill, damaged units, DC holdback, and initial variance. For most first retail launches, 1.1&ndash;1.3 is a practical planning range.</p>

          <p>Do not plan to the exact PO quantity if the retailer expects replenishment quickly. Plan to the system.</p>

          <h3>2. Safety Stock</h3>

          <p>Safety stock protects against demand variance and supplier lead time variance.</p>

          <p>Simple formula: <strong>Safety stock = average weekly retail demand &times; buffer weeks</strong></p>

          <p>If the first 90-day plan expects 1,000 units per week and the brand needs four weeks of buffer: 1,000 &times; 4 = 4,000 units of safety stock.</p>

          <p>The buffer should match the risk:</p>

          <ul>
            <li>2 weeks for stable supply and domestic replenishment</li>
            <li>4&ndash;6 weeks for international production</li>
            <li>6&ndash;8 weeks for seasonal or promotional launches</li>
          </ul>

          <p>Safety stock is not excess inventory. It is insurance against a broken replenishment clock.</p>

          <h3>3. Reorder Trigger</h3>

          <p>The reorder trigger tells the team when to place the next production order.</p>

          <p>Formula: <strong>Reorder trigger = lead time demand + safety stock</strong></p>

          <p>If demand is 1,000 units per week, production lead time is 12 weeks, and safety stock is 4,000 units: 12,000 + 4,000 = 16,000 units. That means the reorder must be placed when projected inventory drops to 16,000 units.</p>

          <p>Not when the warehouse feels low. Not when the buyer asks. When the math says the clock has started.</p>

          <h3>4. Production Lead Time</h3>

          <p>Lead time is not just production. It includes:</p>

          <ul>
            <li>PO creation</li>
            <li>Supplier confirmation</li>
            <li>Materials procurement</li>
            <li>Production</li>
            <li>QC</li>
            <li>Freight</li>
            <li>Customs</li>
            <li>Receiving</li>
            <li>Available-to-ship conversion</li>
          </ul>

          <p>If the supplier says production is eight weeks and freight is four weeks, the planning model should not use eight weeks. It should use the full replenishment cycle. For imported packaging or product, 12&ndash;16 weeks is a more realistic planning window. For domestic replenishment, 4&ndash;8 weeks may be possible.</p>

          <h2 id="three-formulas">The Three Formulas Every First Retail Forecast Needs</h2>

          <p>The model can be simple. It cannot be vague.</p>

          <h3>Formula 1: Initial Buy Coverage</h3>

          <p><strong>Initial buy coverage = initial PO quantity / expected weekly sell-through</strong></p>

          <p>If the first PO is 12,000 units and the expected weekly sell-through is 1,000 units, the initial buy covers 12 weeks. That sounds safe until the replenishment lead time is 14 weeks. The model is already short before the product ships.</p>

          <h3>Formula 2: Replenishment Gap</h3>

          <p><strong>Replenishment gap = replenishment lead time &ndash; initial buy coverage</strong></p>

          <p>If replenishment lead time is 14 weeks and initial buy coverage is 12 weeks, the gap is two weeks. That means the brand needs either more initial inventory, faster replenishment, or a second order placed before sell-through is proven.</p>

          <p>This is the uncomfortable part of retail planning. You often need to make the second inventory decision before the first 30 days of sales tell the full story.</p>

          <h3>Formula 3: Cash Commitment</h3>

          <p><strong>Inventory cash commitment = units ordered &times; landed cost per unit</strong></p>

          <p>A retail launch is not just an inventory decision. It is a cash decision. If the brand orders 20,000 units at $6 landed cost, the cash commitment is $120,000 before payment terms, deductions, or replenishment risk. That number needs to be visible before the buyer meeting turns into a PO.</p>

          <h2 id="stockouts">Why Stockouts Hit in Months Four Through Six</h2>

          <p>The first month is often fine because the launch PO was planned. The brand had time. The buyer waited. The initial order had attention.</p>

          <p>The stockout appears later because replenishment was not triggered early enough.</p>

          <p>Common failure pattern:</p>

          <ol>
            <li>Initial PO ships.</li>
            <li>Sell-through looks strong.</li>
            <li>The team waits for more data.</li>
            <li>Reorder is placed after confidence arrives.</li>
            <li>Production lead time is 12 weeks.</li>
            <li>Inventory runs out in week 14.</li>
          </ol>

          <p>The brand did not misread demand. It misunderstood the clock.</p>

          <p>Retail replenishment planning has to begin before demand is fully proven. That feels uncomfortable. It is also unavoidable when lead times are longer than the sell-through learning cycle.</p>

          <h2 id="demand-beats-plan">What to Do When Retail Demand Beats the Plan</h2>

          <p>Strong sell-through is not always good news operationally. If demand beats the plan and the brand has no second order queued, the result is a stockout. The buyer sees lost sales. The retailer may reduce confidence in the brand&apos;s ability to support the account. The founder sees growth and stress at the same time.</p>

          <p>The response should be sequenced:</p>

          <ol>
            <li><strong>Check available-to-ship inventory.</strong> Not inventory on order. Not inventory in production. What can ship now?</li>
            <li><strong>Check packaging availability.</strong> Product without packaging is not sellable inventory.</li>
            <li><strong>Confirm supplier capacity.</strong> Can the next run be pulled forward without creating quality risk?</li>
            <li><strong>Model expedited freight.</strong> Air freight may protect shelf availability, but it should be tied to specific revenue at risk.</li>
            <li><strong>Communicate internally before communicating externally.</strong> Sales, ops, finance, and the retailer account owner need one version of the plan.</li>
          </ol>

          <p>Do not celebrate sell-through until replenishment is secured. Retail rewards availability.</p>

          <h2 id="weekly-review">The Weekly Review Cadence</h2>

          <p>A 90-day inventory plan should be reviewed weekly. The weekly review should answer five questions:</p>

          <ol>
            <li>What is current sell-through by SKU?</li>
            <li>What inventory is available at the 3PL?</li>
            <li>What inventory is in retailer DCs or stores?</li>
            <li>What production is already committed?</li>
            <li>What reorder decision needs to be made this week?</li>
          </ol>

          <p>The review should not become a 20-tab spreadsheet exercise. It should produce a decision. Order, hold, expedite, reallocate, or reduce. That is the work.</p>

          <p>The meeting should have one owner. Sales can bring sell-through. Finance can bring cash constraints. Operations can bring inventory and lead time. But one person needs to decide whether the plan changed.</p>

          <p>Otherwise the meeting becomes reporting theater. Retail inventory planning is not reporting. It is decision-making.</p>

          <h2 id="by-stage">Retail Inventory Planning by Revenue Stage</h2>

          <h3>$1M&ndash;$3M: Build the First Model</h3>

          <p>At this stage, a spreadsheet can work. The model needs clean demand, lead time, safety stock, and reorder logic. It does not need enterprise software. What matters: one source of truth.</p>

          <h3>$3M&ndash;$8M: Add Weekly Discipline</h3>

          <p>At this stage, the brand needs a weekly review rhythm. SKU count is increasing. Retail interest is growing. Inventory decisions start affecting cash. What matters: reorder triggers and lead time discipline.</p>

          <h3>$8M&ndash;$15M: Add System Support</h3>

          <p>At this stage, the spreadsheet starts breaking. The brand likely needs forecasting support, 3PL reporting, and stronger inventory visibility. What matters: integrated demand, inventory, and supplier data.</p>

          <h3>$15M+: Build the Operating System</h3>

          <p>At this stage, inventory planning is no longer a founder task. It needs ownership, reporting, and weekly accountability. What matters: process before software, then software to support the process.</p>

          <h2 id="cash-side">The Cash Side of Retail Inventory Planning</h2>

          <p>Inventory planning is also cash planning. DTC brands get paid close to the customer transaction. Retail brands wait. Payment terms can run 30, 60, or 90 days depending on the account and structure. That means the brand may need to fund the first production run, the pipeline fill, the safety stock, and the second order before the first retail cash comes back.</p>

          <p>This is why the 90-day forecast needs finance in the room. The question is not only &ldquo;how many units do we need?&rdquo; It is &ldquo;how much cash is tied up before replenishment proves itself?&rdquo;</p>

          <p>If the answer is uncomfortable, solve it before the PO arrives. Negotiate payment terms, stage production, reduce SKU count, or adjust launch allocation. Do not discover the cash gap after the warehouse is empty.</p>

          <h2 id="three-cases">What Not to Forecast</h2>

          <p>Do not forecast every scenario equally. Build three cases:</p>

          <ul>
            <li><strong>Base case:</strong> what you actually expect</li>
            <li><strong>Upside case:</strong> what happens if sell-through beats plan</li>
            <li><strong>Constraint case:</strong> what happens if replenishment arrives late</li>
          </ul>

          <p>The constraint case matters most. It tells you where the brand breaks first: cash, production capacity, packaging availability, or warehouse throughput. That is the point of the forecast. Not prediction. Preparation.</p>

          <h2 id="faq" className="b-faq-h">FAQ</h2>

          <h3>What is retail inventory planning for a CPG brand?</h3>
          <p>Retail inventory planning is the process of forecasting initial pipeline fill, safety stock, reorder triggers, and production lead time before the first retail PO ships.</p>

          <h3>Why does DTC inventory planning not work for retail?</h3>
          <p>DTC demand is daily and direct. Retail demand arrives in larger blocks, with longer replenishment cycles, retailer systems, and less room to recover from a late reorder.</p>

          <h3>How much safety stock should a CPG brand carry for a first retail launch?</h3>
          <p>Most brands should plan 2&ndash;6 weeks of safety stock depending on production geography, supplier reliability, launch seasonality, and retailer expectations.</p>

          <h3>When should a brand place the second production order?</h3>
          <p>The second order should be placed when projected inventory reaches lead time demand plus safety stock. Waiting for perfect sell-through data often means ordering too late.</p>

          <h3>Why do brands stock out after a successful first PO?</h3>
          <p>They often plan the launch order but not the replenishment cycle. The stockout usually appears in months four through six when the reorder was triggered too late.</p>

        </div>
      </div>

      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[
            { q: 'What is retail inventory planning for a CPG brand?', a: 'Retail inventory planning is the process of forecasting initial pipeline fill, safety stock, reorder triggers, and production lead time before the first retail PO ships.' },
            { q: 'Why does DTC inventory planning not work for retail?', a: 'DTC demand is daily and direct. Retail demand arrives in larger blocks, with longer replenishment cycles, retailer systems, and less room to recover from a late reorder.' },
            { q: 'How much safety stock should a CPG brand carry for a first retail launch?', a: 'Most brands should plan 2-6 weeks of safety stock depending on production geography, supplier reliability, launch seasonality, and retailer expectations.' },
            { q: 'When should a brand place the second production order?', a: 'The second order should be placed when projected inventory reaches lead time demand plus safety stock. Waiting for perfect sell-through data often means ordering too late.' },
            { q: 'Why do brands stock out after a successful first PO?', a: 'They often plan the launch order but not the replenishment cycle. The stockout usually appears in months four through six when the reorder was triggered too late.' }
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-band-inner">
          <h2>Want to Pressure-Test<br /><em>Your Forecast?</em></h2>
          <p>Book a 30-minute call. We&apos;ll review your retail inventory plan before the first PO ships.</p>
          <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
