import React from "react";
import "../styles/Logout.css";
import { useNavigate } from "react-router-dom";

export default function Logout({ profileImage, user, setUser }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };
  return (
    <div className="logout-container">
      <div className="logout-content">
        <img src={profileImage} alt="Profile Image" />
        <div className="name-container">
          <span className="username">{user.username}</span>
          <span className="email">{user.email}</span>
        </div>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
