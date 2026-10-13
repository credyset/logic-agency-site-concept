import Nav from '@/components/Nav';
import SkipLink from '@/components/SkipLink';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';
import GuideTabs from '@/components/GuideTabs';
import GuideStickyToc from '@/components/GuideStickyToc';
import GuideMarginChips from '@/components/GuideMarginChips';
import GuideScrollReveal from '@/components/GuideScrollReveal';

const BASE_PATH = '/logic-agency-site-concept';
const CONCEPT_ORIGIN = 'https://credyset.github.io';
const SITE = `${CONCEPT_ORIGIN}${BASE_PATH}`;
const ORGANIZATION_URL = 'https://www.logicagencyinc.com';
const DEFAULT_LOGO = `${SITE}/images/og-homepage.jpg`;

// GitHub Pages serves the static export beneath BASE_PATH with trailing slashes.
// Keep concept navigation self-contained instead of leaking to the live site.
export function conceptHref(href = '') {
  if (
    !href ||
    href.startsWith('#') ||
    href.startsWith(BASE_PATH) ||
    /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)
  ) {
    return href;
  }
  if (!href.startsWith('/')) return href;

  const match = href.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
  const pathname = match?.[1] || '/';
  const query = match?.[2] || '';
  const hash = match?.[3] || '';

  if (pathname === '/') return `${BASE_PATH}/${query}${hash}`;
  const hasExtension = /\.[a-z\d]+$/i.test(pathname);
  const route = hasExtension || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return `${BASE_PATH}${route}${query}${hash}`;
}

function conceptHtml(html = '') {
  return html.replace(
    /href=(["'])(\/(?!\/)[^"']*)\1/g,
    (_match, quote, href) => `href=${quote}${conceptHref(href)}${quote}`,
  );
}

function plainText(html = '') {
  return html.replace(/<[^>]+>/g, '');
}

// Block types this renderer can display. Keep in sync with the switch below and
// with scripts/verify-guide-render.mjs, which fails the build if a guide uses a
// type not listed here.
export const SUPPORTED_BLOCK_TYPES = new Set([
  'p',
  'h3',
  'list',
  'callout',
  'cards',
  'steps',
  'table',
  'econ',
  'math',
  'formula',
  'checklist',
  'redFlags',
  'caseStudy',
  'wired',
  'stages',
  'timeline',
  'cta',
  'diagram',
  'tabs',
  'revealCards',
  'example',
  'chips',
]);

function schemaFor(guide) {
  const url = `${CONCEPT_ORIGIN}${conceptHref(`/guides/${guide.slug}`)}`;
  // The imported guide-specific OG assets are not part of the concept repo.
  // Use the concept's existing image rather than emitting broken image URLs.
  const image = DEFAULT_LOGO;
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guide.title,
      description: guide.description,
      image,
      author: {
        '@type': 'Person',
        name: 'Jordan Harper',
        jobTitle: 'Founder & CEO',
        url: ORGANIZATION_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Logic Agency Inc.',
        url: ORGANIZATION_URL,
        logo: { '@type': 'ImageObject', url: DEFAULT_LOGO },
      },
      mainEntityOfPage: url,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      keywords: guide.keywords,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: plainText(item.a) },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Logic Agency', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE}/guides/` },
        { '@type': 'ListItem', position: 3, name: guide.title, item: url },
      ],
    },
  ];

  // Auto-generate HowTo schema when a section contains a steps block.
  for (const section of guide.sections || []) {
    const stepsBlock = section.blocks?.find((b) => b.type === 'steps');
    if (stepsBlock?.items?.length) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: section.heading,
        description: section.lead || guide.description,
        step: stepsBlock.items.map((step, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: step.title,
          text: (step.body || '').replace(/<[^>]+>/g, ''),
        })),
      });
      break;
    }
  }
  return schemas;
}

