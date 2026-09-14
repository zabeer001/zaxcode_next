'use client';

import { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({ children, delay = 0, variant = 'center' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); } }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    observer.observe(node); return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`wifix-scroll-reveal wifix-scroll-reveal-${variant} ${visible ? 'wifix-scroll-reveal-visible' : ''}`} style={{ '--wifix-reveal-delay': `${delay}ms` }}>{children}</div>;
}
