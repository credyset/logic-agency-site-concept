import Link from 'next/link';
import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import FadeIn from '@/components/FadeIn';
import EmailButton from '@/components/EmailButton';
import styles from './who-we-help.module.css';

export const metadata = {
  title: 'Who We Help — Scaling Product Brands | Logic Agency',
  description: 'Logic supports founders and CEOs of scaling physical-product brands when growth exposes margin, cost, quality, packaging, manufacturing, or supply chain problems.',
  alternates: {
    canonical: 'https://credyset.github.io/logic-agency-site-concept/who-we-help/',
  },
  openGraph: {
    title: 'Who Logic Helps — Founders Scaling Physical-Product Brands',
    description: 'An embedded packaging, supply chain, and operations team for growth-related margin, cost, and quality challenges.',
    url: 'https://credyset.github.io/logic-agency-site-concept/who-we-help/',
    type: 'website',
  },
};

const symptoms = [
  {
    number: '01',
    name: 'Margin',
    signal: 'Revenue is growing, but the economics are getting worse.',
    inspect: 'Materials, packaging, landed cost, minimums, freight, rework, and the operational cost of every handoff.',
  },
  {
    number: '02',
    name: 'Cost',
    signal: 'Quotes keep moving—or nobody can explain the real unit cost.',
    inspect: 'Specifications, supplier terms, tooling, yield, packout, freight assumptions, inventory exposure, and cost-to-serve.',
  },
  {
    number: '03',
    name: 'Quality',
    signal: 'The latest defect was fixed, but the same class of problem returns.',
    inspect: 'Product requirements, approved samples, control plans, inspections, corrective action, and supplier accountability.',
  },
];

const growthMoments = [
  {
    number: '01',
    title: 'The product found demand',
    copy: 'Volume exposes packaging, supplier, and production decisions that were acceptable at a smaller scale.',
  },
  {
    number: '02',
    title: 'The business added complexity',
    copy: 'More SKUs, channels, retailers, or regions create dependencies the original operating model was not built to manage.',
  },
  {
    number: '03',
    title: 'The team hit a capacity ceiling',
    copy: 'Founders and internal leaders are resolving vendor and production issues instead of making the next set of growth decisions.',
  },
  {
    number: '04',
    title: 'A visible problem appeared',
    copy: 'Margin compression, cost surprises, or quality failures make the underlying system problem impossible to ignore.',
  },
];

const fitSignals = [
  'You sell a physical product and growth has made the operating model harder to manage.',
  'Packaging, manufacturing, and supply chain decisions affect one another—but live with different vendors or owners.',
  'You need an experienced team to implement, not another advisor to hand over a slide deck.',
  'The work spans several production cycles and needs consistent ownership and follow-through.',
];

const boundaries = [
  'A logo, campaign, or graphic-design-only brief',
  'A transactional request to quote one commodity item',
  'Sales brokerage, merchandising, or ownership of sell-through',
  'A slide-deck-only brief with no internal owner or path to implementation',
];

const industries = [
  { number: '01', name: 'Beauty & Personal Care', detail: 'Components, finishes, compatibility, quality, and premium presentation.' },
  { number: '02', name: 'Wellness & CPG', detail: 'Product-contact materials, claims, repeatable production, and channel readiness.' },
  { number: '03', name: 'Premium Consumer Goods', detail: 'High-expectation materials, packout, finish standards, and brand experience.' },
  { number: '04', name: 'Hardware & Devices', detail: 'Fitment, protection, technical specifications, testing, and fulfillment.' },
];

