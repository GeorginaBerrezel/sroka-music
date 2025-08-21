/* app/api/builder-revalidate/route.ts */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = process.env.BUILDER_WEBHOOK_SECRET;
  const given = req.headers.get('x-builder-secret') || req.nextUrl.searchParams.get('secret');
  if (secret && given !== secret) {
    return NextResponse.json({ revalidated: false, message: 'Invalid secret' }, { status: 401 });
  }
  try {
    const { slug } = await req.json().catch(() => ({}));
    if ('revalidatePath' in (await import('next/cache'))) {
      const { revalidatePath } = await import('next/cache');
      revalidatePath('/events');
      if (slug) revalidatePath(`/events/${slug}`);
    }
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (e: any) {
    return NextResponse.json({ revalidated: false, error: String(e) }, { status: 500 });
  }
}
