'use client';

import { useState, useMemo } from 'react';

// Filter chips over a margin waterfall. Toggling a chip includes/excludes
// that cost line from the running total. Every line stays in DOM for
// crawlers/AI; chips are progressive enhancement on top.
export default function GuideMarginChips({
  heading,
  startingRevenue,
  startingLabel,
  lines,
  chips,
  outputLabel,
  note,
}) {
  const [active, setActive] = useState(() => new Set(chips.map((c) => c.key)));

  const toggle = (key) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const { total, ordered } = useMemo(() => {
    let running = startingRevenue;
    const rows = lines.map((line) => {
      const included = !line.chip || active.has(line.chip);
      if (included) running += line.delta;
      return { ...line, included, runningAfter: running };
    });
    return { total: running, ordered: rows };
  }, [active, startingRevenue, lines]);

  return (
    <div className="mc-box">
      {heading && <h3 className="mc-heading">{heading}</h3>}
      <div className="mc-chips" role="group" aria-label="Toggle cost lines">
        {chips.map((c) => {
          const on = active.has(c.key);
          return (
            <button
              key={c.key}
              type="button"
              className={`mc-chip${on ? ' mc-chip-on' : ''}`}
              aria-pressed={on}
              onClick={() => toggle(c.key)}
            >
              <span className="mc-chip-dot" aria-hidden="true" />
              {c.label}
            </button>
          );
        })}
      </div>
      <div className="mc-rows">
        <div className="mc-row mc-row-start">
          <div className="mc-row-label">{startingLabel}</div>
          <div className="mc-row-value mc-row-value-start">${startingRevenue.toFixed(2)}</div>
        </div>
        {ordered.map((line, i) => (
          <div
            key={i}
            className={`mc-row${line.included ? '' : ' mc-row-off'}`}
          >
            <div className="mc-row-label">{line.label}</div>
            <div className={`mc-row-value ${line.delta < 0 ? 'mc-neg' : 'mc-pos'}`}>
              {line.delta < 0 ? '−' : '+'}${Math.abs(line.delta).toFixed(2)}
            </div>
          </div>
        ))}
        <div className="mc-row mc-row-total">
          <div className="mc-row-label">{outputLabel || 'Contribution margin'}</div>
          <div
            className="mc-row-value mc-row-total-value"
            aria-live="polite"
            aria-atomic="true"
            aria-label={`${outputLabel || 'Contribution margin'}: $${total.toFixed(2)}`}
          >
            ${total.toFixed(2)}
          </div>
        </div>
      </div>
      {note && <p className="mc-note" dangerouslySetInnerHTML={{ __html: note }} />}
    </div>
  );
}
