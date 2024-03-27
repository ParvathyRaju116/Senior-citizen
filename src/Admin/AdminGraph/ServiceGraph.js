import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function ServiceGraph() {
  return (
    <div>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[{ data: [4, 3, 5] }]} // Keep only one set of data
        width={300}
        height={300}
      />
    </div>
  );
}

export default ServiceGraph;