export default function WhoWeHelpPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="who-title">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Who we help / growth-stage operators</p>
              <h1 id="who-title">For founders scaling a product brand <span>faster than its operating system.</span></h1>
              <p className={styles.heroLead}>You have demand. Now growth is surfacing margin, cost, or quality problems across packaging, manufacturing, and supply chain—and the fixes no longer fit inside one person&apos;s job.</p>
              <div className={styles.heroActions}>
                <EmailButton subject="Scaling Challenge — Logic Agency" className={styles.primaryCta}>Tell us what&apos;s not working <span aria-hidden="true">→</span></EmailButton>
                <a className={styles.secondaryCta} href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" target="_blank" rel="noopener noreferrer">Book a 15-minute call <span aria-hidden="true">↗</span></a>
              </div>
            </div>

            <div className={styles.signalBoard} role="img" aria-label="Growth pressure often surfaces margin, cost, and quality problems">
              <div className={styles.signalMeta}><span>GROWTH / PRESSURE TEST</span><span>LIVE SYSTEM</span></div>
              <div className={styles.growthInput}>
                <span>INPUT</span>
                <strong>Growth</strong>
                <i aria-hidden="true" />
              </div>
              <div className={styles.signalStack}>
                <div><span>01</span><strong>Margin</strong><em>↓</em></div>
                <div><span>02</span><strong>Cost</strong><em>↑</em></div>
                <div><span>03</span><strong>Quality</strong><em>!</em></div>
              </div>
              <p>Growth is often the trigger. The underlying issue usually sits in a decision, specification, supplier, or handoff upstream.</p>
            </div>
          </div>
        </section>

        <section className={styles.fitStrip} aria-label="Primary Logic client profile">
          <div><span>Primary decision-maker</span><strong>Founder / CEO</strong></div>
          <div><span>Business context</span><strong>Scaling physical-product brand</strong></div>
          <div><span>Typical trigger</span><strong>Margin, cost, or quality</strong></div>
          <div><span>Working standard</span><strong>One accountable team</strong></div>
        </section>

        <section className={styles.symptoms} aria-labelledby="symptoms-title">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>The first visible signal</p>
              <h2 id="symptoms-title">Growth reveals the problem. <span>It rarely tells you where it started.</span></h2>
            </div>
            <p>The symptom may appear in a P&amp;L, a supplier call, or a customer complaint. We trace it back through the connected product and operating decisions.</p>
          </div>

          <FadeIn className={styles.symptomGrid}>
            {symptoms.map((symptom) => (
              <article className={styles.symptomCard} key={symptom.name}>
                <div className={styles.symptomTitle}><span>{symptom.number}</span><h3>{symptom.name}</h3></div>
                <div className={styles.readout}>
                  <p><strong>What you see</strong>{symptom.signal}</p>
                  <p><strong>What we inspect</strong>{symptom.inspect}</p>
                </div>
              </article>
            ))}
          </FadeIn>

          <div className={styles.rootCauseLine}>
            <span>Visible symptom</span><i aria-hidden="true" /><strong>Margin / Cost / Quality</strong><i aria-hidden="true" /><span>Upstream root cause</span>
          </div>
        </section>

        <section className={styles.growthSection} aria-labelledby="growth-title">
          <div className={styles.growthInner}>
            <div className={styles.growthIntro}>
              <p className={styles.eyebrow}>The growth inflection</p>
              <h2 id="growth-title">The old way worked—<span>until the business changed.</span></h2>
              <p>Logic is most useful when the product has momentum, but the packaging and operating system built for the prior stage cannot support what comes next.</p>
              <Link href="/services">See the three disciplines <span aria-hidden="true">→</span></Link>
            </div>

            <FadeIn className={styles.growthTimeline}>
              {growthMoments.map((moment) => (
                <article key={moment.number}>
                  <span>{moment.number}</span>
                  <div><h3>{moment.title}</h3><p>{moment.copy}</p></div>
                </article>
              ))}
            </FadeIn>
          </div>
        </section>

        <section className={styles.fitSection} aria-labelledby="fit-title">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Fit check</p>
              <h2 id="fit-title">A useful partnership starts with <span>clear boundaries.</span></h2>
            </div>
            <p>Logic is an embedded packaging, supply chain, and operations team. That is more involved than a vendor relationship—and more execution-oriented than conventional consulting.</p>
          </div>

          <div className={styles.fitGrid}>
            <article className={styles.positiveFit}>
              <div className={styles.fitHeading}><span>Strong fit</span><h3>Bring Logic in when…</h3></div>
              <ul>{fitSignals.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className={styles.negativeFit}>
              <div className={styles.fitHeading}><span>Outside the lane</span><h3>Logic is not…</h3></div>
              <ul>{boundaries.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </section>

        <section className={styles.industries} aria-labelledby="industries-title">
          <div className={styles.industriesInner}>
            <div className={styles.industryHeading}>
              <p className={styles.eyebrow}>Product contexts</p>
              <h2 id="industries-title">Different categories. <span>The same connected decisions.</span></h2>
              <p>The operating principles transfer. The materials, risks, standards, and supplier realities do not.</p>
            </div>
            <div className={styles.industryGrid}>
              {industries.map((industry) => (
                <article key={industry.name}>
                  <span>{industry.number}</span>
                  <h3>{industry.name}</h3>
                  <p>{industry.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="who-cta-title">
          <div>
            <p className={styles.eyebrow}>If this feels familiar</p>
            <h2 id="who-cta-title">Start with the symptom. <span>We&apos;ll trace the system.</span></h2>
            <p>Tell us what changed, what keeps breaking, and what growth is asking the business to do next.</p>
          </div>
          <div className={styles.ctaActions}>
            <EmailButton subject="Scaling Challenge — Logic Agency" className={styles.primaryCta}>Tell us what&apos;s not working <span aria-hidden="true">→</span></EmailButton>
            <a className={styles.darkCta} href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" target="_blank" rel="noopener noreferrer">Book a 15-minute call <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <FooterHome />
    </>
  );
}
