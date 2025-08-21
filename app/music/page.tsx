import releases from '@/content/releases.json';

export const metadata = { title: 'Musique — Sroka' };

export default function MusicPage() {
  const sorted = [...(releases as any[])].sort((a,b)=> (b.year||0)-(a.year||0));
  return (
    <main className="container mx-auto max-w-5xl px-4 md:px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Musique</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sorted.map((r) => (
          <a key={r.title} href={r.links?.all} target="_blank" rel="noreferrer"
             className="block rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={r.cover} alt={r.title} className="w-full aspect-square object-cover" />
            <div className="p-4">
              <div className="font-semibold">{r.title}</div>
              <div className="opacity-70">{r.year}</div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
