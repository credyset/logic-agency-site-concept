'use client';

import { useId, useRef, useState } from 'react';
import styles from './ProductSystemJourney.module.css';

const stages = [
  {
    id: 'product',
    number: '01',
    name: 'Product',
    sub: 'Materials & form',
    status: 'Logic owns',
    title: 'Shape the system before cost is locked in.',
    description: 'Logic owns the development decisions that turn brand intent into an approved, producible packaging system—with the material, component, specification, and cost choices connected from the start.',
    signals: ['Packaging architecture', 'Materials + components', 'Approved specifications'],
  },
  {
    id: 'make',
    number: '02',
    name: 'Make',
    sub: 'Factory & quality',
    status: 'Logic owns',
    title: 'Carry the approved intent through production.',
    description: 'Logic owns the route from qualified supplier through sampling, production standards, inspection, and corrective action—so the thing that gets made matches the thing that was approved.',
    signals: ['Supplier qualification', 'Production control', 'Quality assurance'],
  },
  {
    id: 'move',
    number: '03',
    name: 'Move',
    sub: 'Freight & inventory',
    status: 'Logic coordinates',
    title: 'Keep every operating handoff on one plan.',
    description: 'Logic coordinates freight, warehouse, inventory, and fulfillment partners against shared requirements, timing, and escalation paths—without implying ownership of the carriers or 3PL.',
    signals: ['Freight coordination', 'Inventory planning', '3PL alignment'],
  },
  {
    id: 'sell',
    number: '04',
    name: 'Sell',
    sub: 'Market outcome',
    status: 'Brand-led / Logic supports',
    title: 'Prepare the operation for the channel.',
    description: 'Logic supports packaging, documentation, compliance, and operational readiness. Your team and retail partners remain responsible for demand, merchandising, the buyer relationship, and sell-through.',
    signals: ['Retail readiness', 'Compliance support', 'Operational handoff'],
  },
];

function StageSchematic({ stage }) {
  if (stage === 'product') {
    return (
      <svg className={styles.schematic} viewBox="0 0 520 270" aria-hidden="true">
        <g className={styles.muted}>
          <circle cx="260" cy="92" r="78" />
          <circle cx="190" cy="174" r="78" />
          <circle cx="330" cy="174" r="78" />
        </g>
        <g className={styles.active}>
          <circle data-draw="true" cx="260" cy="138" r="37" />
          <path data-draw="true" d="M260 101V69M226 153l-39 23M294 153l39 23" />
        </g>
        <circle className={styles.core} cx="260" cy="138" r="28" />
        <g className={styles.copy}>
          <text x="260" y="56" textAnchor="middle">BRAND INTENT</text>
          <text x="146" y="232" textAnchor="middle">COST</text>
          <text x="374" y="232" textAnchor="middle">PRODUCTION</text>
        </g>
        <g className={styles.coreCopy}>
          <text x="260" y="135" textAnchor="middle">APPROVED</text>
          <text x="260" y="148" textAnchor="middle">SPEC</text>
        </g>
      </svg>
    );
  }

  if (stage === 'make') {
    return (
      <svg className={styles.schematic} viewBox="0 0 520 270" aria-hidden="true">
        <g className={styles.muted}>
          <rect x="24" y="96" width="86" height="78" rx="2" />
          <path d="M42 96V70h50v26M42 118h50M42 137h50M42 156h50" />
          <rect x="179" y="91" width="98" height="88" rx="2" />
          <path d="M198 110h60M198 132h60M198 154h38" />
        </g>
        <g className={styles.active}>
          <path data-draw="true" d="M110 135h69M277 135h61" />
          <circle cx="382" cy="135" r="43" />
          <path d="m361 136 14 14 29-34" />
          <path data-draw="true" d="M425 135h70" />
          <circle className={styles.pulse} cx="495" cy="135" r="7" />
        </g>
        <g className={styles.copy}>
          <text x="67" y="201" textAnchor="middle">QUALIFIED FACTORY</text>
          <text x="228" y="205" textAnchor="middle">CONTROLLED RUN</text>
          <text x="382" y="205" textAnchor="middle">VERIFY</text>
          <text x="495" y="117" textAnchor="end">RELEASE</text>
        </g>
      </svg>
    );
  }

  if (stage === 'move') {
    return (
      <svg className={styles.schematic} viewBox="0 0 520 270" aria-hidden="true">
        <g className={styles.muted}>
          <rect x="22" y="102" width="84" height="68" rx="2" />
          <path d="M38 102V80h52v22M40 121h48M40 140h48M40 158h48" />
          <circle cx="316" cy="61" r="29" />
          <circle cx="316" cy="135" r="29" />
          <circle cx="316" cy="209" r="29" />
          <path d="M106 136c76 0 105-75 181-75M106 136c76 0 105 73 181 73" />
        </g>
        <g className={styles.active}>
          <path data-draw="true" d="M106 136h181" />
          <path data-draw="true" d="M345 135h148" />
          <path d="m479 123 14 12-14 12" />
          <circle className={styles.pulse} cx="201" cy="136" r="7" />
        </g>
        <g className={styles.copy}>
          <text x="64" y="198" textAnchor="middle">FACTORY</text>
          <text x="316" y="65" textAnchor="middle">A</text>
          <text x="316" y="139" textAnchor="middle">B</text>
          <text x="316" y="213" textAnchor="middle">C</text>
          <text x="316" y="255" textAnchor="middle">PARTNER NETWORK</text>
          <text x="449" y="119" textAnchor="middle">ONE PLAN</text>
        </g>
      </svg>
    );
  }

  return (
    <svg className={styles.schematic} viewBox="0 0 520 270" aria-hidden="true">
      <g className={styles.muted}>
        <rect x="28" y="75" width="112" height="126" rx="2" />
        <path d="M49 102h70M49 124h70M49 146h45M49 174h22M80 174h18M107 174h12" />
        <rect x="209" y="96" width="92" height="84" rx="2" />
        <path d="M226 115h58M226 137h58M226 159h35" />
      </g>
      <g className={styles.active}>
        <path data-draw="true" d="M140 138h69M301 138h86" />
        <rect x="387" y="89" width="105" height="98" rx="2" />
        <path d="M405 111h69M405 135h69M405 159h47" />
        <circle className={styles.pulse} cx="345" cy="138" r="7" />
      </g>
      <g className={styles.copy}>
        <text x="84" y="227" textAnchor="middle">PACKAGING</text>
        <text x="255" y="227" textAnchor="middle">COMPLIANCE</text>
        <text x="440" y="227" textAnchor="middle">CHANNEL READY</text>
        <text x="345" y="119" textAnchor="middle">HANDOFF</text>
      </g>
    </svg>
  );
}

