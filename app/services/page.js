import Link from 'next/link';
import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import FadeIn from '@/components/FadeIn';
import EmailButton from '@/components/EmailButton';
import ProductSystemJourney from '@/components/ProductSystemJourney';
import SkipLink from '@/components/SkipLink';
import styles from './services.module.css';

export const metadata = {
  title: 'Services — Embedded Packaging, Supply Chain & Operations | Logic Agency',
  description: 'One embedded team for packaging development, manufacturing and quality, and supply chain operations. Logic owns Product and Make, and coordinates Move for scaling consumer brands.',
  alternates: {
    canonical: 'https://credyset.github.io/logic-agency-site-concept/services/',
  },
  openGraph: {
    title: 'Services — One Embedded Team | Logic Agency',
    description: 'Packaging, manufacturing, quality, and supply chain execution for scaling physical-product brands.',
    url: 'https://credyset.github.io/logic-agency-site-concept/services/',
    type: 'website',
  },
};

const disciplines = [
  {
    number: '01',
    name: 'Product & Packaging Development',
    promise: 'Turn the brand idea into a producible, cost-aware packaging system.',
    scope: 'Logic-owned',
    description: 'Packaging is a co-equal discipline—and often the clearest place to see how product decisions, margin, manufacturing, and supply chain performance connect.',
    items: [
      'Structural packaging and component development',
      'Materials, finishes, fit, and form decisions',
      'Specification development and cost engineering',
      'Supplier sourcing, sampling, and qualification',
      'Transit, compatibility, and performance testing',
    ],
  },
  {
    number: '02',
    name: 'Manufacturing & Quality',
    promise: 'Build the product with the right factory, standards, and controls.',
    scope: 'Logic-owned',
    description: 'We translate intent into manufacturing requirements, manage the path to production, and hold suppliers accountable to the approved cost, quality, and calendar.',
    items: [
      'Factory identification, vetting, and onboarding',
      'Tooling, prototypes, samples, and pilot runs',
      'Quality standards and inspection planning',
      'Production oversight and corrective action',
      'Landed-cost and supplier-performance analysis',
    ],
  },
  {
    number: '03',
    name: 'Supply Chain & Operations',
    promise: 'Coordinate the handoffs that move product into the market reliably.',
    scope: 'Coordinated',
    description: 'We coordinate logistics partners and operating workflows so freight, inventory, compliance, and fulfillment support growth instead of eroding margin.',
    items: [
      'Freight, customs, and 3PL coordination',
      'Inventory planning and replenishment workflows',
      'Vendor ownership and operating cadence',
      'Retail packaging and compliance readiness',
      'Risk planning, reporting, and issue resolution',
    ],
  },
];

