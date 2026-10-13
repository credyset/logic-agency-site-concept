import Link from 'next/link';
import Nav from '@/components/Nav';
import SkipLink from '@/components/SkipLink';
import FooterHome from '@/components/FooterHome';
import styles from './page.module.css';

const calendarUrl = 'https://calendly.com/jordan-harper-packaging/logic-agency-readiness';

const faqGroups = [
  {
    id: 'fit',
    number: '01',
    label: 'Fit & positioning',
    intro: 'What Logic is, who the team is built for, and why packaging and operations belong together.',
    items: [
      {
        question: 'What exactly is Logic Agency?',
        answer: 'Logic is an embedded packaging, supply-chain, and operations team for scaling product brands. We combine operating judgment with hands-on implementation, so connected problems have one accountable team instead of a chain of disconnected advisors and vendors.',
      },
      {
        question: 'Who is the best fit for Logic?',
        answer: 'Our clearest fit is a founder or CEO of a scaling product brand whose growth is creating margin pressure, cost drift, recurring quality issues, or more operational complexity than the internal team can comfortably carry. The business may be growing volume, SKUs, channels, or retail exposure; the important signal is that growth has made the operating system harder to manage.',
      },
      {
        question: 'Are you a packaging agency or an operations team?',
        answer: 'Both disciplines are central. Packaging is often the most visible entry point because it connects product decisions to materials, manufacturing, quality, freight, inventory, and retail requirements. Logic treats packaging as a co-equal discipline inside the larger supply-chain and operations system.',
      },
      {
        question: 'Do we need to know which service we need before calling?',
        answer: 'No. Start with the symptom: margin, cost, quality, a delayed launch, a supplier problem, or a process your team cannot keep carrying. The first conversation is designed to locate the connected operating cause and determine whether Logic is the right fit.',
      },
    ],
  },
  {
    id: 'scope',
    number: '02',
    label: 'Scope & accountability',
    intro: 'A clear boundary between the work Logic owns, the work it coordinates, and the work that stays with the brand.',
    items: [
      {
        question: 'What does Logic own, and what does Logic coordinate?',
        answer: 'Logic can own the Product and Make workstreams: product and packaging development, materials and form, manufacturing, factory management, and quality. Logic coordinates Move by aligning freight, inventory, warehouse, and other logistics partners around the operating plan. Selling remains with the brand and its commercial partners; Logic can help prepare the packaging and operating requirements that support a channel without representing itself as the sales team or retailer.',
      },
      {
        question: 'What does “hands-on implementation” mean?',
        answer: 'It means the work can continue beyond findings and recommendations. Depending on the engagement, Logic may translate decisions into specifications, manage supplier conversations, oversee production or quality workstreams, build the operating cadence, and keep the people involved aligned through delivery.',
      },
      {
        question: 'Can Logic work with our existing suppliers and partners?',
        answer: 'Yes. The goal is not to replace a functioning relationship for the sake of replacement. Logic can evaluate the current system, clarify roles and specifications, strengthen accountability, and coordinate the right partners. If a supplier change is needed, the recommendation should come from the operating requirements—not a blanket preference.',
      },
      {
        question: 'How do you handle supplier qualifications and certifications?',
        answer: 'Requirements are established program by program. Relevant audits, testing, documentation, and certifications should be matched and verified against the specific product, material, market, and retailer requirement. A global network is useful reach, but it is not a substitute for project-specific qualification.',
      },
    ],
  },
  {
    id: 'engagement',
    number: '03',
    label: 'Working together',
    intro: 'How the work starts, stays accountable, and uses technology.',
    items: [
      {
        question: 'How does an engagement usually start?',
        answer: 'Start with a 15-minute fit conversation focused on what is not working. If the problem is clear and the fit is mutual, the next step defines the constraint, the working scope, the people involved, and the operating cadence. You do not need to prepare a polished brief before reaching out.',
      },
      {
        question: 'What happens after the first diagnosis?',
        answer: 'Findings are translated into decisions, specifications, owners, and next actions. When implementation is required, Logic carries that context into the supplier, factory, quality, and operating work instead of handing over a recommendation deck.',
      },
      {
        question: 'What does a useful first phase produce?',
        answer: 'A useful first phase makes the real constraint visible, establishes the decisions that matter, identifies ownership, and defines the next executable actions. The output should create operating clarity—not simply more analysis.',
      },
      {
        question: 'How is this different from hiring one full-time operator?',
        answer: 'A full-time hire is often right when the role is stable and large enough for one person to own every day. Logic is useful when the need spans packaging, suppliers, manufacturing, quality, and operations—or is still changing. Logic brings those connected capabilities together without asking one new hire to cover every discipline.',
      },
      {
        question: 'Where does AI fit into the work?',
        answer: 'AI supports the operating system where it can improve visibility, documentation, analysis, and decision speed. It does not replace supplier diligence, factory context, quality judgment, or accountability. The technology is a supporting tool; experienced operators remain responsible for the work.',
      },
    ],
  },
];

