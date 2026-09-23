import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Retail Routing Guide Compliance: What Every Brand Gets Wrong",
  "description": "A practical guide to retail routing guide compliance: ASN timing, carrier rules, pallet specs, case packs, delivery appointments, and chargeback prevention.",
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
  "mainEntityOfPage": "https://www.logicagencyinc.com/blog/routing-guide-compliance-retail",
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Logic Agency", "item": "https://www.logicagencyinc.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.logicagencyinc.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Retail Routing Guide Compliance: What Every Brand Gets Wrong", "item": "https://www.logicagencyinc.com/blog/routing-guide-compliance-retail" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is retail routing guide compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retail routing guide compliance is the process of shipping product according to a retailer's exact rules for carrier selection, ASN timing, labels, pallet configuration, delivery appointment, and documentation."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most common routing guide violations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common violations are late ASN, wrong carrier, missed delivery appointment, incorrect case pack, and carton or pallet label errors."
      }
    },
    {
      "@type": "Question",
      "name": "When should a brand review the routing guide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Before production starts. The routing guide affects case pack, carton size, pallet configuration, label placement, and data requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Who should own routing guide compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One named operations owner should own it for each PO. The 3PL can execute tasks, but the brand needs one person accountable for final signoff."
      }
    },
    {
      "@type": "Question",
      "name": "Can routing guide chargebacks be disputed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes. Disputes work when the brand has proof: photos, timestamps, BOL, ASN confirmation, and appointment records. Without proof, the chargeback usually becomes tuition."
      }
    }
  ]
};

