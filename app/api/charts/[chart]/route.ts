import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET(request: Request, { params }: { params: { chart: string }}) {
  const chartKey = params.chart;
  if (typeof chartKey !== 'string') return NextResponse.json(null);
  const chart = await kv.hgetall(`chart:${chartKey}`);
  return NextResponse.json(chart);
}