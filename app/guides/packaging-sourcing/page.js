import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import EmailButton from '@/components/EmailButton';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Source Packaging Without Getting Burned",
  "description": "A sourcing guide from an agency with 20 years of global packaging sourcing experience: how to choose between domestic and international suppliers, vet factories, avoid MOQ traps, and run the landed cost math that most brands skip.",
  "author": {
    "@type": "Organization",
    "name": "Logic Agency Inc.",
    "url": "https://www.logicagencyinc.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Logic Agency Inc."
  },
  "mainEntityOfPage": "https://www.logicagencyinc.com/guides/packaging-sourcing",
  "datePublished": "2025-02-01",
  "dateModified": "2026-05-26"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I source packaging domestically or overseas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on volume, timeline, and complexity. Domestic sourcing is better for small runs under 10,000 units, fast turnarounds under 4 weeks, and simple structures. International sourcing (particularly Asia) is better for volumes above 25,000 units, complex structures like rigid boxes or custom molded inserts, premium finishes at lower cost, and when you have 8-12 weeks of lead time. Most brands at scale use both — domestic for fast-turn and low-volume SKUs, international for high-volume primary packaging. The decision should be based on a full landed cost comparison, not just unit price."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a packaging broker and a manufacturer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A manufacturer owns the factory and production equipment. A broker sources from manufacturers on your behalf and adds a margin. A trading company in Asia operates similarly to a broker but may represent multiple factories. The key question is how many layers are between you and the factory floor. Each layer adds cost and reduces your control over quality and timing. Direct manufacturer relationships give you better pricing and quality control but require more sourcing expertise. Brokers offer convenience but obscure the true cost structure."
      }
    },
    {
      "@type": "Question",
      "name": "What is a typical MOQ for custom packaging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MOQs vary dramatically by packaging type, material, and region. Domestic folding cartons typically start at 1,000-5,000 units. Domestic corrugated can go as low as 500. International (Asia) folding cartons typically start at 5,000-10,000 units, with rigid boxes at 3,000-5,000. Custom molded packaging often requires 10,000+ units. These are starting points — pricing improves significantly at 25,000 and 50,000 unit tiers. Be cautious of suppliers with unusually low MOQs, as they may be quoting stock packaging with minimal customization."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate the true landed cost of packaging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Landed cost includes unit production cost, tooling amortized across the order, freight (ocean, air, or ground), customs duties and tariffs, customs brokerage fees, drayage from port to warehouse, inspection and quality control costs, warehousing, and insurance. For international sourcing, freight and duties typically add 15-30% on top of the unit price. The only accurate comparison between domestic and international suppliers is a full landed cost calculation — comparing unit prices alone is misleading."
      }
    },
    {
      "@type": "Question",
      "name": "What are red flags when choosing a packaging supplier?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key red flags include: quoting without asking about your product specifications or supply chain requirements, unable or unwilling to provide factory audit documentation or certifications, pricing that is dramatically lower than all other quotes (suggesting hidden fees, bait-and-switch, or quality shortcuts), no clear quality control process or inspection protocols, requiring full payment upfront with no milestone structure, unwillingness to provide client references, and vague lead time estimates without production scheduling detail."
      }
    }
  ]
};

