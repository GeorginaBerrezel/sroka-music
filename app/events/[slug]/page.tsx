/* app/events/[slug]/page.tsx */
    import { builder } from '@/lib/builder';
    import type { EventItem } from '@/types/event';
    import Link from 'next/link';

    export const revalidate = Number(process.env.REVALIDATE_SECONDS || 300);

    async function fetchEvent(slug: string): Promise<EventItem | null> {
      const doc = await builder.get('event', {
        fields: 'data',
        options: { noTargeting: true },
        query: { 'data.slug': slug }
      });
      if (!doc?.data) return null;
      const d: any = doc.data;
      return {
        title: d.title,
        slug: d.slug,
        eventDate: d.eventDate,
        venue: d.venue,
        city: d.city,
        country: d.country,
        ticketUrl: d.ticketUrl,
        price: d.price,
        image: d.image,
        description: d.description
      };
    }

    export default async function EventDetailPage({ params }: { params: { slug: string } }) {
      const event = await fetchEvent(params.slug);
      if (!event) {
        return (
          <main className="container mx-auto max-w-3xl px-4 md:px-6 py-10">
            <p>Évènement introuvable.</p>
            <Link href="/events" className="underline">← Retour aux évènements</Link>
          </main>
        );
      }
      const date = new Date(event.eventDate);
      const fmt = new Intl.DateTimeFormat(undefined, { dateStyle: 'full' }).format(date);
      return (
        <main className="container mx-auto max-w-3xl px-4 md:px-6 py-10 space-y-6">
          <Link href="/events" className="underline">← Tous les concerts</Link>
          <header className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">{event.title}</h1>
            <p className="opacity-80">{fmt} • {[event.venue, event.city, event.country].filter(Boolean).join(', ')}</p>
          </header>
          {event.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={event.image} alt={event.title} className="rounded-2xl w-full object-cover max-h-[420px]" />
          ) : null}
          {event.description ? <div className="prose" dangerouslySetInnerHTML={{__html: event.description}} /> : null}
          <div className="flex gap-3">
            {event.ticketUrl ? <a href={event.ticketUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-black text-white">Billets</a> : null}
          </div>
        </main>
      );
    }
