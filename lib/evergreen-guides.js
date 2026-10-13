// Evergreen guides content — Logic Agency Inc.
// Structured for EvergreenGuidePage.js block renderer.
// Voice: Direct, operational, specific. Real numbers, real timelines, no fluff.
// Only reference authorized clients: Epicutis, Audio Enhancement, Gesine, Artilect (Haldirams in-progress, do NOT frame as complete).

const authored = { updated: 'Updated Sep 2026' };

export const evergreenGuides = {
  // =========================================================================
  // 1. SUSTAINABLE PACKAGING FOR CPG (P0) — highest search volume
  // =========================================================================
  'sustainable-packaging-cpg': {
    slug: 'sustainable-packaging-cpg',
    stickyToc: true,
    ...authored,
    datePublished: '2026-09-15',
    dateModified: '2026-09-24',
    title: 'Sustainable Packaging for CPG Brands: What Actually Works, What Costs More, and What Retailers Require',
    titleBefore: 'Sustainable Packaging for CPG Brands:',
    titleAccent: 'What Works, What Costs More, What Retailers Require',
    description: 'PCR premiums, EPR liability by state, Walmart / Target / Sephora / Whole Foods scorecards, and FTC Green Guides claims language — without greenwashing.',
    keywords: 'sustainable packaging CPG, PCR packaging, EPR compliance CPG, recyclable packaging tradeoffs, sustainable beauty packaging, sustainable food packaging, compostable packaging costs, packaging sustainability requirements, Walmart Project Gigaton, Sephora clean packaging',
    ogImage: '/images/og-sustainable-packaging-cpg.jpg',
    readTime: '21 min read',
    lede: 'Every brand wants sustainable packaging. Almost no one wants the tradeoffs that actually come with it — 10 to 40 percent cost premiums, longer lead times, tighter material specs, and claims language a plaintiff attorney can hold up in court. This guide separates the marketing story from what production, procurement, and legal actually have to do.',
    audience: 'Founders, CMOs, packaging leads, and ops leaders at CPG brands doing $2M–$50M who have to make sustainability decisions that survive contact with a factory, a retailer, and a state law.',
    tldr: [
      '<strong>Sustainable is a spectrum, not a switch.</strong> PCR, mono-material, FSC paperboard, bioplastics, and refill each solve a different problem and each carries a different cost.',
      '<strong>Cost premium ranges: PCR resin +8–25%, mono-material redesign +5–15%, FSC-cert paperboard +3–10%, compostable film +40–80%, refill programs vary wildly.</strong>',
      '<strong>Five states now have EPR laws for packaging</strong>: California (SB 54), Colorado (HB 22-1355), Maine (LD 1541), Oregon (SB 582), and Minnesota (HF 3577). Deadlines and fees vary; you likely already owe.',
      '<strong>Retailer requirements are hard specifications</strong>, not preferences. Walmart Project Gigaton, Target Zero, Sephora Clean+Planet Positive, Whole Foods packaging standards, Ulta Conscious Beauty.',
      '<strong>Claims language creates legal exposure</strong>. The FTC Green Guides govern how marketers substantiate and qualify claims such as "recyclable" and "compostable." The current final Guides were revised in 2012; the FTC opened a review in 2022.',
    ],
    sections: [
      {
        id: 'material-tradeoffs',
        heading: 'Material choices: what each actually costs',
        lead: 'Every "sustainable" material is a set of tradeoffs. Some hurt cost, some hurt performance, some hurt supply, and a few — done well — hurt none of them but still take 6 months longer than you planned.',
        blocks: [
          { type: 'p', html: 'The mistake is treating sustainable packaging as a single decision. It is 8 to 12 decisions: primary substrate, secondary substrate, closures, decoration, adhesives, inserts, secondary carton, shipping carton. Each one has its own material set and its own tradeoffs.' },
          { type: 'p', html: 'Below is the honest ranges we see across cosmetics, wellness, and food & beverage clients. Actual quotes vary by geography, volume, supplier, and market conditions — treat these as reality checks against a supplier quote, not procurement policy.' },
          {
            type: 'diagram',
            animate: true,
            caption: 'Cost premium vs virgin material at typical CPG volumes. Ranges shown as bars; midpoints marked.',
            svg: `<svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart comparing sustainable material cost premiums and channel margin distributions" style="width:100%;height:auto;display:block">
              <text x="40" y="30" fill="#FF600A" font-family="Arial,sans-serif" font-size="12" font-weight="800" letter-spacing="2">SUSTAINABLE MATERIAL COST PREMIUM RANGES</text>
              <text x="40" y="50" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="14">Compared to virgin material equivalent</text>
              ${(() => {
                const materials = [
                  ['FSC paperboard', 3, 10],
                  ['Mono-material redesign', 5, 15],
                  ['PCR PET (30–100%)', 8, 25],
                  ['PCR HDPE / PP', 10, 30],
                  ['Molded pulp / fiber', 15, 35],
                  ['Aluminum bottles', 15, 35],
                  ['Glass (vs plastic, landed)', 20, 60],
                  ['Bio-based resins', 30, 70],
                  ['Compostable film', 40, 80],
                ];
                const chartX = 260, chartMaxX = 660;
                const scale = (val) => chartX + (val / 100) * (chartMaxX - chartX);
                return materials.map(([name, lo, hi], i) => {
                  const y = 90 + i * 26;
                  return `
                    <text x="240" y="${y+4}" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="end">${name}</text>
                    <rect x="${scale(lo)}" y="${y-6}" width="${scale(hi) - scale(lo)}" height="14" rx="2" fill="url(#matGrad)"/>
                    <text x="${scale(hi) + 6}" y="${y+4}" fill="rgba(255,255,255,0.85)" font-family="Arial,sans-serif" font-size="11" font-weight="700">+${lo}–${hi}%</text>
                  `;
                }).join('');
              })()}
              <defs>
                <linearGradient id="matGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stop-color="#FF600A" stop-opacity="0.5"/>
                  <stop offset="1" stop-color="#FF600A"/>
                </linearGradient>
              </defs>
              <!-- Axis -->
              <line x1="260" y1="330" x2="660" y2="330" stroke="rgba(255,255,255,0.2)"/>
              ${[0,20,40,60,80,100].map(v => {
                const x = 260 + (v/100)*400;
                return `<text x="${x}" y="325" fill="rgba(255,255,255,0.4)" font-family="Arial,sans-serif" font-size="10" text-anchor="middle">+${v}%</text><line x1="${x}" y1="76" x2="${x}" y2="315" stroke="rgba(255,255,255,0.06)" stroke-dasharray="2,3"/>`;
              }).join('')}
            </svg>`,
          },
          {
            type: 'table',
            headers: ['Material', 'Cost premium vs virgin', 'Lead time impact', 'Real constraint'],
            rows: [
              ['PCR PET (30–100%)', '+8–25%', '+2–6 weeks', 'Color consistency, food-contact grade availability, resin surcharges'],
              ['PCR HDPE / PP', '+10–30%', '+3–8 weeks', 'Limited color range; brown/black tint common on higher %'],
              ['Mono-material laminates (recyclable)', '+5–15% (redesign)', '+8–16 weeks (revalidation)', 'Requires shelf-life re-testing; barrier tradeoffs on oxygen-sensitive products'],
              ['FSC-certified paperboard', '+3–10%', '+2–4 weeks', 'Chain-of-custody documentation required from mill through converter'],
              ['Molded pulp / fiber', '+15–35%', '+4–8 weeks (tooling)', 'Cavity tooling $8–25K per SKU; tolerances looser than plastic'],
              ['Compostable film (PLA, PHA)', '+40–80%', '+4–10 weeks', 'ASTM D6400/D6868 cert required; won\'t compost outside industrial facilities'],
              ['Bio-based resins (sugarcane PE, PLA)', '+30–70%', '+6–12 weeks', 'Not the same as compostable; recycling stream contamination risk'],
              ['Glass (vs plastic)', '+20–60% landed', '+2–4 weeks (freight)', 'Weight-driven freight cost; breakage rate 0.3–1.2% in retail chain'],
              ['Aluminum (bottles/cans)', '+15–35%', '+4–8 weeks', 'Interior coating for cosmetic/beverage compatibility; MOQ 50K+'],
              ['Refillable systems', 'Capex heavy', '+3–9 months to launch', 'Reverse logistics; consumer return rates 8–40% depending on channel'],
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            label: 'The PCR gotcha.',
            body: [
              'A 30% PCR bottle is not automatically recyclable, and a 100% PCR bottle is not automatically better. What matters at end-of-life is what recycling stream the resin goes back into — and whether your label, closure, decoration, and adhesive contaminate that stream. A gorgeous 100% PCR bottle with a shrink sleeve that covers 60% of the surface is technically not recyclable in most curbside programs. The How2Recycle system exists to force this conversation before you print 500,000 sleeves.',
            ],
          },
          { type: 'h3', text: 'PCR (post-consumer recycled): the workhorse first move' },
          { type: 'p', html: 'PCR is almost always the first sustainable move for a scaling brand. It replaces virgin resin with recycled feedstock, hits most retailer sustainability thresholds, keeps existing tooling and lines running, and — depending on percentage and resin type — carries an 8 to 25 percent cost premium.' },
          { type: 'p', html: 'The two questions to ask a supplier: (1) what percentage PCR by weight, verified how; and (2) what is the resin origin. "50% PCR" from a supplier that cannot cite a mass-balance certificate or ISCC PLUS chain-of-custody documentation is a marketing claim, not a supply fact.' },
          { type: 'h3', text: 'Mono-material redesign: the retailer favorite' },
          { type: 'p', html: 'Multi-layer laminates — the flexible pouches most snack, supplement, and personal care brands use — cannot be recycled in curbside streams. Mono-material alternatives (all-PE, all-PP, all-PET) can be. The tradeoff: barrier performance drops, so shelf-life must be revalidated for oxygen-sensitive products. Budget 8 to 16 weeks and a fresh accelerated stability study.' },
          { type: 'h3', text: 'Compostable: the smallest right answer' },
          { type: 'p', html: 'Compostable packaging is defensible for products consumed in venues with industrial composting (Whole Foods prepared foods, cafeterias, event catering). It is misleading for products sold into curbside consumer retail, because 98% of US municipalities do not have industrial composting infrastructure. Certifying to ASTM D6400 (packaging) or D6868 (food-contact) is the minimum legal requirement to make the claim.' },
          { type: 'h3', text: 'Compare six substrates side by side' },
          { type: 'p', html: 'Click through the options below to see cost premium, retailer acceptance, and the honest constraint for each material. Every panel is drawn from actual quotes on our own client programs.' },
          {
            type: 'tabs',
            label: 'Sustainable material comparison',
            tabs: [
              {
                label: 'FSC paperboard',
                heading: 'FSC-certified paperboard',
                body: '<p>Forest-Stewardship-Council certified virgin or recycled paperboard. Meets the widest set of retailer sustainability policies and is the least-disruptive swap for existing folding-carton programs.</p>',
                metrics: [
                  { label: 'Cost premium', value: '+3–10%', note: 'vs uncertified virgin board' },
                  { label: 'Lead time impact', value: '+1–3 wks', note: 'Chain-of-custody paperwork' },
                  { label: 'Retail acceptance', value: 'Universal', note: 'Whole Foods, Target, Ulta, Sephora' },
                ],
                list: [
                  'Real constraint: FSC-certified mills are concentrated; large brands can crowd capacity in Q3/Q4 holiday builds.',
                  'Ask suppliers for the specific FSC license number (FSC-C######) and current chain-of-custody scope.',
                  'FSC Mix (a blend of certified, recycled, and controlled wood) is fine for most brands; FSC 100% is a marketing upgrade at a higher price.',
                ],
              },
              {
                label: 'Molded fiber',
                heading: 'Molded pulp / molded fiber',
                body: '<p>Pressed recycled fiber (paper, agricultural residue, bamboo) for trays, inserts, and secondary packaging. Common inside beauty and electronics kits as a plastic-tray replacement.</p>',
                metrics: [
                  { label: 'Cost premium', value: '+15–35%', note: 'vs vacuum-formed plastic tray' },
                  { label: 'Lead time impact', value: '+4–8 wks', note: 'Tool build + sampling cycles' },
                  { label: 'Retail acceptance', value: 'Strong', note: 'Sephora Clean, Ulta Conscious' },
                ],
                list: [
                  'Real constraint: tolerances are looser than plastic. Recessed logos and sharp corners often need a design revision.',
                  'Tooling runs $8K–$25K per SKU; amortized across 3–5 year programs.',
                  'Moisture-sensitive products need a barrier layer or overwrap — the sustainability story weakens if you add plastic film back in.',
                ],
              },
              {
                label: 'PCR plastic',
                heading: 'Post-consumer recycled (PCR) resin',
                body: '<p>Recycled PET, HDPE, or PP resin used in bottles, jars, closures, and rigid trays. The workhorse first move for most CPG programs.</p>',
                metrics: [
                  { label: 'Cost premium', value: '+8–30%', note: 'vs virgin, varies by resin' },
                  { label: 'Lead time impact', value: '+2–8 wks', note: 'Resin availability + color match' },
                  { label: 'Retail acceptance', value: 'Universal', note: 'Meets most retailer thresholds' },
                ],
                list: [
                  'Real constraint: PCR loads above 50% often shift color and can introduce black flecks — plan a fresh color match and a QC standard for allowed defect count.',
                  'Verify % PCR by weight with a mass-balance certificate (ISCC PLUS or equivalent). Marketing-claim PCR without documentation is a compliance risk.',
                  'PCR HDPE and PCR PP have limited color range; deep or unusual colors often need a virgin content override.',
                ],
              },
              {
                label: 'Bioplastic',
                heading: 'Bio-based / bioplastic resins',
                body: '<p>Resins made from renewable feedstock (sugarcane PE, cornstarch PLA, cellulose-based films). Sold as sustainability wins, but the retail story is more complex than PCR.</p>',
                metrics: [
                  { label: 'Cost premium', value: '+30–70%', note: 'Highest premium category' },
                  { label: 'Lead time impact', value: '+8–14 wks', note: 'Supply is tight' },
                  { label: 'Retail acceptance', value: 'Mixed', note: 'Some retailers ban PLA for recycling contamination' },
                ],
                list: [
                  'Real constraint: PLA and other biopolymers do not compost in home settings and can contaminate PET/HDPE recycling streams — a real reason why several retailers now discourage them.',
                  'Sugarcane PE is chemically identical to fossil PE and can go into normal recycling streams. It carries a smaller premium and fewer downstream problems.',
                  'Avoid vague "plant-based" marketing claims without a specific feedstock percentage; retailers scrutinize these on category reviews.',
                ],
              },
              {
                label: 'Glass',
                heading: 'Glass',
                body: '<p>Landed cost, breakage exposure, and freight economics — not the material cost — are what usually change the answer on glass. Recyclable curbside almost everywhere, and premium on shelf.</p>',
                metrics: [
                  { label: 'Cost premium', value: '+20–60%', note: 'landed vs plastic equivalent' },
                  { label: 'Lead time impact', value: '+6–12 wks', note: 'Domestic tooling backlogged' },
                  { label: 'Retail acceptance', value: 'Universal', note: 'Preferred for premium beauty' },
                ],
                list: [
                  'Real constraint: freight cost is 2–3× plastic because of weight; DTC shipping economics can flip negative unless you switch to bulk retail-first distribution.',
                  'Breakage rates of 0.5–2% in transit and warehousing are normal; build the reserve into COGS and QC.',
                  'Post-consumer recycled cullet content varies widely — ask for a specific % rather than accepting "recycled content" as a checkbox.',
                ],
              },
              {
                label: 'Aluminum',
                heading: 'Aluminum bottles and cans',
                body: '<p>Rising fast in beverage, personal care, and premium beauty. Infinite recyclability, strong retail shelf presence, and a defensible sustainability claim — but a real up-front cost story.</p>',
                metrics: [
                  { label: 'Cost premium', value: '+15–35%', note: 'vs equivalent PET bottle' },
                  { label: 'Lead time impact', value: '+6–10 wks', note: 'Decorated aluminum capacity constrained' },
                  { label: 'Retail acceptance', value: 'Strong + growing', note: 'Retailers prefer for recycled-content messaging' },
                ],
                list: [
                  'Real constraint: printing and decoration limitations mean brand design usually needs a rework — engineered-for-aluminum art rarely comes from a legacy plastic file.',
                  'For dispensing products, a compatible pump/closure system needs qualification separately; the bottle switch is only half the project.',
                  'Aluminum bodies plus plastic components (pumps, dip tubes, sleeves) create a mixed-material recycling story — retailers ask about the full system, not just the primary substrate.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'epr-laws',
        heading: 'EPR laws by state: what you already owe',
        lead: 'Extended Producer Responsibility (EPR) laws shift the cost of packaging end-of-life from municipalities to the brands that sell the packaging. If you sell into California, Colorado, Maine, Oregon, or Minnesota, you likely already owe fees — even if you have not registered.',
        blocks: [
          {
            type: 'table',
            headers: ['State', 'Law', 'Producer registration deadline', 'Fee payments begin', 'Threshold'],
            rows: [
              ['California', 'SB 54 (2022)', 'Registered via CAA by 2026', 'Fees phase in through 2027–2032', '$1M+ gross revenue in CA'],
              ['Colorado', 'HB 22-1355 (2022)', 'Registered with CAA 2025', 'Fees began July 2025', '$5M+ gross revenue in CO'],
              ['Maine', 'LD 1541 (2021)', 'Rulemaking finalized 2024', 'Fees expected 2026–2027', 'Producer definition broad'],
              ['Oregon', 'SB 582 (2021)', 'Registered with CAA by March 2025', 'Fees began July 2025', '$5M+ gross revenue in OR'],
              ['Minnesota', 'HF 3577 (2024)', 'Registration by 2026', 'Fees begin 2029', '$2M+ gross revenue in MN'],
            ],
          },
          {
            type: 'callout',
            tone: 'real',
            label: 'What "CAA" means and why it matters.',
            body: [
              'Every state EPR law appoints a Producer Responsibility Organization (in most cases the Circular Action Alliance, or CAA) to collect fees and run the program. You register with the CAA, report your packaging by material type and weight sold into that state, and pay fees calibrated to how recyclable, reusable, or landfilled that packaging is. More sustainable packaging pays lower fees; hard-to-recycle packaging pays penalty rates.',
              'Practical impact for a $10M brand selling into all 50 states: registration costs are modest ($500–5,000 per state), but annual EPR fees can range from $8,000 to $75,000+ depending on packaging mix. Budget for it now.',
            ],
          },
          { type: 'p', html: 'Six more states have active legislation as of 2026: Washington, New York, Illinois, New Jersey, Massachusetts, and Connecticut. If you sell nationally, assume every US state will have some form of EPR by 2030. Design for it now, not later.' },
          {
            type: 'cta',
            label: 'Not sure if your brand is a "covered producer"?',
            body: 'The definitions vary state to state. Ask us and we\'ll walk through your revenue thresholds, SKU list, and material composition to give you a straight answer.',
            href: '/how-we-work',
            linkText: 'See how Logic works →',
          },
        ],
      },
      {
        id: 'retailer-requirements',
        heading: 'Retailer requirements: hard specs, not preferences',
        lead: 'When Walmart, Target, Sephora, Whole Foods, or Ulta ask about your packaging sustainability, they are not asking your opinion. They are running a spec check against a scorecard. Miss the threshold and you either get delisted, get charged a sustainability fee, or fail to qualify for the launch in the first place.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Walmart — Project Gigaton & Sustainable Packaging Playbook', body: 'Recyclable, reusable, or compostable materials by 2025 target. 20% PCR minimum by 2025 for private-label packaging. Suppliers submit annual scorecards through Retail Link. Non-compliance affects OTIF-adjacent scoring in future category reviews.' },
              { title: 'Target — Target Zero & 2040 Circular Design', body: 'Products flagged as "Target Zero" earn preferential shelf placement. Design criteria: recyclable, refillable, reusable, made from PCR, or compostable. Buyer conversations now open with the sustainability certification list, not the product story.' },
              { title: 'Sephora — Clean + Planet Positive', body: 'Beauty/wellness brands must meet packaging criteria: no PVC, ≥50% PCR or reusable/refillable, or FSC-certified paperboard. Certifications required in vendor onboarding portal. Non-qualifying products can still list but forfeit the Planet Positive badge that drives shelf and online prominence.' },
              { title: 'Whole Foods — Quality Standards', body: 'Prohibited packaging materials list (PVC, expanded polystyrene for grocery, single-use straws in prepared food). Positive scoring for compostable, mono-material recyclable, and post-consumer recycled content. Bulk and refillable formats preferred in specific categories.' },
              { title: 'Ulta — Conscious Beauty', body: '5 pillars, one of which is Clean Ingredients and Recyclable Packaging. Recyclable via How2Recycle-verified labeling or refillable/reusable. Buyer scorecards weight this pillar in resets.' },
              { title: 'Amazon — Ships in Own Container (SIOC) & Frustration-Free Packaging', body: 'Fees apply for over-boxed, non-optimized packaging. Certified SIOC products avoid Amazon overpack. Sustainability signals influence Climate Pledge Friendly badge, which lifts click-through 8–12% in category tests.' },
            ],
          },
          {
            type: 'caseStudy',
            tag: 'From the ops floor',
            heading: 'A retailer buyer will ask about sustainability in the first 90 minutes',
            body: [
              'When we walk a client into a category review with a national retailer, sustainability comes up before pricing. Not always as a hard-line requirement, but always as a scored criterion — a checkbox on the buyer\'s vendor rubric.',
              'The brands that convert are the ones that walk in with the answer already documented: "Primary container is 50% PCR PET, verified by ISCC PLUS mass balance. Secondary is FSC-C certified SBS. Shrink sleeve is EcoStream-cleared for PET recycling stream. EPR fees are budgeted at $12K/year across CA, CO, OR." That level of specificity turns a scored criterion into a competitive advantage.',
            ],
          },
        ],
      },
      {
        id: 'claims-language',
        heading: 'Claims language: FTC Green Guides and how not to get sued',
        lead: 'The current final FTC Green Guides were revised in 2012, and the FTC opened a review in 2022. The words on your carton, website, and product listing still carry legal weight, so every claim needs evidence and qualification.',
        blocks: [
          {
            type: 'table',
            headers: ['Claim', 'Required to say it', 'Common failure'],
            rows: [
              ['"Recyclable"', 'Substantial majority of consumers (60%+) have access to recycling for the material — and the full package as sold is recyclable, not just the base substrate', 'Bottle body recyclable but shrink sleeve or pump make full package non-recyclable in curbside'],
              ['"Recycled" / "Contains X% recycled content"', 'Verified percentage, mass-balance or physical, from a certified feedstock source', 'Percentage refers to resin only, not total package weight; no chain-of-custody documentation'],
              ['"Compostable"', 'ASTM D6400 (packaging) or D6868 (food-contact) certification; disclose whether industrial or home compostable', 'No certification; assumes home composting when only industrial applies'],
              ['"Biodegradable"', 'FTC requires proof of complete biodegradation within one year in customary disposal environment', 'Product ends up in landfill where nothing biodegrades in customary timeframe; claim collapses'],
              ['"Sustainable" / "Eco-friendly" / "Green"', 'FTC requires substantiation; unqualified claims strongly discouraged', 'General claim without specific, measurable substantiation is the highest-risk category for enforcement'],
              ['"Made from ocean plastic"', 'Documented recovery from marine or waterway environments through certified chain', 'Vague "ocean-bound" claims often disputed; verification chain not maintained'],
              ['"Carbon neutral"', 'Third-party verification of emissions offset; scope disclosed', 'Scope 3 not counted; offsets from questionable projects'],
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            label: 'The one word that has cost brands the most.',
            body: [
              '"Recyclable" is now the single most litigated packaging claim in the US. If your bottle is technically recyclable but your label material contaminates the PET stream, or your product is only recyclable at drop-off sites (not curbside), the FTC and state AGs have both signaled they view unqualified "recyclable" claims as deceptive. Use How2Recycle labeling to qualify the claim precisely: "Widely Recycled," "Check Locally," or "Store Drop-Off."',
            ],
          },
          {
            type: 'wired',
            tag: 'Operator rule',
            heading: 'If your legal team has not seen the claim, do not print the claim',
            body: [
              'Sustainability claims should route through the same review process as ingredient claims. Marketing writes the language, packaging engineering verifies the substantiation, legal signs off, and only then does it hit artwork. When this process is skipped — usually to meet a launch deadline — the result is a printed run that either has to be relabeled or exposes the brand to enforcement or class-action risk.',
            ],
          },
          { type: 'p', html: 'Primary source: review the <a href="https://www.ftc.gov/news-events/topics/truth-advertising/green-guides" target="_blank" rel="noopener noreferrer">FTC Green Guides</a> and the underlying 16 CFR Part 260 guidance before approving environmental marketing claims. The FTC advises against broad, unqualified general environmental benefit claims and requires marketers to substantiate the specific benefit communicated.' },
        ],
      },
      {
        id: 'decision-framework',
        heading: 'How to prioritize sustainability moves (without stalling everything)',
        lead: 'The mistake most brands make is trying to redesign the entire packaging system at once, then getting stuck. The right move is sequenced: pick the material change with the highest impact and the lowest disruption, ship it, and move to the next.',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Audit what you have', body: 'Inventory every SKU\'s primary, secondary, and shipping packaging. Weight, material, recyclability, PCR %, decoration. Most brands discover 60–80% of their packaging weight sits in 20% of SKUs — start there.' },
              { title: 'Score against retailer requirements', body: 'Map current specs to Walmart, Target, Sephora, Whole Foods, Ulta scorecards. Every "no" or "partial" is either a delisting risk or a growth blocker at that retailer.' },
              { title: 'Model EPR exposure', body: 'Estimate annual EPR fees at current packaging mix. Then model fees at 30% PCR, 50% PCR, mono-material redesign. The savings usually cover a meaningful portion of the redesign cost within 2–3 years.' },
              { title: 'Pick the highest-impact low-drag move', body: 'PCR conversion of an existing bottle almost always beats mono-material redesign as a first move. Same tooling, same line, same shelf life. New feedstock. 6–12 weeks not 6–12 months.' },
              { title: 'Ship, verify, then scale', body: 'Run the first PCR SKU. Measure color consistency, molding scrap, retailer response. Adjust. Then roll to the next 3 SKUs. Then the rest of the portfolio.' },
              { title: 'Update claims and labels', body: 'Only after the verified substantiation exists. Never lead marketing with claims that engineering has not confirmed on the actual production run.' },
            ],
          },
          {
            type: 'math',
            heading: 'PCR conversion cost math — worked example',
            rows: [
              { label: 'Current annual volume (single SKU 8oz PET bottle)', value: '500,000 units' },
              { label: 'Virgin PET cost per bottle', value: '$0.28' },
              { label: '30% PCR PET cost per bottle', value: '$0.33' },
              { label: 'Annual cost increase', value: '$25,000' },
              { label: 'Projected EPR fee reduction (CA + CO + OR)', value: '−$4,800' },
              { label: 'Retailer scorecard uplift (unquantified)', value: 'Meaningful' },
              { label: 'Net annual investment', value: '$20,200' },
            ],
            note: 'The pure P&L cost is real. The offset — EPR fees avoided, retailer scorecard improvement, consumer preference — is not zero, but it is difficult to model with precision. The brands that treat sustainability as R&D expense budget it; the brands that treat it as marketing expense argue about it and stall.',
          },
        ],
      },
      {
        id: 'when-logic',
        heading: 'When Logic gets involved',
        blocks: [
          { type: 'p', html: 'Sustainable packaging engagements typically start when a brand has hit a wall: a retailer demand, a state EPR notice, a marketing team that wrote a claim engineering cannot back up, or a category review deadline where the buyer is going to ask.' },
          { type: 'p', html: 'What we do inside the engagement:' },
          {
            type: 'list',
            items: [
              'Full packaging audit — material, weight, recyclability, PCR %, decoration, chain-of-custody status',
              'Retailer scorecard mapping against active accounts and target accounts',
              'EPR liability modeling across the states you sell into',
              'Supplier RFQ for PCR resin, FSC paperboard, mono-material redesign, or refillable systems as the situation demands',
              'Claims language review with legal to keep marketing and legal on the same document',
              'Production management through first run — color match approval, QC, first-article approval',
              'Documentation package the retailer buyer, EPR PRO, and legal team can all pull from',
            ],
          },
          { type: 'p', html: 'Related reading: our <a href="/guides/packaging-cost-reduction">Packaging Cost Reduction</a> guide covers the cost side; <a href="/guides/packaging-sourcing">Packaging Sourcing Without Getting Burned</a> covers supplier qualification.' },
        ],
      },
    ],
    faq: [
      { q: 'What is the difference between recyclable, compostable, and biodegradable packaging?', a: 'Recyclable means the packaging can be collected, sorted, and re-processed into new material through existing infrastructure — verified against the standard set by How2Recycle in the US. Compostable means the packaging breaks down into biological material under specific conditions (industrial composting under ASTM D6400 or D6868, or home composting under stricter standards). Biodegradable is a broader term the FTC now discourages because it lacks specific meaning — the FTC requires proof of complete biodegradation within one year in the "customary disposal environment," which for most packaging is a landfill where almost nothing biodegrades in that timeframe.' },
      { q: 'How much does PCR packaging cost compared to virgin?', a: 'Post-consumer recycled resin typically costs 8 to 25 percent more than virgin resin, depending on the resin type, PCR percentage, and market conditions. PCR PET at 30% is the most common first move and usually adds $0.03 to $0.08 per bottle at typical CPG volumes. PCR HDPE and PP run higher, and higher PCR percentages (50%, 75%, 100%) carry non-linear cost increases and often color-consistency limitations. Total landed cost impact — including any downgrade in decoration or line efficiency — is what you should model, not the resin premium alone.' },
      { q: 'Which states have packaging EPR laws?', a: 'As of 2026, five states have enacted EPR laws for packaging: California (SB 54), Colorado (HB 22-1355), Maine (LD 1541), Oregon (SB 582), and Minnesota (HF 3577). Colorado and Oregon began collecting producer fees in July 2025. California\'s fees phase in through 2027-2032. Producer registration deadlines and fee schedules vary state to state, but any brand doing more than $1-5M in gross revenue in these states typically qualifies as a "covered producer." Washington, New York, Illinois, New Jersey, Massachusetts, and Connecticut have active legislation and are likely to pass similar laws by 2028.' },
      { q: 'What are the FTC Green Guides and why do they matter?', a: 'The FTC Green Guides explain how truth-in-advertising principles apply to environmental claims. The current final Guides were revised in 2012, and the FTC opened a review in 2022. They caution against broad, unqualified claims such as "green" or "eco-friendly" and explain how marketers should qualify and substantiate claims including recyclable, recycled content, compostable, degradable, and carbon offsets. Any environmental claim on packaging or a website should be reviewed against the current FTC guidance and supported by product-specific evidence before printing.' },
      { q: 'What is a mono-material laminate and why do retailers prefer it?', a: 'Traditional flexible packaging — the pouches most snack, supplement, and personal-care brands use — is made from multiple laminated layers (typically PET/AL/PE) that cannot be recycled in any curbside program because the layers cannot be separated. Mono-material laminates use a single resin family (all-PE, all-PP, or all-PET) with barrier coatings, which allows the pouch to be recycled through emerging store drop-off programs and eventually curbside. Retailers prefer them because they score on sustainability rubrics and reduce EPR fees. The tradeoff: barrier performance is different, so oxygen-sensitive products often require shelf-life revalidation, and mono-material films run $0.02-0.06 more per pouch at typical volumes.' },
      { q: 'How does refillable packaging actually work economically?', a: 'Refillable packaging works economically in three contexts: (1) high-price-per-unit categories where the primary container is expensive and refills are cheaper — luxury skincare, prestige fragrance, premium home fragrance; (2) subscription models with direct-to-consumer reverse logistics; and (3) in-store refill stations at retailers with existing sustainability programs (Whole Foods, some Sephora locations). Outside these contexts, the reverse logistics cost, consumer return rates (8-40% depending on channel), and quality control on returned containers usually break the economics for lower-price-per-unit CPG. Brands that succeed with refill typically spend 3-9 months building the operational model before launching to consumers.' },
      { q: 'Do retailers actually delist products for non-sustainable packaging?', a: 'Delisting purely for packaging is rare. What is common: (1) failing to qualify for new-item slots in the first place because your scorecard is below the buyer\'s threshold, (2) losing preferential shelf placement or "clean/conscious" badges that drive category velocity, (3) paying higher slotting or sustainability fees, and (4) being deprioritized in category resets when a competitor with better packaging enters. The financial impact of not qualifying for Sephora Clean+Planet Positive or Target Zero, for example, often exceeds the redesign cost within 12-18 months in that channel.' },
      { q: 'How long does a full packaging sustainability redesign take?', a: 'A single-SKU PCR conversion on existing tooling: 8-16 weeks including validation. A mono-material laminate redesign: 4-6 months including shelf-life revalidation. A structural redesign to a fully recyclable format: 6-9 months including tooling. A refillable system launch: 6-12 months including reverse logistics build. The brands that ship on the shorter end of these ranges are the ones that pick a sequenced approach — highest-impact SKU first, learn, then scale — rather than trying to redesign the entire portfolio in one initiative.' },
    ],
    keyTakeaways: [
      'PCR conversion on existing tooling is almost always the highest-impact, lowest-drag first move. Ship it, then move to the next material decision.',
      'EPR fees are real, escalating, and already being collected in Colorado and Oregon. Register, model your liability, and design to lower fee tiers.',
      'Retailer scorecards are hard specs, not preferences. Walk into category reviews with the substantiation already documented.',
      'Every sustainability claim on the package or website is a legal artifact. FTC Green Guides and state AGs are actively enforcing.',
      'Sustainable packaging is a sequence of decisions, not one project. The brands that ship are the ones that pick a lane and iterate.',
    ],
    related: [
      { href: '/guides/packaging-cost-reduction', title: 'Packaging Cost Reduction Without Sacrificing Brand', description: 'Where packaging margin actually leaks — and how to fix it without downgrading quality.' },
      { href: '/guides/packaging-sourcing', title: 'How to Source Packaging Without Getting Burned', description: 'Supplier qualification, landed cost, and the mistakes that cost brands months and margin.' },
      { href: '/guides/retail-readiness', title: 'The Retail Readiness Bible', description: 'The complete operational playbook for launching and scaling in retail.' },
    ],
    ctaHeading: <>Sustainability decisions your <span className="o">buyer, legal team, and factory</span> can all sign off on.</>,
    ctaCopy: 'Logic Agency runs the full loop: material selection, supplier qualification, retailer scorecard mapping, EPR liability, claims review, and production management through first run—keeping the decisions in one accountable workstream.',
  },

  // =========================================================================
  // 2. DISTRIBUTOR ONBOARDING PLAYBOOK (P0)
  // =========================================================================
  'distributor-onboarding-playbook': {
    slug: 'distributor-onboarding-playbook',
    stickyToc: true,
    ...authored,
    datePublished: '2026-09-16',
    dateModified: '2026-09-24',
    title: 'The CPG Distributor Onboarding Playbook: KeHE, UNFI, DPI, and What Buyers Actually Expect',
    titleBefore: 'The CPG Distributor Onboarding Playbook:',
    titleAccent: 'KeHE, UNFI, DPI, and What Buyers Expect',
    description: 'KeHE and UNFI category calendars, slotting ranges, MCB, EDI setup, and the first-90-day operating rhythm that turns a "yes" into reorders.',
    keywords: 'distributor onboarding CPG, KeHE onboarding, UNFI onboarding, DPI onboarding, category review calendar, new item slotting fee, KeHE new item form, UNFI new item form, RangeMe, ECRM, PromoMash, natural distributor onboarding',
    ogImage: '/images/og-distributor-onboarding-playbook.jpg',
    readTime: '19 min read',
    lede: 'Getting a distributor to say yes is the middle of the process, not the end. Onboarding through KeHE, UNFI, DPI, or a regional operator involves category review calendars set 6 months in advance, new-item forms that reject if a single field is wrong, slotting and free-fill costs that reshape your first-year P&L, and an EDI setup that costs you money every day it is not live. This guide is what we walk into a buyer meeting with.',
    audience: 'Founders and sales leads at CPG brands entering natural, conventional, or specialty grocery distribution — pre-first-PO through first 12 months at scale.',
    tldr: [
      '<strong>Distributor windows are fixed, not flexible.</strong> KeHE runs category reviews Jan/Jul; UNFI runs Feb/Aug; DPI and regionals vary. Missing a window costs you 6 months.',
      '<strong>New-item slotting ranges: KeHE $150–500/SKU/DC, UNFI $200–750/SKU/DC, DPI negotiated.</strong> "Free-fill" of 1–3 cases per DC per SKU is standard.',
      '<strong>Data platforms are gatekeepers.</strong> RangeMe (KeHE), ECRM (UNFI/other), PromoMash, and SPINS syndication data are required, not optional.',
      '<strong>EDI is non-negotiable at scale.</strong> Manual PO processing works to about $50K/month of distributor volume. Beyond that, chargebacks and lost margin exceed the SPS Commerce or similar EDI subscription cost.',
      '<strong>Onboarding is 8–14 weeks from vendor packet return to first shipment</strong> — assuming your packaging, labeling, and compliance documents are ready when the packet arrives.',
    ],
    sections: [
      {
        id: 'landscape',
        heading: 'The distributor landscape: who does what',
        lead: 'Before you pitch, know which distributor actually serves the channel you want. A brand pitching KeHE for conventional grocery is pitching the wrong door; a brand pitching UNFI for foodservice is going to be redirected.',
        blocks: [
          {
            type: 'table',
            headers: ['Distributor', 'Primary channel', 'Buyer count', 'Typical minimums', 'Onboarding rhythm'],
            rows: [
              ['<strong>KeHE</strong>', 'Natural, specialty, gourmet, conventional grocery', '~35,000 retail locations across 6 US DCs', 'Case pack minimums, first-order $500-2K depending on category', 'Category reviews Jan / July; new-item forms via RangeMe'],
              ['<strong>UNFI</strong>', 'Natural, organic, conventional, wholesale to Whole Foods and many independents', '~40,000 retail locations across 30+ DCs', 'Case pack minimums, first-order $1-3K', 'Category reviews Feb / August; new-item forms via ECRM/PromoMash/SmartCommerce'],
              ['<strong>DPI Specialty Foods</strong>', 'Specialty, gourmet, fine food; strong DC network in West', '~5,000 accounts across regional DCs', 'Case pack minimums by DC', 'Rolling category reviews; direct rep relationships central'],
              ['<strong>Regional (BiRite, Alpine, Palko, Nassau Candy, etc.)</strong>', 'Region-specific; often channel-specific (foodservice, natural, specialty)', 'Varies by operator', 'Lower minimums than national; more flexible', 'Rep-driven onboarding; less structured; faster to first PO'],
              ['<strong>DSD (Direct Store Delivery) — Frito-Lay, Bimbo, Reyes Coca-Cola, MillerCoors, etc.</strong>', 'Beverage, snacks, bread — high-velocity impulse categories', 'Enterprise scale', 'Category-specific; heavy trade spend requirements', 'Not a distributor in the same sense — contracted route service; separate playbook entirely'],
            ],
          },
          {
            type: 'callout',
            tone: 'real',
            label: 'The DSD note.',
            body: [
              'DSD (Direct Store Delivery) partners like Frito-Lay, Bimbo, Reyes, and the beer/beverage wholesalers are structurally different from KeHE/UNFI/DPI. DSD partners buy from you, own the shelf, and manage in-store execution. National distributors sell your product on to retailers who own the shelf. The onboarding, economics, and operational rhythm are so different they are separate categories entirely. This guide focuses on the wholesale distributor model.',
            ],
          },
          { type: 'h3', text: 'Getting to yes at each distributor' },
          { type: 'p', html: 'The path from cold-inbound to first PO looks meaningfully different at each door. Click through to see how the sales cycle actually runs.' },
          {
            type: 'tabs',
            label: 'Distributor sales-cycle comparison',
            tabs: [
              {
                label: 'KeHE',
                heading: 'KeHE — form-driven and calendar-locked',
                body: '<p>KeHE runs on RangeMe. A complete, verified submission during the January or July window is the price of admission; anything less and you wait six months.</p>',
                metrics: [
                  { label: 'Cycle time (inbound → first PO)', value: '5–9 mos' },
                  { label: 'Data platform', value: 'RangeMe Pro', note: '$1,200/yr required' },
                  { label: 'Buyer contact style', value: 'Form → Broker → Buyer' },
                ],
                list: [
                  '<strong>Real path:</strong> RangeMe submission before deadline → broker introduction (recommended) → KeHE Selling Show meeting → category buyer decision → first PO 90–120 days after decision.',
                  '<strong>Common miss:</strong> submitting to RangeMe but not having a broker to advocate during buyer review. Coldest submissions rarely make the shortlist.',
                  '<strong>Volume expectation:</strong> KeHE first-PO for a new SKU typically 2–4 cases per DC across 2–6 DCs — modest first shipment, real velocity data required to expand.',
                ],
              },
              {
                label: 'UNFI',
                heading: 'UNFI — form + relationship + retailer-driven',
                body: '<p>UNFI reviews are heavily influenced by retailer customers, especially Whole Foods. Getting a Whole Foods buyer to sponsor your item can shortcut the UNFI process entirely.</p>',
                metrics: [
                  { label: 'Cycle time', value: '4–10 mos' },
                  { label: 'Data platform', value: 'ECRM / PromoMash' },
                  { label: 'Buyer contact style', value: 'Retailer-sponsored fast track' },
                ],
                list: [
                  '<strong>Real path:</strong> Retailer buyer commits (Whole Foods regional, Sprouts, Erewhon, Thrive Market) → they push UNFI to onboard you → UNFI onboarding runs in parallel to retailer setup, often compressing to 60–90 days.',
                  '<strong>Alternative path:</strong> UNFI winter or fall show meeting → sponsored by broker → new-item form → 5–7 month cycle.',
                  '<strong>Common miss:</strong> pitching UNFI without a retailer commitment or a broker. UNFI onboards SKUs its retailers already want; cold onboarding is rare.',
                ],
              },
              {
                label: 'DPI Specialty',
                heading: 'DPI Specialty — rep-driven and category-focused',
                body: '<p>DPI runs closer to a specialty foodservice model. Rep relationships and product story matter more than form completion.</p>',
                metrics: [
                  { label: 'Cycle time', value: '2–5 mos' },
                  { label: 'Data platform', value: 'Direct email + PDFs' },
                  { label: 'Buyer contact style', value: 'Rep → Category buyer' },
                ],
                list: [
                  '<strong>Real path:</strong> Regional DPI rep introduction (often via Expo West or trade contact) → category buyer meeting → first PO 60–150 days.',
                  '<strong>Common miss:</strong> approaching DPI with a mass-market pitch. DPI\'s buyer is looking for premium, differentiated, story-forward specialty product.',
                  '<strong>Volume expectation:</strong> smaller first POs but higher category attention. Category managers advocate hard for their picks.',
                ],
              },
              {
                label: 'Regional',
                heading: 'Regional distributors — rep-first and fast',
                body: '<p>BiRite, Alpine, Palko, Nassau Candy, and dozens of others operate on a rep-driven model. Faster to yes, smaller footprints, and often the right first move for a new brand.</p>',
                metrics: [
                  { label: 'Cycle time', value: '30–90 days' },
                  { label: 'Data platform', value: 'Rep email + spec sheets' },
                  { label: 'Buyer contact style', value: 'Direct rep or owner' },
                ],
                list: [
                  '<strong>Real path:</strong> cold outreach or trade-show intro → rep or category buyer meeting → first PO 30–60 days after decision.',
                  '<strong>Why this matters:</strong> a regional first launch generates velocity data you need to open a KeHE or UNFI conversation. Skipping this step and pitching national cold is possible but harder.',
                  '<strong>Common miss:</strong> under-serving the regional after national wins land. Regional partners drop brands that ghost after national breakthrough.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'calendar',
        heading: 'The category review calendar',
        lead: 'Distributors and their retailer customers reset categories on scheduled cycles. Missing the window costs 6 months. Below is the operating rhythm at the two largest national distributors and the retailers they serve.',
        blocks: [
          {
            type: 'diagram',
            caption: 'The national natural / specialty category review calendar. Miss a window, wait six months.',
            svg: `<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="National distributor category review calendar showing KeHE and UNFI selling show windows across the year" style="width:100%;height:auto;display:block">
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FF600A"/><stop offset="1" stop-color="#FF600A" stop-opacity="0.4"/></linearGradient>
              </defs>
              <line x1="40" y1="130" x2="680" y2="130" stroke="#DFDFDF" stroke-width="2"/>
              ${['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'].map((m, i) => {
                const x = 40 + (i * (640/11));
                return `<text x="${x}" y="155" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">${m}</text><circle cx="${x}" cy="130" r="3" fill="#F3F3F3"/>`;
              }).join('')}
              <!-- KeHE Jan/Jul -->
              <circle cx="40" cy="130" r="10" fill="#FF600A"/>
              <text x="40" y="105" fill="#FF600A" font-family="Arial,sans-serif" font-size="12" font-weight="800" text-anchor="middle">KeHE</text>
              <text x="40" y="88" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="10" text-anchor="middle">Spring show</text>
              <circle cx="${40 + 6*(640/11)}" cy="130" r="10" fill="#FF600A"/>
              <text x="${40 + 6*(640/11)}" y="105" fill="#FF600A" font-family="Arial,sans-serif" font-size="12" font-weight="800" text-anchor="middle">KeHE</text>
              <text x="${40 + 6*(640/11)}" y="88" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="10" text-anchor="middle">Fall show</text>
              <!-- UNFI Feb/Aug -->
              <circle cx="${40 + 1*(640/11)}" cy="130" r="10" fill="#F3F3F3" stroke="#FF600A" stroke-width="2"/>
              <text x="${40 + 1*(640/11)}" y="185" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="12" font-weight="800" text-anchor="middle">UNFI</text>
              <text x="${40 + 1*(640/11)}" y="202" fill="rgba(255,255,255,0.65)" font-family="Arial,sans-serif" font-size="10" text-anchor="middle">Winter show</text>
              <circle cx="${40 + 7*(640/11)}" cy="130" r="10" fill="#F3F3F3" stroke="#FF600A" stroke-width="2"/>
              <text x="${40 + 7*(640/11)}" y="185" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="12" font-weight="800" text-anchor="middle">UNFI</text>
              <text x="${40 + 7*(640/11)}" y="202" fill="rgba(255,255,255,0.65)" font-family="Arial,sans-serif" font-size="10" text-anchor="middle">Fall show</text>
              <!-- Expo West Mar / Expo East Sep -->
              <rect x="${40 + 2*(640/11) - 22}" y="120" width="44" height="20" rx="4" fill="rgba(255,96,10,0.25)" stroke="#FF600A"/>
              <text x="${40 + 2*(640/11)}" y="134" fill="#FF600A" font-family="Arial,sans-serif" font-size="10" font-weight="700" text-anchor="middle">EXPO WEST</text>
              <rect x="${40 + 8*(640/11) - 22}" y="120" width="44" height="20" rx="4" fill="rgba(255,96,10,0.15)" stroke="#FF600A" stroke-dasharray="3,2"/>
              <text x="${40 + 8*(640/11)}" y="134" fill="#FF600A" font-family="Arial,sans-serif" font-size="10" font-weight="700" text-anchor="middle">EXPO EAST</text>
              <!-- Title -->
              <text x="40" y="40" fill="#FF600A" font-family="Arial,sans-serif" font-size="12" font-weight="800" letter-spacing="2">NATIONAL DISTRIBUTOR CATEGORY REVIEW WINDOWS</text>
              <text x="40" y="60" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="14">The fixed operating rhythm of natural / specialty CPG</text>
              <text x="40" y="245" fill="rgba(255,255,255,0.5)" font-family="Arial,sans-serif" font-size="10">Solid dots = KeHE Selling Shows · Ring dots = UNFI shows · Bars = Expo trade shows</text>
            </svg>`,
          },
          {
            type: 'timeline',
            items: [
              { duration: 'Jan', title: 'KeHE — Spring Selling Show', body: 'National new-item submissions for spring/summer category resets. Product must be in RangeMe with complete data 6–8 weeks in advance. Selection decisions Feb–March. First shipments April–June.' },
              { duration: 'Feb', title: 'UNFI — Winter/Spring Show + Whole Foods Category Reviews', body: 'UNFI-driven and retailer-driven reviews. Whole Foods regional and global buyers use this window heavily. New-item forms and category story required.' },
              { duration: 'Mar–Apr', title: 'Expo West (Anaheim)', body: 'Not a category review itself, but the largest single opportunity to meet buyers from KeHE, UNFI, Whole Foods, Sprouts, Erewhon, Thrive Market, and hundreds of independents. Book meetings 60+ days in advance.' },
              { duration: 'Jul', title: 'KeHE — Fall Selling Show', body: 'National new-item submissions for fall/holiday/winter category resets. Selection decisions Aug–Sep. First shipments Oct–Dec.' },
              { duration: 'Aug', title: 'UNFI — Fall Show + Retailer Reviews', body: 'Fall category resets, holiday programming, and Q1 planning. Trade spend and promotional calendars locked here.' },
              { duration: 'Sep', title: 'Natural Products Expo East', body: 'Smaller than West but still significant. East-coast retailers, distributors, and independents. Regional expansion opportunity.' },
              { duration: 'Rolling', title: 'DPI, regional, and independent buyers', body: 'Less rigid calendar. Rep-driven. Faster to yes but often smaller volume commitments.' },
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            label: 'The one-cycle rule.',
            body: [
              'Assume you will get one meaningful category review per year at each distributor. If you miss July at KeHE, your realistic first-shipment date at scale is April of the following year. Plan production, cash, and packaging changes against that rhythm, not against an aspirational timeline.',
            ],
          },
        ],
      },
      {
        id: 'costs',
        heading: 'What onboarding actually costs',
        lead: 'The published slotting fees are the tip of the iceberg. Below is what a typical natural CPG brand budgets for onboarding at a national distributor. Ranges are wide because they vary by category, brand velocity history, and negotiation leverage.',
        blocks: [
          {
            type: 'math',
            heading: 'Distributor onboarding cost stack — worked example: 3 SKUs into KeHE (2 DCs)',
            rows: [
              { label: 'New-item slotting fee ($250/SKU/DC × 3 × 2)', value: '$1,500' },
              { label: 'Free-fill program (2 cases × 3 SKUs × 2 DCs @ $15/case COGS)', value: '$180' },
              { label: 'MCB (Manufacturer Chargeback) initial promo ($1.50 × ~800 cases)', value: '$1,200' },
              { label: 'Data platform fees (RangeMe Pro annual)', value: '$1,200' },
              { label: 'SPINS syndication subscription (optional Y1, essential Y2)', value: '$4,800' },
              { label: 'Trade show / broker introduction costs', value: '$3,000–15,000' },
              { label: 'EDI setup (SPS Commerce or similar)', value: '$800 setup + $200/mo' },
              { label: 'Broker retainer if used ($1,500–5,000/month)', value: '$18,000–60,000/yr' },
              { label: 'Estimated Y1 total (broker-included)', value: '$30–90K' },
            ],
            note: 'That is before your product ships a single case profitably. This is why brands that enter distribution with only $50K of working capital either burn through it in 90 days or scale to unprofitable volume trying to recover slotting.',
          },
          { type: 'h3', text: 'What each cost line actually is' },
          {
            type: 'list',
            items: [
              '<strong>New-item slotting:</strong> One-time fee to place your SKU into the distributor system. KeHE $150–500 per SKU per DC. UNFI $200–750 per SKU per DC. Sometimes waived for high-conviction items with buyer sponsorship.',
              '<strong>Free-fill:</strong> Distributor requests 1–3 cases per DC per SKU free to seed the system and support demo/sampling programs. Treat as customer-acquisition cost, not lost inventory.',
              '<strong>MCB (Manufacturer Chargeback):</strong> The mechanism by which you offer promotional pricing. You publish a promotional price on a KeHE bulletin or UNFI E-Notes; the distributor bills you back for the discount on cases sold at that price. Standard $1.00–3.00 per case for run-rate promotions.',
              '<strong>Free-goods programs:</strong> Buy-one-get-one, extended terms, or free case with volume. Structured through the distributor promotional calendar.',
              '<strong>Data platform fees:</strong> RangeMe Pro ($1,200/yr) is required for KeHE new-item submissions. ECRM / SmartCommerce / PromoMash serve UNFI and independent buyers. SPINS syndication ($400+/month) provides sell-through data required for retail conversations at scale.',
              '<strong>EDI:</strong> SPS Commerce, TrueCommerce, or similar handles the 850 (PO), 855 (PO ack), 856 (ASN), and 810 (invoice) transactions that distributors expect. Manual processing works to ~$50K/mo of volume; beyond that, chargebacks for late ASN, incorrect ASN, or late invoice will exceed the subscription.',
              '<strong>Broker retainer:</strong> Optional but often decisive for new brands. Natural-channel brokers typically $1,500–5,000/month plus 3–5% commission. Covered in depth in our <a href="/guides/cpg-broker-selection-playbook">broker selection playbook</a>.',
            ],
          },
          {
            type: 'example',
            title: 'A 12-month P&L for a 3-SKU KeHE launch',
            body: [
              'Assume a mid-priced natural-category SKU at $4.99 SRP, $2.40 wholesale to KeHE, $1.05 COGS landed. 3 SKUs, 4 KeHE DCs, ramping from ~1,200 to ~4,000 cases per quarter across the year. Broker retainer at $2,500/month + 4% commission.',
            ],
            rows: [
              { label: 'Gross revenue (all cases × $2.40 wholesale)', value: '$26,400', tone: 'pos' },
              { label: 'COGS ($1.05 × cases)', value: '−$11,550', tone: 'neg' },
              { label: 'Slotting (3 SKUs × 4 DCs × $250)', value: '−$3,000', tone: 'neg' },
              { label: 'Free-fill (1 case × 3 SKUs × 4 DCs × $15)', value: '−$180', tone: 'neg' },
              { label: 'MCB promotional support (~$1.50 × 6,000 cases)', value: '−$9,000', tone: 'neg' },
              { label: 'Broker retainer + commission (12 mos + 4%)', value: '−$31,056', tone: 'neg' },
              { label: 'Data platforms (RangeMe + SPINS 6 mos)', value: '−$3,600', tone: 'neg' },
              { label: 'EDI (SPS setup + 12 mos service)', value: '−$3,200', tone: 'neg' },
              { label: 'Trade show / travel (Expo West + 2 KeHE shows)', value: '−$12,000', tone: 'neg' },
              { label: 'Contribution — first 12 months', value: '−$47,186', tone: 'neg' },
            ],
            result: '<strong>Year-one contribution is negative by design.</strong> The point of year one is establishing velocity data at ≥ 4 units per store per week and buyer confidence for expansion. Year two, with fixed costs mostly amortized and 2–3× volume, typically flips positive. Brands that pull the plug in month 8 have not seen the math yet; brands that let it run without measuring velocity discover in month 14 that they never had product-channel fit and torched the cash.',
          },
        ],
      },
      {
        id: 'new-item-form',
        heading: 'The new-item form: field by field',
        lead: 'The KeHE and UNFI new-item forms have 60+ required fields. A single blank field or incorrect value kicks the submission back to you and pushes you out of the current review cycle. Below are the fields where brands most often miss.',
        blocks: [
          {
            type: 'redFlags',
            items: [
              { title: 'UPC/GTIN validation', body: 'Both product-level and case-level UPCs required. GS1-verified. Any digit off and the submission is rejected. Test with a GS1 validator before submitting.' },
              { title: 'Case pack and pallet configuration', body: 'Distributor wants case dimensions (LxWxH inches), case weight, cases per layer, layers per pallet, pallet dimensions, pallet weight. Missing any single value pushes review out one cycle.' },
              { title: 'Ingredient / claims documentation', body: 'For natural/specialty categories: organic certificate, non-GMO Project verification, kosher/halal, gluten-free certification. Certificates must be current and match the batch specification on the packaging.' },
              { title: 'Nutrition Facts panel', body: 'Must match FDA current format. Old-format panels are auto-rejected. Values verified to two significant figures against a certified lab analysis if requested.' },
              { title: 'Shelf life and code-date format', body: 'Minimum remaining shelf life at ship (typically 75–80% of stated shelf life). Code-date format must match distributor system. Julian date, MFG date, EXP date — clarify which applies.' },
              { title: 'Wholesale price and MSRP', body: 'Distributor margin (typically 20–30% depending on category), retailer margin (typically 30–45%), and MSRP all disclosed. The distributor knows what the category math should look like — misaligned pricing gets flagged.' },
              { title: 'Story fields', body: 'Category story, brand story, differentiation. Not throwaway. Buyers read these during selection. Treat with the same care as your investor deck.' },
              { title: 'Free-fill and promotional calendar', body: 'Distributor wants to see your proposed launch promo, first-90-day support, and free-fill offer laid out on their form, not attached in a separate deck.' },
            ],
          },
        ],
      },
      {
        id: 'first-90-days',
        heading: 'The first 90 days after acceptance',
        lead: 'Acceptance is the starting line. The next 90 days determine whether your first cycle produces reorders or your product quietly gets DC-slotted-out.',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Week 1–2: Vendor packet return and setup', body: 'Complete vendor packet (banking, insurance, W-9, product data). Set up EDI trading partner relationship. Confirm ASN transmission with test PO.' },
              { title: 'Week 2–4: Production run and freight', body: 'Run first production. QC and code-date approval. Book freight to DCs. Confirm ASN filed within retailer window (typically 24-48 hours before delivery).' },
              { title: 'Week 4–6: First shipments arrive at DC', body: 'Distributor receives, checks, and confirms. Chargebacks issued for damaged cases, mislabeled pallets, late ASN, or wrong quantity. Track each chargeback and dispute promptly where warranted.' },
              { title: 'Week 6–8: Product in DC, available to retailers', body: 'Retailers begin ordering. Sell-through data starts flowing through SPINS (12-16 weeks to a clean data set). Your broker or in-house team should be pulling weekly DC reports and adjusting field support.' },
              { title: 'Week 8–12: Demo, sampling, and merchandising support', body: 'Distributor-approved demo programs, MCB-supported promotions, and in-store execution. If your sell-through in the first 12 weeks is above category norms, you earn a second review. If it is below, you are on notice.' },
            ],
          },
          {
            type: 'callout',
            tone: 'win',
            label: 'The velocity math that saves your slot.',
            body: [
              'Distributors measure new-item velocity as cases per store per week. Category norms vary — 0.5 for slow-moving specialty, 3-5 for velocity items. If your first 12 weeks are meaningfully below the category norm, your item is a candidate for DC deletion at the next review. Support the launch — demos, MCB, digital, retailer-specific field programs — early enough that velocity data reflects real consumer pull, not just distributor pipeline fill.',
            ],
          },
        ],
      },
      {
        id: 'edi-and-compliance',
        heading: 'EDI, ASN, and chargeback prevention',
        lead: 'Every distributor and every retailer they serve has a routing guide. Every violation of that routing guide costs money. Below is the operational discipline that keeps chargebacks under 2% of gross sales.',
        blocks: [
          { type: 'p', html: 'The transactions that matter for CPG distribution: EDI 850 (Purchase Order, distributor to you), EDI 855 (PO Acknowledgment, you to distributor), EDI 856 (Advance Ship Notice, you to distributor before shipment arrives), EDI 810 (Invoice, you to distributor). Each has a routing-guide-specified format. A single incorrect field triggers a chargeback of $50–500 per violation.' },
          {
            type: 'formula',
            heading: 'Chargeback cost formula',
            formula: 'Annual chargeback exposure = (SKUs × DCs × cycles/yr × violation rate × avg chargeback $)',
            notes: [
              'Example: 6 SKUs × 2 DCs × 12 cycles × 3% violation rate × $200 = <strong>$864/yr</strong> if you\'re disciplined.',
              'Example: same volume × 15% violation rate × $200 = <strong>$4,320/yr</strong> if your ops is loose.',
              'For brands doing $500K+ of distributor volume, the difference typically funds an EDI subscription (~$2,400/yr) many times over.',
            ],
          },
          { type: 'h3', text: 'The four most common chargebacks and how to prevent them' },
          {
            type: 'redFlags',
            items: [
              { title: 'Late ASN', body: 'ASN must transmit within specified window (usually 24-48 hours pre-delivery). If it lands after the truck arrives, the DC has to receive manually and you get charged. Prevention: automated ASN generation triggered by pack list, not by manual submission.' },
              { title: 'ASN mismatch', body: 'ASN quantity, weight, or SSCC label does not match physical receipt. Prevention: pack-verify at outbound, ASN filed against the verified pack list, not the PO.' },
              { title: 'Incorrect pallet labeling', body: 'GS1-128 SSCC label wrong size, wrong content, or missing. Prevention: label printer integrated with WMS and validated against distributor spec sheet. Not a manual process.' },
              { title: 'Not-in-window delivery', body: 'Delivery outside the appointed 2-hour window. Prevention: routing appointments booked 72+ hours in advance, freight carriers held accountable via 3PL SLA.' },
            ],
          },
          { type: 'p', html: 'Related depth on this: our <a href="/blog/kehe-compliance-requirements">KeHE compliance requirements</a> and <a href="/blog/sps-commerce-integration-checklist">SPS Commerce integration checklist</a> posts.' },
          {
            type: 'cta',
            label: 'Landed the "yes" and unsure what happens next?',
            body: 'A short call is usually enough to map the first 90 days — vendor packet, EDI, first PO, chargeback prevention. We do this every quarter.',
            href: '/how-we-work',
            linkText: 'See how Logic works →',
          },
        ],
      },
      {
        id: 'when-logic',
        heading: 'When Logic gets involved',
        blocks: [
          { type: 'p', html: 'Distributor onboarding engagements typically start when a brand has either just landed a "yes" from KeHE or UNFI and does not know what happens next, or when an existing distributor relationship is generating chargebacks the brand cannot explain.' },
          { type: 'p', html: 'What we run inside the engagement:' },
          {
            type: 'list',
            items: [
              'Vendor packet completion and validation before submission',
              'RangeMe / ECRM / PromoMash profile buildout and submission',
              'EDI trading partner setup coordination with SPS Commerce or equivalent',
              'First-order production planning back-scheduled from the confirmed DC delivery window',
              'Pallet, case, and label spec verification against distributor routing guides',
              'Chargeback tracking and dispute management',
              'First-90-day operational discipline: ASN filing rhythm, MCB submission, promotional calendar coordination',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'What is the difference between KeHE and UNFI?', a: 'Both are national wholesale distributors serving natural, specialty, and increasingly conventional grocery. KeHE runs ~6 DCs and ~35,000 retail locations, with a strong presence in specialty, gourmet, and independent natural. UNFI runs 30+ DCs and ~40,000 retail locations, is the primary distributor to Whole Foods (majority-supply agreement), and covers natural, organic, and conventional. Category-review timing differs (KeHE Jan/Jul, UNFI Feb/Aug). Most emerging CPG brands eventually list with both, but pitching them requires the right door: KeHE via RangeMe, UNFI via ECRM/PromoMash. New-item slotting fees run $150–500 per SKU per DC at KeHE, $200–750 per SKU per DC at UNFI, though negotiation and buyer sponsorship can move these numbers meaningfully.' },
      { q: 'How long does it take to get onboarded with KeHE or UNFI?', a: 'From "yes" from a buyer to first shipment: 8-14 weeks if your packaging, labeling, certifications, and vendor documents are ready. From cold pitch to first shipment: typically 6-9 months because you have to hit a category review window. The category review calendar controls everything — KeHE reviews in January and July, UNFI in February and August. Miss a window and your realistic first-shipment date pushes 6 months. Plan production, cash, and packaging changes against that rhythm rather than an aspirational timeline.' },
      { q: 'What are typical distributor slotting fees for a new CPG brand?', a: 'KeHE new-item slotting typically runs $150-500 per SKU per DC, with 6 DCs national. UNFI runs $200-750 per SKU per DC across 30+ DCs. Regional distributors are often lower and more negotiable. Slotting is sometimes waived for high-conviction items with strong buyer sponsorship, but plan on it as a real cost. Beyond slotting, budget for free-fill (1-3 cases per SKU per DC free), MCB promotional pricing ($1-3 per case for run-rate promotions), data platform fees (RangeMe Pro $1,200/yr, SPINS syndication $400+/mo), and EDI setup ($800 setup + $200/month for SPS Commerce or equivalent). A brand entering both KeHE and UNFI with 6 SKUs should budget $30-90K for the first year of distribution costs before broker fees.' },
      { q: 'What is the category review calendar for KeHE and UNFI?', a: 'KeHE runs its Selling Shows in January (spring/summer reset) and July (fall/holiday/winter reset), with selection decisions in the 4-6 weeks after each show. UNFI runs its Winter/Spring show in February (aligned with Whole Foods regional and global reviews) and its Fall show in August. Both align with Natural Products Expo West (Anaheim, March) and Expo East (September), which are not category reviews themselves but the largest single opportunities to meet distributor and retailer buyers face to face. Regional distributors (DPI, BiRite, Alpine, Palko, Nassau Candy) operate on rolling calendars and can move faster to a first PO, though usually at smaller commitment volumes.' },
      { q: 'Do I need a broker to sell into KeHE or UNFI?', a: 'Not required, but often decisive for emerging brands. Brokers provide buyer relationships, category expertise, retailer field support, and administrative coverage on promotional programs. Natural-channel brokers typically charge $1,500-5,000/month retainer plus 3-5% commission on shipments. The question is whether the broker earns their fee through incremental buyer meetings, faster onboarding, and better promotional execution. Brands under $2M in distributor sales often can direct-sell KeHE/UNFI with a focused in-house effort. Above that, broker economics usually work if the broker is a fit for your category. Covered in depth in our <a href="/guides/cpg-broker-selection-playbook">broker selection playbook</a>.' },
      { q: 'What is MCB (Manufacturer Chargeback) in distributor pricing?', a: 'MCB is the primary mechanism for running promotions through a distributor. You publish a promotional price on a KeHE bulletin, UNFI E-Note, or similar; the distributor bills you back the discount on cases sold at the promotional price. Typical MCB rates run $1-3 per case for run-rate promotions, higher for launch or reset promotions. MCB shows up as a deduction on your invoice — track it, verify against actual case-count reports from the distributor, and dispute discrepancies. Unreconciled MCB is a common source of margin leakage for growing brands.' },
      { q: 'What is EDI and do small brands really need it?', a: 'EDI (Electronic Data Interchange) is the messaging protocol distributors and retailers use to exchange purchase orders, acknowledgments, shipping notices, and invoices. The core transactions for CPG distribution are 850 (PO), 855 (PO ack), 856 (ASN — advance ship notice), and 810 (invoice). Manual processing works up to about $50K/month of distributor volume; beyond that, chargebacks for late ASN, incorrect ASN, or late invoice will exceed the SPS Commerce or TrueCommerce subscription (~$200-400/month). Setting up EDI takes 4-8 weeks and costs $500-1,500 one-time. Once live, it eliminates a large class of chargebacks and frees your team from manual PO processing.' },
      { q: 'What sell-through data do buyers expect from CPG brands?', a: 'Buyers in natural and specialty grocery expect SPINS or IRI/Nielsen syndicated data for meaningful category conversations. SPINS covers the natural channel best and starts around $400/month depending on scope. Before you have 12+ weeks of retail sell-through, category conversations are qualitative — brand story, differentiation, packaging. Once you have data, conversations become quantitative — velocity per store per week, dollar sales growth, share of segment, promotional lift. Reaching that data threshold is usually the second-most-important milestone after acceptance itself.' },
    ],
    keyTakeaways: [
      'Distributor onboarding runs 8–14 weeks from a "yes" to first shipment, but 6–9 months from cold pitch because of the category review calendar.',
      'Slotting is the tip of the cost iceberg. Free-fill, MCB, data platforms, EDI, and broker retainers add up to $30–90K in Y1 for a 6-SKU launch across two national distributors.',
      'The new-item form is the gatekeeper. UPCs, case pack, pallet config, certifications, code dates, and story fields all must match on submission.',
      'The first 90 days after acceptance decide whether the second review earns reorders or a slot deletion. Support the launch to prove velocity above category norms.',
      'EDI is non-negotiable above ~$50K/month of distributor volume. Chargeback exposure dwarfs the subscription cost.',
    ],
    related: [
      { href: '/guides/retail-readiness', title: 'The Retail Readiness Bible', description: 'The complete operational playbook for launching and scaling in retail.' },
      { href: '/guides/cpg-broker-selection-playbook', title: 'How to Select, Manage, and Fire a CPG Broker', description: 'Broker economics, scorecards, and clean transitions.' },
      { href: '/blog/kehe-compliance-requirements', title: 'KeHE Compliance Requirements', description: 'The routing-guide-level detail on shipping into KeHE without generating chargebacks.' },
    ],
    ctaHeading: <>Landed the distributor. <span className="o">Now what?</span></>,
    ctaCopy: 'Logic Agency runs distributor onboarding as a program: vendor packet, EDI setup, production planning, chargeback prevention, and first-90-day execution. So the "yes" turns into reorders, not a DC deletion notice.',
  },

  // =========================================================================
  // 3. CPG GROSS MARGIN PLAYBOOK (P0)
  // =========================================================================
  'cpg-gross-margin-playbook': {
    slug: 'cpg-gross-margin-playbook',
    stickyToc: true,
    ...authored,
    datePublished: '2026-09-17',
    dateModified: '2026-09-24',
    title: 'CPG Gross Margin Playbook: Where Margin Actually Leaks and How to Fix It',
    titleBefore: 'CPG Gross Margin Playbook:',
    titleAccent: 'Where Margin Leaks and How to Fix It',
    description: 'Channel-specific margin ranges, worked contribution math, the five places margin leaks, and the freight moves that recover 2–5 points in 60–90 days.',
    keywords: 'CPG gross margin, CPG unit economics, gross margin optimization, retail deductions, MCB chargebacks, CPG contribution margin, wholesale margin, DTC margin, Amazon FBA margin, landed cost CPG',
    ogImage: '/images/og-cpg-gross-margin-playbook.jpg',
    readTime: '17 min read',
    lede: 'Your P&L says your gross margin is 42 percent. Your investor asks why it should be 55 percent. Your CFO says 38 percent. Everyone is right — they are measuring different things. This guide gives you the framework to know exactly where margin is leaking, how much, and which fix ships the fastest recovery.',
    audience: 'Founders, CFOs, and heads of ops at CPG brands doing $2M–$50M in revenue who need to defend margin to investors, board, and buyers — and who need to know which operational fixes actually move the number.',
    tldr: [
      '<strong>Gross margin is channel-specific, not brand-specific.</strong> DTC 60–70%, Amazon FBA 25–45%, wholesale 15–35%, distributor 10–25%.',
      '<strong>Five places margin leaks: COGS drift, freight, deductions/chargebacks, promotional over-spend, spoilage.</strong> Each is measurable and each has a specific operational fix.',
      '<strong>Deductions eat 8–18% of wholesale gross</strong> at scale. Most brands do not disaggregate deductions from returns, chargebacks, and MCB — so they cannot fix any of it.',
      '<strong>Freight is the fastest recovery.</strong> DIM weight optimization, 3PL pricing rebids, and mode-shift (parcel to LTL) typically recover 2–5 margin points in 60–90 days.',
      '<strong>Contribution margin is what your investor cares about.</strong> Gross margin minus channel-variable costs (fulfillment, ad spend, deductions). Track it by channel, per SKU, per month.',
    ],
    sections: [
      {
        id: 'definitions',
        heading: 'Get the definitions right first',
        lead: 'The reason your CFO, your buyer, and your investor never agree on your margin is that they are each looking at a different line on the P&L. Fix the definitions and half the arguments disappear.',
        blocks: [
          {
            type: 'table',
            headers: ['Metric', 'Definition', 'When it matters'],
            rows: [
              ['<strong>Gross margin</strong>', 'Net revenue minus COGS (product + inbound freight)', 'Board reporting, investor pitch, category benchmarking'],
              ['<strong>Contribution margin</strong>', 'Gross margin minus channel-variable costs (outbound freight, fulfillment, ad spend, deductions, chargebacks)', 'Real profitability per channel; the number your CFO should live in'],
              ['<strong>Retail gross margin (from retailer perspective)</strong>', 'Retailer\'s markup: (Retail price – Cost) / Retail price', 'What the buyer sees; drives their willingness to run your product'],
              ['<strong>Landed cost</strong>', 'Manufacturer cost + freight + duty + tariffs + inbound logistics to your DC', 'True COGS input; often 15–40% higher than the supplier PO'],
              ['<strong>Net revenue (per channel)</strong>', 'Gross sales minus returns, allowances, MCB, chargebacks, slotting amortization', 'What actually hits the bank; often 8–25% below invoice revenue'],
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            label: 'The most common misstatement.',
            body: [
              'Founders quote gross margin from supplier COGS ("our product costs $6 to make and we sell it for $20, so we\'re 70% gross"). That number is fiction if it excludes inbound freight, duty, and the full landed cost, and if the $20 assumes MSRP rather than net wholesale realization. Investors and lenders back out the real number in due diligence. Better to know your real number and defend it.',
            ],
          },
        ],
      },
      {
        id: 'channel-ranges',
        heading: 'Gross margin ranges by channel',
        lead: 'Every channel has different economics because every channel has different variable costs and different net revenue realization.',
        blocks: [
          {
            type: 'table',
            headers: ['Channel', 'Typical net revenue % of MSRP', 'Typical gross margin range', 'Notes'],
            rows: [
              ['<strong>DTC (own site)</strong>', '95–100%', '60–70%', 'Discounts, chargebacks, fraud reserve dilute somewhat'],
              ['<strong>Amazon FBA</strong>', '55–75%', '25–45%', 'Referral 15%, FBA fees, storage, LTSF, PPC ad spend, promo credits'],
              ['<strong>Amazon 1P (Vendor Central)</strong>', '45–60%', '15–30%', 'Distributor-like margin, plus coop, chargebacks, MDF'],
              ['<strong>Wholesale to independent retail</strong>', '40–55% of MSRP', '25–40%', 'Case pack economics, freight terms, promo support'],
              ['<strong>Wholesale to national retail (Target/Walmart)</strong>', '35–50% of MSRP', '15–35%', 'Chargebacks (Walmart OTIF), slotting, coop, trade spend'],
              ['<strong>Distributor (KeHE/UNFI)</strong>', '30–42% of MSRP', '10–25%', 'Slotting, MCB, free-fill, promotional programs'],
              ['<strong>International distributor</strong>', '25–38% of MSRP', '8–20%', 'FOB pricing, region-specific promo, currency exposure'],
            ],
          },
          { type: 'p', html: 'The number that determines whether a channel is worth pursuing is not gross margin — it is contribution margin. A brand can have 45% Amazon FBA gross margin and lose money after PPC ad spend, or a 22% distributor gross margin that is highly profitable after chargebacks and freight scale down.' },
          {
            type: 'econ',
            columns: ['DTC ($40 MSRP)', 'Retail wholesale', 'KeHE distributor'],
            rows: [
              { label: 'Net revenue per unit', values: [{ text: '$38.00' }, { text: '$18.00' }, { text: '$13.50' }] },
              { label: 'Product COGS (landed)', values: [{ text: '$8.00' }, { text: '$9.50', tone: 'r' }, { text: '$9.50', tone: 'r' }] },
              { label: 'Outbound freight/fulfillment', values: [{ text: '$5.00' }, { text: '$2.50' }, { text: '$1.20' }] },
              { label: 'Deductions / chargebacks (blended)', values: [{ text: '$0.80' }, { text: '$1.75', tone: 'r' }, { text: '$0.90', tone: 'r' }] },
              { label: 'Ad spend / promo attribution', values: [{ text: '$4.50', tone: 'r' }, { text: '$0.80' }, { text: '$0.60' }] },
              { label: 'Gross margin', values: [{ text: '$30.00 (79%)', tone: 'g' }, { text: '$8.50 (47%)', tone: 'g' }, { text: '$4.00 (30%)', tone: 'g' }] },
              { label: 'Contribution margin', values: [{ text: '$19.70 (52%)', tone: 'g' }, { text: '$3.45 (19%)', tone: 'g' }, { text: '$1.30 (10%)', tone: 'g' }] },
            ],
          },
          {
            type: 'callout',
            tone: 'real',
            label: 'The channel-mix trap.',
            body: [
              'A brand with a 60/40 DTC/wholesale mix has different economics from the same brand at 20/80. Founders who quote a blended gross margin from Y1 and then scale wholesale often see gross margin collapse in Y2, not because anything got worse but because the channel mix shifted. Track gross margin and contribution margin per channel, not blended.',
            ],
          },
          { type: 'h3', text: 'Try it: run the wholesale waterfall on your own assumptions' },
          { type: 'p', html: 'This interactive waterfall shows how a $9.60 wholesale invoice becomes real contribution. Toggle each chip on or off to see which costs your P&L already carries — and which ones you may have forgotten to include.' },
          {
            type: 'chips',
            heading: 'Wholesale invoice → contribution margin (per case, 12ct)',
            startingLabel: 'Gross invoice (12ct × $0.80 wholesale)',
            startingRevenue: 9.60,
            outputLabel: 'Contribution margin per case',
            lines: [
              { chip: 'cogs', label: 'Landed COGS (product + primary + secondary + freight in)', delta: -4.20 },
              { chip: 'slot', label: 'Amortized slotting (1st year across expected volume)', delta: -0.35 },
              { chip: 'mcb', label: 'MCB / promotional support', delta: -1.20 },
              { chip: 'chargebacks', label: 'Retailer chargebacks (OTIF, routing, ASN)', delta: -0.55 },
              { chip: 'freight', label: 'Freight out to DC (LTL amortized per case)', delta: -0.45 },
              { chip: 'broker', label: 'Broker commission (4% of wholesale)', delta: -0.38 },
              { chip: 'spoilage', label: 'Spoilage / damage reserve', delta: -0.18 },
            ],
            chips: [
              { key: 'cogs', label: 'Landed COGS' },
              { key: 'slot', label: 'Slotting' },
              { key: 'mcb', label: 'MCB / promo' },
              { key: 'chargebacks', label: 'Chargebacks' },
              { key: 'freight', label: 'Freight' },
              { key: 'broker', label: 'Broker' },
              { key: 'spoilage', label: 'Spoilage' },
            ],
            note: 'Most brands quote wholesale gross margin using only the first chip (COGS). The other chips are why the CFO version of the same P&L is 15–35 points lower than what the sales deck advertises.',
          },
        ],
      },
      {
        id: 'five-leaks',
        heading: 'The five places margin leaks — and what to do',
        lead: 'When margin drops, it drops in specific places. Below are the five common leak points, ranked by how frequently we find them and how fast the fix ships.',
        blocks: [
          { type: 'p', html: 'Each card below opens to reveal the symptom, root cause, and the fix that ships fastest. Skim the titles first; open the ones you recognize.' },
          {
            type: 'revealCards',
            items: [
              { tag: 'Leak 01', title: 'COGS drift', preview: 'Symptoms + fix', body: '<p><strong>Symptom:</strong> Landed cost per unit creeps up 3–8% between production runs. Nobody notices because supplier POs are approved individually.</p><p><strong>Root cause:</strong> Material surcharges (resin, paper, aluminum), MOQ changes, freight rate increases, tooling amortization on shorter runs.</p><p><strong>Fix:</strong> Monthly landed-cost roll-forward with variance to prior 3 runs and to standard cost. Any variance &gt;2% requires supplier explanation and PO note.</p>' },
              { tag: 'Leak 02', title: 'Freight (inbound + outbound)', preview: 'Symptoms + fix', body: '<p><strong>Symptom:</strong> Freight as % of revenue rising quarter over quarter.</p><p><strong>Root cause:</strong> DIM weight on parcel, sub-optimized pallet configuration, dead miles on LTL, mode-selection defaults, no 3PL rate rebid in 18+ months.</p><p><strong>Fix:</strong> DIM optimization first (usually 8–20% parcel savings), then 3PL rate rebid (usually 5–15%), then mode-shift analysis by lane.</p>' },
              { tag: 'Leak 03', title: 'Deductions and chargebacks', preview: 'Symptoms + fix', body: '<p><strong>Symptom:</strong> Net wholesale revenue 12–20% below invoice revenue, without a clear breakdown of why.</p><p><strong>Root cause:</strong> Retailer OTIF chargebacks (Walmart, Target, Kroger), routing-guide violations, ASN failures, damages, shortages.</p><p><strong>Fix:</strong> Disaggregate deductions monthly. Each retailer, each type. Track top 3 offenders and fix the operational root cause — usually 3PL / EDI / packaging.</p>' },
              { tag: 'Leak 04', title: 'Promotional over-spend', preview: 'Symptoms + fix', body: '<p><strong>Symptom:</strong> Trade spend as % of gross exceeds 12–18% and does not correspond to visible velocity lift.</p><p><strong>Root cause:</strong> Un-tracked MCB, uncoordinated promo calendars across retailers, coop and MDF paid without proof of performance, ad spend on brand terms cannibalizing organic.</p><p><strong>Fix:</strong> Trade-spend calendar with pre-committed budget per account. Promo ROI review 60 days after every promotion. Kill or renegotiate promos that fail to lift velocity 20%+.</p>' },
              { tag: 'Leak 05', title: 'Spoilage, damage, returns', preview: 'Symptoms + fix', body: '<p><strong>Symptom:</strong> Adjustments and returns line on P&amp;L exceeds 3–5% of gross.</p><p><strong>Root cause:</strong> Case pack under-durable, palletization sub-optimal, code-date shortening at DC, quality escapes at factory.</p><p><strong>Fix:</strong> Damage rate audit by SKU, by lane, by retailer. Case-pack redesign is the most common structural fix.</p>' },
            ],
          },
        ],
      },
      {
        id: 'landed-cost',
        heading: 'The landed cost breakdown',
        lead: 'Half of "COGS drift" is not drift — it is that the initial COGS was never actually landed. Below is what should be in your true landed cost per unit.',
        blocks: [
          {
            type: 'math',
            heading: 'Landed cost stack — worked example: 4oz cosmetic serum from overseas supplier',
            rows: [
              { label: 'Manufacturer FOB per unit', value: '$3.20' },
              { label: 'Ocean freight allocation', value: '+$0.42' },
              { label: 'Duty (5.3%)', value: '+$0.17' },
              { label: 'Import broker + customs clearance', value: '+$0.08' },
              { label: 'Drayage + inbound trucking to 3PL', value: '+$0.11' },
              { label: '3PL receiving + putaway', value: '+$0.06' },
              { label: 'Tooling amortization (annual / units)', value: '+$0.15' },
              { label: 'QC / inspection (3rd party)', value: '+$0.05' },
              { label: 'True landed cost per unit', value: '$4.24' },
            ],
            note: 'A brand tracking only the FOB $3.20 thinks its product margin is 27% higher than it actually is. Multiply by 200,000 units/year and the misstatement is $208,000 in overstated gross margin.',
          },
          { type: 'p', html: 'Related depth: our <a href="/guides/landed-cost-playbook">Landed Cost Playbook</a> walks through the six-line cost stack in detail, including the July 2026 USPS DIM weight changes.' },
        ],
      },
      {
        id: 'deductions',
        heading: 'Deductions: the single biggest silent leak',
        lead: 'For brands doing meaningful wholesale volume, the difference between invoice revenue and net revenue is 8-18% — and most of that is deductions. Most brands do not disaggregate deductions from returns, chargebacks, and promotional allowances, so they cannot fix any of it.',
        blocks: [
          {
            type: 'table',
            headers: ['Deduction type', 'Typical range % of gross wholesale', 'Root cause', 'Fix owner'],
            rows: [
              ['MCB (Manufacturer Chargeback — promotional)', '3–8%', 'Published promotional pricing; expected cost', 'Sales / marketing (already budgeted)'],
              ['Routing-guide chargebacks (late ASN, wrong pallet label, wrong window)', '0.3–3%', '3PL / EDI operational failures', 'Ops / 3PL manager'],
              ['OTIF chargebacks (Walmart, Target)', '0.5–5%', 'Late delivery, short shipment, missed fill', 'Ops / production planning'],
              ['Damages and shortages', '0.5–2%', 'Packaging, palletization, freight handling', 'Packaging engineering / 3PL'],
              ['Slotting amortization', '1–3%', 'Y1 slotting spread across expected life', 'Finance (bookkeeping)'],
              ['Coop / MDF', '1–4%', 'Retailer marketing programs', 'Marketing (accountability required)'],
              ['Free-fill and demo', '0.5–2%', 'Launch and reset support', 'Sales'],
              ['Post-audit / historical deductions', '0.2–1.5%', 'Retailer back-billing 6-18 months later', 'Finance (dispute the invalid ones)'],
            ],
          },
          {
            type: 'wired',
            tag: 'Operator move',
            heading: 'The deduction disaggregation exercise',
            body: [
              'Pull the last 12 months of retailer/distributor remittance detail. For each deduction, code it into the 8 categories above. Sum by category. Percent of gross wholesale by category.',
              'The output is a leak-detection map. Every category above 2% of gross wholesale is a candidate for operational intervention. Every category below 0.5% is fine as-is.',
              'Most brands run this exercise once and are shocked. They then run it monthly for a year, cut deductions 4-8 percentage points of gross, and stop.',
            ],
          },
        ],
      },
      {
        id: 'freight-fix',
        heading: 'Freight: the fastest 2–5 margin points',
        lead: 'Freight is the leak point with the shortest recovery timeline. DIM weight optimization, 3PL pricing rebids, and mode-shift analysis can produce 2–5 margin points in 60–90 days without changing product, packaging quality, or brand perception.',
        blocks: [
          { type: 'h3', text: 'DIM weight optimization' },
          { type: 'p', html: 'Parcel carriers price the larger of actual weight and dimensional weight. DIM = (L × W × H) / DIM divisor. UPS/FedEx US ground is currently divisor 139 (166 for international). USPS is on a different structure that changed July 2026 — see our <a href="/guides/landed-cost-playbook">Landed Cost Playbook</a>.' },
          { type: 'p', html: 'The two most common wins: (1) box-size optimization — most brands ship in 3–5 standard box sizes when 8–12 would fit product more tightly, reducing DIM weight 10–25%; (2) void-fill reduction — replacing air pillows and paper fill with die-cut inserts or right-sized boxes reduces DIM without hurting damage rate.' },
          { type: 'h3', text: '3PL rate rebid' },
          { type: 'p', html: 'If your 3PL contract is 18+ months old, rebid. Rates rise on contract renewals and never come back down without pressure. A rebid every 18–24 months typically recovers 5–15% on pick-pack and 3–8% on storage. The rebid is a negotiation lever even if you stay with the incumbent.' },
          { type: 'h3', text: 'Mode-shift analysis' },
          { type: 'p', html: 'Parcel-to-LTL breakeven is typically 8–12 boxes going to the same destination. Brands that palletize at 3–5 boxes overpay parcel; brands that ship LTL at 3 boxes overpay storage and dwell. Run a lane-by-lane mode analysis quarterly.' },
        ],
      },
      {
        id: 'reporting',
        heading: 'What to actually put on the CFO dashboard',
        lead: 'A margin dashboard that does not lead to operational action is a wallpaper exercise. The dashboard below is what we build for clients whose CFO or founder wants to actually manage margin, not just report it.',
        blocks: [
          {
            type: 'checklist',
            items: [
              { title: 'Gross margin by channel, monthly', body: 'DTC, Amazon FBA, Amazon 1P, wholesale-national, wholesale-independent, distributor, international. Not blended.' },
              { title: 'Contribution margin by channel, monthly', body: 'Gross margin minus fulfillment, ad spend, deductions. This is the number that determines channel-mix decisions.' },
              { title: 'Landed cost per unit, top 10 SKUs, monthly', body: 'Roll-forward with variance to prior run and to standard cost. Any variance >2% requires supplier note.' },
              { title: 'Deductions by category, monthly', body: 'The 8 categories from the deduction table. Rolling 3-month trend. Anything trending up is a candidate for intervention.' },
              { title: 'Freight % of revenue, weekly', body: 'Split inbound and outbound. Track by carrier, by lane if possible. Weekly cadence catches drift before it becomes a quarter problem.' },
              { title: 'Trade spend as % of gross wholesale, monthly', body: 'Budgeted vs actual. Promo-by-promo ROI 60 days after event. Kill promos that fail to lift velocity 20%+.' },
            ],
          },
          {
            type: 'cta',
            label: 'This is what accountable margin operations looks like.',
            body: 'Landed cost roll-forwards, deduction disaggregation, freight audits, and monthly variance reviews — done for you, so your CFO stops asking your ops lead for spreadsheets.',
            href: '/how-we-work',
            linkText: 'See how Logic works →',
          },
        ],
      },
      {
        id: 'when-logic',
        heading: 'When Logic gets involved',
        blocks: [
          { type: 'p', html: 'Margin recovery engagements usually start when a brand sees investor scrutiny of gross margin, faces a covenant test, prepares for a fundraise, or lands the CFO who realizes the previous numbers were more aspirational than actual.' },
          { type: 'p', html: 'What we do inside a 90-day margin recovery engagement:' },
          {
            type: 'list',
            items: [
              'Full landed-cost roll-forward on top 10 SKUs, with variance to prior runs and to standard cost',
              'Deduction disaggregation and root-cause coding across last 12 months of remittance detail',
              'Freight audit: DIM optimization, 3PL rate rebid, mode-shift analysis by lane',
              'Trade-spend calendar rebuild with pre-committed budgets and 60-day ROI reviews',
              'Damage-rate audit by SKU, lane, retailer; case-pack redesign where warranted',
              'Contribution-margin dashboard by channel, wired to weekly and monthly cadences',
              'A prioritized fix list ranked by margin recovery per week of effort',
            ],
          },
          {
            type: 'caseStudy',
            tag: 'From the ops floor',
            heading: '15% cost savings while maintaining luxury feel',
            body: [
              'On the Epicutis engagement, we ran the full margin recovery loop across packaging, supplier, and inventory management. Result: 15% cost savings without downgrading the luxury feel of the packaging — and a 90-day inventory plan that shortened order-to-cash time.',
              'The recovery came from three places: PCR conversion on the primary container without color drift, freight mode-shift on inbound, and supplier consolidation that eliminated fragmented shipping costs.',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'What is a typical CPG gross margin range?', a: 'Gross margin depends on channel. Direct-to-consumer typically runs 60-70%, Amazon FBA 25-45%, wholesale to independent retail 25-40%, wholesale to national retail (Target/Walmart) 15-35%, national distributors (KeHE/UNFI) 10-25%, and international distributors 8-20%. Blended gross margin for a scaling CPG brand at $10M revenue with a mix of channels typically lands between 35% and 55%. The single most important number is contribution margin per channel — gross margin minus channel-specific variable costs (fulfillment, ad spend, deductions, chargebacks) — because that determines whether a channel is actually profitable to scale.' },
      { q: 'How do I calculate true landed cost for CPG?', a: 'Landed cost is manufacturer cost (FOB or ex-works) plus ocean/air freight allocation per unit, plus duty (rate depends on HTS classification), plus customs broker and clearance fees, plus drayage and inbound trucking to your 3PL, plus 3PL receiving and putaway, plus tooling amortization spread over expected annual units, plus any quality control or inspection costs. For a typical overseas-sourced CPG product, landed cost runs 15-40% above the supplier PO price. Brands that quote gross margin from supplier PO price are typically overstating margin by 5-10 percentage points.' },
      { q: 'What are retail deductions and why do they matter?', a: 'Deductions are amounts retailers or distributors subtract from your invoices before paying — for things like promotional pricing (MCB), routing-guide violations, OTIF penalties, damages and shortages, slotting amortization, coop and MDF programs, free-fill, and historical post-audit adjustments. For a scaling wholesale brand, deductions typically consume 8-18% of gross wholesale revenue. Most brands never disaggregate deductions by category, so they cannot see which retailer, which operational failure, or which promotional program is actually the leak. The disaggregation exercise — coding 12 months of remittance detail into categories — is the first step in any margin recovery.' },
      { q: 'How much can DIM weight optimization save on parcel freight?', a: 'DIM weight optimization typically recovers 8-20% of parcel freight spend for CPG brands. The mechanism: parcel carriers price the larger of actual weight and dimensional weight (L × W × H / divisor). Most brands ship in 3-5 standard box sizes when 8-12 would fit product more tightly. Right-sizing boxes and replacing void fill (air pillows, paper) with die-cut inserts or tighter packouts reduces DIM weight without increasing damage rate. On a brand doing $1M/year in parcel freight, that is $80K-200K/year recovered. The engagement to implement typically runs 60-90 days.' },
      { q: 'What is contribution margin and how is it different from gross margin?', a: 'Gross margin is net revenue minus COGS (product plus inbound freight). Contribution margin is gross margin minus channel-variable costs: outbound freight, fulfillment, ad spend, promotional deductions, chargebacks. Contribution margin is the number that determines whether a channel is actually profitable to scale. A brand can have 45% Amazon FBA gross margin and negative contribution margin after PPC ad spend; a brand can have 22% distributor gross margin and healthy contribution margin because chargebacks are low and freight scales down. Investors and lenders increasingly look at contribution margin by channel rather than blended gross, because it tells them where growth is actually creating value.' },
      { q: 'What is MCB and how do I manage it?', a: 'MCB (Manufacturer Chargeback) is the mechanism for running promotions through a distributor. You publish a promotional price on a KeHE bulletin or UNFI E-Note; the distributor bills you back the discount on cases sold at the promotional price. Typical MCB runs $1-3 per case for run-rate promotions. Managing MCB well requires: (1) a trade-spend calendar with pre-committed budget per account, (2) verification of MCB against actual case-count reports from the distributor before accepting the deduction, (3) 60-day post-promo ROI review, and (4) killing or renegotiating promotions that fail to lift velocity 20%+. Unreconciled and unchallenged MCB is one of the most common margin leaks for growing wholesale brands.' },
      { q: 'When should I rebid my 3PL contract?', a: 'Every 18-24 months. Rates rise on contract renewals and never come back down without pressure. A rebid typically recovers 5-15% on pick-pack fees and 3-8% on storage, even when you stay with the incumbent. The rebid process itself takes 8-12 weeks: pull 6 months of activity data (orders, units, storage, receipts), issue an RFP to 3-5 3PLs, evaluate on pricing, service, tech integration, and geography, and negotiate. Even brands that stay with the incumbent gain leverage on the renewal terms.' },
      { q: 'What does "OTIF chargeback" mean and how do I prevent it?', a: 'OTIF (On-Time In-Full) is the retailer measurement of whether your shipments arrive at the appointed window with the full quantity ordered. Walmart, Target, Kroger, and others charge back a percentage of the shipment value for OTIF failures — typically 3% of the shipment for late, plus 3% for short. Prevention requires: (1) production and inventory planning that keeps safety stock at retailer-specific coverage levels, (2) automated ASN generation triggered by pack list, filed within the required window, (3) 3PL SLAs that make the 3PL responsible for on-window carrier pickup, and (4) monthly OTIF scorecard review with root-cause coding for every failure. Brands that hit sustained OTIF above 95% typically pay less than 0.5% of gross in OTIF chargebacks; brands running 85-90% OTIF often pay 3-5%.' },
    ],
    keyTakeaways: [
      'Gross margin is channel-specific. Track and report by channel, not blended.',
      'Landed cost is COGS plus inbound freight, duty, drayage, tooling amortization, and QC. It is usually 15–40% above the supplier PO.',
      'Deductions eat 8–18% of gross wholesale. Disaggregate them monthly by category to know where the leak actually is.',
      'Freight is the fastest 2–5 margin points. DIM optimization, 3PL rebid, and mode-shift analysis in 60–90 days.',
      'Contribution margin per channel is the number that determines whether growth is creating value or destroying it.',
    ],
    related: [
      { href: '/guides/landed-cost-playbook', title: 'Landed Cost Playbook', description: 'The 6-line cost stack between supplier quote and P&L.' },
      { href: '/guides/cpg-working-capital-playbook', title: 'CPG Working Capital Playbook', description: 'Loss problem or timing problem? The 90–180 day cash conversion cycle math.' },
      { href: '/guides/cpg-channel-economics', title: 'Amazon vs DTC vs Retail Channel Economics', description: 'How channel choice reshapes the P&L operationally.' },
    ],
    ctaHeading: <>Margin recovery, <span className="o">measured in weeks not quarters.</span></>,
    ctaCopy: 'Logic Agency runs margin recovery as an operating workstream: landed cost roll-forward, deduction disaggregation, freight audit, trade-spend rebuild, and a contribution-margin dashboard. So the number on your CFO\'s deck matches the number in the bank.',
  },
  // =========================================================================
  // 4. CO-MANUFACTURER SELECTION (P0)
  // =========================================================================
  'co-manufacturer-selection': {
    slug: 'co-manufacturer-selection',
    stickyToc: true,
    ...authored,
    datePublished: '2026-09-18',
    dateModified: '2026-09-24',
    title: 'How to Find, Vet, and Scale With the Right Co-Manufacturer',
    titleBefore: 'How to Find, Vet, and Scale With the',
    titleAccent: 'Right Co-Manufacturer',
    description: 'MOQ ranges by category, the 10-dimension co-man scorecard, worked total-cost math on three quotes, red-flag matrix, and the operating rhythm that scales the relationship.',
    keywords: 'how to find a co-manufacturer, co-packer selection, CPG co-manufacturer, co-manufacturer vetting checklist, contract manufacturer food beverage, co-packer minimums, co-manufacturer scorecard, CPG production scale-up',
    ogImage: '/images/og-co-manufacturer-selection.jpg',
    readTime: '18 min read',
    lede: 'The wrong co-manufacturer creates problems that look like demand problems, inventory problems, or cash problems. Usually, they started with a rushed selection. This guide gives you the scorecard, the questions, the MOQ math, and the operating rhythm that separates a co-manufacturing relationship you can scale on from one you have to survive.',
    audience: 'Founders, ops leads, and packaging leads at CPG brands preparing to select a first co-manufacturer or transition off an existing one that is capping growth.',
    tldr: [
      '<strong>Co-manufacturer selection is category-specific.</strong> Beverage, formulated skincare, supplements, and snack foods each have different qualification requirements and different MOQ realities.',
      '<strong>MOQ ranges: beverage 5–20K units per SKU, formulated skincare 3–15K units, supplements 5–25K bottles, packaged snacks 10–50K units.</strong> Below MOQ, expect setup fees.',
      '<strong>Evaluate 3–5 candidates against the same brief.</strong> Anything less and the comparison is anecdotal; more and you burn time.',
      '<strong>Total cost is not conversion cost.</strong> Setup, tooling, testing, freight, scrap, MOQ carrying cost, and payment terms usually move the winner by 10–25%.',
      '<strong>The operating rhythm matters more than the quote.</strong> A co-man 5% cheaper who misses launch dates costs more than one 5% more expensive who ships on plan.',
    ],
    sections: [
      {
        id: 'definitions',
        heading: 'Co-manufacturer, co-packer, or contract manufacturer?',
        lead: 'The terms overlap in casual conversation and diverge in contracts. Get the vocabulary right before the RFQ.',
        blocks: [
          {
            type: 'table',
            headers: ['Term', 'Typical scope', 'When you want this'],
            rows: [
              ['<strong>Co-packer</strong>', 'Packages and labels product to your specification, often from bulk you supply or they source separately', 'You control formula/product; you need packaging execution'],
              ['<strong>Co-manufacturer</strong>', 'Manufactures product to your specification or a joint spec; may include formulation support, procurement, packaging', 'You need production capability, not just packing'],
              ['<strong>Contract manufacturer</strong>', 'Full-service manufacturing, often including formulation, sourcing, regulatory support', 'You are a brand more than a formulator; you need a partner that owns the make'],
              ['<strong>Private-label manufacturer</strong>', 'Manufactures existing formulations under your brand', 'Speed to market with commoditized formats; less differentiation'],
              ['<strong>Turnkey manufacturer</strong>', 'Includes procurement, production, packaging, warehousing, fulfillment as a bundled service', 'Small brand, limited ops team, willing to trade margin for simplicity'],
            ],
          },
          { type: 'p', html: 'The right term in your contract determines who owns formulation IP, who bears raw material price risk, who owns tooling, and who is responsible for regulatory. Define the scope before you sign.' },
        ],
      },
      {
        id: 'moq-reality',
        heading: 'MOQ realities by category',
        lead: 'Every founder hears an MOQ number and negotiates it. Some MOQs are real (line changeover cost, minimum batch chemistry, packaging supplier constraints). Some are strategic (the co-man does not want your business at low volume). Below are honest ranges.',
        blocks: [
          {
            type: 'table',
            headers: ['Category', 'Typical MOQ per SKU', 'Setup fee ranges', 'Typical lead time'],
            rows: [
              ['Beverage (bottling)', '5,000–20,000 units', '$500–5,000', '6–10 weeks first run'],
              ['Beverage (canning, mobile canner)', '1,500–5,000 units', 'Included in per-unit rate', '4–6 weeks'],
              ['Formulated skincare / cosmetics', '3,000–15,000 units', '$1,000–8,000 (batch fee)', '8–14 weeks (formulation review + stability if new)'],
              ['Color cosmetics (pressed powder, lipstick)', '5,000–25,000 units', '$3,000–15,000 (tooling)', '10–16 weeks'],
              ['Supplements — capsules', '5,000–25,000 bottles', '$500–3,000', '6–10 weeks'],
              ['Supplements — gummies / functional', '10,000–50,000 units', '$2,000–10,000', '10–14 weeks'],
              ['Packaged snacks (bars, chips, cookies)', '10,000–50,000 units', '$1,500–8,000', '6–10 weeks'],
              ['Frozen / refrigerated food', '5,000–20,000 units', '$2,000–10,000', '8–12 weeks'],
              ['Fragrance / candles', '1,000–5,000 units', '$500–3,000', '6–10 weeks'],
              ['Consumer hardware assembly', 'Highly variable', '$5,000–50,000 tooling', '10–20 weeks first run'],
            ],
          },
          {
            type: 'callout',
            tone: 'real',
            label: 'The MOQ carrying cost most brands miss.',
            body: [
              'A 10,000-unit MOQ at $6 landed is $60K of cash tied up before a single unit sells through. If your sell-through velocity is 800 units/month, that is 12+ months of inventory sitting — plus warehousing, plus code-date pressure. Below-MOQ runs cost more per unit but often less in total cash committed. Model both scenarios before defaulting to "hit the MOQ to get the lower per-unit price."',
            ],
          },
        ],
      },
      {
        id: 'scorecard',
        heading: 'The co-manufacturer scorecard',
        lead: 'Score every candidate on the same 10 dimensions. Weight them for your situation. Total the scores. The number is not a decision, but the pattern of scores usually is.',
        blocks: [
          {
            type: 'diagram',
            caption: 'Weighted scoring across 10 dimensions. Total out of 100.',
            svg: `<svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Co-manufacturer scorecard weighting across 10 dimensions" style="width:100%;height:auto;display:block">
              <text x="40" y="30" fill="#FF600A" font-family="Arial,sans-serif" font-size="12" font-weight="800" letter-spacing="2">CO-MANUFACTURER SCORECARD — WEIGHT DISTRIBUTION</text>
              <text x="40" y="50" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="14">The 10 dimensions and how much each one should count</text>
              ${(() => {
                const dims = [
                  ['Capacity fit', 15],
                  ['Quality systems', 15],
                  ['Category experience', 12],
                  ['Communication under pressure', 10],
                  ['Reference checks', 10],
                  ['Commercial terms', 10],
                  ['Regulatory / certification', 10],
                  ['Financial stability', 8],
                  ['Fit with growth', 5],
                  ['Geographic / freight', 5],
                ];
                const maxW = 15;
                return dims.map(([n, w], i) => {
                  const y = 90 + i * 22;
                  const barW = (w / maxW) * 340;
                  return `
                    <text x="255" y="${y+4}" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="end">${n}</text>
                    <rect x="270" y="${y-6}" width="${barW}" height="12" rx="2" fill="#FF600A"/>
                    <text x="${270+barW+8}" y="${y+4}" fill="rgba(255,255,255,0.75)" font-family="Arial,sans-serif" font-size="11" font-weight="700">${w}</text>
                  `;
                }).join('');
              })()}
              <text x="40" y="320" fill="rgba(255,255,255,0.5)" font-family="Arial,sans-serif" font-size="11">Capacity + quality systems together = 30 pts. If either is weak, walk. Total possible: 100</text>
            </svg>`,
          },
          { type: 'h3', text: 'What to actually look for on each dimension' },
          { type: 'p', html: 'The table below is the quick reference. Open each card to see what a solid answer looks like — and what the polite-but-empty version usually sounds like.' },
          {
            type: 'revealCards',
            items: [
              { tag: 'Weight: 15', title: 'Capacity fit', preview: 'What good looks like', body: '<p><strong>Look for:</strong> current utilization, ability to double your volume within 6 months, allocated line time by contract or handshake.</p><p><strong>Solid answer:</strong> "We\'re at 68% utilization on the line that runs your format. We can commit to 40% of that line for the next 12 months. Beyond that, we run a capacity forecast every quarter and rebook."</p><p><strong>Empty answer:</strong> "We\'ll make it work" or "We always find capacity for our partners." No numbers. No commitment.</p>' },
              { tag: 'Weight: 15', title: 'Quality systems', preview: 'What good looks like', body: '<p><strong>Look for:</strong> documented change control, batch records, QC release, deviation handling, third-party audit history (SQF, BRCGS, GMP).</p><p><strong>Solid answer:</strong> shares a redacted deviation log and walks you through how a real issue in the last 12 months got investigated, corrected, and closed.</p><p><strong>Empty answer:</strong> waves a certificate and says "we\'re SQF Level 2." Certification is the floor, not the story.</p>' },
              { tag: 'Weight: 12', title: 'Category experience', preview: 'What good looks like', body: '<p><strong>Look for:</strong> has run your specific format (bottle size, closure, formula chemistry, allergen protocols) for at least 2 years.</p><p><strong>Solid answer:</strong> names three current clients in your format, describes a specific formulation challenge each one presented, and how it was resolved.</p><p><strong>Empty answer:</strong> "We do a lot of that category" without a single named example.</p>' },
              { tag: 'Weight: 10', title: 'Communication under pressure', preview: 'What good looks like', body: '<p><strong>Look for:</strong> response time on tough questions, willingness to acknowledge constraints, quality of technical explanation.</p><p><strong>Solid answer:</strong> answers "when have you disappointed a customer?" with a specific story and what changed after.</p><p><strong>Empty answer:</strong> deflects to a general statement about "communication being a core value."</p>' },
              { tag: 'Weight: 10', title: 'Reference checks', preview: 'What good looks like', body: '<p><strong>Look for:</strong> two-year customer reference willing to describe a real problem and how it was handled.</p><p><strong>Solid answer:</strong> the co-man offers three references without prompting, including one where the relationship ended.</p><p><strong>Empty answer:</strong> handful of logos on the website with no live contacts. Then, once pushed, one carefully selected reference who will only speak in generalities.</p>' },
              { tag: 'Weight: 10', title: 'Commercial terms', preview: 'What good looks like', body: '<p><strong>Look for:</strong> MOQ realism, setup fees, tooling ownership, payment terms (Net 30 vs 50% deposit), price validity period.</p><p><strong>Solid answer:</strong> written quote naming the assumption behind each line item, and a price validity of at least 60–90 days.</p><p><strong>Empty answer:</strong> a total number without a breakdown, and a request for 50% deposit with vague reference to "our standard terms."</p>' },
              { tag: 'Weight: 10', title: 'Regulatory / certification', preview: 'What good looks like', body: '<p><strong>Look for:</strong> current cert list matching your needs (organic, non-GMO, kosher, halal, gluten-free, FDA registration, cGMP). Expiration dates in the future.</p><p><strong>Solid answer:</strong> shares actual certificate PDFs and offers to add your product to the scope in a documented change-control step.</p><p><strong>Empty answer:</strong> "We can get whatever cert you need" without owning the timeline or the cost.</p>' },
              { tag: 'Weight: 8', title: 'Financial stability', preview: 'What good looks like', body: '<p><strong>Look for:</strong> years in operation, ownership structure, ability to demonstrate solvency, credit references from suppliers.</p><p><strong>Solid answer:</strong> offers Dun & Bradstreet or bank references, or explains ownership and reinvestment plainly.</p><p><strong>Empty answer:</strong> deflects the question. Small co-mans fold. It happens. You want to know the risk before your PO becomes their emergency cash-flow event.</p>' },
              { tag: 'Weight: 5', title: 'Fit with growth', preview: 'What good looks like', body: '<p><strong>Look for:</strong> a specific plan for what happens when your volume doubles — not a shrug.</p><p><strong>Solid answer:</strong> "At your next volume tier we\'d move you from a shared line to a dedicated 3-shift schedule. Here\'s the notice we\'d need and the pricing that would apply."</p><p><strong>Empty answer:</strong> "We\'ll grow with you." Aspirational, not actionable.</p>' },
              { tag: 'Weight: 5', title: 'Geographic / freight', preview: 'What good looks like', body: '<p><strong>Look for:</strong> distance from your DCs, freight lanes, ability to ship LTL vs FTL, ocean vs domestic.</p><p><strong>Solid answer:</strong> maps your inbound freight cost against the two other candidate locations you are considering.</p><p><strong>Empty answer:</strong> "Freight is your problem" — which it will be, but the co-man should still know the answer.</p>' },
            ],
          },
          {
            type: 'wired',
            tag: 'Operator move',
            heading: 'Do the scorecard live with the candidate',
            body: [
              'Send the scorecard to each candidate in the RFQ package. Ask them to self-score with evidence. Then verify each score in the plant visit or video walkthrough.',
              'This surfaces two things: (1) which candidates score honestly (a candidate that scores themselves 8 on quality systems and cannot show you an audit report is scoring for the pitch, not the reality), and (2) which candidates will engage with the discipline the relationship will require after signing.',
            ],
          },
        ],
      },
      {
        id: 'process',
        heading: 'A practical vetting process',
        lead: 'Treat selection like an operating project, not a vendor beauty contest. Give each candidate the same brief and the same questions.',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Write the production brief', body: 'SKU list with formula/spec, forecast 12-month volume with monthly cadence, target launch date, packaging with dimensions and tolerances, ingredient/material specifications, certifications required, testing required (stability, allergen, micro), and acceptable substitution policy.' },
              { title: 'Screen 8–12 candidates on paper', body: 'Filter on category experience, geography, MOQ fit, certifications, and known reputation. Cut to 4–6 who will get the RFQ.' },
              { title: 'Issue the RFQ with scorecard', body: 'Same brief, same scorecard, same deliverable format. Give 3 weeks. If they cannot return a serious quote in 3 weeks, they cannot run a serious production for you.' },
              { title: 'Score the quotes and shortlist 3', body: 'Total landed cost by candidate. Score against the 10-dimension rubric. Shortlist the top 3 on the pattern of scores, not on the lowest per-unit price.' },
              { title: 'Plant visit or video walkthrough', body: 'Verify the scorecard in person. Ask to see the line running product like yours. Ask about the last time they had a deviation. Watch how they answer.' },
              { title: 'Reference calls with real questions', body: 'Not "would you recommend them." Ask about the last delivery miss, the last quality issue, the last time forecast moved. If the reference cannot describe a real problem, they are either coached or new.' },
              { title: 'Negotiate the commercial terms', body: 'MOQ, price validity, setup fees, tooling ownership, payment terms, capacity commitment, force majeure, exit terms. Covered in depth in our <a href="/guides/co-manufacturer-contracts-risk">contracts guide</a>.' },
              { title: 'Award and onboard', body: 'First order is small — a validation run, not a launch quantity. Prove the operating rhythm before you commit peak-season inventory.' },
            ],
          },
        ],
      },
      {
        id: 'quote-comparison',
        heading: 'Comparing three quotes: total-cost math',
        lead: 'The lowest per-unit price is almost never the lowest total cost. Below is what a real 3-way comparison looks like.',
        blocks: [
          { type: 'p', html: 'Every co-man quote comes back with a per-unit price. That is not the number you decide on. The number you decide on is total landed cost after amortized setup, freight from the plant, and the cash cost of payment terms.' },
          {
            type: 'example',
            title: 'Three quotes for the same 20,000-unit run',
            body: [
              'Three real-shape co-man quotes for the same SKU spec. The FOB per-unit price is the headline; landed cost is the decision.',
            ],
            rows: [
              { label: '<strong>Candidate A</strong> — FOB per unit', value: '$4.10' },
              { label: 'A: Setup + tooling amortized on run', value: '+$0.25' },
              { label: 'A: Freight from plant (mid-Atlantic → SLC + LA DCs)', value: '+$0.42' },
              { label: 'A: Payment terms (50% deposit / Net 30 cash cost)', value: '+$0.08' },
              { label: '<strong>A: landed cost per unit</strong>', value: '<strong>$4.85</strong>', tone: 'neg' },
              { label: '<strong>Candidate B</strong> — FOB per unit', value: '$4.35' },
              { label: 'B: Setup + tooling amortized on run', value: '+$0.05' },
              { label: 'B: Freight from plant (Midwest)', value: '+$0.32' },
              { label: 'B: Payment terms (Net 30)', value: '+$0.02' },
              { label: '<strong>B: landed cost per unit</strong>', value: '<strong>$4.74</strong>' },
              { label: '<strong>Candidate C</strong> — FOB per unit', value: '$4.50' },
              { label: 'C: Setup + tooling amortized on run (waived)', value: '+$0.00' },
              { label: 'C: Freight from plant (West Coast)', value: '+$0.18' },
              { label: 'C: Payment terms (Net 45 — cash benefit)', value: '−$0.01' },
              { label: '<strong>C: landed cost per unit</strong>', value: '<strong>$4.67</strong>', tone: 'pos' },
            ],
            result: '<strong>On per-unit price, A wins. On landed cost, C wins by 4%</strong> — driven by freight lane and waived setup. And that assumes all three deliver on plan; if A has a history of missing dates and C never has, the real-world winner is C by more than 4%.',
          },
        ],
      },
      {
        id: 'red-flags',
        heading: 'Red flags in the vetting process',
        lead: 'Below are the specific responses and behaviors that consistently predict trouble. Not proof, but strong signals worth taking seriously.',
        blocks: [
          {
            type: 'redFlags',
            items: [
              { title: '"We\'ll fit you in"', body: 'This means they have no plan for your capacity. Every quarter you will fight for line time against larger customers. Get capacity commitment in writing or assume you will be deprioritized.' },
              { title: 'Vague answers on deviations', body: 'Every plant has deviations. A serious operator can walk through the last 3 deviations, what caused them, and what changed. Vague answers mean either no discipline or no transparency.' },
              { title: 'Reference calls that sound rehearsed', body: 'If the reference customer describes only positives and cannot name a single hard moment, they are either coached or new. Ask specifically about the last delivery miss.' },
              { title: 'Setup fees quoted after the plant visit', body: 'A serious operator quotes setup, tooling, testing, and MOQ in the RFQ response. Fees that emerge after they have your commitment are often followed by change orders after production starts.' },
              { title: 'Quality documentation "available on request"', body: 'A serious operator has a documentation package ready for a serious prospect. If they cannot share change control, batch records, and QC release procedures during the RFQ, they may not have them in a usable form.' },
              { title: 'No documented change-control process', body: 'You will change something — spec, packaging, ingredient. The co-man that has no change-control process will implement your change verbally to the floor, and the batch that comes off will not match your spec.' },
              { title: '"We can do that" without asking clarifying questions', body: 'A serious operator asks about tolerance, testing, packaging compatibility, and shelf-life implications before agreeing. Instant agreement is often followed by "actually, we cannot do that at this price" after the contract is signed.' },
              { title: 'Aggressive push to sign before the plant visit', body: 'Reputable operators want you to see the plant. A push to sign without a visit is either a capacity problem they do not want you to see, or a sales cadence disconnected from operating reality.' },
            ],
          },
        ],
      },
      {
        id: 'operating-rhythm',
        heading: 'The operating rhythm after you sign',
        lead: 'The best co-manufacturer relationships share the same operating rhythm: predictable communication, documented decisions, and no surprises at receiving.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Weekly production review during scale-up', body: 'Forecast vs order, production status, open quality issues, materials at risk, decisions needed. 30 minutes. Same agenda every week for the first 3–6 months.' },
              { title: 'Monthly capacity and forecast review', body: 'Rolling 6-month view of your forecast, their capacity allocation, and any changes on either side. Prevents surprise capacity fights.' },
              { title: 'Change-control gate', body: 'Every change — spec, packaging, artwork, ingredient — routes through a documented change-control form. No verbal changes. No exceptions.' },
              { title: 'QC release before ship', body: 'Every batch has a QC release document that the co-man signs and shares before the truck rolls. Not after receiving. Before.' },
            ],
          },
          {
            type: 'caseStudy',
            tag: 'From the ops floor',
            heading: 'Scaling from 3 to 21+ SKUs without losing the wheels',
            body: [
              'On the Epicutis engagement, we owned the co-manufacturing coordination as the brand scaled from 3 to 21+ SKUs. The scaling did not break because we implemented weekly production reviews, a documented change-control gate, and a QC release process from the first new SKU on.',
              'The operating rhythm compounds: by SKU 10, the co-man knew the drill; by SKU 21, we were adding new formats in weeks not months because the discipline was already there.',
            ],
          },
          {
            type: 'cta',
            label: 'Selecting a co-manufacturer or transitioning off one?',
            body: 'We\'ve run the RFQ, plant-visit, and first-run process dozens of times. A short call is usually enough to know if you\'re looking at the right shortlist.',
            href: '/how-we-work',
            linkText: 'See how Logic works →',
          },
        ],
      },
      {
        id: 'when-logic',
        heading: 'When Logic gets involved',
        blocks: [
          { type: 'p', html: 'Co-manufacturer selection engagements typically start when a brand is transitioning off a first co-man that has capped growth, adding a second co-man for capacity or geographic reasons, or launching a new format that the current co-man cannot run.' },
          { type: 'p', html: 'What we run inside the engagement:' },
          {
            type: 'list',
            items: [
              'Production brief written to co-manufacturer-usable specification',
              'Candidate identification and screening across 8–12 operators',
              'RFQ issuance with standardized scorecard and evaluation criteria',
              'Total landed-cost analysis and shortlisting',
              'Plant visits (Salt Lake City based, so accessible to most US operators)',
              'Reference calls with real diagnostic questions',
              'Contract term negotiation (in coordination with our <a href="/guides/co-manufacturer-contracts-risk">contracts guide</a>)',
              'First-run production management: capacity commitment, QC release, change-control gate',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'What is the difference between a co-manufacturer and a co-packer?', a: 'A co-packer typically packages and labels product to your specification — either from bulk you supply or from ingredients they source separately. A co-manufacturer typically also manufactures the product itself, which may include formulation support, procurement, and packaging as a bundled service. Contract manufacturer is a broader term often used for full-service arrangements including regulatory and formulation. Private-label manufacturer means you brand an existing formulation. The right term matters because it defines who owns formulation IP, who bears raw material risk, who owns tooling, and who is responsible for regulatory compliance. Get this defined in the contract before you sign.' },
      { q: 'What is a typical co-manufacturer MOQ?', a: 'MOQ varies widely by category. Beverage bottling typically runs 5,000-20,000 units per SKU (mobile canning as low as 1,500). Formulated skincare and cosmetics 3,000-15,000 units. Supplements 5,000-25,000 bottles for capsules, 10,000-50,000 for gummies. Packaged snacks 10,000-50,000 units. Frozen and refrigerated food 5,000-20,000. Below MOQ, expect setup fees ($500-15,000) or per-unit premiums of 15-40%. Model the total cash commitment (units × landed cost) against your sell-through velocity before defaulting to "hit the MOQ to get the lower per-unit price" — MOQ carrying cost is often the largest hidden cost of scaling production.' },
      { q: 'How many co-manufacturers should I evaluate?', a: 'Screen 8-12 candidates on paper, RFQ 4-6, plant-visit 3, and award to 1 (or occasionally 2 for capacity redundancy). Anything less than 4-6 RFQs is anecdotal comparison. Anything more burns weeks of team time on candidates that were never realistic. Give each RFQ candidate the same brief and the same 3-week deadline. Candidates that cannot return a serious quote in 3 weeks cannot run a serious production.' },
      { q: 'How do I evaluate total landed cost across multiple co-manufacturer quotes?', a: 'Total landed cost = per-unit FOB + setup and tooling amortized over the run + freight from plant to your DCs + payment terms cash cost (a 50%-deposit / Net 30 arrangement carries real working-capital cost vs Net 45) + testing and QC + any regulatory or certification costs. On a real 3-way comparison we\'ve run, the lowest per-unit price finished third on total landed cost, driven by freight lane and setup fees. Build the comparison in a spreadsheet with all lines visible before deciding.' },
      { q: 'What certifications should a co-manufacturer have?', a: 'Category-dependent. Food and beverage: SQF or BRCGS third-party audit, FDA facility registration, organic certification (from CCOF, QAI, or Oregon Tilth if applicable), non-GMO Project verification, kosher/halal as applicable, allergen control program. Supplements: cGMP compliant per 21 CFR Part 111, FDA facility registration, NSF or USP for enhanced quality claims. Cosmetics: ISO 22716 (cosmetics GMP), FDA registration for OTC drug categories, organic certification, EU cosmetics compliance if selling internationally. Consumer hardware: ISO 9001 minimum, ISO 14001 for environmental, category-specific (FCC, UL, CE, RoHS). Ask for the current cert list up front and verify against certifying-body databases directly.' },
      { q: 'How do I do a reference check on a co-manufacturer?', a: 'Ask the reference customer specifically about (1) the last delivery miss and how it was handled, (2) the last quality issue and the root cause and corrective action, (3) the last time the reference customer\'s forecast moved significantly, and (4) whether the reference would sole-source their production to this co-manufacturer today. Vague positive answers or "everything is great" responses either mean the reference is coached, is new to the co-man, or is not close enough to production to be a useful reference. If the reference cannot name a single hard moment across 12+ months of production, ask for a different reference.' },
      { q: 'How do I handle capacity commitments with a co-manufacturer?', a: 'Get capacity commitment in writing as part of the contract, not the RFQ. Specify: allocated line hours per month, minimum notice period for capacity requests, right-of-first-refusal on additional capacity, and consequences for allocation misses. "We\'ll fit you in" is not a capacity plan — it is a promise to deprioritize you when a larger customer\'s order arrives. For scaling brands, capacity commitment is often more important than price.' },
      { q: 'When should a growing brand switch co-manufacturers?', a: 'Consider a change when the current partner shows repeated quality failures without corrective action, capacity constraints capping your growth, structurally bad economics that no negotiation can fix, or an operating rhythm that consistently generates surprises. Switching costs are real — new production validation, potential formula reformulation, tooling migration, inventory bridge — so run the full economics before deciding. But the cost of staying with a co-man that is limiting growth typically exceeds the cost of switching within 6-12 months. Add capacity through a second co-man before fully transitioning; sole-sourcing during a switch creates single-point-of-failure risk.' },
    ],
    keyTakeaways: [
      'Co-manufacturer selection is category-specific. Beverage, skincare, supplements, and snacks each carry different MOQ realities and certification requirements.',
      'Score 3–5 candidates against the same rubric. The pattern of scores tells you more than the total.',
      'Total landed cost, not per-unit price, determines the winner. Setup, freight, terms, and reliability move the number 10–25%.',
      'Red flags in the RFQ process are usually red flags in the production relationship. Take them seriously.',
      'The operating rhythm — weekly production reviews, documented change control, QC release before ship — is what turns a co-man relationship into a growth platform.',
    ],
    related: [
      { href: '/guides/co-manufacturer-contracts-risk', title: 'Co-Manufacturer Contracts and Operational Risk', description: 'What to protect before you sign.' },
      { href: '/guides/cpg-demand-forecasting', title: 'Demand Forecasting for CPG Brands', description: 'The forecast your production plan is built on.' },
      { href: '/guides/packaging-sourcing', title: 'How to Source Packaging Without Getting Burned', description: 'Supplier qualification for packaging, applied to the co-man alongside.' },
    ],
    ctaHeading: <>Co-manufacturer selection, run as an <span className="o">operating project.</span></>,
    ctaCopy: 'Logic Agency runs the full co-manufacturer selection loop: brief, RFQ, scorecard, plant visits, reference calls, contract terms, and first-run production management—with one team carrying the context through execution.',
  },

  // =========================================================================
  // 5. CPG DEMAND FORECASTING (P0)
  // =========================================================================
  'cpg-demand-forecasting': {
    slug: 'cpg-demand-forecasting',
    stickyToc: true,
    ...authored,
    datePublished: '2026-09-19',
    dateModified: '2026-09-24',
    title: 'Demand Forecasting for CPG Brands: From Spreadsheet Guessing to Operational Control',
    titleBefore: 'Demand Forecasting for CPG Brands:',
    titleAccent: 'From Guessing to Operational Control',
    description: 'Safety-stock and reorder-point formulas, worked SKU examples, monthly S&OP rhythm, and MAPE tracking targets by growth stage for CPG brands.',
    keywords: 'CPG demand forecasting, inventory planning CPG, demand planning small brand, S&OP for emerging brands, safety stock formula, CPG forecast accuracy, reorder point CPG, CPG inventory management',
    ogImage: '/images/og-cpg-demand-forecasting.jpg',
    readTime: '15 min read',
    lede: 'A forecast is not a prediction you hope is right. It is the operating assumption your purchasing, production, cash, and customer promises are built on. This guide gives you the formulas, the rhythm, and the accuracy math that turn demand planning from a monthly argument into an operating discipline.',
    audience: 'Founders, ops leads, finance leads, and heads of supply chain at CPG brands from $2M to $50M who need to move from spreadsheet-and-argument forecasting to a repeatable operating rhythm.',
    tldr: [
      '<strong>A forecast must answer six questions</strong> before it drives production or cash decisions.',
      '<strong>Forecast at SKU and channel level, not blended.</strong> Total-company forecasts hide every stockout and every over-order.',
      '<strong>Safety stock formula: SS = (Max daily sales × Max lead time) − (Avg daily sales × Avg lead time).</strong> Not sophisticated, but reliable.',
      '<strong>Track forecast accuracy monthly.</strong> MAPE (Mean Absolute Percent Error) 15–25% is normal for growing brands; below 10% is unusual; above 40% means the forecast is not being used.',
      '<strong>S&OP is a rhythm, not software.</strong> Monthly meeting, shared file, decisions logged, actions closed. Enterprise systems come later.',
    ],
    sections: [
      {
        id: 'why-breaks',
        heading: 'Why forecasting breaks as brands scale',
        blocks: [
          { type: 'p', html: 'Early-stage brands run on intuition because the founder is close to every order. That stops working when sales split across DTC, wholesale, marketplaces, distributors, and retail. Each channel has different timing, different order behavior, different data quality, and different lead-time consequences.' },
          { type: 'p', html: 'The common failure is a single annual number treated as a plan. "We\'re going to do $8M next year" is a revenue target, not a forecast. Operations needs a rolling view by SKU, channel, customer, and month, with a clear distinction between what has been ordered, what is expected, and what is merely hoped for.' },
          {
            type: 'callout',
            tone: 'warn',
            label: 'The three signals your forecast has already broken.',
            body: [
              '(1) You had a stockout on a top-10 SKU in the last 60 days. (2) You wrote off inventory in the last 12 months that was not intentional promotional over-supply. (3) Your co-manufacturer or purchasing team is placing orders based on their guess of your demand, not your plan.',
            ],
          },
        ],
      },
      {
        id: 'six-questions',
        heading: 'The six questions a forecast must answer',
        lead: 'Before you build the forecast, agree what it has to answer. Below is the shortest useful list.',
        blocks: [
          { type: 'p', html: 'These six questions are the entire job. Every planning meeting reduces to one of them. Open each card to see how the answer should be structured.' },
          {
            type: 'revealCards',
            items: [
              { tag: 'Question 01', title: 'How much do we expect to sell?', preview: 'Structure', body: '<p>By SKU, by channel, by month, for the next 12 months. <strong>Rolling.</strong> Updated monthly at minimum.</p><p>Split the number into three lanes:</p><ul><li><strong>Committed</strong> — POs in hand or shipping in the next 60 days.</li><li><strong>Expected</strong> — run-rate reorders + confirmed promotions with a signed calendar.</li><li><strong>Aspirational</strong> — pipeline, unconfirmed distributor conversations, launches without a signed retailer PO.</li></ul><p>Never blend the three lanes into a single number. That is how a "$12M year" becomes a $6M year with $2M of dead stock in a warehouse.</p>' },
              { tag: 'Question 02', title: 'What is our target inventory position?', preview: 'Structure', body: '<p>By SKU, by DC, at end of each month. Sufficient to cover expected sales <strong>plus safety stock</strong> through the next replenishment cycle.</p><p>The forecast tells you what target to hit; the safety-stock formula (next section) tells you how deep the buffer needs to be.</p>' },
              { tag: 'Question 03', title: 'What production orders do we need to place, and when?', preview: 'Structure', body: '<p>Back-scheduled from expected demand, minus current inventory, minus in-transit, plus safety stock, respecting production lead time and MOQ.</p><p>This is the number that changes the co-manufacturer\'s calendar. Communicate it before you need it — reactive PO placement burns capacity that could have been reserved earlier.</p>' },
              { tag: 'Question 04', title: 'What working capital do we need, and when?', preview: 'Structure', body: '<p>Cash out for production and freight vs cash in from receivables. The demand forecast is the primary input to the cash forecast.</p><p>A common mistake: forecast production against demand, then discover cash constraints at the deposit-invoice stage. Cash-align the plan at the same table you build the demand plan — not in a separate finance meeting a month later.</p>' },
              { tag: 'Question 05', title: 'What are the constraints and risks?', preview: 'Structure', body: '<p>Supplier capacity, ingredient availability, freight windows, retailer PO timing, seasonal peaks. <strong>Named, dated, ranked.</strong></p><p>A risk without a date is a worry. A risk with a date and a threshold is an operating trigger.</p>' },
              { tag: 'Question 06', title: 'What changed since last forecast, and why?', preview: 'Structure', body: '<p>Every update tracks what moved. The learning is in the delta.</p><p>The five most useful questions in a monthly S&amp;OP review are: what did we assume, what did actuals do, why the delta, what does that tell us about next month, and what do we change?</p>' },
            ],
          },
        ],
      },
      {
        id: 'safety-stock',
        heading: 'Safety stock: the formula and worked examples',
        lead: 'Safety stock is the buffer inventory you carry between planned replenishments to cover demand variability and lead-time variability. Too little and you stock out; too much and you tie up cash.',
        blocks: [
          {
            type: 'formula',
            heading: 'Safety stock formula (max-max minus avg-avg)',
            formula: 'Safety Stock = (Max Daily Sales × Max Lead Time) − (Avg Daily Sales × Avg Lead Time)',
            notes: [
              'This is the operating standard for growing CPG brands. More sophisticated statistical models exist (service-level based, using standard deviation), but the max-max minus avg-avg formula is reliable, defensible, and matches how retail buyers actually think about coverage.',
              '<strong>Reorder Point</strong> = (Avg Daily Sales × Avg Lead Time) + Safety Stock',
              '<strong>Days of Supply</strong> = Current On-Hand ÷ Avg Daily Sales',
            ],
          },
          { type: 'h3', text: 'Worked example: 8oz supplement bottle' },
          {
            type: 'math',
            heading: 'Safety stock calculation — worked example',
            rows: [
              { label: 'Average daily sales (last 90 days)', value: '210 units/day' },
              { label: 'Maximum daily sales (highest 5-day rolling)', value: '380 units/day' },
              { label: 'Average lead time (production + freight)', value: '35 days' },
              { label: 'Maximum lead time (last 4 runs)', value: '58 days' },
              { label: 'Max sales × Max lead time', value: '380 × 58 = 22,040' },
              { label: 'Avg sales × Avg lead time', value: '210 × 35 = 7,350' },
              { label: 'Safety stock (units)', value: '14,690 units' },
              { label: 'Reorder point (units)', value: '22,040 units' },
              { label: 'Days of safety stock at avg run', value: '~70 days' },
            ],
            note: 'This brand carries 70 days of safety stock — expensive, but justified by the 58-day worst-case lead time and the 80% variability between average and peak daily sales. Cut lead time to 45 days or reduce peak variability and safety stock drops meaningfully.',
          },
          {
            type: 'diagram',
            animate: true,
            caption: 'Inventory position over time — safety stock as the buffer between planned replenishments.',
            svg: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inventory sawtooth over time showing safety stock and reorder point" style="width:100%;height:auto;display:block">
              <text x="40" y="30" fill="#FF600A" font-family="Arial,sans-serif" font-size="12" font-weight="800" letter-spacing="2">INVENTORY POSITION OVER TIME</text>
              <text x="40" y="50" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="14">Sawtooth pattern of consumption and replenishment</text>
              <!-- Axis -->
              <line x1="60" y1="250" x2="700" y2="250" stroke="rgba(255,255,255,0.3)"/>
              <line x1="60" y1="80" x2="60" y2="250" stroke="rgba(255,255,255,0.3)"/>
              <!-- Zone bands -->
              <rect x="60" y="200" width="640" height="50" fill="rgba(220,38,38,0.15)"/>
              <rect x="60" y="140" width="640" height="60" fill="rgba(255,96,10,0.15)"/>
              <rect x="60" y="80" width="640" height="60" fill="rgba(22,163,74,0.1)"/>
              <!-- Sawtooth path -->
              <polyline points="60,90 200,200 200,90 340,200 340,90 480,200 480,90 620,200" fill="none" stroke="#FF600A" stroke-width="2.5"/>
              <!-- Reorder line -->
              <line x1="60" y1="200" x2="700" y2="200" stroke="#FF600A" stroke-dasharray="4,4" stroke-width="1.5"/>
              <text x="705" y="205" fill="#FF600A" font-family="Arial,sans-serif" font-size="11" font-weight="700">Reorder</text>
              <!-- Safety stock line -->
              <line x1="60" y1="220" x2="700" y2="220" stroke="rgba(220,38,38,0.8)" stroke-dasharray="4,4" stroke-width="1.5"/>
              <text x="705" y="225" fill="rgba(220,38,38,1)" font-family="Arial,sans-serif" font-size="11" font-weight="700">Safety stock floor</text>
              <!-- Labels -->
              <text x="120" y="120" fill="rgba(255,255,255,0.85)" font-family="Arial,sans-serif" font-size="11">Consume →</text>
              <text x="200" y="80" fill="rgba(255,255,255,0.85)" font-family="Arial,sans-serif" font-size="11" text-anchor="middle">Replenish</text>
              <text x="60" y="72" fill="rgba(255,255,255,0.6)" font-family="Arial,sans-serif" font-size="10">Units</text>
              <text x="380" y="275" fill="rgba(255,255,255,0.6)" font-family="Arial,sans-serif" font-size="10" text-anchor="middle">Time →</text>
              <text x="410" y="230" fill="rgba(220,38,38,1)" font-family="Arial,sans-serif" font-size="10" font-weight="700">Stockout zone (below safety stock)</text>
            </svg>`,
          },
        ],
      },
      {
        id: 'sku-forecast',
        heading: 'Building a forecast people can operate',
        lead: 'The forecast people will actually use has a specific shape: SKU-level, channel-level, monthly-cadence, versioned, with base/upside/downside cases.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Start with the demand signal', body: 'Separate shipped orders, retailer POs in hand, subscriptions, expected promotions, pipeline, and one-time events. Do not blend committed demand with a sales wish list — they compound errors differently.' },
              { title: 'Forecast at SKU and channel level', body: 'A total-company forecast hides the stockout. Plan the items that actually drive service levels, margin, and production constraints — usually the top 20% of SKUs producing 70–80% of revenue.' },
              { title: 'Add the timing reality', body: 'Include production lead time, component lead time, ocean or domestic freight, receiving, QC, and retailer appointment windows. Forecasts denominated in "months" get translated back into "when do I place the PO" — build both.' },
              { title: 'Show a range', body: 'Base, upside, downside. The point is not false precision. It is making the cash and capacity implications of uncertainty visible. Board and investor discussions get more honest when the range is visible.' },
              { title: 'Log the assumptions', body: 'Every forecast update has a change note: "Moved SKU-7 Q4 up 20% based on Target reset confirmation." Assumptions logged make the forecast auditable and the lessons compoundable.' },
            ],
          },
        ],
      },
      {
        id: 'sop-rhythm',
        heading: 'The monthly S&OP rhythm',
        lead: 'S&OP (Sales and Operations Planning) does not require enterprise software or a full-time planner. It requires a recurring conversation, a shared file, a discipline of decisions logged and actions closed.',
        blocks: [
          {
            type: 'table',
            headers: ['Cadence', 'Meeting', 'Attendees', 'Output'],
            rows: [
              ['Weekly', 'Ops standup', 'Ops lead, purchasing, warehouse/3PL rep', 'Inventory positions, in-transit, exceptions, immediate actions'],
              ['Monthly', 'Demand review', 'Sales lead, marketing lead, ops lead', 'Updated 12-month forecast, promotional calendar, retailer PO changes'],
              ['Monthly', 'Supply review', 'Ops lead, purchasing, quality', 'Production plan vs demand, supplier constraints, capacity issues, risks'],
              ['Monthly', 'Executive S&OP', 'Founder / CEO, CFO, ops lead, sales lead', 'Decisions on trade-offs, cash implications, capacity investments, plan approval'],
              ['Quarterly', 'Forecast accuracy review', 'Ops lead, sales lead, finance', 'MAPE by SKU, root cause of largest misses, forecast process changes'],
            ],
          },
          { type: 'h3', text: 'The output of the executive S&OP' },
          {
            type: 'list',
            items: [
              'One approved 12-month forecast (base case), with logged upside/downside',
              'One approved production plan matching the forecast',
              'One approved cash plan matching the production plan',
              'A list of open decisions and owners',
              'A short change note: what moved and why',
            ],
          },
          {
            type: 'wired',
            tag: 'Operator rule',
            heading: 'The forecast has one owner, one number, one file',
            body: [
              'The most common S&OP failure is having three versions of the forecast in circulation: the sales forecast, the finance forecast, and the ops forecast. Different assumptions, different numbers, different actions. Pick one version, one owner, and one shared location. Everyone edits from that.',
            ],
          },
          {
            type: 'cta',
            label: 'Running S&OP with three versions of the forecast?',
            body: 'The rhythm is what turns the argument into a decision. Logic can build the forecast, align the owners, and keep the review cadence operating.',
            href: '/how-we-work',
            linkText: 'See how Logic works →',
          },
        ],
      },
      {
        id: 'accuracy-tracking',
        heading: 'Forecast accuracy: what to track and why',
        lead: 'A forecast you do not measure is a forecast you cannot improve. The industry-standard metric is MAPE (Mean Absolute Percent Error). Below is how to use it.',
        blocks: [
          {
            type: 'formula',
            heading: 'MAPE (Mean Absolute Percent Error) — SKU-level',
            formula: 'MAPE = (|Actual − Forecast| ÷ Actual) × 100, averaged across periods',
            notes: [
              'Calculate per SKU per month, then average across SKUs weighted by revenue for a portfolio view.',
              'Bias metric: (Actual − Forecast) ÷ Actual, signed. Consistent negative bias means chronic over-forecast; consistent positive bias means chronic under-forecast.',
            ],
          },
          {
            type: 'table',
            headers: ['MAPE range', 'Interpretation', 'Typical action'],
            rows: [
              ['Under 10%', 'Excellent — usually only achievable on high-velocity mature SKUs', 'Sustain; use as benchmark for other SKUs'],
              ['10–20%', 'Good — expected for scaling CPG brands with 12+ months history', 'Sustain; iterate on largest misses'],
              ['20–35%', 'Acceptable — typical for new SKUs or seasonal categories', 'Track root causes; expected to improve with data'],
              ['35–50%', 'Poor — forecast is losing predictive power', 'Root-cause session; likely process or data-source problem'],
              ['Over 50%', 'Broken — forecast is not being used or is being systematically overridden', 'Investigate whether S&OP exists in practice or only on paper'],
            ],
          },
          {
            type: 'callout',
            tone: 'real',
            label: 'The bias-and-variance diagnostic.',
            body: [
              'MAPE alone can hide two very different problems: high variance (wide swings around the actual, both positive and negative) and high bias (chronic over- or under-forecast). Track both. A brand with 25% MAPE and no bias has a variance problem — usually solved by better data. A brand with 25% MAPE and negative bias (over-forecasting consistently) has a discipline problem — usually solved by removing sales-driven optimism from the forecast.',
            ],
          },
        ],
      },
      {
        id: 'tools',
        heading: 'When to move off spreadsheets',
        lead: 'Every brand starts on spreadsheets. Most stay on spreadsheets longer than they should. Below is the honest read on when to move.',
        blocks: [
          {
            type: 'stages',
            items: [
              { title: 'Spreadsheet forecasting (SKU count up to 30, channels up to 3)', range: '$0–3M revenue', body: 'Google Sheet or Excel with the SKU-level forecast, S&OP rhythm, and version control. Works well if the discipline is real. Fails when the file becomes the constraint.' },
              { title: 'Purpose-built demand planning tool', range: '$3–25M revenue', body: 'Cogsy, Genlogs, Streamline, or Netstock. Purpose-built for CPG. Handles multi-channel forecasting, safety stock, reorder points, and integrates with Shopify/QuickBooks/NetSuite. Monthly cost $200–2,000.' },
              { title: 'ERP-integrated planning', range: '$25M+ revenue', body: 'NetSuite Advanced Inventory, Cin7 Omni, Acumatica, or SAP Business One. Higher cost, more integration, required at scale where multi-facility, multi-currency, and multi-entity complexity exceeds spreadsheet capability.' },
            ],
          },
        ],
      },
      {
        id: 'when-logic',
        heading: 'When Logic gets involved',
        blocks: [
          {
            type: 'caseStudy',
            tag: 'From the ops floor',
            heading: 'A 90-day inventory plan that shortened order-to-cash',
            body: [
              'On Epicutis, we built a 90-day rolling SKU-level inventory plan alongside a monthly S&OP rhythm as the brand scaled from 3 to 21+ SKUs. The forecast discipline shortened order-to-cash time meaningfully and gave the CFO a cash forecast tied directly to production and shipment schedule.',
              'The mechanism was not sophisticated software. It was a shared file, a monthly meeting, safety stock and reorder points per SKU, and change notes on every update.',
            ],
          },
          { type: 'p', html: 'Demand-forecasting engagements typically start when a brand has had a recent stockout, a recent inventory write-off, an investor asking why cash is tight, or a co-manufacturer asking for a rolling forecast.' },
          { type: 'p', html: 'What we build inside the engagement:' },
          {
            type: 'list',
            items: [
              'SKU-level 12-month rolling forecast by channel, versioned and shared',
              'Safety stock and reorder-point calculations per SKU',
              'Production plan back-scheduled from demand, respecting lead times and MOQs',
              'S&OP rhythm — monthly executive review with logged decisions',
              'MAPE tracking dashboard with quarterly root-cause reviews',
              'Cash-forecast integration with the demand plan',
              'Tool recommendation if you\'re ready to move off spreadsheets',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'What is a good demand forecast accuracy for a CPG brand?', a: 'MAPE (Mean Absolute Percent Error) in the 15-25% range is typical for scaling CPG brands with 12+ months of sales history on mature SKUs. Below 10% is excellent and usually only achievable on high-velocity, low-variability items. Above 35% suggests the forecast is either losing predictive power (data problem) or being systematically overridden (discipline problem). Track MAPE monthly per SKU, weighted by revenue for a portfolio view, and pair it with bias to distinguish variance problems from over/under-forecasting problems.' },
      { q: 'How do I calculate safety stock for a CPG brand?', a: 'The most reliable formula for growing CPG brands is: Safety Stock = (Max Daily Sales × Max Lead Time) − (Avg Daily Sales × Avg Lead Time). Use rolling averages (last 90 days for daily sales, last 4 production runs for lead time). More sophisticated statistical models (service-level based, using standard deviation) exist, but max-max minus avg-avg is defensible and matches how retail buyers actually think about coverage. Higher lead time variability or higher demand variability both drive safety stock up; reducing either lowers safety stock without reducing service level.' },
      { q: 'What is a reorder point?', a: 'The inventory level at which you place your next production or purchase order. Formula: Reorder Point = (Average Daily Sales × Average Lead Time) + Safety Stock. When on-hand inventory drops to this level, place the next order. Set reorder points per SKU, not blended. Review quarterly as sales velocity and lead times change.' },
      { q: 'What is S&OP and does a small CPG brand need it?', a: 'S&OP (Sales and Operations Planning) is the recurring monthly rhythm that reconciles demand plans (what sales expects to sell) with supply plans (what ops can produce and ship) and financial plans (what cash the company can support). It does not require enterprise software — a monthly meeting with sales lead, ops lead, and finance lead, with an updated forecast, a production plan, and a cash plan produced and approved each time, is real S&OP. Brands under $2M can often get by with weekly ops standups and quarterly executive reviews; brands above $5M and multi-channel benefit meaningfully from a formal monthly cadence.' },
      { q: 'When should I move off spreadsheets for demand planning?', a: 'Move to a purpose-built demand planning tool (Cogsy, Streamline, Netstock, Genlogs) when your SKU count exceeds ~30, your channel count exceeds 3, or your monthly S&OP cycle takes more than 4-6 hours of manual spreadsheet work. Typical tool cost is $200-2,000/month. Move to ERP-integrated planning (NetSuite, Cin7 Omni, Acumatica) at $25M+ revenue where multi-facility, multi-entity complexity exceeds spreadsheet and standalone tool capability. Most brands wait too long on spreadsheets; the migration is easier at $10M than at $30M.' },
      { q: 'How often should I update my forecast?', a: 'The primary forecast update is monthly, run through the executive S&OP cadence. Weekly ops standups adjust production and inventory decisions inside the current month. Quarterly forecast accuracy reviews look back at MAPE by SKU and identify process improvements. Ad-hoc updates happen when a major event changes assumptions materially — a retailer confirms or cancels a reset, a promotional program approves or rejects, a supplier signals capacity change. The point is not more frequent updates; it is disciplined, logged updates on a predictable cadence.' },
      { q: 'How do I forecast a brand-new SKU?', a: 'New-SKU forecasts are always wrong — the question is how you build them so the error is bounded. Build a base case from category benchmarks (velocity per store per week for similar items), a customer commitment case (POs in hand plus expected reorder), and an aspirational case (what the plan says). Present the range, not a single number. Update aggressively during the first 90 days as real sell-through data arrives. Expect MAPE in the 30-50% range for the first 60 days; drop to 20-30% as history builds; converge on portfolio MAPE by month 6 for most categories.' },
      { q: 'How does demand forecasting affect working capital?', a: 'The forecast drives the production plan, which drives the cash-out timeline for materials, production, and freight, which drives the cash-in timeline based on channel-specific payment terms. A 90-day production lead time on a co-manufactured product with Net 30 supplier terms and Net 45 distributor receivables creates a 165-day cash cycle from PO to cash. Over-forecasting produces excess inventory that ties up cash; under-forecasting produces stockouts that lose revenue and — at scale — retailer chargebacks. Working capital planning is the direct downstream output of a disciplined forecast. Covered in depth in our <a href="/guides/cpg-working-capital-playbook">CPG Working Capital Playbook</a>.' },
    ],
    keyTakeaways: [
      'A forecast is an operating assumption, not a prediction. Its value is in the decisions it enables.',
      'Forecast at SKU and channel level, monthly, with base/upside/downside cases and logged assumptions.',
      'Safety stock = (Max daily sales × Max lead time) − (Avg daily sales × Avg lead time). Reorder point = (Avg × Avg) + Safety stock.',
      'S&OP is a rhythm, not software. Monthly meeting, one forecast, one owner, one file, decisions logged.',
      'Track MAPE monthly. 15–25% is typical for scaling brands. Above 35% means the process needs work.',
    ],
    related: [
      { href: '/guides/cpg-working-capital-playbook', title: 'CPG Working Capital Playbook', description: 'The cash math the forecast drives.' },
      { href: '/guides/co-manufacturer-selection', title: 'How to Find, Vet, and Scale With the Right Co-Manufacturer', description: 'The production side of the forecast.' },
      { href: '/guides/cpg-operations-kpis', title: 'The CPG Operations KPI Dashboard', description: 'Forecast accuracy alongside the other metrics that matter.' },
    ],
    ctaHeading: <>A forecast your <span className="o">CFO, ops team, and co-manufacturer</span> can all operate on.</>,
    ctaCopy: 'Logic Agency builds and runs demand planning: SKU-level rolling forecasts, safety stock, S&OP rhythm, decision ownership, and forecast accuracy tracking.',
  },

  // =========================================================================
  // 6. CPG BROKER SELECTION PLAYBOOK (P1)
  // =========================================================================
  'cpg-broker-selection-playbook': {
    slug: 'cpg-broker-selection-playbook',
    stickyToc: true,
    ...authored,
    datePublished: '2026-09-20',
    dateModified: '2026-09-24',
    title: 'How to Select, Manage, and Fire a CPG Broker: The Operator\'s Playbook',
    titleBefore: 'How to Select, Manage, and Fire a',
    titleAccent: 'CPG Broker',
    description: 'Commission ranges by channel, the 8-dimension broker scorecard, first-90-day milestones, and the clean-transition playbook when the relationship no longer fits.',
    keywords: 'CPG broker selection, food broker, natural channel broker, broker commission rates, broker retainer, how to fire a CPG broker, broker vs direct sales, Advantage Solutions, Acosta, natural broker network',
    ogImage: '/images/og-cpg-broker-selection-playbook.jpg',
    readTime: '14 min read',
    lede: 'A good CPG broker gets you buyer meetings you would not get, gets you honest feedback you would not hear, and executes retail programs your in-house team is not staffed to run. A bad broker takes a retainer, misses meetings, and quietly loses shelf space you paid to earn. This guide separates the two before you sign.',
    audience: 'Founders, heads of sales, and heads of ops at CPG brands evaluating a first broker, managing an underperforming broker relationship, or planning a clean transition.',
    tldr: [
      '<strong>Commission ranges: 3–5% standard for natural/specialty, 5–7% for conventional, retainer + commission for high-touch categories.</strong> Retainers typically $1,500–5,000/month.',
      '<strong>National brokers (Advantage Solutions, Acosta, CROSSMARK) work best for scale;</strong> regional and specialty brokers work best for launch and category focus.',
      '<strong>The first 90 days determine the fit.</strong> Set specific milestones — buyer meetings booked, retailer resets covered, promotional calendars submitted — and grade against them.',
      '<strong>The most common broker failure is diffuse effort</strong>, not incompetence. Concentrate the broker on 2–3 target retailers per quarter, not a broad wishlist.',
      '<strong>Fire cleanly.</strong> Standard 90-day notice, defined account transition, no gap in retailer relationships. A messy exit costs you shelf space.',
    ],
    sections: [
      {
        id: 'what-brokers-do',
        heading: 'What a CPG broker actually does',
        blocks: [
          { type: 'p', html: 'A CPG broker is an independent sales representative that carries multiple non-competing brands into a set of retailers. They provide (1) buyer relationships and access, (2) category expertise, (3) retail field support (resets, demos, merchandising audits), (4) promotional calendar coordination, (5) administrative coverage on new-item paperwork and promotional programs.' },
          { type: 'p', html: 'A broker does not typically own inventory, take title, or manage logistics. They are compensated on the sales they generate (commission), the effort they commit (retainer), or both. They serve the retailer\'s buying process and your commercial goals — which usually align but sometimes do not.' },
          {
            type: 'table',
            headers: ['Broker type', 'Best fit', 'Typical structure'],
            rows: [
              ['<strong>National broker</strong> (Advantage Solutions, Acosta, CROSSMARK, Mondelēz Brokerage, ChaCha)', 'Brands doing $10M+ national wholesale volume with multi-retailer reach', '3–5% commission, sometimes retainer on top for high-touch categories'],
              ['<strong>Natural/specialty broker</strong> (Presence Marketing, Continental Sales, Naturally Chicago, Green Spoon Sales)', 'Natural/organic brands, Whole Foods and independent focus', 'Retainer $1,500–5,000/month + 3–5% commission'],
              ['<strong>Regional broker</strong> (Bay Cities, Palko, Nassau Candy, Alpine Sales, hundreds of others)', 'Emerging brands with regional distribution focus, or larger brands filling gaps in national coverage', 'Retainer + commission; more flexible'],
              ['<strong>Category specialist</strong> (KeHE Fresh, foodservice specialists, beauty specialists)', 'Brands in a specific channel or category with unique buying dynamics', 'Category-specific; typically higher commission for specialized access'],
              ['<strong>In-house sales team</strong>', 'Brands with $20M+ concentrated in 2-4 accounts, or founder-led sales in early stage', 'Salaried FTE $80–180K + incentive'],
            ],
          },
        ],
      },
      {
        id: 'when-you-need',
        heading: 'When you actually need a broker',
        lead: 'Brokers add value in specific situations. Below is the honest read on when it works and when it does not.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'You need buyer meetings you cannot get', body: 'Category buyers at major retailers and distributors take meetings from brokers they know before they take cold outreach from brands. A specialty broker\'s Rolodex is real.' },
              { title: 'You need field execution you cannot staff', body: 'Retail resets, in-store demos, competitive audits, promotional support — a broker\'s field team can cover 500+ stores; your 2-person sales team cannot.' },
              { title: 'You are entering a new channel', body: 'Foodservice, natural, conventional grocery, specialty gift, DSD — each has a different buying rhythm. A broker specialized in the channel shortcuts a 12-24 month learning curve.' },
              { title: 'You have concentrated retailer risk', body: 'When one account is 40%+ of your wholesale, an independent broker relationship gives you continuity if your account manager changes at the retailer or your internal team turns over.' },
              { title: 'You do NOT need a broker if:', body: 'Your sales are concentrated in 1–2 retailers you have a direct relationship with, your founder is the sales function, or you are pre-launch without a category story and enough inventory to support a broker\'s launch effort.' },
            ],
          },
        ],
      },
      {
        id: 'commission-math',
        heading: 'The commission math',
        lead: 'Broker fees come in three common structures. Click through to see when each one makes sense — and what the total-cost picture looks like at a real revenue level.',
        blocks: [
          {
            type: 'tabs',
            label: 'Broker fee structure comparison',
            tabs: [
              {
                label: 'Commission only',
                heading: 'Commission only — pay for performance',
                body: '<p>3–5% of net wholesale revenue on shipments the broker generates or supports. No retainer. Broker earns only when you ship.</p>',
                metrics: [
                  { label: 'Typical range', value: '3–5%', note: 'higher for specialty (5–7%)' },
                  { label: 'Best for', value: 'Brands ≥ $5M wholesale', note: 'meaningful commission on the base' },
                  { label: 'Risk to you', value: 'Low upfront', note: 'you only pay on revenue' },
                ],
                list: [
                  'Works when your existing wholesale base already generates enough commission to hold the broker\'s attention. On $5M net wholesale a 4% broker earns $200K/year — enough for real engagement.',
                  'Below $3M in wholesale, commission-only rarely wins the broker\'s time. Priority goes to their larger accounts.',
                  'Track the account list assigned to the broker; commission-only arrangements need clarity on which retailers count.',
                ],
              },
              {
                label: 'Retainer + commission',
                heading: 'Retainer + commission — the growth-stage default',
                body: '<p>Monthly retainer ($1,500–5,000) plus reduced commission (2–4%). Broker earns predictable income for advocacy work; you get real prioritization.</p>',
                metrics: [
                  { label: 'Typical retainer', value: '$1.5–5K/mo', note: 'natural / specialty channel' },
                  { label: 'Commission', value: '2–4%', note: 'reduced from commission-only' },
                  { label: 'Best for', value: '$1–10M in wholesale', note: 'growth-stage brands' },
                ],
                list: [
                  '<strong>Real example:</strong> $2,500/mo retainer + 3% on $2M net wholesale = $30K + $60K = $90K/year, ~4.5% of gross. Higher than commission-only at this revenue, but the retainer is what buys attention when the broker has 20+ brands.',
                  'Ask what the retainer includes: scheduled buyer meetings per quarter, category-review pack support, EDI/promotional-planning support, in-market visit calendar.',
                  'A retainer without measurable deliverables is a monthly gift, not a commercial arrangement.',
                ],
              },
              {
                label: 'Hybrid / tiered',
                heading: 'Hybrid or tiered — for complex channel mix',
                body: '<p>Different fee treatment for different accounts or channels. Common when brokers cover natural (higher %) and conventional (lower %), or when a house-account carve-out is negotiated.</p>',
                metrics: [
                  { label: 'Setup', value: 'Custom', note: 'Requires named-account list' },
                  { label: 'Common carve-outs', value: 'House accts', note: 'brands you brought in yourself' },
                  { label: 'Best for', value: 'Multi-channel brands', note: 'natural + conventional' },
                ],
                list: [
                  '<strong>House-account carve-out:</strong> retailers you sourced yourself before hiring the broker (usually named in the contract). No commission on those.',
                  '<strong>Tiered rate:</strong> 4% on new accounts the broker opens; 2% on run-rate reorders after month 12.',
                  '<strong>Category split:</strong> 5% on natural channel where broker actively hunts; 2% on conventional where broker just processes reorders.',
                  'This structure gets ugly at scale if the "who sourced what" record isn\'t maintained. Build the tracker before the deal is complex enough to require one.',
                ],
              },
            ],
          },
          {
            type: 'example',
            title: 'Broker cost at $2M net wholesale — retainer + commission structure',
            body: [
              'The math below assumes $2M in net wholesale revenue supported by a broker under a common $3K/mo retainer + 4% commission structure.',
            ],
            rows: [
              { label: 'Gross wholesale revenue', value: '$2,000,000' },
              { label: 'Deductions (MCB, chargebacks, damages ~12%)', value: '−$240,000', tone: 'neg' },
              { label: 'Net wholesale revenue', value: '$1,760,000' },
              { label: 'Broker commission (4% of net)', value: '−$70,400', tone: 'neg' },
              { label: 'Broker retainer ($3,000/month × 12)', value: '−$36,000', tone: 'neg' },
              { label: '<strong>Total broker cost</strong>', value: '<strong>$106,400</strong>' },
              { label: 'Cost as % of gross wholesale', value: '5.3%' },
              { label: 'Cost per new retailer meeting (assume 40/year)', value: '$2,660' },
              { label: 'Cost per case shipped (assume 100K cases)', value: '$1.06' },
            ],
            result: '<strong>Whether $106K is well-spent depends on incremental revenue, retention, and retailer relationships the broker enabled.</strong> Model both the with-broker and without-broker cases before signing. If the broker is a placeholder for you not having enough hours yourself, the number is a fair labor swap; if it\'s a placeholder for not having a strategy, no fee structure will save the arrangement.',
          },
        ],
      },
      {
        id: 'scorecard',
        heading: 'The broker scorecard',
        lead: 'Grade broker candidates on the same 8 dimensions. Use it in the RFP, in the reference check, and in the first-90-day review after signing.',
        blocks: [
          {
            type: 'checklist',
            items: [
              { title: 'Retailer relationships in your target channel', body: 'Named category buyers at 2-3 target retailers. Specific meeting history, not "we know everyone."' },
              { title: 'Category expertise in your product type', body: 'Category story fluency, competitive landscape knowledge, buyer expectations by retailer.' },
              { title: 'Existing brand roster', body: 'Non-competing but relevant brands. A broker with 40 brands in your category is overloaded; a broker with zero adjacent brands is inexperienced.' },
              { title: 'Field team footprint', body: 'Territory coverage, retail visit cadence, ability to execute demos and resets. Named team members, not headcount.' },
              { title: 'Administrative discipline', body: 'New-item paperwork, promotional calendar submission, MCB verification, deduction dispute support.' },
              { title: 'Reporting cadence', body: 'Monthly account-level reporting, weekly hot-list, quarterly business review. Format and cadence agreed up front.' },
              { title: 'Commercial structure fit', body: 'Retainer vs pure commission vs hybrid matched to your stage. Term length. Termination provisions.' },
              { title: 'Reference check depth', body: 'Two current customers, one former customer. Each willing to describe a real problem, not just positives.' },
            ],
          },
        ],
      },
      {
        id: 'red-flags',
        heading: 'Red flags in broker candidates',
        blocks: [
          {
            type: 'redFlags',
            items: [
              { title: '"We know everyone"', body: 'A serious broker names specific buyers at specific retailers, describes the last meeting, and shares an honest read on that buyer\'s current priorities. Vague relationships are not relationships.' },
              { title: 'Cannot name their competitive brand roster', body: 'A broker with 40 brands in your category is overloaded. A broker who is evasive about their roster is protecting concerns they should be surfacing.' },
              { title: 'No structured reporting', body: 'If the broker cannot show you the format of their monthly reporting during the pitch, you will not receive it after signing.' },
              { title: 'Long-term exclusivity with no performance escape', body: 'A broker asking for a 2-year exclusive agreement without performance milestones is asking for insurance against their own effort.' },
              { title: 'Retainer with no defined scope of work', body: 'What are you paying for, monthly? Buyer meetings? Field visits? Reset coverage? Reporting? Define it in the contract or the retainer will drift into a subscription with no output.' },
              { title: 'Reference checks that sound rehearsed', body: 'If the reference customer describes only positives, ask about the last account they lost, the last time promotional support underperformed, the last time a category review did not go as expected.' },
            ],
          },
        ],
      },
      {
        id: 'first-90-days',
        heading: 'The first 90 days after signing',
        lead: 'Set specific milestones with the broker before signing and grade against them at day 30, 60, and 90.',
        blocks: [
          {
            type: 'steps',
            items: [
              { title: 'Day 1–14: Onboarding', body: 'Product training, brand story, category positioning, target retailer list, promotional calendar sharing, reporting format finalization.' },
              { title: 'Day 14–30: Kickoff execution', body: 'First buyer meetings booked. Broker field team assigned per territory. First reporting cycle delivered.' },
              { title: 'Day 30 review', body: 'Meetings booked vs plan. Retailer feedback captured. Any process gaps identified. Corrective actions agreed.' },
              { title: 'Day 60 review', body: 'Meetings held vs booked. New-item submissions in flight. Promotional calendar reflected in retailer POs. First shipments moving.' },
              { title: 'Day 90 review', body: 'New PO cycles secured. Reset coverage completed. Deduction disputes in flight. Continue / adjust / terminate decision made with data, not vibes.' },
            ],
          },
        ],
      },
      {
        id: 'firing',
        heading: 'When and how to fire a broker',
        lead: 'Firing a broker is a business decision, not a personal one. Done poorly, you lose shelf space. Done well, the transition is invisible to the retailer.',
        blocks: [
          { type: 'h3', text: 'Grounds for firing' },
          {
            type: 'list',
            items: [
              'Missed milestones for two consecutive quarters (buyer meetings, promotional support, reset coverage)',
              'Retailer feedback that your broker is not showing up or is misrepresenting your brand',
              'Deduction disputes not filed or lost due to broker inattention',
              'Structurally bad economics — commission cost exceeding incremental revenue by a wide margin',
              'Repeated administrative failures (new-item paperwork errors, promotional calendar misses, MCB unreconciled)',
              'A category or channel shift where the broker is no longer the right fit',
            ],
          },
          { type: 'h3', text: 'How to transition cleanly' },
          {
            type: 'steps',
            items: [
              { title: 'Give the required notice', body: 'Standard broker agreements require 90 days written notice. Honor it. Skipping the notice creates disputes and often triggers residual commission on business already in the pipeline.' },
              { title: 'Define account transition', body: 'Which accounts move to a new broker, which move in-house, which pause. Document per account. Notify the incoming broker or in-house team before you notify the retailer.' },
              { title: 'Notify retailer buyers directly', body: 'A short, professional note from the founder or head of sales to each buyer. Introduce the new representation. Reassure continuity. Do not disparage the outgoing broker.' },
              { title: 'Handle residual commission', body: 'Commission on shipments already sold and pending is often owed for a defined period after termination (typically 30-90 days). Pay it. It is cheap insurance against a dispute and preserves your reputation in the broker network.' },
              { title: 'Close reporting', body: 'Final MCB reconciliation. Final deduction reconciliation. Account-level handoff to new broker or in-house team. Documentation of promotional commitments in flight.' },
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            label: 'The one thing that will burn you.',
            body: [
              'Firing without notice, without paying residual commission, or without a defined transition costs you more than the commission you saved. The broker network is small and talks. Retailers notice representation changes. Do it the right way.',
            ],
          },
          {
            type: 'cta',
            label: 'Sitting on a broker decision?',
            body: 'A 30-minute call is usually enough to know whether the broker is the constraint or the process is. We won\'t pitch you out of one you should keep.',
            href: '/how-we-work',
            linkText: 'See how Logic works →',
          },
        ],
      },
      {
        id: 'when-logic',
        heading: 'When Logic gets involved',
        blocks: [
          { type: 'p', html: 'Broker engagements typically start when a brand is evaluating a first broker, has an underperforming broker relationship they cannot honestly assess, or is transitioning off a broker and needs clean account handoff.' },
          { type: 'p', html: 'What we run inside the engagement:' },
          {
            type: 'list',
            items: [
              'Broker landscape analysis for your channel and category',
              'RFP issuance to 3–5 candidates with standardized scorecard',
              'Reference checks with real diagnostic questions',
              'Commercial term negotiation (retainer, commission, term, escape provisions)',
              'First-90-day milestone framework and monthly grading',
              'Transition management for broker changes (account handoff, notice, residuals, retailer communication)',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'What is a typical CPG broker commission rate?', a: 'Standard broker commission ranges: 3-5% for natural and specialty channel, 5-7% for conventional grocery, 7-10% for foodservice or category-specialized representation. Retainer structures typically add $1,500-5,000/month on top of commission for high-touch relationships or launch-phase engagements. National broker agencies (Advantage Solutions, Acosta, CROSSMARK) sometimes negotiate blended structures for scale. The right structure depends on your stage, category, and the level of field execution you need — a retainer + reduced commission often works for launches; pure commission works for mature brands with volume.' },
      { q: 'Do CPG brands really need a broker?', a: 'Not always. Brokers add value when you need buyer meetings you cannot get directly, field execution you cannot staff (retailer resets, demos, competitive audits), or specialized channel expertise (foodservice, natural, conventional, DSD). Brokers do not add value when your sales are concentrated in 1-2 retailers you already have direct relationships with, your founder is the sales function, or you are pre-launch without inventory and category story to support broker effort. Test the with-broker vs without-broker economics on incremental revenue and retention before signing.' },
      { q: 'How do I choose between a national broker and a specialty broker?', a: 'National brokers (Advantage Solutions, Acosta, CROSSMARK) have field team footprint across the country and work best for brands doing $10M+ in wholesale with multi-retailer reach. They provide breadth. Specialty brokers (Presence Marketing, Continental Sales, Green Spoon Sales for natural; regional operators for specific channels) provide depth in a specific channel or category. Emerging brands almost always start with specialty brokers for launch and category focus, then add national broker capability as they scale. Some brands run hybrid — specialty broker for natural channel, national broker for conventional.' },
      { q: 'What should be in a broker agreement?', a: 'Scope of representation (retailers or channels included/excluded), commission rate and payment terms, retainer amount and payment terms, term length and renewal, termination provisions (notice period, residual commission), performance milestones (optional but useful), reporting cadence and format, promotional support obligations, and account exclusivity or non-compete terms. The two most-negotiated items: performance milestones (does the broker have a performance floor they must meet) and residual commission (how long after termination do you owe commission on business already in the pipeline). Standard notice is 90 days; standard residual period is 30-90 days on business already booked.' },
      { q: 'What is the difference between a broker and a sales rep?', a: 'A broker is typically an independent agency representing multiple non-competing brands, paid on commission or retainer + commission by the brand. A sales rep is typically an employee of the brand, salaried plus incentive, focused exclusively on that brand\'s accounts. Brokers scale better in early stages (variable cost, broad relationships); in-house sales teams scale better at $20M+ concentrated in 2-4 large accounts (accountability, brand focus, career progression). Many mid-scale brands run hybrid — in-house sales team on top accounts, broker representation everywhere else.' },
      { q: 'How do I know if my broker is underperforming?', a: 'Track specific milestones: buyer meetings booked and held per month, new-item submissions in flight, reset coverage completed, promotional calendar adherence, deduction disputes filed and won, retailer PO growth on covered accounts. Grade against pre-agreed milestones monthly for the first 90 days and quarterly after. Underperformance signals: missed meetings, retailer feedback that the broker is absent, MCB unreconciled, new-item paperwork errors, promotional programs missed. If two consecutive quarters miss milestones without a credible corrective plan, transition planning should begin.' },
      { q: 'How do I fire a broker without losing retailer relationships?', a: 'Give the contractual notice (typically 90 days written), define account transitions before notifying the retailer, notify buyers directly with a short professional note introducing the new representation, pay any residual commission owed on business in the pipeline, and close out MCB and deduction reconciliation cleanly. The broker network is small and talks — a clean exit preserves your reputation and your retailer relationships. A messy exit costs you shelf space and creates disputes that can outlast the relationship itself.' },
      { q: 'What are the top natural channel brokers in the US?', a: 'Leading natural and specialty channel brokers include Presence Marketing (extensive Whole Foods coverage), Continental Sales, Naturally Chicago, Green Spoon Sales (West Coast focus), Rainforest (specialty and specialty grocery), and dozens of strong regional operators. Each has category strengths and retailer relationship strengths — the right broker for beauty is not the right broker for supplements is not the right broker for beverage. Ask any distributor buyer for their honest read on the brokers active in their category; the answers are consistent and informative.' },
    ],
    keyTakeaways: [
      'Commission ranges: 3–5% natural/specialty, 5–7% conventional, retainers $1,500–5,000/month.',
      'National brokers for scale, specialty brokers for category focus, regional brokers for geographic gaps.',
      'Score 3–5 candidates against the same 8-dimension rubric. Reference-check depth matters more than pitch quality.',
      'Grade the first 90 days against specific milestones. Continue, adjust, or terminate with data.',
      'When you fire, give the notice, define the transition, pay the residuals, notify buyers directly. The industry is small.',
    ],
    related: [
      { href: '/guides/distributor-onboarding-playbook', title: 'The CPG Distributor Onboarding Playbook', description: 'Distributor onboarding, which the broker often quarterbacks.' },
      { href: '/guides/regional-to-national-retail-expansion', title: 'From Regional to National Retail Expansion', description: 'Where broker representation becomes essential for coverage.' },
      { href: '/guides/retail-readiness', title: 'The Retail Readiness Bible', description: 'What the broker will need from you to sell your product in.' },
    ],
    ctaHeading: <>Broker selection, run <span className="o">as an operating decision.</span></>,
    ctaCopy: 'Logic Agency runs broker RFPs, first-90-day grading, and clean transitions when the relationship no longer fits—keeping the commercial decision connected to operational follow-through.',
  },

  // =========================================================================
  // 7. CO-MANUFACTURER CONTRACTS AND RISK (P1)
  // =========================================================================
  'co-manufacturer-contracts-risk': {
    slug: 'co-manufacturer-contracts-risk',
    stickyToc: true,
    ...authored,
    datePublished: '2026-09-21',
    dateModified: '2026-09-24',
    title: 'Co-Manufacturer Contracts and Operational Risk: What to Negotiate Before You Sign',
    titleBefore: 'Co-Manufacturer Contracts and',
    titleAccent: 'Operational Risk',
    description: 'The six clauses that matter more than price: IP, tooling, capacity commitment, quality and liability, force majeure, and exit terms — with negotiation ranges.',
    keywords: 'co-manufacturer contract, co-packer agreement, CPG manufacturing risk, contract manufacturer terms, tooling ownership, formula IP, co-manufacturer capacity commitment, force majeure CPG, co-packer termination',
    ogImage: '/images/og-co-manufacturer-contracts-risk.jpg',
    readTime: '17 min read',
    lede: 'A co-manufacturing contract that reads clean at signing can turn into a growth cap 18 months later. The terms that matter are not always the ones most brands negotiate. This guide is what we bring to the table — term by term — before we let a client sign.',
    audience: 'Founders, CFOs, general counsel, and heads of ops at CPG brands negotiating a first co-manufacturing agreement or renewing an existing one. Not legal advice — but the operational context legal needs.',
    tldr: [
      '<strong>Six clauses matter more than the price:</strong> IP and formula ownership, tooling ownership, capacity commitment, quality and liability, force majeure, and exit terms.',
      '<strong>Standard term is 1–3 years with 60–90 day termination notice.</strong> Longer terms should trade for lower per-unit price or protected capacity, not exclusivity.',
      '<strong>Tooling ownership should be yours</strong> even if the co-man holds it. Otherwise switching is a $50–500K reset.',
      '<strong>Capacity commitment in units per month</strong> is the single most-missed clause in emerging-brand contracts. "We\'ll fit you in" is not a term.',
      '<strong>Liability caps should relate to your annual purchase volume</strong>, not to a nominal number that is trivial vs your recall exposure.',
    ],
    sections: [
      {
        id: 'disclaimer',
        heading: 'This is an operating perspective — not legal advice',
        blocks: [
          {
            type: 'callout',
            tone: 'real',
            label: 'Read this first.',
            body: [
              'This guide provides the operational context and negotiation ranges we bring to co-manufacturing engagements at Logic Agency. It is not legal advice. Every agreement should be reviewed by qualified counsel in your jurisdiction, particularly on IP assignment, indemnification, insurance requirements, and force majeure — where boilerplate language can create asymmetric risk.',
            ],
          },
        ],
      },
      {
        id: 'six-clauses',
        heading: 'The six clauses that matter most',
        lead: 'Most first-time contract negotiations focus on price and payment terms. Those matter — but they are usually the terms both sides negotiate best. The higher-leverage terms are structural.',
        blocks: [
          { type: 'p', html: 'Open each card to see the negotiate/walk lines and how the language often reads in real contracts.' },
          {
            type: 'revealCards',
            items: [
              { tag: 'Clause 01', title: 'IP / formula ownership', preview: 'Negotiate + walk lines', body: '<p><strong>Negotiate:</strong> explicit assignment of your formula, artwork, and brand IP to you. Explicit exclusion of any co-man contribution unless separately contracted.</p><p><strong>Walk on:</strong> any clause granting the co-man rights to sell your formula to other customers, or to use it after termination.</p><p><strong>Real-world language to watch:</strong> "improvements, modifications, or derivatives developed during production may be used by [Co-Man] in the ordinary course of business." That sentence means your formula tweaks may quietly become the co-man\'s asset. Strike it.</p>' },
              { tag: 'Clause 02', title: 'Tooling ownership', preview: 'Negotiate + walk lines', body: '<p><strong>Negotiate:</strong> you own the tooling, even if it lives at the co-man plant. Documented in a tooling schedule with cost, serial number, and current location. Right to move the tooling on 30 days notice.</p><p><strong>Walk on:</strong> co-man ownership of tooling you funded. Ambiguous tooling language ("all molds and equipment used in production are the property of [Co-Man] unless otherwise agreed").</p><p><strong>Why it matters:</strong> if you switch co-mans, tooling you don\'t own is either abandoned, re-purchased, or held hostage.</p>' },
              { tag: 'Clause 03', title: 'Capacity commitment', preview: 'Negotiate + walk lines', body: '<p><strong>Negotiate:</strong> allocated units per month or line hours per month, with an escalation notice period (typically 60–90 days) and defined consequences for allocation misses.</p><p><strong>Walk on:</strong> "reasonable commercial efforts" or no capacity clause at all.</p><p><strong>Language pattern to insist on:</strong> "[Co-Man] shall reserve production capacity of X units per calendar month, deliverable no later than the [Nth] of the following month. If capacity is unavailable, [Co-Man] will notify [Brand] within 3 business days and shall reimburse actual documented alternative sourcing costs up to $[cap]."</p>' },
              { tag: 'Clause 04', title: 'Quality and liability', preview: 'Negotiate + walk lines', body: '<p><strong>Negotiate:</strong> defined quality specification, testing protocol, right of rejection, cure period, recall support obligations, and a liability cap tied to purchase volume (typically 12 months of purchase value, minimum).</p><p><strong>Walk on:</strong> liability caps at $50K or $100K when your annual purchase is $2M+, or contracts that carry no recall support obligation.</p><p><strong>Recall-support language matters more than the cap.</strong> A $500K cap that requires the co-man to fund destruction, replacement, retailer chargebacks, and notification is more valuable than a $2M cap with none of those obligations.</p>' },
              { tag: 'Clause 05', title: 'Force majeure', preview: 'Negotiate + walk lines', body: '<p><strong>Negotiate:</strong> defined events (natural disasters, government action, labor strike specifically at the plant), notice requirements (usually 48–72 hours), mitigation obligations, and a termination right if the event extends beyond a defined period (typically 60–90 days).</p><p><strong>Walk on:</strong> broad force majeure language that shifts all upside to the co-man and all downside to you — including clauses that excuse pricing changes, capacity misses, or quality failures under vague market conditions.</p>' },
              { tag: 'Clause 06', title: 'Exit terms', preview: 'Negotiate + walk lines', body: '<p><strong>Negotiate:</strong> termination for cause (defined) and for convenience (typically 90–180 days notice), transition support obligations (final production runs, sample retention, tooling return), and inventory buy-back or wind-down.</p><p><strong>Walk on:</strong> multi-year exclusivity with no termination for underperformance; punitive termination fees (2–3× monthly revenue).</p><p><strong>The exit clause is negotiated at the start because you have leverage then. After signing, exit is what you\'ll fight about — plan for the divorce during the wedding.</strong></p>' },
            ],
          },
        ],
      },
      {
        id: 'ip-tooling',
        heading: 'IP, formula, and tooling ownership',
        lead: 'The IP and tooling terms determine whether you can switch co-manufacturers when the relationship no longer fits. Get them wrong and you are structurally locked in.',
        blocks: [
          { type: 'h3', text: 'Formula and product IP' },
          { type: 'p', html: 'Your contract should explicitly state: (1) all formulas, specifications, artwork, and product IP are and remain your property; (2) any modifications developed during the engagement are your property upon payment; (3) the co-man has no right to use, sell, or license your formula to any other customer during or after the term; (4) the co-man will provide the current formula and specifications to a successor manufacturer on transition.' },
          { type: 'p', html: 'If the co-man contributed formulation work, that contribution should be either separately compensated or explicitly assigned. Ambiguity in this area produces disputes at transition — usually when you have already committed to the switch.' },
          { type: 'h3', text: 'Tooling ownership' },
          { type: 'p', html: 'Tooling — molds, dies, plates, sample runs, custom equipment — should be your property if you paid for it. Document each piece in a tooling schedule with cost, unique identifier, and current physical location. Include a right to relocate the tooling on termination.' },
          {
            type: 'callout',
            tone: 'warn',
            label: 'The tooling gotcha at transition.',
            body: [
              'A brand switching co-manufacturers with poorly documented tooling ownership commonly faces one of three obstacles: (1) the co-man claims tooling ownership and demands buy-back at inflated value, (2) the tooling is worn and needs replacement (which the outgoing co-man will not pay for), (3) the tooling physically exists but transferring it requires the outgoing co-man\'s cooperation on packaging, shipping, and receiver instructions — cooperation that gets slow at exit. Documented ownership, current condition, and relocation rights in the contract prevent all three.',
            ],
          },
        ],
      },
      {
        id: 'capacity',
        heading: 'Capacity commitment',
        lead: 'The most common capacity clause in an emerging-brand co-manufacturing agreement is: nothing. The co-man will "make commercially reasonable efforts" to meet your forecast. This is not a capacity commitment. It is a courtesy.',
        blocks: [
          { type: 'p', html: 'A useful capacity clause specifies: (1) allocated production capacity in units per month or line hours per month, (2) how you communicate a forecast change (typically 60-90 days notice), (3) the co-man\'s right to accept or decline capacity above the commitment, (4) consequences for the co-man failing to meet the commitment — usually credits against future production or expedite freight reimbursement.' },
          {
            type: 'table',
            headers: ['Stage', 'Typical capacity commitment', 'Typical notice for change'],
            rows: [
              ['Launch phase (Y1)', 'First-run confirmed, second-run negotiated', '90 days'],
              ['Established (Y2+, $1–5M annual)', 'Monthly units committed at 80% of trailing 6-mo run rate', '60 days'],
              ['Scale (Y3+, $5M+ annual)', 'Monthly units committed at 90% of trailing 6-mo run rate + right of first refusal above', '30–60 days'],
              ['Peak / seasonal', 'Pre-committed peak capacity for defined months, penalties for both over- and under-consumption', '90–120 days'],
            ],
          },
          { type: 'p', html: 'If a co-man declines to commit capacity in writing, that is data. Either they cannot commit (capacity conflict with other customers), they do not want to commit (retaining the option to deprioritize you), or their internal planning does not support commitments (systemic underinvestment). Any of the three should reshape the RFQ decision.' },
          {
            type: 'example',
            title: 'Real redline — what a bad capacity clause looks like, and what to counter with',
            body: [
              'Below is a common contract pattern we\'ve seen from mid-sized co-mans, followed by the counter language that keeps the deal fair. Both are simplified for clarity.',
            ],
            rows: [
              { label: '<strong>Co-Man opening language:</strong> "Co-Manufacturer shall use reasonable commercial efforts to fulfill Brand\'s purchase orders in accordance with generally accepted industry lead times."', value: 'Vague', tone: 'neg' },
              { label: '<strong>What it actually means in practice:</strong> capacity is discretionary; when a bigger customer shows up, you get pushed back with no consequence.', value: '—' },
              { label: '<strong>Counter language:</strong> "Co-Manufacturer shall reserve production capacity of not less than 40,000 units per calendar month for Brand\'s products (\'Reserved Capacity\'). Purchase orders within Reserved Capacity shall be delivered no later than 21 days from PO date."', value: 'Specific' },
              { label: '<strong>Escalation:</strong> "If Co-Manufacturer is unable to meet Reserved Capacity in any month, Brand may source the shortfall from an alternative supplier, and Co-Manufacturer shall reimburse the documented incremental cost up to $[cap] per month."', value: 'Consequence' },
              { label: '<strong>Notice:</strong> "Co-Manufacturer shall provide 60 days written notice of any anticipated capacity constraint."', value: 'Warning', tone: 'pos' },
            ],
            result: '<strong>The counter language does three things the opening version does not:</strong> commits capacity as a number (not a phrase), gives you a remedy (documented reimbursement), and forces early notice so you can act. Co-mans routinely counter this with a lower reserved-capacity number or a longer notice period — that\'s fine. The negotiation you don\'t want is one that leaves the "reasonable efforts" language intact.',
          },
        ],
      },
      {
        id: 'quality-liability',
        heading: 'Quality, liability, and recall provisions',
        lead: 'When product goes wrong, this is where the contract earns or loses its keep. Recall exposure alone can dwarf every other financial term in the agreement.',
        blocks: [
          {
            type: 'checklist',
            items: [
              { title: 'Written quality specification', body: 'Ingredient/material specs, tolerances, packaging tolerances, code-date format, expected shelf life, testing requirements. Attached as an exhibit that can be updated with mutual approval.' },
              { title: 'Right of rejection', body: 'Your right to reject non-conforming product with defined cure period and process. Usually 30 days from receipt for inspection.' },
              { title: 'Corrective action process', body: 'Documented CAPA (Corrective and Preventive Action) obligations. Root-cause analysis, corrective action plan, timeline for implementation, verification.' },
              { title: 'Recall support', body: 'Co-man obligation to support recall activities including product tracing, batch records, testing, and defense against regulatory action. Costs allocated based on cause.' },
              { title: 'Product liability insurance', body: 'Co-man carries minimum $2-5M product liability with brand named as additional insured. Higher limits for higher-risk categories (supplements, cosmetics, food).' },
              { title: 'Liability cap tied to purchase volume', body: 'Cap on the co-man\'s aggregate liability set at trailing 12-month purchase volume or 2-3x annual purchase. Fixed dollar caps ($50K, $100K) are inadequate for meaningful volume.' },
              { title: 'Indemnification', body: 'Co-man indemnifies for defects in manufacture; you indemnify for defects in your formula, specification, or artwork. Mutual and defined.' },
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            label: 'The recall math.',
            body: [
              'A single class-II recall on a mid-scale CPG product routinely costs $500K-2M in destroyed inventory, retailer chargebacks, brand damage, and legal fees. A liability cap of $100K in that scenario is not a cap — it is a rounding error. If the co-man cannot carry adequate insurance or accept adequate liability, that is information about the risk of the relationship.',
            ],
          },
        ],
      },
      {
        id: 'force-majeure',
        heading: 'Force majeure and business continuity',
        lead: 'Post-2020, force majeure clauses matter more than they used to. Boilerplate language usually shifts all supply-chain risk to you.',
        blocks: [
          { type: 'p', html: 'A useful force majeure clause: (1) enumerates specific events (natural disaster, government action, labor stoppage, pandemic-related restrictions) — not just "acts of God"; (2) requires prompt written notice; (3) requires mitigation efforts; (4) suspends performance obligations but does not eliminate them; (5) gives you the right to terminate if the force majeure event extends beyond a defined period (typically 60-120 days).' },
          { type: 'p', html: 'Watch for one-sided language: force majeure that excuses the co-man\'s performance while requiring your continued purchase obligations. Or clauses that treat ingredient shortages as force majeure — which effectively shifts all raw-material price risk to you.' },
        ],
      },
      {
        id: 'exit-terms',
        heading: 'Exit terms',
        lead: 'Every co-manufacturing relationship ends eventually. Design the exit before signing so it does not become adversarial.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Termination for cause', body: 'Defined breach events (quality failures, delivery failures, insolvency), cure periods, right to terminate on uncured breach. Standard.' },
              { title: 'Termination for convenience', body: 'Either party can terminate with defined notice (typically 90-180 days). Fees, if any, tied to specific reimbursable costs (tooling amortization remaining, unamortized setup, protected inventory buy-back).' },
              { title: 'Transition support obligation', body: 'Outgoing co-man required to support transition to successor for defined period (typically 60-90 days), including production during transition, technical documentation transfer, tooling relocation, sample provision to successor.' },
              { title: 'Inventory wind-down', body: 'How raw materials, WIP, and finished goods are handled at termination. Usually: you purchase remaining raws at cost, WIP is completed and delivered, finished goods are your inventory to receive.' },
              { title: 'Non-solicitation and confidentiality', body: 'Reasonable post-termination restrictions. Watch for overreach — a 5-year non-compete on the co-man producing competing products in the category is unenforceable and hostile; a 12-month non-solicit of specifically-listed customers is standard.' },
            ],
          },
          { type: 'p', html: 'Related depth: our <a href="/blog/supplier-transition-strategy-scaling-brands">supplier transition strategy for scaling brands</a> post covers the operational side of a co-man switch.' },
          {
            type: 'cta',
            label: 'Reviewing terms before signing?',
            body: 'We bring operational context to your legal team\'s review — the terms that determine whether the relationship scales or caps you.',
            href: '/how-we-work',
            linkText: 'See how Logic works →',
          },
        ],
      },
      {
        id: 'red-flags',
        heading: 'Red-flag clauses to strike or renegotiate',
        blocks: [
          {
            type: 'redFlags',
            items: [
              { title: 'Exclusive dealing without defined scope', body: 'A clause preventing you from working with any other co-man during the term should be limited to the specific SKUs at this co-man, not the entire brand. Otherwise a single co-man relationship can prevent you from adding a second co-man for a different category.' },
              { title: 'Automatic renewal without opt-out notice', body: 'Contract auto-renews annually unless you give 90+ days notice. Add a calendar reminder. Better: negotiate the auto-renewal out and require affirmative renewal.' },
              { title: 'Price escalation formulas the co-man controls', body: '"Price may increase based on raw material index" with the co-man selecting the index and the timing. Negotiate: specific index, specific formula, semi-annual adjustments only, cap on annual increase.' },
              { title: 'Minimum purchase requirements without performance obligations', body: 'You commit to purchase minimums; the co-man commits to nothing on quality, timing, or capacity. Add reciprocal commitments.' },
              { title: 'Consequential damages waiver without carve-outs', body: 'Standard clause waiving consequential damages should carve out: gross negligence, willful misconduct, IP infringement, breach of confidentiality, indemnification obligations. Otherwise a co-man\'s negligence in a recall exposes you fully.' },
              { title: 'Change control that requires co-man approval for your changes', body: 'You should be able to change your own formula, packaging, or artwork with notice; the co-man\'s consent should be limited to changes that materially affect their production capability or cost.' },
              { title: 'Unlimited co-man discretion on production location', body: 'Some co-mans reserve the right to move production between their own facilities without notice. This affects freight, quality, and regulatory. Require notice and right to inspect.' },
            ],
          },
        ],
      },
      {
        id: 'when-logic',
        heading: 'When Logic gets involved',
        blocks: [
          { type: 'p', html: 'Contract engagements typically start when a brand is signing a first co-manufacturing agreement, renewing an existing one, or preparing to switch. We bring operational context to legal review; we do not provide legal advice.' },
          { type: 'p', html: 'What we bring to the negotiation:' },
          {
            type: 'list',
            items: [
              'Term-by-term operational review against the ranges above',
              'Capacity commitment structure matched to your forecast and growth plan',
              'Quality specification and testing protocol drafted or reviewed',
              'Tooling schedule preparation with cost, condition, and location documentation',
              'Exit-planning language your legal team can review and refine',
              'Coordination with your legal counsel on operational implications of proposed language',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'Who should own the tooling in a co-manufacturing relationship?', a: 'You, if you paid for it. Even when the tooling physically lives at the co-manufacturer\'s plant, your contract should establish that you own the tooling — molds, dies, plates, custom equipment — with a documented tooling schedule listing cost, unique identifier, and current location. Include the right to relocate on termination. The most common transition dispute is over tooling: the outgoing co-man claims ownership, demands buy-back at inflated value, or refuses to release physical possession. Documented ownership in the contract prevents all three.' },
      { q: 'What is a typical capacity commitment in a co-manufacturer contract?', a: 'For established relationships doing $1-5M annual volume, typical language allocates monthly units committed at approximately 80% of trailing 6-month run rate, with 60 days notice for material forecast changes. At scale ($5M+ annual), capacity commitment often rises to 90% of trailing 6-month run rate with a right of first refusal on additional capacity. For launch phases, capacity commitment is typically limited to first-run confirmed and second-run negotiated. "Commercially reasonable efforts" without a specific unit commitment is not a capacity clause — it is a courtesy that will be deprioritized when a larger customer\'s order arrives.' },
      { q: 'What insurance should a co-manufacturer carry?', a: 'Minimum product liability of $2-5M with the brand named as additional insured is standard; higher limits ($5-10M+) for higher-risk categories (supplements, cosmetics with regulated claims, ingestible food). General liability of $1-2M. Workers\' compensation per state requirements. Property insurance covering brand-owned tooling and materials at the co-man facility. Some brands additionally require product recall insurance ($1-5M) for regulated categories. Certificates of insurance should be attached to the contract and renewed annually with brand-notified verification.' },
      { q: 'What is a reasonable liability cap in a co-manufacturing contract?', a: 'Liability caps should be tied to your annual purchase volume — typically the trailing 12-month purchase amount or 2-3x annual purchase — not to a nominal fixed dollar amount. Fixed caps at $50K or $100K are inadequate for any meaningful volume, because they do not cover recall exposure. A single class-II recall routinely costs $500K-2M in destroyed inventory, retailer chargebacks, brand damage, and legal fees. Carve out from any liability cap: gross negligence, willful misconduct, IP infringement, breach of confidentiality, and indemnification obligations. Discuss adequate limits with your legal counsel based on your category and volume.' },
      { q: 'How long should a co-manufacturing agreement term be?', a: 'Standard commercial terms are 1-3 years with 60-90 day termination notice. Longer terms (3-5 years) should trade for specific, valuable commitments: lower per-unit pricing, protected capacity, tooling investment, or dedicated line. A long-term contract with no performance escape is asymmetric risk. Avoid auto-renewal without affirmative opt-out. If auto-renewal is in the contract, add a calendar reminder to your team for 120 days before renewal so you can either affirmatively renew or provide required termination notice.' },
      { q: 'What should be in a force majeure clause?', a: 'A useful force majeure clause enumerates specific events (natural disaster, government action, labor stoppage, pandemic-related restrictions), requires prompt written notice, requires mitigation efforts, suspends performance obligations but does not eliminate them, and gives either party the right to terminate if the event extends beyond a defined period (typically 60-120 days). Watch for one-sided language that excuses the co-manufacturer\'s performance while requiring your continued purchase obligations, or clauses that treat ingredient shortages as force majeure — which effectively shifts all raw-material price risk to you.' },
      { q: 'What are common red-flag clauses in a co-manufacturer contract?', a: 'The most common red-flag clauses: exclusive dealing without defined scope (prevents you from working with other co-mans on non-competing categories), automatic renewal without notice-based opt-out, price escalation formulas the co-man controls unilaterally, minimum purchase requirements without reciprocal performance obligations, consequential damages waivers without carve-outs for gross negligence and IP infringement, change control that requires co-man approval for your own formula changes, and unlimited co-man discretion on production location. Each of these shifts risk asymmetrically toward the co-man and should be renegotiated or struck.' },
      { q: 'What happens to inventory when a co-manufacturing contract ends?', a: 'Standard wind-down language provides that you purchase remaining raw materials at cost, work-in-process is completed and delivered, and finished goods are your inventory to receive. Payment terms on wind-down inventory should mirror ongoing commercial terms. Include a defined transition period (typically 60-90 days) during which the outgoing co-man continues production support, provides technical documentation to the successor, and cooperates on tooling relocation. Without documented wind-down provisions, transitions become negotiations at exactly the moment when leverage has shifted away from the departing party.' },
    ],
    keyTakeaways: [
      'Six clauses matter more than price: IP, tooling, capacity commitment, quality/liability, force majeure, and exit terms.',
      'Tooling ownership is yours if you paid for it — documented in a schedule with cost, condition, location, and right to relocate.',
      'Capacity commitment in units per month with defined notice is the single most-missed clause in emerging-brand contracts.',
      'Liability caps should be tied to purchase volume, not fixed nominal amounts that are trivial vs recall exposure.',
      'Design the exit before signing. Standard terms are 1–3 years with 60–90 day notice, defined transition support, and clean inventory wind-down.',
    ],
    related: [
      { href: '/guides/co-manufacturer-selection', title: 'How to Find, Vet, and Scale With the Right Co-Manufacturer', description: 'The selection process that leads into the contract.' },
      { href: '/blog/supplier-transition-strategy-scaling-brands', title: 'Supplier Transition Strategy for Scaling Brands', description: 'The operational side of switching co-manufacturers.' },
      { href: '/guides/packaging-sourcing', title: 'How to Source Packaging Without Getting Burned', description: 'Sourcing discipline that applies to co-man selection too.' },
    ],
    ctaHeading: <>Contract terms that <span className="o">protect the relationship — and the exit.</span></>,
    ctaCopy: 'Logic Agency brings operational context to co-manufacturer contract review. We work alongside your legal counsel on the terms that determine whether the relationship scales or caps you.',
  },

  // =========================================================================
  // 8. REGIONAL TO NATIONAL RETAIL EXPANSION (P1)
  // =========================================================================
  'regional-to-national-retail-expansion': {
    slug: 'regional-to-national-retail-expansion',
    stickyToc: true,
    ...authored,
    datePublished: '2026-09-22',
    dateModified: '2026-09-24',
    title: 'From Regional to National: The Operational Playbook for CPG Retail Expansion',
    titleBefore: 'From Regional to National:',
    titleAccent: 'The Operational Playbook for CPG Retail Expansion',
    description: 'Retailer sequencing, working-capital math per expansion, distribution architecture, OTIF exposure, and the organizational capability that must scale in parallel.',
    keywords: 'regional to national retail expansion, CPG national distribution, scaling retail distribution, retail expansion playbook, Whole Foods to Kroger, Sprouts to Target, national retail rollout CPG, CPG retail sequencing',
    ogImage: '/images/og-regional-to-national-retail-expansion.jpg',
    readTime: '14 min read',
    lede: 'Regional distribution and national distribution are not the same business at bigger scale. National expansion changes production, distribution, working capital, retailer requirements, and organizational structure at the same time. This guide is the sequencing that lets a brand cross that line without breaking the operating model.',
    audience: 'Founders, CFOs, and heads of sales at CPG brands doing $5M–$50M in regional retail volume evaluating a national expansion push.',
    tldr: [
      '<strong>National expansion is a working-capital event.</strong> Peak inventory investment for a national reset typically runs 4–8x your current inventory level.',
      '<strong>Sequence the rollout.</strong> Sprouts → Whole Foods regional → Whole Foods national → Kroger regional divisions → Target → Walmart is a common ladder. Skipping rungs increases risk.',
      '<strong>Distribution architecture matters more than production.</strong> Multi-DC 3PL, refresh cadence, and lane economics reshape the P&L before production capacity does.',
      '<strong>Retailer compliance stakes rise with scale.</strong> Walmart OTIF, Target chargebacks, and Kroger routing are strict where regional accounts are forgiving.',
      '<strong>Organizational capability lags the growth.</strong> Sales, ops, planning, finance, and quality all need to level up in parallel — not sequentially.',
    ],
    sections: [
      {
        id: 'why-hard',
        heading: 'Why national expansion is not just bigger regional',
        blocks: [
          { type: 'p', html: 'A brand doing $8M in Whole Foods regional and 200 independents runs on 2–3 SKUs at 500–1,500 cases per SKU per production run, one 3PL, weekly shipments to a handful of DCs, and a founder who knows every account. Doubling that same brand into Whole Foods national plus a Kroger regional division plus Target Endcap changes almost every operational variable at once.' },
          {
            type: 'cards',
            items: [
              { title: 'Production runs 3–5x larger', body: 'MOQ math changes. Ingredient purchasing changes. Working capital tied up in inventory changes.' },
              { title: 'Distribution touches multiple DCs', body: 'Direct-to-DC via distributor (KeHE/UNFI) or direct-to-retailer DC. Multi-lane freight economics. Regional inventory positioning.' },
              { title: 'Retailer requirements change', body: 'Target OTIF, Walmart routing guide compliance, Kroger EDI. Chargeback exposure that regional accounts do not create.' },
              { title: 'Trade spend scales non-linearly', body: 'National promotional programs, MDF, coop, endcap slotting. Trade spend as % of gross often rises 3-5 points during a national expansion phase.' },
              { title: 'Team structure has to change', body: 'Broker network coverage, in-house sales for top accounts, dedicated planning and 3PL management. The founder-sells-everything model breaks.' },
              { title: 'Cash cycle stretches', body: 'Bigger production runs paid earlier, larger receivables paid later. Cash-out to cash-in cycle can move from 90 days to 150+ days during expansion.' },
            ],
          },
        ],
      },
      {
        id: 'sequencing',
        heading: 'The typical sequencing',
        lead: 'Every category has its own ladder, but a common sequence for natural / specialty CPG is below. The purpose of sequencing is not to be right about the exact order — it is to build capability at each step before adding the next.',
        blocks: [
          {
            type: 'timeline',
            items: [
              { duration: 'Y1–2', title: 'Regional independents + local specialty', body: '30–100 stores. Direct sales or small broker. First case-pack economics. First retailer compliance experience. Learn what the shelf actually does.' },
              { duration: 'Y2–3', title: 'Regional chain: Sprouts, Fresh Market, or regional Whole Foods', body: '200–500 stores. First distributor relationship (KeHE or UNFI). First real chargeback exposure. First sell-through data. Broker economics start to make sense.' },
              { duration: 'Y3–4', title: 'Whole Foods national or Sprouts national', body: '500–1,300 stores. Multi-DC distribution. Category story tested at scale. Slotting fees hit. Working capital investment scales.' },
              { duration: 'Y4–5', title: 'Kroger regional division rollout', body: 'Adds 500–1,500 stores per division. Conventional grocery pricing and operational expectations. Trade spend rises. EDI becomes non-negotiable.' },
              { duration: 'Y5+', title: 'Target and/or Walmart', body: 'Adds 1,900+ stores each. Chargeback exposure step-changes. National broker or in-house account team required. Production capacity redundancy needed.' },
              { duration: 'Parallel', title: 'Amazon FBA, DTC, foodservice, international', body: 'Channels that develop alongside — each with its own economics, requirements, and organizational demands.' },
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            label: 'The rung-skip failure.',
            body: [
              'Brands that go from regional independent directly to Target endcap — skipping the Whole Foods or Sprouts step — often blow up in the first 6 months. They lack multi-DC distribution experience, chargeback discipline, and the sell-through data that gives buyers confidence to defend the item at the first review. The expansion is not the mistake. Skipping the operational proof point that makes it survivable is.',
            ],
          },
          { type: 'h3', text: 'What actually changes at each expansion rung' },
          { type: 'p', html: 'The same brand looks operationally different at each rung. Click through to see how order patterns, chargeback exposure, and working-capital demands shift.' },
          {
            type: 'tabs',
            label: 'Retail expansion tier comparison',
            tabs: [
              {
                label: 'Regional (30–500 stores)',
                heading: 'Regional independents + first regional chain',
                body: '<p>You are still close enough to see every order. Individual store managers still matter. A chargeback is an event, not a category.</p>',
                metrics: [
                  { label: 'Order pattern', value: 'Store-level' },
                  { label: 'Chargeback exposure', value: '<1% of gross' },
                  { label: 'Working capital', value: '$50–200K' },
                ],
                list: [
                  '<strong>Key hires:</strong> a broker if any, one operations owner (often the founder).',
                  '<strong>Systems required:</strong> spreadsheet forecasting, QuickBooks, one 3PL, no EDI required.',
                  '<strong>Where founders get overconfident:</strong> assuming that what worked at 100 stores will work at 1,000. The operating system almost always has to be rebuilt.',
                ],
              },
              {
                label: 'Super-regional (500–2,000 stores)',
                heading: 'Whole Foods, Sprouts, Kroger division rollouts',
                body: '<p>Distributor-driven. Chargebacks become a monthly category. Trade spend becomes a real line item. Multi-DC allocation planning is required.</p>',
                metrics: [
                  { label: 'Order pattern', value: 'DC-level' },
                  { label: 'Chargeback exposure', value: '3–8% of gross' },
                  { label: 'Working capital', value: '$300K–1M' },
                ],
                list: [
                  '<strong>Key hires:</strong> ops manager, planner or S&amp;OP owner, broker network, dedicated compliance / EDI resource.',
                  '<strong>Systems required:</strong> real inventory management (Cin7, NetSuite, or similar), EDI capability (SPS/TrueCommerce), formal S&amp;OP cadence.',
                  '<strong>Where brands stall:</strong> forecasting by SKU × DC × month. This is where a founder-led spreadsheet stops working.',
                ],
              },
              {
                label: 'National (2,000+ stores)',
                heading: 'Target, Walmart, mass',
                body: '<p>Multi-node distribution, mandatory EDI, OTIF scoring, dedicated account teams, and production redundancy become non-optional.</p>',
                metrics: [
                  { label: 'Order pattern', value: 'Region + auto-replen' },
                  { label: 'Chargeback exposure', value: '5–15% of gross' },
                  { label: 'Working capital', value: '$2–8M' },
                ],
                list: [
                  '<strong>Key hires:</strong> VP Sales for mass, national account team, dedicated compliance / EDI / SPS Commerce specialist, second production source.',
                  '<strong>Systems required:</strong> full ERP, retailer-specific dashboards (Retail Link for Walmart, POL for Target), demand-planning software, freight optimization.',
                  '<strong>Where the math changes:</strong> free-fill programs, MDF / co-op, in-store execution costs, and OTIF penalties can consume 10–15 points of gross margin. Model them before signing.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'working-capital',
        heading: 'The working capital math',
        lead: 'National expansion is a cash event before it is a revenue event. Below is what the peak investment looks like for a typical natural CPG brand adding a national retailer.',
        blocks: [
          {
            type: 'math',
            heading: 'Working capital investment — worked example: adding Kroger regional division (750 stores)',
            rows: [
              { label: 'Initial pipeline fill (750 stores × 2 cases × 3 SKUs × $10 landed)', value: '$45,000' },
              { label: 'Distributor safety stock (~30 days coverage)', value: '$60,000' },
              { label: 'DC-positioned safety stock across 4 DCs', value: '$80,000' },
              { label: 'Production run to support (3-month coverage)', value: '$180,000' },
              { label: 'Slotting fees (12 SKUs across 4 DCs @ $250)', value: '$12,000' },
              { label: 'Free-fill program (250 stores × 2 cases × 3 SKUs)', value: '$15,000' },
              { label: 'Trade spend budget (Q1 launch programs)', value: '$40,000' },
              { label: 'Peak working capital investment', value: '$432,000' },
              { label: 'Expected first 90 days of receivables', value: '−$180,000' },
              { label: 'Net cash outlay through first cycle', value: '$252,000' },
            ],
            note: 'That is one retailer, one regional division, one launch. National expansion often means running two or three of these in parallel over 12-18 months. Financing structure — line of credit, factoring, revenue-based financing — becomes the constraint, not the opportunity.',
          },
        ],
      },
      {
        id: 'distribution',
        heading: 'Distribution architecture',
        lead: 'A brand shipping from one DC on the West Coast to 200 stores nationally is bleeding freight and time. National reach requires distribution architecture, not just more inventory.',
        blocks: [
          {
            type: 'stages',
            items: [
              { title: 'Single DC, direct to retailer or distributor', range: 'Regional', body: 'Works up to ~$5M revenue with regional concentration. Freight lanes short; inventory concentrated; simple 3PL relationship.' },
              { title: 'Dual DC (East + West coast)', range: '$5–20M', body: 'Reduces freight cost and transit time for national accounts. Adds inventory position complexity. Common transition point for scaling brands.' },
              { title: 'Multi-DC (3–5 nodes) via national 3PL', range: '$20M+', body: 'ShipBob, Deliverr Amazon Multi-Channel, or enterprise 3PL. Each DC positioned near regional retailer DC networks. Inventory allocation and replenishment become disciplines, not spreadsheets.' },
            ],
          },
          { type: 'p', html: 'The lane economics: shipping a 25-lb case from LA to Atlanta costs 3-4x the same case from Nashville to Atlanta. At national scale, DC positioning becomes a margin decision, not just a service decision.' },
          { type: 'p', html: 'Related depth: our <a href="/guides/3pl-selection-guide">3PL Selection Guide</a> covers evaluating fulfillment partners for national scale.' },
        ],
      },
      {
        id: 'compliance',
        heading: 'Retailer compliance at national scale',
        lead: 'Regional independents forgive a late shipment. National retailers charge you $250-2,500 per SKU per event. Multiply by SKUs, DCs, and cycles, and non-compliance becomes a P&L line.',
        blocks: [
          {
            type: 'table',
            headers: ['Retailer', 'Compliance concern', 'Typical chargeback impact'],
            rows: [
              ['Walmart', 'OTIF (On-Time In-Full). Currently 3% for late + 3% for short of the shipment value.', 'A brand shipping $2M/year to Walmart at 85% OTIF pays ~$60K/year in chargebacks; at 95% OTIF pays ~$20K/year.'],
              ['Target', 'ASN accuracy, routing guide compliance, damage rate, packaging spec.', '$250-1,500 per event. Aggregates fast on high-SKU launches.'],
              ['Kroger', 'EDI transaction accuracy, ASN timing, appointment window, pallet configuration.', '$200-1,000 per violation. Kroger post-audits back 12-18 months, so violations you thought were behind you resurface.'],
              ['Costco', 'Case pack, pallet configuration, packaging durability, price validity, sell-through velocity.', 'Item deletion for underperformance is faster than chargeback exposure. Miss the velocity threshold and you\'re out.'],
              ['Whole Foods (through UNFI)', 'Distributor routing compliance, PIM data accuracy, in-store demo execution, packaging sustainability.', 'Deductions and MCB dominate; direct chargeback less common.'],
            ],
          },
          {
            type: 'wired',
            tag: 'Operator move',
            heading: 'The compliance operating rhythm',
            body: [
              'Every national retailer relationship needs: automated EDI (SPS Commerce or equivalent), weekly OTIF or chargeback review, monthly deduction disaggregation, quarterly retailer scorecard review. Assign an owner per retailer. Track failures with root cause coded to 3PL, production, planning, or freight. Fix the root cause, not just the individual event.',
            ],
          },
          {
            type: 'cta',
            label: 'Getting ready for a national retailer launch?',
            body: 'National expansion is a 6-12 month project. A short call is usually enough to know whether the ops foundation is ready or has gaps to close first.',
            href: '/how-we-work',
            linkText: 'See how Logic works →',
          },
        ],
      },
      {
        id: 'organizational',
        heading: 'Organizational capability that must scale in parallel',
        lead: 'Every national retailer relationship exposes an organizational gap. Below is where those gaps typically appear.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Sales / account management', body: 'National account managers for top 3-5 accounts; broker coverage for the rest. Regional in-house team dissolves; category account teams form.' },
              { title: 'Demand planning', body: 'Monthly S&OP with retailer-specific forecasts. Safety stock and reorder points per DC. Forecast accuracy tracked and improved. Covered in our <a href="/guides/cpg-demand-forecasting">demand forecasting guide</a>.' },
              { title: '3PL and logistics management', body: 'Dedicated 3PL manager (in-house or fractional). Weekly performance review. Rate rebids every 18-24 months. Lane analysis by retailer.' },
              { title: 'Finance and cash', body: 'Weekly cash forecast tied to production and shipment schedule. Deduction management as a monthly discipline, not a quarterly cleanup. Line of credit or asset-based lending increasingly important.' },
              { title: 'Quality and regulatory', body: 'Batch traceability at scale. Recall readiness. Category-specific regulatory (FDA, USDA, cosmetics reg) as national exposure grows.' },
              { title: 'Systems', body: 'ERP, PIM, WMS integration. Manual processes that work at $5M do not survive at $30M.' },
            ],
          },
        ],
      },
      {
        id: 'when-logic',
        heading: 'When Logic gets involved',
        blocks: [
          {
            type: 'diagram',
            animate: true,
            caption: 'National expansion staircase — new stores added at each step, cumulative footprint.',
            svg: `<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative retail store count as brands expand from regional to national" style="width:100%;height:auto;display:block">
              <text x="40" y="30" fill="#FF600A" font-family="Arial,sans-serif" font-size="12" font-weight="800" letter-spacing="2">NATIONAL EXPANSION STAIRCASE — CUMULATIVE STORE COUNT</text>
              <text x="40" y="50" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="14">Each step adds capability the next step requires</text>
              ${(() => {
                const steps = [
                  ['Independents', 100, 'Y1-2'],
                  ['+ Sprouts / Regional', 600, 'Y2-3'],
                  ['+ Whole Foods National', 1900, 'Y3-4'],
                  ['+ Kroger divisions', 3400, 'Y4-5'],
                  ['+ Target', 5300, 'Y5+'],
                  ['+ Walmart', 9500, 'Y5+'],
                ];
                const maxStores = 9500;
                const chartH = 200;
                const barW = 90;
                const gap = 12;
                return steps.map(([name, cum, year], i) => {
                  const x = 70 + i * (barW + gap);
                  const h = (cum / maxStores) * chartH;
                  const y = 260 - h;
                  return `
                    <rect x="${x}" y="${y}" width="${barW}" height="${h}" fill="url(#staircase)" stroke="#FF600A" stroke-width="1"/>
                    <text x="${x + barW/2}" y="${y - 6}" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="12" font-weight="800" text-anchor="middle">${cum.toLocaleString()}</text>
                    <text x="${x + barW/2}" y="275" fill="rgba(255,255,255,0.85)" font-family="Arial,sans-serif" font-size="10" font-weight="600" text-anchor="middle">${name}</text>
                    <text x="${x + barW/2}" y="290" fill="rgba(255,96,10,0.9)" font-family="Arial,sans-serif" font-size="10" font-weight="700" text-anchor="middle">${year}</text>
                  `;
                }).join('');
              })()}
              <defs>
                <linearGradient id="staircase" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stop-color="rgba(255,96,10,0.3)"/>
                  <stop offset="1" stop-color="#FF600A"/>
                </linearGradient>
              </defs>
              <line x1="60" y1="260" x2="700" y2="260" stroke="rgba(255,255,255,0.3)"/>
              <text x="40" y="310" fill="rgba(255,255,255,0.5)" font-family="Arial,sans-serif" font-size="10">Store counts approximate US market; category and brand mileage varies.</text>
            </svg>`,
          },
          {
            type: 'caseStudy',
            tag: 'From the ops floor',
            heading: 'Scaling from 3 to 21+ SKUs across expanding retail',
            body: [
              'The Epicutis engagement crossed the regional-to-national line during the SKU expansion. We managed the production capacity build, the packaging system evolution, and the retailer compliance readiness as retail account count grew.',
              'The pattern that worked: sequence the retailer adds, prove operational readiness at each step, and back-schedule production and cash against the next confirmed retailer launch — not against the aspirational timeline.',
            ],
          },
          { type: 'p', html: 'National expansion engagements typically start 6-12 months before the retailer launch. What we run inside the engagement:' },
          {
            type: 'list',
            items: [
              'Sequencing analysis — which retailer next, in what order, on what timeline',
              'Working capital and cash modeling through the expansion cycle',
              'Distribution architecture design — DC positioning, 3PL selection or expansion',
              'Retailer compliance readiness — EDI, routing, ASN, chargeback prevention',
              'Production capacity planning — co-manufacturer capacity commitment, second-source risk mitigation',
              'Organizational gap analysis and priority hiring roadmap',
              'First-90-day operational discipline through the retailer launch',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'What is the typical retailer sequencing for national CPG expansion?', a: 'A common natural / specialty CPG sequence: regional independents (30-100 stores, Y1-2), regional chain (Sprouts, Fresh Market, regional Whole Foods) at 200-500 stores in Y2-3, Whole Foods or Sprouts national at 500-1,300 stores in Y3-4, Kroger regional divisions at 500-1,500 stores per division in Y4-5, then Target and/or Walmart at 1,900+ stores each in Y5+. Amazon FBA, DTC, foodservice, and international channels develop in parallel. Each step builds a specific operational capability the next step requires. Brands that skip rungs — e.g., regional independent directly to Target endcap — often fail in the first 6 months because they lack multi-DC distribution experience, chargeback discipline, and sell-through data to defend the item.' },
      { q: 'How much working capital do I need for national retail expansion?', a: 'Peak inventory investment for a national reset typically runs 4-8x current inventory level. For a specific example: adding a Kroger regional division of 750 stores across 4 DCs with 3 SKUs typically requires $400-500K in peak working capital (pipeline fill, distributor safety stock, DC safety stock, production run, slotting, free-fill, and initial trade spend). First-cycle receivables offset 40-50% within 90 days, so net cash outlay is typically $200-300K per major retailer expansion. Running two or three national expansions in parallel over 12-18 months can require $600K-1.5M+ in incremental working capital. Line of credit, factoring, or revenue-based financing usually becomes the operational constraint before production capacity does.' },
      { q: 'How much does OTIF non-compliance cost at Walmart?', a: 'Walmart currently charges 3% of shipment value for late delivery and 3% for short shipment, so a fully non-compliant shipment can pay 6% chargeback. A brand shipping $2M/year to Walmart at 85% OTIF pays approximately $60K/year in chargebacks; at 95% OTIF pays approximately $20K/year. The delta — $40K/year in preventable chargebacks — is the ROI on OTIF discipline. Prevention requires production and inventory planning that keeps safety stock at retailer-specific coverage, automated ASN generation, 3PL SLAs on on-window carrier pickup, and monthly OTIF scorecard review with root-cause coding for every failure.' },
      { q: 'When do I need multiple distribution centers?', a: 'The transition from single DC to dual DC (East + West coast) typically happens at $5-20M revenue when national account concentration makes cross-country freight the largest cost creep. Multi-DC (3-5 nodes) via a national 3PL usually makes sense at $20M+ when regional retailer DC networks (Kroger, Target, Walmart) each pull from a specific geography and cross-country freight compounds. The lane economics: shipping a 25-lb case from LA to Atlanta costs 3-4x the same case from Nashville to Atlanta. DC positioning becomes a margin decision at national scale, not just a service decision.' },
      { q: 'What is the difference between conventional and natural distribution?', a: 'Conventional distribution (Kroger, Target, Walmart, Costco) operates on tighter margin, higher volume, harder compliance, and slotting fees that step-change with scale. Natural distribution (Whole Foods, Sprouts, natural distributor networks via KeHE/UNFI) operates on higher margin, lower per-store velocity, softer compliance, and category buyer relationships that reward category story. Most CPG brands scale through natural first because category buyers give emerging brands more room; then move into conventional as they develop the compliance discipline and trade spend budget conventional requires.' },
      { q: 'How does trade spend change when expanding nationally?', a: 'Trade spend as a percentage of gross revenue typically rises 3-5 percentage points during a national expansion phase. Regional retailers often accept promotional support at 8-12% of gross; national conventional accounts often require 15-22% to fund endcap programs, coop, MDF, national promotional calendars, and category resets. Budget for it before signing the retailer. Brands that treat trade spend as a variable expense end up cutting programs mid-year when it exceeds forecast, which damages retailer relationships and undermines the launch.' },
      { q: 'How do I know if my brand is ready for national retail?', a: 'The operational readiness signals: 12+ months of clean sell-through data from at least one distributor (KeHE, UNFI) or a regional retail chain, an EDI capability that handles the transaction volume without generating chargebacks, a co-manufacturer with capacity commitment for 3-5x current volume, a demand planning discipline that survives peer review, a broker network or sales team covering target retailer categories, and financing (line of credit, factoring, or equity) that can absorb the peak working capital cycle. Missing any two of these is a signal to fix the operational foundation before pursuing the next retailer.' },
      { q: 'What operational systems do I need for national retail scale?', a: 'At national scale, the systems that break spreadsheet capacity are: ERP integrated with 3PL and EDI (NetSuite, Cin7 Omni, Acumatica), a demand planning tool with SKU/channel forecasting (Cogsy, Streamline, Netstock), automated EDI (SPS Commerce, TrueCommerce), PIM for retailer data syndication, and warehouse management if you run in-house fulfillment. Most brands migrate to enterprise ERP between $15M and $30M revenue. The migration is easier at $15M than at $30M, so plan the transition before it becomes a crisis.' },
    ],
    keyTakeaways: [
      'National expansion is a working-capital event before a revenue event. Peak investment 4–8x current inventory.',
      'Sequence the rollout. Each step builds operational capability the next step requires.',
      'Distribution architecture — DC positioning, multi-node 3PL — reshapes the P&L before production does.',
      'Retailer compliance stakes rise sharply. Walmart OTIF alone can cost 3–6% of shipment value.',
      'Organizational capability must scale in parallel. Sales, planning, finance, quality, and systems all need to level up together.',
    ],
    related: [
      { href: '/guides/retail-readiness', title: 'The Retail Readiness Bible', description: 'The operational playbook for launching in retail.' },
      { href: '/guides/distributor-onboarding-playbook', title: 'The CPG Distributor Onboarding Playbook', description: 'KeHE, UNFI, DPI, and the mechanics of distribution.' },
      { href: '/guides/cpg-working-capital-playbook', title: 'CPG Working Capital Playbook', description: 'The cash cycle math national expansion depends on.' },
    ],
    ctaHeading: <>National expansion, <span className="o">run as an operating program.</span></>,
    ctaCopy: 'Logic Agency runs national expansion as a connected operating program: sequencing, working capital, distribution architecture, retailer compliance, and organizational readiness. So the launch is a milestone, not a crisis.',
  },

  // =========================================================================
  // 9. CPG CHANNEL ECONOMICS (P1)
  // =========================================================================
  'cpg-channel-economics': {
    slug: 'cpg-channel-economics',
    stickyToc: true,
    ...authored,
    datePublished: '2026-09-23',
    dateModified: '2026-09-24',
    title: 'Amazon vs. DTC vs. Retail: A Channel Economics Framework for CPG Brands',
    titleBefore: 'Amazon vs. DTC vs. Retail:',
    titleAccent: 'A Channel Economics Framework',
    description: 'Worked side-by-side of DTC, Amazon FBA, and wholesale channels — gross margin, contribution margin, cash cycle, and the operating implications of channel choice.',
    keywords: 'CPG channel strategy, Amazon vs DTC vs retail, wholesale vs DTC economics, Amazon FBA fees CPG, channel economics framework, DTC vs Amazon margin, contribution margin channel',
    ogImage: '/images/og-cpg-channel-economics.jpg',
    readTime: '15 min read',
    lede: 'Channel choice is treated as a marketing decision. It is an operating decision. Every channel produces different unit economics, requires different packaging, changes cash cycles, and reshapes the P&L. This guide compares them side by side with real numbers.',
    audience: 'Founders, CFOs, and heads of sales at CPG brands evaluating channel mix or preparing to enter a new channel.',
    tldr: [
      '<strong>Gross margin by channel: DTC 60–70%, Amazon FBA 25–45%, wholesale independent 25–40%, national retail 15–35%, distributor 10–25%.</strong>',
      '<strong>Contribution margin is what matters, not gross.</strong> DTC contribution is 40–55% after ad spend; Amazon can be single digits after PPC.',
      '<strong>Each channel has different operational demands</strong> — packaging, cash cycle, planning cadence, compliance.',
      '<strong>Channel mix decisions should model 24-month cash impact</strong>, not just next-quarter revenue.',
      '<strong>The strongest brands don\'t "win Amazon" or "win DTC"</strong> — they build a mix where each channel plays a specific role and the operational cost of running the mix stays flat.',
    ],
    sections: [
      {
        id: 'framework',
        heading: 'The channel economics framework',
        lead: 'Every channel is a stack: gross revenue realization, COGS, channel-variable costs, and finally contribution margin. Compare channels at the contribution margin line, not at gross revenue or gross margin.',
        blocks: [
          {
            type: 'econ',
            columns: ['DTC ($40 MSRP)', 'Amazon FBA', 'Whole Foods (via UNFI)'],
            rows: [
              { label: 'Gross revenue per unit', values: [{ text: '$40.00' }, { text: '$40.00' }, { text: '$18.00 (wholesale)' }] },
              { label: 'Referral / channel fees', values: [{ text: '$0' }, { text: '−$6.00 (15%)', tone: 'r' }, { text: '$0 (included in wholesale)' }] },
              { label: 'Fulfillment / freight', values: [{ text: '−$5.00' }, { text: '−$5.75 (FBA)' }, { text: '−$1.20 (LTL to DC)' }] },
              { label: 'Storage / long-term fees', values: [{ text: '−$0.30' }, { text: '−$0.60' }, { text: '−$0.10 (3PL)' }] },
              { label: 'Ad spend / promo allocation', values: [{ text: '−$5.50 (CAC blend)', tone: 'r' }, { text: '−$4.80 (PPC + AMS)', tone: 'r' }, { text: '−$0.90 (MCB/coop)' }] },
              { label: 'Returns / damage / fraud', values: [{ text: '−$0.80' }, { text: '−$1.20' }, { text: '−$0.35' }] },
              { label: 'COGS (landed)', values: [{ text: '−$8.00' }, { text: '−$8.00' }, { text: '−$9.50 (retail-ready packaging)' }] },
              { label: 'Gross margin per unit', values: [{ text: '$32.00 (80%)', tone: 'g' }, { text: '$32.00 (80%)', tone: 'g' }, { text: '$8.50 (47%)', tone: 'g' }] },
              { label: 'Contribution margin per unit', values: [{ text: '$20.40 (51%)', tone: 'g' }, { text: '$13.65 (34%)', tone: 'g' }, { text: '$5.95 (33%)', tone: 'g' }] },
            ],
          },
          {
            type: 'callout',
            tone: 'real',
            label: 'The trap this reveals.',
            body: [
              'On gross margin, DTC and Amazon look identical (80% each). On contribution margin, DTC is 51% and Amazon is 34%. And the wholesale channel — which shows 47% gross margin — lands at 33% contribution, roughly equivalent to Amazon. Channel decisions made on gross margin alone consistently misprice the growth opportunity.',
            ],
          },
          {
            type: 'diagram',
            animate: true,
            caption: 'Gross margin vs contribution margin per channel — same product, different unit economics.',
            svg: `<svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart comparing sustainable material cost premiums and channel margin distributions" style="width:100%;height:auto;display:block">
              <text x="40" y="30" fill="#FF600A" font-family="Arial,sans-serif" font-size="12" font-weight="800" letter-spacing="2">GROSS vs CONTRIBUTION MARGIN — BY CHANNEL</text>
              <text x="40" y="50" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="14">Where the channel actually earns after all variable costs</text>
              ${(() => {
                const channels = [
                  { name: 'DTC', gross: 80, contrib: 51, color: '#FF600A' },
                  { name: 'Amazon FBA', gross: 80, contrib: 34, color: '#F3F3F3' },
                  { name: 'Wholesale (KeHE)', gross: 47, contrib: 30, color: 'rgba(255,255,255,0.55)' },
                ];
                const baseY = 90;
                const barW = 140;
                const gap = 60;
                const chartH = 200;
                return channels.map((c, i) => {
                  const x = 100 + i * (barW * 2 + gap);
                  const grossH = (c.gross / 100) * chartH;
                  const contribH = (c.contrib / 100) * chartH;
                  return `
                    <!-- Gross bar (light) -->
                    <rect x="${x}" y="${baseY + chartH - grossH}" width="${barW}" height="${grossH}" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)"/>
                    <text x="${x + barW/2}" y="${baseY + chartH - grossH - 10}" fill="rgba(255,255,255,0.65)" font-family="Arial,sans-serif" font-size="14" font-weight="800" text-anchor="middle">${c.gross}%</text>
                    <text x="${x + barW/2}" y="${baseY + chartH - grossH - 26}" fill="rgba(255,255,255,0.5)" font-family="Arial,sans-serif" font-size="10" text-anchor="middle" letter-spacing="1">GROSS</text>
                    <!-- Contribution bar (orange) -->
                    <rect x="${x + barW + 8}" y="${baseY + chartH - contribH}" width="${barW}" height="${contribH}" fill="${c.color}"/>
                    <text x="${x + barW + 8 + barW/2}" y="${baseY + chartH - contribH - 10}" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="14" font-weight="800" text-anchor="middle">${c.contrib}%</text>
                    <text x="${x + barW + 8 + barW/2}" y="${baseY + chartH - contribH - 26}" fill="rgba(255,255,255,0.65)" font-family="Arial,sans-serif" font-size="10" text-anchor="middle" letter-spacing="1">CONTRIB</text>
                    <!-- Channel label -->
                    <text x="${x + barW + 4}" y="${baseY + chartH + 24}" fill="#F3F3F3" font-family="Arial,sans-serif" font-size="13" font-weight="700" text-anchor="middle">${c.name}</text>
                    <!-- Delta -->
                    <text x="${x + barW + 4}" y="${baseY + chartH + 42}" fill="rgba(255,96,10,0.85)" font-family="Arial,sans-serif" font-size="11" font-weight="600" text-anchor="middle">Δ ${c.gross - c.contrib} pts eaten by channel costs</text>
                  `;
                }).join('');
              })()}
              <line x1="90" y1="290" x2="700" y2="290" stroke="rgba(255,255,255,0.2)"/>
            </svg>`,
          },
          { type: 'h3', text: 'Same product, four channels — pick a lens' },
          { type: 'p', html: 'Click through to see how the unit-economics case actually reads at each channel on the same $40-SRP item.' },
          {
            type: 'tabs',
            label: 'Channel unit-economics comparison',
            tabs: [
              {
                label: 'DTC',
                heading: 'Direct-to-consumer',
                body: '<p>You keep the full retail price and take on the full cost to reach the shopper. Highest gross per unit; also the highest customer-acquisition cost line item.</p>',
                metrics: [
                  { label: 'Gross margin', value: '65–75%' },
                  { label: 'Contribution', value: '15–35%', note: 'after acquisition + fulfillment' },
                  { label: 'Working capital', value: 'Low', note: 'you receive cash at checkout' },
                ],
                list: [
                  '<strong>Wins:</strong> full price, direct customer data, brand experience control, subscription revenue possible.',
                  '<strong>Costs to model:</strong> paid acquisition (Meta/Google 25–40% of gross), fulfillment ($5–10 per order), payment processing (2.5–3.5%), returns (5–15% depending on category), platform fees.',
                  '<strong>Where founders overestimate:</strong> LTV assumptions. Compute contribution margin per new customer, not per order.',
                ],
              },
              {
                label: 'Amazon FBA',
                heading: 'Amazon FBA',
                body: '<p>Access to Prime shopper demand, at Amazon\'s margin structure. Referral fee, FBA fulfillment fee, storage fee, and ad spend are non-negotiable and structural.</p>',
                metrics: [
                  { label: 'Referral fee', value: '15%', note: 'most CPG categories' },
                  { label: 'FBA fulfillment', value: '$3–8/unit', note: 'size-tier dependent' },
                  { label: 'Ad spend', value: '10–25%', note: 'to hold search rank' },
                ],
                list: [
                  '<strong>Contribution margin often 5–20%</strong> after all fees and ad spend — before LTSF (long-term storage) and returns.',
                  '<strong>Cash cycle:</strong> Amazon pays every 14 days (net of chargebacks). Better than wholesale, worse than DTC.',
                  '<strong>Where it works:</strong> subscribe-and-save tail, discovery of DTC-hostile categories, incremental volume for existing production.',
                  '<strong>Where it breaks:</strong> hero-SKU strategies where all margin depends on Amazon rank and one policy change or ad-cost spike collapses the P&amp;L.',
                ],
              },
              {
                label: 'Wholesale (direct)',
                heading: 'Wholesale — direct to retailer',
                body: '<p>You ship to the retailer\'s DC and invoice them on Net 30–60. Wholesale price is typically 40–55% of retail. Chargebacks, MDF, and trade programs become real line items.</p>',
                metrics: [
                  { label: 'Wholesale price', value: '40–55%', note: 'of retail' },
                  { label: 'Chargebacks', value: '3–8%', note: 'of gross wholesale' },
                  { label: 'Cash cycle', value: 'Net 30–60' },
                ],
                list: [
                  '<strong>Contribution margin often 15–30%</strong> after slotting, MCB, free-fill, damages, and trade spend.',
                  '<strong>Working capital demand:</strong> highest of any channel — 3–6 months of inventory tied up between production and receivable collection.',
                  '<strong>Where it works:</strong> proven velocity products at scale; high-loyalty categories; brands with 12+ months of runway.',
                  '<strong>Where it breaks:</strong> brands who chase distribution before operational capability catches up — chargebacks compound faster than revenue.',
                ],
              },
              {
                label: 'Distributor',
                heading: 'Distributor (KeHE / UNFI / DPI)',
                body: '<p>Distributor buys from you at a wholesale price ~5–10 points below what a direct retailer would pay, then sells to their retailer accounts. You give up margin points for access to thousands of stores.</p>',
                metrics: [
                  { label: 'Effective wholesale', value: '35–48%', note: 'of retail' },
                  { label: 'Retail reach', value: '5–35K stores', note: 'per major distributor' },
                  { label: 'Contribution', value: '10–25%', note: 'after MCB + broker + slotting' },
                ],
                list: [
                  '<strong>What you get for the margin give-up:</strong> single invoice per DC, one EDI relationship, category-review calendar, reach.',
                  '<strong>What still eats your margin:</strong> MCB / promotional support (1.5–3% of gross), broker commissions (3–5%), free-fill programs, slotting.',
                  '<strong>Where it works:</strong> natural / specialty categories where distributor gatekeeps retailer access.',
                  '<strong>Where it breaks:</strong> brands who don\'t run velocity plans post-launch — distributors delist SKUs that don\'t hit 4+ units/store/week within two quarters.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'dtc',
        heading: 'DTC: high contribution, high acquisition cost',
        blocks: [
          { type: 'p', html: 'DTC captures the full retail price. It is the highest-contribution channel per unit — when acquisition cost is under control. When it is not, contribution can collapse to zero or negative.' },
          { type: 'h3', text: 'DTC economic realities' },
          {
            type: 'list',
            items: [
              '<strong>CAC (Customer Acquisition Cost):</strong> Category-dependent. Beauty and wellness $30-80; food and beverage $15-50; commodity CPG $10-30. Track blended CAC (paid + organic) not just paid CAC.',
              '<strong>LTV (Lifetime Value):</strong> Repeat purchase rate is the single biggest LTV driver. Subscription programs can push LTV to 3-4x first-order value; one-time purchase categories often see LTV at 1.2-1.8x first order.',
              '<strong>Payback period:</strong> Time from CAC investment to contribution margin recovery. Under 3 months is aggressive; 6-9 months is common; 12+ months is a warning.',
              '<strong>Fulfillment cost:</strong> $5-8 per parcel for typical CPG. DIM weight optimization is the fastest lever. Free shipping thresholds reshape AOV.',
              '<strong>Contribution margin:</strong> 40-55% after CAC, fulfillment, storage, returns, and payment processing.',
            ],
          },
          {
            type: 'callout',
            tone: 'warn',
            label: 'The DTC paid-media trap.',
            body: [
              'Meta and Google CPMs rose 40-70% between 2022 and 2026 for most CPG categories. Brands that grew on paid acquisition in the low-CPM era and did not build organic, retention, or brand-driven acquisition are now paying 2-3x per customer for the same LTV. If your DTC channel plan requires $50 CAC, model 2027 at $75 CAC before committing capital.',
            ],
          },
        ],
      },
      {
        id: 'amazon',
        heading: 'Amazon FBA: the fee stack that eats gross margin',
        blocks: [
          { type: 'p', html: 'Amazon FBA looks like DTC on gross revenue and gross margin, but the fee stack — referral, FBA fulfillment, storage, long-term storage, PPC, promotional programs, returns — moves the actual economics much closer to a wholesale channel.' },
          {
            type: 'table',
            headers: ['Fee type', 'Range', 'Notes'],
            rows: [
              ['Referral fee', '15% (most categories) / 8% (grocery <$15)', 'Percent of item sale price'],
              ['FBA fulfillment', '$3.20–8.00 per unit', 'Based on size and weight tier; varies by season'],
              ['Monthly storage', '$0.87–2.40 per cubic foot', 'Rises 2-3x in Q4'],
              ['Aged inventory surcharge', '$0.50–3.00 per unit', 'Applies at 181 days for most categories'],
              ['Removal / disposal', '$1.00–2.00 per unit', 'When you clear excess inventory'],
              ['PPC / Sponsored Products', '10–25% of sales for scaling brands', 'ACOS 30-40% is common; TACOS 15-25% for growth mode'],
              ['Promotional programs (Deals, Coupons)', '2–10% of promo sales + fixed program fees', 'Vary by program type'],
              ['Amazon Vine, launch programs', 'Fixed cost per participant', 'Optional but common for launches'],
            ],
          },
          { type: 'h3', text: 'Amazon 1P (Vendor Central) is different from 3P (Seller Central)' },
          { type: 'p', html: 'Vendor Central sells to Amazon at a wholesale price and Amazon markets and sells to consumers. Economics resemble a distributor channel: lower per-unit margin (15-30% typical), Amazon controls pricing and promotion, and Amazon deductions (coop, MDF, chargebacks, post-audit) run 8-15% of gross. Seller Central (3P FBA) keeps you in control of pricing, listing, and promotion, at the higher fee stack above.' },
        ],
      },
      {
        id: 'wholesale',
        heading: 'Wholesale and retail: the volume channel',
        blocks: [
          { type: 'p', html: 'Wholesale channels — independent retail, chain retail, distributor — trade lower per-unit margin for higher volume, longer relationships, and shelf presence that drives brand awareness beyond the channel itself.' },
          {
            type: 'table',
            headers: ['Sub-channel', 'Typical wholesale % of MSRP', 'Typical contribution margin'],
            rows: [
              ['Independent retail (direct)', '45–55%', '25–35%'],
              ['Regional chain (via distributor)', '32–42%', '15–25%'],
              ['National chain (direct — Target, Costco, etc.)', '38–48% with chargeback/promo drag', '10–20%'],
              ['Distributor (KeHE, UNFI, DPI)', '30–42%', '10–18%'],
              ['Foodservice', '35–48%', '15–25%'],
              ['International distributor', '25–38%', '5–15%'],
            ],
          },
          { type: 'p', html: 'The contribution math for wholesale depends heavily on freight, deductions, and trade spend management. A well-run wholesale channel can hold 15-25% contribution; a poorly-run one loses money after chargebacks. Covered in depth in our <a href="/guides/cpg-gross-margin-playbook">Gross Margin Playbook</a>.' },
        ],
      },
      {
        id: 'operational-implications',
        heading: 'Operational implications of channel choice',
        lead: 'Each channel has different packaging, planning, cash cycle, and compliance demands. Below is what each requires operationally.',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Packaging', body: 'DTC: e-commerce durable, unboxing quality. Amazon: SIOC-certified, damage-resistant, frustration-free. Wholesale: retail-ready, case-pack, pallet-config, retailer-spec labeling.' },
              { title: 'Planning cadence', body: 'DTC: daily order forecast, weekly ad spend adjustment. Amazon: weekly inventory replenishment, biweekly PPC and promo review. Wholesale: monthly S&OP tied to retailer PO patterns.' },
              { title: 'Cash cycle', body: 'DTC: cash at checkout, cash-out on ad spend leads cash-in. Amazon FBA: cash-in 14 days after sale. Wholesale: Net 30-90 receivables, cash-out for production 60-180 days before cash-in.' },
              { title: 'Compliance', body: 'DTC: consumer protection, ad claims, tax nexus. Amazon: listing accuracy, ingredient/claim policies, brand registry. Wholesale: retailer routing guides, EDI, ASN, chargeback management.' },
              { title: 'Data quality', body: 'DTC: your data, high fidelity. Amazon: aggregate data, limited customer info. Wholesale: distributor and SPINS data, 4-12 week lag.' },
              { title: 'Brand control', body: 'DTC: full control. Amazon: content control but pricing/promotion tension. Wholesale: variable by retailer; MAP policy matters.' },
            ],
          },
        ],
      },
      {
        id: 'mix-decisions',
        heading: 'Channel mix decisions',
        lead: 'Most CPG brands need a mix. The question is not "which channel wins" but "what mix best supports the operating model, cash cycle, and growth plan."',
        blocks: [
          { type: 'p', html: 'A common evolution: launch DTC + Amazon (Y1-2), add regional independents and distributor (Y2-3), scale national retail (Y3+), optimize channel mix (ongoing). At maturity, mix might be 20% DTC, 25% Amazon, 55% wholesale — with each channel playing a specific strategic role.' },
          {
            type: 'wired',
            tag: 'Operator move',
            heading: 'Model 24 months, not next quarter',
            body: [
              'The channel decision that looks best on next-quarter revenue often looks worst on 24-month cash. Amazon can generate immediate revenue with negative contribution when PPC is included. Wholesale can generate immediate slotting cost with revenue delayed by 6-12 months. Model both — cash-in timing, cash-out timing, working capital tied up — over 24 months before making the mix decision.',
            ],
          },
          {
            type: 'cta',
            label: 'Rebalancing channel mix?',
            body: 'We model channel-mix decisions on contribution and 24-month cash — not next quarter\'s topline — and connect the recommendation to the operating decisions required to act on it.',
            href: '/how-we-work',
            linkText: 'See how Logic works →',
          },
        ],
      },
      {
        id: 'when-logic',
        heading: 'When Logic gets involved',
        blocks: [
          {
            type: 'caseStudy',
            tag: 'From the ops floor',
            heading: 'The B2B hardware channel that ran on retail-adjacent economics',
            body: [
              'On Audio Enhancement — a B2B classroom hardware brand — channel choice was structurally different from CPG. The right answer was a packaging system that functioned as a daily-use product hub rather than just a shipping container, and premium overseas production at zero additional landed cost.',
              'Result: 20% shipping savings through right-sizing and 4+ SKU expansion on the same operating model. The lesson: channel economics is category-specific. The DTC vs Amazon vs retail framework is a starting point, not the whole answer.',
            ],
          },
          { type: 'p', html: 'Channel economics engagements typically start when a brand is deciding whether to enter or exit a channel, when growth in one channel is exposing operational weakness in another, or when investors ask for a channel-mix defense.' },
          {
            type: 'list',
            items: [
              'Full contribution margin analysis by channel using 12 months of actuals',
              'Fee-stack disaggregation for Amazon (FBA fees, PPC, promotional programs)',
              'Cash cycle modeling for each channel',
              'Channel-specific packaging and operational requirements audit',
              '24-month channel-mix model with sensitivity to acquisition cost and retailer growth',
              'Recommended sequencing and investment priority',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'What is the difference between gross margin and contribution margin?', a: 'Gross margin is net revenue minus COGS (product plus inbound freight). Contribution margin is gross margin minus channel-variable costs: outbound freight and fulfillment, ad spend, promotional deductions, chargebacks, returns and damages. Contribution margin is the number that determines whether a channel is actually profitable to scale. A brand can have 80% gross margin on Amazon and land at 10-15% contribution after PPC, referral fees, and FBA costs. A brand with 47% gross margin on wholesale can land at 25% contribution when freight and deductions are managed. Investors and lenders increasingly look at contribution margin by channel, not blended gross.' },
      { q: 'What Amazon FBA fees should I budget for?', a: 'Referral fee 15% for most categories (8% for grocery under $15), FBA fulfillment fee $3.20-8.00 per unit based on size and weight tier, monthly storage $0.87-2.40 per cubic foot (2-3x in Q4), aged inventory surcharge $0.50-3.00 per unit at 181 days, removal/disposal $1.00-2.00 per unit, PPC ad spend 10-25% of sales for scaling brands (ACOS 30-40%, TACOS 15-25% for growth mode), and promotional program fees for Deals and Coupons. Total fee stack typically consumes 35-55% of gross revenue for scaling FBA brands. Model contribution margin, not gross margin, when evaluating whether the channel is worth scaling.' },
      { q: 'Is DTC or Amazon more profitable for CPG?', a: 'DTC typically produces higher contribution margin per unit when CAC is under control — often 40-55% contribution after acquisition, fulfillment, and returns. Amazon FBA typically produces 20-35% contribution after full fee stack and PPC. On absolute contribution dollars, the answer depends on volume: DTC is often more profitable per unit; Amazon often produces higher total volume at lower per-unit contribution. The best strategy for most CPG brands is not "choose one" but build a mix where each channel plays a strategic role — DTC for brand and margin, Amazon for velocity and discovery, wholesale for volume and shelf presence.' },
      { q: 'What is TACOS on Amazon and why does it matter?', a: 'TACOS (Total Advertising Cost of Sales) is Amazon ad spend divided by total Amazon sales, including organic sales driven by ad activity. It differs from ACOS (Advertising Cost of Sales), which only counts sales attributed to the ad. TACOS matters because it reflects the true cost of your Amazon presence — including the organic sales your ad activity supports. TACOS of 15-25% is common for scaling brands; TACOS above 30% signals ad dependency that will collapse if ad spend pauses; TACOS under 10% signals either strong organic momentum or under-investment in growth.' },
      { q: 'How is Vendor Central different from Seller Central on Amazon?', a: 'Vendor Central (Amazon 1P) sells product to Amazon at a wholesale price. Amazon owns pricing, promotion, listing, and consumer sales. Economics resemble distributor channels: lower per-unit margin (15-30%), Amazon controls pricing (can be a MAP-policy issue), and deductions (coop, MDF, chargebacks, post-audit) run 8-15% of gross. Seller Central (Amazon 3P FBA) keeps you as the seller of record with full control of pricing, listing content, and promotion — at the fee stack above. Most emerging CPG brands operate 3P FBA; some invitation-only or category-specific relationships operate 1P. Some brands run hybrid.' },
      { q: 'What packaging changes are required for each channel?', a: 'DTC requires e-commerce durable packaging designed for parcel shipping, with unboxing quality that supports brand and social sharing. Amazon FBA requires SIOC (Ships In Own Container) certification for eligible items, frustration-free packaging certification for premium items, damage-resistant construction, and prep compliance (poly bags, labels, expiration dates). Wholesale requires retail-ready packaging: case-pack configuration matching retailer specs, pallet configuration meeting retailer routing, GS1-verified barcodes, retailer-specific labeling and case labels, and packaging structural durability for pallet transit. A brand entering all three channels often needs three different packaging SKUs — or an integrated pack that meets all three sets of requirements at higher unit cost.' },
      { q: 'How does channel choice affect cash cycle?', a: 'DTC produces cash at checkout — the shortest cash cycle. Cash-out for ad spend often leads cash-in by 30-60 days depending on payback period. Amazon FBA settles bi-weekly (14 days after sale), with reserves held for returns and disputes. Wholesale operates on Net 30-90 receivables from retailers or distributors, and cash-out for production happens 60-180 days before cash-in — so the total cash cycle can extend to 120-250 days. Channel mix decisions have direct cash implications: shifting toward wholesale stretches the cash cycle and requires more working capital; shifting toward DTC compresses it but exposes to acquisition cost variability.' },
      { q: 'What is a good channel mix for a scaling CPG brand?', a: 'Mix depends on category, stage, and strategy. A common maturity mix for natural / specialty CPG: 15-25% DTC (highest contribution, brand control), 20-30% Amazon (velocity and discovery), 40-60% wholesale (volume and shelf presence). Beauty and personal care sometimes lean more DTC; grocery and beverage often lean more wholesale. The strategic question is not "what percent" but "what role does each channel play" — DTC often for margin and customer relationship, Amazon for scale and search visibility, wholesale for shelf presence and volume. Brands that build a mix where each channel plays a defined role tend to outperform brands that let mix happen by default.' },
    ],
    keyTakeaways: [
      'Compare channels at contribution margin, not gross margin. The two often diverge sharply.',
      'DTC: 40–55% contribution when CAC is under control. Track blended, not just paid.',
      'Amazon FBA: 20–35% contribution after full fee stack. TACOS matters more than ACOS.',
      'Wholesale: 10–30% contribution depending on freight, deductions, and trade spend management.',
      'Model 24-month cash impact of channel decisions, not just next-quarter revenue.',
    ],
    related: [
      { href: '/guides/cpg-gross-margin-playbook', title: 'CPG Gross Margin Playbook', description: 'The margin waterfall and leak points.' },
      { href: '/guides/cpg-working-capital-playbook', title: 'CPG Working Capital Playbook', description: 'The cash cycle math for each channel.' },
      { href: '/guides/regional-to-national-retail-expansion', title: 'From Regional to National Retail Expansion', description: 'Scaling the wholesale channel.' },
    ],
    ctaHeading: <>Channel decisions grounded in <span className="o">contribution, not gross.</span></>,
    ctaCopy: 'Logic Agency runs channel economics analysis and mix modeling: 12-month contribution margin by channel, fee-stack disaggregation, cash-cycle mapping, and clear operating recommendations.',
  },

  // =========================================================================
  // 10. CPG OPERATIONS KPIs (P1)
  // =========================================================================
  'cpg-operations-kpis': {
    slug: 'cpg-operations-kpis',
    stickyToc: true,
    ...authored,
    datePublished: '2026-09-24',
    dateModified: '2026-09-24',
    title: 'The CPG Operations KPI Dashboard: The Metrics That Actually Matter at Each Growth Stage',
    titleBefore: 'The CPG Operations KPI Dashboard:',
    titleAccent: 'What to Track at Each Stage',
    description: '15 metrics that actually matter — with formulas, target ranges by growth stage, and where each number lives in your systems. Demand, supply, financial, and quality.',
    keywords: 'CPG operations KPIs, supply chain KPIs, CPG metrics dashboard, fill rate CPG, OTIF CPG, inventory turns CPG, forecast accuracy CPG, gross margin CPG, days of supply, cash conversion cycle CPG',
    ogImage: '/images/og-cpg-operations-kpis.jpg',
    readTime: '13 min read',
    lede: 'Every CPG operator has a spreadsheet full of numbers. Very few have a dashboard that leads to action. This guide is the shortlist: the metrics that actually drive decisions, the formulas, the target ranges by growth stage, and the systems where each number lives.',
    audience: 'Founders, CFOs, and heads of ops at CPG brands from pre-launch through $50M who need to build a KPI dashboard that produces decisions, not just reports.',
    tldr: [
      '<strong>15 metrics matter.</strong> Everything else is diagnostic or downstream.',
      '<strong>Group them into four buckets:</strong> demand, supply, financial, and quality.',
      '<strong>Target ranges shift with stage.</strong> A pre-launch brand tracks different KPIs than a $20M brand.',
      '<strong>Every KPI has a data source, an owner, and a cadence.</strong> KPIs without owners are wallpaper.',
      '<strong>A dashboard is a decision-support tool.</strong> If the number does not lead to a decision, it does not belong on the dashboard.',
    ],
    sections: [
      {
        id: 'principles',
        heading: 'Dashboard design principles',
        blocks: [
          {
            type: 'cards',
            items: [
              { title: 'Every KPI has an owner', body: 'One person is accountable for the number and the action when it moves out of range. If no owner exists, do not track it.' },
              { title: 'Every KPI has a cadence', body: 'Weekly, monthly, or quarterly. Match the cadence to the decision frequency. Weekly numbers that never lead to weekly action are noise.' },
              { title: 'Every KPI has a data source', body: 'Named system, named report, named refresh time. If the source is a manual export, it is fragile and will break.' },
              { title: 'Every KPI has a target range', body: 'Not a target number. A range with a floor and ceiling. Outside the range triggers a specific action.' },
              { title: 'The dashboard fits on one screen', body: 'If it does not, it will not be read. The 15-metric ceiling is real.' },
              { title: 'Trend matters more than snapshot', body: 'Every metric shows a rolling 6-12 week trend. A single-point snapshot hides direction.' },
            ],
          },
        ],
      },
      {
        id: 'demand-metrics',
        heading: 'Demand metrics',
        lead: 'What is happening on the sales side and how well we\'re predicting it.',
        blocks: [
          {
            type: 'table',
            headers: ['Metric', 'Formula / definition', 'Target range', 'Owner / cadence'],
            rows: [
              ['<strong>Forecast Accuracy (MAPE)</strong>', 'MAPE = |Actual − Forecast| / Actual, averaged across SKUs weighted by revenue', '15–25% is typical for scaling; <10% excellent; >35% needs work', 'Ops lead / monthly'],
              ['<strong>Sell-Through Velocity</strong>', 'Cases sold per store per week (or units per SKU per week for DTC)', 'Category-dependent; compare to category norm from SPINS/IRI', 'Sales / weekly'],
              ['<strong>Channel Mix % Contribution</strong>', 'Revenue and contribution margin per channel as % of total', 'Strategic; monitor trend more than snapshot', 'CFO / monthly'],
              ['<strong>Retailer PO Cycle Time</strong>', 'Average days between retailer POs by account', 'Trend metric; sudden extension signals declining velocity or trade spend cut', 'Sales / monthly'],
            ],
          },
        ],
      },
      {
        id: 'supply-metrics',
        heading: 'Supply metrics',
        lead: 'What is happening in production and inventory.',
        blocks: [
          {
            type: 'table',
            headers: ['Metric', 'Formula / definition', 'Target range', 'Owner / cadence'],
            rows: [
              ['<strong>Fill Rate</strong>', '(Units shipped ÷ Units ordered) × 100', '95–99% depending on retailer expectation', 'Ops lead / weekly'],
              ['<strong>OTIF (On-Time In-Full)</strong>', '% of shipments arriving on-window at full quantity', '90%+ acceptable; 95%+ target for Walmart/Target', 'Ops lead / weekly'],
              ['<strong>Inventory Turns</strong>', 'COGS ÷ Average Inventory Value', '4–8x annually is typical for scaling CPG; higher for velocity products, lower for launch inventory', 'CFO / monthly'],
              ['<strong>Days of Supply (by SKU)</strong>', 'On-Hand Inventory ÷ Average Daily Sales', '30–60 days typical; category and lead-time dependent', 'Ops lead / weekly'],
              ['<strong>Stockout Rate</strong>', 'SKU-days with zero inventory ÷ total SKU-days', '<2% for top SKUs; higher tolerance for tail SKUs', 'Ops lead / weekly'],
              ['<strong>Production Adherence</strong>', 'Actual production ÷ planned production, unit-weighted', '95%+ target; below signals capacity or planning misalignment', 'Ops lead / weekly'],
            ],
          },
        ],
      },
      {
        id: 'financial-metrics',
        heading: 'Financial metrics',
        lead: 'The numbers that determine whether the operation is creating value.',
        blocks: [
          {
            type: 'table',
            headers: ['Metric', 'Formula / definition', 'Target range', 'Owner / cadence'],
            rows: [
              ['<strong>Gross Margin (by channel)</strong>', 'Net revenue − COGS, per channel', 'DTC 60–70%, Amazon 25–45%, wholesale 15–35% — channel-specific', 'CFO / monthly'],
              ['<strong>Contribution Margin (by channel)</strong>', 'Gross margin − channel-variable costs (fulfillment, ad spend, deductions)', 'DTC 40–55%, Amazon 20–35%, wholesale 10–30%', 'CFO / monthly'],
              ['<strong>Cash Conversion Cycle</strong>', 'Days Inventory + Days Receivables − Days Payables', 'Category-dependent; 90–180 days typical for scaling CPG', 'CFO / monthly'],
              ['<strong>Deductions % of Gross Wholesale</strong>', 'Total wholesale deductions ÷ gross wholesale invoice', '8–18% typical; goal is to disaggregate and reduce by category', 'CFO / monthly'],
              ['<strong>Freight % of Revenue</strong>', 'Total inbound + outbound freight ÷ revenue', '5–12% typical; track by lane and mode', 'Ops lead / monthly'],
            ],
          },
          {
            type: 'example',
            title: 'Fill rate — what the number actually means, worked live',
            body: [
              'Fill rate looks simple until a retailer sends the first chargeback that says otherwise. Below is the calculation as it appears on a real month for a mid-sized natural CPG brand.',
              'Two definitions matter: <strong>unit fill rate</strong> (units shipped ÷ units ordered) and <strong>OTIF</strong> (on-time in-full — the retailer\'s own metric that punishes late or short deliveries).',
            ],
            rows: [
              { label: 'Cases ordered by retailer in month', value: '5,200' },
              { label: 'Cases shipped on the requested date', value: '4,830' },
              { label: 'Cases shipped late (2–4 days after requested)', value: '210' },
              { label: 'Cases short-shipped (never delivered)', value: '160' },
              { label: '<strong>Unit fill rate</strong> = 5,040 ÷ 5,200', value: '<strong>96.9%</strong>' },
              { label: '<strong>On-time fill rate</strong> = 4,830 ÷ 5,200', value: '<strong>92.9%</strong>' },
              { label: 'OTIF penalty threshold (Walmart, Target)', value: '≥ 98%', tone: 'neg' },
              { label: 'Chargeback exposure (assume $250 per late/short case at $1/case penalty)', value: '−$370', tone: 'neg' },
            ],
            result: '<strong>The gap between "unit fill rate" and "OTIF" is where most brands are blindsided.</strong> A 96.9% unit fill rate reads healthy, but the OTIF at Walmart or Target is 92.9% — deep into penalty territory. Track both numbers, per retailer. If your reporting only shows the higher one, you are reading the wrong number.',
          },
        ],
      },
      {
        id: 'quality-metrics',
        heading: 'Quality and risk metrics',
        lead: 'What might break, and how well we\'re catching it before it does.',
        blocks: [
          {
            type: 'table',
            headers: ['Metric', 'Formula / definition', 'Target range', 'Owner / cadence'],
            rows: [
              ['<strong>Damage Rate</strong>', 'Damaged units ÷ shipped units', '<0.5% for parcel; <1% for LTL/pallet', 'Ops lead / monthly'],
              ['<strong>Return Rate (DTC/Amazon)</strong>', 'Returned units ÷ shipped units', '2–8% for DTC; 3–10% for Amazon; category-dependent', 'Ops lead / monthly'],
              ['<strong>Quality Escape Rate</strong>', 'Batches with quality issues ÷ total batches', '<2% for a mature operation', 'Quality / monthly'],
              ['<strong>Chargeback Rate (Retailer)</strong>', 'Chargeback $ ÷ gross wholesale $ per retailer', '<1% for well-run wholesale ops; 3–5% signals systemic issue', 'Ops lead / monthly'],
            ],
          },
        ],
      },
      {
        id: 'by-stage',
        heading: 'How the dashboard changes by growth stage',
        lead: 'A pre-launch brand does not need a fill rate metric. A $30M brand cannot manage without one. Click through to see what to track — and what to ignore — at each stage.',
        blocks: [
          {
            type: 'tabs',
            label: 'Operations KPI dashboard by revenue stage',
            tabs: [
              {
                label: 'Pre-launch → $2M',
                heading: 'Prove product-market fit',
                body: '<p>The metrics that matter at this stage are the ones that tell you whether the product is selling and whether you have cash to keep going. Everything else is premature.</p>',
                metrics: [
                  { label: 'Metrics to track', value: '4–6' },
                  { label: 'Cadence', value: 'Weekly' },
                  { label: 'Tooling', value: 'Spreadsheet' },
                ],
                list: [
                  '<strong>Track:</strong> sell-through velocity (units/store/week for wholesale; units/day for DTC), DTC/Amazon contribution margin, cash runway (weeks), damage rate.',
                  '<strong>Ignore:</strong> forecast accuracy (no history yet), OTIF (no retailer count that matters), turns (inventory is too small to be meaningful).',
                  '<strong>Common trap:</strong> building an elaborate dashboard before the product proves out. Discipline &gt; sophistication.',
                ],
              },
              {
                label: '$2M → $10M',
                heading: 'Build repeatable operations',
                body: '<p>You have production rhythm, at least one distributor, and enough retailers that mistakes create pattern. Introduce a monthly planning meeting; hire (or outsource) the owner for each metric.</p>',
                metrics: [
                  { label: 'Metrics to track', value: '8–10' },
                  { label: 'Cadence', value: 'Weekly + monthly S&OP' },
                  { label: 'Tooling', value: 'Sheets + planning tool' },
                ],
                list: [
                  '<strong>Add:</strong> forecast accuracy (MAPE by SKU), fill rate (%), inventory turns, deductions % of gross wholesale, cash conversion cycle.',
                  '<strong>Owner map:</strong> founder or COO owns forecast; planner or ops manager owns inventory + fill; controller owns cash cycle.',
                  '<strong>Common trap:</strong> reading a single-month movement as a trend. Require three months before declaring a metric moved.',
                ],
              },
              {
                label: '$10M → $30M',
                heading: 'Manage complexity',
                body: '<p>Multi-DC, multi-retailer, multi-channel. The metrics stop being aggregates; they must decompose by retailer, by DC, by channel.</p>',
                metrics: [
                  { label: 'Metrics to track', value: '12–15' },
                  { label: 'Cadence', value: 'Daily ops + monthly exec' },
                  { label: 'Tooling', value: 'ERP or Cin7 + BI layer' },
                ],
                list: [
                  '<strong>Add:</strong> OTIF by retailer, chargeback rate by retailer/type, contribution margin by channel, forecast accuracy at SKU × DC level.',
                  '<strong>Retire:</strong> blended metrics that hide the story. "Company fill rate is 96%" is fine — until you learn that Kroger fill rate is 88% and Kroger is 40% of gross.',
                  '<strong>Common trap:</strong> proliferation of dashboards. Each metric needs a decision it triggers. If no decision changes, retire the metric.',
                ],
              },
              {
                label: '$30M+',
                heading: 'Institutionalize discipline',
                body: '<p>All 15 core metrics live on a refreshed dashboard. Retailer-facing scorecards. Category-specific KPIs (velocity per doors, SPINS panel share, Amazon TACOS). Full ERP integration; automated data pipelines.</p>',
                metrics: [
                  { label: 'Metrics to track', value: '20+ live' },
                  { label: 'Cadence', value: 'Daily + weekly + monthly' },
                  { label: 'Tooling', value: 'Full ERP + BI + retailer portals' },
                ],
                list: [
                  '<strong>Add:</strong> retailer-specific scorecards (Walmart Retail Link, Target POL, Amazon Vendor Central), category share metrics (SPINS, Circana, Numerator), Amazon TACOS by SKU.',
                  '<strong>Governance:</strong> KPI review is a monthly executive rhythm; metric definitions have owners and change-control.',
                  '<strong>Common trap:</strong> the dashboard becomes an artifact instead of a working document. Kill any metric no exec has referenced in a decision for 90 days.',
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'tools',
        heading: 'Where each metric actually lives',
        blocks: [
          {
            type: 'cta',
            label: 'Have the data but no dashboard?',
            body: 'We build the KPI dashboard and the operating rhythm around it — metric selection, data pipelines, decision owners, and weekly review.',
            href: '/how-we-work',
            linkText: 'See how Logic works →',
          },
          {
            type: 'table',
            headers: ['Metric family', 'Source system(s)', 'Typical tools'],
            rows: [
              ['Demand / forecast', 'DTC platform, Amazon Seller Central, SPINS/IRI, retailer portals', 'Shopify, Amazon Brand Analytics, SPINS, Cogsy, Streamline'],
              ['Supply / inventory', 'ERP, WMS, 3PL portal, distributor portal', 'NetSuite, Cin7, Extensiv, 3PL Central, ShipBob, KeHE/UNFI portals'],
              ['Financial', 'Accounting, ERP, deduction management', 'QuickBooks, NetSuite, Xero, PromoMash for deductions'],
              ['Quality', 'Batch records, retailer scorecards, customer service tickets', 'Co-manufacturer batch reports, retailer scorecard portals, Gorgias / Zendesk'],
            ],
          },
        ],
      },
      {
        id: 'when-logic',
        heading: 'When Logic gets involved',
        blocks: [
          { type: 'p', html: 'KPI engagements typically start when a founder or CFO realizes they have data but no decisions, when investor reporting starts requiring numbers no one currently tracks, or when growth exposes operational blind spots.' },
          {
            type: 'list',
            items: [
              'KPI shortlist tailored to your stage, category, and channel mix',
              'Data-source mapping — where each number lives and how it flows',
              'Owner and cadence assignment',
              'Dashboard build (Google Sheets, Airtable, or purpose-built depending on stage)',
              'Weekly and monthly review rhythm establishment',
              'Quarterly KPI evolution review as the business grows',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'What KPIs should a small CPG brand track?', a: 'A pre-launch to $2M brand should focus on: sell-through velocity (units per SKU per week), DTC and Amazon contribution margin, cash runway (months of operating cash), and damage/return rate. Add fill rate and forecast accuracy as wholesale volume grows above $1M. The point at this stage is establishing the discipline of measuring and acting on numbers — sophistication comes with scale. A weekly review of 4-6 metrics on a shared spreadsheet is more valuable than a 30-metric dashboard nobody looks at.' },
      { q: 'What is a good fill rate for a CPG brand?', a: 'Fill rate expectations depend on the retailer. Independent retail typically accepts 90-95% fill; regional chains expect 95-98%; national retailers (Target, Walmart, Kroger) increasingly require 97-99%+. Below the retailer\'s expectation, chargebacks accrue and category buyer relationships strain. Above 99%, you are typically carrying excess safety stock that ties up working capital. Match target fill rate to the retailer\'s scorecard requirement, then tune inventory strategy to hit it consistently rather than aspirationally.' },
      { q: 'What is OTIF and how do I calculate it?', a: 'OTIF (On-Time In-Full) measures the percentage of shipments arriving at the retailer\'s DC within the appointed window at the full quantity ordered. Formula: (Shipments on-time AND in-full) ÷ Total Shipments. Walmart currently charges 3% of shipment value for late and 3% for short (up to 6% for both). Target and Kroger have similar programs. Track OTIF weekly per retailer, with root-cause coding for each failure (3PL late, carrier late, short shipment due to inventory, ASN error). Prevention starts with production planning that maintains retailer-specific safety stock, automated ASN generation, and 3PL SLAs on on-window carrier pickup.' },
      { q: 'What is inventory turns and what is a good number?', a: 'Inventory turns = COGS ÷ Average Inventory Value. For scaling CPG brands, 4-8 turns annually is typical. Higher turns (10-15) indicate lean inventory management — great for cash but risks stockout. Lower turns (2-3) tie up working capital and expose to obsolescence, particularly for code-dated products. Turns should be tracked per SKU, not just blended: your top SKUs might turn 12 times while your tail SKUs turn 2. That mix is normal; blended is not diagnostic. Match turns targets to lead-time realities — long lead-time products naturally turn slower.' },
      { q: 'What is a good cash conversion cycle for CPG?', a: 'Cash Conversion Cycle = Days Inventory Outstanding + Days Sales Outstanding − Days Payable Outstanding. For scaling CPG brands, 90-180 days is typical. Below 90 days is aggressive and often means very short lead times or very fast receivables. Above 180 days indicates cash pressure that will require financing (line of credit, factoring, revenue-based financing) to scale. The three levers: reduce inventory days (better forecasting, shorter lead times, smaller MOQs), reduce receivables days (faster invoicing, credit management, retailer terms), extend payables days (negotiated terms with suppliers). Covered in our <a href="/guides/cpg-working-capital-playbook">CPG Working Capital Playbook</a>.' },
      { q: 'How often should I review CPG KPIs?', a: 'Weekly for operational metrics (fill rate, OTIF, days of supply, stockout rate, damage rate). Monthly for financial metrics (gross margin, contribution margin, deductions %, cash conversion cycle) and demand metrics (forecast accuracy, channel mix). Quarterly for strategic reviews (KPI evolution as business grows, retailer scorecards, competitive velocity). The cadence should match the decision frequency — weekly metrics that never lead to weekly action are noise. Match cadence to when the metric can actually change your behavior.' },
      { q: 'What tools do I need to track CPG operations KPIs?', a: 'For brands under $5M: a well-structured Google Sheet or Airtable, refreshed manually from Shopify, Amazon Seller Central, QuickBooks, and the 3PL portal. Cost: near zero. For $5-15M: add a demand planning tool (Cogsy, Streamline, Netstock — $200-1,000/month) and a deduction management tool (PromoMash or manual disciplined tracking). For $15M+: ERP-integrated planning (NetSuite Advanced Inventory, Cin7 Omni, Acumatica — $2,000+/month) with automated data pipelines. Tool choice matters less than discipline: a $20M brand running well-executed spreadsheets often outperforms a $10M brand with an enterprise ERP nobody uses.' },
      { q: 'What is TACOS and how is it different from ACOS?', a: 'ACOS (Advertising Cost of Sales) is Amazon ad spend divided by sales attributed to the ad — the direct return metric on your ad spend. TACOS (Total Advertising Cost of Sales) is Amazon ad spend divided by total Amazon sales, including organic sales your ad activity supports. TACOS matters because it reflects the true cost of your Amazon presence including the organic sales lift ads produce. Scaling brands typically target TACOS in the 15-25% range; TACOS above 30% signals ad dependency (organic will collapse if ads pause); TACOS under 10% signals either strong organic momentum or under-investment in growth. Track both metrics; they tell different stories.' },
    ],
    keyTakeaways: [
      '15 metrics matter. Group them into demand, supply, financial, and quality buckets.',
      'Every KPI needs an owner, a cadence, a data source, and a target range.',
      'Target ranges shift with growth stage — pre-launch, $2–10M, $10–30M, $30M+.',
      'A dashboard that fits on one screen and updates automatically is worth more than a 40-metric report nobody reads.',
      'The KPI is the trigger for a decision. If it does not lead to a decision, it does not belong on the dashboard.',
    ],
    related: [
      { href: '/guides/cpg-demand-forecasting', title: 'Demand Forecasting for CPG Brands', description: 'The demand-side metrics in depth.' },
      { href: '/guides/cpg-gross-margin-playbook', title: 'CPG Gross Margin Playbook', description: 'The financial metrics in depth.' },
      { href: '/guides/cpg-working-capital-playbook', title: 'CPG Working Capital Playbook', description: 'The cash-cycle math these metrics drive.' },
    ],
    ctaHeading: <>A KPI dashboard that produces <span className="o">decisions, not just reports.</span></>,
    ctaCopy: 'Logic Agency builds and runs the operating dashboard: metric selection, data pipelines, weekly review rhythm, decision ownership, and quarterly evolution.',
  },
};
