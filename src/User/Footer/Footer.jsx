import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
     <div style={{width:'100%',height:'40vh',backgroundColor:'whitesmoke'}} className='mt-5'>
        <Container className='pt-5'>
            <Row className='ms-5'>
                <Col md={4}>
                    <h3>Services</h3>
                    <p>Therapy</p>
                    <p>Day care</p>
                    <p>Virtual Assistance</p>
                    <p>Ambulance</p>
                </Col>
                <Col md={4}>
                    <h3>Contact</h3>
                    <p>953686145</p>
                    <p>elderlycare@gmail.com</p>
                    <div className='d-flex  mt-2'>
                    <i class="fa-brands fa-instagram fa-2x"></i>
                    <i class="fa-brands fa-whatsapp ms-3 fa-2x"></i>
                    <i class="fa-brands fa-facebook ms-3 fa-2x"></i>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>News Teller</h3>
                    <div className='d-flex'>
                        <input type="text" className='form-control mt-3 w-75' placeholder='email'/>
                        <button className='btn btn-warning w-50 ms-3'>Submit</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div> 
    </>
  )
}

export default Footer
