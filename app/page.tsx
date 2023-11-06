import { ChartOptionsForm } from "./ChartOptionsForm";

export default async function Home() {
  try {
    const url = `${process.env.VERCEL_URL}/api/charts`;
    const result = await fetch(url);
    const parsed = await result.json();
    console.log(parsed);
  } catch (e) {
    console.log(e);
  }

  return <main>
    <h1>Embedded Chart Builder</h1>
    <ChartOptionsForm />
  </main>;
}