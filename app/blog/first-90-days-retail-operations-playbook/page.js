import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The First 90 Days in Retail: An Operations Playbook",
  "description": "The first 90 days in retail decide whether a brand earns a reorder. A week-by-week playbook for compliance, shipping, sell-through, and replenishment.",
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
  "mainEntityOfPage": "https://www.logicagencyinc.com/blog/first-90-days-retail-operations-playbook",
  "datePublished": "2026-06-16",
  "dateModified": "2026-06-16"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Logic Agency", "item": "https://www.logicagencyinc.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.logicagencyinc.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "The First 90 Days in Retail: An Operations Playbook", "item": "https://www.logicagencyinc.com/blog/first-90-days-retail-operations-playbook" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should a brand do before Day 1 in retail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before Day 1, confirm EDI, item setup, packaging compliance, routing guide requirements, 3PL readiness, inventory, and first-shipment documentation."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most important retail launch metrics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Track fill rate, on-time delivery, chargebacks as a percent of revenue, sell-through rate, and weeks of supply from the first shipment."
      }
    },
    {
      "@type": "Question",
      "name": "When should a brand plan the reorder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start reorder planning before the first shipment lands. If production lead time is 10-16 weeks, waiting for the retailer's reorder can create a stockout."
      }
    },
    {
      "@type": "Question",
      "name": "How much should brands budget for chargebacks in the first 90 days?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plan an estimated 2-5% deduction reserve for first-year retail revenue. Better systems can reduce that number, but assuming zero is not realistic."
      }
    },
    {
      "@type": "Question",
      "name": "What is the biggest first-90-days mistake?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The biggest mistake is treating the first PO as the goal. The real goal is a clean shipment, clean receiving, clean sell-through, and a credible reorder plan."
      }
    },
    {
      "@type": "Question",
      "name": "Can a DTC 3PL handle retail shipments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes. Verify EDI capability, routing guide experience, pallet labeling, case pack handling, and existing retailer relationships before trusting a DTC 3PL with retail."
      }
    }
  ]
};

