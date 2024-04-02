import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Collapse from "react-bootstrap/Collapse";
import Swal from "sweetalert2";
import axios from "axios";

function Profile() {
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [profile, setProfile] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    number: "",
    address: "",
  });

  const handleProfile = async () => {
    const reqBody = new FormData();
    reqBody.append("username", profile.username);
    reqBody.append("email", profile.email);
    reqBody.append("password", profile.password);
    reqBody.append("number", profile.number);
    reqBody.append("address", profile.address);

    try {
      const response = await axios.post(
        `http://localhost:5000/editUser/${profile.id}`,
        reqBody
      );

      if (response.status >= 200 && response.status <= 300) {
        console.log(response);
        Swal.fire({
          title: "Updated Successfully",
          icon: "success",
        });
        sessionStorage.setItem('existingUser', JSON.stringify(response.data.updatedUser));
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
        setProfile({
          ...profile,
          id: user._id || "",
          username: user.username || "",
          email: user.email || "",
          address: user.address || "",
          number: user.number || "",
          password: user.password || "",
        });
      }
    }
  }, [isUpdate]);

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
                <input
                  type="password"
                  placeholder="Password"
                  disabled
                  className="form-control mt-3"
                  value={profile.password}
                  onChange={(e) =>
                    setProfile({ ...profile, password: e.target.value })
                  }
                />
              </div>
              <button
                type="button"
                className="btn btn-warning mt-3"
                onClick={handleProfile}
              >
                Update
              </button>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default Profile;
