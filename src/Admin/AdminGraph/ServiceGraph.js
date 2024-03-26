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
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[{ data: [4, 3, 5] }]} // Keep only one set of data
        width={300}
        height={300}
      />
      <div>
        
      </div>
    </div>
    
  );
}

export default ServiceGraph;
