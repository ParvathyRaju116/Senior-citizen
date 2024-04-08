import React, { useState } from 'react';
import Header from '../Header/Header';
import { Container, Col } from 'react-bootstrap';
import './mybookings.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function MyBookings() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header />
      <Container style={{ marginTop: '50px' }}>
        <h1 className='text-center mb-3'>Booking Details</h1>
        <Col md={4} className=' d-flex justify-content-center align-items-center' style={{ width: '400px', height: '400px' }}>
          <div style={{ width: '400px', height: 'auto' }} className='div2 text-center mb-5 p-3'>
            <div className='mt-5 text-light'>
              <p>Dr Name : Aryamol</p>
              <p>Service : Emergency</p>
              <p>Booking Date : 05/04/2024</p>
              <p>Booking Time : 05:30</p>
              <p>Rate : 5000</p>
              <p>Action : Approved</p>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Click
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </Collapse>
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default MyBookings;
