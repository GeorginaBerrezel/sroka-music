import artist from '@/content/artist.json';

export const metadata = { title: 'À propos — Sroka' };

export default function AboutPage() {
  const bg = process.env.NEXT_PUBLIC_ABOUT_BG || '';
  return (
    <main className="container mx-auto max-w-4xl px-4 md:px-6 py-10">
      <div
        className="relative overflow-hidden rounded-2xl mb-8"
        style={bg ? { backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 240 } : {}}
      >
        {bg && <div className="absolute inset-0 bg-black/35" aria-hidden="true" />}
        <div className="relative z-10 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow">À propos</h1>
        </div>
      </div>

      <article className="prose prose-neutral max-w-none">
        {artist.longBio.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
      </article>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {artist.pressQuotes?.map((q, i) => (
          <blockquote key={i} className="card">
            <p className="m-0">&ldquo;{q}&rdquo;</p>
          </blockquote>
        ))}
      </div>
    </main>
  );
}
