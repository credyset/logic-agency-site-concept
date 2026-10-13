import Link from 'next/link';

export default function FooterHome() {
  return (
    <footer>
      <div className="fti">
        <div className="fbr">
          <Link href="/" className="lo" aria-label="Logic Agency home">
            <svg viewBox="0 0 40 40" fill="none" width="32" height="32" aria-hidden="true">
              <circle cx="15" cy="20" r="12" stroke="#FF600A" strokeWidth="2.5" fill="none" />
              <circle cx="25" cy="20" r="12" stroke="#FF600A" strokeWidth="2.5" fill="none" />
            </svg>
            <span>Logic Agency Inc.</span>
          </Link>
          <p>Your embedded packaging, supply-chain, and operations team for scaling product brands.</p>
        </div>
        <div className="fc">
          <h4>Explore</h4>
          <Link href="/services">What We Do</Link>
          <Link href="/who-we-help">Who We Help</Link>
          <Link href="/how-we-work">How We Work</Link>
          <Link href="/how-we-work#continuity">Implementation &amp; Accountability</Link>
        </div>
        <div className="fc">
          <h4>Company</h4>
          <Link href="/work">Work</Link>
          <Link href="/why-logic">Why Logic</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/blog">Field Notes</Link>
        </div>
        <div className="fc">
          <h4>Contact</h4>
          <a href="mailto:jordan@logicagencyinc.com">jordan@logicagencyinc.com</a>
          <a href="tel:+13853686837">+1 (385) 368-6837</a>
          <span className="footer-location">Orange County, CA</span>
          <span className="footer-location">Salt Lake City, UT</span>
        </div>
      </div>
      <div className="fbt">
        <span>&copy; 2026 Logic Agency Inc. All rights reserved.</span>
        <span>logicagencyinc.com</span>
      </div>
    </footer>
  );
}
