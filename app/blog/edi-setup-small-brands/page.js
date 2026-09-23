import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "EDI Setup for Small Brands: A Plain-English Guide to Getting Retail-Ready",
  "description": "EDI setup for small brands costs $150–$500/month and takes 4–8 weeks. A plain-English guide to transactions, providers, costs, and what to do first.",
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
  "mainEntityOfPage": "https://www.logicagencyinc.com/blog/edi-setup-small-brands",
  "datePublished": "2026-06-16",
  "dateModified": "2026-06-16"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Logic Agency", "item": "https://www.logicagencyinc.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.logicagencyinc.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "EDI Setup for Small Brands: A Plain-English Guide to Getting Retail-Ready", "item": "https://www.logicagencyinc.com/blog/edi-setup-small-brands" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do all retailers require EDI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Smaller regional retailers, independent stores, specialty chains, and some natural grocers accept manual purchase orders and invoices by email or through their own ordering portal. But every major national retailer — Target, Walmart, Whole Foods, Sephora, Ulta, CVS, Kroger, Costco — requires EDI."
      }
    },
    {
      "@type": "Question",
      "name": "How long does EDI setup take for a small brand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plan for 4–8 weeks from provider selection to first live transaction. The fastest setups happen when your EDI provider has an existing connection with the retailer and you don't need ERP integration. The longest setups involve new trading partner connections, complex integrations, or retailers with slow EDI onboarding teams."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cheapest way to set up EDI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your 3PL offers EDI as part of their fulfillment service, that is typically the lowest-cost path — often included in your fulfillment fees or available as a $100–$300/month add-on. If you need a standalone EDI provider, expect $150–$400/month plus a one-time setup fee. Web-EDI portals are the cheapest option but carry higher chargeback risk due to manual data entry."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use the same EDI setup for multiple retailers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your EDI provider account supports multiple trading partners, but each retailer requires separate configuration. The document formats vary — Target's ASN requirements differ from Walmart's. Your provider handles the mapping, but expect 2–4 weeks of additional setup time per new retailer."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if my EDI system goes down?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You need a documented backup process. Most retailers have web-EDI portals that you can use as an emergency fallback for ASN and invoice submission. Know the portal login, know the process, and test it before you need it. An EDI outage without a backup process means every shipment during the downtime generates chargebacks."
      }
    },
    {
      "@type": "Question",
      "name": "Is EDI the same as an ERP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. EDI is a communication standard — it governs how documents are exchanged between trading partners. An ERP system manages your internal business operations: inventory, orders, accounting, production. EDI connects your systems to the retailer's systems. An ERP manages what happens inside your business."
      }
    }
  ]
};

