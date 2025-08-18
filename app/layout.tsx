import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artist Site – Starter Plus',
  description: 'Minimal content-driven artist site (React + GSAP)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header>
          <nav className="container">
            <a href="#accueil" className="button">Accueil</a>
            <a href="#videos" className="button">Vidéos</a>
            <a href="#concerts" className="button">Concerts</a>
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
