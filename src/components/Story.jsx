import React from "react";
import "../styles/Story.css";

export default function Story({ profileImage, profileName }) {
  return (
    <div className="Story">
      <img src={profileImage} alt="" />
      <span>{profileName.substring(0, 10) + "..."}</span>
    </div>
  );
}
