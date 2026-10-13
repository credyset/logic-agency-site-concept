'use client';

import { useEffect, useRef, useState } from 'react';

// Sticky mini-TOC with active-section highlight and top progress bar.
// Renders only on desktop (>= 1100px) via CSS media query. On mobile the
// existing inline `.toc` block continues to serve as navigation.
export default function GuideStickyToc({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');
  const [progress, setProgress] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    if (!sections?.length) return;
    const ids = sections.map((s) => s.id);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!targets.length) return;

    // Track current section
    const observer = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(
        (entries) => {
          // Prefer the top-most intersecting section.
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (visible[0]) setActiveId(visible[0].target.id);
        },
        { rootMargin: '-140px 0px -70% 0px', threshold: 0 },
      );
    targets.forEach((target) => observer?.observe(target));

    // Track scroll progress
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const pct = total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [sections]);

  return (
    <>
      <div className="guide-progress" aria-hidden="true">
        <div className="guide-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <aside className="guide-sticky-toc" aria-label="Guide sections">
        <div className="gst-label">On this page</div>
        <ul ref={listRef} className="gst-list">
          {sections.map((s) => (
            <li key={s.id} className={activeId === s.id ? 'gst-active' : ''}>
              <a href={`#${s.id}`} aria-current={activeId === s.id ? 'location' : undefined}>{s.heading}</a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
