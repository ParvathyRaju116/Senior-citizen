import React, { useState } from 'react';
import './AdminDetails.css';
import ServiceGraph from '../AdminGraph/ServiceGraph';
import Payment from '../Admin Dashboard/AdminPayment/Payment';

function AdminDetails() {

  return (
    <div >
      <i className="fa fa-home icon-with-text"></i>
      <h6 className='d1'>Dashboard</h6>

      <div className="admin-details-container">
        {/* First Booking */}
        <div className="admin-detail">
          <h5 className='mt-2 me-1 p-1 b1'>350</h5>
          <h6 className='b2'>Clients</h6>
        </div>
        {/* Second Booking */}
        <div className="admin-detail">
          <h5 className='mt-2 me-1 p-1 b1'>100</h5>
          <h6 className='b3'>Service provider</h6>
        </div>
        {/* Third Booking */}
        <div className="admin-detail">
          <h5 className='mt-2 me-1 p-1 b1'>400</h5>
          <h6 className='b3'>Appointments</h6>
        </div>
      </div>

     
      <div className="additional-row" >
        
        <div className="admin-detail "style={{backgroundColor:"white"}} >
        
<ServiceGraph></ServiceGraph>
        </div>
        {/* Second identical div */}
        <div className="admin-detail" style={{backgroundColor:"white"}}>
         <Payment></Payment> 
        </div>
      </div>
    </div>
  );
}

export default AdminDetails;
