'use client';
import Image from 'next/image';

export default function Hero() {
  const bg = process.env.NEXT_PUBLIC_HERO_BG || '';

  return (
    <div
      className="relative grid"
      style={{
        minHeight: '100svh',
        height: '100dvh',
        ...(bg
          ? {
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}),
        // Place le contenu SOUS le header et plutôt en haut
        alignItems: 'start',
        justifyItems: 'center',
        paddingTop: 'calc(var(--header-h, 72px) + 16px)',
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      {/* Colonne centrée */}
      <div
        className="relative z-10 w-full"
        style={{
          display: 'grid',
          justifyItems: 'center',
          rowGap: '1.25rem',
          textAlign: 'center',
          width: 'min(96vw, 1200px)', // largeur globale des contenus
          margin: '0 auto',
        }}
      >
        {/* LOGO — plus d'absolu : pas de fill, width/height + h-auto */}
        <Image
          src="/sroka_logo_noir.png" // ou _blanc si besoin
          alt="Sroka"
          width={380}
          height={140}
          priority
          className="w-[260px] md:w-[380px] h-auto mx-auto"
        />

        {/* PHRASE */}
        <p className="text-white text-2xl md:text-3xl font-light">
          Mon dernier EP <em>Foudre 147</em> est disponible sur toutes les plateformes&nbsp;!
        </p>

        {/* BOUTON */}
        <a
          className="inline-block px-6 py-4 rounded-xl bg-white text-black text-lg font-semibold hover:opacity-90 transition"
          href="https://fanlink.tv/sroka-foudre-147"
          target="_blank"
          rel="noreferrer"
        >
          Écouter l’EP
        </a>

        {/* VIDÉO — taille pilotée par le conteneur, pas par l'iframe */}
        <div
          className="rounded-xl overflow-hidden shadow-lg"
          style={{ width: 'min(96vw, 1200px)' }}  // ← agrandis ici
        >
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/NowdKhY5WHE"
              title="Dernier clip"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
