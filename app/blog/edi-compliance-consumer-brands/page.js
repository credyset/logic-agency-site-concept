import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "EDI Compliance for Consumer Brands: Maintaining Your Retailer Scorecard After Go-Live",
  "description": "EDI compliance doesn't end at setup. Learn the failure modes, monthly audit framework, and dispute process that protect your retail margins after go-live.",
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
  "mainEntityOfPage": "https://www.logicagencyinc.com/blog/edi-compliance-consumer-brands",
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Logic Agency", "item": "https://www.logicagencyinc.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.logicagencyinc.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "EDI Compliance for Consumer Brands: Maintaining Your Retailer Scorecard After Go-Live", "item": "https://www.logicagencyinc.com/blog/edi-compliance-consumer-brands" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the most common cause of EDI chargebacks after go-live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ASN timing errors — specifically, ASNs that are transmitted late or that don't match the physical shipment because the 3PL changed the shipment after the document was generated. Most of these are preventable with a warehouse handoff protocol that confirms final shipment data before ASN transmission."
      }
    },
    {
      "@type": "Question",
      "name": "How often should we audit EDI compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monthly. The 6-check framework takes two to four hours for most brands and catches the categories that generate the most chargeback exposure. A quarterly audit misses too many cycles — by the time you find a recurring problem, it has already cost you three months of chargebacks."
      }
    },
    {
      "@type": "Question",
      "name": "What documentation do I need to dispute a retail chargeback?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At minimum: the original EDI document with transmission timestamp (proving it was sent on time), the physical shipment documentation matching the EDI data, and the relevant routing guide requirement showing what was required. Without all three, most disputes are rejected on insufficient evidence."
      }
    },
    {
      "@type": "Question",
      "name": "At what dollar amount should I dispute a chargeback vs. absorb it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Practical floor is around $200. Below that, the time cost of the dispute process typically exceeds the recovery. Above $500, almost always worth disputing if the root cause was not a clear brand error. Between $200 and $500, use the root cause framework — brand error absorbs, 3PL or retailer error disputes."
      }
    },
    {
      "@type": "Question",
      "name": "How long do we have to dispute a retail chargeback?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dispute windows vary by retailer. Most range from 30 to 60 days from the chargeback date. Some are as short as 30 days. Set a calendar trigger to review every chargeback within 14 days of receipt — that gives you enough time to gather documentation and submit before the window closes."
      }
    },
    {
      "@type": "Question",
      "name": "Can my EDI provider help with dispute documentation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most cloud EDI providers can pull transmission logs that prove when a document was sent and what it contained. That is the core evidence for an ASN timing dispute. Ask your provider how to pull transmission records for a specific date range — this should be accessible in your account portal."
      }
    }
  ]
};

