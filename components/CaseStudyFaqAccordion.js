'use client';

import { useState } from 'react';

export default function CaseStudyFaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.question}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <h3>{item.question}</h3>
              <span className="faq-toggle">+</span>
            </button>
            <div className="faq-a">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