export const metadata = {
  title: 'Packaging Sourcing Guide | Logic Agency',
  description: 'Packaging sourcing requires supplier type clarity, MOQ math, factory vetting, landed cost comparison, quality control, and backup capacity.',
  keywords: 'packaging suppliers, where to source packaging, custom packaging sourcing, domestic vs overseas packaging, packaging manufacturer, packaging supplier for cosmetics, how to find packaging supplier, packaging sourcing China, packaging MOQ, packaging factory audit',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/guides/packaging-sourcing',
  },
  openGraph: {
    title: 'How to Source Packaging Without Getting Burned',
    description: 'Domestic vs. international, brokers vs. manufacturers, factory vetting, MOQ traps, landed cost math, and red flags.',
    url: 'https://www.logicagencyinc.com/guides/packaging-sourcing',
    images: [{ url: 'https://www.logicagencyinc.com/images/og-packaging-sourcing.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Source Packaging Without Getting Burned',
    description: 'Domestic vs. international, brokers vs. manufacturers, factory vetting, MOQ traps, landed cost math, and red flags.',
    images: ['https://www.logicagencyinc.com/images/og-packaging-sourcing.jpg'],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Logic Agency",
      "item": "https://www.logicagencyinc.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guides",
      "item": "https://www.logicagencyinc.com/guides"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How to Source Packaging Without Getting Burned",
      "item": "https://www.logicagencyinc.com/guides/packaging-sourcing"
    }
  ]
};
export default function PackagingSourcingGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Nav variant="guide" />

      {/* HERO */}
      <section className="a-hero gl">
        <div className="a-hero-inner">
          <div className="breadcrumb"><a href="/">Logic Agency</a> &nbsp;/&nbsp; <a href="/guides">Guides</a></div>
          <h1>How to Source Packaging <span className="o">Without Getting Burned</span></h1>
          <p className="a-lede">Packaging sourcing requires knowing who is actually making the pack, how MOQ and landed cost change the economics, whether the factory can meet quality standards, and what backup capacity exists if the first supplier misses. A low quote is not a sourcing strategy.</p>
          <div className="a-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Updated May 2026</span>
            <span>16 min read</span>
            <span>Guides</span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>Know whether you are dealing with a manufacturer, broker, or trading company.</li>
              <li>Compare suppliers by landed cost, not quote price.</li>
              <li>MOQ, lead time, tooling, and quality control should be reviewed together.</li>
              <li>Backup suppliers matter before the first supplier creates a production gap.</li>
            </ul>
          </div>

          {/* SECTION 1 */}
          <h2>Know Who You&apos;re Actually Talking To</h2>

          <p>The first mistake most brands make isn&apos;t choosing the wrong supplier. It&apos;s not understanding what kind of supplier they&apos;re talking to. There are three types of players in packaging sourcing, and they operate very differently.</p>

          <div className="player-grid">
            <div className="player">
              <span className="player-tag">Manufacturer</span>
              <h3>The Factory</h3>
              <p>Owns the equipment, employs the workers, runs the production line. You&apos;re buying directly from the source. Best pricing, most control over quality, but requires you to know what you&apos;re specifying. They build what you ask for &mdash; if your specs are wrong, the output is wrong.</p>
            </div>
            <div className="player">
              <span className="player-tag">Broker</span>
              <h3>The Middleman</h3>
              <p>Sources from manufacturers on your behalf. Adds 15-40% margin for the service. Useful if you have no sourcing expertise, but obscures the true cost structure and adds a communication layer between you and the factory. Your quality control depends on theirs.</p>
            </div>
            <div className="player">
              <span className="player-tag">Trading Company</span>
              <h3>The Aggregator</h3>
              <p>Common in Asia. Represents multiple factories across packaging types. Can source corrugated, folding cartons, rigid boxes, and plastics from different facilities under one relationship. Convenient, but you may not know which factory is actually producing your order.</p>
            </div>
          </div>

          <p>The key question isn&apos;t which type is &ldquo;best&rdquo; &mdash; each has a place. The key question is: <strong>how many layers are between you and the factory floor?</strong> Each layer adds cost and reduces your control. A manufacturer quotes you $0.80 per unit. A broker gets that same quote and sells it to you at $1.10. A trading company adds another layer and you&apos;re at $1.30. Same box, same factory, 60% more expensive.</p>

          <div className="callout">
            <p><strong>How to tell who you&apos;re actually dealing with:</strong> Ask for a factory tour or factory audit documentation. Manufacturers will provide it readily. Brokers will deflect or offer a &ldquo;virtual tour.&rdquo; Trading companies will sometimes provide it but for a facility that may not be the one producing your specific order. If they can&apos;t or won&apos;t show you the production floor, you&apos;re not buying direct.</p>
          </div>

          {/* SECTION 2 */}
          <h2>Domestic vs. International: The Real Decision Framework</h2>

          <p>This is the first question every brand asks, and most answer it wrong because they compare the wrong numbers. A domestic supplier quoting $1.50 per unit looks more expensive than an overseas supplier quoting $0.70 per unit. But unit price is a fraction of the total cost, and the total cost comparison often tells a completely different story.</p>

          <p>Here&apos;s when each makes sense:</p>

          <div className="cmp">
            <div className="cmp-header">
              <div>Factor</div>
              <div>Domestic</div>
              <div>International</div>
            </div>
            <div className="cmp-row">
              <div>Best for volume</div>
              <div>Under 10K-25K units</div>
              <div>25K+ units</div>
            </div>
            <div className="cmp-row">
              <div>Lead time</div>
              <div>2-4 weeks</div>
              <div>8-14 weeks (incl. freight)</div>
            </div>
            <div className="cmp-row">
              <div>MOQs</div>
              <div>500-5,000 typical</div>
              <div>3,000-10,000 typical</div>
            </div>
            <div className="cmp-row">
              <div>Unit cost</div>
              <div>Higher per unit</div>
              <div>Lower per unit</div>
            </div>
            <div className="cmp-row">
              <div>Freight cost</div>
              <div>Minimal (ground)</div>
              <div>Significant (ocean + drayage)</div>
            </div>
            <div className="cmp-row">
              <div>Quality control</div>
              <div>Visit the factory yourself</div>
              <div>Requires inspection service or trusted partner</div>
            </div>
            <div className="cmp-row">
              <div>Complexity ceiling</div>
              <div>Good for standard structures</div>
              <div>Excels at complex, premium, custom</div>
            </div>
            <div className="cmp-row">
              <div>Best for</div>
              <div>Fast turns, small runs, simple packaging</div>
              <div>High volume, premium finishes, rigid boxes, custom molds</div>
            </div>
          </div>

          <p><strong>The hybrid approach most scaled brands use:</strong> domestic for fast-turn reorders, short-run SKUs, and secondary/tertiary packaging. International for high-volume primary packaging, premium structures (rigid boxes, magnetic closures, custom inserts), and anything requiring specialized manufacturing capabilities that are scarce or expensive domestically.</p>

          <p>The mistake isn&apos;t choosing one over the other. The mistake is making the choice based on unit price instead of landed cost.</p>

          {/* SECTION 3 */}
          <h2>The Landed Cost Math Nobody Runs</h2>

          <p>A brand gets two quotes. Domestic: $1.40/unit. Overseas: $0.65/unit. The overseas quote looks like a 54% savings. They place the order. Twelve weeks later, the actual cost looks nothing like the quote.</p>

          <p>Here&apos;s what a real landed cost comparison looks like for a 25,000-unit order of folding cartons:</p>

          <div className="lc-box">
            <h3>Example: 25,000 Folding Cartons &mdash; Landed Cost</h3>
            <div className="lc-row">
              <span className="lc-label">Unit production cost</span>
              <span className="lc-val">$0.65</span>
            </div>
            <div className="lc-row">
              <span className="lc-label">Tooling (amortized across order)</span>
              <span className="lc-val">+$0.08</span>
            </div>
            <div className="lc-row">
              <span className="lc-label">Ocean freight (per unit)</span>
              <span className="lc-val">+$0.12</span>
            </div>
            <div className="lc-row">
              <span className="lc-label">Customs duty (per unit)</span>
              <span className="lc-val">+$0.04</span>
            </div>
            <div className="lc-row">
              <span className="lc-label">Customs brokerage (per unit)</span>
              <span className="lc-val">+$0.02</span>
            </div>
            <div className="lc-row">
              <span className="lc-label">Drayage &mdash; port to warehouse (per unit)</span>
              <span className="lc-val">+$0.05</span>
            </div>
            <div className="lc-row">
              <span className="lc-label">QC inspection (per unit)</span>
              <span className="lc-val">+$0.03</span>
            </div>
            <div className="lc-total">
              <span className="lc-label">True landed cost per unit</span>
              <span className="lc-val">$0.99</span>
            </div>
            <p className="lc-note">The $0.65 quote became $0.99 landed &mdash; still 29% less than the $1.40 domestic quote, but the &ldquo;savings&rdquo; went from 54% to 29%. At lower volumes or with air freight, international can actually cost more than domestic. Always run the full math.</p>
          </div>

          <p>The landed cost calculation changes with volume. At 5,000 units, the freight and brokerage costs per unit are much higher because you&apos;re splitting a container. At 50,000 units, you&apos;re filling a container and the per-unit freight drops significantly. This is why international sourcing has a volume threshold below which it doesn&apos;t make economic sense &mdash; usually around 15,000-25,000 units depending on the packaging type and shipping lane.</p>

          <div className="callout">
            <p><strong>The number that matters most:</strong> Don&apos;t compare unit prices. Don&apos;t compare quotes. Compare landed cost per unit across the full supply chain. That&apos;s the only number that tells you which option actually costs less.</p>
          </div>

          {/* SECTION 4 */}
          <h2>How to Vet a Supplier (Before You Send Them Money)</h2>

          <p>Getting a competitive quote is easy. Finding a supplier who will deliver consistent quality, on time, at scale, for years &mdash; that&apos;s the actual job. Here&apos;s the vetting process we use across 15+ countries:</p>

          <div className="vet">
            <div className="vet-n">1</div>
            <div>
              <h4>Request certifications and audit documentation</h4>
              <p>ISO 9001 (quality management), FSC (sustainable forestry for paper/board), FDA compliance (if food, cosmetics, or supplement packaging), FAMA or similar (for licensed brand packaging). If they can&apos;t produce current certifications, walk away. These aren&apos;t optional in legitimate manufacturing &mdash; they&apos;re table stakes.</p>
            </div>
          </div>
          <div className="vet">
            <div className="vet-n">2</div>
            <div>
              <h4>Ask for client references in your category</h4>
              <p>A factory that produces excellent corrugated shippers may be terrible at premium folding cartons. Capabilities are specific. Ask for references from brands producing similar packaging to what you need &mdash; similar materials, similar complexity, similar volume. Call those references and ask about quality consistency, on-time delivery, and how the factory handles problems.</p>
            </div>
          </div>
          <div className="vet">
            <div className="vet-n">3</div>
            <div>
              <h4>Order samples before committing to production</h4>
              <p>Not stock samples from their showroom &mdash; custom samples from your specs. This is the only way to evaluate whether they can actually produce what you need. Assess print quality, color accuracy, structural integrity, material feel, and finishing quality. If the samples aren&apos;t right, production won&apos;t be either.</p>
            </div>
          </div>
          <div className="vet">
            <div className="vet-n">4</div>
            <div>
              <h4>Understand their QC process</h4>
              <p>What inspection happens during production? What&apos;s the acceptable quality level (AQL)? Do they have in-house QC or do you need to hire a third-party inspection firm? Who pays for defective units? Get this in writing before the first order. The factories that resist documenting QC procedures are the ones most likely to ship problems.</p>
            </div>
          </div>
          <div className="vet">
            <div className="vet-n">5</div>
            <div>
              <h4>Negotiate payment terms that protect you</h4>
              <p>Standard for international: 30% deposit to start production, 70% balance before shipment, with inspection approval required before final payment releases. Never pay 100% upfront. For domestic, Net 30 after delivery is standard for established relationships. New relationships may require 50/50. Any supplier demanding full prepayment with no milestone structure is a risk.</p>
            </div>
          </div>
          <div className="vet">
            <div className="vet-n">6</div>
            <div>
              <h4>Visit the factory (or have someone visit for you)</h4>
              <p>For international suppliers handling significant volume, a factory visit &mdash; either in person or through a trusted inspection partner &mdash; is non-negotiable. Photos on a website prove nothing. Walking the production floor tells you whether their equipment matches their capabilities claims, whether the facility is organized and clean, and whether the workers and management seem competent and professional.</p>
            </div>
          </div>

          {/* SECTION 5 */}
          <h2>Seven Red Flags in Supplier Quoting</h2>

          <p>After evaluating thousands of packaging quotes, these are the patterns that reliably predict problems:</p>

          <div className="rf-grid">
            <div className="rf">
              <div className="rf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></div>
              <p><strong>They quoted without asking about your product.</strong> A supplier who doesn&apos;t ask what&apos;s going inside the packaging, how it ships, where it&apos;s going, and how it&apos;s stored doesn&apos;t understand that packaging is an engineering problem. They&apos;re selling you a commodity, not a solution.</p>
            </div>
            <div className="rf">
              <div className="rf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></div>
              <p><strong>The price is dramatically lower than everyone else&apos;s.</strong> If three suppliers quote $0.90-1.10 and one quotes $0.55, that $0.55 quote is either bait-and-switch (the price will increase once production starts), lower-quality materials than specified, or a trading company quoting a factory they haven&apos;t confirmed with yet.</p>
            </div>
            <div className="rf">
              <div className="rf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></div>
              <p><strong>Tooling costs aren&apos;t itemized.</strong> If the quote includes tooling but doesn&apos;t break it out separately, you can&apos;t evaluate whether it&apos;s reasonable, and you can&apos;t amortize it properly across your order. Tooling should always be a separate line item with a clear description of what&apos;s being produced.</p>
            </div>
            <div className="rf">
              <div className="rf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></div>
              <p><strong>Lead times are vague.</strong> &ldquo;4-6 weeks&rdquo; isn&apos;t a lead time &mdash; it&apos;s a guess. A reliable supplier will give you a production schedule: sample approval by date X, production starts date Y, QC inspection date Z, ships date W. Vague timelines become late shipments.</p>
            </div>
            <div className="rf">
              <div className="rf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></div>
              <p><strong>They won&apos;t provide references.</strong> Every legitimate supplier has clients who will vouch for them. Refusal to provide references &mdash; or providing only references you can&apos;t actually contact &mdash; means there&apos;s something they don&apos;t want you to find out.</p>
            </div>
            <div className="rf">
              <div className="rf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></div>
              <p><strong>MOQs are suspiciously low.</strong> A folding carton manufacturer quoting an MOQ of 100 units is almost certainly quoting stock packaging with a sticker or minimal print customization. True custom packaging has real MOQs driven by material minimums, press sheet economics, and tooling amortization. Unrealistically low MOQs mean you&apos;re not getting what you think you&apos;re getting.</p>
            </div>
            <div className="rf">
              <div className="rf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></div>
              <p><strong>They pressure you to skip sampling.</strong> &ldquo;We can go straight to production to save time&rdquo; is a supplier who either doesn&apos;t have a proper sampling process or knows the samples won&apos;t match the quote. Never skip sampling. The cost of a sample run is trivial compared to the cost of a bad production run.</p>
            </div>
          </div>

          {/* SECTION 6 */}
          <h2>Your First Supplier Is Almost Never Your Scale Supplier</h2>

          <p>This is the part nobody tells you at the beginning, and it trips up almost every growing brand.</p>

          <p>The supplier who helps you get your first 5,000 units out the door is probably a small domestic shop. They&apos;re flexible, they&apos;ll take your small order, they&apos;ll do hand-holding on specs, and they&apos;ll turn it around fast. They&apos;re perfect for Stage 1.</p>

          <p>But at 50,000 units, that shop either can&apos;t keep up or their pricing doesn&apos;t scale. Their presses are too small for your run lengths. Their material purchasing power doesn&apos;t give you volume pricing. Their capacity is maxed and your reorder gets bumped for a bigger client.</p>

          <p>This isn&apos;t a failure &mdash; it&apos;s normal. The brand-supplier relationship is supposed to evolve as your volume and complexity grow. The mistake is treating your first supplier as your permanent supplier and waiting until something breaks to make a change.</p>

          <p><strong>Plan the transition in advance.</strong> When you hit 20,000-30,000 units on a SKU, start sourcing alternatives. Run samples with two or three suppliers at the next volume tier. Compare landed costs. Negotiate pricing ladders that reward your growth. Make the switch on your timeline, not when you&apos;re forced to.</p>

          <p>And keep your documentation clean enough that any qualified manufacturer can produce your packaging from it. If switching suppliers means rebuilding your tech packs from scratch, you&apos;ve given your current supplier too much leverage.</p>

          <div className="callout">
            <p><strong>The sourcing principle that saves brands the most money over time:</strong> always have a qualified backup supplier for every critical component. Not as a threat &mdash; as a business continuity strategy. A factory fire, a shipping lane disruption, a quality issue, a tariff change. Any of these can shut down your packaging supply overnight. Brands with backup relationships recover in weeks. Brands without them scramble for months.</p>
          </div>

          {/* SECTION 7 */}
          <h2>What Good Sourcing Actually Looks Like</h2>

          <p>Good sourcing isn&apos;t finding the cheapest supplier. It&apos;s building a supply chain that delivers consistent quality, predictable cost, and reliable timing &mdash; and that adapts as your business grows.</p>

          <p>That means having <strong>direct relationships</strong> with manufacturers where possible, cutting out unnecessary middlemen who add cost without adding value. It means running <strong>full landed cost analysis</strong> on every sourcing decision, not reacting to unit prices. It means <strong>vetting rigorously</strong> before the first order, not discovering problems at 50,000 units. It means having <strong>backup suppliers</strong> qualified and sample-approved before you need them.</p>

          <p>And it means understanding that sourcing is not a one-time decision. It&apos;s an ongoing operational function. The supply chain shifts &mdash; tariffs change, freight rates fluctuate, factory capacity tightens, new materials emerge, your own volume and requirements evolve. Brands that treat sourcing as a set-it-and-forget-it task are always one disruption away from a crisis.</p>

          <p>The brands that get sourcing right have someone who owns it as a continuous responsibility. Whether that&apos;s an in-house ops hire or an external partner, the function exists and it&apos;s actively managed. That&apos;s the difference between brands who are always chasing their packaging and brands whose packaging just works.</p>

        </div>
      </div>

      
      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[{ q: 'Should I source packaging domestically or overseas?', a: 'It depends on volume, timeline, and complexity. Domestic sourcing is better for small runs under 10,000 units, fast turnarounds under 4 weeks, and simple structures. International sourcing (particularly Asia) is better for volumes above 25,000 units, complex structures like rigid boxes or custom molded inserts, premium finishes at lower cost, and when you have 8-12 weeks of lead time. Most brands at scale use both — domestic for fast-turn and low-volume SKUs, international for high-volume primary packaging. The decision should be based on a full landed cost comparison, not just unit price.' }, { q: 'What is the difference between a packaging broker and a manufacturer?', a: 'A manufacturer owns the factory and production equipment. A broker sources from manufacturers on your behalf and adds a margin. A trading company in Asia operates similarly to a broker but may represent multiple factories. The key question is how many layers are between you and the factory floor. Each layer adds cost and reduces your control over quality and timing. Direct manufacturer relationships give you better pricing and quality control but require more sourcing expertise. Brokers offer convenience but obscure the true cost structure.' }, { q: 'What is a typical MOQ for custom packaging?', a: 'MOQs vary dramatically by packaging type, material, and region. Domestic folding cartons typically start at 1,000-5,000 units. Domestic corrugated can go as low as 500. International (Asia) folding cartons typically start at 5,000-10,000 units, with rigid boxes at 3,000-5,000. Custom molded packaging often requires 10,000+ units. These are starting points — pricing improves significantly at 25,000 and 50,000 unit tiers. Be cautious of suppliers with unusually low MOQs, as they may be quoting stock packaging with minimal customization.' }, { q: 'How do I calculate the true landed cost of packaging?', a: 'Landed cost includes unit production cost, tooling amortized across the order, freight (ocean, air, or ground), customs duties and tariffs, customs brokerage fees, drayage from port to warehouse, inspection and quality control costs, warehousing, and insurance. For international sourcing, freight and duties typically add 15-30% on top of the unit price. The only accurate comparison between domestic and international suppliers is a full landed cost calculation — comparing unit prices alone is misleading.' }, { q: 'What are red flags when choosing a packaging supplier?', a: 'Key red flags include: quoting without asking about your product specifications or supply chain requirements, unable or unwilling to provide factory audit documentation or certifications, pricing that is dramatically lower than all other quotes (suggesting hidden fees, bait-and-switch, or quality shortcuts), no clear quality control process or inspection protocols, requiring full payment upfront with no milestone structure, unwillingness to provide client references, and vague lead time estimates without production scheduling detail.' }]} />
        </div>
      </section>
      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-inner">
          <h2>Need sourcing expertise <span className="o">without the learning curve?</span></h2>
          <p>We source packaging across 15+ countries with direct factory relationships, ISO/FAMA/FSC/FDA certified supply chains, and 20 years of doing this. Our Starter tier gives you sourcing advisory from day one. Tell us what you&apos;re looking for.</p>
          <div className="cta-btns">
            <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Start a Conversation &rarr;</a>
            <a href="/#pricing" className="bt bw">See Plans &amp; Pricing</a>
          </div>
          <a href="/guides/retail-readiness-scorecard" className="cta-dl">Download the free 40-Point Readiness Scorecard &rarr;</a>
          <span className="cta-sub">Logic Agency Inc. &middot; Packaging &amp; Supply Chain Ops on a Monthly Retainer</span>
        </div>
      </section>

      {/* RELATED */}
      <section className="related gl">
        <div className="related-inner">
          <h3>More Guides</h3>
          <div className="related-links">
            <a href="/guides/packaging-cost-reduction" className="related-link">
              <h4>Packaging Cost Reduction Without Sacrificing Brand</h4>
              <p>The five hidden cost drivers and where brands typically save 15-30%.</p>
            </a>
            <a href="/guides/retail-ready-packaging" className="related-link">
              <h4>Getting Your Packaging Retail-Ready</h4>
              <p>Case packs, pallet specs, retailer compliance, and the timeline nobody talks about.</p>
            </a>
          </div>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