export const metadata = {
  title: 'Retail Routing Guide Compliance for CPG Brands | Logic Agency',
  description: 'A practical guide to retail routing guide compliance: ASN timing, carrier rules, pallet specs, case packs, delivery appointments, and chargeback prevention.',
  keywords: 'retail routing guide compliance, routing guide compliance, retail chargeback prevention, CPG routing guide, ASN timing retail, retail shipment compliance',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/blog/routing-guide-compliance-retail',
  },
  openGraph: {
    title: 'Retail Routing Guide Compliance: What Every Brand Gets Wrong',
    description: 'A practical guide to retail routing guide compliance: ASN timing, carrier rules, pallet specs, case packs, delivery appointments, and chargeback prevention.',
    url: 'https://www.logicagencyinc.com/blog/routing-guide-compliance-retail',
    type: 'article',
    publishedTime: '2026-06-17',
    authors: ['Jordan Harper'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retail Routing Guide Compliance: What Every Brand Gets Wrong',
    description: 'A practical guide to retail routing guide compliance: ASN timing, carrier rules, pallet specs, case packs, delivery appointments, and chargeback prevention.',
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
          <span className="b-tag">Retail Compliance</span>
          <h1>Retail Routing Guide Compliance: What Every Brand Gets Wrong</h1>
          <p className="b-lede">Retail routing guide compliance means shipping exactly the way a retailer tells you to ship: the approved carrier, delivery window, carton label, ASN timing, pallet format, and case pack configuration. Most CPG brands get it wrong because nobody reads the full guide before the first PO moves. That is how a profitable order turns into a chargeback file.</p>
          <div className="b-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Jun 2026</span>
            <span>9 min read</span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="b-feat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/port-retail.jpg" alt="Retail routing guide compliance checklist for CPG brands shipping to major retailers" className="b-feat-img" />
      </div>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>A routing guide is the retailer&apos;s operating manual for how product must arrive.</li>
              <li>The five most expensive violations are late ASN, wrong carrier, pallet height, case pack error, and missed delivery appointment.</li>
              <li>Routing guide compliance starts before production, not after the warehouse asks for labels.</li>
              <li>One owner should complete the compliance checklist for every PO.</li>
              <li>If the shipment leaves wrong, the brand usually pays twice: once in penalties and once to fix the process.</li>
            </ul>
          </div>

          <h2 id="what-is">What Is a Retail Routing Guide?</h2>

          <p>A retail routing guide is the rulebook for how a vendor ships product into a retailer&apos;s network. It covers the physical shipment, the data sent before the shipment, and the paperwork that proves the shipment followed the rules.</p>

          <p>It usually includes:</p>

          <ul>
            <li>Approved carriers</li>
            <li>Pickup and delivery windows</li>
            <li>Appointment requirements</li>
            <li>Carton label specifications</li>
            <li>Pallet height and pallet type</li>
            <li>ASN timing</li>
            <li>Bill of lading rules</li>
            <li>Case pack and master carton requirements</li>
            <li>Routing request process</li>
            <li>Chargeback schedule</li>
          </ul>

          <p>Most founders think the buyer meeting is the hard part. It is not. The hard part is getting the product received cleanly. A buyer can say yes, the PO can be real, and the shipment can still lose money because the carton label was wrong, the ASN was late, or the delivery appointment was missed.</p>

          <p>We have seen three routing guide violations in one first PO that would have created $8,400 in chargebacks before the brand had even measured sell-through. The product was fine. The operating process was not.</p>

          <p>The issue is timing. By the time the warehouse is preparing the shipment, most expensive decisions have already been made. The carton size is set. The case pack is set. The pallet configuration is set. The routing window is closing.</p>

          <p>That is why compliance has to start when the PO arrives, not when the truck is at the dock.</p>

          <h2 id="five-violations">The Five Routing Guide Violations That Cost the Most</h2>

          <h3>1. Late or Incorrect ASN</h3>

          <p>The ASN, or advance ship notice, tells the retailer what is coming before the shipment arrives. It should match the physical shipment: SKU, units, carton count, PO number, ship date, and carrier information.</p>

          <p>If the ASN is late, incomplete, or mismatched, the retailer&apos;s receiving team cannot trust the shipment data. That creates manual work. Manual work creates penalties.</p>

          <p>Most ASN chargebacks range from a few hundred dollars per PO to larger cumulative deductions when the error repeats across stores, SKUs, or shipments. The bigger cost is not just the first penalty. It is the scorecard damage.</p>

          <p>The prevention step is simple: compare the ASN against the physical load before transmission. Not against the original PO. Against what is actually shipping.</p>

          <h3>2. Wrong Carrier or Routing Method</h3>

          <p>Some retailers require vendor routing through specific carrier networks. Some require the vendor to submit a routing request and wait for assignment. Some allow prepaid shipments only under certain conditions.</p>

          <p>The mistake is assuming &ldquo;ship it with our normal carrier&rdquo; is acceptable. It often is not. Wrong carrier violations are expensive because the shipment may still arrive on time and still be non-compliant. The warehouse thinks it did its job. The retailer sees a routing violation.</p>

          <p>The fix: confirm routing method before booking pickup. If the retailer assigns the carrier, do not book outside the assigned method without written approval.</p>

          <h3>3. Pallet Height, Pallet Type, and Load Configuration Errors</h3>

          <p>Retailers care about pallet structure because their distribution centers are built around predictable movement. Pallet height, pallet type, stretch-wrap standard, corner boards, and label placement all affect how quickly product moves through receiving.</p>

          <p>Common errors:</p>

          <ul>
            <li>Pallets built above maximum height</li>
            <li>Mixed SKUs on a pallet without required separation</li>
            <li>Wrong pallet type</li>
            <li>Labels placed on the wrong face</li>
            <li>Cartons overhanging the pallet edge</li>
            <li>Stretch wrap covering labels</li>
          </ul>

          <p>These sound like warehouse details. They are margin details. If a DC has to rework the pallet, slow receiving, or manually identify product, the brand pays.</p>

          <h3>4. Case Pack Error</h3>

          <p>A case pack error happens when the physical carton configuration does not match the retailer&apos;s PO or item setup. If the retailer expects 12 units per case and the brand ships 10, the receiving system breaks.</p>

          <p>This is one of the most preventable violations because the mistake usually starts before production. The brand approves a case pack internally, the supplier packs to that spec, and nobody checks it against the retailer&apos;s item setup before cartons are printed.</p>

          <p>The fix: confirm case pack quantity in writing before production starts. Not after the product is packed. Not when the warehouse asks for labels. Before the carton is finalized.</p>

          <h3>5. Missed Delivery Appointment</h3>

          <p>Retail delivery windows are not suggestions. A missed appointment can trigger penalties even when the shipment is ready and the product is correct.</p>

          <p>This usually happens because the brand treats freight scheduling as a warehouse task instead of a retail compliance task. The warehouse knows when the load is ready. The retailer controls when the load can be received. Those are not the same thing.</p>

          <p>The prevention step: schedule appointment confirmation before the shipment leaves the origin facility. If the carrier controls appointment scheduling, require written confirmation before pickup.</p>

          <h2 id="process">How to Set Up a Routing Guide Compliance Process</h2>

          <p>Routing guide compliance should be owned by one person for each PO. Not shared across sales, ops, 3PL, supplier, and freight forwarder. Shared ownership creates gaps. Named ownership closes them.</p>

          <p>The process should run in four stages.</p>

          <h3>Stage 1: Before Production</h3>

          <p>Confirm the details that production will lock in:</p>

          <ul>
            <li>Case pack quantity</li>
            <li>Master carton dimensions</li>
            <li>Carton weight</li>
            <li>Label placement zones</li>
            <li>UPC and GTIN data</li>
            <li>Pallet configuration</li>
            <li>Retailer item setup</li>
          </ul>

          <p>If any of those are wrong, the shipment is already at risk before the product exists.</p>

          <h3>Stage 2: Before Booking Freight</h3>

          <p>Confirm the routing path:</p>

          <ul>
            <li>Is a routing request required?</li>
            <li>Who chooses the carrier?</li>
            <li>Who schedules the delivery appointment?</li>
            <li>What documents must travel with the load?</li>
            <li>What ASN timing is required?</li>
            <li>What ship window applies?</li>
          </ul>

          <p>This is where many DTC brands fail. They ship product the way they have always shipped product. Retail does not work that way.</p>

          <h3>Stage 3: Before ASN Transmission</h3>

          <p>Compare the ASN against the final physical shipment:</p>

          <ul>
            <li>PO number</li>
            <li>SKU</li>
            <li>Units</li>
            <li>Carton count</li>
            <li>Ship date</li>
            <li>Carrier</li>
            <li>Tracking or PRO number</li>
            <li>Origin and destination</li>
          </ul>

          <p>The ASN should describe reality, not the original plan.</p>

          <h3>Stage 4: Before Pickup</h3>

          <p>Run the physical check:</p>

          <ul>
            <li>Carton labels scan</li>
            <li>Pallet labels are visible</li>
            <li>Pallet height matches spec</li>
            <li>Cartons do not overhang</li>
            <li>BOL matches shipment</li>
            <li>Photos are taken</li>
            <li>Appointment is confirmed</li>
          </ul>

          <p>Take photos. Keep timestamps. Save the BOL. If a chargeback arrives later, documentation is the difference between disputing it and absorbing it.</p>

          <h2 id="checklist">The Simple Routing Guide Checklist</h2>

          <p>Before every first retail shipment, answer these questions:</p>

          <ol>
            <li>Did we download the current routing guide, not last year&apos;s version?</li>
            <li>Did we confirm case pack quantity against retailer item setup?</li>
            <li>Did we confirm carton dimensions before production?</li>
            <li>Did we validate pallet height and Ti-Hi?</li>
            <li>Did we confirm who owns routing requests?</li>
            <li>Did we confirm delivery appointment ownership?</li>
            <li>Did we test carton label scans?</li>
            <li>Did we match ASN data to the physical load?</li>
            <li>Did we photograph pallets before pickup?</li>
            <li>Did one named person sign off on the shipment?</li>
          </ol>

          <p>If the answer is no to any of these, the shipment is not ready.</p>

          <h2 id="workflow">The First-PO Compliance Workflow</h2>

          <p>The safest process is to treat the first PO like a launch, even if the product is already selling DTC.</p>

          <p><strong>Step 1: Pull the routing guide into a live checklist.</strong> Do not leave it as a PDF in someone&apos;s inbox. Convert the requirements into tasks with owners: ASN owner, label owner, freight owner, appointment owner, documentation owner.</p>

          <p><strong>Step 2: Lock packaging and case pack details before production.</strong> The case pack, carton dimensions, and carton label zones need to be verified before cartons are produced. If the box is wrong, the warehouse cannot fix it without rework.</p>

          <p><strong>Step 3: Run a pre-shipment review 72 hours before pickup.</strong> This is the last practical moment to catch label, pallet, BOL, or ASN problems before they become retailer problems.</p>

          <p><strong>Step 4: Save evidence.</strong> Photos, scan confirmations, ASN timestamps, appointment confirmations, and signed BOLs should live in one folder tied to the PO.</p>

          <p>That sounds basic. Most brands do not do it. They assume the 3PL has it handled. The 3PL assumes the brand confirmed the routing guide. The freight carrier assumes the appointment is set. Then the deduction arrives, and nobody has documentation.</p>

          <h2 id="faq" className="b-faq-h">FAQ</h2>

          <h3>What is retail routing guide compliance?</h3>
          <p>Retail routing guide compliance is the process of shipping product according to a retailer&apos;s exact rules for carrier selection, ASN timing, labels, pallet configuration, delivery appointment, and documentation.</p>

          <h3>What are the most common routing guide violations?</h3>
          <p>The most common violations are late ASN, wrong carrier, missed delivery appointment, incorrect case pack, and carton or pallet label errors.</p>

          <h3>When should a brand review the routing guide?</h3>
          <p>Before production starts. The routing guide affects case pack, carton size, pallet configuration, label placement, and data requirements.</p>

          <h3>Who should own routing guide compliance?</h3>
          <p>One named operations owner should own it for each PO. The 3PL can execute tasks, but the brand needs one person accountable for final signoff.</p>

          <h3>Can routing guide chargebacks be disputed?</h3>
          <p>Sometimes. Disputes work when the brand has proof: photos, timestamps, BOL, ASN confirmation, and appointment records. Without proof, the chargeback usually becomes tuition.</p>

        </div>
      </div>

      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[
            { q: 'What is retail routing guide compliance?', a: 'Retail routing guide compliance is the process of shipping product according to a retailer\'s exact rules for carrier selection, ASN timing, labels, pallet configuration, delivery appointment, and documentation.' },
            { q: 'What are the most common routing guide violations?', a: 'The most common violations are late ASN, wrong carrier, missed delivery appointment, incorrect case pack, and carton or pallet label errors.' },
            { q: 'When should a brand review the routing guide?', a: 'Before production starts. The routing guide affects case pack, carton size, pallet configuration, label placement, and data requirements.' },
            { q: 'Who should own routing guide compliance?', a: 'One named operations owner should own it for each PO. The 3PL can execute tasks, but the brand needs one person accountable for final signoff.' },
            { q: 'Can routing guide chargebacks be disputed?', a: 'Sometimes. Disputes work when the brand has proof: photos, timestamps, BOL, ASN confirmation, and appointment records. Without proof, the chargeback usually becomes tuition.' }
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-band-inner">
          <h2>Ready to Ship<br /><em>Clean?</em></h2>
          <p>Book a 30-minute call. We&apos;ll review your first retail PO before it becomes a chargeback file.</p>
          <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
