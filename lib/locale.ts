import { headers, cookies } from 'next/headers';

const SUPPORTED = ['fr-FR','en-US'] as const;
export type SupportedLocale = typeof SUPPORTED[number];

function normalize(lang?: string): SupportedLocale {
  if (!lang) return 'fr-FR';
  const l = lang.toLowerCase();
  if (l.startsWith('fr')) return 'fr-FR';
  if (l.startsWith('en')) return 'en-US';
  return 'fr-FR';
}

export function getRequestLocale(): SupportedLocale {
  const c = cookies().get('lang')?.value;
  if (c && SUPPORTED.includes(c as SupportedLocale)) return c as SupportedLocale;

  const accept = headers().get('accept-language') ?? '';
  const first = accept.split(',')[0]?.trim();
  return normalize(first);
}
