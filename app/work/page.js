import Image from 'next/image';
import Link from 'next/link';
import EmailButton from '@/components/EmailButton';
import FooterHome from '@/components/FooterHome';
import Nav from '@/components/Nav';
import SkipLink from '@/components/SkipLink';
import styles from './page.module.css';

export const metadata = {
  title: 'Selected Work — Logic Agency Inc.',
  description: 'Selected packaging, manufacturing, and supply chain work from Logic Agency, including Epicutis and Audio Enhancement.',
  alternates: { canonical: 'https://credyset.github.io/logic-agency-site-concept/work/' },
};

const featuredWork = [
  {
    number: '01',
    name: 'Epicutis',
    category: 'Luxury skincare',
    title: 'A packaging request became the operating system behind growth.',
    summary: 'Logic’s role expanded from packaging development into managed inventory, landed-cost clarity, co-manufacturer coordination, and a more predictable logistics model.',
    image: '/logic-agency-site-concept/images/epicutis.jpg',
    imageAlt: 'Epicutis skincare products and packaging',
    href: '/work/epicutis',
    scope: ['Packaging development', 'Managed inventory', 'Logistics normalization'],
    highlights: ['3→21+ SKUs supported', 'Managed inventory', 'Lean-team continuity'],
    evidence: [
      ['Growth constraint', 'A three-SKU packaging program expanded into 21+ SKUs, displays, and a more complex replenishment system.'],
      ['What Logic owned', 'Packaging development, sourcing, specifications, and the supplier work required to keep the system consistent.'],
      ['Operating outcome', 'Managed inventory and a normalized logistics rhythm supported expansion without forcing a larger internal packaging team.'],
    ],
  },
  {
    number: '02',
    name: 'Audio Enhancement',
    category: 'Education hardware',
    title: 'A supplier bottleneck was resolved without losing operating continuity.',
    summary: 'Logic stabilized current inventory, qualified a manufacturing partner, and managed the operating bridge between suppliers as quality and capacity pressure increased.',
    image: '/logic-agency-site-concept/images/audio-enhancement.jpg',
    imageAlt: 'Audio Enhancement classroom product packaging',
    href: '/work/audio-enhancement',
    scope: ['Quality containment', 'Supplier transition', 'Manufacturing scale'],
    highlights: ['100% pilot-run QC', 'Parallel supplier transition', 'Continuity protected'],
    evidence: [
      ['Growth constraint', 'Quality drift and a supplier capacity ceiling began putting a highly visible product component at risk.'],
      ['What Logic owned', 'Containment, alternative-supplier qualification, sampling, pilot runs, and inspection against the approved standard.'],
      ['Operating outcome', 'The transition moved in parallel with current production so the next manufacturing layer could be validated before the handoff.'],
    ],
  },
];

const additionalExperience = [
  'Adidas',
  'Vans',
  'Target',
  'Spotify',
  'A24',
  'Barebones',
  'Kiki World',
  'Komos',
  'Sleepme',
  'Echo',
  'Artilect',
  'LifeVantage',
];

