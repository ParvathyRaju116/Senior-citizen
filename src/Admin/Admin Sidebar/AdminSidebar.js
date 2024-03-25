import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './AdminSidebar.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function AdminSidebar() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'scroll initial' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#525a6d" }}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa fa-bell "style={{ color: 'white' }} ></i> 
          </a>
        </li>
        <li className="nav-item mx-2"  >
        <a className="nav-link" href="#">
        <i className="fa fa-envelope" style={{ color: 'white' }}></i>

          </a> 
        </li>
        <li> 

        <Stack direction="row" spacing={2} className='mt-1' >
        <Avatar style={{ width: '30px', height: '30px' }} >A</Avatar>
              
            </Stack>

        </li>
        {/* Add more navbar items as needed */}
      </ul>
    </div>
  </div>
</nav>



      {/* Sidebar */}
      <CDBSidebar textColor="#fff" style={{ background: 'linear-gradient(to bottom, #525a6d, #eaa0a2)' }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit' }}>
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Cindy Baker"
                src="https://i.postimg.cc/BbqPkcnD/360-F-65756860-GUZwz-OKNMUU3-Hld-Fo-IA44qss7-ZIr-CG8-I.jpg"
                style={{ width: '50px', height: '50px' }}
              />
              <h6 className='mt-4 ms-2'>Admin </h6>
            </Stack>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" >
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{ padding: '20px 5px' }}>
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default AdminSidebar;
