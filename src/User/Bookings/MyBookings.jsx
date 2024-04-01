import React from 'react'
import Header from '../Header/Header'
import { Container,Col } from 'react-bootstrap'
import './mybookings.css'

function MyBookings() {
  return (
    <div>
          <Header />
          <Container style={{ marginTop: '130px' }} >
          <h1 className='text-center text-light mb-5'>Booking Details</h1>
                  <Col md={4}  className=' d-flex justify-content-center align-items-center' style={{width:'400px',height:'500px'}}>
                  <div style={{width:'400px',height:'500px',}} className='div2 text-center mb-5'>
                      
                 </div>
                  </Col>
          </Container>
    </div>
  )
}

export default MyBookings
