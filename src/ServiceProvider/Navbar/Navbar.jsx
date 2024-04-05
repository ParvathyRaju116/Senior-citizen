import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
} from 'mdb-react-ui-kit';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [openNav, setOpenNav] = useState(false);

    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.clear()
        navigate('/')
    }
  
  return (
    <div>
     <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer>
        <MDBNavbarBrand href='#'>LiveCare</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink ><Link to={'/service-bookings'} style={{textDecoration:'none',color:'black'}}>Bookings</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink><Link to={'/service-attendence'} style={{textDecoration:'none',color:'black'}}>Attendence</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink><Link to={'/service-request'} style={{textDecoration:'none',color:'black'}}>Request</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={logout}>Logout</MDBNavbarLink>
            </MDBNavbarItem>              
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Navbar
