import React, { useState } from 'react';
import Header from '../Header/Header';
import { Container, Col } from 'react-bootstrap';
import './mybookings.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function MyBookings() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />
      <Container style={{ marginTop: '50px' }}>
        <h1 className='text-center mb-3'>Booking Details</h1>
        <Col md={4} className='d-flex justify-content-center align-items-center' style={{ width: '400px', height: '400px' }}>
          <div style={{ width: '400px', height: 'auto' }} className='div2 text-center mb-5 p-3'>
            <div className='mt-5 text-light'>
              <p>Dr Name : Aryamol</p>
              <p>Service : Emergency</p>
              <p>Booking Date : 05/04/2024</p>
              <p>Booking Time : 05:30</p>
              <p>Rate : 5000</p>
              <p>Action : Approved</p>
              <Button onClick={handleOpen}>Feedback</Button>
            </div>
          </div>
        </Col>
      </Container>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='mb-3'>
            Add Your Feedback
          </Typography>
          <Typography id="modal-modal-description" xl={{ mt: 2 }}>
          <Stack spacing={1}>
      <Rating name="size-medium" className='mb-3' defaultValue={2} />
    </Stack> 
            <TextField style={{ width: '100%'}} id="outlined-multiline-static" label="Multiline" multiline rows={5} placeholder="Enter your feedback" />
          </Typography>
          <div className="d-flex justify-content-center">
            <button className='btn btn-outline-success mt-3'>Submit</button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default MyBookings;
