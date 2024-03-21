import React from "react";
import './AdminLogin.css'
import { MDBInput } from 'mdb-react-ui-kit';
function AdminLogin() {
  

  const login = () => {
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(6, 108, 224),  rgb(14, 48, 122));";
    document.querySelector(".button-2").style.cssText = "display: none";
    document.querySelector(".button-1").style.cssText = "display: block";
  };
  return (
    <div className="containeradmin">
      {/* Data or Content */}
      <div className="box-1">
        <div className="content-adminholder">
        <h2 className="fade-in"></h2><h2 className="fade-in">
          <span style={{ '--index': 1 }}>H</span>
          <span style={{ '--index': 2 }}>e</span>
          <span style={{ '--index': 3 }}>l</span>
          <span style={{ '--index': 4 }}>l</span>
          <span style={{ '--index': 5 }}>o</span>
          <span style={{ '--index': 6 }}>!</span>
          <span style={{ '--index': 7 }}>&nbsp;</span>
          <span style={{ '--index': 8 }}>A</span>
          <span style={{ '--index': 9 }}>d</span>
          <span style={{ '--index': 10 }}>m</span>
          <span style={{ '--index': 11 }}>i</span>
          <span style={{ '--index': 12 }}>n</span>
        </h2>
    
        
         
          <button className="button-2" onClick={login}>
            Login
          </button>
        </div>
      </div>

      {/* Forms */}
      <div className="box-2">
       
        <div className="login-form-container">
          <h1>Login Form</h1>
          <div ><MDBInput label='UserName' id='form1' width={50}
           type='text' /> </div>
          
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <br />
          <br />
          <button className="login-button" type="button">
            Login
          </button>
        </div>

        {/* Signup Form */}
        <div className="signup-form-container">
          <h1>Sign Up Form</h1>
          <input type="text" placeholder="Username" className="input-field" />
          <br />
          <br />
          <input type="email" placeholder="Email" className="input-field" />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <br />
          <br />
          <button className="signup-button" type="button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
