function normalizeFaqText(value) {
  return String(value ?? '')
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, code) => String.fromCharCode(Number.parseInt(code, 16)))
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1');
}

export default function GuideFaqAccordion({ items }) {
  return (
    <div className="gfaq">
      {items.map((item, i) => (
        <details key={i} className="gf-item">
          <summary className="gf-q">
            <span className="gf-q-text">{item.q}</span>
            <span className="gf-toggle" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </summary>
          <div className="gf-a">
            <p>{normalizeFaqText(item.a)}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
