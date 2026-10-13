'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useId, useRef, useState } from 'react';

const insightLinks = [
  { href: '/guides', label: 'Guide Library', note: '25 practical operating playbooks' },
  { href: '/blog', label: 'Field Notes', note: 'Packaging and supply-chain analysis' },
  { href: '/guides/retail-readiness-scorecard', label: 'Retail-Readiness Scorecard', note: 'Free 40-point diagnostic' },
  { href: '/guides/packaging-cost-reduction', label: 'Packaging Cost Reduction', note: 'Find the cost hiding outside unit price' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const insightsMenuId = useId();
  const navLinksId = useId();
  const insightsButtonRef = useRef(null);
  const hamburgerRef = useRef(null);
  const rawPathname = usePathname() || '/';
  const normalizedPathname = rawPathname.replace(/^\/logic-agency-site-concept(?=\/|$)/, '') || '/';

  const isCurrent = (href) => normalizedPathname === href || (href !== '/' && normalizedPathname.startsWith(`${href}/`));
  const insightsCurrent = isCurrent('/guides') || isCurrent('/blog');

  const close = () => {
    setMobileOpen(false);
    setInsightsOpen(false);
  };

  const handleNavKeyDown = (event) => {
    if (event.key !== 'Escape') return;
    const wasMobileOpen = mobileOpen;
    const wasInsightsOpen = insightsOpen;
    if (!wasMobileOpen && !wasInsightsOpen) return;
    event.preventDefault();
    close();
    requestAnimationFrame(() => {
      if (wasMobileOpen) hamburgerRef.current?.focus();
      else if (wasInsightsOpen) insightsButtonRef.current?.focus();
    });
  };

  const insightsDropdown = (
    <div
      className={`nav-dd${insightsOpen ? ' nav-dd-open' : ''}${insightsCurrent ? ' nav-dd-current' : ''}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setInsightsOpen(false);
      }}
    >
      <button
        ref={insightsButtonRef}
        type="button"
        className="nav-dd-label"
        aria-expanded={insightsOpen}
        aria-controls={insightsMenuId}
        onClick={() => setInsightsOpen((current) => !current)}
      >
        Insights
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 5l3 3 3-3" />
        </svg>
      </button>
      <div className="dd-menu" id={insightsMenuId}>
        <div className="dd-panel">
          {insightLinks.map((item) => (
            <Link href={item.href} onClick={close} key={item.href}>
              <strong>{item.label}</strong>
              <small>{item.note}</small>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav aria-label="Primary navigation" onKeyDown={handleNavKeyDown}>
      <Link href="/" className="lo" onClick={close} aria-label="Logic Agency home" aria-current={isCurrent('/') ? 'page' : undefined}>
        <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="15" cy="20" r="12" stroke="#FF600A" strokeWidth="2.5" fill="none" />
          <circle cx="25" cy="20" r="12" stroke="#FF600A" strokeWidth="2.5" fill="none" />
        </svg>
        <span>Logic Agency Inc.</span>
      </Link>
      <button
        ref={hamburgerRef}
        className="ham"
        type="button"
        onClick={() => {
          setMobileOpen((current) => !current);
          setInsightsOpen(false);
        }}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        aria-controls={navLinksId}
      >
        <span /><span /><span />
      </button>
      <div id={navLinksId} className={`nr${mobileOpen ? ' nr-open' : ''}`}>
        <Link href="/services" onClick={close} aria-current={isCurrent('/services') ? 'page' : undefined}>What We Do</Link>
        <Link href="/who-we-help" onClick={close} aria-current={isCurrent('/who-we-help') ? 'page' : undefined}>Who We Help</Link>
        <Link href="/work" onClick={close} aria-current={isCurrent('/work') ? 'page' : undefined}>Work</Link>
        <Link href="/how-we-work" onClick={close} aria-current={isCurrent('/how-we-work') ? 'page' : undefined}>How We Work</Link>
        {insightsDropdown}
        <a href="https://calendly.com/jordan-harper-packaging/logic-agency-readiness" className="nc" target="_blank" rel="noopener noreferrer" onClick={close}>Book a Call</a>
      </div>
    </nav>
  );
}
