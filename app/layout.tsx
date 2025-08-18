import './styles/globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Artist Site – Starter Plus',
  description: 'Minimal content-driven artist site (React + GSAP)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header>
          <nav className="container" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="#accueil" aria-label="Accueil" style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/sroka_logo_blanc.png" alt="Sroka" width={32} height={32} priority />
            </a>
            <a href="#accueil" className="button">Accueil</a>
            <a href="#videos" className="button">Vidéos</a>
            <a href="#concerts" className="button">Concerts</a>
            <a href="#musique" className="button">Musique</a>
            <a href="#news" className="button">News</a>
            <a href="#contact" className="button">Contact</a>
          </nav>
        </header>
        {children}
        <footer className="container">
          <small>© {new Date().getFullYear()} – Site Starter Plus</small>
        </footer>
      </body>
    </html>
  );
}
