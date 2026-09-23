'use client';
const capabilities = [
  {
    group: 'Packaging',
    items: [
      { cap: 'Retail-ready packaging design & structural engineering', ch: ['Retail', 'B2B', 'DTC'] },
      { cap: 'Retailer compliance specs: Target, Walmart, Costco, Amazon', ch: ['Retail'] },
      { cap: 'Case pack, inner pack & pallet configuration', ch: ['Retail', 'B2B'] },
      { cap: 'Shelf-ready & planogram-optimized packaging', ch: ['Retail'] },
      { cap: 'UPC, labeling & regulatory requirements', ch: ['Retail', 'B2B', 'DTC'] },
      { cap: 'Branded unboxing & subscription packaging', ch: ['DTC'] },
      { cap: 'Amazon FBA prep & marketplace compliance', ch: ['DTC'] },
      { cap: 'Commercial & wholesale packaging systems', ch: ['B2B'] },
      { cap: 'Private label & co-manufacturing packaging', ch: ['B2B'] },
    ],
  },
  {
    group: 'Sourcing & Production',
    items: [
      { cap: 'Global sourcing across 15+ countries', ch: ['Retail', 'B2B', 'DTC'] },
      { cap: 'Factory vetting & supplier audits', ch: ['Retail', 'B2B', 'DTC'] },
      { cap: 'Production management & quality control', ch: ['Retail', 'B2B', 'DTC'] },
      { cap: 'Cost analysis, negotiation & optimization', ch: ['Retail', 'B2B', 'DTC'] },
      { cap: 'Freight, customs & import/export coordination', ch: ['Retail', 'B2B', 'DTC'] },
      { cap: 'Vendor onboarding & compliance documentation', ch: ['B2B'] },
    ],
  },
  {
    group: 'Operations & Systems',
    items: [
      { cap: 'Supply chain buildout & optimization', ch: ['Retail', 'B2B', 'DTC'] },
      { cap: 'Inventory management & demand forecasting', ch: ['Retail', 'B2B', 'DTC'] },
      { cap: '3PL & fulfillment coordination', ch: ['Retail', 'B2B', 'DTC'] },
      { cap: 'Retail launch strategy & go-to-market execution', ch: ['Retail'] },
      { cap: 'EDI integration & PO workflow automation', ch: ['Retail'] },
      { cap: 'DIM weight optimization & shipping cost reduction', ch: ['DTC'] },
      { cap: 'AI-powered operational dashboards & alert systems', ch: ['Retail', 'B2B', 'DTC'] },
      { cap: 'Custom forecasting models built on your data', ch: ['Retail', 'B2B', 'DTC'] },
    ],
  },
];
const check = <svg viewBox="0 0 24 24" fill="none" stroke="#FF600A" strokeWidth="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>;
export default function CapFilter() {
  return (
    <div className="cap-unified">
      {capabilities.map(group => (
        <div key={group.group} className="cap-group">
          <h3 className="cap-group-title">{group.group}</h3>
          <div className="cap-grid">
            {group.items.map((item, i) => (
              <div key={i} className="cap-item">
                <div className="cap-icon">{check}</div>
                <div className="cap-content">
                  <span>{item.cap}</span>
                  <div className="cap-tags">
                    {item.ch.map(c => (
                      <span key={c} className={`cap-tag cap-tag-${c.toLowerCase()}`}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
