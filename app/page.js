import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import FadeIn from '@/components/FadeIn';
import FaqAccordion from '@/components/FaqAccordion';
import EmailButton from '@/components/EmailButton';

export const metadata = {
  title: 'Logic Agency Inc. — Supply Chain Consulting for Physical Product Brands',
  description: 'Supply chain consulting and implementation for cosmetics, beauty, wine and spirits, luxury goods, wellness, and consumer hardware brands.',
  keywords: 'supply chain consulting, retail compliance, cosmetics supply chain, beauty manufacturing, wine and spirits packaging, luxury goods supply chain, product operations, sourcing and manufacturing',
};

const problems = [
  ['The product is ready. Manufacturing is not.', 'Specifications are incomplete, suppliers are making assumptions, or the production plan cannot support the launch date.'],
  ['The packaging looks right—but fails somewhere else.', 'Leaks, damage, inconsistent finishes, excessive freight, or retailer requirements appear after the important decisions are already made.'],
  ['Costs keep changing. Nobody can explain why.', 'Quotes, freight, tooling, materials, and minimums live in different places. You need the real landed-cost picture.'],
  ['Quality problems keep coming back.', 'The factory fixes the latest defect, but the specification, inspection plan, and ownership model never change.'],
  ['Retail exposed a system that was never built to scale.', 'Case packs, labeling, routing, EDI, inventory, and fulfillment now have to work together—not as separate projects.'],
  ['You have suppliers. You do not have accountability.', 'Every partner owns a piece. Nobody owns the product from material selection through production and delivery.'],
];

const industries = [
  { name: 'Cosmetics & Beauty', number: '01', intro: 'Where formulation, component, decoration, and compliance have to work as one system.', items: ['Bottles, jars, tubes, pumps & closures', 'Formula-material compatibility', 'Decoration, finish & color consistency', 'Leak, transit & quality testing', 'Claims, labeling & retail readiness'] },
  { name: 'Wine & Spirits', number: '02', intro: 'Where presentation matters, but glass, freight, packout, and channel requirements determine whether it performs.', items: ['Glass, closures & labels', 'Secondary and gift packaging', 'Breakage and freight exposure', 'Case-pack and display configuration', 'Channel and compliance requirements'] },
  { name: 'Luxury Goods', number: '03', intro: 'Where small material or finish inconsistencies become visible brand problems.', items: ['Premium materials & finishes', 'Color and cosmetic-defect standards', 'Supplier craftsmanship', 'Unboxing and presentation', 'Brand-protection requirements'] },
  { name: 'Wellness & Personal Care', number: '04', intro: 'Where product-contact materials, claims, sustainability, and repeatable production all matter.', items: ['Product-contact materials', 'Claims and certifications', 'Lot, batch and expiry needs', 'Retail and subscription formats', 'Sustainable-material tradeoffs'] },
  { name: 'Consumer Technology & Hardware', number: '05', intro: 'Where fitment, protection, certification, and technical documentation cannot be separated from packaging.', items: ['Product and accessory fitment', 'Protective engineering', 'Certifications and testing', 'Parcel and retail performance', 'Technical specifications'] },
];

