export default async function Chart({ params }: { params: { chart: string } }) {
  const { chart } = params;
  const url = `${process.env.VERCEL_URL}/api/charts/${chart}`;

  try {
    const result = await fetch(url);
    const parsed = await result.json();
    if (parsed === null) return chartNotFound;
    return <main>
      <h1>Embedded Chart</h1>
      <p>{JSON.stringify(parsed)}</p>
    </main>;
  } catch (e) {
    console.log(e);
    return chartNotFound;
  }
}

const chartNotFound = <main>
  <h1>Chart Not Found</h1>
</main>;