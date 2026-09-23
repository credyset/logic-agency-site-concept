import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

function schemaFor(guide) {
  const url = `https://www.logicagencyinc.com/guides/${guide.slug}`;
  return {
    article: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.description,
      author: { '@type': 'Organization', name: 'Logic Agency Inc.', url: 'https://www.logicagencyinc.com' },
      publisher: { '@type': 'Organization', name: 'Logic Agency Inc.' },
      mainEntityOfPage: url,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      keywords: guide.keywords,
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Logic Agency', item: 'https://www.logicagencyinc.com' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.logicagencyinc.com/guides' },
        { '@type': 'ListItem', position: 3, name: guide.title, item: url },
      ],
    },
  };
}

function GuideSection({ section }) {
  return (
    <section id={section.id}>
      <h2>{section.heading}</h2>
      {section.lead && <p>{section.lead}</p>}
      {section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {section.cards && (
        <div className="cd-grid">
          {section.cards.map((card, index) => (
            <div className="cd-card" key={card.title}>
              <div className="cd-num">{index + 1}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      )}
      {section.steps && (
        <div className="audit-steps">
          {section.steps.map((step, index) => (
            <div className="audit-step" key={step.title}>
              <div className="audit-n">{index + 1}</div>
              <div><h4>{step.title}</h4><p>{step.body}</p></div>
            </div>
          ))}
        </div>
      )}
      {section.table && (
        <div className="ba-table" style={{ overflowX: 'auto', margin: '32px 0' }}>
          <table>
            <thead><tr>{section.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
            <tbody>{section.table.rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
      {section.callout && <div className={`callout${section.calloutTone ? ` ${section.calloutTone}` : ''}`}><p><strong>{section.callout.label}</strong> {section.callout.body}</p></div>}
    </section>
  );
}

export default function EvergreenGuidePage({ guide }) {
  const schemas = schemaFor(guide);
  return (
    <>
      {Object.values(schemas).map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <Nav variant="guide" />
      <section className="a-hero gl">
        <div className="a-hero-inner">
          <div className="breadcrumb"><a href="/">Logic Agency</a> &nbsp;/&nbsp; <a href="/guides">Guides</a></div>
          <h1>{guide.titleBefore} <span className="o">{guide.titleAccent}</span></h1>
          <p className="a-lede">{guide.lede}</p>
          <div className="a-meta"><span><strong>Jordan Harper, Logic Agency Inc.</strong></span><span>{guide.updated}</span><span>{guide.readTime}</span><span>Guides</span></div>
        </div>
      </section>
      <div className="article gl">
        <div className="article-inner">
          <div className="toc"><h3>What&apos;s Inside</h3><ul className="toc-list">{guide.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>)}</ul></div>
          {guide.sections.map((section) => <GuideSection key={section.id} section={section} />)}
        </div>
      </div>
      <section className="guide-faq-section"><div className="guide-faq-inner"><h2>Frequently Asked Questions</h2><GuideFaqAccordion items={guide.faq} /></div></section>
      <section className="cta-band gd"><div className="cta-inner"><h2>Need to turn the framework into <span className="o">operating rhythm?</span></h2><p>Logic Agency gives scaling consumer brands senior supply chain and packaging operations without forcing an early full-time hire.</p><div className="cta-btns"><a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Start a Conversation →</a><a href="/#pricing" className="bt bw">See Plans &amp; Pricing</a></div><span className="cta-sub">Logic Agency Inc. · Packaging &amp; Supply Chain Ops on a Monthly Retainer</span></div></section>
      <section className="related gl"><div className="related-inner"><h3>Keep Reading</h3><div className="related-links">{guide.related.map((item) => <a className="related-link" href={item.href} key={item.href}><h4>{item.title}</h4><p>{item.description}</p></a>)}</div></div></section>
      <FooterHome />
    </>
  );
}