const engagementSteps = [
  {
    number: '01',
    label: 'Diagnose',
    copy: 'We inspect cost, quality, suppliers, packaging, workflows, and growth constraints to find the operating issue behind the visible symptom.',
  },
  {
    number: '02',
    label: 'Define',
    copy: 'We define specifications, decisions, owners, budgets, risk controls, and the sequence required to improve performance.',
  },
  {
    number: '03',
    label: 'Deliver',
    copy: 'We work alongside your team and partners through implementation—driving the plan, resolving issues, and reporting what changes next.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <SkipLink className={styles.skipLink} />
      <Nav />
      <main className={styles.page} id="main-content" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="services-title">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>What we do / embedded execution</p>
              <h1 id="services-title">Packaging, supply chain, and operations—<span>inside one accountable team.</span></h1>
              <p className={styles.heroLead}>Logic embeds with scaling physical-product brands to solve the margin, cost, and quality problems that appear when growth outruns the operating system.</p>
              <div className={styles.heroActions}>
                <EmailButton subject="What’s Not Working — Logic Agency" className={styles.primaryCta}>Tell us what&apos;s not working <span aria-hidden="true">→</span></EmailButton>
                <a className={styles.secondaryCta} href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" target="_blank" rel="noopener noreferrer">Book a 15-minute call <span aria-hidden="true">↗</span></a>
              </div>
            </div>

            <div className={styles.heroConsole} role="img" aria-label="Logic connects packaging development, manufacturing and quality, and supply chain operations as one embedded team">
              <div className={styles.consoleMeta}><span>LOGIC / OPERATING UNIT</span><span>03 DISCIPLINES</span></div>
              <div className={styles.consoleCore}>
                <span className={styles.coreTag}>Embedded team</span>
                <strong>One owner across the handoffs.</strong>
                <p>Hands-on decisions and implementation—not a report passed back to your team.</p>
              </div>
              <ol className={styles.consoleList}>
                <li><span>01</span><div><strong>Packaging</strong><small>Development + sourcing</small></div><em>OWN</em></li>
                <li><span>02</span><div><strong>Manufacturing</strong><small>Factory + quality</small></div><em>OWN</em></li>
                <li><span>03</span><div><strong>Operations</strong><small>Freight + inventory</small></div><em>COORD.</em></li>
              </ol>
            </div>
          </div>
        </section>

        <section className={styles.proofBand} aria-label="Logic differentiators">
          <div><span>01</span><strong>One accountable team</strong></div>
          <div><span>02</span><strong>Hands-on implementation</strong></div>
          <div><span>03</span><strong>20+ years of operator experience</strong></div>
          <div><span>04</span><strong>Global supplier network</strong></div>
        </section>

        <section className={styles.disciplines} aria-labelledby="disciplines-title">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Three connected disciplines</p>
              <h2 id="disciplines-title">What the team <span>sells and delivers.</span></h2>
            </div>
            <p>Each discipline can solve a defined problem. Their real value appears when the same team can see—and manage—the consequences across all three.</p>
          </div>

          <FadeIn className={styles.disciplineGrid}>
            {disciplines.map((discipline) => (
              <article className={styles.disciplineCard} key={discipline.name}>
                <div className={styles.cardMeta}><span>{discipline.number}</span><em>{discipline.scope}</em></div>
                <h3>{discipline.name}</h3>
                <p className={styles.cardPromise}>{discipline.promise}</p>
                <p className={styles.cardDescription}>{discipline.description}</p>
                <ul>
                  {discipline.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </FadeIn>
        </section>

        <section className={styles.system} aria-labelledby="system-title">
          <div className={styles.systemInner}>
            <div className={styles.systemHeading}>
              <p className={styles.eyebrow}>The product-to-market system</p>
              <h2 id="system-title">One path. <span>Different levels of ownership.</span></h2>
              <p>The framework shows how the work connects without overstating where Logic&apos;s responsibility begins or ends.</p>
            </div>

            <ProductSystemJourney />
          </div>
        </section>

        <section className={styles.engagement} aria-labelledby="engagement-title">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>How we work</p>
              <h2 id="engagement-title">A clear method. <span>From diagnosis through implementation.</span></h2>
            </div>
            <p>Operational problems cross suppliers, functions, and production cycles. Logic keeps the diagnosis, decisions, owners, and execution connected as the work moves.</p>
          </div>

          <div className={styles.engagementGrid}>
            <FadeIn className={styles.engagementSteps}>
              {engagementSteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <div><h3>{step.label}</h3><p>{step.copy}</p></div>
                </article>
              ))}
            </FadeIn>
            <aside className={styles.accountabilityPanel} aria-label="Logic working standard">
              <p className={styles.panelLabel}>Working standard</p>
              <h3>One accountable operating partner</h3>
              <p>Connected problems need sustained ownership across decisions, vendors, production, and internal teams.</p>
              <ul>
                <li>Named priorities and decision cadence</li>
                <li>Active supplier and partner management</li>
                <li>Issue resolution and implementation</li>
                <li>Progress, risk, and next-step reporting</li>
              </ul>
              <Link href="/how-we-work">See the full operating method <span aria-hidden="true">→</span></Link>
            </aside>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="services-cta-title">
          <div>
            <p className={styles.eyebrow}>Start with the operating problem</p>
            <h2 id="services-cta-title">Margin moved. Cost climbed. Quality slipped. <span>Let&apos;s find out why.</span></h2>
          </div>
          <div className={styles.ctaActions}>
            <EmailButton subject="What’s Not Working — Logic Agency" className={styles.primaryCta}>Tell us what&apos;s not working <span aria-hidden="true">→</span></EmailButton>
            <a className={styles.darkCta} href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" target="_blank" rel="noopener noreferrer">Book a 15-minute call <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <FooterHome />
    </>
  );
}
