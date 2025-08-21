import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  const { lang } = await req.json().catch(() => ({}));
  const allowed = ['fr-FR','en-US'];
  const res = NextResponse.json({ ok: allowed.includes(lang), lang });
  if (allowed.includes(lang)) {
    res.cookies.set('lang', lang, { path: '/', maxAge: 60*60*24*365 });
  }
  return res;
}
