import artist from '../content/artist.json';

export default function About() {
  return (
    <div className="card">
      <h2 className="h2">À propos</h2>
      <p>{artist.longBio}</p>
      <div className="hr" />
      <div className="grid cols-3">
        {artist.pressQuotes?.map((q, i) => (
          <blockquote key={i} className="card">
            <p style={{margin: 0}}>&ldquo;{q}&rdquo;</p>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
