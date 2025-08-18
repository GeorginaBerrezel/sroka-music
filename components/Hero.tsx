'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import artist from '../content/artist.json';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
      gsap.fromTo('.hero-tag', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.15, ease: 'power3.out' });
      gsap.fromTo('.hero-badges', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.3, ease: 'power3.out' });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="card">
      <div style={{display: 'grid', gap: 16}}>
        <div>
          <h1 className="h1 hero-title">{artist.name}</h1>
          <p className="muted hero-tag">{artist.tagline}</p>
        </div>
        <div className="flex hero-badges">
          <span className="badge">Electro-jazz</span>
          <span className="badge">Ciné/Atmos</span>
          <span className="badge">Live Duo/4Tet</span>
        </div>
      </div>
    </div>
  );
}
