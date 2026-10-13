'use client';

import { useEffect, useRef, useState } from 'react';

// Adds an "in-view" class the first time the wrapper enters the viewport.
// CSS handles the actual animation; users with prefers-reduced-motion get
// the reveal state immediately, no motion applied.
export default function GuideScrollReveal({ children, className = '', once = true }) {
  const ref = useRef(null);
  // Visible by default: static HTML and no-JS browsers must never lose content.
  const [enhanced, setEnhanced] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') return;

    setEnhanced(true);
    setInView(false);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`${className}${enhanced ? ' is-enhanced' : ''}${inView ? ' in-view' : ''}`.trim()}
    >
      {children}
    </div>
  );
}
