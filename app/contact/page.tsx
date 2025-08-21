import artist from '@/content/artist.json';
export const metadata = { title: 'Contact — Sroka' };

export default function ContactPage() {
  const c = artist.contacts;
  return (
    <main className="container mx-auto max-w-3xl px-4 md:px-6 py-10 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>

      <section className="card">
        <h2 className="h2">Artiste</h2>
        <p>{c.artist}<br/><a className="underline" href={`mailto:${c.artist_email}`}>{c.artist_email}</a><br/>{c.artist_phone}</p>
      </section>

      <section className="card">
        <h2 className="h2">Booking</h2>
        <p>{c.booking_agency}<br/><a className="underline" href={`mailto:${c.booking_email}`}>{c.booking_email}</a><br/>{c.booking_phone}</p>
      </section>

      <section className="card">
        <h2 className="h2">Technique</h2>
        <p>{c.tech_name}<br/><a className="underline" href={`mailto:${c.tech_email}`}>{c.tech_email}</a><br/>{c.tech_phone}</p>
      </section>

      <section className="card">
        <h2 className="h2">Presse</h2>
        <p>{c.press_agency}<br/><a className="underline" href={`mailto:${c.press_email}`}>{c.press_email}</a><br/>{c.press_phone}</p>
      </section>
    </main>
  );
}
