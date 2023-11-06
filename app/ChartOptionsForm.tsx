'use client';

import { useCallback, useState } from "react";

import type { ApexOptions } from "apexcharts";
import { useRouter } from "next/navigation";

export function ChartOptionsForm() {
  const router = useRouter();
  const [chartType, setChartType] = useState<ApexChart['type']>('bar');

  const addChart = useCallback(function addChart() {
    const url = 'api/charts';
    const data: ApexAxisChartSeries | ApexNonAxisChartSeries = [];
    const options: ApexOptions = {
      chart: {
        type: chartType,
      }
    }
    fetch(url, {
      method: 'POST', body: JSON.stringify({
        options,
        data
      })
    })
      .then((response) => response.json())
      .then((data) => router.push(`/chart/${data.chartKey}`))
      .catch(console.error);
  }, [chartType, router]);

  return <>
    <select value={chartType} onChange={e => {
      if (e.target.value !== 'bar' && e.target.value !== 'line') return;
      setChartType(e.target.value);
    }}>
      <option value='bar'>Bar Chart</option>
      <option value='line'>Line Chart</option>
    </select>
    <button onClick={addChart}>Add Chart</button>
  </>;
}
