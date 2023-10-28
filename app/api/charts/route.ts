import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  const chartKeys = await kv.smembers('charts');
  if (chartKeys.length === 0) return NextResponse.json([]);
  const chartsTransaction = kv.multi();
  chartKeys.forEach(key => chartsTransaction.hgetall(`chart:${key}`));
  const charts = await chartsTransaction.exec();
  return NextResponse.json(charts);
}

export async function POST(request: Request) {
  const chartKey = Math.random().toString(36).slice(2);
  const chart = await request.json();
  const saveTransaction = kv.multi();
  saveTransaction.sadd('charts', chartKey);
  saveTransaction.hset(`chart:${chartKey}`, chart);
  await saveTransaction.exec();
  return NextResponse.json({ chartKey });
}