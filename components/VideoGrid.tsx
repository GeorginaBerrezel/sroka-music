import videos from '../content/videos.json';

function getYouTubeId(url: string) {
  const match = url.match(/[?&]v=([^&]+)|youtu\.be\/([^?&]+)/);
  return match ? (match[1] || match[2]) : null;
}

export default function VideoGrid() {
  return (
    <div className="grid cols-3">
      {(videos as { title: string; platform: string; url: string }[]).map((v, i) => {
        const yt = v.platform === 'youtube' ? getYouTubeId(v.url) : null;
        return (
          <div className="card" key={i}>
            <div className="video">
              {yt ? (
                <iframe
                  src={`https://www.youtube.com/embed/${yt}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <a href={v.url} target="_blank" rel="noreferrer">Voir la vidéo</a>
              )}
            </div>
            <div style={{marginTop: 8}}><strong>{v.title}</strong></div>
          </div>
        );
      })}
    </div>
  );
}
