import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  const handleLogin = async (e, formData) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:5001/users/userLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.user) {
        setUser(data.user);
        console.log(data.user);
        navigate("/");
      } else {
        if (response.status === 401) {
          alert("Error: Invalid credentials");
        }
        console.log("Login failed:", data);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const handleRegister = async (e, formData) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:5001/users/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Register successful:", data);
        navigate("/login");
      } else {
        alert(`Error: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Register failed:", error.message);
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/register"
          element={<Register handleRegister={handleRegister} />}
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
