'use client';

import { useCallback } from "react";
import { useRouter } from "next/navigation";

export function AddChartButton() {
  const router = useRouter();

  const addChart = useCallback(function addChart() {
    const url = 'api/charts';
    fetch(url, { method: 'POST', body: JSON.stringify({ 'Hello': 'World' }) })
      .then((response) => response.json())
      .then((data) => router.push(`/chart/${data.chartKey}`))
      .catch(console.error);
  }, [router]);

  return <button onClick={addChart}>Add Chart</button>;
}

