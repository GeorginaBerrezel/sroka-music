/* app/events/page.tsx */
    import { builder } from '@/lib/builder';
    import { EventCard } from '@/components/events/EventCard';
    import EmptyState from '@/components/events/EmptyState';
    import type { EventItem } from '@/types/event';

    export const revalidate = Number(process.env.REVALIDATE_SECONDS || 300);

    async function fetchEvents(): Promise<EventItem[]> {
      const results = await builder.getAll('event', {
        fields: 'data',
        options: { noTargeting: true },
        sort: { 'data.eventDate': 1 },
        limit: 100,
        query: {
          'data.eventDate': { $gte: new Date().toISOString() }
        }
      });
      return results.map((doc: any) => ({
        title: doc.data.title,
        slug: doc.data.slug,
        eventDate: doc.data.eventDate,
        venue: doc.data.venue,
        city: doc.data.city,
        country: doc.data.country,
        ticketUrl: doc.data.ticketUrl,
        price: doc.data.price,
        image: doc.data.image,
        description: doc.data.description
      }));
    }

    export default async function EventsPage() {
      const events = await fetchEvents();
      return (
        <main className="container mx-auto max-w-4xl px-4 md:px-6 py-10 space-y-6">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold">Concerts à venir</h1>
            <p className="opacity-80">Gérés depuis Builder.io (modèle “event”).</p>
          </header>
          <section className="grid gap-4">
            {events.length ? (
              events.map((e) => <EventCard key={e.slug} e={{...e}} />)
            ) : (
              <EmptyState />
            )}
          </section>
        </main>
      );
    }
