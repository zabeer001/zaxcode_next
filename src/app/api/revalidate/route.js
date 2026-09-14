import { timingSafeEqual } from 'node:crypto';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

function authorized(request) {
  const expected = process.env.REVALIDATION_SECRET || '';
  const received = request.headers.get('x-revalidation-secret') || '';
  if (!expected || expected.length !== received.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(received));
}

export async function POST(request) {
  if (!authorized(request)) return NextResponse.json({ message: 'Unauthorized.' }, { status: 401 });
  const { slug, previous_slug: previousSlug } = await request.json();
  revalidateTag('blogs', 'max');
  revalidatePath('/blog');
  revalidatePath('/sitemap.xml');
  for (const value of [slug, previousSlug].filter(Boolean)) { revalidateTag(`blog:${value}`, 'max'); revalidatePath(`/blog/${value}`); }
  return NextResponse.json({ revalidated: true, slug: slug || null, previous_slug: previousSlug || null });
}
