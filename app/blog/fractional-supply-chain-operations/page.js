import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const pageUrl = 'https://www.logicagencyinc.com/blog/fractional-supply-chain-operations';
const title = 'What Happens in the First 30 Days of Fractional Ops';
const description = 'The first 30 days of fractional supply chain operations should create visibility, stabilize vendors, find cost leaks, and define ownership.';

const faqs = [
  {
    q: 'What should happen in the first 30 days of fractional operations?',
    a: 'The first 30 days should establish visibility. That means mapping suppliers, auditing inventory and fulfillment, reviewing landed cost, identifying urgent risks, and assigning ownership for the next 60 to 90 days.',
  },
  {
    q: 'What should a fractional ops team not do first?',
    a: 'It should not start with a long strategy deck. The first month should produce operating clarity: what is late, what is expensive, what is undocumented, what is risky, and who owns the fix.',
  },
  {
    q: 'How fast should fractional operations create value?',
    a: 'A useful fractional operations partner should find practical issues in the first 30 days. Some fixes take longer, but visibility, prioritization, and ownership should improve immediately.',
  },
  {
    q: 'What is the difference between an audit and fractional execution?',
    a: 'An audit identifies the problems. Fractional execution keeps going after the audit: vendors get managed, specs get cleaned up, replenishment gets scheduled, freight gets reviewed, and reporting becomes part of the operating cadence.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  author: { '@type': 'Person', name: 'Jordan Harper', url: 'https://www.logicagencyinc.com' },
  publisher: { '@type': 'Organization', name: 'Logic Agency Inc.', url: 'https://www.logicagencyinc.com' },
  mainEntityOfPage: pageUrl,
  datePublished: '2026-06-17',
  dateModified: '2026-06-22',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Logic Agency', item: 'https://www.logicagencyinc.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.logicagencyinc.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'First 30 Days of Fractional Ops', item: pageUrl },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export const metadata = {
  title: 'First 30 Days of Fractional Ops | Logic Agency',
  description,
  keywords: 'first 30 days fractional operations, fractional supply chain operations audit, embedded ops team CPG, fractional operations onboarding',
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: 'article',
    publishedTime: '2026-06-17',
    modifiedTime: '2026-06-22',
    authors: ['Jordan Harper'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav variant="guide" />

      <section className="b-hero gd">
        <div className="b-hero-inner">
          <div className="breadcrumb">
            <a href="/">Logic Agency</a> &nbsp;/&nbsp; <a href="/blog">Blog</a>
          </div>
          <span className="b-tag">Embedded Operations</span>
          <h1>What Happens in the First 30 Days of Fractional Ops</h1>
          <p className="b-lede">The first month of fractional supply chain operations should not be a discovery theater exercise. It should make the operating system visible, show where margin is leaking, and clarify who owns the next move.</p>
          <div className="b-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Jun 2026</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      <div className="b-feat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/port-sourcing.jpg" alt="First 30 days of fractional supply chain operations for CPG brands" className="b-feat-img" />
      </div>

      <div className="article gl">
        <div className="article-inner">
          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>A good fractional ops engagement starts with visibility, not a strategy deck.</li>
              <li>The first 30 days should map vendors, inventory, freight, packaging, landed cost, and ownership.</li>
              <li>The goal is not to fix everything immediately. The goal is to identify what must move first.</li>
              <li>If no one can name the top operational risks after 30 days, the engagement is not working.</li>
            </ul>
          </div>

          <p>The guide to fractional supply chain operations explains the model. This post is narrower: what should actually happen once a fractional team starts working inside the business?</p>

          <h2>Week 1: Build the Operating Map</h2>
          <p>Most scaling brands do not have an operations problem in one place. They have small problems spread across suppliers, packaging specs, 3PL handoffs, inventory, freight, and reporting. The first job is to make the system visible.</p>
          <p>That means collecting the supplier list, open purchase orders, SKU-level inventory, packaging specs, 3PL agreements, freight invoices, retail requirements, chargeback history, and current reporting cadence.</p>
          <p>This is not paperwork for its own sake. It shows where the brand is operating from memory instead of from a system.</p>

          <h2>Week 2: Find the Urgent Risks</h2>
          <p>After the map exists, the next step is triage. Which production run is late? Which SKU is at stockout risk? Which supplier has no backup? Which shipment is being expedited because a reorder point was missed?</p>
          <p>A strong fractional ops partner should be able to separate noise from risk quickly. Not every issue deserves immediate work. Some are annoying. Some are expensive. Some are existential for the next 60 days.</p>
          <p>The first month should produce a short risk list that leadership can understand without a 40-slide deck.</p>

          <h2>Week 3: Establish Ownership</h2>
          <p>Operational problems compound when nobody owns them. A supplier issue becomes an inventory issue. An inventory issue becomes a rush freight issue. A rush freight issue becomes a margin issue. Everyone saw part of it. Nobody owned the system.</p>
          <p>By week three, ownership should be explicit. Who manages supplier communication? Who approves packaging changes? Who tracks reorder points? Who owns the 3PL relationship? Who reviews freight invoices? Who escalates retail compliance issues?</p>
          <p>If the answer is still "the founder," the operating model has not changed.</p>

          <h2>Week 4: Set the 60-Day Fix List</h2>
          <p>The first 30 days should end with a practical operating plan. Not a theoretical roadmap. A prioritized fix list.</p>
          <p>That list usually includes a few fast moves: update SKU-level reorder points, verify actual supplier lead times, clean packaging specs, move recurring freight review onto a cadence, document 3PL escalation paths, and identify the highest-risk supplier or packaging component.</p>
          <p>Some work takes longer. But the business should leave the first month with less ambiguity than it had when the engagement started.</p>

          <h2>What Good Looks Like</h2>
          <p>Good fractional operations creates calm through clarity. The founder stops being the only person who knows which supplier is late. The 3PL relationship stops living in email threads. Packaging decisions stop moving without landed-cost visibility.</p>
          <p>The team can see the system. Then it can improve the system.</p>

          <h2>What Bad Looks Like</h2>
          <p>Bad fractional operations looks like consulting with a retainer. Lots of meetings. Lots of language. Very little movement.</p>
          <p>If the first 30 days produce only observations, the model is too passive. The work should move from audit to execution quickly.</p>

          <h2>The Point</h2>
          <p>The first month is not about solving every supply chain problem. It is about replacing operational fog with a visible system and a sequenced plan.</p>
          <p>That is the real test of fractional ops: does the business become easier to see, easier to manage, and easier to improve?</p>

          <h2 id="faq" className="b-faq-h">FAQ</h2>
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={faqs} />
        </div>
      </section>

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