const allFaqs = faqGroups.flatMap((group) => group.items);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export const metadata = {
  title: 'Frequently Asked Questions — Logic Agency',
  description: 'Answers about Logic Agency’s packaging, supply-chain, and operations work, including fit, scope, accountability, operating method, and hands-on implementation.',
  alternates: { canonical: 'https://credyset.github.io/logic-agency-site-concept/faq/' },
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SkipLink className={styles.skipLink} />
      <Nav variant="guide" />
      <main id="main-content" className={styles.page} tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="faq-title">
          <div className={styles.heroInner}>
            <div>
              <p className={styles.eyebrow}>Logic Agency FAQ</p>
              <h1 id="faq-title">The questions to answer before you hand over operating work.</h1>
            </div>
            <div className={styles.heroAside}>
              <p>
                Logic is an embedded packaging, supply-chain, and operations team for founders of scaling product brands. These answers clarify where we fit and how the work is structured.
              </p>
              <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                Prefer to talk? Book 15 minutes <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <nav className={styles.jumpNav} aria-label="FAQ categories">
            {faqGroups.map((group) => (
              <a href={`#${group.id}`} key={group.id}>
                <span>{group.number}</span> {group.label}
              </a>
            ))}
          </nav>
        </section>

        <div className={styles.faqShell}>
          {faqGroups.map((group) => (
            <section className={styles.faqGroup} id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
              <header className={styles.groupHeader}>
                <span className={styles.groupNumber}>{group.number}</span>
                <div>
                  <p className={styles.eyebrow}>Question set</p>
                  <h2 id={`${group.id}-title`}>{group.label}</h2>
                  <p>{group.intro}</p>
                </div>
              </header>
              <div className={styles.accordion}>
                {group.items.map((item, index) => (
                  <details className={styles.faqItem} key={item.question} open={index === 0}>
                    <summary>
                      <span>{item.question}</span>
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M10 3v14M3 10h14" />
                      </svg>
                    </summary>
                    <div className={styles.answer}>
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className={styles.nextStep} aria-labelledby="next-step-title">
          <div className={styles.nextStepIntro}>
            <p className={styles.eyebrow}>Keep exploring</p>
            <h2 id="next-step-title">Need the method, the scope, or a direct answer?</h2>
          </div>
          <div className={styles.pathGrid}>
            <Link href="/services" className={styles.pathCard}>
              <span>01 / Scope</span>
              <strong>See what we do</strong>
              <p>Explore the connected disciplines and where Logic owns or coordinates the work.</p>
              <i aria-hidden="true">→</i>
            </Link>
            <Link href="/how-we-work" className={styles.pathCard}>
              <span>02 / Method</span>
              <strong>See how we work</strong>
              <p>Review Diagnose → Define → Deliver and how Logic stays accountable through implementation.</p>
              <i aria-hidden="true">→</i>
            </Link>
            <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className={`${styles.pathCard} ${styles.pathCardOrange}`}>
              <span>03 / Conversation</span>
              <strong>Book a 15-minute call</strong>
              <p>Bring the margin, cost, or quality problem. A polished brief is not required.</p>
              <i aria-hidden="true">→</i>
            </a>
          </div>
        </section>
      </main>
      <FooterHome />
    </>
  );
}
