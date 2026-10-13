import Link from 'next/link';
import Nav from '@/components/Nav';
import SkipLink from '@/components/SkipLink';
import FooterHome from '@/components/FooterHome';
import EmailButton from '@/components/EmailButton';
import styles from './page.module.css';

const calendarUrl = 'https://calendly.com/jordan-harper-packaging/logic-agency-readiness';

const proofPoints = [
  {
    number: '01',
    title: '20+ years of operator experience',
    copy: 'Manufacturing and supply-chain experience shapes the decisions, the sequencing, and the escalation—not just the recommendation.',
  },
  {
    number: '02',
    title: 'A global supplier network',
    copy: 'Logic brings established supplier reach and qualifies the right production, quality, and compliance requirements for each program.',
  },
  {
    number: '03',
    title: 'AI-enabled operating systems',
    copy: 'AI is applied where it improves visibility, documentation, and decision speed. Operator judgment stays in control.',
  },
  {
    number: '04',
    title: 'Cross-functional operating depth',
    copy: 'Packaging, manufacturing, quality, sourcing, and downstream operations stay connected instead of being rebuilt as separate internal silos.',
  },
];

const supplierRegions = [
  { label: 'North America', countries: 'USA · Canada · Mexico' },
  { label: 'Asia Pacific', countries: 'China · Vietnam · Thailand · Indonesia · Malaysia · India · South Korea · Bangladesh' },
  { label: 'Europe + MENA', countries: 'Turkey · Romania · Poland · Egypt' },
];

export const metadata = {
  title: 'Why Logic — One Accountable Packaging & Operations Team',
  description: 'Logic is an embedded packaging, supply-chain, and operations team for founders of scaling product brands—combining accountable ownership with hands-on implementation.',
  alternates: { canonical: 'https://credyset.github.io/logic-agency-site-concept/why-logic/' },
};

