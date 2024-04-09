import React, { useState } from "react";
import "./userlogin.css";
import { Link, useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../../Services/allApi";
import Swal from "sweetalert2";

function Login({ register }) {
  const registerForm = register ? true : false;
  const navigate = useNavigate();

  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
    address: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    const { username, email, password, number, address } = userdata;

    if (!username || !email || !password || !number || !address) {
      Swal.fire({
        title: "Please fill the form completly",
        icon: "warning",
      });
    } else {
      try {
        const result = await registerApi(userdata);
        console.log(result);
        if (result.status >= 200 && result.status <= 300) {
          Swal.fire({
            title: "Registration Successfull",
            icon: "success",
          });
          setUserdata({
            username: "",
            email: "",
            password: "",
            number: "",
            address: "",
          });
          navigate("/user-login");
        }
        if (result.response.status === 406) {
          Swal.fire({
            title: "Email Already Taken",
            icon: "warning",
          });
        } else {
          Swal.fire({
            title: "Something Went Wrong check Connection",
            icon: "warning",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = userdata;
    if (!email || !password) {
      Swal.fire({
        title: "Please fill the form completly",
        icon: "warning",
      });
    } else {
      try {
        const result = await loginApi(userdata);
        console.log(result);

        if (result.status >= 200 && result.status <= 300) {
          Swal.fire({
            title: "Login Successfull",
            icon: "Success",
          });
          sessionStorage.setItem("token", result.data.token);
          sessionStorage.setItem(
            "existingUser",
            JSON.stringify(result.data.existingUser)
          );
          setUserdata({
            email: "",
            password: "",
          });
          navigate("/user-home");
        } else {
          Swal.fire({
            title: "Wrong Email or password",
            icon: "warning",
          });
          console.log(result.response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Something went wrong",
          icon: "warning",
        });
      }
    }
  };
  console.log(userdata);

  return (
    <>
      <div className="containeradmin">
        {/* Data or Content */}
        <div className="box-1">
          <div className="content-adminholder">
            <h2 className="fade-in"></h2>
            <h2 className="fade-in">
              <span style={{ "--index": 1 }}>H</span>
              <span style={{ "--index": 2 }}>e</span>
              <span style={{ "--index": 3 }}>l</span>
              <span style={{ "--index": 4 }}>l</span>
              <span style={{ "--index": 5 }}>o</span>
              <span style={{ "--index": 6 }}>!</span>
              <span style={{ "--index": 7 }}>&nbsp;</span>
              <span style={{ "--index": 8 }}>U</span>
              <span style={{ "--index": 9 }}>s</span>
              <span style={{ "--index": 10 }}>e</span>
              <span style={{ "--index": 11 }}>r</span>
            </h2>
          </div>
        </div>

        {/* Forms */}
        <div className="box-2">
          <div className="login-form-container">
            {registerForm ? <h1>Register Form</h1> : <h1>Login Form</h1>}
            {registerForm ? (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="input-field"
                  value={userdata.username}
                  onChange={(e) =>
                    setUserdata({ ...userdata, username: e.target.value })
                  }
                />
              </div>
            ) : null}

            <div className="mb-4">
              <input
                type="email"
                placeholder="email"
                className="input-field"
                value={userdata.email}
                onChange={(e) =>
                  setUserdata({ ...userdata, email: e.target.value })
                }
              />
            </div>

            {registerForm ? (
              <div className="mb-4">
                <input
                  type="number"
                  placeholder="Phone no"
                  className="input-field"
                  value={userdata.number}
                  onChange={(e) =>
                    setUserdata({ ...userdata, number: e.target.value })
                  }
                />
              </div>
            ) : null}
            {registerForm ? (
              <div className="mb-4">
                <textarea
                  name=""
                  id=""
                  cols="28"
                  rows="3"
                  placeholder="Address"
                  className="rounded"
                  value={userdata.address}
                  onChange={(e) =>
                    setUserdata({ ...userdata, address: e.target.value })
                  }
                ></textarea>
              </div>
            ) : null}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={userdata.password}
                onChange={(e) =>
                  setUserdata({ ...userdata, password: e.target.value })
                }
              />
            </div>

            {registerForm ? (
              <div className="mb-5">
                <button
                  className="login-button"
                  type="button"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            ) : (
              <div className="mb-4">
                <button
                  className="login-button"
                  type="button"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            )}
          </div>
          {registerForm ? (
            <div className="text-center">
              <p>
                Already have an Account?{" "}
                <Link
                  to={"/user-login"}
                  style={{ textDecoration: "none", color: "navyblue" }}
                >
                  Login
                </Link>{" "}
                here
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p>
                Don't have an Account?{" "}
                <Link
                  to={"/user-register"}
                  style={{ textDecoration: "none", color: "navyblue" }}
                >
                  Register
                </Link>{" "}
                here
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