export default function HomePage() {
  return (
    <>
      <Nav variant="home" />

      <main className="concept-v2">
        <section className="concept-hero gl">
          <div className="concept-hero-copy">
            <div className="concept-kicker">Supply chain consulting + implementation</div>
            <h1>We design and fix supply chains for <span>physical-product brands.</span></h1>
            <p>From materials and manufacturing to packaging, compliance, quality, and retail execution. We find what is failing, build the solution, and stay through implementation.</p>
            <div className="hb">
              <EmailButton subject="Let's Talk — Supply Chain Consulting" className="bt bo">Tell Us What&apos;s Not Working &rarr;</EmailButton>
              <a href="#services" className="bt bg">Explore Services</a>
            </div>
          </div>
          <div className="concept-hero-map" aria-label="Logic connects product decisions to retail execution">
            <div className="map-axis"><span>01</span><strong>Product</strong><small>Materials &amp; form</small></div>
            <div className="map-axis"><span>02</span><strong>Make</strong><small>Factory &amp; quality</small></div>
            <div className="map-axis"><span>03</span><strong>Move</strong><small>Freight &amp; inventory</small></div>
            <div className="map-axis"><span>04</span><strong>Sell</strong><small>Compliance &amp; retail</small></div>
            <div className="map-line" />
          </div>
        </section>

        <section className="concept-proofbar">
          <span>20+ years in manufacturing and supply chain</span>
          <span>15+ sourcing countries</span>
          <span>Product to shelf</span>
          <span>Recommendations through implementation</span>
        </section>

        <section id="problems" className="sc wh concept-problems">
          <div className="si">
            <div className="sl">What We Solve</div><div className="or" />
            <h2 className="sh">The symptoms are visible. <span className="o">The real problem usually isn&apos;t.</span></h2>
            <p className="ss">Brands rarely call because they need “supply chain architecture.” They call because a launch is slipping, margins are moving, or a product cannot reliably make it from idea to shelf.</p>
            <FadeIn className="problem-ledger">
              {problems.map(([title, copy], i) => (
                <article className="problem-row" key={title}>
                  <span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p>
                </article>
              ))}
            </FadeIn>
          </div>
        </section>

        <section id="services" className="sc dks gd concept-services">
          <div className="si">
            <div className="sl">Services</div><div className="or" />
            <h2 className="sh">Two connected disciplines. <span className="o">One accountable team.</span></h2>
            <p className="ss">Most failures happen between the product decision and the operating reality. Logic works across both.</p>
            <FadeIn className="service-duo">
              <article className="service-domain">
                <div className="domain-top"><span>01</span><p>Primary practice</p></div>
                <h3>Supply Chain Consulting</h3>
                <p className="domain-lede">Find the cost, risk, quality, sourcing, and execution problems underneath the visible issue.</p>
                <ul><li>Supply chain and cost audits</li><li>Manufacturing strategy</li><li>Supplier selection and qualification</li><li>Cost and risk analysis</li><li>Quality-control systems</li><li>Inventory, logistics and implementation management</li></ul>
              </article>
              <article className="service-domain service-domain-light">
                <div className="domain-top"><span>02</span><p>Specialist practice</p></div>
                <h3>Product &amp; Retail Readiness</h3>
                <p className="domain-lede">Make the product, package, documentation, and operating plan ready for production and the channel.</p>
                <ul><li>Material and component selection</li><li>Product and packaging engineering</li><li>Certifications and compliance</li><li>Packout and retail-display development</li><li>Technical specifications and tech packs</li><li>Testing and quality requirements</li></ul>
              </article>
            </FadeIn>
          </div>
        </section>

        <section id="process" className="sc gl concept-method">
          <div className="si">
            <div className="sl">How We Work</div><div className="or" />
            <h2 className="sh">Find the problem. Design the answer. <span className="o">Make it work.</span></h2>
            <p className="ss">A clear three-stage method, scaled to the problem in front of us.</p>
            <FadeIn className="method-track">
              <article><span className="method-num">01</span><div><p className="method-label">Diagnose</p><h3>Audit &amp; Analysis</h3><p>We inspect the product, packaging, suppliers, costs, compliance requirements, workflows, and launch constraints.</p><strong>You receive</strong><ul><li>Current-state analysis</li><li>Risk and cost breakdown</li><li>Compliance gaps</li><li>Supplier assessment</li></ul></div></article>
              <article><span className="method-num">02</span><div><p className="method-label">Define</p><h3>Recommendations &amp; Roadmap</h3><p>We turn findings into specific decisions, specifications, budgets, owners, and decision gates.</p><strong>You receive</strong><ul><li>Prioritized roadmap</li><li>Material and supplier recommendations</li><li>Technical requirements</li><li>Timeline and budget</li></ul></div></article>
              <article><span className="method-num">03</span><div><p className="method-label">Deliver</p><h3>Implementation &amp; Management</h3><p>We manage the work across suppliers, factories, testing partners, logistics providers, retailers, and your team.</p><strong>You receive</strong><ul><li>Vendor coordination</li><li>Sampling and production</li><li>QC and compliance execution</li><li>Launch and ongoing reporting</li></ul></div></article>
            </FadeIn>
            <div className="method-statement">Advice is only useful if it survives contact with production. <span>We stay for that part.</span></div>
          </div>
        </section>

        <section className="sc wh concept-design">
          <div className="si design-split">
            <div><div className="sl">How We Think About Design</div><div className="or" /><h2 className="sh">Design is more than <span className="o">how the product looks.</span></h2></div>
            <div className="design-copy"><p>We design the decisions behind a successful physical product: what it is made from, how it is formed, where it is produced, how quality is measured, how it is packed, and what has to happen before it reaches a customer.</p><div className="design-tags"><span>Product</span><span>Materials</span><span>Packaging</span><span>Manufacturing</span><span>Quality</span><span>Sourcing</span><span>Retail displays</span><span>Fulfillment</span></div></div>
          </div>
        </section>

        <section id="industries" className="sc gl concept-industries">
          <div className="si">
            <div className="sl">Industry Expertise</div><div className="or" />
            <h2 className="sh">Category knowledge changes <span className="o">the recommendation.</span></h2>
            <p className="ss">A pump, a glass bottle, and a consumer device do not belong in the same generic playbook.</p>
            <FadeIn className="industry-stack">
              {industries.map((industry) => <article key={industry.name}><span>{industry.number}</span><div><h3>{industry.name}</h3><p>{industry.intro}</p></div><ul>{industry.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
            </FadeIn>
          </div>
        </section>

        <section id="results" className="sc dks gd concept-results">
          <div className="si">
            <div className="sl">Selected Work</div><div className="or" />
            <h2 className="sh">The work is different. <span className="o">The method holds.</span></h2>
            <FadeIn className="result-grid">
              <article><img src="/images/epicutis.jpg" alt="Epicutis skincare packaging" /><div><p className="result-meta">Epicutis · Luxury skincare</p><h3>A packaging and supply chain system built for 7× SKU growth.</h3><p>Logic managed sourcing, engineering, vendors, and inventory planning while maintaining the premium product experience.</p><div className="result-stats"><span><strong>7×</strong> SKU growth</span><span><strong>15%</strong> cost savings</span><span><strong>90-day</strong> inventory plan</span></div><a href="/work/epicutis">View case study &rarr;</a></div></article>
              <article><img src="/images/audio-enhancement.jpg" alt="Audio Enhancement classroom product packaging" /><div><p className="result-meta">Audio Enhancement · Consumer hardware</p><h3>Packaging engineered as part of the product system.</h3><p>Product fitment, structure, sourcing, and production came together in a package that works as a daily-use hub.</p><div className="result-stats"><span><strong>20%</strong> shipping saved</span><span><strong>$0</strong> upgrade cost</span><span><strong>4+</strong> SKUs expanded</span></div><a href="/work/audio-enhancement">View case study &rarr;</a></div></article>
            </FadeIn>
          </div>
        </section>

        <section id="pricing" className="sc wh concept-engage">
          <div className="si">
            <div className="sl">Ways To Engage</div><div className="or" />
            <h2 className="sh">Start with the problem. <span className="o">Choose the right level of ownership.</span></h2>
            <p className="ss">Defined diagnostics and roadmaps are scoped as projects. Ongoing implementation is structured monthly.</p>
            <FadeIn className="engage-grid">
              <article><span>01 · Fixed scope</span><h3>Audit &amp; Analysis</h3><p>For a defined cost, supplier, product, packaging, compliance, or operational problem.</p><strong>Scoped to the question</strong><small>Clear boundaries, deliverables, and timeline before work begins.</small></article>
              <article><span>02 · Fixed project</span><h3>Strategy &amp; Roadmap</h3><p>For designing a new supply chain or correcting a complex, connected system.</p><strong>Priced by complexity</strong><small>Product, supplier, testing, compliance, and timeline determine scope.</small></article>
              <article className="engage-feature"><span>03 · Monthly</span><h3>Implementation &amp; Management</h3><p>For teams that need Logic to own workstreams and keep the operating system moving.</p><strong>$2.5K–$10K+ / month</strong><small>From advisory through active management and embedded operations.</small></article>
            </FadeIn>
            <div className="retainer-bands"><div><span>Advisory</span><strong>$2.5–3K</strong><p>We guide. Your team executes.</p></div><div><span>Active Management</span><strong>$5–7K</strong><p>We own defined workstreams.</p></div><div><span>Embedded Operations</span><strong>$10K+</strong><p>We operate as part of your team.</p></div></div>
          </div>
        </section>

        <section className="sc gl concept-why">
          <div className="si why-grid"><div><div className="sl">Why Logic</div><div className="or" /><h2 className="sh">One team from <span className="o">decision to delivery.</span></h2></div><div className="why-list"><p><span>01</span><strong>Manufacturing fluency</strong>Recommendations are grounded in materials, tooling, tolerances, quality, freight, and cost.</p><p><span>02</span><strong>Category-specific judgment</strong>The answer reflects the product and channel—not a generic operating template.</p><p><span>03</span><strong>Implementation ownership</strong>The same team that finds the issue can coordinate the work required to fix it.</p><p><span>04</span><strong>Commercial clarity</strong>A defined question, scope, timeline, decision points, and cost before the engagement starts.</p></div></div>
        </section>

        <section id="faq" className="sc dks gd"><div className="si"><div className="sl">FAQ</div><div className="or" /><h2 className="sh">Questions before <span className="o">the first conversation.</span></h2><FaqAccordion /></div></section>

        <section id="cta" className="concept-cta">
          <p>Not sure whether you need an audit, a roadmap, or implementation?</p><h2>Start with what is <span>not working.</span></h2><p className="concept-cta-copy">We&apos;ll help define the problem, explain what a useful engagement looks like, and tell you plainly if Logic is not the right fit.</p><div className="cbt"><EmailButton subject="Let's Talk — Supply Chain Consulting" className="bt bw">Start a Conversation &rarr;</EmailButton><a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a 15-Minute Call &rarr;</a></div>
        </section>
      </main>

      <FooterHome />
    </>
  );
}
