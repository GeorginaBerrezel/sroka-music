import videos from '@/content/videos.json';

export const metadata = { title: 'Vidéos — Sroka' };

function ytEmbed(u: string) {
  const id = u.split('v=')[1]?.split('&')[0] || '';
  return `https://www.youtube.com/embed/${id}`;
}

export default function VideosPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 md:px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Vidéos</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {(videos as any[]).map((v, i) => (
          <article key={i} className="rounded-2xl overflow-hidden shadow bg-white">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={ytEmbed(v.url)}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 font-medium">{v.title}</div>
          </article>
        ))}
      </div>
    </main>
  );
}