export const metadata = {
  title: 'First 90 Days Retail Operations Playbook | Logic Agency',
  description: 'The first 90 days in retail decide whether a brand earns a reorder. A week-by-week playbook for compliance, shipping, sell-through, and replenishment.',
  keywords: 'first 90 days retail operations, retail launch operations checklist, scaling DTC to retail, retail operations planning consumer brands, first retail PO operations',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/blog/first-90-days-retail-operations-playbook',
  },
  openGraph: {
    title: 'The First 90 Days in Retail: An Operations Playbook',
    description: 'The first 90 days in retail decide whether a brand earns a reorder. A week-by-week playbook for compliance, shipping, sell-through, and replenishment.',
    url: 'https://www.logicagencyinc.com/blog/first-90-days-retail-operations-playbook',
    type: 'article',
    publishedTime: '2026-06-16',
    authors: ['Jordan Harper'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The First 90 Days in Retail: An Operations Playbook',
    description: 'The first 90 days in retail decide whether a brand earns a reorder. A week-by-week playbook for compliance, shipping, sell-through, and replenishment.',
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
          <h1>The First 90 Days in Retail: An Operations Playbook</h1>
          <p className="b-lede">The first 90 days in retail determine whether a consumer product brand earns a reorder or creates operational noise. The work is not just selling through; it is compliance setup, first shipment execution, chargeback monitoring, inventory positioning, replenishment planning, and fixing the system before the second PO.</p>
          <div className="b-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Jun 2026</span>
            <span>13 min read</span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="b-feat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/og-first-90-days-in-retail.jpg" alt="Retail operations playbook for the first 90 days after a brand enters retail" className="b-feat-img" />
      </div>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>The first 90 days start before Day 1. Compliance, EDI, packaging, inventory, and 3PL readiness need to be built before the first shipment leaves.</li>
              <li>Week 1&ndash;2 is about first-shipment control: ASN accuracy, case packs, routing guides, pallet labels, and delivery appointments.</li>
              <li>Month 2 is where the brand learns whether the model is working: sell-through, deductions, inventory position, retailer feedback, and customer response.</li>
              <li>Month 3 is reorder planning. If the product sells but the brand cannot replenish, the first retail win becomes a missed opportunity.</li>
              <li>Track five metrics from day one: fill rate, on-time delivery, chargebacks, sell-through, and weeks of supply.</li>
            </ul>
          </div>

          <p>The first 90 days in retail determine whether a consumer product brand earns a reorder or creates operational noise. The work is not just selling through; it is compliance setup, first shipment execution, chargeback monitoring, inventory positioning, replenishment planning, and fixing the system before the second PO.</p>

          <p>The buyer said yes. Good. Now the operating model has to prove the brand belongs on shelf.</p>

          <h2 id="before-day-1">Before Day 1: Finish the Retail Readiness Work</h2>

          <p>The first 90 days in retail do not begin when the product hits the shelf. They begin when the PO is issued.</p>

          <p>Before Day 1, the brand should have:</p>

          <ul>
            <li>EDI trading partner setup complete</li>
            <li>GS1 UPCs verified</li>
            <li>Item data loaded in the retailer portal</li>
            <li>Case pack configuration confirmed</li>
            <li>Carton and pallet labels tested</li>
            <li>Routing guide reviewed</li>
            <li>3PL aligned on retailer requirements</li>
            <li>Insurance and vendor documents submitted</li>
            <li>Inventory staged for the first PO</li>
            <li>Reorder production plan drafted</li>
          </ul>

          <p>If those items are not complete, the first 90 days become cleanup.</p>

          <p>DTC brands often underestimate this because DTC is forgiving. Retail is not. Retailers do not want explanations. They want the shipment to arrive correctly, on time, with the right data attached.</p>

          <p>The other pre-Day-1 requirement is ownership. Someone has to own the entire retail operating rhythm. Not just the buyer relationship. Not just the warehouse. Not just finance. One owner needs to see the full chain from PO to payment.</p>

          <p>That owner should know:</p>

          <ul>
            <li>What date the retailer expects the shipment</li>
            <li>Which system sends the ASN</li>
            <li>Which person confirms label scans</li>
            <li>Which warehouse contact owns the appointment</li>
            <li>Which finance contact reviews deductions</li>
            <li>Which report shows sell-through</li>
            <li>Which supplier starts reorder production if velocity is high</li>
          </ul>

          <p>If those answers live across five people with no single owner, the first 90 days will feel like a series of surprises.</p>

          <h2 id="week-1-2">Week 1&ndash;2: First Shipment Prep</h2>

          <p>The first shipment sets the tone. It tells the retailer whether the brand can execute.</p>

          <h3>Confirm the Shipment Data</h3>

          <p>Start with the PO. Confirm:</p>

          <ul>
            <li>SKU numbers</li>
            <li>UPCs</li>
            <li>Unit quantities</li>
            <li>Case pack quantities</li>
            <li>Inner pack requirements</li>
            <li>Ship window</li>
            <li>Must-arrive-by date</li>
            <li>Ship-to DC</li>
            <li>Routing instructions</li>
            <li>Carrier requirements</li>
          </ul>

          <p>Every downstream document should match this data. If the PO says 12 units per case and the warehouse builds 8, the error starts here.</p>

          <h3>Run the Packaging and Label Check</h3>

          <p>Before cartons leave the warehouse:</p>

          <ul>
            <li>Scan UPCs.</li>
            <li>Scan carton labels.</li>
            <li>Confirm GS1-128 format if required.</li>
            <li>Confirm label placement.</li>
            <li>Confirm case dimensions and weight.</li>
            <li>Confirm pallet labels.</li>
            <li>Confirm pallet height.</li>
          </ul>

          <p>Packaging that works in DTC may still fail retail. Carton orientation, barcode placement, case pack, and pallet build matter.</p>

          <h3>Lock the ASN Workflow</h3>

          <p>The EDI 856 Advance Ship Notice needs to transmit on time and match the physical shipment. For many retailers, this is due within hours of pickup. Some require tighter windows.</p>

          <p>Before pickup:</p>

          <ul>
            <li>Confirm who triggers the ASN.</li>
            <li>Confirm what event triggers it.</li>
            <li>Confirm what system sends it.</li>
            <li>Confirm who verifies it was accepted.</li>
          </ul>

          <p>Manual ASN workflows are risky. If the ASN depends on one person remembering to log into a portal, the operation is exposed.</p>

          <h2 id="week-3-4">Week 3&ndash;4: Initial Fulfillment and Receiving</h2>

          <p>Once the shipment moves, the work shifts from preparation to monitoring. The team should track:</p>

          <ul>
            <li>Carrier pickup confirmation</li>
            <li>ASN transmission and acceptance</li>
            <li>Delivery appointment confirmation</li>
            <li>Proof of delivery</li>
            <li>Retailer receiving status</li>
            <li>Any deductions, holds, or exception notices</li>
          </ul>

          <p>Do not wait for the payment remittance to learn whether the shipment had problems. By then, the deduction may already be applied.</p>

          <h3>Watch the Retailer Portal</h3>

          <p>Retailer portals often show receiving exceptions, deductions, vendor messages, and item setup issues. Someone needs to check them on a schedule. For the first month, daily checks are reasonable. Retail systems are noisy, and new vendors get flagged quickly when something is wrong.</p>

          <h3>Document Every Exception</h3>

          <p>If a shipment arrives late, log why. If a chargeback appears, log the reason code. If a buyer flags packaging, log the detail. If the DC says the carton labels are wrong, save the message.</p>

          <p>The goal is not blame. The goal is pattern recognition. One error can be a miss. Three errors in the same category are a system.</p>

          <h2 id="month-2">Month 2: Monitor Sell-Through, Deductions, and Inventory</h2>

          <p>Month 2 is when the brand starts to see whether retail is working. This is where many teams drift. The launch happened. The shipment landed. Everyone moves on.</p>

          <p>Do not move on.</p>

          <h3>Track Sell-Through Weekly</h3>

          <p>Retail success is not sell-in. It is sell-through. Track weekly:</p>

          <ul>
            <li>Units sold</li>
            <li>Sell-through rate by SKU</li>
            <li>Store-level performance if available</li>
            <li>Out-of-stock risk</li>
            <li>Slow-moving SKUs</li>
            <li>Promotion impact</li>
            <li>Review and customer feedback patterns</li>
          </ul>

          <p>The retailer cares about velocity. If units do not move, the buyer will not care that the brand had strong DTC sales.</p>

          <h3>Monitor Chargebacks and Deductions</h3>

          <p>Chargebacks often appear after the shipment has landed. Build a weekly deduction review. Track:</p>

          <ul>
            <li>Deduction amount</li>
            <li>Retailer</li>
            <li>Reason code</li>
            <li>Root cause</li>
            <li>Dispute status</li>
            <li>Preventive fix</li>
          </ul>

          <p>Budget an estimated 2&ndash;5% of first-year retail revenue for deductions until the operating model proves it can run cleaner. If deductions exceed that range, something upstream is broken.</p>

          <h3>Reforecast Inventory</h3>

          <p>Do not wait until Month 3 to ask whether inventory is enough. By Week 6&ndash;8, the brand should compare actual sell-through to the original forecast. If the product is moving faster than expected and production lead time is 10&ndash;16 weeks, the reorder decision is already late.</p>

          <p>Retail brands forecast forward. DTC brands often forecast backward. That shift is one of the hardest parts of the transition.</p>

          <h3>Build the Weekly Retail Operating Meeting</h3>

          <p>By Month 2, the brand needs a weekly retail operating meeting. Keep it short. Keep it numerical. The agenda:</p>

          <ol>
            <li>PO status and open shipments</li>
            <li>Sell-through by SKU</li>
            <li>Weeks of supply</li>
            <li>Chargebacks and deductions</li>
            <li>Retailer feedback</li>
            <li>Inventory risk</li>
            <li>Reorder actions</li>
          </ol>

          <p>This meeting should not become a brand marketing discussion. The goal is to keep the account operating cleanly. Retail accounts fail quietly when nobody looks at the numbers until the buyer does. The weekly meeting prevents that.</p>

          <h2 id="month-3">Month 3: Reorder Planning and Optimization</h2>

          <p>Month 3 is where the first retail cycle becomes either a learning system or a one-time event. The goal is simple: use the first 60 days of data to make the second PO cleaner than the first.</p>

          <h3>Build the Reorder Model</h3>

          <p>The reorder model should include:</p>

          <ul>
            <li>Current inventory on hand</li>
            <li>Retailer sell-through</li>
            <li>Weeks of supply</li>
            <li>Production lead time</li>
            <li>Freight lead time</li>
            <li>Safety stock target</li>
            <li>Cash required for next production run</li>
            <li>Expected reorder timing</li>
          </ul>

          <p>If the product is selling well, production may need to start before the retailer issues the reorder. That feels risky. It is sometimes necessary. The alternative is selling through, going out of stock, and losing the shelf momentum you just paid to create.</p>

          <h3>Fix the First-Shipment Issues</h3>

          <p>By Month 3, the brand should know what broke. Was ASN timing clean? Did the carton labels scan? Did case packs match the PO? Did the 3PL hit the appointment? Did the retailer deduct anything? Did the buyer complain about packaging? Did the margin model hold?</p>

          <p>Fix those issues before the next shipment. Do not normalize the first shipment&apos;s mistakes.</p>

          <h3>Prepare the Buyer Update</h3>

          <p>A useful buyer update is not a brand story. It is an operating update. Include:</p>

          <ul>
            <li>Sell-through by SKU</li>
            <li>Inventory position</li>
            <li>Reorder recommendation</li>
            <li>Operational fixes made since first shipment</li>
            <li>Promotion or display learnings</li>
            <li>Any requested support from the retailer</li>
          </ul>

          <p>This shows the buyer that the brand is not only watching sales. It is managing the account.</p>

          <h2 id="5-metrics">The 5 Metrics to Track From Day 1</h2>

          <h3>1. Fill Rate</h3>

          <p>Fill rate measures how much of the PO you shipped complete. If the PO was 10,000 units and you shipped 9,500, fill rate is 95%. Target: an estimated 95&ndash;98%+ depending on retailer and category.</p>

          <h3>2. On-Time Delivery</h3>

          <p>Retailers care whether shipments arrive in the required window. Early can be wrong. Late can be wrong. Target: 95%+ on-time delivery once the account stabilizes.</p>

          <h3>3. Chargebacks as a Percent of Wholesale Revenue</h3>

          <p>This tells you how much operational noise is eating margin. Target: an estimated 2&ndash;5% reserve in Year 1, with a goal of moving toward 1% as systems mature.</p>

          <h3>4. Sell-Through Rate</h3>

          <p>Sell-through shows whether product is moving at shelf. Track by SKU and by account. The important part is trend and comparison against forecast.</p>

          <h3>5. Weeks of Supply</h3>

          <p>Weeks of supply tells you how long inventory will last at the current sell-through rate. Target depends on production lead time. If lead time is 12 weeks and weeks of supply is 8, the reorder is already late.</p>

          <h2 id="what-goes-wrong">What Goes Wrong Most Often</h2>

          <p>The same issues show up in first retail launches again and again.</p>

          <ul>
            <li><strong>The brand underestimates timeline.</strong> EDI, item setup, packaging changes, and 3PL readiness take longer than expected. A 30-day retail launch window becomes a 90-day scramble.</li>
            <li><strong>The first PO uses the wrong margin model.</strong> The team models wholesale price but forgets chargebacks, freight, co-op, payment terms, and packaging changes.</li>
            <li><strong>The warehouse is DTC-only.</strong> The 3PL is good at ecommerce fulfillment but weak on retail routing guides, pallet builds, ASN timing, and carton labels.</li>
            <li><strong>The reorder comes before the inventory plan.</strong> The product sells, but production was not started early enough. Retail momentum stalls because the brand cannot replenish.</li>
            <li><strong>Nobody owns the retail operating rhythm.</strong> The buyer owns the relationship. The warehouse owns shipments. Finance owns deductions. Marketing owns launch. But nobody owns the full operating system. That is the gap we see most often.</li>
          </ul>

          <h2 id="day-90-review">The Day-90 Review</h2>

          <p>At Day 90, run a clean review. Not a celebration. Not a post-mortem. A decision meeting. The review should answer:</p>

          <ul>
            <li>Did the first shipment land cleanly?</li>
            <li>What did chargebacks cost?</li>
            <li>Which SKUs sold above forecast?</li>
            <li>Which SKUs sold below forecast?</li>
            <li>How many weeks of supply remain?</li>
            <li>Is the reorder already in motion?</li>
            <li>Did the 3PL perform?</li>
            <li>Did packaging create any receiving or shelf issues?</li>
            <li>Did the margin model hold after deductions and freight?</li>
            <li>What needs to change before the next PO?</li>
          </ul>

          <p>This is where retail becomes a system. The brand takes real operating data and uses it to improve the next shipment.</p>

          <p>The biggest mistake at Day 90 is only looking at sales. Sales matter, but they are only one part of the account. A product can sell and still create operational losses. A product can start slow and still be worth supporting if the margin, replenishment, and buyer feedback are strong.</p>

          <p>The Day-90 review should produce a short action list: fix these three issues before the next PO, start this reorder by this date, change this packaging spec, update this forecast, dispute these deductions, and send this buyer update.</p>

          <p>Retail improves when every cycle produces a cleaner next cycle. That is how a first PO becomes a channel, not just a launch event.</p>

          <h2 id="faq" className="b-faq-h">FAQ</h2>

          <h3>What should a brand do before Day 1 in retail?</h3>

          <p>Before Day 1, confirm EDI, item setup, packaging compliance, routing guide requirements, 3PL readiness, inventory, and first-shipment documentation.</p>

          <h3>What are the most important retail launch metrics?</h3>

          <p>Track fill rate, on-time delivery, chargebacks as a percent of revenue, sell-through rate, and weeks of supply from the first shipment.</p>

          <h3>When should a brand plan the reorder?</h3>

          <p>Start reorder planning before the first shipment lands. If production lead time is 10&ndash;16 weeks, waiting for the retailer&apos;s reorder can create a stockout.</p>

          <h3>How much should brands budget for chargebacks in the first 90 days?</h3>

          <p>Plan an estimated 2&ndash;5% deduction reserve for first-year retail revenue. Better systems can reduce that number, but assuming zero is not realistic.</p>

          <h3>What is the biggest first-90-days mistake?</h3>

          <p>The biggest mistake is treating the first PO as the goal. The real goal is a clean shipment, clean receiving, clean sell-through, and a credible reorder plan.</p>

          <h3>Can a DTC 3PL handle retail shipments?</h3>

          <p>Sometimes. Verify EDI capability, routing guide experience, pallet labeling, case pack handling, and existing retailer relationships before trusting a DTC 3PL with retail.</p>

        </div>
      </div>

      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[
            { q: 'What should a brand do before Day 1 in retail?', a: 'Before Day 1, confirm EDI, item setup, packaging compliance, routing guide requirements, 3PL readiness, inventory, and first-shipment documentation.' },
            { q: 'What are the most important retail launch metrics?', a: 'Track fill rate, on-time delivery, chargebacks as a percent of revenue, sell-through rate, and weeks of supply from the first shipment.' },
            { q: 'When should a brand plan the reorder?', a: 'Start reorder planning before the first shipment lands. If production lead time is 10-16 weeks, waiting for the retailer\'s reorder can create a stockout.' },
            { q: 'How much should brands budget for chargebacks in the first 90 days?', a: 'Plan an estimated 2-5% deduction reserve for first-year retail revenue. Better systems can reduce that number, but assuming zero is not realistic.' },
            { q: 'What is the biggest first-90-days mistake?', a: 'The biggest mistake is treating the first PO as the goal. The real goal is a clean shipment, clean receiving, clean sell-through, and a credible reorder plan.' },
            { q: 'Can a DTC 3PL handle retail shipments?', a: 'Sometimes. Verify EDI capability, routing guide experience, pallet labeling, case pack handling, and existing retailer relationships before trusting a DTC 3PL with retail.' }
          ]} />
        </div>
      </section>

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
