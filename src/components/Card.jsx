import React, { useState, useEffect } from "react";
import "../styles/Card.css";
import { Heart, MessageCircle, Bookmark, Send } from "lucide-react";
import { comments } from "../data/commentsData";

export default function Card({ profileImage, profileName, Location, image }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [randomComment, setRandomComment] = useState("");
  const [newComment, setNewComment] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(false);

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

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setCommentCount(commentCount + 1);
      setNewComment("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleCommentSubmit();
    }
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
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
        <Bookmark
          className={`bookmark-icon ${isBookmarked ? "bookmarked" : ""}`}
          onClick={handleBookmarkClick}
        />
      </div>
      <div className="content">
        <span>
          {likes} {likes === 1 ? "like" : "likes"}
        </span>
        <p>
          <span className="content-profileName">{profileName}</span>
          {randomComment}
        </p>
        <a className="">View all {commentCount} comments</a>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}
