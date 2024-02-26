import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "../styles/Home.css";

export default function Home({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return user ? (
    <div className="home-container">
      You are logged in as{" "}
      <span className="username-text">{user.username}</span>.
    </div>
  ) : null;
}
