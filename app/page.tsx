import Hero from '../components/Hero';
import About from '../components/About';
import EventList from '../components/EventList';
import VideoGrid from '../components/VideoGrid';
import NewsFeed from '../components/NewsFeed';
import Discography from '../components/Discography';


export default function Page() {
  return (
    <main>
      <section id="accueil" className="container section">
        <Hero />
      </section>

      <section className="container section">
        <About />
      </section>

      <section id="videos" className="container section">
        <h2 className="h2">Vidéos</h2>
        <VideoGrid />
      </section>

      <section id="concerts" className="container section">
        <h2 className="h2">Concerts</h2>
        <EventList />
      </section>

      <section id="musique" className="container section">
        <h2 className="h2">Musique</h2>
        <Discography />
      </section>

      <section id="news" className="container section">
        <h2 className="h2">News</h2>
        <NewsFeed />
      </section>

      <section id="contact" className="container section">
        <h2 className="h2">Contact</h2>
        <p>Pour toute demande : <a href="mailto:srokamusic@gmail.com">srokamusic@gmail.com</a></p>
      </section>
    </main>
  );
}
