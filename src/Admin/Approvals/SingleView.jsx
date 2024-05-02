import React from "react";
import { Form } from "react-bootstrap";
import "./SingleView.css";
import { useLocation } from "react-router-dom";

const SingleView = () => {
  const location = useLocation();
  const serviceProvider = location.state;
  console.log(serviceProvider);
  return (
    <div className="align">
      <img
        className="rounded-circle mt-5"
        width="170px"
        alt="noimagefound"
        src={serviceProvider.profile_img}
      ></img>

      <div className="form-cntrl">
        <Form.Label htmlFor="username" className="mt-3">
          Username:
        </Form.Label>
        <Form.Control
          type="text"
          id="username"
          aria-label="Disabled input example"
          value={serviceProvider.username}
          readOnly
        />
        <Form.Label htmlFor="Email" className="mt-3">
          {" "}
          Email:
        </Form.Label>
        <Form.Control
          type="text"
          id="Email"
          aria-label="Disabled input example"
          value={serviceProvider.email}
          readOnly
        />
        <Form.Label htmlFor="Phonenumber" className="mt-3">
          Phone Number:
        </Form.Label>
        <Form.Control
          id="Phonenumber"
          type="text"
          aria-label="Disabled input example"
          value={serviceProvider.mobile}
          readOnly
        />
        <Form.Label htmlFor="Service" className="mt-3">
          Service:
        </Form.Label>

        <Form.Control
          type="text"
          id="Service"
          aria-label="Disabled input example"
          value={serviceProvider.service}
          readOnly
        />
        <Form.Label htmlFor="uSpecialization" className="mt-3">
          Specialization:
        </Form.Label>
        <Form.Control
          type="text"
          id="Specialization"
          aria-label="Disabled input example"
          value={serviceProvider.specialization}
          readOnly
        />
        <Form.Label htmlFor="Qualification" className="mt-3">
          Qualification:
        </Form.Label>
        <Form.Control
          type="text"
          id="Qualification"
          aria-label="Disabled input example"
          value={serviceProvider.username}
          readOnly
        />
        <Form.Label htmlFor="Rate" className="mt-3">
          Rate/hr:
        </Form.Label>
        <Form.Control
          type="text"
          id="Rate"
          aria-label="Disabled input example"
          value={serviceProvider.rate}
          readOnly
        />
      </div>
    </div>
  );
};

export default SingleView;
