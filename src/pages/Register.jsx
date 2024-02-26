import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

const Register = ({ handleRegister }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="background">
      <div className="register-container">
        <img src="/instagram_logo.png" alt="" />
        <form onSubmit={(e) => handleRegister(e, formData)}>
          <input
            type="text"
            name="username"
            className="register-input"
            placeholder="Username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <br />
          <input
            type="email"
            name="email"
            className="register-input"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <br />
          <input
            type="password"
            name="password"
            className="register-input"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <br />
          <button type="submit" className="register-button">
            Sign Up
          </button>
        </form>
      </div>
      <div className="no-account-container">
        <p>
          Have an account?{" "}
          <Link className="user-login-button" to="/login">
            Log In.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
