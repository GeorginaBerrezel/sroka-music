/* types/event.ts */
export type EventItem = {
  title: string;
  slug: string;
  eventDate: string; // ISO date
  venue?: string;
  city?: string;
  country?: string;
  ticketUrl?: string;
  price?: number;
  image?: string; // URL
  description?: string; // plain text or HTML snippet
};
