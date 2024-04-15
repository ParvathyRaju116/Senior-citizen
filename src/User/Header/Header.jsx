import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Avatar } from '@mui/material';
import './Headre.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link,  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ChatBox from '../Chat/ChatBox';


function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
    Swal.fire({
      title: 'Logged out',
      icon: 'success',
    });
  };

  return (
    <>
      <Navbar expand="lg" style={{ height: '70px' }}>
        <Container className='header'>
          <Navbar.Brand className='fw-bolder'>LiveCare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Dropdown className='ms-auto'>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <Avatar
                  alt="Remy Sharp"
                  src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/user-home' style={{ textDecoration: 'none', color: 'black' }}>Home</Dropdown.Item>
                <Dropdown.Item as={Link} to='/user-profile' style={{ textDecoration: 'none', color: 'black' }}>Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to='/user-complaints' style={{ textDecoration: 'none', color: 'black' }}>Complaints</Dropdown.Item>
                <Dropdown.Item as={Link} to='/user-bookings' style={{ textDecoration: 'none', color: 'black' }}>My Bookings</Dropdown.Item>
                <Dropdown.Item as={Link} to='/user-webinar' style={{ textDecoration: 'none', color: 'black' }}>Webinar</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
          <ChatBox></ChatBox>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
