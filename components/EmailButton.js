'use client';

import { useState, useRef, useEffect } from 'react';

const EMAIL = 'jordan@logicagencyinc.com';

function getProviders(subject) {
  const enc = encodeURIComponent(subject);
  return [
    { label: 'Gmail', href: `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=${enc}` },
    { label: 'Outlook', href: `https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}&subject=${enc}` },
    { label: 'Yahoo Mail', href: `https://compose.mail.yahoo.com/?to=${EMAIL}&subject=${enc}` },
    { label: 'Default Mail App', href: `mailto:${EMAIL}?subject=${enc}`, native: true },
  ];
}

export default function EmailButton({ subject, className, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    function close(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  const providers = getProviders(subject);

  return (
    <span className="email-wrap" ref={ref}>
      <button type="button" className={className} onClick={() => setOpen(o => !o)}>
        {children}
      </button>
      {open && (
        <span className="email-dd">
          {providers.map(p => (
            <a
              key={p.label}
              href={p.href}
              target={p.native ? undefined : '_blank'}
              rel={p.native ? undefined : 'noopener noreferrer'}
              onClick={() => setOpen(false)}
            >
              {p.label}
            </a>
          ))}
        </span>
      )}
    </span>
  );
}
