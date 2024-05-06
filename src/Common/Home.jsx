import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Avatar } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import './home.css'

function Header() {
  const navigate = useNavigate();

  const handleAdmin = () => {
    navigate("/admin-login");
  };

  const handleUser = () => {
    navigate("/user-login");
  };

  return (
    <>
      <Navbar expand="lg" style={{ height: "70px", width: "100%" }}>
        <Container className="header">
          <Navbar.Brand className="fw-bolder">LiveCare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Dropdown className="ms-auto">
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn-icons-png.flaticon.com/512/5509/5509584.png"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link
                to="/user-login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Dropdown.Item as="span">
                  <span
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={handleUser}
                  >
                    User
                  </span>
                </Dropdown.Item>
              </Link>
              <Link
                to="/admin-login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Dropdown.Item as="span">
                  <span
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={handleAdmin}
                  >
                    Admin
                  </span>
                </Dropdown.Item>
              </Link>
              
                <Dropdown.Item as="span">
                  <span
                    style={{ textDecoration: "none", color: "black" }}
                    
                  >
                    <Link to={'/service-login'} style={{color:'black'}}>Service Provider</Link>
                  </span>
                </Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
      <div className="chome d-flex justify-content-center align-items-center">
       
         {/*  <Row>
            <Col md={6} className="text-light">
              <h1 className="ms-5">
                Expert care for the <br /> Elderly
              </h1>
              <div className="mt-2 ms-5">
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto sunt alias earum fugit molestiae minus odit
                  quibusdam{" "}
                </h6>
              </div>
              <button className="btn btn-primary ms-5 mt-3">
                GET IN TOUCH
              </button>
            </Col>
            <Col md={6}></Col>
          </Row> */}
       
      </div>
      <div className="services mb-5">
        <Container>
          <h1 className="mt-3 text-center text-dark mb-5">SERVICES</h1>

          <Row>
            <Col md={4}>
              <div className="therapy Card shadow flex-column rounded">
                <h3 className="mt-3">Therapy</h3>
                <i class="fa-solid fa-person-cane fa-2x mb-3"></i>
              </div>
            </Col>
            <Col md={4}>
              <div className="Card shadow therapy ms-5 flex-column rounded">
                <h3>One day Checkup</h3>
                <i class="fa-solid fa-calendar-day fa-2x mt-1"></i>
              </div>
            </Col>
            <Col md={4}>
              <div className="Card shadow therapy ms-5 flex-column rounded">
                <h3>Virtual Assistance</h3>
                <i class="fa-solid fa-user-doctor fa-2x"></i>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={4}>
              <div className="therapy Card shadow flex-column rounded">
                <h3 className="mt-3">Day Care</h3>
                <i class="fas fa-home fa-2x"></i>
              </div>
            </Col>
            <Col md={4}>
              <div className="Card shadow therapy ms-5 flex-column rounded">
                <h3>Appoinments</h3>
                <i class="fa-regular fa-calendar-check fa-2x"></i>
              </div>
            </Col>
            <Col md={4}>
              <div className="Card shadow therapy ms-5 flex-column rounded">
                <h3>Ambulance</h3>
                <i class="fa-solid fa-truck-medical fa-2x"></i>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={4}>
              <div className="therapy Card shadow flex-column rounded">
                <h3 className="mt-3">Night Care</h3>
                <i class="fas fa-bed fa-2x"></i>
              </div>
            </Col>
            <Col md={4}>
              <div className="Card shadow therapy ms-5 flex-column rounded">
                <h3>Emergency</h3>
                <i class="fas fa-exclamation-triangle fa-2x"></i>
              </div>
            </Col>
            <Col md={4}>
              <div className="Card shadow therapy ms-5 flex-column rounded">
                <h3>Treatment</h3>
                <i class="fas fa-medkit fa-2x"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="d-flex justify-content-center align-items-center mb-5">
        <Container>
          <h1 className="text-dark text-center mb-5">ABOUT US</h1>
          <Row>
            <Col md={6}>
              <img
                style={{ width: "250px", height: "400px" }}
                src="https://papayacare.com/wp-content/uploads/2023/09/Caring-for-the-Elderly-6-Things-to-Remember.jpg"
                alt=""
                className="rounded"
              />
              <img
                style={{
                  width: "250px",
                  height: "400px",
                  borderRadius: "10px",
                }}
                src="https://hss-me.com/wp-content/uploads/2022/08/Elder-care-dubai.jpg"
                alt=""
                className="mt-5 ms-4 pt-5"
              />
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident dolores, aut delectus, nesciunt voluptatem facere,
                ducimus reprehenderit quos ad magnam laborum cupiditate est
                expedita sit repellendus assumenda explicabo odio
                necessitatibus. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Ratione corporis, veritatis minima numquam
                perferendis harum voluptate eveniet voluptatum aspernatur cum id
                laudantium inventore dolor pariatur laborum porro sit quia
                ullam?
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      
    </>
  );
}

export default Header;
