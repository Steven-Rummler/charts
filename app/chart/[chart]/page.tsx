import { kv } from "@vercel/kv";

export default async function Chart({ params }: { params: { chart: string } }) {
  const { chart } = params;
  try {
    const chartResult = await kv.hgetall(`chart:${chart}`);
    return <main>
      <h1>Embedded Chart</h1>
      <p>{JSON.stringify(chartResult)}</p>
    </main>;
  } catch (e) {
    console.log(e);
    return <main>
      <h1>Chart Not Found</h1>
    </main>;
  }
}