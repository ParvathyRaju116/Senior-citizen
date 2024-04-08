import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function UserAside() {
  return (
    <div>
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#333"
        style={{
          background: "linear-gradient(to bottom, #9C6644, #DDB892)",
         
          width: '300px',
          height: "100vh",
        }}
      >
        <CDBSidebarContent className="sidebar-content ">
          <CDBSidebarMenu>
            <NavLink exact to="/admin-approval" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="message">
                ServiceProvider Request
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/admin-service" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">
                {" "}
                Service Providers List
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin-user" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">Users List</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin-user" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">ServiceProvider Attendance</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div style={{ padding: "20px 5px" }}>
            <Button style={{ color: "white" }}>
              <h5 >Back </h5>
            </Button>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default UserAside;
