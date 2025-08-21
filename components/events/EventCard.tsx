'use client';
/* components/events/EventCard.tsx */
import * as React from 'react';
import type { EventItem } from '@/types/event';
import Link from 'next/link';

export function EventCard({ e }: { e: EventItem }) {
  const date = new Date(e.eventDate);
  const dateFmt = new Intl.DateTimeFormat(undefined, { dateStyle: 'full', timeStyle: undefined }).format(date);
  return (
    <article className="rounded-2xl shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-xl md:text-2xl font-semibold truncate">
            <Link href={`/events/${e.slug}`} className="hover:underline">{e.title}</Link>
          </h3>
          <p className="text-sm opacity-80">{dateFmt}{(e.city || e.venue) ? ' • ' : ''}{[e.venue, e.city, e.country].filter(Boolean).join(', ')}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {e.ticketUrl && (
            <a href={e.ticketUrl} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl border hover:bg-black hover:text-white transition">
              Billets
            </a>
          )}
          <Link href={`/events/${e.slug}`} className="px-3 py-2 rounded-xl bg-black text-white hover:opacity-90 transition">
            Infos
          </Link>
        </div>
      </div>
    </article>
  );
}
