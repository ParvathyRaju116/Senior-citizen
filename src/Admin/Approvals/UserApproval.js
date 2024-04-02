import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import ServiceApproval from './ServiceApproval';

function UserApproval() {
  return (
    <div style={{ display: 'flex' }}>
    
      <CDBSidebar  textColor="#fff" backgroundColor="#333" style={{ background: 'linear-gradient(to bottom, #9C6644, #DDB892)', width: '280px',height:"100vh" }}>
        <CDBSidebarContent className="sidebar-content " >
          <CDBSidebarMenu  >
            <NavLink exact to="/admin-approval" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="message">ServiceProvider Request</CDBSidebarMenuItem>
            </NavLink>
           
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list"> Service Providers List</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin-user" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">Users List</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{ padding: '20px 5px' }}>
            <Button style={{ color: "white" }}><h5>Log Out </h5></Button>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      
      {/* ServiceApproval Component */}
      <ServiceApproval />
    </div>
  )
}

export default UserApproval;
