// app/events/page.tsx
import { builder } from '@/lib/builder';
import { EventCard } from '@/components/events/EventCard';
import EmptyState from '@/components/events/EmptyState';
import type { EventItem, EventView } from '@/types/event';
import { getRequestLocale } from '@/lib/locale';

export const revalidate = Number(process.env.REVALIDATE_SECONDS || 300);

async function fetchEvents(): Promise<EventItem[]> {
  const results = await builder.getAll('event', {
    fields: 'data',
    options: { noTargeting: true },
    sort: { 'data.eventDate': 1 },
    limit: 100,
    query: { 'data.eventDate': { $gte: new Date().toISOString() } },
  });

  // Map défensif: on ne garde que les docs avec .data
  return results
    .map((doc: any) => doc?.data)
    .filter(Boolean)
    .map((d: any) => ({
      title: d.title,
      slug: d.slug,
      eventDate: d.eventDate,
      venue: d.venue,
      city: d.city,
      country: d.country,
      ticketUrl: d.ticketUrl,
      price: d.price,
      image: d.image,
      description: d.description,
    }));
}

export default async function EventsPage() {
  const events = await fetchEvents();
  const locale = getRequestLocale();

  const view: EventView[] = events.map((e) => ({
    ...e,
    dateText: new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(new Date(e.eventDate)),
  }));

  return (
    <main className="container mx-auto max-w-4xl px-4 md:px-6 py-10 space-y-6">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold">Concerts à venir</h1>
        <p className="opacity-80">Gérés depuis Builder.io (modèle “event”).</p>
      </header>
      <section className="grid gap-4">
        {view.length ? view.map((e) => <EventCard key={e.slug} e={e} />) : <EmptyState />}
      </section>
    </main>
  );
}
