// app/page.tsx
import Hero from '../components/Hero';
import { builder } from '@/lib/builder';
import { EventCard } from '@/components/events/EventCard';
import type { EventItem, EventView } from '@/types/event';
import { getRequestLocale } from '@/lib/locale';

export const revalidate = Number(process.env.REVALIDATE_SECONDS || 300);

// 1) On va chercher le PROCHAIN event (>= maintenant), trié du plus proche au plus lointain, limité à 1
async function fetchNextEvent(): Promise<EventItem | null> {
  const results = await builder.getAll('event', {
    fields: 'data',
    options: { noTargeting: true },
    sort: { 'data.eventDate': 1 },
    limit: 1,
    query: { 'data.eventDate': { $gte: new Date().toISOString() } },
  });

  const d = results?.[0]?.data;
  if (!d) return null;

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
    description: d.description,
  };
}

export default async function Page() {
  const next = await fetchNextEvent();
  const locale = getRequestLocale();

  // On adapte au format attendu par EventCard (EventView)
  const view: EventView | null = next
    ? {
        ...next,
        dateText: new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(
          new Date(next.eventDate)
        ),
      }
    : null;

  return (
    <main className="p-0 m-0">
        <Hero />

      {/* 2) Prochain concert (optionnel si aucun) */}
      {view && (
        <section className="container section">
          <h2 className="h2">Prochain concert</h2>
          <div className="grid gap-4">
            <EventCard e={view} />
          </div>
          <div className="mt-4">
            <a href="/events" className="button">Voir toutes les dates</a>
          </div>
        </section>
      )}
    </main>
  );
}
