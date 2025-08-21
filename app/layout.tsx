import './styles/globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sroka — Site officiel',
  description: 'Sroka — bassiste, compositeur. Electro-jazz atmosphérique & cinématique.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
          <nav className="container" style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'space-between' }}>
            <Link href="/" aria-label="Accueil" style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/sroka_logo_noir.png" alt="Sroka" width={80} height={32} priority />
            </Link>

            <div style={{ display: 'flex', gap: 8 }}>
              <Link href="/about" className="button">À propos</Link>
              <Link href="/music" className="button">Musique</Link>
              <Link href="/videos" className="button">Vidéos</Link>
              <Link href="/events" className="button">Tour</Link>
              <Link href="/contact" className="button">Contact</Link>
            </div>
          </nav>
        </header>

        {children}

        <footer className="container">
          <small>© {new Date().getFullYear()} — Sroka</small>
        </footer>
      </body>
    </html>
  );
}
