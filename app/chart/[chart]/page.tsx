export default async function Chart(props: unknown) {
  if (typeof props !== 'object' || props === null) return chartNotFound;
  if (!('params' in props) || typeof props.params !== 'object' || props.params === null) return chartNotFound;
  if (!('chart' in props.params) || typeof props.params.chart !== 'string') return chartNotFound;
  const url = `${process.env.VERCEL_URL}/api/charts/${props.params.chart}`;

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