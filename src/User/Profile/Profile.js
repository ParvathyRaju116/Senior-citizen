import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Collapse from "react-bootstrap/Collapse";
import Swal from "sweetalert2";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Profile() {
  const [open, setOpen] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newPassword, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const [profile, setProfile] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
    address: "",
  });
  const [id, setId] = useState(null);

  const handleProfile = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/editUser/${id}`,
        profile
      );

      if (response.status >= 200 && response.status <= 300) {
        console.log(response);
        Swal.fire({
          title: "Updated Successfully",
          icon: "success",
        });
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(response.data.updatedUser)
        );
        setIsUpdate(true);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Something went wrong",
        icon: "warning",
      });
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"));
      if (user) {
        setId(user._id);
        setProfile({
          ...profile,
          username: user.username || "",
          email: user.email || "",
          address: user.address || "",
          number: user.number || "",
          password: user.password || "",
        });
      }
    }
  }, [isUpdate]);

  const hadnleRestPassword = async () => {
    const { password, confirmPassword } = newPassword;
    if (password === confirmPassword) {
      const response = await axios.post(
        `http://localhost:5000/resetUserPassword/${id}`,
        newPassword
      );

      if (response.status >= 200 && response.status <= 300) {
        setPassword({
          password: "",
          confirmPassword: "",
        });
        Swal.fire({
          title: "Password Changed",
          icon: "success",
        });
        console.log(response.data);
        handleClose();
      }
    } else {
      Swal.fire({
        title: "Check Your Password",
        icon: "warning",
      });
    }
  };

  console.log(profile);
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center pt-5">
        <div className="card shadow p-5 w-50 mt-5">
          <div className="d-flex justify-content-between">
            <h3> Profile</h3>
            <button className="btn " onClick={() => setOpen(!open)}>
              <i className="fa-solid fa-arrow-up-from-bracket fa-rotate-180 ms-auto"></i>
            </button>
          </div>
          <Collapse in={open}>
            <div className="row justify-content-center">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="username"
                  className="form-control mt-3"
                  value={profile.username}
                  onChange={(e) =>
                    setProfile({ ...profile, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="email"
                  className="form-control mt-3"
                  value={profile.email}
                  disabled
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="phone no"
                  className="form-control mt-3"
                  value={profile.number}
                  onChange={(e) =>
                    setProfile({ ...profile, number: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control mt-3"
                  value={profile.address}
                  onChange={(e) =>
                    setProfile({ ...profile, address: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <button className="btn  btn-warning mt-3" onClick={handleShow}>
                  Change Password
                </button>
              </div>
              <button
                type="button"
                className="btn btn-warning mt-3"
                onClick={() => handleProfile()}
              >
                Update
              </button>
            </div>
          </Collapse>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "90%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              label="New Password"
              variant="filled"
              type="password"
              onChange={(e) =>
                setPassword({ ...newPassword, password: e.target.value })
              }
            />
            <TextField
              id="filled-basic"
              label="Confirm Password"
              variant="filled"
              type="password"
              onChange={(e) =>
                setPassword({ ...newPassword, confirmPassword: e.target.value })
              }
            />
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={hadnleRestPassword}>
            Change
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Profile;
