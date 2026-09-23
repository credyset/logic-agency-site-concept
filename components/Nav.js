'use client';
import { useState } from 'react';

export default function Nav({ variant = 'guide' }) {
  const isHome = variant === 'home';
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const guidesDropdown = (
    <div className="nav-dd">
      <span className="nav-dd-label">Guides <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5l3 3 3-3" /></svg></span>
      <div className="dd-menu">
        <div className="dd-panel">
          <a href="/guides/retail-readiness" onClick={close}>The Retail Readiness Bible</a>
          <a href="/guides/first-90-days-in-retail" onClick={close}>Your First 90 Days in Retail</a>
          <a href="/guides/fractional-supply-chain-operations" onClick={close}>Fractional Supply Chain Operations</a>
          <a href="/guides/dtc-to-retail-supply-chain" onClick={close}>DTC to Retail Supply Chain</a>
          <a href="/guides/retail-chargebacks" onClick={close}>Retail Chargebacks Explained</a>
          <a href="/guides/packaging-cost-reduction" onClick={close}>Packaging Cost Reduction</a>
          <a href="/guides/3pl-selection-guide" onClick={close}>3PL Selection Guide</a>
          <a href="/guides" onClick={close} style={{fontWeight:700,color:'var(--o)'}}>View all guides &rarr;</a>
        </div>
      </div>
    </div>
  );

  return (
    <nav>
      <a href={isHome ? '#' : '/'} className="lo">
        <svg viewBox="0 0 40 40" fill="none">
          <circle cx="15" cy="20" r="12" stroke="#FF600A" strokeWidth="2.5" fill="none" />
          <circle cx="25" cy="20" r="12" stroke="#FF600A" strokeWidth="2.5" fill="none" />
        </svg>
        <span>Logic Agency Inc.</span>
      </a>
      <button className="ham" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>
      <div className={`nr${open ? ' nr-open' : ''}`}>
        {isHome ? (
          <>
            <a href="#situations" onClick={close}>Who We Help</a>
            <a href="#pricing" onClick={close}>Pricing</a>
            <a href="#results" onClick={close}>Results</a>
            {guidesDropdown}
            <a href="/blog" onClick={close}>Blog</a>
            <a href="#faq" onClick={close}>FAQ</a>
            <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="nc" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </>
        ) : (
          <>
            <a href="/" onClick={close}>Home</a>
            <a href="/#pricing" onClick={close}>Pricing</a>
            <a href="/#results" onClick={close}>Results</a>
            {guidesDropdown}
            <a href="/blog" onClick={close}>Blog</a>
            <a href="/#faq" onClick={close}>FAQ</a>
            <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="nc" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </>
        )}
      </div>
    </nav>
  );
}
