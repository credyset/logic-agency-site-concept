import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Source Packaging Overseas: A CPG Brand's Practical Guide",
  "description": "The real process for sourcing packaging internationally — RFQ through customs, quality control, IP protection, and when to stay domestic. Real cost data.",
  "author": {
    "@type": "Person",
    "name": "Jordan Harper",
    "url": "https://www.logicagencyinc.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Logic Agency Inc.",
    "url": "https://www.logicagencyinc.com"
  },
  "mainEntityOfPage": "https://www.logicagencyinc.com/blog/global-packaging-sourcing",
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Logic Agency", "item": "https://www.logicagencyinc.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.logicagencyinc.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "How to Source Packaging Overseas: A CPG Brand's Practical Guide", "item": "https://www.logicagencyinc.com/blog/global-packaging-sourcing" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do I actually save sourcing packaging from overseas versus domestic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unit cost savings run an estimated 30-60% for most rigid and folding carton packaging when comparing factory prices. Landed cost — after ocean freight, customs duties, and drayage — reduces the gap to an estimated 20-45% depending on volume and category. The savings are real and significant above $15,000 in order value."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to source packaging from China?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The full cycle from first factory contact to goods in your US warehouse typically runs 18-34 weeks for a new packaging program. Sampling alone runs 6-10 weeks for a 3-round process. Plan 20-24 weeks as a realistic working estimate for first-time programs."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum order quantity for overseas packaging sourcing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MOQs vary by category: folding cartons typically run 3,000-5,000 units minimum; rigid setup boxes run 500-1,000 units; custom molded components run 1,000-2,000 units. Brands with volumes below these thresholds often find that shared tooling programs or stock packaging options are more economical."
      }
    },
    {
      "@type": "Question",
      "name": "How do I protect my packaging design when working with overseas factories?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The core tools are: an NDA before sharing any artwork or specifications, design registration in China for structurally unique elements, and a non-exclusivity clause in the purchase agreement. Operational practices — watermarked sampling files, compartmentalized specification sharing — reduce additional risk."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a customs broker for packaging imports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A licensed customs broker files entry, calculates and pays duties, and manages port release. For packaging imports from China, Section 301 tariffs add complexity that a specialist broker handles more efficiently than general customs brokers. Fees run $150-$350 per shipment entry."
      }
    },
    {
      "@type": "Question",
      "name": "When should a brand source domestically instead of overseas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Domestic sourcing makes more sense when: order value is below $15,000, lead time requirements are 8-10 weeks or less, product involves complex formulation compatibility, or the brand lacks the operational infrastructure to manage an international sourcing process. The unit economics favor international sourcing at meaningful volume; the management requirements make it a poor fit for early-stage brands without supply chain support."
      }
    }
  ]
};