function Paragraph({ html }) {
  return <p dangerouslySetInnerHTML={{ __html: conceptHtml(html) }} />;
}

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return <Paragraph html={block.html} />;

    case 'h3':
      return <h3 id={block.id}>{block.text}</h3>;

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: conceptHtml(item) }} />
          ))}
        </Tag>
      );
    }

    case 'callout':
      return (
        <div className={`callout${block.tone ? ` ${block.tone}` : ''}`}>
          {block.body.map((line, i) => (
            <p key={i}>
              {i === 0 && block.label && <strong>{block.label} </strong>}
              <span dangerouslySetInnerHTML={{ __html: conceptHtml(line) }} />
            </p>
          ))}
        </div>
      );

    case 'cards':
      return (
        <div className="cd-grid">
          {block.items.map((card, i) => (
            <div className="cd-card" key={i}>
              <div className="cd-num">{i + 1}</div>
              <h3>{card.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: conceptHtml(card.body) }} />
            </div>
          ))}
        </div>
      );

    case 'steps':
      return (
        <div className="audit-steps">
          {block.items.map((step, i) => (
            <div className="audit-step" key={i}>
              <div className="audit-n">{i + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: conceptHtml(step.body) }} />
              </div>
            </div>
          ))}
        </div>
      );

    case 'table':
      return (
        <div className="ba-table" style={{ overflowX: 'auto', margin: '32px 0' }}>
          <table>
            <thead>
              <tr>{block.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} dangerouslySetInnerHTML={{ __html: conceptHtml(cell) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'econ': {
      const cols = block.columns;
      const gridTemplate = `1fr ${cols.map(() => '1fr').join(' ')}`;
      return (
        <div className="econ">
          <div className="econ-header" style={{ gridTemplateColumns: gridTemplate }}>
            <div>Line Item</div>
            {cols.map((c, i) => <div key={i}>{c}</div>)}
          </div>
          {block.rows.map((row, i) => (
            <div className="econ-row" key={i} style={{ gridTemplateColumns: gridTemplate }}>
              <div>{row.label}</div>
              {row.values.map((v, j) => (
                <div key={j} className={v.tone || ''} dangerouslySetInnerHTML={{ __html: conceptHtml(v.text) }} />
              ))}
            </div>
          ))}
        </div>
      );
    }

    case 'math':
      return (
        <div className="math-box">
          {block.heading && <h3>{block.heading}</h3>}
          {block.rows.map((r, i) => (
            <div className="math-row" key={i}>
              <div className="math-label" dangerouslySetInnerHTML={{ __html: conceptHtml(r.label) }} />
              <div className="math-val" dangerouslySetInnerHTML={{ __html: conceptHtml(r.value) }} />
            </div>
          ))}
          {block.note && <p className="math-note" dangerouslySetInnerHTML={{ __html: conceptHtml(block.note) }} />}
        </div>
      );

    case 'formula':
      return (
        <div className="fc-box">
          {block.heading && <h3>{block.heading}</h3>}
          <div className="fc-formula">{block.formula}</div>
          {block.notes?.map((n, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: conceptHtml(n) }} />
          ))}
        </div>
      );

    case 'checklist':
      return (
        <div className="check-grid">
          {block.items.map((item, i) => (
            <div className="check-item" key={i}>
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: conceptHtml(item.body) }} />
            </div>
          ))}
        </div>
      );

    case 'redFlags':
      return (
        <div className="surp-grid">
          {block.items.map((item, i) => (
            <div className="surp" key={i}>
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: conceptHtml(item.body) }} />
            </div>
          ))}
        </div>
      );

    case 'caseStudy':
      return (
        <div className="case-inline">
          {block.tag && (
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#FF600A', marginBottom: 14 }}>
              {block.tag}
            </div>
          )}
          <h3>{block.heading}</h3>
          {block.body.map((line, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: conceptHtml(line) }} />
          ))}
        </div>
      );

    case 'wired':
      return (
        <div className="wired">
          {block.tag && <div className="wired-title">{block.tag}</div>}
          <h3>{block.heading}</h3>
          {block.body?.map((line, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: conceptHtml(line) }} />
          ))}
          {block.items && (
            <ul>
              {block.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: conceptHtml(item) }} />
              ))}
            </ul>
          )}
        </div>
      );

    case 'stages':
      return (
        <div className="stages" style={{ margin: '40px 0' }}>
          {block.items.map((stage, i) => (
            <div
              className={`stage stage-card stage-${i + 1}`}
              key={i}
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: '32px 36px',
                margin: '16px 0',
                borderLeft: `4px solid ${i === 0 ? '#DFDFDF' : i === 1 ? '#FF600A' : '#212121'}`,
              }}
            >
              <div className="stage-header">
                <span className="stage-tag">Stage {i + 1}</span>
                {stage.range && <span className="stage-vol">{stage.range}</span>}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 10 }}>{stage.title}</h3>
              <p
                style={{ fontSize: 15, lineHeight: 1.7, color: '#3E3E3E', margin: 0 }}
                dangerouslySetInnerHTML={{ __html: conceptHtml(stage.body) }}
              />
            </div>
          ))}
        </div>
      );

    case 'timeline':
      return (
        <div style={{ margin: '32px 0' }}>
          {block.items.map((item, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-dur">{item.duration}</div>
              <div className="tl-detail">
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: conceptHtml(item.body) }} />
              </div>
            </div>
          ))}
        </div>
      );

    case 'cta':
      return (
        <div className="callout" style={{ background: 'var(--dk)', borderLeft: '4px solid #FF600A', color: '#fff' }}>
          <p style={{ color: 'rgba(255,255,255,.9)', marginBottom: 16 }}>
            <strong style={{ color: '#fff' }}>{block.label || 'Talk it through with Logic.'}</strong>
            {' '}
            <span dangerouslySetInnerHTML={{ __html: conceptHtml(block.body) }} />
          </p>
          <p style={{ marginBottom: 0 }}>
            <a href={conceptHref(block.href || '/#cta')} style={{ color: '#FF600A', fontWeight: 700, textDecoration: 'none' }}>
              {block.linkText || 'See how Logic works →'}
            </a>
          </p>
        </div>
      );

    case 'diagram': {
      const figure = (
        <>
          <div
            className={`guide-diagram${block.animate ? ' guide-diagram-animate' : ''}`}
            style={{
              background: block.background || 'var(--dk)',
              borderRadius: 16,
              padding: '32px 24px',
              overflowX: 'auto',
            }}
            dangerouslySetInnerHTML={{ __html: block.svg }}
          />
          {block.caption && (
            <figcaption style={{ fontSize: 13, color: 'var(--gr)', textAlign: 'center', marginTop: 12, fontStyle: 'italic' }}>
              {block.caption}
            </figcaption>
          )}
        </>
      );
      if (block.animate) {
        return (
          <GuideScrollReveal className="guide-diagram-reveal">
            <figure style={{ margin: '40px 0' }}>{figure}</figure>
          </GuideScrollReveal>
        );
      }
      return <figure style={{ margin: '40px 0' }}>{figure}</figure>;
    }

    case 'tabs':
      return <GuideTabs label={block.label} tabs={block.tabs} />;

    case 'revealCards':
      return (
        <div className="reveal-grid">
          {block.items.map((card, i) => (
            <details className="reveal-card" key={i}>
              <summary className="reveal-card-summary">
                {card.tag && <span className="reveal-card-tag">{card.tag}</span>}
                <span className="reveal-card-title">{card.title}</span>
                <span className="reveal-card-hint" aria-hidden="true">
                  <span className="reveal-card-preview">{card.preview || 'Details'}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div
                className="reveal-card-body"
                dangerouslySetInnerHTML={{ __html: conceptHtml(card.body) }}
              />
            </details>
          ))}
        </div>
      );

    case 'example':
      return (
        <details className="worked-example">
          <summary>
            <span className="we-label">Worked example</span>
            <span className="we-title">{block.title}</span>
            <span className="we-toggle" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </summary>
          <div className="we-body">
            {block.body?.map((line, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: conceptHtml(line) }} />
            ))}
            {block.rows && (
              <div className="we-rows">
                {block.rows.map((r, i) => (
                  <div className="we-row" key={i}>
                    <div className="we-row-label" dangerouslySetInnerHTML={{ __html: conceptHtml(r.label) }} />
                    <div
                      className={`we-row-val${r.tone ? ' ' + r.tone : ''}`}
                      dangerouslySetInnerHTML={{ __html: conceptHtml(r.value) }}
                    />
                  </div>
                ))}
              </div>
            )}
            {block.result && (
              <div className="we-result" dangerouslySetInnerHTML={{ __html: conceptHtml(block.result) }} />
            )}
          </div>
        </details>
      );

    case 'chips':
      return <GuideMarginChips {...block} />;

    default:
      return null;
  }
}

