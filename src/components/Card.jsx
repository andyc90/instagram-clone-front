import React from "react";
import "../styles/Card.css";
import { Heart, MessageCircle, Bookmark, MousePointer2 } from "lucide-react";

export default function Card({ profileImage, profileName, Location, image }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={profileImage} alt="" />
        <div>
          <span className="profile-name">{profileName}</span>
          <span className="location">{Location}</span>
        </div>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="icon-container">
        <div>
          <Heart />
          <MessageCircle className="message-icon" />
          <MousePointer2 className="share-icon" />
        </div>
        <Bookmark className="bookmark-icon" />
      </div>
      <div className="content">
        <span>10 likes</span>
        <p>
          <span className="content-profileName">{profileName}</span>Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <p>View all 3 comments</p>
        <input type="text" placeholder="Add a comment..." />
      </div>
    </div>
  );
}
