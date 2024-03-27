import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function ServiceGraph() {
  return (
    <div>
      <h2 className='mt-5 text-center' style={{ color: "brown" }}>Services</h2>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Homecare', 'Therapy', 'Nursing Care', 'Doctor'] }]}
        series={[
          { data: [4, 3, 5], color: ['#9C6644', '#7F5539', '#B08968'] } 
        ]}
        width={400}
        height={200}
      />
    </div>
  );
}

export default ServiceGraph;