function GuideSection({ section }) {
  return (
    <section id={section.id}>
      <h2>{section.heading}</h2>
      {section.lead && <p className="section-lead" dangerouslySetInnerHTML={{ __html: conceptHtml(section.lead) }} />}
      {section.blocks?.map((block, i) => <Block block={block} key={i} />)}
    </section>
  );
}

export default function EvergreenGuidePage({ guide }) {
  const schemas = schemaFor(guide);
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <SkipLink />
      <Nav variant="guide" />

      <main id="main-content" tabIndex={-1}>
      <section className="a-hero gl">
        <div className="a-hero-inner">
          <div className="breadcrumb"><a href={conceptHref('/')}>Logic Agency</a>&nbsp;/&nbsp;<a href={conceptHref('/guides')}>Guides</a></div>
          <h1>{guide.titleBefore} <span className="o">{guide.titleAccent}</span></h1>
          <p className="a-lede">{guide.lede}</p>
          <div className="a-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>{guide.updated}</span>
            <span>{guide.readTime}</span>
            <span>Guides</span>
          </div>
        </div>
      </section>

      <div className={`article gl${guide.stickyToc ? ' article-with-sticky-toc' : ''}`}>
        {guide.stickyToc && <GuideStickyToc sections={guide.sections} />}
        <div className="article-inner">
          {guide.tldr && (
            <div className="wired" style={{ marginTop: 0, marginBottom: 32 }}>
              <div className="wired-title">TL;DR</div>
              <h3 style={{ marginBottom: 20 }}>What you&apos;ll take away</h3>
              <ul>
                {guide.tldr.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: conceptHtml(point) }} />
                ))}
              </ul>
            </div>
          )}

          <p className="evidence-note">
            <strong>Evidence note:</strong> Linked external claims point to the named primary source where available.
            Unattributed cost, margin, timing, and operating ranges are Logic Agency planning benchmarks drawn from
            client work, supplier quotes, and operating models. They are directional, not guaranteed market averages;
            validate them against current contracts, quotes, regulations, and channel requirements.
          </p>

          {guide.audience && (
            <div className="callout" style={{ marginTop: 0, marginBottom: 40 }}>
              <p><strong>Who this is for:</strong> {guide.audience}</p>
            </div>
          )}

          <div className="toc">
            <h3>What&apos;s Inside</h3>
            <ul className="toc-list">
              {guide.sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.heading}</a></li>
              ))}
            </ul>
          </div>

          {guide.sections.map((section) => <GuideSection section={section} key={section.id} />)}

          {guide.keyTakeaways && (
            <div className="wired" style={{ marginTop: 56 }}>
              <div className="wired-title">Key Takeaways</div>
              <h3 style={{ marginBottom: 20 }}>The operator&apos;s summary</h3>
              <ul>
                {guide.keyTakeaways.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: conceptHtml(point) }} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={guide.faq.map((item) => ({ ...item, a: plainText(item.a) }))} />
        </div>
      </section>

      <section className="cta-band gd">
        <div className="cta-inner">
          <h2>{guide.ctaHeading || (<>Need to turn the framework into <span className="o">operating rhythm?</span></>)}</h2>
          <p>{guide.ctaCopy || 'Logic Agency gives scaling consumer brands senior supply chain and packaging operations without forcing an early full-time hire.'}</p>
          <div className="cta-btns">
            <a href={conceptHref('/#cta')} className="bt bo">Tell Us What’s Not Working →</a>
            <a href={conceptHref('/guides')} className="bt bw">Browse All Guides</a>
          </div>
          <span className="cta-sub">Logic Agency Inc. · Embedded Packaging · Supply Chain · Operations</span>
        </div>
      </section>

      <section className="related gl">
        <div className="related-inner">
          <h3>Keep Reading</h3>
          <div className="related-links">
            {guide.related.map((item) => (
              <a className="related-link" href={conceptHref(item.href)} key={item.href}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      </main>

      <FooterHome />
    </>
  );
}
