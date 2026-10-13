import Image from 'next/image';
import Link from 'next/link';
import EmailButton from '@/components/EmailButton';
import FadeIn from '@/components/FadeIn';
import FooterHome from '@/components/FooterHome';
import Nav from '@/components/Nav';
import SkipLink from '@/components/SkipLink';

export const metadata = {
  title: 'Logic Agency Inc. — Embedded Packaging, Supply Chain & Operations',
  description: 'The embedded packaging, supply-chain, and operations team for founders scaling physical-product brands. Logic finds the operational cause behind margin, cost, and quality problems—and stays to implement the fix.',
  keywords: 'embedded operations team, packaging development, supply chain operations, manufacturing quality, scaling product brands, margin improvement, cost reduction',
};

const handoffs = [
  ['01', 'Product development', 'Decisions begin without manufacturing, cost, or channel constraints in the room.'],
  ['02', 'Packaging & suppliers', 'Each partner optimizes its own part instead of the complete product system.'],
  ['03', 'Factory & quality', 'Production inherits incomplete specifications and solves the latest defect—not the cause.'],
  ['04', 'Freight & retail', 'Problems surface downstream, after the expensive decisions have already been made.'],
];

const disciplines = [
  {
    number: '01', label: 'Owned discipline', title: 'Product & Packaging Development',
    copy: 'Turn the product idea into a manufacturable system with the right materials, structure, specifications, and channel fit.',
    items: ['Materials, components & form', 'Structural packaging development', 'Specifications, prototypes & testing', 'Cost and manufacturability decisions'],
    className: 'service-domain-dark',
  },
  {
    number: '02', label: 'Owned discipline', title: 'Manufacturing & Quality',
    copy: 'Own the path from qualified supplier through production, inspection, and corrective action against an approved standard.',
    items: ['Supplier qualification & sourcing', 'Tooling, sampling & production', 'Quality-control systems', 'Factory oversight & corrective action'],
    className: 'service-domain-mid',
  },
  {
    number: '03', label: 'Coordinated discipline', title: 'Supply Chain & Operations',
    copy: 'Coordinate the partners, inventory, freight, fulfillment, and retail-readiness work that keeps the product system moving.',
    items: ['Freight, inventory & 3PL coordination', 'Landed-cost and margin visibility', 'Vendor accountability & reporting', 'Compliance and retail-readiness support'],
    className: 'service-domain-light',
  },
];

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Nav variant="home" />

      <main className="concept-v2" id="main-content" tabIndex={-1}>
        <section className="concept-hero gl">
          <div className="concept-hero-copy">
            <div className="concept-kicker">Embedded packaging · supply chain · operations</div>
            <h1>Growth exposes the weak links in your product operation. <span>We fix them.</span></h1>
            <p>Logic is the embedded packaging, supply-chain, and operations team for founders scaling physical-product brands. When growth pressures margin, cost, or quality, we find the operational cause and implement the fix.</p>
            <div className="hb">
              <EmailButton subject="Let's Talk — Logic Agency" className="bt bo">Tell Us What&apos;s Not Working &rarr;</EmailButton>
              <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bg" target="_blank" rel="noopener noreferrer">Book a 15-Minute Call</a>
            </div>
            <Link href="/who-we-help" className="concept-hero-resource">
              Not sure where the issue sits? Start with margin, cost, or quality <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="concept-hero-map" aria-label="Logic ownership across the product-to-shelf system">
            <div className="map-axis"><span>01</span><strong>Product</strong><small><em>Own</em> · Development, materials &amp; form</small></div>
            <div className="map-axis"><span>02</span><strong>Make</strong><small><em>Own</em> · Factory &amp; quality</small></div>
            <div className="map-axis"><span>03</span><strong>Move</strong><small><em>Coordinate</em> · Freight &amp; inventory</small></div>
            <div className="map-axis"><span>04</span><strong>Sell</strong><small><em>Support</em> · Compliance &amp; retail readiness</small></div>
            <div className="map-line" />
          </div>
        </section>

        <section id="integration" className="sc wh concept-integration">
          <div className="si">
            <div className="sl">One Accountable Team</div><div className="or" />
            <h2 className="sh">Growth breaks at the handoffs. <span className="o">Logic connects the system.</span></h2>
            <p className="ss">As volume, SKUs, suppliers, and channels increase, disconnected partners protect their individual task. Logic gives the founder one team accountable across the work we own and coordinate.</p>

            <FadeIn className="integration-compare integration-compare-home">
              <article className="compare-col compare-broken">
                <div className="compare-hdr"><span>Fragmented</span><h3>Four handoffs. No system owner.</h3></div>
                <ul className="compare-chain compare-chain-compact">
                  {handoffs.map(([number, title, copy]) => (
                    <li key={title}><span>{number}</span><div><strong>{title}</strong><small>{copy}</small></div></li>
                  ))}
                </ul>
                <p className="compare-outcome">Margin, cost, and quality erode between the owners—not inside a single task.</p>
              </article>

              <article className="compare-col compare-logic">
                <div className="compare-hdr"><span>Logic</span><h3>One integrated team</h3></div>
                <div className="integrated-system" aria-label="Logic connects the product-to-shelf system through one accountable team">
                  <div className="integrated-system__meta">
                    <span><i aria-hidden="true" /> Product-to-shelf system</span>
                    <span>01—04</span>
                  </div>
                  <ol className="integrated-stages">
                    <li><span>01</span><strong>Product</strong><small><em>Own</em> · Development</small></li>
                    <li><span>02</span><strong>Make</strong><small><em>Own</em> · Production</small></li>
                    <li><span>03</span><strong>Move</strong><small><em>Coordinate</em> · Logistics</small></li>
                    <li><span>04</span><strong>Sell</strong><small><em>Support</em> · Readiness</small></li>
                  </ol>
                  <div className="integrated-path" aria-hidden="true"><span /><span /><span /><span /></div>
                  <div className="integrated-system__core">
                    <span>Logic / integrated team</span>
                    <strong>One plan from decision to delivery.</strong>
                    <p>Packaging · Sourcing · Manufacturing · Quality · Freight · Operations</p>
                  </div>
                  <div className="integrated-system__outcomes" aria-label="Integrated-team outcomes">
                    <span>One brief</span><span>One standard</span><span>One owner</span>
                  </div>
                </div>
                <p className="compare-outcome compare-outcome-win">Hands-on from the first diagnosis through implementation.</p>
              </article>
            </FadeIn>
            <div className="section-link-row"><Link href="/why-logic">See why the integrated model works &rarr;</Link></div>
          </div>
        </section>

        <section className="concept-proofbar" aria-label="Supporting proof for the Logic model">
          <span>Hands-on implementation</span>
          <span>20+ years of operator experience</span>
          <span>Global supplier network</span>
          <span>AI-enabled operating systems</span>
          <span>Clear ownership across the handoffs</span>
        </section>

        <section id="services" className="sc wh concept-services concept-services-light">
          <div className="si">
            <div className="sl">What We Do</div><div className="or" />
            <h2 className="sh">Three co-equal disciplines. <span className="o">Clear ownership at every stage.</span></h2>
            <p className="ss">Packaging makes the system tangible. Manufacturing makes it real. Embedded supply-chain and operations work keeps it controlled as the business grows.</p>
            <FadeIn className="service-trio service-trio-home">
              {disciplines.map((discipline) => (
                <article className={`service-domain ${discipline.className}`} key={discipline.title}>
                  <div className="domain-top"><span>{discipline.number}</span><p>{discipline.label}</p></div>
                  <h3>{discipline.title}</h3>
                  <p className="domain-lede">{discipline.copy}</p>
                  <ul>{discipline.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </FadeIn>
            <div className="section-link-row"><Link href="/services">Explore the full service system &rarr;</Link></div>
          </div>
        </section>

        <section id="results" className="sc dks gd concept-results concept-results-home">
          <div className="si">
            <div className="sl">Selected Work</div><div className="or" />
            <h2 className="sh">Growth changed the operating problem. <span className="o">The system changed with it.</span></h2>
            <p className="ss">Epicutis and Audio Enhancement show the same pattern in different categories: growth increased the pressure, and connected development, manufacturing, quality, and operations protected the outcome.</p>

            <FadeIn className="result-grid">
              <article>
                <Image src="/logic-agency-site-concept/images/epicutis.jpg" alt="Epicutis skincare packaging" width={1600} height={900} sizes="(max-width: 900px) 100vw, 50vw" />
                <div>
                  <p className="result-meta">Epicutis / Signum Biosciences · Luxury skincare</p>
                  <h3>A packaging and supply-chain system built for 7× SKU growth.</h3>
                  <p>Logic owned packaging development and sourcing, then coordinated vendors, inventory planning, and logistics while maintaining a premium product experience.</p>
                  <div className="result-stats"><span><strong>3→21+</strong> SKU expansion</span><span><strong>Managed</strong> inventory program</span><span><strong>Normalized</strong> logistics flow</span></div>
                  <Link href="/work/epicutis">View case study &rarr;</Link>
                </div>
              </article>
              <article>
                <Image src="/logic-agency-site-concept/images/audio-enhancement.jpg" alt="Audio Enhancement classroom product packaging" width={1600} height={900} sizes="(max-width: 900px) 100vw, 50vw" />
                <div>
                  <p className="result-meta">Audio Enhancement · Consumer hardware</p>
                  <h3>Packaging engineered as part of the product system.</h3>
                  <p>Product fitment, structure, sourcing, and production came together in a package designed for repeatable manufacturing and daily use.</p>
                  <div className="result-stats"><span><strong>100%</strong> pilot QC</span><span><strong>Parallel</strong> supplier transition</span><span><strong>Protected</strong> operating continuity</span></div>
                  <Link href="/work/audio-enhancement">View case study &rarr;</Link>
                </div>
              </article>
            </FadeIn>
            <div className="section-link-row section-link-row-dark"><Link href="/work">View selected work &rarr;</Link></div>
          </div>
        </section>

        <section id="cta" className="concept-cta">
          <p>Margin, cost, or quality changed as the business grew?</p>
          <h2>Tell us what is <span>not working.</span></h2>
          <p className="concept-cta-copy">We&apos;ll help identify the operational cause, explain what useful ownership looks like, and tell you plainly if Logic is not the right fit.</p>
          <div className="cbt">
            <EmailButton subject="Let's Talk — Logic Agency" className="bt bw">Tell Us What&apos;s Not Working &rarr;</EmailButton>
            <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a 15-Minute Call &rarr;</a>
          </div>
          <Link href="/how-we-work" className="concept-cta-resource">Prefer to understand the process first? See how Logic works &rarr;</Link>
        </section>
      </main>

      <FooterHome />
    </>
  );
}
