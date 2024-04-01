import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Avatar } from '@mui/material';
import './Headre.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar expand="lg"  style={{height:'70px'}}>
        <Container className='header'>
          <Navbar.Brand className='fw-bolder'>LiveCare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Dropdown className='ms-auto'>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <Avatar alt="Remy Sharp" src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item><Link to={'/user-home'} style={{textDecoration:'none',color:'black'}}> Home</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/user-profile'} style={{textDecoration:'none',color:'black'}}> Profile</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/user-feedback'} style={{textDecoration:'none',color:'black'}}> Feedback</Link></Dropdown.Item>
                <Dropdown.Item><Link to={'/user-complaints'} style={{ textDecoration: 'none', color: 'black' }}> Complaints</Link></Dropdown.Item>
                <Dropdown.Item><Link to={'/user-bookings'} style={{textDecoration:'none',color:'black'}}> My Bookings</Link></Dropdown.Item>
              <Dropdown.Item href="#action/3.3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