export const metadata = {
  title: 'EDI Compliance for Consumer Brands: Post-Launch Guide | Logic Agency',
  description: "EDI compliance doesn't end at setup. Learn the failure modes, monthly audit framework, and dispute process that protect your retail margins after go-live.",
  keywords: 'EDI compliance consumer brands, EDI chargeback prevention retail, EDI compliance audit CPG, retail vendor compliance scorecard, ASN compliance retail, EDI failure modes retail brands',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/blog/edi-compliance-consumer-brands',
  },
  openGraph: {
    title: 'EDI Compliance for Consumer Brands: Maintaining Your Retailer Scorecard After Go-Live',
    description: "EDI compliance doesn't end at setup. Learn the failure modes, monthly audit framework, and dispute process that protect your retail margins after go-live.",
    url: 'https://www.logicagencyinc.com/blog/edi-compliance-consumer-brands',
    type: 'article',
    publishedTime: '2026-06-17',
    authors: ['Jordan Harper'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDI Compliance for Consumer Brands: Maintaining Your Retailer Scorecard After Go-Live',
    description: "EDI compliance doesn't end at setup. Learn the failure modes, monthly audit framework, and dispute process that protect your retail margins after go-live.",
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
          <h1>EDI Compliance for Consumer Brands: Maintaining Your Retailer Scorecard After Go-Live</h1>
          <p className="b-lede">Ongoing EDI compliance means every purchase order acknowledgment, advance ship notice, and invoice you send to a retailer arrives accurate, on time, and in the exact format the retailer requires &mdash; not just for the first shipment, but for every shipment. Most brands get the initial setup right. Where compliance breaks down is months three through twelve.</p>
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
        <img src="/images/port-retail.jpg" alt="EDI compliance scorecard management for consumer brands after retail go-live" className="b-feat-img" />
      </div>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>EDI compliance failures spike 60&ndash;90 days after go-live, when manual oversight drops and operational habits form around the new system.</li>
              <li>ASN accuracy is the single highest-impact compliance variable &mdash; one wrong carton count can cascade into receiving delays, chargebacks, and a failed on-time delivery metric.</li>
              <li>A monthly compliance audit covering 6 core checks will catch most issues before they become chargeback patterns.</li>
              <li>The dispute vs. absorb framework depends on three factors: error amount, dispute window, and root cause ownership.</li>
              <li>Compliance is a warehouse discipline problem as much as a technology problem &mdash; the data in the EDI document has to match what&apos;s physically on the truck.</li>
            </ul>
          </div>

          <p>The cost of letting compliance slip is direct and measurable. ASN errors alone run $200&ndash;$1,500 per incident at most national retailers. Routing guide violations run $250&ndash;$750. Late ASNs can trigger receiving delays that compound into markdown allowances, lost shelf space, and buyer meetings nobody wants. A brand shipping 40 POs per year with a 10% non-compliance rate absorbs roughly $8,000&ndash;$25,000 in avoidable deductions annually before the conversation about partnership health even starts.</p>

          <p>This guide covers what breaks after go-live, how to run a monthly compliance audit, and how to decide when to dispute a chargeback and when to absorb it.</p>

          <h2 id="why-compliance-breaks">Why EDI Compliance Breaks Down After the First 90 Days</h2>

          <p>The first shipment gets extra attention. The second and third get standard process. By month four, operations are running on habit &mdash; and habits formed under setup pressure are often not the habits the system needs long-term.</p>

          <p>Four failure modes account for most post-launch compliance problems.</p>

          <h3>The Manual Override Problem</h3>

          <p>During setup, someone &mdash; usually the ops lead or a 3PL contact &mdash; watches every document closely. By month three, the system is &ldquo;working,&rdquo; so direct oversight drops. Exceptions stop getting caught. The first sign something is wrong is a chargeback notice, which may arrive 45&ndash;90 days after the violation.</p>

          <p>The gap between the error and the notification is the most dangerous part of EDI compliance. A brand that doesn&apos;t audit its own data during that window has no idea whether it&apos;s running at 96% compliance or 84% compliance.</p>

          <h3>Staff Turnover Inside the EDI Workflow</h3>

          <p>EDI compliance is not owned by one person, but in practice, one or two people usually understand the full document flow. When that person leaves &mdash; or is promoted &mdash; the institutional knowledge goes with them. The replacement learns the mechanics but not the edge cases: what to do when the PO quantity changes after the ASN is generated, or when the 3PL splits a shipment the EDI system thinks is single-unit.</p>

          <p>Those edge cases are exactly where compliance failures happen.</p>

          <h3>3PL Assumption Gaps</h3>

          <p>Most brands assume their 3PL handles EDI. Many 3PLs assume the brand handles EDI. In practice, the handoff between brand-side EDI setup and 3PL-side ASN generation is where the highest-risk gap exists.</p>

          <p>The ASN has to match the physical shipment. The only entity that knows what&apos;s on the truck is the warehouse. If the warehouse triggers the ASN, they need to know the retailer&apos;s timing requirements, data field requirements, and what to do when the shipment changes after the document is generated.</p>

          <h3>Retailer Requirements Changes</h3>

          <p>Retailers update routing guides, EDI specifications, and labeling requirements. Most updates are announced via vendor portal. Most brands are not reading their vendor portal on a schedule.</p>

          <p>A retailer that updates its ASN timing requirement from &ldquo;send within 2 hours of shipment&rdquo; to &ldquo;send before truck departure&rdquo; has effectively created a new compliance standard. Brands that don&apos;t catch it find out when the first chargeback arrives.</p>

          <h2 id="real-cost">The Real Cost of EDI Non-Compliance</h2>

          <p>EDI chargebacks are predictable in their categories. Here are the most common types, with typical penalty ranges drawn from publicly available retailer compliance guides.</p>

          <h3>ASN Chargebacks</h3>

          <ul>
            <li><strong>Missing ASN:</strong> $100&ndash;$300 per shipment</li>
            <li><strong>Late ASN (after ship window):</strong> $150&ndash;$500 per shipment</li>
            <li><strong>Inaccurate ASN (carton/unit mismatch):</strong> $200&ndash;$750 per shipment</li>
          </ul>

          <p>At major mass market retailers, the ASN must typically be transmitted before the truck departs the origin facility. At specialty retailers, timing windows vary &mdash; some allow 2 hours after shipment, others require it before physical pickup. Each retailer&apos;s routing guide specifies the exact requirement.</p>

          <h3>Invoice Compliance Chargebacks</h3>

          <ul>
            <li><strong>Invoice not matching PO/ASN:</strong> $100&ndash;$400 per occurrence</li>
            <li><strong>Late invoice:</strong> $50&ndash;$200 per occurrence</li>
            <li><strong>Incorrect pricing or terms on invoice:</strong> $100&ndash;$300 per occurrence</li>
          </ul>

          <p>Invoice mismatches are particularly common when brands negotiate price changes mid-season. The PO reflects the agreed price, but the invoice reflects the updated price. If the change wasn&apos;t processed through the EDI system, the documents don&apos;t match.</p>

          <h3>Receiving-Related Chargebacks</h3>

          <ul>
            <li><strong>DC receiving delays caused by bad ASN data:</strong> Variable, often $200&ndash;$1,000+ depending on labor and appointment impact</li>
            <li><strong>Pallet configuration mismatch:</strong> $150&ndash;$500 per shipment</li>
            <li><strong>Label non-compliance:</strong> $100&ndash;$400 per shipment</li>
          </ul>

          <p>These are the chargebacks most brands don&apos;t attribute to EDI. A label problem looks like a labeling problem. A pallet configuration issue looks like a warehouse problem. But both are driven by data &mdash; the same data that should have been confirmed in the ASN.</p>

          <h2 id="vendor-scorecard">The Vendor Scorecard: What Retailers Actually Track</h2>

          <p>Most national retailers maintain a vendor scorecard &mdash; a running record of compliance rates across multiple dimensions. The scorecard is not usually shared proactively. Some retailers show it in their vendor portal. Others surface it only when it reaches a threshold that triggers a conversation.</p>

          <p>The dimensions vary by retailer, but most scorecards track:</p>

          <ul>
            <li><strong>On-time ship rate:</strong> Percentage of POs shipped within the confirmed ship window</li>
            <li><strong>Fill rate:</strong> Percentage of units shipped vs. POs ordered</li>
            <li><strong>ASN accuracy:</strong> Percentage of ASNs that match the physical shipment</li>
            <li><strong>ASN timeliness:</strong> Percentage of ASNs transmitted within the retailer&apos;s required window</li>
            <li><strong>Invoice accuracy:</strong> Percentage of invoices matching the PO and ASN</li>
            <li><strong>Label compliance:</strong> Percentage of cartons and pallets with correct labels</li>
          </ul>

          <p>A vendor consistently running below a 95% target on any of these metrics is a vendor at risk of reduced POs, renegotiated terms, or program exit.</p>

          <h2 id="monthly-audit">The Monthly EDI Compliance Audit: 6 Core Checks</h2>

          <p>Running a monthly audit does not require a compliance team. It requires a standard process and someone responsible for running it.</p>

          <h3>Check 1: ASN Timeliness Rate</h3>

          <p>Pull every ASN sent in the past 30 days. For each, record the ship date and the ASN transmission timestamp. Calculate the percentage of ASNs transmitted within the retailer&apos;s required window.</p>

          <p>Target: 98%+ on-time. Below 95% means there is a systemic timing problem. Common cause: ASN generation is triggered manually rather than by a warehouse event. Fix: confirm with your EDI provider or 3PL that ASNs are triggered automatically from warehouse shipment events.</p>

          <h3>Check 2: ASN Accuracy Rate</h3>

          <p>Compare ASNs sent against the corresponding physical shipments. Look for three types of mismatches: unit count discrepancy, carton count discrepancy, and carrier/tracking data discrepancy.</p>

          <p>Target: 99%+ accuracy. ASN chargebacks at major retailers are typically automatic &mdash; the DC system flags the mismatch and generates the deduction without human review. Common cause: 3PL ships short without notifying the brand or EDI provider.</p>

          <h3>Check 3: Invoice-to-PO Match Rate</h3>

          <p>Pull all invoices sent in the past 30 days. For each, verify that the unit price, total, and terms match the corresponding PO. Any mismatch is a potential chargeback.</p>

          <p>Target: 100% match. Invoice chargebacks take 45&ndash;90 days to surface, and by then the correction window is often closed. Common cause: price changes negotiated via email but not reflected in the EDI system before invoicing.</p>

          <h3>Check 4: PO Acknowledgment Response Rate</h3>

          <p>If your retailer requires an 855 PO acknowledgment, check that you are sending one for every 850 received, within the required window. Target: 100% response rate. Fix: automate 855 generation from confirmed POs &mdash; most cloud EDI providers support this.</p>

          <h3>Check 5: Routing Guide and Label Compliance Check</h3>

          <p>Pull two or three randomly selected shipments from the past month. Compare the physical shipment documentation against the current version of the retailer&apos;s routing guide. Check: carrier, delivery window, label format, label placement, pallet configuration, and case pack markings.</p>

          <p>This is the check most brands skip because it requires physical documentation review. It is also the check most likely to catch the category of problem you can fix before it becomes a chargeback.</p>

          <h3>Check 6: Chargeback Reconciliation</h3>

          <p>Pull all chargebacks received in the past 30 days. For each, categorize by type (ASN, invoice, routing, label, timing). Calculate your total chargeback dollar exposure and identify the top recurring category.</p>

          <p>The category distribution tells you where your compliance is weakest. A brand seeing 60% of its chargebacks from ASN timing has a different problem than a brand seeing 60% from invoice mismatches. Target: zero recurring chargebacks in the same category for two consecutive months.</p>

          <h2 id="dispute-framework">Dispute vs. Absorb: A Framework for Retail Chargebacks</h2>

          <p>Not every chargeback is worth disputing. Not every chargeback should be absorbed. The framework has three variables.</p>

          <h3>Variable 1: Error Amount</h3>

          <p>Most retailers have a minimum dispute threshold. As a practical floor: chargebacks below $200 are almost always cheaper to absorb than to dispute. Chargebacks above $500 almost always warrant review.</p>

          <p>The threshold also matters because dispute windows are tight &mdash; typically 30&ndash;60 days from the chargeback date. If the team is spending time disputing $150 charges, they may miss the window on a $2,000 chargeback that actually has merit.</p>

          <h3>Variable 2: Root Cause Ownership</h3>

          <p>The second question is: who made the error?</p>

          <ul>
            <li><strong>Brand error:</strong> Own it. Don&apos;t dispute. Fix the process.</li>
            <li><strong>3PL error:</strong> Document it. Dispute with the retailer and recover from the 3PL if the relationship supports it.</li>
            <li><strong>Retailer error:</strong> Dispute it, with documentation.</li>
            <li><strong>EDI provider error:</strong> Document and escalate to the provider. Dispute the chargeback while the escalation is in progress.</li>
          </ul>

          <p>The documentation matters because disputes require evidence: the original ASN with transmission timestamp, the corresponding physical shipment documentation, and the retailer&apos;s requirement specification from the routing guide.</p>

          <h3>Variable 3: Relationship Context</h3>

          <p>If you are 90 days into a new retail relationship and you have already received three chargebacks, disputing all of them creates friction with the buyer before the account has proven its value. There is a time to dispute and a time to absorb, make the process fix visible to the buyer, and build the relationship on demonstrated improvement.</p>

          <p>A brand that absorbs a chargeback, fixes the process, and has zero chargebacks for the next three shipments is in a stronger position than a brand that disputes everything and keeps making the same errors.</p>

          <h2 id="building-compliance">Building EDI Compliance Into Operations</h2>

          <p>The brands that maintain strong vendor scorecards long-term treat EDI compliance the same way they treat order accuracy: as an operational discipline, not a technical setup.</p>

          <p>That means:</p>

          <ul>
            <li><strong>One person owns the compliance dashboard.</strong> Not the IT department. Not the EDI provider. Someone in operations who is responsible for reviewing the 6 monthly checks, logging results, and escalating when a metric drops below threshold.</li>
            <li><strong>Compliance metrics appear in weekly ops reviews.</strong> ASN accuracy and chargeback exposure should be on the same dashboard as fill rate and inventory turns. If the team doesn&apos;t see it weekly, it doesn&apos;t get fixed proactively.</li>
            <li><strong>Routing guide changes get a dedicated review process.</strong> Someone on the team is subscribed to vendor portal notifications for every active retail account. When a change comes through, it gets processed in the week it arrives, not the week before the next shipment.</li>
            <li><strong>The 3PL is accountable for shipment data accuracy.</strong> The relationship with a 3PL should include a clause about EDI accuracy &mdash; specifically, that the 3PL is responsible for providing accurate shipment data before ASN transmission.</li>
            <li><strong>Dispute decisions happen within 14 days of a chargeback receipt.</strong> The 30&ndash;60 day window closes faster than most brands realize when there is a dispute process that requires documentation retrieval.</li>
          </ul>

          <h2 id="how-logic-manages">How Logic Agency Manages EDI Compliance for Clients</h2>

          <p>When Logic Agency manages a retail account, EDI compliance is part of the operational cadence &mdash; not a separate work stream.</p>

          <p>In the first 30 days of a retail engagement, we map the full EDI document flow: who generates each document, what triggers it, where the data comes from, and what happens when something changes. That map becomes the operating protocol.</p>

          <p>Monthly, we run the 6-check audit and log the results. If ASN accuracy drops below 98%, we identify the root cause before the next shipment, not after the chargeback arrives. When a chargeback comes in, we process it through the dispute-or-absorb framework within 14 days.</p>

          <p>The outcome for most clients is a vendor scorecard that improves over the first 90 days and stays above the 95% target across compliance categories afterward. That is not exceptional performance for a retail account. It is the baseline a buyer expects from a vendor they plan to grow with.</p>

          <h2 id="faq" className="b-faq-h">FAQ</h2>

          <h3>What is the most common cause of EDI chargebacks after go-live?</h3>
          <p>ASN timing errors &mdash; specifically, ASNs that are transmitted late or that don&apos;t match the physical shipment because the 3PL changed the shipment after the document was generated. Most of these are preventable with a warehouse handoff protocol that confirms final shipment data before ASN transmission.</p>

          <h3>How often should we audit EDI compliance?</h3>
          <p>Monthly. The 6-check framework above takes two to four hours for most brands and catches the categories that generate the most chargeback exposure. A quarterly audit misses too many cycles &mdash; by the time you find a recurring problem, it has already cost you three months of chargebacks.</p>

          <h3>What documentation do I need to dispute a retail chargeback?</h3>
          <p>At minimum: the original EDI document with transmission timestamp (proving it was sent on time), the physical shipment documentation matching the EDI data, and the relevant routing guide requirement showing what was required. Without all three, most disputes are rejected on insufficient evidence.</p>

          <h3>At what dollar amount should I dispute a chargeback vs. absorb it?</h3>
          <p>Practical floor is around $200. Below that, the time cost of the dispute process typically exceeds the recovery. Above $500, almost always worth disputing if the root cause was not a clear brand error. Between $200 and $500, use the root cause framework &mdash; brand error absorbs, 3PL or retailer error disputes.</p>

          <h3>How long do we have to dispute a retail chargeback?</h3>
          <p>Dispute windows vary by retailer. Most range from 30 to 60 days from the chargeback date. Some are as short as 30 days. Set a calendar trigger to review every chargeback within 14 days of receipt &mdash; that gives you enough time to gather documentation and submit before the window closes.</p>

        </div>
      </div>

      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[
            { q: 'What is the most common cause of EDI chargebacks after go-live?', a: 'ASN timing errors — specifically, ASNs that are transmitted late or that don\'t match the physical shipment because the 3PL changed the shipment after the document was generated. Most of these are preventable with a warehouse handoff protocol that confirms final shipment data before ASN transmission.' },
            { q: 'How often should we audit EDI compliance?', a: 'Monthly. The 6-check framework takes two to four hours for most brands and catches the categories that generate the most chargeback exposure. A quarterly audit misses too many cycles — by the time you find a recurring problem, it has already cost you three months of chargebacks.' },
            { q: 'What documentation do I need to dispute a retail chargeback?', a: 'At minimum: the original EDI document with transmission timestamp, the physical shipment documentation matching the EDI data, and the relevant routing guide requirement. Without all three, most disputes are rejected on insufficient evidence.' },
            { q: 'At what dollar amount should I dispute a chargeback vs. absorb it?', a: 'Practical floor is around $200. Below that, the time cost of the dispute process typically exceeds the recovery. Above $500, almost always worth disputing if the root cause was not a clear brand error. Between $200 and $500, use the root cause framework.' },
            { q: 'How long do we have to dispute a retail chargeback?', a: 'Dispute windows vary by retailer. Most range from 30 to 60 days from the chargeback date. Set a calendar trigger to review every chargeback within 14 days of receipt — that gives you enough time to gather documentation and submit before the window closes.' },
            { q: 'Can my EDI provider help with dispute documentation?', a: 'Most cloud EDI providers can pull transmission logs that prove when a document was sent and what it contained. Ask your provider how to pull transmission records for a specific date range — this should be accessible in your account portal.' }
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-band-inner">
          <h2>EDI Compliance Costing<br /><em>More Than It Should?</em></h2>
          <p>Book a 30-minute call. We&apos;ll map your compliance gaps and tell you exactly where the chargebacks are coming from &mdash; no sales pitch.</p>
          <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
