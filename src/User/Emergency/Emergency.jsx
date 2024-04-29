import React from 'react';
import Header from '../Header/Header';

function Emergency() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center' }} className='mt-5'>
        <table className='table-bordered' style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
          <thead>
            <tr>
              <th>SI NO</th>
              <th>Emergency support</th>
              <th>Location</th>
              <th>Phone no</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Emergency Service</td>
              <td>City Name</td>
              <td>123-456-7890</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Emergency;
