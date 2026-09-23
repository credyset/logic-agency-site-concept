import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import FadeIn from '@/components/FadeIn';
import FaqAccordion from '@/components/FaqAccordion';
import EmailButton from '@/components/EmailButton';
import DesignJourney from '@/components/DesignJourney';

export const metadata = {
  title: 'Logic Agency Inc. — One Integrated Packaging & Supply Chain Team',
  description: 'Packaging, sourcing, manufacturing, compliance, and retail execution — owned by one accountable team. Serving cosmetics, luxury goods, wine and spirits, wellness, and consumer hardware brands.',
  keywords: 'integrated supply chain, packaging supply chain, retail compliance, cosmetics packaging, luxury goods supply chain, wine and spirits packaging, wellness manufacturing, consumer hardware packaging, sourcing and manufacturing',
};

const problems = [
  ['Six vendors. Six answers. No accountability.', 'The design agency, the packaging supplier, the factory, the 3PL, and the retail partner each own a piece. Nobody owns the outcome.'],
  ['The product is ready. Manufacturing is not.', 'Specifications are incomplete, suppliers are making assumptions, or the production plan cannot support the launch date.'],
  ['The packaging looks right — but fails somewhere else.', 'Leaks, damage, inconsistent finishes, excessive freight, or retailer requirements appear after the important decisions are already made.'],
  ['Costs keep changing. Nobody can explain why.', 'Quotes, freight, tooling, materials, and minimums live in different places. You need the real landed-cost picture.'],
  ['Quality problems keep coming back.', 'The factory fixes the latest defect, but the specification, inspection plan, and ownership model never change.'],
  ['Retail exposed a system that was never built to scale.', 'Case packs, labeling, routing, EDI, inventory, and fulfillment now have to work together — not as separate projects.'],
];

const industries = [
  { name: 'Cosmetics & Beauty', number: '01', intro: 'Where formulation, component, decoration, and compliance have to work as one system.', items: ['Bottles, jars, tubes, pumps & closures', 'Formula-material compatibility', 'Decoration, finish & color consistency', 'Leak, transit & quality testing', 'Claims, labeling & retail readiness'] },
  { name: 'Wine & Spirits', number: '02', intro: 'Where presentation matters, but glass, freight, packout, and channel requirements determine performance.', items: ['Glass, closures & labels', 'Secondary and gift packaging', 'Breakage and freight exposure', 'Case-pack and display configuration', 'Channel and compliance requirements'] },
  { name: 'Luxury Goods', number: '03', intro: 'Where small material or finish inconsistencies become visible product defects.', items: ['Premium materials & finishes', 'Color and cosmetic-defect standards', 'Supplier craftsmanship', 'Unboxing and presentation', 'Brand-protection requirements'] },
  { name: 'Wellness & Personal Care', number: '04', intro: 'Where product-contact materials, claims, sustainability, and repeatable production all matter.', items: ['Product-contact materials', 'Claims and certifications', 'Lot, batch and expiry needs', 'Retail and subscription formats', 'Sustainable-material tradeoffs'] },
  { name: 'Consumer Technology & Hardware', number: '05', intro: 'Where fitment, protection, certification, and technical documentation cannot be separated from packaging.', items: ['Product and accessory fitment', 'Protective engineering', 'Certifications and testing', 'Parcel and retail performance', 'Technical specifications'] },
];

const countries = ['USA', 'Mexico', 'Canada', 'China', 'Vietnam', 'Thailand', 'Indonesia', 'S. Korea', 'India', 'Bangladesh', 'Turkey', 'Egypt', 'Romania', 'Poland'];
const certs = [
  { name: 'ISO', note: 'Quality management systems' },
  { name: 'FSC', note: 'Responsible fiber sourcing' },
  { name: 'FDA', note: 'Product-contact compliance' },
  { name: 'ASTM', note: 'Chemical safety standards' },
  { name: 'FAMA', note: 'Manufacturing assessment' },
  { name: 'SGS QA', note: '3rd party inspection' },
  { name: 'CPC', note: 'Children\'s product certification' },
];

