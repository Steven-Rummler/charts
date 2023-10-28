'use client';

export function AddChartButton() {
  return <button onClick={addChart}>Add Chart</button>;
}

function addChart() {
  console.log('addChart');
  const url = 'api/charts';
  fetch(url, { method: 'POST', body: JSON.stringify({ 'Hello': 'World' }) }).catch(console.error);
}