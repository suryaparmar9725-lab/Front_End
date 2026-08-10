import React from 'react'

const UserProfile = ({ username, followers, profilePic }) => {
  return (
    <div>
           <div
      style={{
        width: "280px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={profilePic}
        alt={username}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #E1306C",
        }}
      />

      <h2>{username}</h2>

      <p style={{ color: "#555" }}>
        <strong>{followers}</strong> Followers
      </p>

      <button
        style={{
          backgroundColor: "#0095F6",
          color: "#fff",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Follow
      </button>
    </div>
      
    </div>
  )
}

export default UserProfile
