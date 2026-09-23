import Nav from '@/components/Nav';
import FooterHome from '@/components/FooterHome';
import EmailButton from '@/components/EmailButton';
import GuideFaqAccordion from '@/components/GuideFaqAccordion';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Vendor Diversification Strategy for CPG Brands",
  "description": "Single-source supply chains break — and when they do, the cost isn\'t a line item. It\'s a missed retail launch or a stockout on your hero SKU. Here\'s the 80/20 dual-sourcing framework.",
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
  "mainEntityOfPage": "https://www.logicagencyinc.com/blog/vendor-diversification-strategy-cpg-brands",
  "datePublished": "2026-06-15",
  "dateModified": "2026-06-15"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Logic Agency", "item": "https://www.logicagencyinc.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.logicagencyinc.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Vendor Diversification Strategy for CPG Brands", "item": "https://www.logicagencyinc.com/blog/vendor-diversification-strategy-cpg-brands" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should a CPG brand start diversifying its suppliers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The trigger points are: revenue above $5M, SKU count above 20, entry into a retail channel, or any single component representing more than 30% of your product cost. Practically, if a supplier failure would delay a shipment by more than 4 weeks, you are single-source dependent and should be qualifying a backup."
      }
    },
    {
      "@type": "Question",
      "name": "What is the 80/20 dual-sourcing framework?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 80/20 framework means giving your primary supplier 80% of volume and your secondary supplier 20%. The secondary supplier stays active — meaning they receive real purchase orders, not just samples — so they maintain production readiness. This keeps the primary relationship strong while ensuring the backup can actually execute when needed."
      }
    },
    {
      "@type": "Question",
      "name": "How much does supplier diversification cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Secondary suppliers typically charge a 3–8% premium on the volume they receive because their production runs are smaller. That premium is the cost of supply chain insurance. Compare it to a single-source disruption: a missed retail launch can cost $80,000–$665,000+ in lost revenue and penalty fees. The insurance math is not close."
      }
    },
    {
      "@type": "Question",
      "name": "What components should you diversify first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prioritize components with lead times over 8 weeks, single-factory production, components representing more than 30% of product cost, and any item where quality variation would affect the consumer experience. For most CPG brands, primary packaging (bottles, jars, tubes) and secondary packaging (folding cartons, rigid boxes) are the highest-risk single-source dependencies."
      }
    },
    {
      "@type": "Question",
      "name": "How do you qualify a secondary packaging supplier?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Qualification requires three things: (1) a production sample run using your exact specs — not just a capability review; (2) a full review of lead time, MOQ, payment terms, and quality standards; (3) a small real purchase order so you verify execution, not just capability. A supplier that has only been sampled is not a qualified backup. You need a documented production run before you can call them ready."
      }
    }
  ]
};
export const metadata = {
  title: 'Vendor Diversification Strategy for CPG Brands: When Single-Sourcing Breaks — Logic Agency Inc.',
  description: 'Single-source supply chains break — and when they do, the cost isn\'t a line item. It\'s a missed retail launch or a stockout on your hero SKU. Here\'s the 80/20 dual-sourcing framework.',
  keywords: 'vendor diversification strategy CPG, supplier risk management consumer brands, dual sourcing strategy, packaging supplier backup plan',
  alternates: {
    canonical: 'https://www.logicagencyinc.com/blog/vendor-diversification-strategy-cpg-brands',
  },
  openGraph: {
    title: 'Vendor Diversification Strategy for CPG Brands: When Single-Sourcing Breaks',
    description: 'Single-source supply chains break — and when they do, the cost isn\'t a line item. It\'s a missed retail launch or a stockout on your hero SKU. Here\'s the 80/20 dual-sourcing framework.',
    url: 'https://www.logicagencyinc.com/blog/vendor-diversification-strategy-cpg-brands',
    type: 'article',
    publishedTime: '2026-06-15',
    authors: ['Jordan Harper'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vendor Diversification Strategy for CPG Brands: When Single-Sourcing Breaks',
    description: 'Single-source supply chains break — and when they do, the cost isn\'t a line item. It\'s a missed retail launch or a stockout on your hero SKU. Here\'s the 80/20 dual-sourcing framework.',
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
          <span className="b-tag">Supply Chain</span>
          <h1>Vendor Diversification Strategy for CPG Brands</h1>
          <p className="b-lede">Single-source supply chains break — and when they do, the cost isn't a line item. It's a missed retail launch, a stockout on your hero SKU, or a quarter of revenue lost to a production delay you couldn't route around. Effective packaging supplier management requires a diversification strategy that balances risk reduction against the real operational cost of managing multiple vendors. This guide covers the risks of single-sourcing, the trigger points that signal it's time to diversify, the 80/20 dual-sourcing framework, and how to qualify a secondary supplier without doubling your management burden.</p>
          <div className="b-meta">
            <span><strong>Jordan Harper, Logic Agency Inc.</strong></span>
            <span>Jun 2026</span>
            <span>10 min read</span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="b-feat">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/port-us-retail.jpg" alt="Supply chain vendor diversification strategy for consumer product brands" className="b-feat-img" />
      </div>

      {/* ARTICLE */}
      <div className="article gl">
        <div className="article-inner">

          <div className="b-takeaways">
            <p>Key Takeaways</p>
            <ul>
              <li>Single-source dependency on any component that represents more than 30% of your product cost or has a lead time exceeding 8 weeks creates material business risk</li>
              <li>The trigger points for diversification are revenue above $5M, SKU count above 20, retail channel entry, and international expansion</li>
              <li>The 80/20 dual-sourcing framework &mdash; 70% primary, 20% secondary, 10% development &mdash; provides redundancy without fragmenting volume leverage</li>
              <li>Qualifying a secondary supplier takes 8&ndash;12 weeks and costs $5,000&ndash;$15,000 in tooling and test runs &mdash; a fraction of the $50,000&ndash;$250,000 cost of a single-source disruption</li>
              <li>Logic Agency manages manufacturing relationships across 15+ countries, giving clients built-in diversification across geographies and production capabilities</li>
            </ul>
          </div>

          <p>Single-source supply chains break &mdash; and when they do, the cost isn&apos;t a line item. It&apos;s a missed retail launch, a stockout on your hero SKU, or a quarter of revenue lost to a production delay you couldn&apos;t route around. Effective packaging supplier management requires a diversification strategy that balances risk reduction against the real operational cost of managing multiple vendors.</p>

          <p>This guide covers the risks of single-sourcing, the trigger points that signal it&apos;s time to diversify, the 80/20 dual-sourcing framework, and how to qualify a secondary supplier without doubling your management burden.</p>

          <h2 id="the-real-cost-of-single-sourcing">The Real Cost of Single-Sourcing</h2>

          <p>Single-sourcing isn&apos;t a strategy &mdash; it&apos;s a default. Most CPG brands don&apos;t choose to depend on a single supplier for a critical component. They start with the supplier who could meet their initial MOQ, the relationship works, and inertia keeps them there. By the time the brand is doing $10M in revenue, 100% of their primary packaging comes from one factory in one city in one country.</p>

          <p>That works until it doesn&apos;t. And when it doesn&apos;t, the failure modes are predictable:</p>

          <p><strong>Production delays cascade to revenue loss.</strong> A factory equipment failure, raw material shortage, or labor disruption that delays production by 4&ndash;6 weeks doesn&apos;t just delay your inventory. It delays your retail replenishment, your promotional calendar, and potentially your holiday season. For a brand doing $2M in Q4 revenue, a 4-week stockout on the hero SKU can cost $200,000&ndash;$500,000 in lost sales &mdash; plus the downstream damage to retailer confidence.</p>

          <p><strong>Price leverage shifts to the supplier.</strong> A supplier who knows they&apos;re your only option has zero incentive to hold pricing. Annual price increases of 5&ndash;10% are common when the supplier knows you can&apos;t walk. Over three years, compounding price creep adds 15&ndash;30% to your COGS on that component &mdash; cost you wouldn&apos;t absorb if you had a qualified alternative.</p>

          <p><strong>Quality inconsistency goes unaddressed.</strong> Without a benchmark, you can&apos;t evaluate whether your supplier&apos;s quality is competitive. A defect rate of 2% feels normal until you qualify a second supplier and discover that 0.5% is the industry standard. Single-sourcing eliminates your ability to compare.</p>

          <p><strong>Geographic concentration amplifies risk.</strong> COVID shutdowns, regional natural disasters, trade policy changes, port congestion &mdash; all of these are geographic risks that a single-source, single-geography supply chain can&apos;t mitigate. The Suez Canal blockage in 2021 delayed $9.6 billion in global trade per day. Brands with alternative sourcing geographies rerouted. Brands without alternatives waited.</p>

          <h2 id="trigger-points-when-it-s-time-to-diversify">Trigger Points: When It&apos;s Time to Diversify</h2>

          <p>Diversification has a cost &mdash; tooling, qualification, management overhead. Not every brand needs it immediately. Here are the trigger points that signal the risk-reward calculation has shifted in favor of diversification.</p>

          <h3>Revenue Above $5M</h3>

          <p>Below $5M, your production volumes likely don&apos;t justify maintaining two qualified suppliers. The cost of redundancy exceeds the expected cost of disruption. Above $5M, the math inverts. A single-source disruption that costs you one month of revenue is now a $400,000+ event. The $10,000&ndash;$15,000 investment in qualifying a secondary supplier is insurance at 3% of potential loss.</p>

          <h3>SKU Count Above 20</h3>

          <p>More SKUs means more production complexity, more potential failure points, and longer production queues at a single facility. A supplier running 20+ SKUs for you is scheduling your production around other clients&apos; production. Diversifying allows you to distribute SKU production across suppliers by category or complexity, reducing queue time and lead time risk.</p>

          <h3>Retail Channel Entry</h3>

          <p>Retail demands a reliability standard that DTC doesn&apos;t. A DTC stockout means lost sales and disappointed customers. A retail stockout means chargebacks, lost shelf space, and potentially a discontinued listing. The consequences of supply failure escalate dramatically when retail accounts are involved, making secondary sourcing for retail-facing components essential.</p>

          <h3>International Expansion</h3>

          <p>Selling into new geographies creates both opportunity and obligation. Different regulatory requirements (EU PPWR, California SB 54), different labeling standards, and different consumer expectations may require region-specific packaging. A secondary supplier in or near the target market can reduce lead times, freight costs, and compliance complexity for international orders.</p>

          <h3>When Your Supplier&apos;s Lead Time Exceeds 12 Weeks</h3>

          <p>Any component with a lead time exceeding 12 weeks represents a forecasting risk. You&apos;re ordering based on a demand projection three months out. If the forecast is wrong &mdash; in either direction &mdash; you either stock out or trap cash in inventory. A secondary supplier with a shorter lead time (domestic manufacturing, for instance) gives you a safety valve for demand surprises.</p>

          <h2 id="the-80-20-dual-sourcing-model">The 80/20 Dual-Sourcing Model</h2>

          <p>The 80/20 dual-sourcing framework provides diversification without fragmenting your volume leverage. It&apos;s the model we use at Logic Agency for brands that need supply chain resilience without the management burden of a fully distributed supplier network.</p>

          <h3>80% &mdash; Primary Supplier</h3>

          <p>Your primary supplier handles roughly 80% of production volume. They get the majority of your business, which maintains your volume leverage for pricing. This is typically your most established relationship &mdash; the supplier with the best combination of quality, pricing, and reliability.</p>

          <p>The primary supplier should be:</p>

          <ul>
              <li>Your most consistent quality performer</li>
              <li>Your most price-competitive at volume</li>
              <li>Geographically accessible for audit and relationship management</li>
              <li>Capable of handling your current peak production requirements</li>
          </ul>

          <h3>20% &mdash; Backup Supplier</h3>

          <p>Your secondary supplier handles 20% of production volume. This is your qualified backup &mdash; a supplier you&apos;ve vetted, tooled, and tested at production scale. The 20% allocation serves two purposes: it keeps the supplier relationship warm (a supplier you only call during emergencies won&apos;t prioritize you), and it gives you continuous quality comparison data.</p>

          <p>The secondary supplier should be:</p>

          <ul>
              <li>Qualified to your production specifications (same materials, same tolerances, same quality standards)</li>
              <li>Ideally in a different geographic region than your primary (different country, or at minimum different city/state)</li>
              <li>Capable of scaling to 50&ndash;70% of your production volume within 4&ndash;6 weeks if the primary supplier fails</li>
          </ul>

          <h2 id="how-to-qualify-a-secondary-supplier">How to Qualify a Secondary Supplier</h2>

          <p>Qualification is the step most brands skip &mdash; they identify a backup supplier in theory but never qualify them in practice. When a disruption hits, they discover that the "backup" hasn&apos;t been tooled, hasn&apos;t produced to their spec, and can&apos;t deliver at the quality standard they need. Qualifying now, before you need them, is the entire point.</p>

          <h3>The Qualification Process</h3>

          <p><strong>Week 1&ndash;2: Capability Assessment</strong></p>

          <p>Share your complete specification package with the prospective supplier. Include: material specifications, dimensional tolerances, finish requirements, print specifications (Pantone codes, registration tolerances), and quality acceptance criteria. Ask for a formal capability review &mdash; can they meet every specification? Where do they anticipate challenges?</p>

          <p><strong>Week 3&ndash;4: Tooling and Setup</strong></p>

          <p>For most packaging components, the secondary supplier will need their own tooling &mdash; printing plates, die-cuts, molds. Tooling cost varies by component complexity: $500&ndash;$3,000 for a folding carton die, $5,000&ndash;$25,000 for a rigid box or custom component, and $15,000&ndash;$50,000 for glass or plastic molds. This is a sunk cost of diversification, but it&apos;s a one-time investment.</p>

          <p><strong>Week 5&ndash;8: Sample Production</strong></p>

          <p>Run a sample production of 500&ndash;2,000 units. Inspect against your quality standards. Compare side-by-side with primary supplier output. Document any variance. If the samples pass, you have a qualified secondary supplier. If they don&apos;t, provide feedback and run a second sample. If the second sample fails, move on.</p>

          <p><strong>Week 9&ndash;12: Production Run</strong></p>

          <p>Run a small production order (5,000&ndash;10,000 units) through normal channels &mdash; packed, shipped, received, and inventoried. This tests not just production quality but logistics: packing compliance, freight handling, customs documentation, and receiving accuracy.</p>

          <p><strong>Total cost of qualification:</strong> $5,000&ndash;$15,000 depending on component complexity. Compare that to the cost of a single-source disruption &mdash; which typically runs $50,000&ndash;$250,000 in lost revenue, expedited freight, and emergency sourcing.</p>

          <p className="b-note">&rarr; Our <a href="/guides/packaging-sourcing">guide to packaging sourcing</a> covers the full supplier evaluation process, including red flags and reference-check frameworks.</p>

          <h2 id="the-cost-of-diversification-vs-the-cost-of-disruption">The Cost of Diversification vs. the Cost of Disruption</h2>

          <p>Brands resist diversification because it costs money upfront. Here&apos;s the math that changes the conversation.</p>

          <p><strong>Cost of diversification (annual):</strong></p>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>One-Time</th>
                <th>Recurring</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Secondary supplier tooling</td>
                <td>$5,000&ndash;$25,000</td>
                <td>&mdash;</td>
              </tr>
              <tr>
                <td>Qualification production run</td>
                <td>$3,000&ndash;$10,000</td>
                <td>&mdash;</td>
              </tr>
              <tr>
                <td>Marginally higher per-unit cost (lower volume split)</td>
                <td>&mdash;</td>
                <td>3&ndash;8% premium on 20% of volume</td>
              </tr>
              <tr>
                <td>Additional supplier management time</td>
                <td>&mdash;</td>
                <td>4&ndash;8 hours/month</td>
              </tr>
              <tr>
                <td><strong>Total Year 1</strong></td>
                <td><strong>$8,000&ndash;$35,000</strong></td>
                <td><strong>$2,000&ndash;$10,000</strong></td>
              </tr>
            </tbody>
          </table>

          <p><strong>Cost of single-source disruption (per event):</strong></p>

          <table>
            <thead>
              <tr>
                <th>Impact</th>
                <th>Cost Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stockout on hero SKU (4-week disruption)</td>
                <td>$50,000&ndash;$500,000 lost revenue</td>
              </tr>
              <tr>
                <td>Emergency air freight (to cover production gap)</td>
                <td>$15,000&ndash;$75,000</td>
              </tr>
              <tr>
                <td>Retailer chargebacks (late/short shipments)</td>
                <td>$5,000&ndash;$50,000</td>
              </tr>
              <tr>
                <td>Expedited production at untested supplier</td>
                <td>$10,000&ndash;$40,000 premium</td>
              </tr>
              <tr>
                <td>Lost retail shelf space (potential discontinuation)</td>
                <td>$100,000&ndash;$1M+ annual impact</td>
              </tr>
              <tr>
                <td><strong>Total per disruption</strong></td>
                <td><strong>$80,000&ndash;$665,000+</strong></td>
              </tr>
            </tbody>
          </table>

          <p>A single disruption event &mdash; which occurs with meaningful probability every 2&ndash;3 years for international supply chains &mdash; exceeds the total cost of 5+ years of diversification. The insurance math isn&apos;t close.</p>

          <h2 id="why-15-country-sourcing-capability-matters">Why 15+ Country Sourcing Capability Matters</h2>

          <p>At Logic Agency, we manage manufacturing relationships across 15+ countries &mdash; not because complexity is a goal, but because geographic diversification is a risk management strategy that serves our clients.</p>

          <p>When a brand depends on a single factory in a single country, they&apos;re exposed to every risk in that geography: trade policy changes (tariffs, import restrictions), currency fluctuations, port congestion, regional disruptions, and regulatory shifts. A brand with qualified suppliers in China, Vietnam, India, Mexico, and the US can route production to the lowest-risk, lowest-cost geography for each component.</p>

          <p>This doesn&apos;t mean every brand needs 15 suppliers. It means your operations team &mdash; whether internal or fractional &mdash; should have the sourcing relationships that give you options when you need them.</p>

          <p>The brands that navigated the last five years of supply chain disruption without missing a beat didn&apos;t predict the disruptions. They had alternatives ready.</p>

          <p className="b-note">&rarr; For a comprehensive look at how fractional operations teams provide built-in diversification, visit our <a href="/services">services page</a>.</p>

          <h2 id="frequently-asked-questions" className="b-faq-h">Frequently Asked Questions</h2>

          <p><strong>When is single-sourcing actually acceptable?</strong></p>

          <p>Single-sourcing is acceptable when the component is low-cost, short lead time, and readily available from multiple suppliers on short notice &mdash; meaning the cost of disruption is low. It&apos;s also acceptable for proprietary components where only one supplier has the capability (custom molds, patented materials). For everything else, single-sourcing is an unmanaged risk, not a strategy.</p>

          <p><strong>How do I diversify without losing volume pricing from my primary supplier?</strong></p>

          <p>The 80/20 dual-sourcing framework preserves 70% of your volume with the primary supplier &mdash; enough to maintain volume pricing at most manufacturers. The per-unit premium on the 20% secondary allocation (typically 3&ndash;8% at lower volume) is the explicit cost of insurance. Frame it that way in your supplier conversations: "We&apos;re allocating 70% to you and 20% to a secondary for continuity planning." Most suppliers understand and prefer transparency.</p>

          <p><strong>What&apos;s the right number of suppliers for a CPG brand?</strong></p>

          <p>For most brands at $5&ndash;30M revenue: two to three qualified suppliers for primary packaging and one to two for secondary packaging. More than that creates management overhead that exceeds the incremental risk reduction. The goal is redundancy on critical components, not a fully distributed supply network.</p>

          <p><strong>Does diversification increase or decrease total packaging cost?</strong></p>

          <p>In the short term, total cost increases slightly &mdash; the secondary supplier&apos;s per-unit cost is higher due to lower volume, and qualification has upfront cost. In the medium term (12&ndash;24 months), total cost typically decreases. The competitive tension between two qualified suppliers improves pricing from both. Brands with two qualified suppliers pay 5&ndash;12% less over a three-year period than brands with a single source, because negotiation leverage shifts to the buyer.</p>

          <p><strong>How do I manage quality consistency across multiple suppliers?</strong></p>

          <p>Standardized specifications, identical quality acceptance criteria, and regular side-by-side comparison. Every incoming shipment gets the same inspection protocol regardless of source. Variances between suppliers are documented and addressed immediately. The secondary supplier should produce output that&apos;s indistinguishable from the primary &mdash; if it&apos;s not, the qualification process isn&apos;t complete.</p>

          <h3>What&apos;s Next</h3>

          <p>Vendor diversification isn&apos;t a one-time project. It&apos;s an operational discipline that evolves as your brand scales, enters new channels, and expands into new geographies. The brands that build diversification into their supply chain early &mdash; before a disruption forces their hand &mdash; spend less, recover faster, and negotiate from a stronger position.</p>

          <p>If your supply chain depends on a single supplier for any critical component, the clock is running on a disruption you can&apos;t predict. <a href="/services">Start a conversation</a> with our team to evaluate your supplier risk and build a diversification plan that fits your scale and growth trajectory.</p>

          <p><em>About the author: Jordan Harper is the founder of Logic Agency, a fractional supply chain and packaging operations firm serving consumer brands from pre-launch through $50M+. He has managed supply chains across 15 countries and helped brands scale from DTC-only to Target, Walmart, Costco, and Sephora.</em></p>

        </div>
      </div>

      
      {/* FAQ */}
      <section className="guide-faq-section">
        <div className="guide-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <GuideFaqAccordion items={[{ q: 'What\'s Next', a: 'Vendor diversification isn\'t a one-time project. It\'s an operational discipline that evolves as your brand scales, enters new channels, and expands into new geographies. The brands that build diversification into their supply chain early — before a disruption forces their hand — spend less, recover faster, and negotiate from a stronger position. If your supply chain depends on a single supplier for any critical component, the clock is running on a disruption you can\'t predict. [Start a conversation](https://www.logicagencyinc.com/services?utm_source=blog&utm_medium=organic&utm_campaign=seo_blog&utm_content=vendor_diversification_cta) with our team to evaluate your supplier risk and build a diversification plan that fits your scale and growth trajectory. *About the author: Jordan Harper is the founder of Logic Agency, a fractional supply chain and packaging operations firm serving consumer brands from pre-launch through $50M+. He has managed supply chains across 15 countries and helped brands scale from DTC-only to Target, Walmart, Costco, and Sephora.*' }]} />
        </div>
      </section>
      {/* CTA */}
      <section className="cta-band gd">
        <div className="cta-band-inner">
          <h2>Have an Operations<br /><em>Question?</em></h2>
          <p>Book a 30-minute call. We&apos;ll give you a straight answer &mdash; no sales pitch.</p>
          <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="bt bo" target="_blank" rel="noopener noreferrer">Book a Call &rarr;</a>
        </div>
      </section>

      <FooterHome />
    </>
  );
}
