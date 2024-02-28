import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import { Heart, MessageCircle, Bookmark, Send } from "lucide-react";
import { comments } from "../data/commentsData";

export default function Card({ profileImage, profileName, Location, image }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [randomComment, setRandomComment] = useState("");

  useEffect(() => {
    setLikes(Math.floor(Math.random() * 100));
    setCommentCount(Math.floor(Math.random() * 100));
    setRandomComment(comments[Math.floor(Math.random() * comments.length)]);
  }, []);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

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
          <button onClick={handleLikeClick} className={isLiked ? "liked" : ""}>
            <Heart />
          </button>
          <MessageCircle className="message-icon" />
          <Send />
        </div>
        <Bookmark className="bookmark-icon" />
      </div>
      <div className="content">
        <span>
          {likes} {likes === 1 ? "like" : "likes"}
        </span>
        <p>
          <span className="content-profileName">{profileName}</span>
          {randomComment}
        </p>
        <p>View all {commentCount} comments</p>
        <input type="text" placeholder="Add a comment..." />
      </div>
    </div>
  );
}