export const metadata = {
  title: 'How to Source Packaging Overseas | Logic Agency',
  description: 'The real process for sourcing packaging internationally — RFQ through customs, quality control, IP protection, and when to stay domestic. Real cost data.',
  keywords: 'how to source packaging overseas, overseas packaging supplier, international packaging sourcing, packaging factory China, CPG packaging sourcing guide, domestic vs overseas packaging, packaging cost savings overseas',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/blog/global-packaging-sourcing',
  },
  openGraph: {
    title: "How to Source Packaging Overseas: A CPG Brand's Practical Guide",
    description: 'The real process for sourcing packaging internationally — RFQ through customs, quality control, IP protection, and when to stay domestic. Real cost data.',
    url: 'https://www.logicagencyinc.com/blog/global-packaging-sourcing',
    type: 'article',
    publishedTime: '2026-06-17',
    authors: ['Jordan Harper'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "How to Source Packaging Overseas: A CPG Brand's Practical Guide",
    description: 'The real process for sourcing packaging internationally — RFQ through customs, quality control, IP protection, and when to stay domestic. Real cost data.',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav variant="guide" />

      {/* HERO */}
      <section className="b-hero gd">
        <div className="b-hero-inner">
          <div className="breadcrumb">
            <a href="/">Logic Agency</a> &nbsp;/&nbsp; <a href="/blog">Blog</a>
          </div>
          <span className="b-tag">Packaging Sourcing</span>
          <h1>How to Source Packaging Overseas: A CPG Brand&apos;s Practical Guide</h1>
          <p className="b-lede">Sourcing packaging overseas &mdash; primarily from China, Vietnam, or South Korea &mdash; typically reduces unit costs by an estimated 30&ndash;60% compared to domestic production for most rigid and folding carton packaging. The landed cost gap is real and large. But the process is longer, more documentation-heavy, and less forgiving than domestic sourcing.</p>
          <div className="b-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Jun 2026</span>
            <span>13 min read</span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="b-feat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/port-sourcing.jpg" alt="How to source packaging overseas for CPG brands — RFQ through customs" className="b-feat-img" />
      </div>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>International packaging typically runs an estimated 30&ndash;60% less per unit than domestic equivalents, with the largest gaps in rigid boxes, folding cartons, and custom-molded components.</li>
              <li>The full sourcing cycle &mdash; RFQ through landed delivery &mdash; runs 16&ndash;24 weeks minimum; build this into your production calendar.</li>
              <li>Quality control is a process, not a conversation: pre-production samples, inline inspections, and third-party QC audits are non-negotiable above $20K in spend.</li>
              <li>IP protection is contractual and operational, not just a trust decision &mdash; NDAs, design registration, and non-exclusivity clauses govern the relationship.</li>
              <li>The decision to source domestically or internationally depends on revenue stage, product complexity, lead time tolerance, and volume &mdash; not just unit price.</li>
            </ul>
          </div>

          <h2 id="cost-gap">The Cost Gap: What You&apos;re Actually Saving</h2>

          <p>The savings from international sourcing are real but not uniform. Here is what to expect by packaging category:</p>

          <p><strong>Rigid setup boxes (hinged lid, magnetic closure):</strong></p>
          <ul>
            <li>Domestic: $6.00&ndash;$14.00/unit</li>
            <li>Asia-sourced landed cost: $2.50&ndash;$6.00/unit</li>
            <li>Estimated gap: 50&ndash;60%</li>
          </ul>

          <p><strong>Folding cartons (retail secondary packaging):</strong></p>
          <ul>
            <li>Domestic: $0.45&ndash;$1.40/unit</li>
            <li>Asia-sourced landed cost: $0.18&ndash;$0.55/unit</li>
            <li>Estimated gap: 40&ndash;55%</li>
          </ul>

          <p><strong>Custom-molded thermoform inserts:</strong></p>
          <ul>
            <li>Domestic: $1.20&ndash;$3.50/unit</li>
            <li>Asia-sourced landed cost: $0.45&ndash;$1.20/unit</li>
            <li>Estimated gap: 55&ndash;65%</li>
          </ul>

          <p><strong>Labels and flexible film pouches:</strong></p>
          <ul>
            <li>Domestic: $0.08&ndash;$0.30/unit</li>
            <li>Asia-sourced landed cost: $0.05&ndash;$0.15/unit</li>
            <li>Estimated gap: 30&ndash;40%</li>
          </ul>

          <p>The savings compress at lower volumes. At 1,000 units, domestic and international landed costs are often comparable once you factor in ocean freight, drayage, and customs duties. At 10,000 units, the gap becomes structurally significant. At 50,000+ units, the gap defines margin.</p>

          <p>The landed cost calculation needs to include: factory price + ocean freight + customs duty + drayage to warehouse + any in-transit inspection costs. Brands that quote only the factory price underestimate total spend by an estimated 20&ndash;35%.</p>

          <h2 id="when-it-makes-sense">When International Sourcing Makes Sense (and When It Doesn&apos;t)</h2>

          <p>Not every brand should be sourcing overseas. The decision depends on five factors:</p>

          <p><strong>Volume:</strong> The ocean freight minimum charge structure means low-volume shipments lose much of the unit cost savings to freight. Under $15,000 in total order value, domestic sourcing is often more efficient on total cost. Above $30,000, international sourcing consistently wins.</p>

          <p><strong>Lead time tolerance:</strong> The full sourcing cycle runs 16&ndash;24 weeks minimum for a new packaging program. Brands that need 8&ndash;10 week turnarounds from approved artwork to warehouse receipt should be sourcing domestically.</p>

          <p><strong>Product complexity:</strong> Packaging with complex structural requirements, highly precise tolerances, or formulation-specific compatibility requires more intensive QC infrastructure to manage internationally.</p>

          <p><strong>Operational maturity:</strong> Brands sourcing internationally for the first time need someone managing the supplier relationship, QC process, and logistics chain. Self-managing an international sourcing program with no prior experience reliably produces expensive lessons.</p>

          <p><strong>Revenue stage:</strong> Most brands transition to international sourcing in the $3&ndash;8M revenue range. Before $3M, the volume may not justify the cycle length and management overhead. Above $8M, the unit economics demand it.</p>

          <h2 id="sourcing-process">The Sourcing Process, Step by Step</h2>

          <h3>Step 1: Specifications Before Anything Else</h3>

          <p>The most common sourcing mistake is sending an RFQ without complete specifications. Factories quote what they think you want. A complete packaging specification includes:</p>

          <ul>
            <li>Structural dimensions (outer and inner, tolerances)</li>
            <li>Material specifications (board weight, substrate, finish)</li>
            <li>Printing specifications (color model, Pantone references, artwork files)</li>
            <li>Decoration specifications (foil type, emboss depth, lamination finish)</li>
            <li>Quantity (initial order + estimated annual volume)</li>
            <li>Required certifications (FSC, recycled content, food-safe if applicable)</li>
            <li>Delivery destination and Incoterms</li>
          </ul>

          <p>Complete specifications typically reduce sampling rounds by 60&ndash;70% and produce comparable quotes across factories.</p>

          <h3>Step 2: RFQ &mdash; Who to Send It To</h3>

          <p>Send the RFQ to 4&ndash;6 factories. You want 2&ndash;3 factories with proven experience in your specific packaging category, references from brands you can verify, and export experience to the US market specifically. The relationship is the most important variable at the vetting stage.</p>

          <h3>Step 3: Factory Vetting</h3>

          <p>Before proceeding past RFQ response, vet each factory against 6 criteria:</p>

          <ol>
            <li><strong>Category experience:</strong> How many of their current clients use this exact packaging format?</li>
            <li><strong>US export experience:</strong> How many US clients do they have? Can they provide references?</li>
            <li><strong>QC infrastructure:</strong> What inline QC processes run during production?</li>
            <li><strong>Certifications:</strong> ISO 9001 minimum; FSC certification if you need it.</li>
            <li><strong>Minimum order quantities:</strong> Confirm MOQs match your volume.</li>
            <li><strong>Lead times:</strong> Confirm production lead times for your order size, not the marketing-sheet estimate.</li>
          </ol>

          <p>For orders above $20,000, a factory audit &mdash; either in-person or via a third-party auditor &mdash; is worth the cost before placing the first purchase order.</p>

          <h3>Step 4: Sampling</h3>

          <p>Samples are not a formality. They are the QC gate before mass production. The sampling sequence for most packaging programs:</p>

          <ol>
            <li><strong>Structural sample (unprinted):</strong> Confirm dimensions, material weight, and mechanism function.</li>
            <li><strong>Printed color proof:</strong> Confirm Pantone accuracy, artwork reproduction, and finish quality.</li>
            <li><strong>Pre-production sample (printed, finished):</strong> Final approval before tooling and mass production commitment.</li>
          </ol>

          <p>Each round has a typical 2&ndash;4 week cycle from approval to receipt. Budget 6&ndash;10 weeks for a standard 3-round sampling process. Reject samples that don&apos;t meet specification, even if the price is right. Accepting a substandard sample sends a signal that standards are negotiable.</p>

          <h3>Step 5: Tooling and Pre-Production</h3>

          <p>For packaging with custom structural shapes, tooling is a one-time cost charged before production begins. Typical tooling costs:</p>

          <ul>
            <li>Die-cut carton tooling: $200&ndash;$600 per SKU</li>
            <li>Rigid box tooling (specialty shapes): $800&ndash;$2,500</li>
            <li>Custom thermoform tooling: $1,500&ndash;$6,000 depending on complexity</li>
          </ul>

          <p>Tooling is generally owned by the factory and kept on-site. Establish in writing that you have the right to move the tooling to another factory if the relationship ends.</p>

          <h3>Step 6: Production</h3>

          <p>During mass production, QC has three intervention points:</p>

          <p><strong>Pre-production meeting:</strong> Confirm approved specifications, sample reference, and quality standards with the production team before the run starts. Many factories change operators between sampling and production.</p>

          <p><strong>Inline inspection (mid-production):</strong> Conduct or hire a third-party QC firm to inspect during production, typically at an estimated 30&ndash;50% completion. Catching a defect at an estimated 30% of production is materially different from catching it at completion.</p>

          <p><strong>Final random inspection (FRI):</strong> Before shipment, conduct an AQL inspection &mdash; typically AQL 2.5 for major defects and AQL 4.0 for minor defects. This is the last QC gate before goods leave the factory.</p>

          <p>Third-party QC inspection firms (QIMA, Bureau Veritas, Intertek) charge $250&ndash;$400 per inspection day for factories in China. For a $15,000 packaging order, a $350 inspection is a straightforward insurance purchase.</p>

          <h3>Step 7: Freight</h3>

          <p>Ocean freight from China to US West Coast ports runs 18&ndash;22 days; East Coast runs 28&ndash;35 days. The full freight cycle from factory departure to warehouse receipt typically runs 35&ndash;55 days.</p>

          <p>Incoterms determine where cost and risk transfer:</p>

          <ul>
            <li><strong>FOB (Free on Board):</strong> Factory is responsible through vessel loading; your cost and risk from that point.</li>
            <li><strong>CIF (Cost, Insurance, Freight):</strong> Factory arranges and pays freight and insurance to destination port; you pay drayage and customs.</li>
            <li><strong>DDP (Delivered Duty Paid):</strong> Factory delivers to your door, all costs included &mdash; simplest for first-time importers, but you lose freight visibility.</li>
          </ul>

          <h3>Step 8: Customs</h3>

          <p>US customs duties for packaging materials vary by HTS code. Cardboard and paperboard cartons: 0&ndash;5.3%; rigid plastic boxes: 3.7&ndash;5.3%; rigid paper/board boxes: 2.0&ndash;5.3%; metal closures: 0&ndash;6.5%.</p>

          <p>Section 301 tariffs on goods from China add a separate layer. As of 2025, most packaging materials from China carry an additional estimated 7.5&ndash;25% Section 301 tariff. Factor this into landed cost calculations.</p>

          <h2 id="ip-protection">IP Protection: Contractual and Operational</h2>

          <p>IP protection for packaging designs requires both contract terms and operational practice. Trust is not a strategy.</p>

          <p><strong>Contractual:</strong></p>
          <ul>
            <li><strong>NDA:</strong> Before sharing artwork, specifications, or structural designs, have a signed NDA with the factory.</li>
            <li><strong>Design registration:</strong> For packaging with unique structural features, register the design in China before sharing with factories.</li>
            <li><strong>Non-exclusivity clause:</strong> Establish in writing that your tooling, structural specifications, and printed artwork cannot be reproduced for competing brands.</li>
            <li><strong>Tooling ownership:</strong> Establish who owns tooling and what happens to it if the relationship ends.</li>
          </ul>

          <p><strong>Operational:</strong></p>
          <ul>
            <li>Split sensitive components between suppliers (print packaging at one factory, manufacture structure at another).</li>
            <li>Use vector artwork watermarked for sampling purposes; final print files only after PO confirmation.</li>
            <li>Monitor Alibaba and other platforms for unauthorized reproductions.</li>
          </ul>

          <h2 id="where-to-source">Where to Source: China, Vietnam, or South Korea</h2>

          <p><strong>China</strong> remains the dominant sourcing location for most packaging categories. The manufacturing ecosystem is mature. The trade-off is the Section 301 tariff layer, which adds an estimated 7.5&ndash;25% to landed cost depending on category. China sourcing is most advantageous for: rigid boxes, folding cartons, custom-molded components, and most specialty printing and finishing.</p>

          <p><strong>Vietnam</strong> has grown significantly as an alternative to China over the last five years. Vietnam&apos;s strengths are in: flexible packaging, paper-based structures, and mid-complexity rigid packaging. Tariff exposure is lower (no Section 301), but the factory ecosystem is less deep.</p>

          <p><strong>South Korea</strong> is the appropriate sourcing market for: high-precision glass packaging, aluminum closures, and premium coated boards that require tight color consistency. South Korean factories typically command an estimated 10&ndash;20% higher prices than Chinese equivalents but deliver more consistent quality on precision-sensitive specifications.</p>

          <p>The practical question for most brands is not &ldquo;which country&rdquo; but &ldquo;which factory.&rdquo; The right factory in China outperforms the wrong factory in Vietnam. Country selection matters less than specific factory vetting.</p>

          <h2 id="timeline">Building the Timeline Into Your Calendar</h2>

          <p>The single biggest execution failure in international packaging sourcing is running out of time. Here is the realistic planning calendar:</p>

          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Factory identification and vetting</td>
                <td>2&ndash;4 weeks</td>
              </tr>
              <tr>
                <td>RFQ and price negotiation</td>
                <td>1&ndash;2 weeks</td>
              </tr>
              <tr>
                <td>Sampling (3 rounds)</td>
                <td>6&ndash;10 weeks</td>
              </tr>
              <tr>
                <td>Production</td>
                <td>4&ndash;8 weeks</td>
              </tr>
              <tr>
                <td>Ocean freight</td>
                <td>4&ndash;8 weeks</td>
              </tr>
              <tr>
                <td>Port processing + drayage</td>
                <td>1&ndash;2 weeks</td>
              </tr>
              <tr>
                <td><strong>Total: concept to warehouse</strong></td>
                <td><strong>18&ndash;34 weeks</strong></td>
              </tr>
            </tbody>
          </table>

          <p>Plan for the high end of each range until you have established supplier relationships that give you predictable cycle times. Brands entering retail for the first time need this timeline aligned with their buyer&apos;s PO expectations. If the buyer wants product on shelf by October 1, the packaging decision needs to be made in March.</p>

          <h2 id="how-logic-manages">How Logic Agency Manages International Sourcing</h2>

          <p>We maintain relationships with vetted packaging factories across China, Vietnam, and South Korea &mdash; relationships built over 20 years of production management. When a client needs overseas sourcing, they are not introducing themselves to a factory directory. They are accessing existing relationships with factories we have already audited, whose QC infrastructure we know, and whose documentation practices we trust.</p>

          <p>The practical advantage is time. A first-time importer working through factory identification and vetting independently adds 8&ndash;16 weeks to the timeline. We compress that phase to days.</p>

          <h2 id="faq" className="b-faq-h">FAQ</h2>

          <h3>How much do I actually save sourcing packaging from overseas versus domestic?</h3>
          <p>Unit cost savings run an estimated 30&ndash;60% for most rigid and folding carton packaging when comparing factory prices. Landed cost &mdash; after ocean freight, customs duties, and drayage &mdash; reduces the gap to an estimated 20&ndash;45% depending on volume and category. The savings are real and significant above $15,000 in order value.</p>

          <h3>How long does it take to source packaging from China?</h3>
          <p>The full cycle from first factory contact to goods in your US warehouse typically runs 18&ndash;34 weeks for a new packaging program. Sampling alone runs 6&ndash;10 weeks for a 3-round process. Plan 20&ndash;24 weeks as a realistic working estimate for first-time programs.</p>

          <h3>What is the minimum order quantity for overseas packaging sourcing?</h3>
          <p>MOQs vary by category: folding cartons typically run 3,000&ndash;5,000 units minimum; rigid setup boxes run 500&ndash;1,000 units; custom molded components run 1,000&ndash;2,000 units. Brands with volumes below these thresholds often find that shared tooling programs or stock packaging options are more economical.</p>

          <h3>How do I protect my packaging design when working with overseas factories?</h3>
          <p>The core tools are: an NDA before sharing any artwork or specifications, design registration in China for structurally unique elements, and a non-exclusivity clause in the purchase agreement. Operational practices &mdash; watermarked sampling files, compartmentalized specification sharing &mdash; reduce additional risk.</p>

          <h3>Do I need a customs broker for packaging imports?</h3>
          <p>Yes. A licensed customs broker files entry, calculates and pays duties, and manages port release. For packaging imports from China, Section 301 tariffs add complexity that a specialist broker handles more efficiently. Fees run $150&ndash;$350 per shipment entry &mdash; a straightforward cost.</p>

          <h3>When should a brand source domestically instead of overseas?</h3>
          <p>Domestic sourcing makes more sense when: order value is below $15,000, lead time requirements are 8&ndash;10 weeks or less, product involves complex formulation compatibility, or the brand lacks the operational infrastructure to manage an international sourcing process.</p>

        </div>
      </div>

      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[
            { q: 'How much do I actually save sourcing packaging from overseas versus domestic?', a: 'Unit cost savings run an estimated 30-60% for most rigid and folding carton packaging when comparing factory prices. Landed cost — after ocean freight, customs duties, and drayage — reduces the gap to an estimated 20-45% depending on volume and category. The savings are real and significant above $15,000 in order value.' },
            { q: 'How long does it take to source packaging from China?', a: 'The full cycle from first factory contact to goods in your US warehouse typically runs 18-34 weeks for a new packaging program. Sampling alone runs 6-10 weeks for a 3-round process. Plan 20-24 weeks as a realistic working estimate for first-time programs.' },
            { q: 'What is the minimum order quantity for overseas packaging sourcing?', a: 'MOQs vary by category: folding cartons typically run 3,000-5,000 units minimum; rigid setup boxes run 500-1,000 units; custom molded components run 1,000-2,000 units. Brands with volumes below these thresholds often find stock packaging options are more economical.' },
            { q: 'How do I protect my packaging design when working with overseas factories?', a: 'The core tools are: an NDA before sharing any artwork or specifications, design registration in China for structurally unique elements, and a non-exclusivity clause in the purchase agreement. Operational practices — watermarked sampling files — reduce additional risk.' },
            { q: 'Do I need a customs broker for packaging imports?', a: 'Yes. A licensed customs broker files entry, calculates and pays duties, and manages port release. For packaging imports from China, Section 301 tariffs add complexity that a specialist broker handles more efficiently. Fees run $150-$350 per shipment entry.' },
            { q: 'When should a brand source domestically instead of overseas?', a: 'Domestic sourcing makes more sense when: order value is below $15,000, lead time requirements are 8-10 weeks or less, product involves complex formulation compatibility, or the brand lacks the operational infrastructure to manage an international sourcing process.' }
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-band-inner">
          <h2>Ready to Explore<br /><em>International Sourcing?</em></h2>
          <p>Book a 30-minute call. We&apos;ll walk through your packaging program and tell you whether international sourcing makes sense at your volume &mdash; and what it would actually cost.</p>
          <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