export default function HomePage() {
  return (
    <>
      <Nav variant="home" />

      <main className="concept-v2">
        {/* HERO — Concept 2 messaging (reverted) */}
        <section className="concept-hero gl">
          <div className="concept-hero-copy">
            <div className="concept-kicker">Supply chain consulting + implementation</div>
            <h1>We solve the operational problems between product idea and <span>successful scale.</span></h1>
            <p>We help physical-product brands make better decisions about materials, manufacturing, packaging, compliance, sourcing, and retail execution — then stay to implement them.</p>
            <div className="hb">
              <EmailButton subject="Let's Talk — Logic Agency" className="bt bo">Tell Us What&apos;s Not Working &rarr;</EmailButton>
              <a href="#services" className="bt bg">See What We Own</a>
            </div>
          </div>
          <div className="concept-hero-map" aria-label="Logic covers the entire path from product to shelf">
            <div className="map-axis"><span>01</span><strong>Product</strong><small>Materials &amp; form</small></div>
            <div className="map-axis"><span>02</span><strong>Make</strong><small>Factory &amp; quality</small></div>
            <div className="map-axis"><span>03</span><strong>Move</strong><small>Freight &amp; inventory</small></div>
            <div className="map-axis"><span>04</span><strong>Sell</strong><small>Compliance &amp; retail</small></div>
            <div className="map-line" />
          </div>
        </section>

        {/* PROOF BAR */}
        <section className="concept-proofbar">
          <span>20+ years in manufacturing &amp; supply chain</span>
          <span>13 supplier countries</span>
          <span>ISO · FSC · FDA · ASTM certified chains</span>
          <span>One team, product to shelf</span>
        </section>

        {/* INTEGRATION COMPARISON — from the deck */}
        <section id="integration" className="sc wh concept-integration">
          <div className="si">
            <div className="sl">The Traditional Model Is Broken</div><div className="or" />
            <h2 className="sh">Six vendors, six agendas. <span className="o">Or one accountable team.</span></h2>
            <p className="ss">Retail titans face the same hidden hurdle emerging brands do: internal teams drown under workload, while service providers and third-party suppliers chase their own wins — not the product&apos;s.</p>

            <FadeIn className="integration-compare">
              <article className="compare-col compare-broken">
                <div className="compare-hdr"><span>Traditional</span><h3>Disconnected teams &amp; processes</h3></div>
                <ul className="compare-chain">
                  <li><span>01</span><div><strong>Design agency</strong><small>Draws it, hands it off.</small></div></li>
                  <li><span>02</span><div><strong>Packaging supplier</strong><small>Quotes their part. Nothing else.</small></div></li>
                  <li><span>03</span><div><strong>Factory / co-man</strong><small>Runs to spec, not to intent.</small></div></li>
                  <li><span>04</span><div><strong>Freight forwarder</strong><small>Ships whatever arrives.</small></div></li>
                  <li><span>05</span><div><strong>3PL</strong><small>Fulfills what it receives.</small></div></li>
                  <li><span>06</span><div><strong>Retail ops</strong><small>Files the chargeback.</small></div></li>
                </ul>
                <p className="compare-outcome">Every partner owns a piece. Nobody owns the product.</p>
              </article>

              <article className="compare-col compare-logic">
                <div className="compare-hdr"><span>Logic</span><h3>One integrated team</h3></div>
                <div className="compare-hub">
                  <div className="hub-node hub-center">
                    <strong>Logic</strong>
                    <small>Design · Sourcing · Manufacturing · Compliance · Freight · Retail</small>
                  </div>
                  <div className="hub-ring">
                    <span>Product</span>
                    <span>Materials</span>
                    <span>Factory</span>
                    <span>Quality</span>
                    <span>Compliance</span>
                    <span>Freight</span>
                    <span>Warehouse</span>
                    <span>Retail</span>
                  </div>
                </div>
                <p className="compare-outcome compare-outcome-win">Same team from decision to delivery. Brand-first, measurable, accountable.</p>
              </article>
            </FadeIn>
          </div>
        </section>

        {/* PROBLEMS */}
        <section id="problems" className="sc dks gd concept-problems">
          <div className="si">
            <div className="sl">What We Solve</div><div className="or" />
            <h2 className="sh">The symptoms are visible. <span className="o">The real problem usually isn&apos;t.</span></h2>
            <p className="ss">The visible issue is usually a late shipment, a failed audit, an expensive material decision, or a packaging spec that no longer fits the business. The root cause almost always lives one layer deeper.</p>
            <FadeIn className="problem-ledger">
              {problems.map(([title, copy], i) => (
                <article className="problem-row" key={title}>
                  <span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p>
                </article>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* SERVICES — three connected disciplines */}
        <section id="services" className="sc wh concept-services concept-services-light">
          <div className="si">
            <div className="sl">Services</div><div className="or" />
            <h2 className="sh">Three connected disciplines. <span className="o">One accountable team.</span></h2>
            <p className="ss">Brands rarely call because they need &ldquo;supply chain architecture.&rdquo; They call because a launch is slipping, margins are moving, or a product cannot reliably make it from idea to shelf.</p>
            <FadeIn className="service-trio">
              <article className="service-domain service-domain-dark">
                <div className="domain-top"><span>01</span><p>Discipline</p></div>
                <h3>Manufacturing Optimization</h3>
                <p className="domain-lede">Match the product to the right factory, tools, and process — and hold that partner to spec, cost, and calendar.</p>
                <ul>
                  <li>Manufacturing selection &amp; onboarding</li>
                  <li>Supplier qualification &amp; oversight</li>
                  <li>Material &amp; component decisions</li>
                  <li>Tooling, sampling &amp; production management</li>
                  <li>Quality control &amp; testing systems</li>
                  <li>Cost, margin &amp; landed-cost analysis</li>
                </ul>
              </article>
              <article className="service-domain service-domain-mid">
                <div className="domain-top"><span>02</span><p>Discipline</p></div>
                <h3>Supply Chain Control</h3>
                <p className="domain-lede">Design and run the flow of materials, product, and information from origin to warehouse — so nothing arrives late, wrong, or unexplained.</p>
                <ul>
                  <li>Supply chain &amp; cost audits</li>
                  <li>Global sourcing across 13 countries</li>
                  <li>Freight, customs &amp; logistics management</li>
                  <li>Inventory planning &amp; fulfillment</li>
                  <li>Vendor coordination &amp; accountability</li>
                  <li>Risk assessment &amp; contingency planning</li>
                </ul>
              </article>
              <article className="service-domain service-domain-light">
                <div className="domain-top"><span>03</span><p>Discipline</p></div>
                <h3>Retail Readiness</h3>
                <p className="domain-lede">Engineer the product, packaging, documentation, and compliance so it lands on shelf without chargebacks, deductions, or rework.</p>
                <ul>
                  <li>Retail-ready structural packaging</li>
                  <li>Case pack, pallet &amp; routing specs</li>
                  <li>Retailer compliance (KeHE, UNFI, big-box)</li>
                  <li>EDI, ASN &amp; chargeback prevention</li>
                  <li>Certifications (ISO, FSC, FDA, ASTM, CPC)</li>
                  <li>Retail-display &amp; packout development</li>
                </ul>
              </article>
            </FadeIn>
          </div>
        </section>

        {/* DESIGN SYSTEM — scroll-led product-to-shelf journey */}
        <section id="design-system" className="sc dks gd concept-design">
          <div className="si">
            <DesignJourney />
          </div>
        </section>

        {/* METHOD */}
        <section id="process" className="sc dks gd concept-method">
          <div className="si">
            <div className="sl">How We Work</div><div className="or" />
            <h2 className="sh">Find the problem. Define the answer. <span className="o">Make it work.</span></h2>
            <p className="ss">A clear three-stage method, scaled to the problem in front of us.</p>
            <FadeIn className="method-track">
              <article>
                <span className="method-num">01</span>
                <div>
                  <p className="method-label">Diagnose</p>
                  <h3>Audit &amp; Analysis</h3>
                  <p>We inspect the product, packaging, suppliers, costs, compliance requirements, workflows, and launch constraints.</p>
                  <strong>You receive</strong>
                  <ul><li>Current-state analysis</li><li>Risk &amp; cost breakdown</li><li>Compliance gaps</li><li>Supplier assessment</li></ul>
                </div>
              </article>
              <article>
                <span className="method-num">02</span>
                <div>
                  <p className="method-label">Define</p>
                  <h3>Recommendations &amp; Roadmap</h3>
                  <p>We turn findings into specific decisions, specifications, budgets, owners, and decision gates.</p>
                  <strong>You receive</strong>
                  <ul><li>Prioritized roadmap</li><li>Material &amp; supplier recommendations</li><li>Technical requirements</li><li>Timeline and budget</li></ul>
                </div>
              </article>
              <article>
                <span className="method-num">03</span>
                <div>
                  <p className="method-label">Deliver</p>
                  <h3>Implementation &amp; Management</h3>
                  <p>We manage the work across suppliers, factories, testing partners, logistics providers, retailers, and your team.</p>
                  <strong>You receive</strong>
                  <ul><li>Vendor coordination</li><li>Sampling &amp; production</li><li>QC &amp; compliance execution</li><li>Launch &amp; ongoing reporting</li></ul>
                </div>
              </article>
            </FadeIn>
            <div className="method-statement">Advice is only useful if it survives contact with production. <span>We stay for that part.</span></div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="sc gl concept-industries">
          <div className="si">
            <div className="sl">Industry Expertise</div><div className="or" />
            <h2 className="sh">Category knowledge changes <span className="o">the recommendation.</span></h2>
            <p className="ss">A pump, a glass bottle, and a consumer device do not belong in the same generic playbook.</p>
            <FadeIn className="industry-stack">
              {industries.map((industry) => (
                <article key={industry.name}>
                  <span>{industry.number}</span>
                  <div><h3>{industry.name}</h3><p>{industry.intro}</p></div>
                  <ul>{industry.items.map(item => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* SELECTED WORK — 2 featured + 3-card slate */}
        <section id="results" className="sc dks gd concept-results">
          <div className="si">
            <div className="sl">Selected Work</div><div className="or" />
            <h2 className="sh">The work is different. <span className="o">The method holds.</span></h2>
            <p className="ss">Product, packaging, sourcing, manufacturing, compliance, and delivery — owned end-to-end.</p>

            <FadeIn className="result-grid">
              <article>
                <img src="/images/epicutis.jpg" alt="Epicutis skincare packaging" />
                <div>
                  <p className="result-meta">Epicutis · Luxury skincare</p>
                  <h3>A packaging and supply chain system built for 7× SKU growth.</h3>
                  <p>Logic owned sourcing, engineering, vendor management, and inventory planning while maintaining a premium product experience.</p>
                  <div className="result-stats">
                    <span><strong>7×</strong> SKU growth</span>
                    <span><strong>15%</strong> cost savings</span>
                    <span><strong>90-day</strong> inventory plan</span>
                  </div>
                  <a href="/work/epicutis">View case study &rarr;</a>
                </div>
              </article>
              <article>
                <img src="/images/audio-enhancement.jpg" alt="Audio Enhancement classroom product packaging" />
                <div>
                  <p className="result-meta">Audio Enhancement · Consumer hardware</p>
                  <h3>Packaging engineered as part of the product system.</h3>
                  <p>Product fitment, structure, sourcing, and production came together in a package that works as a daily-use hub.</p>
                  <div className="result-stats">
                    <span><strong>20%</strong> shipping saved</span>
                    <span><strong>$0</strong> upgrade cost</span>
                    <span><strong>4+</strong> SKUs expanded</span>
                  </div>
                  <a href="/work/audio-enhancement">View case study &rarr;</a>
                </div>
              </article>
            </FadeIn>

            <FadeIn className="work-slate">
              <article>
                <p className="slate-meta">Barebones · Outdoor goods</p>
                <h4>Structural packaging across a broad product assortment.</h4>
                <p>Distinct material story and structural packaging built to travel across a category-diverse product line — lighting, gardening, outdoor gear.</p>
                <ul className="slate-scope">
                  <li>Structural design</li>
                  <li>Packaging engineering</li>
                </ul>
              </article>
              <article>
                <p className="slate-meta">Kiki World · Community-driven beauty</p>
                <h4>Sustainable packaging that supports global distribution.</h4>
                <p>Minimalist, tech-forward packaging engineered for reduced environmental impact and the durability required for global fulfillment.</p>
                <ul className="slate-scope">
                  <li>Structural design</li>
                  <li>Packaging engineering</li>
                  <li>Manufacturing management</li>
                </ul>
              </article>
              <article>
                <p className="slate-meta">MPOWERD · Lighting for energy-scarce regions</p>
                <h4>Elevated presentation without sacrificing environmental goals.</h4>
                <p>Packaging that elevates shelf presence, communicates a mission, and stays aligned with the sustainability standards the product is built on.</p>
                <ul className="slate-scope">
                  <li>Structural design</li>
                  <li>Packaging engineering</li>
                  <li>Manufacturing management</li>
                </ul>
              </article>
            </FadeIn>
          </div>
        </section>

        {/* TRUST — Supplier network + Certifications */}
        <section id="trust" className="sc wh concept-trust">
          <div className="si">
            <div className="sl">Supplier Network &amp; Compliance</div><div className="or" />
            <h2 className="sh">The chain behind <span className="o">the recommendation.</span></h2>
            <p className="ss">Logic operates certified supply chains across 13 supplier countries, backed by third-party inspection and category-specific compliance.</p>

            <FadeIn className="trust-grid">
              <div className="trust-network">
                <div className="trust-hdr">
                  <span>01</span>
                  <div><strong>Global supplier network</strong><small>Direct relationships. Not brokers.</small></div>
                </div>
                <ul className="country-grid">
                  {countries.map(c => <li key={c}>{c}</li>)}
                </ul>
                <p className="trust-note">Offices in Orange County, CA and Salt Lake City, UT. Auditing, factory vetting, freight, customs, and QC managed as one workflow.</p>
              </div>

              <div className="trust-certs">
                <div className="trust-hdr">
                  <span>02</span>
                  <div><strong>Certified &amp; independently tested</strong><small>Quality is a system, not a promise.</small></div>
                </div>
                <ul className="cert-grid">
                  {certs.map(c => (
                    <li key={c.name}><strong>{c.name}</strong><span>{c.note}</span></li>
                  ))}
                </ul>
                <p className="trust-note">3rd-party SGS quality assurance, ASTM chemical safety compliance, child-resistant certification testing, and FDA-compliant product-contact materials — matched to the category.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ENGAGEMENT MODEL */}
        <section id="pricing" className="sc gl concept-engage">
          <div className="si">
            <div className="sl">Ways To Engage</div><div className="or" />
            <h2 className="sh">Start with the problem. <span className="o">Choose the right level of ownership.</span></h2>
            <p className="ss">Defined diagnostics and roadmaps are scoped as projects. Ongoing implementation is structured monthly.</p>
            <FadeIn className="engage-grid">
              <article>
                <span>01 · Fixed scope</span>
                <h3>Audit &amp; Analysis</h3>
                <p>For a defined cost, supplier, product, packaging, compliance, or operational problem.</p>
                <strong>Scoped to the question</strong>
                <small>Clear boundaries, deliverables, and timeline before work begins.</small>
              </article>
              <article>
                <span>02 · Fixed project</span>
                <h3>Recommendations &amp; Roadmap</h3>
                <p>For designing a new operating system or correcting a complex, connected one.</p>
                <strong>Priced by complexity</strong>
                <small>Product, supplier, testing, compliance, and timeline determine scope.</small>
              </article>
              <article className="engage-feature">
                <span>03 · Monthly</span>
                <h3>Implementation &amp; Management</h3>
                <p>For teams that need Logic to own workstreams and keep the operating system moving.</p>
                <strong>$2.5K–$10K+ / month</strong>
                <small>From advisory through active management and embedded operations.</small>
              </article>
            </FadeIn>
            <div className="retainer-bands">
              <div><span>Advisory</span><strong>$2.5–3K</strong><p>We guide. Your team executes.</p></div>
              <div><span>Active Management</span><strong>$5–7K</strong><p>We own defined workstreams.</p></div>
              <div><span>Embedded Operations</span><strong>$10K+</strong><p>We operate as part of your team.</p></div>
            </div>
          </div>
        </section>

        {/* WHY LOGIC */}
        <section className="sc dks gd concept-why">
          <div className="si why-grid">
            <div>
              <div className="sl">Why Logic</div><div className="or" />
              <h2 className="sh">One team from <span className="o">decision to delivery.</span></h2>
              <p className="why-lede">Most brands struggle with third parties tied to suppliers or siloed services. Logic embeds as your partner, driving brand-first solutions and measurable results.</p>
            </div>
            <div className="why-list">
              <p><span>01</span><strong>Manufacturing fluency</strong>Recommendations are grounded in materials, tooling, tolerances, quality, freight, and cost.</p>
              <p><span>02</span><strong>Category-specific judgment</strong>The answer reflects the product and channel — not a generic operating template.</p>
              <p><span>03</span><strong>Implementation ownership</strong>The same team that finds the issue coordinates the work required to fix it.</p>
              <p><span>04</span><strong>Commercial clarity</strong>A defined question, scope, timeline, decision points, and cost before the engagement starts.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="sc gl">
          <div className="si">
            <div className="sl">FAQ</div><div className="or" />
            <h2 className="sh">Questions before <span className="o">the first conversation.</span></h2>
            <FaqAccordion />
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="concept-cta">
          <p>Not sure whether you need an audit, a roadmap, or implementation?</p>
          <h2>Start with what is <span>not working.</span></h2>
          <p className="concept-cta-copy">We&apos;ll help define the problem, explain what a useful engagement looks like, and tell you plainly if Logic is not the right fit.</p>
          <div className="cbt">
            <EmailButton subject="Let's Talk — Logic Agency" className="bt bw">Start a Conversation &rarr;</EmailButton>
            <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a 15-Minute Call &rarr;</a>
          </div>
        </section>
      </main>

      <FooterHome />
    </>
  );
}
