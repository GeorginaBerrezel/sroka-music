export type EventItem = {
  title: string;
  slug: string;
  eventDate: string; // ISO
  venue?: string;
  city?: string;
  country?: string;
  ticketUrl?: string;
  price?: number;
  image?: string;
  description?: string;
};

export type EventView = EventItem & { dateText: string };
