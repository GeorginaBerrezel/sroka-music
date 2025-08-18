// app/components/Discography.tsx
import Image from 'next/image';
import releases from '../content/releases.json';

type Video = { title: string; platform: 'youtube' | 'vimeo' | string; url: string };
type ReleaseItem = {
  title: string;
  year?: number;
  cover?: string;
  description?: string;
  credits?: string[];
  links?: { spotify?: string; youtube?: string; bandcamp?: string; apple?: string };
  videos?: Video[];
};

function getYouTubeId(url: string) {
  // essaie d’abord le paramètre ?v=..., sinon le format youtu.be/ID
  try {
    const u = new URL(url);
    const v = u.searchParams.get('v');
    if (v) return v;
  } catch {}
  const m = url.match(/youtu\.be\/([^?&]+)/);
  return m ? m[1] : null;
}

export default function Discography() {
  return (
    <div className="grid">
      {(releases as ReleaseItem[]).map((rel, idx) => {
        const yt =
          rel.videos?.[0]?.platform === 'youtube'
            ? getYouTubeId(rel.videos[0].url)
            : null;

        return (
          <article key={idx} className="card" style={{ display: 'grid', gap: 16 }}>
            {/* Cover + meta */}
            <div className="flex" style={{ alignItems: 'flex-start' }}>
              <div
                style={{
                  width: 160,
                  height: 160,
                  position: 'relative',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid var(--line)',
                }}
              >
                {rel.cover ? (
                  <Image src={rel.cover} alt={rel.title} fill style={{ objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: '#222632' }} />
                )}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 className="h3" style={{ marginBottom: 4 }}>
                  {rel.title}
                  {rel.year ? ` — ${rel.year}` : ''}
                </h3>
                {rel.description && <p style={{ marginTop: 6 }}>{rel.description}</p>}

                {/* Links */}
                <div className="flex" style={{ marginTop: 8 }}>
                  {rel.links?.spotify && (
                    <a className="button" href={rel.links.spotify} target="_blank" rel="noreferrer">
                      Spotify
                    </a>
                  )}
                  {rel.links?.youtube && (
                    <a className="button" href={rel.links.youtube} target="_blank" rel="noreferrer">
                      YouTube
                    </a>
                  )}
                  {rel.links?.bandcamp && (
                    <a className="button" href={rel.links.bandcamp} target="_blank" rel="noreferrer">
                      Bandcamp
                    </a>
                  )}
                  {rel.links?.apple && (
                    <a className="button" href={rel.links.apple} target="_blank" rel="noreferrer">
                      Apple Music
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Video embed (optionnel) */}
            {yt && (
              <div className="video">
                <iframe
                  src={`https://www.youtube.com/embed/${yt}`}
                  title={rel.videos?.[0]?.title || rel.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}

            {/* Credits */}
            {rel.credits && rel.credits.length > 0 && (
              <div>
                <h4 className="h3" style={{ marginBottom: 8 }}>Crédits</h4>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {rel.credits.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
