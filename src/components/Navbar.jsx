import React from "react";
import "../styles/Navbar.css";
import {
  Home,
  Search,
  Compass,
  Video,
  MessageSquare,
  Bell,
  Edit,
} from "lucide-react";

export default function Navbar({ profileImage, profileName }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/instagram_logo.png" alt="Logo" />
      </div>
      <div className="nav-icons">
        <div className="nav-icon active">
          <Home />
          <span>Home</span>
        </div>
        <div className="nav-icon">
          <Search />
          <span>Search</span>
        </div>
        <div className="nav-icon">
          <Compass />
          <span>Explore</span>
        </div>
        <div className="nav-icon">
          <Video />
          <span>Reels</span>
        </div>
        <div className="nav-icon">
          <MessageSquare />
          <span>Messages</span>
        </div>
        <div className="nav-icon">
          <Bell />
          <span>Notifications</span>
        </div>
        <div className="nav-icon">
          <Edit />
          <span>Create</span>
        </div>
      </div>
      <div className="nav-icon">
        <img src={profileImage} alt="Profile Image" />
        <span>Profile</span>
      </div>
    </div>
  );
}
