'use client';

import { useState, useRef, useEffect, useId } from 'react';

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
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector('a')?.focus();

    function closeOnPointer(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }

    function closeOnEscape(e) {
      if (e.key !== 'Escape') return;
      setOpen(false);
      buttonRef.current?.focus();
    }

    document.addEventListener('mousedown', closeOnPointer);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnPointer);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  const providers = getProviders(subject);

  return (
    <span className="email-wrap" ref={ref}>
      <button
        ref={buttonRef}
        type="button"
        className={className}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={menuId}
        onClick={() => setOpen(o => !o)}
      >
        {children}
      </button>
      {open && (
        <span className="email-dd" id={menuId} ref={menuRef} role="dialog" aria-label="Choose an email provider">
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
