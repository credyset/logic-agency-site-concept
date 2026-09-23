'use client';

import { useEffect, useRef, useState } from 'react';

const stages = [
  {
    id: 'product',
    verb: 'Product',
    eyebrow: 'Go-to-market products',
    title: 'Design what goes to market.',
    description: 'We translate the idea into a product system built around its customer, channel, price point, packaging, and operational reality.',
    tags: ['Product system', 'Packaging', 'Channel fit'],
  },
  {
    id: 'make',
    verb: 'Make',
    eyebrow: 'Manufacturability + quality control',
    title: 'Design how it gets made.',
    description: 'We design the supplier-vetting and sourcing process, then execute it for you through sampling, production, inspections, and corrective action.',
    tags: ['Supplier vetting', 'Sourcing execution', 'QC standards'],
  },
  {
    id: 'move',
    verb: 'Move',
    eyebrow: 'Logistics + 3PL',
    title: 'Design the path to the customer.',
    description: 'We select the right 3PL and optimize freight, inventory, warehousing, and fulfillment around your actual channel mix.',
    tags: ['3PL selection', 'Freight + inventory', 'Cost to serve'],
  },
  {
    id: 'sell',
    verb: 'Sell',
    eyebrow: 'Retail sales success',
    title: 'Design for the shelf—and the reorder.',
    description: 'We build for retailer requirements, shelf execution, replenishment, and sell-through so the first PO can become a repeatable retail program.',
    tags: ['Retail readiness', 'Compliance', 'Sell-through'],
  },
];

function StageSchematic({ id }) {
  if (id === 'product') {
    return (
      <svg className="design-schematic" viewBox="0 0 460 220" aria-hidden="true">
        <g className="schematic-active">
          <circle data-draw="true" cx="230" cy="76" r="68" />
          <circle data-draw="true" cx="171" cy="142" r="68" />
          <circle data-draw="true" cx="289" cy="142" r="68" />
          <circle className="schematic-core" cx="230" cy="117" r="30" />
        </g>
        <g className="schematic-copy">
          <text x="230" y="30" textAnchor="middle">STRATEGY</text>
          <text x="112" y="187" textAnchor="middle">DESIGN</text>
          <text x="348" y="187" textAnchor="middle">PRODUCTION</text>
          <text x="172" y="91" textAnchor="middle">CUSTOMER</text>
          <text x="288" y="91" textAnchor="middle">SALES</text>
          <text x="230" y="170" textAnchor="middle">OPERATIONS</text>
        </g>
        <g className="schematic-core-copy">
          <text x="230" y="114" textAnchor="middle">PRODUCT</text>
          <text x="230" y="126" textAnchor="middle">SYSTEM</text>
        </g>
      </svg>
    );
  }

  if (id === 'make') {
    return (
      <svg className="design-schematic" viewBox="0 0 460 220" aria-hidden="true">
        <g className="schematic-muted">
          <circle cx="48" cy="46" r="22" />
          <circle cx="48" cy="110" r="22" />
          <circle cx="48" cy="174" r="22" />
          <path d="M70 46H124M70 110H124M70 174H124M124 46V174" />
        </g>
        <g className="schematic-active">
          <path data-draw="true" d="M124 110H176" />
          <rect x="176" y="70" width="92" height="80" rx="3" />
          <path data-draw="true" d="M268 110H318" />
          <circle cx="354" cy="110" r="36" />
          <path d="m337 111 11 11 23-27" />
          <path data-draw="true" d="M390 110H438" />
        </g>
        <g className="schematic-copy">
          <text x="48" y="50" textAnchor="middle">01</text>
          <text x="48" y="114" textAnchor="middle">02</text>
          <text x="48" y="178" textAnchor="middle">03</text>
          <text x="222" y="105" textAnchor="middle">VET +</text>
          <text x="222" y="123" textAnchor="middle">SOURCE</text>
          <text x="354" y="164" textAnchor="middle">VERIFY</text>
          <text x="415" y="96" textAnchor="middle">RUN</text>
        </g>
      </svg>
    );
  }

  if (id === 'move') {
    return (
      <svg className="design-schematic" viewBox="0 0 460 220" aria-hidden="true">
        <g className="schematic-muted">
          <rect x="20" y="79" width="82" height="62" rx="3" />
          <path d="M32 79V59H90V79M39 95h44M39 111h44M39 127h44" />
          <circle cx="278" cy="52" r="25" />
          <circle cx="278" cy="168" r="25" />
          <path d="M102 110C166 110 186 52 253 52M102 110c64 0 84 58 151 58" />
        </g>
        <g className="schematic-active">
          <path data-draw="true" d="M102 110H184C220 110 223 110 253 110" />
          <circle cx="278" cy="110" r="25" />
          <path data-draw="true" d="M303 110H422" />
          <path d="m408 98 14 12-14 12" />
          <circle className="schematic-pulse" cx="184" cy="110" r="7" />
        </g>
        <g className="schematic-copy">
          <text x="61" y="158" textAnchor="middle">FACTORY</text>
          <text x="278" y="56" textAnchor="middle">A</text>
          <text x="278" y="114" textAnchor="middle">B</text>
          <text x="278" y="172" textAnchor="middle">C</text>
          <text x="278" y="207" textAnchor="middle">3PL OPTIONS</text>
          <text x="366" y="96" textAnchor="middle">OPTIMIZED</text>
        </g>
      </svg>
    );
  }

  return (
    <svg className="design-schematic" viewBox="0 0 460 220" aria-hidden="true">
      <g className="schematic-muted">
        <path d="M24 48H254M24 104H254M24 160H254" />
        <rect x="38" y="60" width="32" height="44" rx="2" />
        <rect x="86" y="72" width="32" height="32" rx="2" />
        <rect x="134" y="54" width="32" height="50" rx="2" />
        <rect x="182" y="65" width="32" height="39" rx="2" />
      </g>
      <g className="schematic-active">
        <path data-draw="true" d="M278 160 318 132 350 140 392 84 432 56" />
        <circle cx="278" cy="160" r="5" />
        <circle cx="318" cy="132" r="5" />
        <circle cx="350" cy="140" r="5" />
        <circle cx="392" cy="84" r="5" />
        <circle className="schematic-pulse" cx="432" cy="56" r="7" />
        <path d="M432 56V28M420 40l12-12 12 12" />
      </g>
      <g className="schematic-copy">
        <text x="24" y="188">RETAIL READY</text>
        <text x="355" y="188" textAnchor="middle">SELL-THROUGH</text>
        <text x="432" y="91" textAnchor="end">REORDER</text>
      </g>
    </svg>
  );
}