export default function WhyLogicPage() {
  return (
    <>
      <SkipLink className={styles.skipLink} />
      <Nav variant="guide" />
      <main id="main-content" className={styles.page} tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="why-logic-title">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Why Logic</p>
              <h1 id="why-logic-title">
                Growth creates connected problems. <span>Logic gives them one owner.</span>
              </h1>
              <p className={styles.lede}>
                An embedded packaging, supply-chain, and operations team for founders of scaling product brands. We step in when growth starts showing up as margin pressure, cost drift, or recurring quality problems.
              </p>
              <div className={styles.heroActions}>
                <EmailButton subject="Tell Logic What's Not Working" className={styles.primaryAction}>
                  Tell us what&apos;s not working <span aria-hidden="true">→</span>
                </EmailButton>
                <a className={styles.secondaryAction} href={calendarUrl} target="_blank" rel="noopener noreferrer">
                  Book a 15-minute call <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className={styles.actionNote}>Start with the operating symptom. No prepared brief required.</p>
            </div>

            <div
              className={styles.accountabilityMap}
              role="img"
              aria-label="Margin, cost, and quality pressure are connected through one accountable Logic team"
            >
              <div className={styles.mapHeader}>
                <span>Growth signal</span>
                <span>Operating response</span>
              </div>
              <div className={styles.signals}>
                <span>Margin</span>
                <span>Cost</span>
                <span>Quality</span>
              </div>
              <div className={styles.connector} aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className={styles.logicCore}>
                <small>One point of accountability</small>
                <strong>Logic</strong>
                <p>Packaging · Supply Chain · Operations</p>
              </div>
              <div className={styles.scopeRail}>
                <div><span>Own</span><strong>Product development</strong></div>
                <div><span>Own</span><strong>Making &amp; quality</strong></div>
                <div><span>Coordinate</span><strong>Movement partners</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.primaryReasons} aria-labelledby="different-title">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>The difference that matters first</p>
            <h2 id="different-title">Accountability does not stop at the strategy deck.</h2>
          </div>
          <div className={styles.reasonGrid}>
            <article className={styles.reasonCard}>
              <span className={styles.reasonIndex}>01 / Accountable</span>
              <h3>One team sees the connected system.</h3>
              <p>
                Packaging, factory decisions, quality, freight coordination, and internal workflows affect one another. Logic stays close enough to see those dependencies and gives the founder one team accountable for keeping the work connected.
              </p>
              <div className={styles.reasonFooter}>Fewer handoffs · clearer ownership · faster decisions</div>
            </article>
            <article className={`${styles.reasonCard} ${styles.reasonCardOrange}`}>
              <span className={styles.reasonIndex}>02 / Hands-on</span>
              <h3>We help do the work—not only describe it.</h3>
              <p>
                The engagement can move from diagnosis into specifications, supplier management, production oversight, quality resolution, and a repeatable operating cadence. The exact workstream is defined around the constraint.
              </p>
              <div className={styles.reasonFooter}>Decisions · implementation · operating rhythm</div>
            </article>
          </div>
        </section>

        <section className={styles.networkSection} aria-labelledby="network-title">
          <div className={styles.networkIntro}>
            <div>
              <p className={styles.eyebrow}>Operating reach</p>
              <h2 id="network-title">A global network is useful only when someone operates it.</h2>
            </div>
            <p>
              Logic connects established supplier reach with program-specific qualification, sampling, production oversight, and quality control. The network is not a directory—it is an operating layer.
            </p>
          </div>

          <div className={styles.networkConsole}>
            <div className={styles.networkStat}>
              <span>Supplier reach</span>
              <strong>15+</strong>
              <small>countries across three operating regions</small>
            </div>
            <div className={styles.regionList}>
              {supplierRegions.map((region, index) => (
                <article key={region.label}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{region.label}</strong>
                    <p>{region.countries}</p>
                  </div>
                </article>
              ))}
            </div>
            <ol className={styles.networkFlow} aria-label="How Logic operates its supplier network">
              <li><span>01</span><strong>Qualify</strong><small>Capability · capacity · fit</small></li>
              <li><span>02</span><strong>Validate</strong><small>Samples · testing · standards</small></li>
              <li><span>03</span><strong>Manage</strong><small>Production · quality · correction</small></li>
            </ol>
          </div>
          <p className={styles.networkNote}>
            Supplier qualifications, testing, and certifications are verified for each product, material, market, and retailer requirement. They are never treated as blanket network claims.
          </p>
        </section>

        <section className={styles.proofSection} aria-labelledby="proof-title">
          <div className={styles.proofHeading}>
            <p className={styles.eyebrow}>Supporting capabilities</p>
            <h2 id="proof-title">Built for the messy middle between a plan and a result.</h2>
            <p>These capabilities reinforce the primary promise: one accountable team that can stay involved through implementation.</p>
          </div>
          <div className={styles.proofGrid}>
            {proofPoints.map((point) => (
              <article className={styles.proofCard} key={point.number}>
                <span>{point.number}</span>
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.modelSection} aria-labelledby="model-title">
          <div className={styles.modelNumber} aria-hidden="true">01</div>
          <div className={styles.modelCopy}>
            <p className={styles.eyebrow}>The operating advantage</p>
            <h2 id="model-title">One team carries the context through implementation.</h2>
            <p>
              Logic connects the evidence, decisions, specifications, suppliers, quality work, and handoffs required to correct an operating constraint. The team that learns the system stays accountable as the change moves into the real work.
            </p>
          </div>
          <Link className={styles.textLink} href="/how-we-work#continuity">
            See how accountability carries through <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className={styles.cta} aria-labelledby="why-cta-title">
          <p className={styles.ctaLabel}>Start with the symptom</p>
          <h2 id="why-cta-title">What is growth making harder than it should be?</h2>
          <p>Bring the margin, cost, or quality problem. We&apos;ll help trace the operating cause and tell you where Logic can be useful.</p>
          <div className={styles.ctaActions}>
            <EmailButton subject="Tell Logic What's Not Working" className={styles.darkAction}>
              Tell us what&apos;s not working <span aria-hidden="true">→</span>
            </EmailButton>
            <a className={styles.lightAction} href={calendarUrl} target="_blank" rel="noopener noreferrer">
              Book a 15-minute call <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <FooterHome />
    </>
  );
}
