import { kv } from "@vercel/kv";
import { ChartOptionsForm } from "./ChartOptionsForm";

export default async function Home() {
  let chartCount = -1;

  try {
    const chartKeys = await kv.smembers('charts');
    // if (chartKeys.length === 0) throw new Error('No charts found');
    // const chartsTransaction = kv.multi();
    // chartKeys.forEach(key => chartsTransaction.hgetall(`chart:${key}`));
    // const charts = await chartsTransaction.exec();
    chartCount = chartKeys.length;
  } catch (e) {
    console.log(e);
  }

  return <main>
    <h1>Embedded Chart Builder</h1>
    <p>{chartCount} chart{chartCount === 1 ? '' : 's'} built!</p>
    <ChartOptionsForm />
  </main>;
}