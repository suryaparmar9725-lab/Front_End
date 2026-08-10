import React, { useState } from 'react'

const LikeButton = () => {
         const [likes, setLikes] = useState(0);
           const handleLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div>
        <div
      style={{
        textAlign: "center",
        margin: "20px",
      }}
    >
      <button
        onClick={handleLike}
        style={{
          fontSize: "18px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#ff4d6d",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        ❤️ Like
      </button>

      <h3>Likes: {likes}</h3>
    </div>
    </div>
  )
}

export default LikeButton
