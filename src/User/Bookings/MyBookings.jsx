import React from 'react'
import Header from '../Header/Header'
import { Container,Col } from 'react-bootstrap'
import './mybookings.css'


function MyBookings() {
  return (
    <div>
          <Header />
          <Container style={{ marginTop: '50px' }} >
          <h1 className='text-center mb-3'>Booking Details</h1>
                  <Col md={4}  className=' d-flex justify-content-center align-items-center' style={{width:'400px',height:'400px'}}>
                  <div style={{width:'400px',height:'auto',}} className='div2 text-center mb-5 p-3'>
            <div className='mt-5 text-light'>
              <p>Dr Name : Aryamol</p>
              <p>Service : Emergency</p>
              <p>Booking Date : 05/04/2024</p>
              <p>Booking Time : 05:30</p>
              <p>Rate : 5000</p>
              <p>Action : Approved</p>
            </div>
                 </div>
                  </Col>
          </Container>
    </div>
  )
}

export default MyBookings