export default function WorkPage() {
  return (
    <>
      <SkipLink className={styles.skipLink} />
      <Nav variant="guide" />

      <main className={styles.page} id="main-content" tabIndex={-1}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Selected work / Growth under pressure</p>
              <h1>Growth makes the hidden operating problem <span>visible.</span></h1>
              <p className={styles.heroLede}>A margin, cost, or quality issue is often the first signal. The real work is finding the system underneath it—and staying accountable while that system is rebuilt.</p>
              <div className={styles.actions}>
                <EmailButton subject="Tell Logic What's Not Working" className={`${styles.button} ${styles.buttonPrimary}`}>
                  Tell us what&apos;s not working <span aria-hidden="true">→</span>
                </EmailButton>
                <a
                  className={`${styles.button} ${styles.buttonSecondary}`}
                  href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a 15-minute call <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <aside className={styles.heroDiagram} aria-label="The pattern behind Logic's featured work">
              <div className={styles.diagramHeader}>
                <span>Operating signal</span>
                <span>01—03</span>
              </div>
              <ol>
                <li>
                  <span>01</span>
                  <div><strong>Growth</strong><small>Complexity increases</small></div>
                </li>
                <li>
                  <span>02</span>
                  <div><strong>Friction</strong><small>Margin · Cost · Quality</small></div>
                </li>
                <li>
                  <span>03</span>
                  <div><strong>Control</strong><small>One accountable team</small></div>
                </li>
              </ol>
              <p>The visible issue starts the conversation. The operating system is what we fix.</p>
            </aside>
          </div>
        </section>

        <section className={styles.featured} aria-labelledby="featured-work-title">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrowDark}>Featured engagements</p>
              <h2 id="featured-work-title">Two growth stories. <span>One operating principle.</span></h2>
              <p>Packaging is often the most tangible part of the problem. It also exposes the supplier, quality, inventory, and decision systems around it.</p>
            </div>

            <div className={styles.caseList}>
              {featuredWork.map((project) => (
                <article className={styles.caseCard} key={project.name}>
                  <div className={styles.caseImage}>
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={1600}
                      height={900}
                      sizes="(max-width: 860px) 100vw, 48vw"
                    />
                    <span>{project.number}</span>
                  </div>
                  <div className={styles.caseBody}>
                    <p className={styles.caseMeta}>{project.name} / {project.category}</p>
                    <h3>{project.title}</h3>
                    <p className={styles.caseSummary}>{project.summary}</p>
                    <ul className={styles.scopeList} aria-label={`${project.name} engagement scope`}>
                      {project.scope.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <ul className={styles.evidenceStrip} aria-label={`${project.name} evidence highlights`}>
                      {project.highlights.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <details className={styles.evidenceReveal}>
                      <summary>
                        <span>Trace the operating evidence</span>
                        <i aria-hidden="true">+</i>
                      </summary>
                      <div className={styles.evidenceGrid}>
                        {project.evidence.map(([label, copy], index) => (
                          <article key={label}>
                            <span>{String(index + 1).padStart(2, '0')} / {label}</span>
                            <p>{copy}</p>
                          </article>
                        ))}
                      </div>
                    </details>
                    <Link className={styles.caseLink} href={project.href}>
                      Read the full case study <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pattern} aria-labelledby="pattern-title">
          <div className={styles.sectionInner}>
            <div className={styles.patternHeading}>
              <p className={styles.eyebrow}>What the work reveals</p>
              <h2 id="pattern-title">The problem is rarely isolated.</h2>
            </div>
            <ol className={styles.patternGrid}>
              <li>
                <span>01</span>
                <h3>Growth changes the operating conditions.</h3>
                <p>More volume, more SKUs, or broader distribution puts new pressure on suppliers, specifications, costs, and internal capacity.</p>
              </li>
              <li>
                <span>02</span>
                <h3>A visible failure points to a deeper constraint.</h3>
                <p>A quality issue may be a supplier-capacity problem. A margin issue may begin with materials, packout, freight, or inventory decisions.</p>
              </li>
              <li>
                <span>03</span>
                <h3>Implementation is where the answer becomes real.</h3>
                <p>Logic stays involved across specifications, suppliers, production, quality, and the handoffs required to put the recommendation into use.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className={styles.experience} aria-labelledby="experience-title">
          <div className={styles.sectionInner}>
            <div className={styles.experienceIntro}>
              <p className={styles.eyebrowDark}>Selected project experience</p>
              <h2 id="experience-title">Across product categories and stages of scale.</h2>
              <p>This is a partial view of brands and product teams Logic has worked alongside. Detailed outcomes are shown only in approved case studies.</p>
            </div>
            <ul className={styles.experienceGrid}>
              {additionalExperience.map((name, index) => (
                <li key={name}><span>{String(index + 1).padStart(2, '0')}</span>{name}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="work-cta-title">
          <div className={styles.ctaInner}>
            <p className={styles.ctaLabel}>Start with the signal</p>
            <h2 id="work-cta-title">What is growth putting under pressure?</h2>
            <p>Tell us where margin, cost, quality, or execution is starting to break. We&apos;ll help determine whether the problem sits in the product, the factory, or the operating system between them.</p>
            <div className={styles.actions}>
              <EmailButton subject="Tell Logic What's Not Working" className={`${styles.button} ${styles.buttonDark}`}>
                Tell us what&apos;s not working <span aria-hidden="true">→</span>
              </EmailButton>
              <a
                className={`${styles.button} ${styles.buttonOutlineDark}`}
                href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 15-minute call <span aria-hidden="true">↗</span>
              </a>
            </div>
            <Link className={styles.tertiaryLink} href="/who-we-help">
              Not ready for a call? See whether the pattern matches <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <FooterHome />
    </>
  );
}
