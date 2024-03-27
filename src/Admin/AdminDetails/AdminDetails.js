import React from 'react'
import './AdminDetails.css'
import AdminAttendance from '../AdminAttendance/AdminAttendance'

function AdminDetails() {
  return (
    <div   >

  <i className="fa fa-home   icon-with-text"></i>
  <h6 className='d1'  >DashBoard</h6>

<div className="admin-details-container" >

<div className="admin-detail home-icon-container">
        <div className='divs' >
          <h5>Bookings</h5>
          <div>

          </div>
        </div>
      </div>
      <div className="admin-detail">

        <AdminAttendance></AdminAttendance>
      </div>
     



</div>




    </div>
  )
}

export default AdminDetails