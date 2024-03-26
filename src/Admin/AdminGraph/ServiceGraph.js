import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function ServiceGraph() {
  // Sample data representing the number of services
  const data = [
    { group: 'group A', count: 4 },
    { group: 'group B', count: 3 },
    { group: 'group C', count: 5 }
  ];

  // Calculate the total count
  const totalCount = data.reduce((total, item) => total + item.count, 0);

  // Calculate the percentage for each group
  const percentageData = data.map(item => ({
    group: item.group,
    percentage: (item.count / totalCount) * 100
  }));

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'brown' }}>Service Distribution (Percentage)</h2>
      <BarChart
        xAxis={[{ scaleType: 'band', data: percentageData.map(item => item.group) }]}
        series={[{ data: percentageData.map(item => item.percentage) }]}
        yAxis={[{ scaleType: 'linear', tickFormat: (value) => `${value}%` }]} // Format yAxis ticks as percentages
        width={500}
        height={300}
        barWidthRatio={0.5} // Adjust bar width if needed
        barSpacingRatio={0.1} // Adjust space between bars if needed
        xAxisTickRotate={45} // Rotate x-axis ticks if needed
        yAxisTickRotate={0} // Rotate y-axis ticks if needed
        tooltip={(data) => `${data.category}: ${data.value.toFixed(2)}%`} // Customize tooltip if needed
      />
    </div>
  );
}

export default ServiceGraph;
