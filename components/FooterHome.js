export default function FooterHome() {
  return (
    <footer>
      <div className="fti">
        <div className="fbr">
          <a href="/" className="lo">
            <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
              <circle cx="15" cy="20" r="12" stroke="#FF600A" strokeWidth="2.5" fill="none" />
              <circle cx="25" cy="20" r="12" stroke="#FF600A" strokeWidth="2.5" fill="none" />
            </svg>
            <span>Logic Agency Inc.</span>
          </a>
          <p>Your outsourced packaging, supply chain, and operations team. Monthly retainers for brands in beauty, wellness, CPG, and tech wearables.</p>
        </div>
        <div className="fc">
          <h4>Services</h4>
          <a href="/guides/packaging-sourcing">Packaging Sourcing</a>
          <a href="/guides/retail-ready-packaging">Retail Packaging</a>
          <a href="/guides/packaging-system-that-scales">Supply Chain Ops</a>
          <a href="/guides/packaging-cost-reduction">Cost Optimization</a>
          <a href="/guides/retail-readiness">Retail Readiness</a>
        </div>
        <div className="fc">
          <h4>Company</h4>
          <a href="/#results">Client Work</a>
          <a href="/#pillars">What We Do</a>
          <a href="/#cta">Contact</a>
        </div>
        <div className="fc">
          <h4>Contact</h4>
          <a href="mailto:jordan@logicagencyinc.com">jordan@logicagencyinc.com</a>
          <a href="tel:+18018996836">+1 (801) 899-6836</a>
          <a href="#">Orange County, CA</a>
          <a href="#">Salt Lake City, UT</a>
        </div>
      </div>
      <div className="fbt">
        <span>&copy; 2026 Logic Agency Inc. All rights reserved.</span>
        <span>logicagencyinc.com</span>
      </div>
    </footer>
  );
}