export default function DesignJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const stepRefs = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    const updateActiveStage = () => {
      frameRef.current = null;
      const anchor = window.innerHeight * 0.5;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - anchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStage((current) => (current === closestIndex ? current : closestIndex));
    };

    const requestUpdate = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateActiveStage);
    };

    updateActiveStage();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const goToStage = (index) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    stepRefs.current[index]?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
    });
  };

  const stage = stages[activeStage];
  const progress = `${(activeStage / (stages.length - 1)) * 100}%`;

  return (
    <div className="design-journey">
      <div className="design-intro">
        <div className="sl">How We Think About Design</div>
        <div className="or" />
        <div className="design-intro__copy">
          <h2 className="sh">A product isn&apos;t designed until it can be <span className="o">made, moved, and sold.</span></h2>
          <p>Logic designs the operating decisions behind every physical product—then stays to execute them.</p>
        </div>
      </div>

      <div className="design-scroll-grid">
        <div className="design-console-wrap">
          <div className="design-console" style={{ '--journey-progress': progress }}>
            <div className="design-console__meta">
              <span>LOGIC / INTEGRATED SYSTEM</span>
              <span>0{activeStage + 1} — 04</span>
            </div>

            <div className="design-console__grid">
              <div className="design-rail" role="navigation" aria-label="Product journey stages">
                <div className="design-rail__track" aria-hidden="true"><span /></div>
                {stages.map((item, index) => (
                  <button
                    className={`design-node${index === activeStage ? ' is-active' : ''}${index < activeStage ? ' is-complete' : ''}`}
                    type="button"
                    onClick={() => goToStage(index)}
                    aria-current={index === activeStage ? 'step' : undefined}
                    key={item.id}
                  >
                    <span className="design-node__bubble">0{index + 1}</span>
                    <span className="design-node__label"><strong>{item.verb}</strong><small>{item.eyebrow}</small></span>
                  </button>
                ))}
              </div>

              <div className="design-console__stage" key={stage.id}>
                <p className="design-console__eyebrow">{stage.eyebrow}</p>
                <h3>{stage.title}</h3>
                <p className="design-console__description">{stage.description}</p>
                <StageSchematic id={stage.id} />
                <div className="design-console__tags">
                  {stage.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>

            <div className="design-console__footer">
              <span><i /> Scroll to trace the system</span>
              <span>DESIGNED END TO END</span>
            </div>
          </div>
        </div>

        <div className="design-steps">
          {stages.map((item, index) => (
            <article
              className={`design-step${index === activeStage ? ' is-active' : ''}`}
              ref={(element) => { stepRefs.current[index] = element; }}
              key={item.id}
            >
              <div className="design-step__mobile-node" aria-hidden="true">0{index + 1}</div>
              <span className="design-step__number">0{index + 1} / 04</span>
              <p>{item.eyebrow}</p>
              <h3>{item.verb}</h3>
              <strong>{item.title}</strong>
              <p className="design-step__copy">{item.description}</p>
              <ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
