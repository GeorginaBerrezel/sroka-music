// app/components/Hero.tsx
'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import artist from '../content/artist.json';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-logo', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
      gsap.fromTo('.hero-title', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.1, ease: 'power3.out' });
      gsap.fromTo('.hero-tag', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.hero-badges', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.3, ease: 'power3.out' });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="card">
      <div style={{ display: 'grid', gap: 16 }}>
        <div className="hero-logo" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Image src="/sroka_logo_blanc.png" alt="Sroka" width={72} height={72} priority />
          <div>
            <h1 className="h1 hero-title">{artist.name}</h1>
            <p className="muted hero-tag">{artist.tagline}</p>
          </div>
        </div>

        <div className="flex hero-badges">
          <span className="badge">Electro-jazz</span>
          <span className="badge">Ciné/Atmos</span>
          <span className="badge">Live Duo/4Tet</span>
        </div>

        {/* Réseaux */}
        <div className="flex">
          {artist.socials?.instagram && <a className="button" href={artist.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>}
          {artist.socials?.youtube && <a className="button" href={artist.socials.youtube} target="_blank" rel="noreferrer">YouTube</a>}
          {artist.socials?.facebook && <a className="button" href={artist.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>}
          {artist.socials?.spotify_playlist && <a className="button" href={artist.socials.spotify_playlist} target="_blank" rel="noreferrer">Spotify</a>}
        </div>
      </div>
    </div>
  );
}