export default function ProductSystemJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonRefs = useRef([]);
  const instanceId = useId();
  const activeStage = stages[activeIndex];
  const progress = `${(activeIndex / (stages.length - 1)) * 100}%`;

  const selectFromKeyboard = (event, currentIndex) => {
    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % stages.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + stages.length) % stages.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = stages.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    buttonRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={styles.journey} style={{ '--journey-progress': progress }}>
      <div className={styles.meta}>
        <span>LOGIC / PRODUCT-TO-MARKET SYSTEM</span>
        <span>SELECT A STAGE · 0{activeIndex + 1} / 04</span>
      </div>

      <div className={styles.stageNav} role="tablist" aria-label="Product-to-market stages">
        <div className={styles.track} aria-hidden="true"><span /></div>
        {stages.map((stage, index) => {
          const selected = index === activeIndex;
          return (
            <button
              className={`${styles.stageButton}${selected ? ` ${styles.isActive}` : ''}`}
              id={`${instanceId}-${stage.id}-tab`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${instanceId}-stage-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => selectFromKeyboard(event, index)}
              ref={(element) => { buttonRefs.current[index] = element; }}
              key={stage.id}
            >
              <span className={styles.stageNumber}>{stage.number}</span>
              <span className={styles.stageLabel}>
                <strong>{stage.name}</strong>
                <small>{stage.sub}</small>
              </span>
              <span className={styles.stageStatus}>{stage.status}</span>
            </button>
          );
        })}
      </div>

      <div
        className={styles.panel}
        id={`${instanceId}-stage-panel`}
        role="tabpanel"
        aria-labelledby={`${instanceId}-${activeStage.id}-tab`}
        aria-live="polite"
        key={activeStage.id}
      >
        <div className={styles.panelCopy}>
          <p className={styles.panelEyebrow}>{activeStage.status} / {activeStage.sub}</p>
          <h3>{activeStage.title}</h3>
          <p className={styles.panelDescription}>{activeStage.description}</p>
          <ul className={styles.signalList} aria-label={`${activeStage.name} responsibilities`}>
            {activeStage.signals.map((signal) => <li key={signal}>{signal}</li>)}
          </ul>
        </div>

        <div className={styles.visual}>
          <span className={styles.visualLabel}>{activeStage.name} / system trace</span>
          <StageSchematic stage={activeStage.id} />
        </div>
      </div>

      <div className={styles.boundary}>
        <span>Responsibility boundary</span>
        <p>Logic owns <strong>Product</strong> and <strong>Make</strong>, coordinates <strong>Move</strong>, and supports the operating conditions for <strong>Sell</strong>. The brand remains responsible for demand and sell-through.</p>
      </div>
    </div>
  );
}
