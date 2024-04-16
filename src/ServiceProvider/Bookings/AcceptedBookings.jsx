import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { getAllAcceptedBookings } from '../../Services/allApi';


function AcceptedBookings() {

const [accepted,setAccepted] = useState([])
  const getAcceptedBookings = async () => {
    const result = await getAllAcceptedBookings()
    console.log(result.data.acceptedBookings
    );
    setAccepted(result.data.acceptedBookings
    )
  }

  useEffect(() => {
    getAcceptedBookings()
  },[])
  return (
    <>
      <Navbar />
      <Container className='mt-5'>
      <h1 className='text-center text-primary'>Accepted Bookings</h1>
        {<div className="card col-md-4 mt-5" style={{ width: '18rem' }}>
          <ul className="list-group list-group-light list-group-small">
            <li className="list-group-item px-3">Username : </li>
            <li className="list-group-item px-3">Dapibus ac facilisis in</li>
            <li className="list-group-item px-3">Vestibulum at eros</li>
          </ul>
        </div>}
      </Container>
    </>
  )
}

export default AcceptedBookings
