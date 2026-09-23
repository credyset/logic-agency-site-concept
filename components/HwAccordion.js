'use client';

import { useCallback } from 'react';

export default function HwAccordion({ children }) {
  const handleClick = useCallback((e) => {
    // Only toggle on mobile (≤1024px)
    if (window.innerWidth > 1024) return;
    const card = e.currentTarget;
    card.classList.toggle('hw-open');
  }, []);

  return (
    <div className="hw" onClick={handleClick}>
      {children}
      <div className="hw-toggle" aria-label="Expand">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    </div>
  );
}
