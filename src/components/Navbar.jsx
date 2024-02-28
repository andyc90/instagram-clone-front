import React from "react";
import "../styles/Navbar.css";
import {
  Home,
  Search,
  Compass,
  Video,
  Heart,
  PlusSquare,
  Send,
} from "lucide-react";

export default function Navbar({ profileImage }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/instaclone_logo.png" alt="Logo" />
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
          <Send />
          <span>Messages</span>
        </div>
        <div className="nav-icon">
          <Heart />
          <span>Notifications</span>
        </div>
        <div className="nav-icon">
          <PlusSquare />
          <span>Create</span>
        </div>
        <div className="nav-icon">
          <img src={profileImage} alt="Profile Image" />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
}
