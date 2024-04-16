import React, { useEffect, useState } from 'react';
import './AdminDetails.css';
import ServiceGraph from '../AdminGraph/ServiceGraph';
import Payment from '../Admin Dashboard/AdminPayment/Payment';
import { getAllSP, getUserAPI } from '../../Services/allApi';

function AdminDetails() {
  const [service, setService] = useState([]);
  const [user, setUser] = useState([]);

  const getService = async () => {
    try {
      const result = await getAllSP();
      setService(result.data?.allApprovedServiceproviders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getService();
  }, []);


  const getAllUser = async () => {
    try {
      const result = await getUserAPI();
      setUser(result.data?.allUsersList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);



  console.log(user);

  return (
    <div>
      <div className="d-flex align-items-center">
        <i className="iconhome fa fa-home icon-with-text"></i>
        <h6 className='d1 ms-1'>Dashboard</h6>
      </div>
      <div className="admin-details-container">
      
        <div className="admin-detail">
          <h5 className='mt-2 me-1 p-1 b1'>{user.length}</h5>
          <h6 className='b2'>Clients</h6>
        </div>
        
        <div className="admin-detail">
          <h5 className='mt-2 me-1 p-1 b1'>{service.length}</h5>
          <h6 className='b3'>Service provider</h6>
        </div>
       
        <div className="admin-detail">
          <h5 className='mt-2 me-1 p-1 b1'>400</h5>
          <h6 className='b3'>Appointments</h6>
        </div>
      </div>

      <div className="additional-row" >
        <div className="admin-detail" style={{ backgroundColor: "white" }}>
          <ServiceGraph></ServiceGraph>
        </div>
      
        <div className="admin-detail" style={{ backgroundColor: "white" }}>
          <Payment></Payment>
        </div>
      </div>
    </div>
  );
}

export default AdminDetails;
