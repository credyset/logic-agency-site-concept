'use client';

import { useCallback } from 'react';

export default function GuideFaqAccordion({ items }) {
  const handleClick = useCallback((e) => {
    const item = e.currentTarget;
    item.classList.toggle('gf-op');
  }, []);

  return (
    <div className="gfaq">
      {items.map((item, i) => (
        <div key={i} className="gf-item" onClick={handleClick}>
          <div className="gf-q">
            <h3>{item.q}</h3>
            <div className="gf-toggle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          </div>
          <div className="gf-a">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
