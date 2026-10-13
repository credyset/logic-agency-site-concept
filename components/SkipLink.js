'use client';

export default function SkipLink({ className = 'concept-skip-link' }) {
  function moveFocusToMain(event) {
    const main = document.getElementById('main-content');

    if (!main) return;

    event.preventDefault();
    main.focus({ preventScroll: true });
    main.scrollIntoView({ block: 'start' });
    window.history.replaceState(null, '', '#main-content');
  }

  return (
    <a className={className} href="#main-content" onClick={moveFocusToMain}>
      Skip to main content
    </a>
  );
}
