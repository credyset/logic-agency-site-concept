import Link from 'next/link';
import EmailButton from '@/components/EmailButton';
import FooterHome from '@/components/FooterHome';
import Nav from '@/components/Nav';
import SkipLink from '@/components/SkipLink';
import styles from './page.module.css';

export const metadata = {
  title: 'How We Work — Logic Agency Inc.',
  description: 'How Logic Agency diagnoses operational constraints, defines the path forward, and stays accountable through implementation.',
  alternates: { canonical: 'https://credyset.github.io/logic-agency-site-concept/how-we-work/' },
};

const stages = [
  {
    number: '01',
    verb: 'Diagnose',
    title: 'Find the constraint behind the symptom.',
    description: 'We inspect the product, packaging, suppliers, costs, compliance requirements, workflows, and growth constraints—not just the issue that surfaced first.',
    outputs: ['Current-state analysis', 'Risk and cost breakdown', 'Compliance gaps', 'Supplier assessment'],
  },
  {
    number: '02',
    verb: 'Define',
    title: 'Turn findings into an executable operating plan.',
    description: 'We translate what we find into decisions, specifications, budgets, owners, and decision gates so the next move is clear.',
    outputs: ['Prioritized roadmap', 'Material and supplier decisions', 'Technical requirements', 'Timeline and budget'],
  },
  {
    number: '03',
    verb: 'Deliver',
    title: 'Own the build and coordinate the handoffs.',
    description: 'We own execution across product development, suppliers, factories, testing, and quality; coordinate logistics partners; and support retail readiness alongside the internal team.',
    outputs: ['Vendor coordination', 'Sampling and production', 'Quality and compliance execution', 'Ongoing reporting'],
  },
];

const continuityPrinciples = [
  {
    name: 'Evidence',
    signal: 'One current-state view',
    role: 'See the whole operating picture.',
    fit: 'Product, packaging, supplier, cost, quality, compliance, and workflow evidence stays connected instead of splitting across owners.',
  },
  {
    name: 'Ownership',
    signal: 'Named decisions and gates',
    role: 'Make responsibility explicit.',
    fit: 'Requirements, tradeoffs, owners, and approvals are clear before work moves downstream into suppliers, tooling, or production.',
  },
  {
    name: 'Follow-through',
    signal: 'Context reaches production',
    role: 'Carry decisions into the work.',
    fit: 'Logic keeps supplier, factory, quality, and partner execution aligned—and unresolved issues visible until they close.',
  },
];

const operatingControls = [
  {
    label: 'Shared operating view',
    title: 'Visibility',
    description: 'Current risks, dependencies, decisions, and next actions remain visible to the people responsible for moving the work.',
    result: 'One source of truth for what changed, what is blocked, and what happens next.',
  },
  {
    label: 'Explicit commitments',
    title: 'Decision gates',
    description: 'Specifications, tradeoffs, owners, and approvals are confirmed before money, materials, or production move downstream.',
    result: 'Fewer late reversals, undocumented assumptions, and expensive handoff failures.',
  },
  {
    label: 'Accountable follow-through',
    title: 'Closure',
    description: 'Issues remain visible until an owner and outcome are confirmed, rather than disappearing into a supplier thread or status deck.',
    result: 'Operating changes that reach implementation instead of stopping at recommendation.',
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <SkipLink />
      <Nav variant="guide" />

      <main className={styles.page} id="main-content" tabIndex={-1}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>How we work / Embedded in the work</p>
              <h1>From operating constraint to <span>implemented change.</span></h1>
              <p className={styles.heroLede}>Logic works as an embedded packaging, supply-chain, and operations team for scaling product brands. We find the constraint, define the answer, and stay accountable while the work moves through production.</p>
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

            <aside className={styles.heroPanel} aria-label="Logic operating method at a glance">
              <div className={styles.panelStatus}><i aria-hidden="true" /> How Logic works</div>
              <p className={styles.panelValue}>Embedded</p>
              <p className={styles.panelCopy}>One team stays close enough to see the next constraint before it becomes the next fire.</p>
              <dl>
                <div><dt>Method</dt><dd>Diagnose → Define → Deliver</dd></div>
                <div><dt>Continuity</dt><dd>Same team through implementation</dd></div>
                <div><dt>Accountability</dt><dd>Decision through execution</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className={styles.method} id="method" aria-labelledby="method-title">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrowDark}>The operating method</p>
              <h2 id="method-title">Diagnose. Define. <span>Deliver.</span></h2>
              <p>This is not a three-part handoff. The same team carries context from diagnosis into decisions and through implementation as growth introduces new products, suppliers, channels, and constraints.</p>
            </div>

            <ol className={styles.methodList}>
              {stages.map((stage) => (
                <li key={stage.verb}>
                  <div className={styles.methodMarker}>
                    <span>{stage.number}</span>
                    <strong>{stage.verb}</strong>
                  </div>
                  <div className={styles.methodBody}>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                  <div className={styles.methodOutputs}>
                    <p>You receive</p>
                    <ul>
                      {stage.outputs.map((output) => <li key={output}>{output}</li>)}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <p className={styles.methodStatement}>Advice is only useful if it survives contact with production. <strong>Logic stays for that part.</strong></p>
          </div>
        </section>

        <section className={styles.continuity} id="continuity" aria-labelledby="continuity-title">
          <div className={styles.sectionInner}>
            <div className={styles.continuityHeader}>
              <div>
                <p className={styles.eyebrow}>What stays connected</p>
                <h2 id="continuity-title">One operating thread from evidence to execution.</h2>
              </div>
              <p>The work changes as the constraint becomes clearer. The accountability does not: Logic keeps decisions, owners, and handoffs visible until the operating change is in place.</p>
            </div>

            <div className={styles.continuityFrame}>
              <ol className={styles.frameRail} aria-label="Logic continuity principles">
                <li><span>01</span><p>Evidence</p></li>
                <li><span>02</span><p>Ownership</p></li>
                <li><span>03</span><p>Follow-through</p></li>
              </ol>
              <div className={styles.levelGrid}>
                {continuityPrinciples.map((principle) => (
                  <article key={principle.name}>
                    <div className={styles.levelTop}>
                      <p>{principle.name}</p>
                    </div>
                    <strong className={styles.principleSignal}>{principle.signal}</strong>
                    <h3>{principle.role}</h3>
                    <p className={styles.levelFit}>{principle.fit}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.entry} aria-labelledby="entry-title">
          <div className={styles.sectionInner}>
            <div className={styles.entryIntro}>
              <p className={styles.eyebrowDark}>How the work stays controlled</p>
              <h2 id="entry-title">Visible decisions. Explicit owners. Closed loops.</h2>
              <p>Operational change becomes reliable when the system makes risks, commitments, and unresolved issues easy to see.</p>
            </div>

            <div className={styles.entryGrid}>
              {operatingControls.map((control, index) => (
                <article key={control.title}>
                  <div className={styles.entryTop}><span>0{index + 1}</span><p>{control.label}</p></div>
                  <h3>{control.title}</h3>
                  <p>{control.description}</p>
                  <div className={styles.routeResult}><strong>Operating effect</strong><span>{control.result}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="how-cta-title">
          <div className={styles.ctaInner}>
            <p className={styles.ctaLabel}>No perfect brief required</p>
            <h2 id="how-cta-title">Start with what is not working.</h2>
            <p>You do not need to know the solution before reaching out. Bring the cost, margin, quality, or growth pressure; we&apos;ll help frame the real operating problem and the next useful step.</p>
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
              Prefer to orient first? See the growth situations we solve <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <FooterHome />
    </>
  );
}