export const metadata = {
  title: 'EDI Setup for Small Brands: Cost & Guide | Logic Agency',
  description: 'EDI setup for small brands costs $150–$500/month and takes 4–8 weeks. A plain-English guide to transactions, providers, costs, and what to do first.',
  keywords: 'EDI setup small brand, EDI for small business, EDI ecommerce brand, EDI requirements retail, EDI setup cost',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/blog/edi-setup-small-brands',
  },
  openGraph: {
    title: 'EDI Setup for Small Brands: A Plain-English Guide to Getting Retail-Ready',
    description: 'EDI setup for small brands costs $150–$500/month and takes 4–8 weeks. A plain-English guide to transactions, providers, costs, and what to do first.',
    url: 'https://www.logicagencyinc.com/blog/edi-setup-small-brands',
    type: 'article',
    publishedTime: '2026-06-16',
    authors: ['Jordan Harper'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDI Setup for Small Brands: A Plain-English Guide to Getting Retail-Ready',
    description: 'EDI setup for small brands costs $150–$500/month and takes 4–8 weeks. A plain-English guide to transactions, providers, costs, and what to do first.',
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
          <span className="b-tag">Operations</span>
          <h1>EDI Setup for Small Brands: A Plain-English Guide to Getting Retail-Ready</h1>
          <p className="b-lede">EDI setup for a small brand typically costs $150&ndash;$500/month, takes 4&ndash;8 weeks, and involves connecting your business to a standardized electronic document system that retailers require for purchase orders, shipment notifications, and invoices. It sounds more intimidating than it is &mdash; and it&apos;s a requirement, not an option, for any brand selling to national retail.</p>
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
        <img src="/images/port-retail.jpg" alt="Small brand setting up EDI for retail compliance" className="b-feat-img" />
      </div>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>EDI (Electronic Data Interchange) is how retailers send POs, receive shipment notifications, and process invoices electronically &mdash; it&apos;s required by every major national retailer.</li>
              <li>Setup costs $150&ndash;$500/month for small brands, with implementation fees of $500&ndash;$2,000.</li>
              <li>The four critical EDI documents are: 850 (Purchase Order), 856 (Advance Ship Notice), 810 (Invoice), and 997 (Acknowledgment).</li>
              <li>Setup takes 4&ndash;8 weeks including trading partner configuration and testing &mdash; start before the PO, not after.</li>
              <li>The #1 EDI mistake is manual ASN creation instead of automated transmission, which leads to late-ASN chargebacks of $200&ndash;$500 per incident.</li>
            </ul>
          </div>

          <p>EDI setup for a small brand typically costs $150&ndash;$500/month, takes 4&ndash;8 weeks, and involves connecting your business to a standardized electronic document system that retailers require for purchase orders, shipment notifications, and invoices.</p>

          <p>We&apos;ve set up EDI for dozens of brands at Logic Agency, and the pattern is always the same: founders assume it&apos;s a massive technical project, delay it until the last minute, and then scramble to get it done in two weeks when the retailer asks for it. This guide gives you the full picture so you can plan it properly.</p>

          <h2 id="what-edi-actually-is">What EDI Actually Is (and Why Retailers Require It)</h2>

          <p>EDI stands for Electronic Data Interchange. In plain terms, it&apos;s a standardized system for sending business documents &mdash; purchase orders, shipping notices, invoices &mdash; electronically between trading partners. Instead of emailing a PDF purchase order, the retailer&apos;s system sends a structured electronic document that your system can read, process, and respond to automatically.</p>

          <p>Retailers require EDI for one reason: scale. A retailer managing 5,000+ vendors can&apos;t process purchase orders by email. They can&apos;t manually track shipment notifications. They can&apos;t reconcile invoices from 5,000 different formats. EDI standardizes these transactions so the retailer&apos;s system can process them without human intervention.</p>

          <p>For you as a small brand, EDI means:</p>

          <ul>
            <li>You receive purchase orders electronically (not via email or portal)</li>
            <li>You transmit shipment notifications electronically when orders ship</li>
            <li>You submit invoices electronically for payment processing</li>
            <li>Each document follows a standard format that both systems understand</li>
          </ul>

          <p>The standard used by most U.S. retailers is ANSI X12. You don&apos;t need to understand the technical specification. Your EDI provider handles the translation. You need to understand which documents are required and what they do.</p>

          <h2 id="the-4-edi-documents">The 4 EDI Documents Every Small Brand Needs</h2>

          <h3>EDI 850: Purchase Order</h3>

          <p>The 850 is the retailer&apos;s purchase order &mdash; the electronic equivalent of &ldquo;we want to buy this from you.&rdquo; It contains the SKUs, quantities, prices, ship dates, and delivery instructions. When a retailer places an order, it arrives as an 850.</p>

          <p>Your system (or your EDI provider&apos;s portal) receives the 850 and presents it in a readable format. You review it, confirm you can fulfill it, and acknowledge receipt.</p>

          <h3>EDI 855: Purchase Order Acknowledgment</h3>

          <p>The 855 confirms that you received the PO and can fulfill it as specified. Not every retailer requires an 855, but many do &mdash; and sending one is good practice. It confirms the order details, flags any issues (backordered SKUs, quantity adjustments), and sets expectations.</p>

          <h3>EDI 856: Advance Ship Notice (ASN)</h3>

          <p>The 856 is the most important EDI document for compliance &mdash; and the one that causes the most chargebacks when it&apos;s late or wrong.</p>

          <p>The ASN tells the retailer: &ldquo;This shipment is on its way. Here&apos;s exactly what&apos;s in it &mdash; which SKUs, how many units, how many cartons, the carrier, the tracking number, and the expected delivery date.&rdquo;</p>

          <p>Most retailers require the 856 to be transmitted within 2 hours of carrier pickup. Some require 30 minutes. A late or missing ASN triggers an automatic chargeback &mdash; typically $200&ndash;$500 per occurrence. It&apos;s the single most common retail penalty for small brands.</p>

          <p>The 856 must match the physical shipment exactly. If the ASN says 500 units and the shipment contains 480, that mismatch triggers a separate chargeback.</p>

          <h3>EDI 810: Invoice</h3>

          <p>The 810 is your electronic invoice &mdash; sent after shipment to trigger payment processing. The 810 must reference the original PO number and match the ASN. Discrepancies between the 810 and the 850/856 delay payment and can generate deductions.</p>

          <h3>EDI 997: Functional Acknowledgment</h3>

          <p>The 997 is a system-level receipt that confirms a document was received and processed. It&apos;s automated &mdash; your EDI system sends and receives 997s without your involvement. Think of it as a digital read receipt.</p>

          <h2 id="edi-setup-options">EDI Setup Options for Small Brands</h2>

          <p>You don&apos;t need to build EDI infrastructure from scratch. Three options cover 95% of small brand needs:</p>

          <h3>Option 1: Full EDI Provider (Most Common)</h3>

          <p>A third-party EDI service that manages your connections with retail trading partners. They translate documents between your systems and the retailer&apos;s, handle compliance requirements, and provide a web portal for managing transactions.</p>

          <p>Top providers for small brands:</p>

          <ul>
            <li>SPS Commerce &mdash; the largest retail EDI network. Strong onboarding support, extensive retailer pre-connections.</li>
            <li>TrueCommerce &mdash; good mid-market option with ERP integrations.</li>
            <li>Covalent (formerly 1 EDI Source) &mdash; smaller provider with competitive pricing for low-volume brands.</li>
          </ul>

          <p>Typical cost: $150&ndash;$400/month plus $500&ndash;$2,000 implementation fee. Monthly cost depends on transaction volume and number of trading partners.</p>

          <p>Best for: Brands managing their own fulfillment or using a 3PL that doesn&apos;t offer EDI.</p>

          <h3>Option 2: Web-EDI (Portal-Based)</h3>

          <p>A browser-based portal where you manually key in EDI documents. The retailer sends a PO, you log into the portal, review it, and manually create the ASN and invoice.</p>

          <p>Typical cost: $0&ndash;$100/month (some retailers offer free web-EDI portals).</p>

          <p>Best for: Very low volume (1&ndash;3 POs per month) where the manual data entry time is manageable.</p>

          <p>Caution: Manual ASN creation is risky. One missed session, one data entry error, and you&apos;re eating a chargeback. We see brands start on web-EDI and switch to a full provider within 6 months because the manual process doesn&apos;t scale and the error rate is too high.</p>

          <h3>Option 3: 3PL-Provided EDI (Simplest Path)</h3>

          <p>Your third-party logistics provider includes EDI as part of their fulfillment service. The 3PL receives the PO, manages inventory, ships the order, and transmits the ASN &mdash; all within their system.</p>

          <p>Typical cost: Included in 3PL fulfillment fees (or $100&ndash;$300/month add-on).</p>

          <p>Best for: Brands using a retail-experienced 3PL. This is the fastest path to EDI compliance because the 3PL already has trading partner connections with major retailers.</p>

          <p>Caution: Verify your 3PL actually has EDI capability and existing connections with your specific retailer. &ldquo;We can do EDI&rdquo; and &ldquo;We have an active trading partner connection with Target&rdquo; are different statements. Ask for proof.</p>

          <h2 id="edi-setup-timeline">EDI Setup Timeline: What 4&ndash;8 Weeks Actually Looks Like</h2>

          <h3>Weeks 1&ndash;2: Provider Selection and Account Setup</h3>

          <ul>
            <li>Select your EDI provider or confirm 3PL EDI capability</li>
            <li>Create your account and provide business information</li>
            <li>Identify the specific retailer(s) you need to connect with</li>
            <li>Begin trading partner setup (your provider initiates the connection with the retailer&apos;s EDI system)</li>
          </ul>

          <h3>Weeks 2&ndash;4: Trading Partner Configuration</h3>

          <ul>
            <li>Your EDI provider configures the document maps for your specific retailer</li>
            <li>Each retailer has slightly different data requirements within the standard EDI format</li>
            <li>Your provider maps these requirements to your system</li>
            <li>If integrating with an ERP or OMS, that integration work happens here</li>
          </ul>

          <h3>Weeks 4&ndash;6: Testing</h3>

          <ul>
            <li>Transmit test transactions (test 850, 856, 810) with the retailer&apos;s system</li>
            <li>Verify document accuracy &mdash; do the fields populate correctly? Does the ASN format match requirements?</li>
            <li>Fix mapping errors identified during testing</li>
            <li>The retailer&apos;s EDI team validates your test documents</li>
          </ul>

          <h3>Weeks 6&ndash;8: Go-Live and First Real Transaction</h3>

          <ul>
            <li>Switch from test mode to production</li>
            <li>Process your first real PO through the EDI system</li>
            <li>Monitor the first 2&ndash;3 transactions closely for errors</li>
            <li>Confirm ASN timing meets the retailer&apos;s compliance window</li>
          </ul>

          <p>Don&apos;t compress this timeline below 4 weeks. Rushed EDI setups generate errors in the first month that cost more in chargebacks than the time saved.</p>

          <h2 id="edi-cost-breakdown">What EDI Setup Actually Costs for Small Brands</h2>

          <p>Here&apos;s a realistic cost breakdown for a small brand setting up EDI for one retail trading partner:</p>

          <table>
            <thead>
              <tr>
                <th>Cost Category</th>
                <th>Low Estimate</th>
                <th>High Estimate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Implementation / setup fee</td>
                <td>$500</td>
                <td>$2,000</td>
              </tr>
              <tr>
                <td>Monthly subscription</td>
                <td>$150/month</td>
                <td>$500/month</td>
              </tr>
              <tr>
                <td>Per-transaction fees (if applicable)</td>
                <td>$0.10&ndash;$0.50/transaction</td>
                <td>$1&ndash;$3/transaction</td>
              </tr>
              <tr>
                <td>Integration with OMS/ERP (if needed)</td>
                <td>$1,000</td>
                <td>$5,000</td>
              </tr>
              <tr>
                <td><strong>Year 1 total cost</strong></td>
                <td><strong>$2,800</strong></td>
                <td><strong>$12,000</strong></td>
              </tr>
            </tbody>
          </table>

          <p>Compare that to the cost of not having EDI: $200&ndash;$500 per late ASN chargeback, $100&ndash;$300 per documentation error, and the relationship cost of being flagged as a non-compliant vendor. Two months of ASN-related chargebacks typically exceed the full first-year cost of EDI setup.</p>

          <h2 id="common-edi-mistakes">The 5 Most Common EDI Setup Mistakes</h2>

          <h3>Mistake 1: Starting After the PO Is Signed</h3>

          <p>The retailer says yes. The PO is coming. You start your EDI setup on Day 1 post-PO. But the PO ships in 6 weeks and EDI takes 4&ndash;8 weeks to configure. You&apos;re behind before you start.</p>

          <p>Start EDI setup when you begin pursuing the retail account &mdash; not when the deal closes. If the account doesn&apos;t materialize, you&apos;ve lost $500 in implementation fees. If it does and your EDI isn&apos;t ready, you&apos;ve lost $5,000+ in first-shipment chargebacks.</p>

          <h3>Mistake 2: Manual ASN Creation</h3>

          <p>Web-EDI portals are fine for receiving POs. They&apos;re dangerous for ASN creation. The 856 must be transmitted within hours of shipment &mdash; sometimes within 30 minutes. A manual process requires someone available, accurate, and timely every single shipment. People get sick. People make typos. People forget.</p>

          <p>Automated ASN generation &mdash; where the 856 is triggered by the shipping event in your WMS or 3PL system &mdash; eliminates the most common and most expensive EDI-related chargeback.</p>

          <h3>Mistake 3: Not Testing With the Specific Retailer</h3>

          <p>Your EDI provider may have a generic connection template for &ldquo;major retailers.&rdquo; But Target&apos;s 856 requirements aren&apos;t identical to Walmart&apos;s. A test transaction that passes validation on a generic template can fail at the retailer&apos;s DC because a specific field is formatted differently.</p>

          <p>Test with the actual retailer. Send test transactions through their system. Get confirmation from their EDI team that your documents pass.</p>

          <h3>Mistake 4: Ignoring the 810 Invoice</h3>

          <p>Most brands focus on the 850 and 856 &mdash; PO and ASN &mdash; and treat the 810 invoice as an afterthought. But invoice discrepancies cause payment delays and deductions. If your 810 references the wrong PO number, shows a different quantity than the ASN, or uses a different unit price than the PO, payment gets held until the discrepancy is resolved.</p>

          <h3>Mistake 5: No Backup Process</h3>

          <p>EDI systems go down. Servers fail. Your provider has an outage. If you have no backup process for transmitting an ASN during downtime, every shipment during the outage generates chargebacks.</p>

          <p>Document a backup process &mdash; even if it&apos;s &ldquo;log into the retailer&apos;s web portal and manually submit the ASN.&rdquo; Know the process before you need it.</p>

          <h2 id="faq" className="b-faq-h">FAQ</h2>

          <h3>Do all retailers require EDI?</h3>

          <p>No. Smaller regional retailers, independent stores, specialty chains, and some natural grocers accept manual purchase orders and invoices by email or through their own ordering portal. But every major national retailer &mdash; Target, Walmart, Whole Foods, Sephora, Ulta, CVS, Kroger, Costco &mdash; requires EDI. If your retail strategy includes national chains, EDI is a prerequisite.</p>

          <h3>How long does EDI setup take for a small brand?</h3>

          <p>Plan for 4&ndash;8 weeks from provider selection to first live transaction. The fastest setups happen when your EDI provider has an existing connection with the retailer and you don&apos;t need ERP integration. The longest setups involve new trading partner connections, complex integrations, or retailers with slow EDI onboarding teams.</p>

          <h3>What is the cheapest way to set up EDI?</h3>

          <p>If your 3PL offers EDI as part of their fulfillment service, that&apos;s typically the lowest-cost path &mdash; often included in your fulfillment fees or available as a $100&ndash;$300/month add-on. If you need a standalone EDI provider, expect $150&ndash;$400/month plus a one-time setup fee. Web-EDI portals are the cheapest option ($0&ndash;$100/month) but carry higher chargeback risk due to manual data entry.</p>

          <h3>Can I use the same EDI setup for multiple retailers?</h3>

          <p>Your EDI provider account supports multiple trading partners, but each retailer requires separate configuration. The document formats vary &mdash; Target&apos;s ASN requirements differ from Walmart&apos;s. Your provider handles the mapping, but expect 2&ndash;4 weeks of additional setup time per new retailer. The monthly cost typically increases $50&ndash;$150 per additional trading partner.</p>

          <h3>What happens if my EDI system goes down?</h3>

          <p>You need a documented backup process. Most retailers have web-EDI portals that you can use as an emergency fallback for ASN and invoice submission. Know the portal login, know the process, and test it before you need it. An EDI outage without a backup process means every shipment during the downtime generates chargebacks.</p>

          <h3>Is EDI the same as an ERP?</h3>

          <p>No. EDI is a communication standard &mdash; it governs how documents are exchanged between trading partners. An ERP system manages your internal business operations: inventory, orders, accounting, production. EDI connects your systems to the retailer&apos;s systems. An ERP manages what happens inside your business. Many small brands run EDI without an ERP, using their EDI provider&apos;s portal or their 3PL&apos;s system to manage transactions.</p>

        </div>
      </div>

      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[
            { q: 'Do all retailers require EDI?', a: 'No. Smaller regional retailers, independent stores, specialty chains, and some natural grocers accept manual purchase orders and invoices by email or through their own ordering portal. But every major national retailer — Target, Walmart, Whole Foods, Sephora, Ulta, CVS, Kroger, Costco — requires EDI.' },
            { q: 'How long does EDI setup take for a small brand?', a: 'Plan for 4–8 weeks from provider selection to first live transaction. The fastest setups happen when your EDI provider has an existing connection with the retailer and you don\'t need ERP integration. The longest setups involve new trading partner connections, complex integrations, or retailers with slow EDI onboarding teams.' },
            { q: 'What is the cheapest way to set up EDI?', a: 'If your 3PL offers EDI as part of their fulfillment service, that\'s typically the lowest-cost path — often included in your fulfillment fees or available as a $100–$300/month add-on. If you need a standalone EDI provider, expect $150–$400/month plus a one-time setup fee. Web-EDI portals are the cheapest option but carry higher chargeback risk due to manual data entry.' },
            { q: 'Can I use the same EDI setup for multiple retailers?', a: 'Your EDI provider account supports multiple trading partners, but each retailer requires separate configuration. The document formats vary — Target\'s ASN requirements differ from Walmart\'s. Your provider handles the mapping, but expect 2–4 weeks of additional setup time per new retailer.' },
            { q: 'What happens if my EDI system goes down?', a: 'You need a documented backup process. Most retailers have web-EDI portals that you can use as an emergency fallback for ASN and invoice submission. Know the portal login, know the process, and test it before you need it. An EDI outage without a backup process means every shipment during the downtime generates chargebacks.' },
            { q: 'Is EDI the same as an ERP?', a: 'No. EDI is a communication standard — it governs how documents are exchanged between trading partners. An ERP system manages your internal business operations: inventory, orders, accounting, production. EDI connects your systems to the retailer\'s systems. An ERP manages what happens inside your business.' }
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
