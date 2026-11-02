'use client';

import { useEffect, useRef } from 'react';

/**
 * Adds `is-in` to the returned ref once the element enters the viewport.
 * Used directly on grid items (cards) so their grid span is preserved —
 * wrapping them in an extra element would break the 12-column layout.
 */
export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--d', `${delay}ms`);

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in');
      return;
    }

    // Elements already in view on first paint (hero cards) reveal immediately.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return ref;
}
