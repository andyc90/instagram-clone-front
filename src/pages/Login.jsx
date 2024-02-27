import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="background">
      <div className="login-container">
        <img src="/instaclone_logo.png" alt="" />
        <form onSubmit={(e) => handleLogin(e, formData)}>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
          <br />

          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button type="submit" className="login-button">
            Log In
          </button>
          <br />
        </form>
      </div>
      <div className="no-account-container">
        <p>
          Don't have an account?{" "}
          <Link className="create-account-button" to="/register">
            Sign Up.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
