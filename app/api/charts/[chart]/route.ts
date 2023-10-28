import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET(request: Request, { params }: { params: { slug: string}}) {
  const chartKey = params.slug;
  console.log(`GET /api/charts/${chartKey}`);
  const chart = await kv.hgetall(`chart:${chartKey}`);
  return NextResponse.json(chart);
}