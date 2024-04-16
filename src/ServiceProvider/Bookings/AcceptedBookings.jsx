import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { getAllAcceptedBookings } from '../../Services/allApi';
import './Accepted.css'

function AcceptedBookings() {

  const [accepted,setAccepted] = useState([])

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const getAcceptedBookings = async () => {
    const result = await getAllAcceptedBookings();
    const formattedBookings = result.data.acceptedBookings.map(booking => ({
      ...booking,
      startDate: formatDate(booking.startDate),
      endDate: formatDate(booking.endDate)
    }));
    setAccepted(formattedBookings);
  }

  useEffect(() => {
    getAcceptedBookings();
  }, []);

  return (
    <>
      <Navbar />
      <Container className='mt-5'>
        <h1 className='text-center text-primary'>Accepted Bookings</h1>
        {accepted?.length > 0 ? (
          accepted.map((item) => (
            <div className="card2 card col-md-4 mt-5 text-center shadow" style={{ width: '18rem',backgroundColor:'' }} key={item.id}>
              <ul className="list-group list-group-light list-group-small">
                <li className="list-group-item px-3">Username : {item.userName}</li>
                <li className="list-group-item px-3">Service Provider Name : {item.serviceProviderName}</li>
                <li className="list-group-item px-3">Service : {item.services}</li>
                <li className="list-group-item px-3">Type of Care : {item.typeOfCare}</li>
                <li className="list-group-item px-3">Start Date : {item.startDate}</li>
                <li className="list-group-item px-3">End Date : {item.endDate}</li>
                <li className="list-group-item px-3">Starting Time : {item.startingTime}</li>
                <li className="list-group-item px-3">Ending Time : {item.endingTime}</li>
                <li className="list-group-item px-3">Location : {item.location}</li>
                <li className="list-group-item px-3">Service Provider Status : {item.serviceProviderStatus}</li>
                <li className="list-group-item px-3">Admin Status : {item.adminStatus}</li>
              </ul>
            </div>
          ))
        ) : (
          <h1 className='text-center text-danger'>No Accepted Booking Available</h1>  
        )}
      </Container>
    </>
  )
}

export default AcceptedBookings;
